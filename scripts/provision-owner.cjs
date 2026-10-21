// Executar apenas pelo proprietrio autenticado no Firebase CLI. No contm credenciais.
const auth=require('../node_modules/firebase-tools/lib/auth');
(async()=>{
 const account=auth.getGlobalDefaultAccount();
 const tokens=await auth.getAccessToken(account.tokens.refresh_token,['https://www.googleapis.com/auth/cloud-platform']);
 const headers={Authorization:'Bearer '+tokens.access_token,'Content-Type':'application/json'};
 const project='recebemais-online';
 async function api(url,method='GET',body){const response=await fetch(url,{method,headers,body:body?JSON.stringify(body):undefined});const json=await response.json();if(!response.ok)throw Error(JSON.stringify(json));return json;}
 const result=await api(`https://identitytoolkit.googleapis.com/v1/projects/${project}/accounts:batchGet?maxResults=100`);
 const user=(result.users||[]).find(u=>u.email==='vinimurilo@gmail.com');
 if(!user)throw Error('Conta do proprietário no encontrada');
 const base=`https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents`;
 const encode=obj=>({fields:Object.fromEntries(Object.entries(obj).map(([k,v])=>[k,typeof v==='boolean'?{booleanValue:v}:{stringValue:v}]))});
 await api(base+'/empresas/recebemais','PATCH',encode({nome:'RecebeMais',ativa:true,criadoPorUid:user.localId}));
 await api(base+'/usuarios/'+user.localId,'PATCH',encode({nome:'Murilo',email:user.email,papel:'admin',empresaId:'recebemais',superAdmin:true,ativo:true}));
 const cfgURL=`https://identitytoolkit.googleapis.com/admin/v2/projects/${project}/config`;
 const cfg=await api(cfgURL);
 await api(cfgURL+'?updateMask=authorizedDomains','PATCH',{authorizedDomains:[...new Set([...(cfg.authorizedDomains||[]),'vinimurilo21-bit.github.io','localhost'])]});
 console.log('Proprietrio provisionado:',user.email,'UID:',user.localId);
})().catch(e=>{console.error(e.message);process.exit(1)});
