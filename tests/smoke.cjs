const assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
 const page=await browser.newPage();
 for(const name of ['index.html','RecebeMais.html']){
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://localhost:8080/'+name,{waitUntil:'networkidle'});
  console.log(name,await page.title(),'project:',await page.evaluate(()=>firebase.app().options.projectId),'errors:',errors);
  assert.deepEqual(errors,[]);
  assert.equal(await page.evaluate(()=>firebase.app().options.projectId),'recebemais-online');
  await page.screenshot({path:'tests/'+name+'.png',fullPage:true});
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
