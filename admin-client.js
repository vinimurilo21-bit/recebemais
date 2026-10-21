/* Backend Spark: operaes autenticadas passam pelas regras do Firestore. */
async function recebeMaisRequest(url, options={}) {
 const reply=(status,body)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json'}});
 try {
  const path=new URL(url,location.href).pathname;
  if(path.endsWith('/health'))return reply(200,{ok:true,mode:'firebase-spark'});
  const db=firebase.firestore(),user=firebase.auth().currentUser;
  if(!user)return reply(401,{erro:'Faça login novamente.'});
  const own=await db.collection('usuarios').doc(user.uid).get(), me=own.data();
  if(!me||!me.ativo)return reply(403,{erro:'Acesso no provisionado ou inativo.'});
  const body=options.body?JSON.parse(options.body):{};
  if(path.endsWith('/api/admin/criar-usuario')) {
   if(me.papel!=='admin'&&!me.superAdmin)throw Error('Apenas administradores.');
   const {nome,email,senha,papel}=body;
   const empresaId=me.superAdmin?(body.empresaId||me.empresaId):me.empresaId;
   if(!nome||!email||!senha||senha.length<8||!['admin','gestor','funcionario'].includes(papel))throw Error('Confira os dados. A senha deve ter 8 ou mais caracteres.');
   if(!me.superAdmin&&papel==='admin')throw Error('Apenas super admin cria administradores.');
   const secondary=firebase.initializeApp(firebase.app().options,'cadastro-'+Date.now());
   try {
    await secondary.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
    const credential=await secondary.auth().createUserWithEmailAndPassword(email,senha);
    await db.collection('usuarios').doc(credential.user.uid).set({nome,email,papel,empresaId,superAdmin:false,ativo:true,criadoEm:firebase.firestore.FieldValue.serverTimestamp(),criadoPorUid:user.uid});
    return reply(201,{email,empresaId,uid:credential.user.uid});
   } finally {await secondary.auth().signOut();await secondary.delete();}
  }
  const status=path.match(/\/api\/admin\/usuario\/([^/]+)\/status$/);
  if(status){
   if(!me.superAdmin||status[1]===user.uid||typeof body.ativo!=='boolean')throw Error('Operaão no permitida.');
   await db.collection('usuarios').doc(status[1]).update({ativo:body.ativo});
   return reply(200,{ok:true});
  }
  if(path.endsWith('/api/assistente'))throw Error('IA no ativada na nova base.');
  if(path.endsWith('/api/nfe/consultar'))throw Error('Consulta automtica  Sefaz no ativada. Importe o PDF localmente.');
  throw Error('Operao disponvel apenas no console Firebase nesta verso gratuita.');
 } catch(error){return reply(400,{erro:error.message});}
}
