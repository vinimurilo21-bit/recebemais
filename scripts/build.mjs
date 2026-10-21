import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','RecebeMais.html','script.js','admin-client.js','styles.css','sw.js','.nojekyll']) await copyFile(file,`dist/${file}`);
