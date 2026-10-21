const {onRequest}=require('firebase-functions/v2/https');
const admin=require('firebase-admin');
const express=require('express');
admin.initializeApp();
const db=admin.firestore(), app=express();
const origins=new Set(['https://vinimurilo21-bit.github.io','https://recebemais-online.web.app','https://recebemais-online.firebaseapp.com','http://localhost:8080']);
app.use((req,res,next)=>{
 const origin=req.get('origin');
 if(origin&&!origins.has(origin))return res.status(403).json({erro:'Origem no autorizada'});
 if(origin)res.set('Access-Control-Allow-Origin',origin);
 res.set('Vary','Origin');res.set('Access-Control-Allow-Headers','Authorization,Content-Type');
 res.set('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
 if(req.method==='OPTIONS')return res.sendStatus(204);next();
});
app.use(express.json({limit:'2mb'}));
app.get('/health',(req,res)=>res.json({ok:true,project:'recebemais-online'}));
app.use(async(req,res,next)=>{
 try{
  const token=(req.get('authorization')||'').replace(/^Bearer /,'');
  req.user=await admin.auth().verifyIdToken(token,true);
  const snap=await db.collection('usuarios').doc(req.user.uid).get();
  if(!snap.exists||snap.data().ativo===false)return res.status(403).json({erro:'Acesso no provisionado ou inativo'});
  req.profile=snap.data();next();
 }catch(e){res.status(401).json({erro:'Faa login novamente'});}
});
const route=fn=>(req,res,next)=>Promise.resolve(fn(req,res)).catch(next);
const isSuper=req=>req.profile.superAdmin===true;
const isAdmin=req=>isSuper(req)||req.profile.papel==='admin';
const fail=(status,message)=>Object.assign(new Error(message),{status});
app.post('/api/admin/criar-usuario',route(async(req,res)=>{
 if(!isAdmin(req))throw fail(403,'Apenas administradores');
 const {nome,email,senha,papel='funcionario'}=req.body;
 const empresaId=isSuper(req)?(req.body.empresaId||req.profile.empresaId):req.profile.empresaId;
 if(!nome||!email||typeof senha!=='string'||senha.length<8||!empresaId||!['admin','gestor','funcionario'].includes(papel))throw fail(400,'Confira os dados. Senha mínima: 8 caracteres');
 if(!isSuper(req)&&papel==='admin')throw fail(403,'Somente super admin cria administradores');
 if(!(await db.collection('empresas').doc(empresaId).get()).exists)throw fail(400,'Empresa no encontrada');
 const user=await admin.auth().createUser({email,password:senha,displayName:nome});
 await db.collection('usuarios').doc(user.uid).set({nome,email,papel,empresaId,superAdmin:false,ativo:true,criadoEm:admin.firestore.FieldValue.serverTimestamp()});
 res.status(201).json({uid:user.uid,email,empresaId});
}));
app.post('/api/admin/usuario/:uid/status',route(async(req,res)=>{
 if(!isSuper(req)||req.params.uid===req.user.uid)throw fail(403,'Operaço no permitida');
 if(typeof req.body.ativo!=='boolean')throw fail(400,'Status invlido');
 await admin.auth().updateUser(req.params.uid,{disabled:!req.body.ativo});
 await admin.auth().revokeRefreshTokens(req.params.uid);
 await db.collection('usuarios').doc(req.params.uid).update({ativo:req.body.ativo});res.json({ok:true});
}));
app.post('/api/admin/usuario/:uid/senha',route(async(req,res)=>{
 if(!isSuper(req))throw fail(403,'Apenas super admin');
 if(typeof req.body.novaSenha!=='string'||req.body.novaSenha.length<8)throw fail(400,'Senha mnima: 8 caracteres');
 await admin.auth().updateUser(req.params.uid,{password:req.body.novaSenha});
 await admin.auth().revokeRefreshTokens(req.params.uid);res.json({ok:true});
}));
app.delete('/api/admin/usuario/:uid',route(async(req,res)=>{
 if(!isSuper(req)||req.params.uid===req.user.uid)throw fail(403,'Operaço no permitida');
 await admin.auth().deleteUser(req.params.uid);
 await db.collection('usuarios').doc(req.params.uid).delete();res.json({ok:true});
}));
app.post('/api/admin/excluir-historico-contagens',route(async(req,res)=>{
 if(!isAdmin(req))throw fail(403,'Apenas administradores');
 const empresaId=req.profile.empresaId;let totalExcluidos=0;
 for(const collection of ['pendentes','historico_envios','historico_app_contagens']){
  for(;;){const snap=await db.collection(collection).where('empresaId','==',empresaId).limit(300).get();if(snap.empty)break;
   const batch=db.batch();snap.docs.forEach(d=>batch.delete(d.ref));await batch.commit();totalExcluidos+=snap.size;}
 }
 res.json({ok:true,totalExcluidos});
}));
app.post('/api/assistente',(req,res)=>res.status(503).json({erro:'Assistente IA ainda no configurado nesta nova base.'}));
app.all('/api/nfe/consultar',(req,res)=>res.status(503).json({erro:'Consulta Sefaz requer configurar um provedor fiscal. Importe o PDF localmente.'}));
app.use((req,res)=>res.status(404).json({erro:'Rota não encontrada'}));
app.use((err,req,res,next)=>{console.error(err.code||err.message);res.status(err.status||400).json({erro:err.status?err.message:'Confira os dados e tente novamente.'});});
exports.api=onRequest({region:'us-central1',maxInstances:2,memory:'256MiB',timeoutSeconds:120},app);
