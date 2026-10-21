# RecebeMais
Aplicao web de conferncia de notas fiscais, extrao de PDF/planilhas, contagens e dashboard. Frontend esttico com Firebase Authentication e Firestore.

## Rodar localmente
```sh
python3 -m http.server 8080
```
Abra http://localhost:8080 (extrator) ou http://localhost:8080/RecebeMais.html (recebimento).

## Publicao
GitHub Pages: branch `main`, pasta raiz. Somente HTML, JS e CSS so necessrios em produão. Os servios externos continuam independentes do GitHub Pages.

## Integraes
- Firebase existente: `recebemais-340ea` (configurao web pblica nos dois clientes).
- Backend IA e consulta NF-e: https://recebemais.online/ia  no includo no material recebido.
- Regras: `firestore.rules`; ndice: `firestore.indexes.json`. Publicar apenas aps reviso/testes e acesso ao projeto Firebase correto.
- `styles.css` recuperado do site original, pois no estava no ZIP enviado.

## Segurana
Nunca versionar .env, credenciais de servio ou tokens. Autorizao depende das regras Firestore; ocultar botes no protege o banco. O arquivo LEIAME-PROJETO-RECEBEMAIS.txt contm o histrico funcional.
