# RecebeMais Online
Conferncia de notas fiscais, extrao de PDF/planilhas, contagens e dashboard.

## Endereos
- Site: https://vinimurilo21-bit.github.io/recebemais/
- App de recebimento: https://vinimurilo21-bit.github.io/recebemais/RecebeMais.html
- Backend gratuito: Firebase Authentication e Cloud Firestore, projeto `recebemais-online` (Spark).
- Base antiga `recebemais-340ea` néo  utilizada nem alterada.

## Acesso
Conta inicial provisionada como superadministrador: e-mail escolhido pelo proprietrio no console Firebase. A senha fica somente no Authentication, no neste repositrio.
Na Administrao  possvel criar usurios, ativar/inativar acesso aos dados e enviar redefinio de senha por e-mail. A inativaço  aplicada pelas regras do Firestore, no bloqueia o login do Authentication. Excluso de contas  feita pelo proprietrio no console Firebase.

## Rodar e testar
```sh
npm install
npm run start
# http://localhost:8080
npm test
```
O teste usa Google Chrome instalado em `/usr/bin/google-chrome`.

## Publicao
O workflow `.github/workflows/pages.yml` monta `dist/` com uma lista explcita de arquivos públicos e publica no GitHub Pages a cada push na main. Arquivos .env, ZIP, documentaão, testes, scripts de administrao e cãdigo de backend no entram na publicao.
A configurao web  obtida pelo endpoint oficial Firebase Hosting `__/firebase/init.js`, sem credenciais administrativas no navegador.
Para publicar regras: Node 22 e Firebase CLI autenticada, `npx firebase-tools deploy --only firestore --project recebemais-online`.

## Segurana e limites do plano gratuito
Regras exigem cadastro ativo e separam empresas. Usurios no podem alterar seu papel, empresa, status ou se tornar superadministradores. A conta inicial  provisionada somente pelo proprietrio autenticado no CLI (`scripts/provision-owner.cjs`), nunca por cadastro pblico.
Firebase pode permitir cadastro de contas Auth pela API pblica, mas contas sem perfil autorizado no acessam os dados.
IA e consulta automtica de NF-e/Sefaz não esto configuradas nesta nova base. Importe PDFs/planilhas localmente. Limpeza em massa e excluso de usurios so realizadas pelo console. `backend/`  um esboo opcional de Cloud Functions, NO publicado e no necessrio no Spark.
Respeite as cotas Spark (leituras, gravaçes e autenticao). No foi ativado o plano Blaze.
