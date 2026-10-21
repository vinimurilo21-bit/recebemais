/* =====================================================================
   ÍCONES (SVG inline, estilo outline — substituem os emojis usados na
   interface). Cada valor já é a tag SVG completa, pronta pra ser
   inserida via innerHTML/template literal; usam stroke="currentColor"
   pra herdar a cor do elemento pai (funciona junto com a propriedade
   CSS "color" de cada botão/badge, sem precisar fixar cor no ícone).
   ===================================================================== */
const ICONS = {
  menu: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A4 4 0 0 0 6.5 19h11z"/></svg>',
  warning: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  edit: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><polyline points="20 6 9 17 4 12"/></svg>',
  close: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  plus: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
  barChart: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  search: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  key: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>',
  folder: '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  chevronUp: '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
};

/* =====================================================================
   CONFIGURAÇÕES
   ===================================================================== */
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// Palavras-chave usadas para localizar a linha de cabeçalho da tabela de
// produtos dentro do DANFE. As chaves são o nome lógico da coluna e os
// valores são variações de texto (já sem acento, em maiúsculas) que podem
// aparecer impressas no cabeçalho daquela coluna.
const HEADER_KEYWORDS = {
  codigo:   ["CODIGO", "COD PRODUTO", "COD.PRODUTO", "COD. PROD", "COD PROD", "COD.PROD", "CODPROD", "REFERENCIA"],
  descricao:["DESCRICAO DO PRODUTO", "DESCRICAO DOS PRODUTOS", "DESCRICAO DO PROD", "DESCRICAO"],
  ncm:      ["NCM/SH", "NCM"],
  cst:      ["CST", "CSOSN"],
  cfop:     ["CFOP"],
  // A coluna de unidade costuma ter um cabeçalho bem curto (UN, UND, UM,
  // UNID) — por isso é comparada por igualdade exata (ver
  // detectHeaderColumns), nunca por "contém", para não casar por engano
  // com palavras maiores que também têm essas letras (ex.: "UN" dentro
  // de "V. UNITÁRIO").
  unidade:  ["UNID", "UND", "UN", "UM", "UD"],
  quantidade:["QUANT", "QTDE", "QTD"],
  vlUnit:   ["VL.UNIT", "VALOR UNIT", "VLR UNIT", "V.UNIT", "VUNIT", "V.UNITARIO", "V. UNITARIO", "V UNITARIO", "V. UNIT"],
  vlTotal:  ["VL.TOTAL", "VALOR TOTAL", "VLR TOTAL", "V.TOTAL", "VTOTAL", "V. TOTAL", "V TOTAL"],
  ean:      ["EAN", "GTIN", "CODIGO DE BARRAS"],
};
// Campos cujo cabeçalho deve casar por IGUALDADE EXATA (após normalizar
// acentos/caixa), nunca por "contém" — evita falsos positivos quando o
// rótulo é curto/genérico e aparece como substring de outra coluna.
const EXACT_MATCH_FIELDS = new Set(["unidade"]);

// Marcadores de "ruído" da tabela que não são produtos: o título da
// seção ("DADOS DO(S) PRODUTO(S) / SERVIÇO(S)") e o próprio cabeçalho de
// colunas repetido em cada página da NF-e (quando a nota tem mais de uma
// folha, o DANFE reimprime o cabeçalho da tabela em cada página).
function looksLikeTableNoise(text){
  const upper = normKeyword(text);
  if (upper.includes("DADOS DO PRODUTO") || upper.includes("DADOS DOS PRODUTOS")) return true;
  if (upper.includes("CONTINUACAO") && upper.includes("PRODUTO")) return true;
  if (upper.includes("QUANT") && (upper.includes("CODIGO") || upper.includes("COD.") || upper.includes("COD PROD") || upper.includes("REFERENCIA"))){
    return true;
  }
  // Alguns layouts quebram o cabeçalho de colunas em 3+ linhas visuais,
  // com código, descrição/quantidade e rótulos de valores cada um numa
  // linha separada — cada pedaço precisa ser reconhecido de forma
  // independente (não só quando código+quantidade aparecem juntos),
  // senão sobra pedaço de cabeçalho repetido na página seguinte sendo
  // lido como se fosse dado de produto.
  if (/^CODIGO DO PROD/.test(upper)) return true;
  if (upper.includes("DESCRICAO DO PRODUTO") && (upper.includes("NCM") || upper.includes("CFOP"))) return true;
  if (upper.includes("UNITARIO") && upper.includes("TOTAL") && upper.includes("ICMS")) return true;
  return false;
}

// Palavras que indicam que a tabela de produtos terminou (rodapé do DANFE).
const FOOTER_KEYWORDS = [
  "CALCULO DO ISSQN", "CALCULO DO IMPOSTO", "DADOS ADICIONAIS",
  "INFORMACOES COMPLEMENTARES", "RESERVADO AO FISCO",
  "TRANSPORTADOR", "DADOS DO TRANSPORTE", "FATURA", "DUPLICATA",
  "IMPRESSO EM", "GERENCIADAS PELA", "POWERED BY",
  "BASE DE CALCULO", "AUTENTICIDADE",
];

const Y_TOLERANCE = 2.2; // tolerância (pt) para agrupar itens na mesma linha

/* =====================================================================
   ESTADO DA APLICAÇÃO
   ===================================================================== */
const state = {
  files: [],           // arquivos selecionados (File[])
  notes: [],           // uma entrada por nota fiscal encontrada (pode haver mais de uma por arquivo)
  consolidated: [],    // produtos consolidados globalmente (entre todas as notas)
  totalLinhas: 0,       // linhas de produto encontradas antes da consolidação, somando todas as notas
  sortKey: "referencia",
  sortDir: 1,
  searchTerm: "",
  editing: null,        // { uid, field: 'referencia' | 'descricao' } — célula em edição, se houver
};

let _uidCounter = 0;
function nextUid(){ return ++_uidCounter; }

/* =====================================================================
   UPLOAD
   ===================================================================== */
const uploadArea   = document.getElementById("uploadArea");
const fileInput    = document.getElementById("fileInput");
const fileInfoBar  = document.getElementById("fileInfoBar");
const fileInfoName = document.getElementById("fileInfoName");

function setupUploadArea(){
  uploadArea.addEventListener("click", () => fileInput.click());

  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadArea.classList.add("dragover");
  });
  uploadArea.addEventListener("dragleave", () => uploadArea.classList.remove("dragover"));
  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadArea.classList.remove("dragover");
    const files = e.dataTransfer.files;
    if (files && files.length) handleFilesSelected(Array.from(files));
  });

  fileInput.addEventListener("change", (e) => {
    const files = e.target.files;
    if (files && files.length) handleFilesSelected(Array.from(files));
  });

  document.getElementById("btnChangeFile").addEventListener("click", (e) => {
    e.stopPropagation();
    fileInput.click();
  });
}

function handleFilesSelected(files){
  clearMessages();
  const validos = [];
  const invalidos = [];
  for (const f of files){
    if (f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf")) validos.push(f);
    else invalidos.push(f.name);
  }
  if (invalidos.length){
    showWarn(`Ignorado(s) por não ser PDF: ${invalidos.join(", ")}`);
  }
  if (!validos.length){
    if (!invalidos.length) showError("Selecione um ou mais arquivos PDF válidos.");
    return;
  }

  // acumula com o que já tinha sido selecionado (permite adicionar mais
  // PDFs da mesma carga em uploads separados)
  state.files = state.files.concat(validos);
  renderFileInfoBar();
  processAllFiles(state.files);
}

function renderFileInfoBar(){
  const n = state.files.length;
  fileInfoName.textContent = n === 1
    ? state.files[0].name
    : `${n} arquivos selecionados`;
  fileInfoBar.classList.add("visible");
}

/* =====================================================================
   BUSCA POR CHAVE DE ACESSO (proxy → Sefaz → PDF → mesmo pipeline do upload)
   ===================================================================== */
// Proxy próprio (Cloudflare Worker) que repassa a consulta à API pública
// consultadanfe.com sem o bloqueio de CORS do navegador.
// URL do serviço de consulta de NF-e por chave de acesso. Migrado do
// Cloudflare Worker pro seu próprio backend Node.js (mesmo servidor do
// Assistente IA) — alguns provedores de internet têm bloqueado/tido
// instabilidade alcançando domínios "*.workers.dev" (confirmado com
// teste externo: o Worker em si está sempre online). Rodando aqui,
// evita depender desse domínio. (Valor fixo, não referencia
// IA_BACKEND_BASE_URL porque essa constante só é declarada mais
// adiante no arquivo — evita um erro de "usado antes de declarado".)
const NFE_PROXY_URL = "https://recebemais-online.firebaseapp.com/spark/api/nfe/consultar";

function setChaveAcessoStatus(text, kind){
  const el = document.getElementById("chaveAcessoStatus");
  el.textContent = text || "";
  el.className = "chave-status" + (text ? " visible" : "") + (kind ? " " + kind : "");
}

function base64ParaBlob(base64, mime){
  const binario = atob(base64);
  const bytes = new Uint8Array(binario.length);
  for (let i = 0; i < binario.length; i++) bytes[i] = binario.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

function setupChaveAcesso(){
  const input      = document.getElementById("chaveAcessoInput");
  const btnBuscar  = document.getElementById("btnBuscarChave");

  input.addEventListener("input", () => {
    // aceita apenas dígitos, já filtrando espaços/pontos que o usuário
    // eventualmente cole junto com a chave
    input.value = input.value.replace(/\D/g, "").slice(0, 44);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscarNfePorChave();
  });

  btnBuscar.addEventListener("click", buscarNfePorChave);

  async function buscarNfePorChave(){
    const chave = input.value.trim();

    if (!/^\d{44}$/.test(chave)){
      setChaveAcessoStatus("A chave precisa ter exatamente 44 dígitos numéricos.", "err");
      return;
    }

    btnBuscar.disabled = true;
    btnBuscar.textContent = "Buscando...";
    setChaveAcessoStatus("Consultando a Sefaz, aguarde...", "loading");

    try{
      // A chave de API não é mais editável pelo navegador — o backend
      // usa a variável de ambiente configurada no servidor (ver
      // server.js). O provedor também é sempre o fixo (MeuDanfe).
      const bodyRequisicao = { chave, provider: NFE_PROVIDER_FIXO };

      // 55s — precisa cobrir o pior caso: até 3 provedores tentados em
      // sequência, sendo que só a MeuDanfe sozinha pode levar até ~22s
      // (ela consulta em polling, esperando confirmação da Sefaz).
      const controle = new AbortController();
      const timeoutId = setTimeout(() => controle.abort(), 55000);
      let resp;
      try{
        resp = await recebeMaisRequest(NFE_PROXY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyRequisicao),
          signal: controle.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }

      const data = await resp.json().catch(() => null);

      if (!resp.ok || !data){
        // Log completo no console pra debug (a UI já mostra um resumo,
        // mas o objeto de resposta inteiro pode ter mais pistas).
        console.error("Falha na consulta por chave de acesso:", { status: resp.status, data });
        // O Worker tenta os dois provedores antes de desistir (ver
        // "tentativas" — um resumo de cada tentativa) — só chega aqui
        // se NENHUM dos dois funcionou. Mostra um resumo de cada
        // tentativa quando disponível; senão cai no formato antigo
        // (detail/message/upstreamStatus), pra manter compatibilidade
        // com versões mais antigas do Worker.
        let detalhesExtra = "";
        if (data && Array.isArray(data.tentativas) && data.tentativas.length){
          const nomes = { danferapida: "Danfe Rápida", consultadanfe: "ConsultaDanfe", meudanfe: "MeuDanfe" };
          detalhesExtra = " — " + data.tentativas
            .map((t) => `${nomes[t.provider] || t.provider}: ${t.error || t.motivo || "falhou"}`)
            .join("; ");
        } else if (data && (data.detail || data.message || data.upstreamStatus)){
          detalhesExtra = ` (${[data.detail, data.message, data.upstreamStatus ? `status upstream ${data.upstreamStatus}` : null].filter(Boolean).join(" · ")})`;
        }
        const msg = (data?.error || `Falha na consulta (HTTP ${resp.status}).`) + detalhesExtra;
        throw new Error(msg);
      }

      if (!data.pdf_base64){
        throw new Error("A nota foi encontrada, mas não veio um PDF na resposta. Tente novamente em instantes.");
      }

      // Registra o custo dessa consulta (R$ 0,03, cobrado pelos
      // provedores por busca de chave bem-sucedida) — alimenta o painel
      // de custos em Administração. Best-effort: se falhar, não
      // interrompe a importação da nota, que já está garantida.
      registrarEvento("NF_CONSULTA_CHAVE", { chaveNFe: chave, provider: data.provider || null, metadata: { custo: 0.03, fallback: !!data.fallback, preferido: NFE_PROVIDER_FIXO } });

      // O Worker tenta os dois provedores automaticamente — se quem
      // respondeu não foi o provedor escolhido em Configurações (ou
      // seja, o preferido falhou e ele caiu pro outro), avisa o usuário
      // sem travar o fluxo.
      if (data.fallback && data.provider){
        const nomes = { danferapida: "Danfe Rápida", consultadanfe: "ConsultaDanfe", meudanfe: "MeuDanfe" };
        let motivoExtra = "";
        if (Array.isArray(data.tentativasAnteriores) && data.tentativasAnteriores.length){
          motivoExtra = " — " + data.tentativasAnteriores
            .map((t) => `${nomes[t.provider] || t.provider}: ${t.error || t.motivo || "falhou"}`)
            .join("; ");
          console.warn("Provedor(es) preferido(s) falharam antes do fallback:", data.tentativasAnteriores);
        }
        showToast(`Encontrada via ${nomes[data.provider] || data.provider} (provedor preferido indisponível${motivoExtra})`);
      }

      setChaveAcessoStatus("Nota encontrada! Importando para o extrator...", "ok");

      const blob = base64ParaBlob(data.pdf_base64, "application/pdf");
      const nomeArquivo = `NFe_${chave}.pdf`;
      const file = new File([blob], nomeArquivo, { type: "application/pdf" });

      // alimenta o mesmo pipeline usado para PDFs anexados manualmente,
      // então tudo (OCR, consolidação, etc.) funciona exatamente igual
      input.value = "";
      handleFilesSelected([file]);
    } catch (err){
      console.error(err);
      // "Failed to fetch" / erro de rede genérico do navegador, ou o
      // tempo limite de 25s estourando — os dois são sinal de que a
      // requisição nem chegou a completar (diferente de "chave não
      // encontrada" ou outro erro que o Worker devolveu formatado).
      // Mensagem específica pra deixar claro que é conectividade, não a
      // chave em si.
      const ehFalhaDeRede = err.name === "AbortError" || (err instanceof TypeError && /fetch/i.test(err.message));
      const mensagem = ehFalhaDeRede
        ? "Não foi possível conectar ao serviço de consulta (tempo esgotado ou sem conexão). Verifique sua internet e tente de novo em instantes."
        : "Não foi possível buscar essa NF-e: " + err.message;
      setChaveAcessoStatus(mensagem, "err");
    } finally {
      btnBuscar.disabled = false;
      btnBuscar.textContent = "Buscar e importar";
    }
  }
}

/* =====================================================================
   PROCESSAMENTO / INDICADOR VISUAL
   ===================================================================== */
const processingPanel = document.getElementById("processingPanel");
const processingText  = document.getElementById("processingText");
const processingSub   = document.getElementById("processingSub");

function setProcessing(visible, text, sub){
  processingPanel.classList.toggle("visible", visible);
  if (text) processingText.textContent = text;
  processingSub.textContent = sub || "";
}

async function processAllFiles(files){
  document.getElementById("resultsSection").classList.remove("visible");
  document.getElementById("notesPanel").classList.remove("visible");
  clearMessages();
  state.notes = [];

  for (let i = 0; i < files.length; i++){
    const file = files[i];
    const prefixo = files.length > 1 ? `Arquivo ${i + 1}/${files.length}: ` : "";
    try{
      setProcessing(true, "Lendo documento...", `${prefixo}Abrindo ${file.name} no navegador.`);
      const { rows, fullText, usouOCR } = await readPDF(file, (pagina, total) => {
        setProcessing(
          true,
          "Lendo por OCR...",
          `${prefixo}Nenhum texto encontrado nesta página — lendo como imagem (página ${pagina}/${total}). Pode levar alguns segundos.`
        );
      });

      setProcessing(true, "Extraindo produtos...", `${prefixo}Procurando a(s) tabela(s) de produtos.`);
      await sleep(30);

      // um mesmo arquivo PDF pode conter mais de uma NF-e (ex.: várias
      // notas exportadas juntas em um único PDF pelo emissor). Cada
      // ocorrência do cabeçalho "RECEBEMOS DE..." marca o início de uma
      // nota nova, então o arquivo é dividido em uma "nota lógica" por
      // ocorrência antes de extrair os produtos de cada uma.
      const segmentos = splitRowsIntoNotes(rows);

      for (const seg of segmentos){
        const segFullText = seg.map((r) => r.text).join("\n");
        const nfInfo = extractNFHeaderInfo(segFullText);
        const extraction = extractProducts(seg, segFullText, nfInfo && nfInfo.cnpj);

        if (!extraction.products.length){
          state.notes.push({
            fileName: file.name,
            file,
            nfInfo,
            products: [],
            linhas: 0,
            erro: true,
            usouOCR,
            errorMsg: usouOCR
              ? "Não foi possível identificar os produtos nesta nota, mesmo após tentar OCR (a imagem pode estar ilegível ou o layout é muito diferente)."
              : "Não foi possível identificar os produtos nesta nota.",
          });
          continue;
        }

        state.notes.push({
          fileName: file.name,
          file,
          nfInfo,
          products: extraction.products,
          linhas: extraction.products.length,
          missingRef: extraction.missingRef,
          missingQty: extraction.missingQty,
          usouOCR,
          erro: false,
        });
      }
    } catch (err){
      console.error(err);
      state.notes.push({
        fileName: file.name,
        file,
        nfInfo: null,
        products: [],
        linhas: 0,
        erro: true,
        errorMsg: /OCR/i.test(err.message || "")
          ? err.message
          : "Não foi possível ler este PDF. Verifique se não está corrompido ou protegido.",
      });
    }
  }

  setProcessing(true, "Consolidando referências...", "Agrupando referências repetidas entre todas as notas e somando quantidades.");
  await sleep(30);
  finalizeProcessing();
}

function finalizeProcessing(){
  recomputeConsolidated();
  const notasOk = state.notes.filter((n) => !n.erro);

  setProcessing(false);

  const comErro = state.notes.filter((n) => n.erro);
  if (!notasOk.length){
    showError("Não foi possível identificar produtos em nenhum dos arquivos selecionados.");
  } else if (comErro.length){
    showWarn(`${comErro.length} de ${state.notes.length} nota(s) não puderam ser processadas — veja detalhes na lista de notas abaixo.`);
  } else {
    showSuccess(
      state.notes.length > 1
        ? `${state.notes.length} notas processadas e consolidadas com sucesso.`
        : "Nota processada com sucesso."
    );
  }

  const algumaBaixaConfianca = notasOk.some((n) => n.missingRef > 0 || n.missingQty > 0);
  if (algumaBaixaConfianca){
    showWarn("Alguns produtos não possuem referência ou quantidade identificável com segurança — revise as linhas marcadas.");
  }

  renderNotesList();
  if (state.consolidated.length){
    renderAll();
    document.getElementById("resultsSection").classList.add("visible");
  }
}

function sleep(ms){ return new Promise((r) => setTimeout(r, ms)); }

// Divide as linhas de um PDF em "notas lógicas": um mesmo arquivo pode
// conter mais de uma NF-e (por exemplo, quando o emissor exporta várias
// notas de uma mesma carga em um único PDF). O cabeçalho do canhoto de
// "RECEBEMOS DE ... OS PRODUTOS" e variações ("RECEBI(EMOS) DE ...") são
// o cabeçalho do canhoto de recebimento, que aparece uma única vez no
// início de cada NF-e — usado tanto para dividir um PDF com várias
// notas quanto para identificar o fornecedor (ver extractNFHeaderInfo).
// Só "RECEBEMOS"/"RECEBI(EMOS)"/"RECEBI" — NÃO pode casar "Recebida de
// Terceiros" (natureza da operação: "Venda de Mercadoria Adquirida/
// Recebida de Terceiros"), que antes era confundido com o canhoto e
// quebrava a nota em duas.
const RECEBEMOS_RE = /\bRECEB(?:EMOS|I\(EMOS\)|IEMOS|I)\s+DE\b/i;
function looksLikeRecebemosHeader(text){
  return RECEBEMOS_RE.test(text || "");
}

// recebimento ("RECEBEMOS DE... NOTA FISCAL INDICADA...") aparece uma
// única vez por nota, sempre na primeira página daquela nota — por isso
// é usado como marcador de início de cada nota dentro do arquivo.
function splitRowsIntoNotes(rows){
  const boundaries = [];
  rows.forEach((row, idx) => {
    if (looksLikeRecebemosHeader(row.text)) boundaries.push(idx);
  });

  if (!boundaries.length) return [rows];

  // Uma única ocorrência de "RECEBEMOS DE..." = uma única nota. O canhoto
  // pode estar em qualquer posição da página (topo, fim, ou até no meio
  // quando é impresso na vertical e se intercala com as demais linhas
  // pelo Y) — dividir por ele separaria o cabeçalho (Nº, emitente, CNPJ)
  // da tabela de produtos e geraria duas "notas" quebradas.
  if (boundaries.length === 1) return [rows];

  // Várias ocorrências, exatamente uma por página: cada página é uma
  // nota, independentemente de onde o canhoto caiu dentro dela.
  const paginas = [...new Set(rows.map((r) => r.page))];
  if (paginas.length === boundaries.length){
    const porPagina = paginas.map((p) => rows.filter((r) => r.page === p));
    const umPorPagina = porPagina.every((pr) => pr.filter((r) => looksLikeRecebemosHeader(r.text)).length === 1);
    if (umPorPagina) return porPagina;
  }

  const segments = [];
  // Alguns layouts (ex.: notas geradas pelo Arquivei) colocam o canhoto
  // "RECEBEMOS DE..." no FIM da página, não no início — se houver
  // conteúdo antes da primeira ocorrência, ele também precisa virar um
  // segmento, senão a tabela de produtos inteira seria descartada.
  if (boundaries[0] > 0){
    segments.push(rows.slice(0, boundaries[0]));
  }
  for (let i = 0; i < boundaries.length; i++){
    const start = boundaries[i];
    const end = i + 1 < boundaries.length ? boundaries[i + 1] : rows.length;
    segments.push(rows.slice(start, end));
  }

  // Descarta fragmentos residuais muito curtos (ex.: o canhoto de
  // recebimento sozinho, sem nenhuma tabela de produtos junto) — não são
  // notas separadas de verdade, só sobra de layout.
  const segmentosReais = segments.filter((seg) => seg.length >= 10);
  return segmentosReais.length ? segmentosReais : segments;
}

/* =====================================================================
   LEITURA DO PDF
   Extrai o texto de cada página preservando a posição (x, y) de cada
   fragmento, e agrupa os fragmentos em "linhas" com base na coordenada Y.
   Essa reconstrução posicional é o que permite identificar colunas de
   uma tabela de DANFE sem depender de coordenadas fixas de um layout
   específico.
   ===================================================================== */
async function readPDF(file, onProgress){
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  const rows = [];       // [{ page, y, items:[{str,x,w}] }, ...]
  const textLines = [];  // texto simples por linha, para regex globais (NF, CNPJ, etc.)
  let usouOCR = false;

  for (let p = 1; p <= pdf.numPages; p++){
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();

    // Algumas notas têm a página inteira rotacionada (atributo interno
    // do PDF, ex.: 90°/180°/270° — comum quando o documento foi gerado
    // em paisagem mas a página fica marcada como retrato "deitado", ou
    // vice-versa). O texto bruto do PDF.js vem nas coordenadas ORIGINAIS
    // (sem rotação); sem corrigir isso, linhas e colunas ficam
    // completamente fora de ordem. O viewport da própria página já
    // aplica essa rotação — usa a mesma transformação pra converter a
    // posição de cada fragmento de texto pra coordenadas "visuais"
    // corretas antes de agrupar em linhas.
    const viewport = page.getViewport({ scale: 1 });

    const items = content.items
      .filter((it) => it.str && it.str.trim().length > 0)
      .map((it) => {
        const [x, y] = pdfjsLib.Util.applyTransform([it.transform[4], it.transform[5]], viewport.transform);
        // combina a transformação do próprio texto com a do viewport pra
        // saber a orientação VISUAL final dele — algumas notas têm uma
        // faixa lateral de texto rotacionado (ex.: o canhoto de
        // recebimento impresso na vertical, na margem da página), que
        // se intercala com as linhas normais da tabela de produtos e
        // gera lixo na extração. Fica marcado aqui (não é descartado
        // ainda — em alguns documentos essa é a ÚNICA cópia de um texto
        // útil, ex.: o fornecedor; só é ignorado especificamente na
        // montagem das células da tabela de produtos, ver
        // parseProductsByColumns).
        const combinado = pdfjsLib.Util.transform(it.transform, viewport.transform);
        const anguloGraus = Math.atan2(combinado[1], combinado[0]) * 180 / Math.PI;
        const rotacionado = Math.abs(anguloGraus) > 5 && Math.abs(Math.abs(anguloGraus) - 180) > 5;
        // o Y crescendo para baixo do viewport é invertido de volta para
        // crescer para cima, mantendo a convenção usada no resto do código.
        return { str: it.str, x, y: -y, w: it.width || (it.str.length * 4), rotacionado };
      });

    let pageRows;

    // Tentativa 1: texto real embutido no PDF (rápido e preciso).
    if (items.length >= 5){
      pageRows = groupItemsIntoRows(items, p);
    } else {
      // Tentativa 2 (OCR): o PDF não tem texto extraível nesta página —
      // acontece com notas escaneadas ou geradas com o texto desenhado
      // como vetor/imagem, sem nenhum objeto de fonte real embutido. Em
      // vez de desistir, a página é renderizada como imagem em alta
      // resolução e lida via OCR (Tesseract.js), inteiramente no
      // navegador. Como OCR pode errar dígitos, todo produto vindo dessa
      // via é marcado como baixa confiança para revisão manual.
      if (onProgress) onProgress(p, pdf.numPages);
      pageRows = await ocrExtractRowsFromPage(page, p);
      usouOCR = true;
    }

    rows.push(...pageRows);
  }

  // ordena itens de cada linha por X e monta texto plano por linha
  for (const row of rows){
    row.items.sort((a, b) => a.x - b.x);
    row.text = row.items.map((i) => i.str).join(" ").replace(/\s+/g, " ").trim();
    textLines.push(row.text);
  }

  return { rows, fullText: textLines.join("\n"), usouOCR };
}

// Agrupa itens de texto (já com posição x,y) em "linhas" com base na
// coordenada Y — mesma lógica usada tanto para texto nativo do PDF
// quanto para os resultados do OCR.
function groupItemsIntoRows(items, pageNum, tolerance){
  const tol = tolerance || Y_TOLERANCE;
  const sorted = [...items].sort((a, b) => b.y - a.y || a.x - b.x);
  const rows = [];
  let currentRow = null;
  for (const it of sorted){
    if (currentRow && Math.abs(currentRow.y - it.y) <= tol){
      currentRow.items.push(it);
    } else {
      currentRow = { page: pageNum, y: it.y, items: [it] };
      rows.push(currentRow);
    }
  }
  return rows;
}

// OCR de fallback: renderiza a página como imagem (escala alta, já que
// texto vetorizado renderiza muito mais nítido que um scan de papel real
// — dá pra usar uma resolução maior sem custo de qualidade) e lê com
// Tesseract.js. Usa a estrutura de "linhas" que o próprio Tesseract já
// devolve (mais confiável que tentar reagrupar palavra por palavra), e
// inverte o eixo Y da imagem (que cresce para baixo) para o mesmo
// sentido usado no texto nativo do PDF (que cresce para cima), mantendo
// o resto do pipeline de extração idêntico nos dois casos.
async function ocrExtractRowsFromPage(page, pageNum){
  if (typeof Tesseract === "undefined"){
    throw new Error("Biblioteca de OCR não carregou (verifique a conexão com a internet).");
  }

  const scale = 3; // resolução alta: texto vetorizado renderiza nítido e sem ruído de scanner
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext("2d");
  await page.render({ canvasContext: ctx, viewport }).promise;

  const { data } = await Tesseract.recognize(canvas, "por");

  const lines = (data && data.lines) || [];
  const rows = lines
    .filter((line) => line.text && line.text.trim().length > 0)
    .map((line) => ({
      page: pageNum,
      y: -line.bbox.y0,
      ocr: true,
      items: (line.words || [])
        .filter((w) => w.text && w.text.trim().length > 0)
        .map((w) => ({ str: w.text, x: w.bbox.x0, y: -line.bbox.y0, w: w.bbox.x1 - w.bbox.x0, ocr: true })),
    }))
    .filter((row) => row.items.length > 0);

  return rows;
}


/* =====================================================================
   EXTRAÇÃO (localização da tabela) + PARSER DA NF
   ===================================================================== */
function stripAccents(str){
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function normKeyword(str){
  return stripAccents(str).toUpperCase();
}

// Decide se um texto "parece" mesmo um fragmento de código de produto
// (mesmo contendo espaço — alguns fornecedores usam códigos assim, ex.:
// "CHS GLC 73725 05") ou se é ruído de outra área da página (rótulo do
// canhoto, cabeçalho, assinatura etc.) que caiu por coincidência na
// faixa de posição X da coluna de código.
const ROTULOS_NAO_CODIGO = new Set([
  "CNPJ", "CPF", "DOS", "DAS", "DO", "DA", "DE", "E",
  "ASSINATURA", "IDENTIFICACAO", "RECEBEDOR", "RECEBIMENTO",
  "DATA", "NF-E", "NFE", "SERIE", "FOLHA", "CHAVE", "ACESSO",
]);
function pareceFragmentoDeCodigo(str){
  const texto = (str || "").trim();
  if (!texto) return false;
  // acento é forte indício de texto em português, não código de produto
  if (/[À-ÿ]/.test(texto)) return false;
  if (texto.length > 30) return false;
  const palavras = texto.split(/\s+/);
  if (palavras.length > 5) return false;
  if (palavras.length === 1 && ROTULOS_NAO_CODIGO.has(normKeyword(palavras[0]))) return false;
  if (palavras.every((p) => ROTULOS_NAO_CODIGO.has(normKeyword(p)))) return false;
  return true;
}

// Algumas DANFEs (ex.: layouts TOTVS) desenham uma linha de traços entre
// cada produto como separador visual da tabela. Essas linhas não têm
// nenhuma informação real (nem código, nem descrição) e não devem ser
// tratadas como produto — sem esse filtro elas geram uma linha fantasma
// "(sem referência)" sinalizada para revisão.
function isSeparatorText(str){
  return /^[-_=\s]{3,}$/.test(str || "");
}
// Remove também tokens de traço "soltos" que às vezes vazam para dentro
// de uma célula (ex.: um traço vertical da borda da tabela caindo na
// mesma linha de um produto), sem afetar hífens legítimos dentro de um
// código ou descrição real.
function isStrayDashToken(str){
  return /^-+$/.test((str || "").trim());
}

// Tenta localizar, dentro das linhas do PDF, a linha de cabeçalho da
// tabela de produtos e mapear cada coluna reconhecida para um intervalo
// de coordenadas X.
function detectHeaderColumns(rows){
  // Percorre por TAMANHO de janela primeiro (0, depois 1, depois 2), não
  // por posição — assim uma linha sozinha que já basta (ex.: a linha real
  // do cabeçalho da tabela de produtos) é sempre encontrada antes de
  // qualquer tentativa de mesclar linhas vizinhas. Sem essa ordem, uma
  // mescla poderia "vencer" por aparecer mais cedo no documento mesmo
  // quando a linha correta e completa está um pouco mais à frente —
  // foi o que aconteceu com o rótulo "QUANTIDADE" da seção de
  // transportador/volumes (não tem nada a ver com produtos) se
  // combinando por engano com o "CÓD. PROD" do cabeçalho real, que
  // viria poucas linhas depois já pronto sozinho.
  for (let janela = 0; janela <= 2; janela++){
    for (let idx = 0; idx + janela < rows.length; idx++){
    // Tenta a linha sozinha primeiro; se não achar código+quantidade
    // juntos, tenta mesclar com até 2 linhas seguintes — alguns layouts
    // quebram o cabeçalho da tabela em 2-3 linhas visuais diferentes
    // (ex.: "CÓDIGO DO PROD." numa linha, "QUANT./DESCRIÇÃO/NCM/CFOP"
    // na linha de baixo). A janela é pequena de propósito, para não
    // acabar juntando por engano com rótulos de outra seção da página
    // que fiquem coincidentemente perto.
    {
      const linhasJanela = rows.slice(idx, idx + 1 + janela);

      let matches = 0;
      const found = {}; // campo -> x do item
      for (const row of linhasJanela){
        for (const item of row.items){
          // remove ponto final antes de comparar (alguns layouts abreviam
          // com ponto, ex.: "UN.") para a comparação exata dos campos em
          // EXACT_MATCH_FIELDS não falhar por causa da pontuação.
          const upperItem = normKeyword(item.str).trim().replace(/\.$/, "");
          for (const field in HEADER_KEYWORDS){
            if (found[field] !== undefined) continue;
            const exact = EXACT_MATCH_FIELDS.has(field);
            for (const kw of HEADER_KEYWORDS[field]){
              // o casamento precisa ocorrer DENTRO do próprio item de texto,
              // nunca apenas na linha inteira — caso contrário a coluna
              // herdaria a posição X de um item qualquer da linha (bug crítico
              // que colapsava todas as colunas na mesma posição). Para campos
              // com rótulo curto/genérico (ver EXACT_MATCH_FIELDS), exige
              // igualdade exata em vez de "contém", para não casar por engano
              // com uma palavra maior que contenha essas mesmas letras.
              const bateu = exact ? upperItem === kw : upperItem.includes(kw);
              if (bateu){
                found[field] = item.x;
                matches++;
                break;
              }
            }
          }
        }
      }

      // precisamos ao menos de código/referência e quantidade para confiar
      // que esta é a linha (ou bloco de linhas) de cabeçalho da tabela
      if (found.codigo === undefined || found.quantidade === undefined || matches < 3) continue;

      const cols = Object.entries(found)
        .map(([field, x]) => ({ field, x }))
        .sort((a, b) => a.x - b.x);

      // define o intervalo [xStart, xEnd) de cada coluna como o ponto
      // médio entre cabeçalhos consecutivos. Para a última coluna
      // mapeada, em vez de ir até o infinito (o que faria ela "engolir"
      // quaisquer colunas não reconhecidas à direita, como valores
      // monetários), limita-se a um intervalo do mesmo tamanho do
      // espaçamento típico entre colunas — suficiente para a própria
      // coluna, sem capturar dados de colunas vizinhas não mapeadas.
      const gaps = [];
      for (let i = 1; i < cols.length; i++) gaps.push(cols[i].x - cols[i - 1].x);
      const avgGap = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 60;

      for (let i = 0; i < cols.length; i++){
        cols[i].xStart = i === 0 ? -Infinity : (cols[i - 1].x + cols[i].x) / 2;
        cols[i].xEnd = i === cols.length - 1 ? cols[i].x + avgGap : (cols[i].x + cols[i + 1].x) / 2;
      }
      // Colunas numéricas (quantidade, valores) costumam ter os números
      // alinhados à direita, um pouco deslocados da posição do rótulo do
      // cabeçalho — um número pode acabar ficando poucos pontos além do
      // limite calculado e "vazar" pra coluna vizinha. Alarga um pouco a
      // borda direita de cada coluna numérica pra dar essa folga (não
      // alarga a esquerda, então não invade o início da coluna
      // seguinte). As colunas de texto (código e descrição) ficam de
      // fora dessa folga — são colunas mais largas e alinhadas à
      // esquerda, sem esse deslocamento; alargar a borda entre elas
      // arrisca fazer o código "engolir" o começo da descrição quando o
      // espaço entre as duas é mais apertado.
      const FOLGA_BORDA_DIREITA = 8;
      for (let i = 0; i < cols.length - 1; i++){
        if (cols[i].field === "codigo" || cols[i].field === "descricao") continue;
        cols[i].xEnd += FOLGA_BORDA_DIREITA;
        // nunca deixa a folga fazer a borda direita de uma coluna passar
        // do início da próxima — em colunas bem estreitas e próximas
        // (comum entre unidade/quantidade), isso faria os intervalos se
        // sobreporem e o mesmo número acabar capturado em duas colunas
        // ao mesmo tempo.
        if (cols[i].xEnd > cols[i + 1].xStart) cols[i].xEnd = cols[i + 1].xStart;
      }

      return { headerRowIndex: extenderHeaderIndex(rows, idx + janela), columns: cols };
    }
  }
  }
  return null;
}

// Depois de achar a última linha do bloco de cabeçalho pela janela de
// busca, verifica se a linha seguinte AINDA parece continuação do
// cabeçalho (só rótulos curtos, nenhum valor no formato de quantidade
// "X,XXXX" nem código de produto) — alguns layouts quebram o cabeçalho
// em 3+ linhas visuais, e sem essa extensão a última sobraria e seria
// lida como se fosse um produto.
function extenderHeaderIndex(rows, headerIdx){
  let idx = headerIdx;
  for (let ext = 0; ext < 2; ext++){
    const proxima = rows[idx + 1];
    if (!proxima || !proxima.items.length) break;
    const pareceContinuacaoCabecalho = proxima.items.every((it) => {
      const t = it.str.trim();
      return t.length <= 14 && !/\d,\d{4}\b/.test(t) && !/^\d{2,}[.\d]*$/.test(t);
    });
    if (!pareceContinuacaoCabecalho) break;
    idx++;
  }
  return idx;
}

function rowIsFooter(text){
  const upper = normKeyword(text);
  return FOOTER_KEYWORDS.some((kw) => upper.includes(kw));
}

// Extrai os produtos usando o layout de colunas detectado (Tentativa 1).
// Se não for possível localizar um cabeçalho de tabela confiável, tenta
// uma extração baseada em padrões de texto por linha (Tentativa 2 - ver
// parseProductsByPattern). Nesta versão não há OCR (ver seção OCR abaixo).
// Converte quantidades informadas em tonelada ("TO"/"TON"/"TONELADA")
// para quilos (1 TO = 1000 KG) — conversão exata, ao contrário de tentar
// inferir "número de sacos" a partir de texto livre da descrição.
function normalizarUnidadesParaKg(produtos){
  const UNIDADES_TONELADA = new Set(["TO", "TON", "TONELADA", "TONELADAS"]);
  for (const p of produtos){
    const u = (p.unidade || "").trim().toUpperCase();
    if (UNIDADES_TONELADA.has(u) && p.quantidade !== null){
      p.quantidade = p.quantidade * 1000;
      p.unidade = "KG";
    }
  }
}

// CNPJ(s) de fornecedores que usam "MIL" na nota com o sentido fiscal de
// MILHEIRO (ex.: "4 MIL" = 4.000 peças) em vez de ser só uma unidade
// solta — confirmado com a Osziplast em 17/09/2026 (nota nº 000.009.433:
// "6200008 ... MIL 4,0000 ... VALOR TOTAL 576,00" = 4 milheiros x
// R$144,00/milheiro = R$576,00). Restrito por CNPJ de propósito: outro
// fornecedor que também escreva "MIL" pode ter um sentido diferente (ex.:
// preço já por mil, sem ser milheiro de verdade), então NÃO generalizar
// essa conversão pra qualquer nota com unidade "MIL" sem confirmar antes
// que é o mesmo caso.
const CNPJS_MILHEIRO_MIL = new Set(["14621728000145"]); // Osziplast Embalagens Plásticas ME

// Converte a quantidade de "milheiro" pra peças (1 MIL = 1000 UN) nas
// notas dos fornecedores listados acima em CNPJS_MILHEIRO_MIL — sem essa
// conversão, a contagem física às cegas mostrava "4 MIL" como alvo em vez
// de 4000, e quem contava lia como "4 peças" (ver relato de 17/09/2026).
// Alguns DANFEs (ex.: ITW Delfast) quebram a descrição do produto em uma
// segunda linha SEM código ("Ref: ... Lote: ...") que também traz o PESO
// do item em KG (9,8510 kg). Essa linha não é um produto: o peso não é a
// quantidade a conferir. Sem tratamento ela virava um item "(sem
// referência)" em KG, e todas se somavam num total sem sentido. Aqui o
// texto dela vai pra descrição do produto de cima e a linha some. Só
// age quando o produto de cima NÃO é medido em peso (MI, UN, PÇ...).
function mesclarLinhaPesoDoItem(produtos){
  const ehPeso = (u) => /^(KG|G|TO|T)$/i.test(String(u || "").trim());
  for (let i = produtos.length - 1; i > 0; i--){
    const p = produtos[i], q = produtos[i - 1];
    if (p.referencia || !q.referencia) continue;
    if (!ehPeso(p.unidade) || ehPeso(q.unidade) || !String(q.unidade || "").trim()) continue;
    const extra = String(p.descricao || "").replace(/\s+/g, " ").trim();
    if (extra) q.descricao = [q.descricao, extra].filter(Boolean).join(" ");
    if (q.rawLine && p.rawLine) q.rawLine += " | " + p.rawLine;
    produtos.splice(i, 1);
  }
}

// Alguns DANFEs (ex.: A. Raymond) trazem o produto em MILHEIRO ("MIL",
// ex.: 5,2) e logo abaixo, numa linha SEM código, a mesma quantidade já em
// peças ("PÇ 5.200,0000") junto de "CÓD. CLIENTE: ...". Sem tratamento, a
// linha de peças virava um item "(sem referência)" e a quantidade ficava
// em "5,2 MIL". Aqui a linha de peças é incorporada ao produto anterior:
// vale a quantidade real em peças, e o código do cliente vai pra
// descrição. Só mescla quando peças ≈ milheiros × 1000 (confere a
// conta), então nunca junta linhas que não tenham relação.
function mesclarLinhaPecasDoMilheiro(produtos){
  for (let i = produtos.length - 1; i > 0; i--){
    const p = produtos[i], q = produtos[i - 1];
    if (p.referencia || !q.referencia) continue;
    if (!/^MIL(HEIRO)?$/i.test(String(q.unidade || "").trim())) continue;
    if (!/^(P[ÇC]S?|UN|UND)$/i.test(String(p.unidade || "").trim())) continue;
    if (q.quantidade === null || p.quantidade === null) continue;
    if (Math.abs(p.quantidade - q.quantidade * 1000) > 0.5) continue;

    let extra = String(p.descricao || "");
    let codCliente = "";
    const m = extra.match(/C[ÓO]D\.?\s*CLIENTE:?\s*(\S+)/i);
    if (m){ codCliente = m[1]; extra = extra.replace(m[0], ""); }
    extra = extra.replace(/\s+/g, " ").trim();

    q.descricao = [q.descricao, extra].filter(Boolean).join(" ") + (codCliente ? " · Cód. cliente: " + codCliente : "");
    q.quantidade = p.quantidade;
    q.unidade = p.unidade;
    if (q.rawLine && p.rawLine) q.rawLine += " | " + p.rawLine;
    produtos.splice(i, 1);
  }
}

function normalizarUnidadesMilheiro(produtos, cnpjEmitente){
  const digits = (cnpjEmitente || "").replace(/\D/g, "");
  if (!CNPJS_MILHEIRO_MIL.has(digits)) return;
  for (const p of produtos){
    const u = (p.unidade || "").trim().toUpperCase();
    if (u === "MIL" && p.quantidade !== null){
      p.quantidade = p.quantidade * 1000;
      p.unidade = "UN"; // prefere manter "MIL"? troque esta linha para: p.unidade = "MIL";
    }
  }
}

function extractProducts(rows, fullText, cnpjEmitente){
  // remove linhas que são puramente separadores visuais (traços/underline)
  // antes de qualquer detecção de cabeçalho ou parsing de produto.
  const cleanRows = rows.filter((row) => !isSeparatorText(row.text));

  const header = detectHeaderColumns(cleanRows);
  let products = [];

  if (header){
    products = parseProductsByColumns(cleanRows, header);
  }

  if (!products.length){
    // Tentativa 2: heurística baseada em padrões de texto, sem coordenadas.
    products = parseProductsByPattern(cleanRows);
  }

  // Alguns fornecedores usam tonelada ("TO") como unidade de medida na
  // nota, mas a conferência física é feita em quilos — converte
  // automaticamente (1 TO = 1000 KG), já que é uma conversão exata e
  // sem ambiguidade, diferente de tentar inferir "número de sacos" a
  // partir do texto da descrição.
  mesclarLinhaPecasDoMilheiro(products);
  mesclarLinhaPesoDoItem(products);
  normalizarUnidadesParaKg(products);

  // Fornecedores específicos (ver CNPJS_MILHEIRO_MIL) usam "MIL" como
  // unidade fiscal de milheiro — converte pra peças antes de qualquer
  // outra etapa (card de totais, envio à fila, alvo da contagem), pra
  // não propagar "4" quando o físico real é "4000".
  normalizarUnidadesMilheiro(products, cnpjEmitente);

  let missingRef = 0, missingQty = 0;
  for (const p of products){
    if (!p.referencia) missingRef++;
    if (p.quantidade === null) missingQty++;
  }

  return {
    products,
    missingRef,
    missingQty,
    lowConfidenceCount: missingRef + missingQty,
  };
}

// TENTATIVA 1 — layout de colunas detectado pelo cabeçalho
function parseProductsByColumns(rows, header){
  // Passagem 1: percorre as linhas da tabela (mesmo filtro de
  // ruído/rodapé/paginação de sempre) e monta uma célula por linha, sem
  // decidir ainda a qual produto cada fragmento pertence — isso é
  // necessário porque alguns layouts (ex.: Nilko) quebram um único
  // produto em VÁRIAS linhas de forma pouco previsível: a descrição
  // pode começar numa linha ANTES da linha com os números, e o próprio
  // código pode vir partido (metade antes dos números, metade depois).
  const candidatos = [];
  let ultimoCodigoCore = ""; // rastreia o código do último produto "âncora" encontrado
  let inTable = true;
  for (let i = header.headerRowIndex + 1; i < rows.length; i++){
    const row = rows[i];
    if (!row.text) continue;

    // "RECEBEMOS DE ... NOTA FISCAL INDICADA AO LADO" é o cabeçalho do
    // canhoto de recebimento e aparece só uma vez por NF-e, sempre no
    // topo da primeira página daquela nota. Se ele aparecer de novo mais
    // adiante no documento, significa que uma nota fiscal DIFERENTE está
    // começando (não uma continuação da mesma nota em outra página) — e
    // aí é preciso parar de vez, para nunca misturar produtos de duas
    // notas diferentes (ver seção 19 do prompt original).
    if (looksLikeRecebemosHeader(row.text)) break;

    if (!inTable){
      if (looksLikeTableNoise(row.text)) inTable = true;
      continue;
    }

    if (rowIsFooter(row.text)){
      inTable = false;
      continue;
    }
    // ignora o título da seção e o cabeçalho de colunas quando ele se
    // repete em páginas seguintes (NF-e com mais de uma folha).
    if (looksLikeTableNoise(row.text)) continue;

    // ignora linhas que são só um número de item solto (ex.: "24"),
    // comuns em layouts que numeram cada linha da nota internamente —
    // não têm nenhuma informação de produto, só ruído.
    if (/^\d{1,4}$/.test(row.text.trim())) continue;

    const cells = {};
    for (const col of header.columns){
      const itemsInCol = row.items.filter((it) => it.x >= col.xStart && it.x < col.xEnd && !isStrayDashToken(it.str) && !it.rotacionado);
      cells[col.field] = itemsInCol.map((it) => it.str).join(" ").trim();
    }

    // Às vezes 3 colunas estreitas vizinhas (CST, CFOP, UNIDADE) saem
    // coladas num único fragmento de texto quando o espaço entre elas no
    // PDF é pequeno demais para o PDF.js separar (ex.: "500 6101 UN").
    // Detecta esse padrão específico ("números números letras curtas") e
    // separa os três valores em suas colunas corretas.
    const cstColado = (cells.cst || "").trim().match(/^(\d+)\s+(\d+)\s+([A-Za-zÀ-ú]{1,4})$/);
    if (cstColado && !(cells.cfop || "").trim() && !(cells.unidade || "").trim()){
      cells.cst = cstColado[1];
      cells.cfop = cstColado[2];
      cells.unidade = cstColado[3];
    }

    // Mesma ideia, mas quando são 4 colunas coladas de uma vez (NCM, CST,
    // CFOP, UNIDADE) — ex.: "73182200 000 6.101 CT".
    const ncmColado = (cells.ncm || "").trim().match(/^(\d{6,9})\s+(\d{2,4})\s+([\d.]{3,7})\s+([A-Za-zÀ-ú]{1,4})$/);
    if (ncmColado && !(cells.cst || "").trim() && !(cells.cfop || "").trim() && !(cells.unidade || "").trim()){
      cells.ncm = ncmColado[1];
      cells.cst = ncmColado[2];
      cells.cfop = ncmColado[3];
      cells.unidade = ncmColado[4];
    }

    // Em alguns PDFs (varia até entre páginas da mesma nota) o código e o
    // início da descrição saem colados no mesmo fragmento de texto, sem
    // separação detectável entre as colunas. Quando isso acontece, a
    // célula de código vem com espaços e múltiplas palavras — separa-se
    // o primeiro token (o código de produto) do restante, que é
    // repassado para o início da descrição.
    let codigoRaw = (cells.codigo || "").trim();
    let referencia = codigoRaw;
    let descricaoPrefix = "";
    const espacoIdx = codigoRaw.indexOf(" ");
    if (espacoIdx > 0){
      const primeiroToken = codigoRaw.slice(0, espacoIdx);
      const resto = codigoRaw.slice(espacoIdx + 1).trim();
      if (/^[A-Za-z0-9][A-Za-z0-9._-]{2,19}$/.test(primeiroToken) && /\d/.test(primeiroToken)){
        referencia = primeiroToken;
        descricaoPrefix = resto;
      } else if (!(cells.descricao || "").trim()){
        // Reforço: alguns fornecedores usam código de produto com espaço
        // interno de verdade (ex.: "Y 440B1 TR2/B1"), então o primeiro
        // token sozinho ("Y") não parece um código válido, mas o
        // conjunto todo é. Só entra em ação quando a célula de descrição
        // ficou vazia — sinal de que o pdf.js grudou código+descrição
        // inteiros num único fragmento (o caso comum de código com
        // espaço, mas com descrição própria intacta na outra coluna, ex.:
        // "CHS GLC 73725 05", NÃO deve cair aqui). Percorre os pedaços e
        // para no primeiro que "parece" início de descrição (só letras,
        // sem dígito, 3+ caracteres — ex.: "HOSTACOM") — tudo antes dele
        // continua sendo o código. Sem esse reforço, o texto colado
        // inteiro vira uma "referência" longa demais, é descartada, e o
        // produto some sem deixar rastro (nem "(sem referência)") — ver
        // contagem de 17/09/2026 com a Basell (nota 000.122.373: item "Y
        // 440B1 TR2/B1" sumia da lista).
        const tokens = codigoRaw.split(/\s+/);
        let splitIdx = -1;
        for (let ti = 1; ti < tokens.length; ti++){
          if (/^[A-Za-zÀ-ú]{3,}$/.test(tokens[ti])){ splitIdx = ti; break; }
        }
        if (splitIdx > 0){
          const codigoTokens = tokens.slice(0, splitIdx).join(" ");
          if (pareceFragmentoDeCodigo(codigoTokens)){
            referencia = codigoTokens;
            descricaoPrefix = tokens.slice(splitIdx).join(" ");
          }
        }
      }
    }

    const descricao = ((descricaoPrefix ? descricaoPrefix + " " : "") + (cells.descricao || "").trim()).trim();

    // Se a referência tiver espaço, só é aceita se ainda "parecer" um
    // código de produto de verdade — alguns fornecedores usam códigos
    // com espaço mesmo (ex.: "CHS GLC 73725 05"). O que NÃO é aceito é
    // texto de outra área da página que caiu por coincidência na coluna
    // de código: frases têm acento (código de produto não tem) ou são
    // rótulos genéricos conhecidos do canhoto/cabeçalho (CNPJ, DOS,
    // ASSINATURA etc.).
    if (referencia && /\s/.test(referencia) && !pareceFragmentoDeCodigo(referencia)){
      referencia = "";
    }
    let quantidade = parseBRNumber(cells.quantidade);
    let unidade = (cells.unidade || "").trim();

    // Em alguns PDFs a unidade e a quantidade saem coladas no mesmo
    // fragmento de texto (ex.: "KG 180,0000"), sem espaço detectável
    // entre as colunas do PDF original — nesse caso a coluna de
    // quantidade acaba vazia ou com o valor errado (de outra coluna
    // vizinha). Detecta esse padrão e separa os dois valores corretamente.
    const unidadeQuantidadeColada = unidade.match(/^([A-Za-zÀ-ú]{1,6})\s+([\d.,]+)$/);
    if (unidadeQuantidadeColada){
      unidade = unidadeQuantidadeColada[1];
      const quantidadeReal = parseBRNumber(unidadeQuantidadeColada[2]);
      if (quantidadeReal !== null) quantidade = quantidadeReal;
    }

    // Texto vindo de OCR é mais "solto" que o texto nativo do PDF — não
    // tem a mesma precisão posicional, então trechos de outras seções da
    // nota (dígitos da chave de acesso, código da natureza da operação,
    // etc.) podem acabar caindo dentro do intervalo de linhas da tabela.
    // Por isso, para linhas vindas de OCR, exige-se que a referência
    // pareça mesmo um código de produto (pelo menos 6 caracteres) antes
    // de aceitá-la — do contrário ela é descartada como ruído.
    if (row.ocr && referencia && (referencia.length < 6 || !/\d/.test(referencia))){
      referencia = "";
    }

    if (!referencia && !descricao && quantidade === null) continue;

    // Algumas notas têm uma linha extra por produto que só repete a
    // quantidade numa unidade alternativa (ex.: peso em kg de um item
    // vendido por milheiro), sem nenhum código nem descrição de verdade —
    // só uma anotação entre parênteses tipo "(0,600 KG)" + unidade +
    // quantidade + valor unitário. Essa linha não é um novo produto (é
    // só um dado complementar da linha anterior); sem essa trava, ela
    // vira uma "âncora" própria sem código, e todas essas linhas soltas
    // de notas diferentes acabam se somando na mesma referência fantasma
    // "(sem referência)".
    const pareceAnotacaoDePeso = /^\(\s*[\d.,]+\s*[A-Za-zÀ-ú]{1,4}\s*\)$/.test(descricao.trim());
    const temIdentificacao = referencia || (descricao && !pareceAnotacaoDePeso) || cells.ncm || cells.cfop;
    if (!temIdentificacao && quantidade !== null) continue;

    // Quando uma quantidade grande (4 casas decimais) quebra em duas
    // linhas do PDF, a sobra costuma vir numa linha que só repete o
    // código do produto ANTERIOR (sem nenhuma informação nova) seguida
    // do dígito final que faltava — isso vira um produto fantasma com
    // referência vazia e quantidade errada (ex.: "0"). Detecta esse
    // padrão específico e ignora a linha (já que a quantidade correta já
    // foi capturada por inteiro na linha âncora, ver parseBRNumber).
    if (!referencia && descricao.trim() && descricao.trim() === ultimoCodigoCore) continue;

    if (quantidade !== null) ultimoCodigoCore = referencia || ultimoCodigoCore;

    candidatos.push({
      referencia, descricao, quantidade, unidade,
      ncm: (cells.ncm || "").trim(),
      cfop: (cells.cfop || "").trim(),
      ean: (cells.ean || "").trim(),
      vlUnit: parseBRNumber(cells.vlUnit),
      vlTotal: parseBRNumber(cells.vlTotal),
      rawLine: row.text,
      viaOCR: !!row.ocr,
      isCore: quantidade !== null,
    });
  }

  // Passagem 2: cada linha com quantidade válida ("âncora"/núcleo) vira
  // um produto. As demais linhas (só fragmento de código e/ou descrição,
  // sem quantidade) precisam ser atribuídas ao produto certo. A regra
  // observada neste tipo de layout (ex.: Nilko): uma linha "lidera" o
  // núcleo seguinte quando está colada nele — direto antes do núcleo, ou
  // direto antes de um fragmento de código que já lidera aquele núcleo
  // (só um salto, não encadeia indefinidamente, para não puxar por
  // engano uma linha que na verdade é o final do produto anterior).
  // Qualquer linha que não se encaixe nessa regra vai para o final
  // (sufixo) do núcleo anterior mais próximo, como já era feito antes.
  const coreIdx = [];
  candidatos.forEach((c, i) => { if (c.isCore) coreIdx.push(i); });
  if (!coreIdx.length) return [];

  const forwardTarget = new Array(candidatos.length).fill(null);
  for (let i = candidatos.length - 2; i >= 0; i--){
    if (candidatos[i].isCore) continue;
    const cand = candidatos[i];
    const hasRef = !!cand.referencia;
    const hasDesc = !!cand.descricao;
    const next = candidatos[i + 1];
    if (next && next.isCore){
      if (hasRef){
        // fragmento de código colado direto antes do núcleo: sempre
        // pertence a ele (não faz sentido um pedaço de código "sobrar"
        // de um produto anterior).
        forwardTarget[i] = i + 1;
      } else if (hasDesc && !next.descricao){
        forwardTarget[i] = i + 1;
      } else if (hasDesc && next.descricao && /^[A-Za-zÀ-ú0-9._-]{2,20}\s*\|/.test(next.descricao)){
        // a "descrição" do núcleo, quando existe, às vezes é só uma
        // listagem de códigos de referência coladas (ex.: "I04117019001A
        // | 4901795V000 | 5000328 |"), não um nome de produto de
        // verdade — nesse caso a linha anterior ainda é o nome líder de
        // verdade e deve ser tratada como início do produto seguinte.
        // linha só de descrição colada direto antes do núcleo: só conta
        // como início do PRÓXIMO produto se aquele núcleo ainda não tiver
        // nenhuma descrição própria (layout tipo Nilko, onde o nome vem
        // antes dos números). Se o núcleo já tem descrição própria
        // (layout mais comum, tipo LinkPlas), essa linha continua sendo
        // tratada como final do produto ANTERIOR — do contrário uma
        // continuação de página (ex.: "V D) NOIR" completando "BAC HJD
        // DIANTEIRO LD (A") seria roubada para o produto seguinte.
        forwardTarget[i] = i + 1;
      }
    } else if (
      hasDesc && !hasRef && next && !next.isCore &&
      forwardTarget[i + 1] !== null && next.referencia && !next.descricao
    ){
      forwardTarget[i] = forwardTarget[i + 1];
    }
  }

  const products = coreIdx.map((idx) => {
    const c = candidatos[idx];
    return {
      _leadCodigo: [], _leadDesc: [],
      referencia: c.referencia, descricao: c.descricao,
      _trailCodigo: [], _trailDesc: [],
      quantidade: c.quantidade, unidade: c.unidade,
      ncm: c.ncm, cfop: c.cfop, ean: c.ean,
      vlUnit: c.vlUnit, vlTotal: c.vlTotal,
      rawLine: c.rawLine, viaOCR: c.viaOCR,
    };
  });

  for (let i = 0; i < candidatos.length; i++){
    if (candidatos[i].isCore) continue;
    const cand = candidatos[i];
    if (!cand.referencia && !cand.descricao) continue;
    // um fragmento de código líder/final só é aceito se realmente
    // parecer parte de um código (ver pareceFragmentoDeCodigo) — evita
    // colar rótulos soltos (ex.: "CNPJ", "ASSINATURA") vindos de outra
    // área da página que caíram na faixa da coluna de código.
    const referenciaValida = cand.referencia && pareceFragmentoDeCodigo(cand.referencia) ? cand.referencia : "";

    if (forwardTarget[i] !== null){
      const prod = products[coreIdx.indexOf(forwardTarget[i])];
      if (referenciaValida) prod._leadCodigo.push(referenciaValida);
      if (cand.descricao) prod._leadDesc.push(cand.descricao);
      // Fragmentos "soltos" (ver comentário do bloco acima) também podem
      // carregar colunas técnicas que caíram fora da linha-âncora do
      // produto — em especial UNIDADE, que fica desalinhada quando a
      // descrição quebra em duas linhas e empurra NCM/CST/CFOP/UNID pra
      // uma linha visual diferente da linha com a quantidade. Sem isso,
      // a unidade lida corretamente nesse fragmento seria descartada e
      // o produto ficaria sem unidade mesmo com o dado presente no PDF.
      if (!prod.unidade && cand.unidade) prod.unidade = cand.unidade;
      if (!prod.ncm && cand.ncm) prod.ncm = cand.ncm;
      if (!prod.cfop && cand.cfop) prod.cfop = cand.cfop;
      if (!prod.ean && cand.ean) prod.ean = cand.ean;
      if (prod.vlUnit === null && cand.vlUnit !== null) prod.vlUnit = cand.vlUnit;
      if (prod.vlTotal === null && cand.vlTotal !== null) prod.vlTotal = cand.vlTotal;
      continue;
    }

    let prevCoreCandIdx = -1;
    for (let p = i - 1; p >= 0; p--){ if (candidatos[p].isCore){ prevCoreCandIdx = p; break; } }
    if (prevCoreCandIdx === -1) continue; // nada antes para anexar — descarta

    const prod = products[coreIdx.indexOf(prevCoreCandIdx)];
    if (referenciaValida) prod._trailCodigo.push(referenciaValida);
    if (cand.descricao) prod._trailDesc.push(cand.descricao);
    // mesma lógica de backfill de colunas técnicas, agora para fragmentos
    // que ficam "depois" da linha-âncora (ver comentário acima).
    if (!prod.unidade && cand.unidade) prod.unidade = cand.unidade;
    if (!prod.ncm && cand.ncm) prod.ncm = cand.ncm;
    if (!prod.cfop && cand.cfop) prod.cfop = cand.cfop;
    if (!prod.ean && cand.ean) prod.ean = cand.ean;
    if (prod.vlUnit === null && cand.vlUnit !== null) prod.vlUnit = cand.vlUnit;
    if (prod.vlTotal === null && cand.vlTotal !== null) prod.vlTotal = cand.vlTotal;
  }

  return products.map((p) => {
    // fragmentos de código são colados sem espaço (são a mesma
    // referência partida em pedaços, ex.: "NK000006-" + "C070"), mas
    // fragmentos de descrição são frases e levam espaço entre si — EXCETO
    // quando um pedaço termina em dígito e o seguinte começa em dígito:
    // nesse caso é quase sempre um NÚMERO só (ex.: "Ped: 8000151") que
    // quebrou em duas linhas do PDF, não duas palavras diferentes por
    // coincidência — junta sem espaço pra não separar o número ao meio.
    let referencia = [...p._leadCodigo, p.referencia, ...p._trailCodigo].filter(Boolean).join("");
    const descricao = juntarFragmentosDescricao([...p._leadDesc, p.descricao, ...p._trailDesc]);

    // Alguns fornecedores usam um "código de família" repetido na coluna
    // CÓD. PROD. (ex.: "CHS GLC 73725 05" para vários tamanhos/variações
    // diferentes do mesmo item-base), com o código específico de cada
    // variação escondido dentro da descrição, no padrão "(cód. XXXXX)".
    // Sem diferenciar isso, duas referências FISICAMENTE diferentes
    // ficariam somadas como se fossem uma só. Quando esse padrão aparece,
    // anexa o código específico à referência para diferenciá-las.
    const codEmbutido = descricao.match(/\(c[oó]d\.?\s*([A-Za-z0-9]+)\)/i);
    if (codEmbutido && referencia){
      referencia = `${referencia} (${codEmbutido[1]})`;
    }

    return {
      referencia, descricao,
      unidade: p.unidade, quantidade: p.quantidade,
      ncm: p.ncm, cfop: p.cfop, ean: p.ean,
      vlUnit: p.vlUnit, vlTotal: p.vlTotal,
      rawLine: p.rawLine, viaOCR: p.viaOCR,
    };
  });
}

// Junta fragmentos de descrição com espaço entre eles — exceto quando o
// fragmento anterior termina em dígito e o próximo começa em dígito,
// caso em que são juntados sem espaço (é quase sempre um número que
// quebrou em duas linhas do PDF, ex.: "Ped: 80001" + "51" = "Ped: 8000151").
function juntarFragmentosDescricao(partes){
  const validas = partes.filter(Boolean);
  let resultado = "";
  for (const parte of validas){
    if (!resultado){ resultado = parte; continue; }
    const ultimoChar = resultado.slice(-1);
    const primeiroChar = parte.slice(0, 1);
    const separador = (/\d/.test(ultimoChar) && /\d/.test(primeiroChar)) ? "" : " ";
    resultado += separador + parte;
  }
  return resultado.trim();
}

// TENTATIVA 2 — heurística sem coordenadas (fallback). Procura, em cada
// linha, um primeiro token que pareça um código de produto (alfanumérico,
// sem excesso de espaços) seguido, mais adiante na linha, por um número
// que pareça quantidade (evitando confundir com NCM/CFOP, que têm
// tamanho fixo de dígitos).
function parseProductsByPattern(rows){
  const products = [];
  const codeRe = /^[A-Za-z0-9][A-Za-z0-9._-]{1,19}$/;
  const numberRe = /\d{1,3}(?:\.\d{3})*(?:,\d+)?|\d+(?:,\d+)?/g;

  for (const row of rows){
    if (rowIsFooter(row.text)) continue;
    if (looksLikeTableNoise(row.text)) continue;
    const tokens = row.items.map((it) => it.str);
    if (tokens.length < 3) continue;

    const first = tokens[0];
    if (!codeRe.test(first)) continue;
    // evita capturar cabeçalhos/rótulos comuns
    if (/^(NF|CNPJ|CPF|DANFE|SERIE|DATA)$/i.test(first)) continue;
    // em linhas vindas de OCR, exige um código mais "parecido com
    // produto" (mesmo motivo do comentário em parseProductsByColumns) —
    // esse método de reserva já é mais solto por natureza, então em OCR
    // fica ainda mais importante essa trava.
    if (row.ocr && (first.trim().length < 6 || !/\d/.test(first))) continue;

    const numbers = row.text.match(numberRe) || [];
    if (numbers.length < 2) continue; // precisa de ao menos qtd + 1 valor

    // heurística: primeiro número "plausível" como quantidade (não é
    // NCM de 8 dígitos, não é CFOP de 4 dígitos, não tem formatação de
    // valor monetário com 2 decimais e magnitude grande)
    let quantidade = null;
    for (const numStr of numbers){
      const digitsOnly = numStr.replace(/[^\d]/g, "");
      if (digitsOnly.length === 8 || digitsOnly.length === 4) continue; // parece NCM/CFOP
      const val = parseBRNumber(numStr);
      if (val !== null && val > 0){ quantidade = val; break; }
    }

    const descricao = tokens.slice(1, Math.max(1, tokens.length - numbers.length)).join(" ").trim();

    // mesma regra de confiança mínima usada na Tentativa 1: exige código,
    // ou descrição + quantidade válida juntos.
    const referencia = first.trim();
    if (!referencia && !(descricao && quantidade !== null)) continue;

    products.push({
      referencia,
      descricao,
      unidade: "",
      quantidade,
      ncm: "", cfop: "", ean: "",
      vlUnit: null, vlTotal: null,
      rawLine: row.text,
      viaOCR: !!row.ocr,
    });
  }
  return products;
}

// Converte um número em formato brasileiro ("1.234,56" ou "200,00" ou
// "200") para float. Retorna null se não for possível interpretar.
// Importante: extrai apenas o PRIMEIRO token numérico plausível da string.
// Isso protege contra imprecisão no limite das colunas (quando a última
// coluna mapeada acaba capturando também texto/números de colunas
// seguintes não reconhecidas, evitando concatenar vários números em um
// só e gerar valores absurdos.
const NUMBER_TOKEN_RE = /-?\d{1,3}(?:\.\d{3})+(?:,\d+)?|-?\d+(?:,\d+)?/;
function parseBRNumber(str){
  if (!str) return null;
  const s = String(str).trim();
  if (!s) return null;

  const match = s.match(NUMBER_TOKEN_RE);
  if (!match) return null;

  let token = match[0];
  if (token.includes(",")){
    // formato BR: ponto = milhar, vírgula = decimal
    token = token.replace(/\./g, "").replace(",", ".");
  } else if (/^\d{1,3}(\.\d{3})+$/.test(token)){
    // número no padrão de milhar (ex.: "1.000", "51.372") mas SEM vírgula
    // decimal — no formato brasileiro isso é sempre separador de milhar
    // (mil, cinquenta e um mil e trezentos e setenta e dois...), nunca
    // um valor decimal como "1,0". Sem essa regra, "1.000" (mil peças)
    // seria lido como "1" (uma peça).
    token = token.replace(/\./g, "");
  }
  const val = parseFloat(token);
  return isNaN(val) ? null : val;
}

/* =====================================================================
   DADOS DA NOTA (informações complementares)
   ===================================================================== */
function extractNFHeaderInfo(fullText){
  // Trabalha linha a linha (cada linha corresponde a uma "linha visual" do
  // PDF já reconstruída em readPDF) porque no layout do DANFE o rótulo de
  // um campo e o respectivo valor frequentemente ficam em linhas/colunas
  // diferentes — uma busca só por regex no texto corrido tende a casar o
  // valor errado (ex.: outro número/coluna vizinha).
  const lines = fullText.split("\n");
  const info = {};

  // NÚMERO DA NF — aceita "Nº"/"N°" (símbolo), "N." (abreviação com
  // ponto) ou a palavra "NÚMERO"/"NUMERO" por extenso. Importante: NÃO
  // aceita a letra solta "o"/"O" como se fosse o símbolo de ordinal —
  // isso gerava falsos positivos em textos como "LEI NO 10.637" (onde
  // "NO" é a palavra "no", não "Nº").
  // "N[Oo]\." cobre a abreviação "No." (com a letra O normal, sem o
  // símbolo de ordinal) — usada por alguns emissores. Continua seguro
  // contra o falso positivo de "LEI NO 10.637" porque ali não há ponto
  // colado direto após o "NO" (tem espaço antes do número).
  const numeroMatch = fullText.match(/(?:N[º°]\.?|N\.|N[Oo]\.|N[ÚU]MERO[:\s]*)\s*(\d[\d.\s]{3,}\d)/i);
  if (numeroMatch) info.numero = numeroMatch[1].replace(/\s+/g, "").trim();

  // SÉRIE
  const serieMatch = fullText.match(/S[ée]rie[:\s]*(\d{1,4})/i);
  if (serieMatch) info.serie = serieMatch[1];

  // DATA DE EMISSÃO
  const dataMatch = fullText.match(/EMISS[ÃA]O[:\s]+(\d{2}\/\d{2}\/\d{4})/i)
    || fullText.match(/DATA DA EMISS[ÃA]O[:\s]*\n?(\d{2}\/\d{2}\/\d{4})/i);
  if (dataMatch) info.dataEmissao = dataMatch[1];

  // CNPJ formatado (##.###.###/####-##, tolerando espaços ao redor do
  // hífen final, comuns em alguns layouts) — primeira ocorrência do
  // documento, que no layout padrão do DANFE corresponde ao emitente
  // (fornecedor), pois esse bloco aparece antes do destinatário/
  // transportador na página.
  const cnpjMatch = fullText.match(/\d{2}\.\d{3}\.\d{3}\/\d{4}\s*-\s*\d{2}/);
  if (cnpjMatch) info.cnpj = cnpjMatch[0].replace(/\s+/g, "");

  // RAZÃO SOCIAL do emitente — o canhoto de recebimento de toda DANFE
  // sempre começa com a frase padrão "RECEBEMOS DE <EMITENTE> OS
  // PRODUTOS...", numa única linha inteira, larga o suficiente para não
  // se misturar com colunas vizinhas (diferente do bloco "IDENTIFICAÇÃO
  // DO EMITENTE", que em vários layouts aparece ao lado do título do
  // DANFE/logo e acaba embaralhado). Por isso essa é a fonte MUITO mais
  // confiável para o nome do fornecedor.
  // Aceita variações como "RECEBEMOS DE" e "RECEBI(EMOS) DE", e permite
  // uma vírgula opcional antes de "OS PRODUTOS" (alguns emissores
  // pontuam a frase de forma diferente).
  const recebemosMatch = fullText.match(/\bRECEB(?:EMOS|I\(EMOS\)|IEMOS|I)\s+DE\s+(.+?),?\s+OS PRODUTOS/i);
  if (recebemosMatch && looksLikeCompanyName(recebemosMatch[1].trim())){
    info.razaoSocial = recebemosMatch[1].trim();
  }

  // Reforço 1: bloco "IDENTIFICAÇÃO DO EMITENTE" (método anterior),
  // usado apenas se a frase do canhoto acima não tiver sido encontrada.
  if (!info.razaoSocial){
    const emitenteIdx = lines.findIndex((l) => normKeyword(l).includes("EMITENTE"));
    if (emitenteIdx !== -1){
      const blacklist = /DANFE|DOCUMENTO AUXILIAR|FISCAL ELETRONICA|ENTRADA|SAIDA|CHAVE DE ACESSO|CONSULTA DE AUTENTICIDADE|FOLHA|NATUREZA DA OPERACAO|PROTOCOLO/;
      for (let i = emitenteIdx + 1; i < Math.min(lines.length, emitenteIdx + 8); i++){
        const line = lines[i].trim();
        if (!line || line.length < 4) continue;
        const upper = normKeyword(line);
        if (blacklist.test(upper)) continue;
        if (/^N[ºo°]/i.test(line) || /^S[ée]rie/i.test(line)) continue;
        if (/^NF-?E$/i.test(line) || !looksLikeCompanyName(line)) continue;
        info.razaoSocial = line;
        break;
      }
    }
  }

  // Reforço 2: fornecedor conhecido pelo CNPJ (ver
  // FORNECEDORES_CONHECIDOS_POR_CNPJ) — última rede de segurança.
  if (!info.razaoSocial && info.cnpj){
    const conhecido = lookupFornecedorPorCnpj(info.cnpj);
    if (conhecido) info.razaoSocial = conhecido;
  }

  return Object.keys(info).length ? info : null;
}

// Validação de sanidade para nunca exibir texto claramente inválido como
// razão social (ex.: trechos de código de barras/chave de acesso que
// vazaram para a mesma linha por estarem em uma coluna vizinha).
function looksLikeCompanyName(line){
  const cleaned = line.trim();
  if (cleaned.length < 4 || cleaned.length > 80) return false;
  if (/[:<>@#|]/.test(cleaned)) return false;
  // evita confundir linhas de endereço (rua, avenida, rodovia etc.) com
  // o nome da empresa quando ambos aparecem próximos no layout.
  if (/^(RUA|AV\.?|AVENIDA|ROD\.?|RODOVIA|TRAVESSA|AL\.?|ALAMEDA|PRA[ÇC]A|ESTRADA|R\.)\b/i.test(cleaned)) return false;
  const digits = (cleaned.match(/\d/g) || []).length;
  if (digits / cleaned.length > 0.3) return false;
  return true;
}

// Alguns layouts (ex.: LinkPlas) misturam o nome do fornecedor com o
// título "DANFE" na mesma linha visual, e o nome acaba sendo rejeitado
// pela validação de sanidade acima (com razão). Como Murilo trabalha
// sempre com o mesmo grupo pequeno de fornecedores recorrentes, mantém-se
// aqui uma lista de reforço por CNPJ para preencher a razão social
// quando a extração normal falha — evita que a nota chegue ao RecebeMais
// como "fornecedor não identificado" nesses casos conhecidos.
const FORNECEDORES_CONHECIDOS_POR_CNPJ = {
  "04992664000135": "LINKPLAS INDÚSTRIA DE PLÁSTICOS LTDA",
};
function lookupFornecedorPorCnpj(cnpj){
  if (!cnpj) return null;
  const digits = cnpj.replace(/\D/g, "");
  return FORNECEDORES_CONHECIDOS_POR_CNPJ[digits] || null;
}

/* =====================================================================
   NORMALIZAÇÃO
   ===================================================================== */
function normalizeReference(ref){
  if (!ref) return "";
  // remove espaços nas extremidades e colapsa espaços internos, sem
  // alterar dígitos/letras — normalização conservadora para não agrupar
  // referências diferentes por engano (ex.: ABC001 permanece diferente
  // de ABC0010).
  return String(ref).trim().replace(/\s+/g, " ");
}

/* =====================================================================
   CONSOLIDAÇÃO
   Agrupa produtos pela referência normalizada e soma as quantidades,
   preservando as ocorrências originais.
   ===================================================================== */
function consolidateProducts(products){
  const map = new Map();

  for (const p of products){
    // segunda camada de proteção: só mantém produtos com código, ou
    // descrição + quantidade válida (ver mesma regra em parseProductsByColumns).
    if (!p.referencia && !(p.descricao && p.quantidade !== null)) continue;

    const refNorm = normalizeReference(p.referencia) || "(sem referência)";
    if (!map.has(refNorm)){
      map.set(refNorm, {
        _uid: nextUid(),
        referencia: p.referencia || "(sem referência)",
        descricao: p.descricao || "",
        unidade: p.unidade || "",
        quantidade: 0,
        quantidadeValida: true,
        ocorrencias: [],
        lowConfidence: false,
        editadoManualmente: false,
        viaOCR: false,
        notas: new Set(),
      });
    }
    const entry = map.get(refNorm);
    entry.ocorrencias.push({ quantidade: p.quantidade, rawLine: p.rawLine });
    if (p._notaRef) entry.notas.add(p._notaRef);

    if (!entry.descricao && p.descricao) entry.descricao = p.descricao;
    if (!entry.unidade && p.unidade) entry.unidade = p.unidade;

    if (p.quantidade === null){
      entry.quantidadeValida = false;
      entry.lowConfidence = true;
    } else if (entry.quantidadeValida){
      entry.quantidade += p.quantidade;
    }

    if (!p.referencia) entry.lowConfidence = true;

    // Itens lidos via OCR nunca são 100% confiáveis como o texto nativo
    // do PDF (dígitos podem ser lidos errado) — por isso ficam sempre
    // marcados para revisão manual, mesmo quando código e quantidade
    // pareceram ser identificados corretamente.
    if (p.viaOCR){
      entry.viaOCR = true;
      entry.lowConfidence = true;
    }
  }

  return Array.from(map.values()).map((entry) => ({
    ...entry,
    notas: Array.from(entry.notas),
  }));
}

/* =====================================================================
   NF MANUAL (SEM ANEXAR PDF)
   Permite ao usuário digitar os dados de uma nota (número, fornecedor,
   CNPJ, data) e a lista de produtos dela na mão, sem precisar de PDF.
   Essa "nota" entra em state.notes exatamente como uma nota processada
   de verdade (mesmo formato), então ela aparece na lista de notas
   processadas, participa da consolidação, da exportação e do envio ao
   RecebeMais como qualquer outra.
   ===================================================================== */
let _manualNfRowCounter = 0;

function setupManualAdd(){
  const form = document.getElementById("manualAddForm");
  const btnToggle = document.getElementById("btnToggleManualAdd");
  const btnCancel = document.getElementById("btnCancelManualAdd");
  const btnConfirm = document.getElementById("btnConfirmManualAdd");
  const btnAddRow = document.getElementById("btnAddManualNfRow");

  btnToggle.addEventListener("click", () => {
    const showing = form.style.display !== "none";
    form.style.display = showing ? "none" : "block";
    if (!showing && !document.getElementById("manualNfProdutosRows").children.length){
      addManualNfProdutoRow();
    }
  });

  btnAddRow.addEventListener("click", () => addManualNfProdutoRow());

  btnCancel.addEventListener("click", () => {
    limparFormularioManual();
    form.style.display = "none";
  });

  btnConfirm.addEventListener("click", adicionarNfManual);
}

// Acrescenta uma linha vazia de produto no formulário de NF manual.
function addManualNfProdutoRow(){
  const rowId = ++_manualNfRowCounter;
  const container = document.getElementById("manualNfProdutosRows");
  const row = document.createElement("div");
  row.className = "manual-nf-produto-row";
  row.dataset.rowId = rowId;
  row.innerHTML = `
    <input type="text" class="mnf-referencia" placeholder="Referência">
    <input type="text" class="mnf-descricao" placeholder="Descrição (opcional)">
    <input type="text" class="mnf-quantidade" placeholder="Qtd">
    <input type="text" class="mnf-unidade" placeholder="UN">
    <button type="button" class="btn-remove-row" title="Remover linha">${ICONS.close}</button>
  `;
  container.appendChild(row);

  row.querySelector(".btn-remove-row").addEventListener("click", () => {
    // sempre mantém pelo menos uma linha no formulário
    if (container.children.length > 1) row.remove();
  });
}

function limparFormularioManual(){
  document.getElementById("manualNfNumero").value = "";
  document.getElementById("manualNfFornecedor").value = "";
  document.getElementById("manualNfCnpj").value = "";
  document.getElementById("manualNfData").value = "";
  document.getElementById("manualNfProdutosRows").innerHTML = "";
  addManualNfProdutoRow();
}

function adicionarNfManual(){
  const numero = document.getElementById("manualNfNumero").value.trim();
  const razaoSocial = document.getElementById("manualNfFornecedor").value.trim();
  const cnpj = document.getElementById("manualNfCnpj").value.trim();
  const dataEmissao = document.getElementById("manualNfData").value.trim();

  const rows = Array.from(document.querySelectorAll("#manualNfProdutosRows .manual-nf-produto-row"));
  const produtos = [];

  for (const row of rows){
    const referencia = row.querySelector(".mnf-referencia").value.trim();
    const descricao = row.querySelector(".mnf-descricao").value.trim();
    const qtdRaw = row.querySelector(".mnf-quantidade").value.trim();
    const unidade = row.querySelector(".mnf-unidade").value.trim();

    // linha totalmente vazia — ignora silenciosamente (não obriga a
    // preencher todas as linhas do formulário)
    if (!referencia && !descricao && !qtdRaw && !unidade) continue;

    if (!referencia){
      showError("Toda linha de produto preenchida precisa ter uma referência.");
      row.querySelector(".mnf-referencia").focus();
      return;
    }
    const quantidade = parseBRNumber(qtdRaw);
    if (quantidade === null){
      showError(`Quantidade inválida para "${referencia}". Use um número, ex.: 1000 ou 250,5.`);
      row.querySelector(".mnf-quantidade").focus();
      return;
    }

    produtos.push({ referencia, descricao, quantidade, unidade, rawLine: "", viaOCR: false });
  }

  if (!produtos.length){
    showError("Adicione pelo menos um produto com referência e quantidade.");
    return;
  }

  const nota = {
    fileName: numero ? `NF manual nº ${numero}` : "NF manual (sem número)",
    file: null,
    manual: true,
    nfInfo: { numero, razaoSocial, cnpj, dataEmissao },
    products: produtos,
    linhas: produtos.length,
    missingRef: 0,
    missingQty: 0,
    usouOCR: false,
    erro: false,
  };

  state.notes.push(nota);

  limparFormularioManual();
  document.getElementById("manualAddForm").style.display = "none";

  recomputeConsolidated();
  renderNotesList();
  renderAll();
  document.getElementById("resultsSection").classList.add("visible");
  showSuccess(`NF manual adicionada com ${produtos.length} produto(s).`);
}

// Recalcula state.consolidated a partir de TODAS as notas em state.notes
// (processadas via PDF + manuais) — usado tanto após o processamento de
// PDFs quanto após adicionar uma NF manual.
function recomputeConsolidated(){
  const notasOk = state.notes.filter((n) => !n.erro);
  const todosProdutos = [];
  for (const nota of notasOk){
    const notaRef = (nota.nfInfo && nota.nfInfo.numero) ? nota.nfInfo.numero : nota.fileName;
    for (const p of nota.products){
      todosProdutos.push({ ...p, _notaRef: notaRef });
    }
  }
  state.totalLinhas = todosProdutos.length;
  state.consolidated = consolidateProducts(todosProdutos);
}

/* =====================================================================
   RENDERIZAÇÃO
   ===================================================================== */
function renderNotesList(){
  const panel = document.getElementById("notesPanel");
  const list = document.getElementById("notesList");
  const btnGuardarErros = document.getElementById("btnGuardarErros");
  list.innerHTML = "";

  if (!state.notes.length){
    panel.classList.remove("visible");
    return;
  }

  const temErro = state.notes.some((n) => n.erro);
  btnGuardarErros.style.display = temErro ? "inline-block" : "none";

  state.notes.forEach((nota, idx) => {
    const div = document.createElement("div");
    div.className = "note-item" + (nota.erro ? " note-error" : "");

    const btnReportar = nota.file
      ? `<button class="btn-ghost" data-report-idx="${idx}" type="button"
           style="font-size:0.68rem; padding:3px 8px; margin-left:8px;"
           title="Marcar esta nota como incorreta e enviar o PDF para revisão">
           ${ICONS.warning} Reportar erro
         </button>`
      : "";

    if (nota.erro){
      div.innerHTML = `
        <span class="note-file">${escapeHTML(nota.fileName)}${btnReportar}</span>
        <span class="note-error-msg">${escapeHTML(nota.errorMsg || "Não foi possível processar esta nota.")}</span>
      `;
    } else {
      const info = nota.nfInfo || {};
      const numero = info.numero ? `Nº ${escapeHTML(info.numero)}` : "Nº não identificado";
      const fornecedor = info.razaoSocial ? escapeHTML(info.razaoSocial) : "";
      div.innerHTML = `
        <span class="note-file">${escapeHTML(nota.fileName)}${nota.manual ? ` <span class="badge-warn" style="background:#eef2fb;color:#3a4fb0;border-color:#d4dbf5;" title="Nota adicionada manualmente, sem PDF anexado">${ICONS.fileText} NF manual</span>` : ""}${nota.usouOCR ? ` <span class="badge-warn" style="background:#eef5fb;color:var(--primary-dark);border-color:#cfe0ee;" title="Esta nota não tinha texto extraível e foi lida via OCR">${ICONS.search} Lida via OCR</span>` : ""}${btnReportar}</span>
        <span class="note-num">${numero}</span>
        <span class="note-fornecedor-wrap" data-fornecedor-wrap-idx="${idx}">
          <span class="${fornecedor ? "note-fornecedor" : "note-fornecedor-empty"}">${fornecedor || "Fornecedor não identificado"}</span>
          <button type="button" class="btn-edit-fornecedor" data-edit-fornecedor-idx="${idx}" title="Editar nome do fornecedor">${ICONS.edit}</button>
        </span>
        <span class="note-linhas">${nota.linhas} linha(s)</span>
      `;
    }
    list.appendChild(div);
  });

  list.querySelectorAll("[data-report-idx]").forEach((btn) => {
    btn.addEventListener("click", () => reportarErroManual(Number(btn.dataset.reportIdx)));
  });

  list.querySelectorAll("[data-edit-fornecedor-idx]").forEach((btn) => {
    btn.addEventListener("click", () => iniciarEdicaoFornecedor(Number(btn.dataset.editFornecedorIdx)));
  });

  panel.classList.add("visible");
}

// Troca o nome do fornecedor (exibido na lista de notas processadas) por
// um campo de texto editável, permitindo corrigir manualmente quando a
// extração automática não encontrou o nome ou encontrou errado.
function iniciarEdicaoFornecedor(idx){
  const wrap = document.querySelector(`[data-fornecedor-wrap-idx="${idx}"]`);
  const nota = state.notes[idx];
  if (!wrap || !nota) return;

  const atual = (nota.nfInfo && nota.nfInfo.razaoSocial) || "";
  wrap.innerHTML = `
    <input type="text" class="input-fornecedor-edit" data-fornecedor-input-idx="${idx}"
           value="${escapeAttr(atual)}" placeholder="Nome do fornecedor" />
    <button type="button" class="btn-save-fornecedor" data-save-fornecedor-idx="${idx}" title="Salvar">${ICONS.check}</button>
    <button type="button" class="btn-cancel-fornecedor" data-cancel-fornecedor-idx="${idx}" title="Cancelar">${ICONS.close}</button>
  `;

  const input = wrap.querySelector("input");
  input.focus();
  input.select();
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){ e.preventDefault(); salvarFornecedor(idx); }
    if (e.key === "Escape"){ e.preventDefault(); renderNotesList(); }
  });
  wrap.querySelector("[data-save-fornecedor-idx]")
    .addEventListener("click", () => salvarFornecedor(idx));
  wrap.querySelector("[data-cancel-fornecedor-idx]")
    .addEventListener("click", () => renderNotesList());
}

// Salva a correção manual do fornecedor no estado da nota. Como o nome
// do fornecedor da carga (envio ao RecebeMais, nome do arquivo Excel
// etc.) é sempre recalculado a partir de state.notes na hora do uso,
// basta atualizar aqui — nada mais precisa ser tocado manualmente.
function salvarFornecedor(idx){
  const input = document.querySelector(`[data-fornecedor-input-idx="${idx}"]`);
  const nota = state.notes[idx];
  if (!input || !nota) return;

  const novoNome = input.value.trim();
  if (!nota.nfInfo) nota.nfInfo = {};
  nota.nfInfo.razaoSocial = novoNome || null;

  renderNotesList();
}

function calculateTotals(list){
  const linhas = state.totalLinhas;
  const refs = list.length;
  const notas = state.notes.filter((n) => !n.erro).length;
  let qtdTotal = 0;
  let qtdValida = true;
  for (const p of list){
    if (!p.quantidadeValida){ qtdValida = false; }
    qtdTotal += p.quantidade;
  }
  return { linhas, refs, notas, qtdTotal, qtdValida };
}

function getFilteredSorted(){
  let list = state.consolidated;

  if (state.searchTerm){
    const term = normKeyword(state.searchTerm);
    list = list.filter((p) =>
      normKeyword(p.referencia).includes(term) || normKeyword(p.descricao).includes(term)
    );
  }

  const key = state.sortKey;
  const dir = state.sortDir;
  list = [...list].sort((a, b) => {
    let va = a[key], vb = b[key];
    if (key === "quantidade"){
      va = va || 0; vb = vb || 0;
      return (va - vb) * dir;
    }
    va = (va || "").toString().toLowerCase();
    vb = (vb || "").toString().toLowerCase();
    return va.localeCompare(vb) * dir;
  });

  return list;
}

function renderAll(){
  const totals = calculateTotals(state.consolidated);
  document.getElementById("cardNotas").textContent = totals.notas.toLocaleString("pt-BR");
  document.getElementById("cardLinhas").textContent = totals.linhas.toLocaleString("pt-BR");
  document.getElementById("cardRefs").textContent = totals.refs.toLocaleString("pt-BR");
  document.getElementById("cardQtd").textContent = totals.qtdValida
    ? totals.qtdTotal.toLocaleString("pt-BR", { maximumFractionDigits: 3 })
    : totals.qtdTotal.toLocaleString("pt-BR", { maximumFractionDigits: 3 }) + " *";

  renderTable();
  updateSortArrows();
}

function renderTable(){
  const list = getFilteredSorted();
  const tbody = document.getElementById("tableBody");
  const emptyState = document.getElementById("emptyState");
  tbody.innerHTML = "";

  if (!list.length){
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  for (const p of list){
    const tr = document.createElement("tr");
    const qtdDisplay = p.quantidadeValida
      ? p.quantidade.toLocaleString("pt-BR", { maximumFractionDigits: 3 })
      : (p.quantidade ? p.quantidade.toLocaleString("pt-BR", { maximumFractionDigits: 3 }) : "—");

    const editingRef = state.editing && state.editing.uid === p._uid && state.editing.field === "referencia";
    const editingDesc = state.editing && state.editing.uid === p._uid && state.editing.field === "descricao";
    const editingQtd = state.editing && state.editing.uid === p._uid && state.editing.field === "quantidade";

    const refCell = editingRef
      ? renderEditFieldHTML(p._uid, "referencia", p.referencia, "input")
      : `<div class="editable-cell">
          <span class="cell-text">${escapeHTML(p.referencia)}${p.viaOCR ? `<span class="badge-warn" style="background:#eef5fb;color:var(--primary-dark);border-color:#cfe0ee;" title="Lido via OCR — confira visualmente, dígitos podem sair errados">${ICONS.search} OCR</span>` : ""}${p.lowConfidence ? `<span class="badge-warn" title="Revisão necessária">${ICONS.warning} Revisão</span>` : (p.editadoManualmente ? `<span class="badge-warn" style="background:#eefaf3;color:#1f7a4d;border-color:#bfe8d3;" title="Editado manualmente">${ICONS.edit} Editado</span>` : "")}</span>
          <button class="btn-edit-icon" data-uid="${p._uid}" data-field="referencia" title="Editar referência">${ICONS.edit}</button>
        </div>`;

    const descCell = editingDesc
      ? renderEditFieldHTML(p._uid, "descricao", p.descricao, "textarea")
      : `<div class="editable-cell">
          <span class="cell-text">${escapeHTML(p.descricao || "—")}</span>
          <button class="btn-edit-icon" data-uid="${p._uid}" data-field="descricao" title="Editar descrição">${ICONS.edit}</button>
        </div>`;

    const qtdCell = editingQtd
      ? renderEditFieldHTML(p._uid, "quantidade", p.quantidadeValida ? String(p.quantidade) : "", "input")
      : `<div class="editable-cell" style="justify-content:flex-end;">
          <span class="cell-text">${qtdDisplay}</span>
          <button class="btn-edit-icon" data-uid="${p._uid}" data-field="quantidade" title="Editar quantidade">${ICONS.edit}</button>
        </div>`;

    tr.innerHTML = `
      <td class="ref">${refCell}</td>
      <td>${descCell}</td>
      <td class="num">${qtdCell}</td>
      <td>${escapeHTML(p.unidade || "—")}</td>
    `;
    tbody.appendChild(tr);
  }

  // liga os cliques dos lápis e dos botões de salvar/cancelar da edição
  tbody.querySelectorAll(".btn-edit-icon").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.editing = { uid: Number(btn.dataset.uid), field: btn.dataset.field };
      renderTable();
    });
  });
  tbody.querySelectorAll("[data-action='save-edit']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const uid = Number(btn.dataset.uid);
      const field = btn.dataset.field;
      const input = tbody.querySelector(`[data-input-for-uid="${uid}"][data-input-for-field="${field}"]`);
      saveEdit(uid, field, input ? input.value : "");
    });
  });
  tbody.querySelectorAll("[data-action='cancel-edit']").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.editing = null;
      renderTable();
    });
  });
  tbody.querySelectorAll("[data-input-for-uid]").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.tagName !== "TEXTAREA"){
        e.preventDefault();
        saveEdit(Number(input.dataset.inputForUid), input.dataset.inputForField, input.value);
      } else if (e.key === "Escape"){
        state.editing = null;
        renderTable();
      }
    });
    input.focus();
    input.select && input.select();
  });
}

// Monta o HTML do campo de edição inline (input para referência, textarea
// para descrição) com botões de salvar/cancelar.
function renderEditFieldHTML(uid, field, currentValue, tag){
  const valueEscaped = escapeAttr(currentValue || "");
  const fieldEl = tag === "textarea"
    ? `<textarea data-input-for-uid="${uid}" data-input-for-field="${field}" rows="3">${escapeHTML(currentValue || "")}</textarea>`
    : `<input type="text" data-input-for-uid="${uid}" data-input-for-field="${field}" value="${valueEscaped}">`;

  return `
    <div class="edit-field-wrap">
      ${fieldEl}
      <div class="edit-field-actions">
        <button class="btn-primary" type="button" data-action="save-edit" data-uid="${uid}" data-field="${field}">Salvar</button>
        <button class="btn-ghost" type="button" data-action="cancel-edit" data-uid="${uid}" data-field="${field}">Cancelar</button>
      </div>
    </div>
  `;
}

// Salva a edição manual de referência ou descrição feita pelo usuário —
// útil quando o fornecedor emite a nota com dados extras (Part Number,
// lote, datas) misturados na descrição, o que prejudica a contagem às
// cegas no RecebeMais. A edição é aplicada diretamente no produto
// consolidado (afeta exportação e envio para o RecebeMais).
function saveEdit(uid, field, rawValue){
  const p = state.consolidated.find((item) => item._uid === uid);
  if (!p) { state.editing = null; renderTable(); return; }

  const value = (rawValue || "").trim();

  if (field === "referencia"){
    p.referencia = value || "(sem referência)";
    p.editadoManualmente = true;
    // se o usuário forneceu uma referência de verdade, a linha deixa de
    // precisar de revisão por falta de código (a quantidade ainda pode
    // manter o alerta, se ela própria continuar inválida).
    if (value) p.lowConfidence = !p.quantidadeValida;
  } else if (field === "descricao"){
    p.descricao = value;
    p.editadoManualmente = true;
  } else if (field === "quantidade"){
    const num = parseBRNumber(value);
    if (num === null){
      showError("Quantidade inválida. Use um número, ex.: 1000 ou 250,5.");
      return; // mantém o campo aberto pro usuário corrigir
    }
    p.quantidade = num;
    p.quantidadeValida = true;
    p.editadoManualmente = true;
    // se a quantidade agora é válida e a referência também está ok, a
    // linha deixa de precisar de revisão manual.
    if (p.referencia && p.referencia !== "(sem referência)") p.lowConfidence = false;
  }

  state.editing = null;
  renderTable();
}

function updateSortArrows(){
  document.querySelectorAll("thead th[data-sort]").forEach((th) => {
    const arrow = th.querySelector(".arrow");
    if (th.dataset.sort === state.sortKey){
      arrow.innerHTML = state.sortDir === 1 ? ICONS.chevronUp : ICONS.chevronDown;
    } else {
      arrow.innerHTML = "";
    }
  });
}

function escapeHTML(str){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Igual escapeHTML, mas também escapa aspas duplas — necessário para
// valores inseridos dentro de atributos HTML (ex.: value="...").
function escapeAttr(str){
  return escapeHTML(str).replace(/"/g, "&quot;");
}

/* =====================================================================
   PESQUISA
   ===================================================================== */
function setupSearch(){
  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.searchTerm = e.target.value;
    renderTable();
  });
}

/* =====================================================================
   ORDENAÇÃO
   ===================================================================== */
function setupSort(){
  document.querySelectorAll("thead th[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (state.sortKey === key){
        state.sortDir *= -1;
      } else {
        state.sortKey = key;
        state.sortDir = 1;
      }
      renderTable();
      updateSortArrows();
    });
  });
}

/* =====================================================================
   EXPORTAÇÃO
   ===================================================================== */
function exportCSV(){
  const list = getFilteredSorted();
  if (!list.length) return;

  const header = "Referência,Descrição,Quantidade,Unidade,Notas";
  const lines = list.map((p) => {
    const qtd = p.quantidadeValida ? p.quantidade : (p.quantidade || "");
    const notasList = p.notas && p.notas.length ? p.notas.join(" | ") : "";
    return [csvEscape(p.referencia), csvEscape(p.descricao), qtd, csvEscape(p.unidade), csvEscape(notasList)].join(",");
  });

  const csvContent = "\uFEFF" + [header, ...lines].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = buildExportFilename() + ".csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csvEscape(value){
  const str = String(value ?? "");
  if (/[",\n]/.test(str)) return '"' + str.replace(/"/g, '""') + '"';
  return str;
}

// Exporta um arquivo .xlsx com a lista de referências consolidadas
// (entre todas as notas processadas), uma aba com o resumo geral e uma
// aba listando cada nota individualmente.
/* =====================================================================
   ENVIAR PARA O RECEBEMAIS (Firebase Firestore)
   ===================================================================== */
// Monta o campo "forn" (fornecedor) para a carga inteira. Quando todas as
// notas têm a mesma razão social, usa esse nome. Quando há fornecedores
// diferentes ou algum não foi identificado, junta os nomes distintos —
// e NUNCA deixa vazio, para que o RecebeMais preencha automaticamente o
// campo de fornecedor ao importar da nuvem, sem bloquear pedindo de novo.
function buildFornecedorCarga(notas){
  const nomes = new Set(
    notas
      .map((n) => n.nfInfo && n.nfInfo.razaoSocial)
      .filter(Boolean)
  );
  if (nomes.size === 1) return Array.from(nomes)[0];
  if (nomes.size > 1) return Array.from(nomes).join(" + ");
  return "Carga sem fornecedor identificado";
}

// Monta o campo "nf" com os números de todas as notas da carga,
// separados por vírgula (o RecebeMais apenas exibe esse texto, então uma
// lista legível é suficiente mesmo quando há várias notas).
function buildNumerosNfCarga(notas){
  const numeros = notas
    .map((n) => n.nfInfo && n.nfInfo.numero)
    .filter(Boolean);
  return numeros.join(", ");
}

// Monta o campo "cnpj" só quando todas as notas são do mesmo fornecedor
// (mesmo CNPJ) — caso contrário, deixa em branco em vez de mostrar um
// CNPJ que só corresponde a parte da carga.
function buildCnpjCarga(notas){
  const cnpjs = new Set(
    notas
      .map((n) => n.nfInfo && n.nfInfo.cnpj)
      .filter(Boolean)
  );
  return cnpjs.size === 1 ? Array.from(cnpjs)[0] : "";
}

// TODO: preencher com o firebaseConfig real do projeto RecebeMais e com
// o nome/estrutura de campos exatos da coleção "pendentes" que o
// RecebeMais espera. Enquanto isso não for configurado, o botão "Enviar"
// mostra uma mensagem explicando o que falta, em vez de falhar
// silenciosamente ou enviar dados no formato errado.
// URL do backend seguro do Assistente IA (Etapas 7+8) — troque pelo
// endereço real depois de publicar o servidor no cPanel (ver
// ia-backend/README.md). Enquanto estiver com esse valor, o card
// "Assistente RecebeMais" avisa que ainda não foi configurado, em vez
// de tentar chamar um endereço que não existe.
// URL base do backend seguro (Etapas 7+8, agora reaproveitado também
// pela Administração — criar login de outra pessoa exige o Admin SDK,
// que só existe no servidor, nunca no navegador).
const IA_BACKEND_BASE_URL = "https://recebemais-online.firebaseapp.com/spark";
const IA_BACKEND_URL = IA_BACKEND_BASE_URL + "/api/assistente";

const RECEBEMAIS_CONFIG = {
  firebaseConfig: firebase.app().options,
  colecaoPendentes: "pendentes",
  // Log permanente de tudo que já foi enviado ao RecebeMais — diferente
  // de "pendentes" (que é consumido/apagado pelo RecebeMais assim que
  // processa a carga), esta coleção nunca é apagada por este app, então
  // serve de histórico real pro Painel.
  colecaoHistorico: "historico_envios",
};

/* =====================================================================
   AUTENTICAÇÃO (Firebase Authentication)
   Protege o acesso ao extrator com login por e-mail/senha. O Firebase
   cuida de guardar as senhas de forma segura — nada de senha exposta no
   código. A sessão em si (credenciais salvas pelo Firebase) continua
   valendo entre visitas, mas o ACESSO à tela do extrator expira sozinho
   depois de um tempo configurável (ver "Tempo login aberto" no menu
   Configurações) e pede e-mail/senha de novo, mesmo sem ter feito
   logout manualmente.
   ===================================================================== */
const SESSION_TIMEOUT_STORAGE_KEY = "cfgSessionTimeoutMin";
const SESSION_TIMEOUT_DEFAULT_MIN = 30; // usado só se o usuário nunca escolheu uma opção em Configurações
const SESSION_TIMEOUT_OPTIONS = [
  { value: "5", label: "5 minutos" },
  { value: "30", label: "30 minutos" },
  { value: "180", label: "3 horas" },
  { value: "sempre", label: "Sempre (nunca expira)" },
];
let __sessionTimeoutId = null;
let __sessionExpiredMsg = false; // sinaliza pro próximo "onAuthStateChanged(null)" mostrar o aviso de expiração, em vez do login em branco
let __authInstance = null; // guarda a instância do Firebase Auth pra Configurações conseguir reiniciar o cronômetro na hora, sem precisar deslogar

function _getSessionTimeoutSetting(){
  try{
    const saved = localStorage.getItem(SESSION_TIMEOUT_STORAGE_KEY);
    if (saved === "sempre") return "sempre";
    const n = parseInt(saved);
    if (n && SESSION_TIMEOUT_OPTIONS.some((o) => o.value === String(n))) return String(n);
  }catch(e){}
  return String(SESSION_TIMEOUT_DEFAULT_MIN);
}

function _setSessionTimeoutSetting(value){
  try{ localStorage.setItem(SESSION_TIMEOUT_STORAGE_KEY, value); }catch(e){}
}

// Retorna o timeout em ms, ou null se a opção escolhida for "sempre"
// (nesse caso o acesso nunca expira sozinho).
function _getSessionTimeoutMs(){
  const setting = _getSessionTimeoutSetting();
  if (setting === "sempre") return null;
  return parseInt(setting) * 60 * 1000;
}

function _clearSessionTimeout(){
  if (__sessionTimeoutId){
    clearTimeout(__sessionTimeoutId);
    __sessionTimeoutId = null;
  }
}

function _startSessionTimeout(auth){
  _clearSessionTimeout();
  const ms = _getSessionTimeoutMs();
  if (ms === null) return; // "Sempre" — não agenda expiração nenhuma
  __sessionTimeoutId = setTimeout(() => {
    __sessionExpiredMsg = true;
    auth.signOut();
  }, ms);
}

function initAuth(){
  if (typeof firebase === "undefined"){
    document.getElementById("loginError").textContent =
      "Não foi possível carregar a biblioteca de login. Verifique sua conexão.";
    document.getElementById("loginError").classList.add("visible");
    document.getElementById("loginScreen").classList.add("visible");
    return;
  }

  if (!window.__firebaseApp){
    window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
  }
  const auth = firebase.auth();
  __authInstance = auth;

  auth.onAuthStateChanged((user) => {
    if (user){
      document.getElementById("loginScreen").classList.remove("visible");
      document.getElementById("appContainer").style.display = "flex";
      document.getElementById("userEmailLabel").textContent = user.email || "";
      // O menu lateral sempre começa FECHADO logo após o login — não
      // herda se ficou aberto/fechado numa sessão anterior.
      toggleSidebar(true);
      // Cada vez que o acesso é concedido (login novo OU sessão do
      // Firebase já salva de uma visita anterior), o cronômetro
      // recomeça do zero, usando o tempo escolhido em Configurações —
      // depois disso o acesso é encerrado e e-mail/senha são pedidos de
      // novo (a menos que a opção escolhida seja "Sempre").
      _startSessionTimeout(auth);
      atualizarPainelConfigSessao();
      carregarPerfilAtual();
      carregarVinculoEmpresa();
    } else {
      document.getElementById("appContainer").style.display = "none";
      document.getElementById("loginScreen").classList.add("visible");
      _clearSessionTimeout();
      // Limpa o perfil em memória ao deslogar — evita que, ao logar com
      // outra conta no mesmo dispositivo, o avatar/nome da conta
      // anterior apareça por um instante antes do novo perfil carregar.
      __perfilAtual = { nome: "", fotoBase64: "" };
      __perfilCarregado = false;
      _aplicarAvatarUI("", "", "");

      const erroEl = document.getElementById("loginError");
      if (__sessionExpiredMsg){
        erroEl.textContent = "Sessão expirada — faça login novamente.";
        erroEl.classList.add("visible");
        __sessionExpiredMsg = false;
      } else {
        erroEl.classList.remove("visible");
      }
    }
  });

  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginPassword").value;
    const erroEl = document.getElementById("loginError");
    const spinnerEl = document.getElementById("loginSpinner");
    erroEl.classList.remove("visible");
    spinnerEl.classList.add("visible");
    try{
      await auth.signInWithEmailAndPassword(email, senha);
      registrarEvento("USUARIO_LOGIN", {});
    } catch (err){
      console.error(err);
      const mensagens = {
        "auth/invalid-email": "E-mail inválido.",
        "auth/user-not-found": "Usuário não encontrado.",
        "auth/wrong-password": "Senha incorreta.",
        "auth/invalid-credential": "E-mail ou senha incorretos.",
        "auth/too-many-requests": "Muitas tentativas — aguarde um pouco e tente de novo.",
      };
      erroEl.textContent = mensagens[err.code] || "Não foi possível entrar. Tente novamente.";
      erroEl.classList.add("visible");
    } finally {
      spinnerEl.classList.remove("visible");
    }
  });

  document.getElementById("btnLogout").addEventListener("click", () => {
    registrarEvento("USUARIO_LOGOUT", {});
    _clearSessionTimeout();
    auth.signOut();
  });
}

/* =====================================================================
   GUARDAR NOTAS COM ERRO (Firebase Storage + Firestore)
   Coleta o PDF original das notas que não puderam ser processadas e
   sobe pro Firebase, junto com a mensagem de erro e a data — pra dar
   pra revisar e corrigir o parser depois, fora do momento da conferência
   no galpão.
   ===================================================================== */
// Sobe um único PDF (com sua mensagem de erro/observação) para o
// Configuração do Cloudinary (armazenamento gratuito dos PDFs com erro,
// separado do Firestore — usado só para o arquivo em si; os metadados
// como nome, data e motivo do erro continuam no Firestore, que já
// funciona bem para isso e não sofre com o tamanho dos arquivos).
const CLOUDINARY_CLOUD_NAME = "dlry7nlb";
const CLOUDINARY_UPLOAD_PRESET = "notas_com_erro";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`;

// Sobe o PDF pro Cloudinary (upload "unsigned", direto do navegador, sem
// precisar de servidor nem de credencial secreta exposta no código) e
// grava os metadados (nome, motivo do erro, link do PDF) no Firestore.
async function _uploadNotaComErro(file, errorMsg){
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const resposta = await fetch(CLOUDINARY_UPLOAD_URL, { method: "POST", body: formData });
  if (!resposta.ok){
    const detalhe = await resposta.text().catch(() => "");
    throw new Error("Falha ao enviar o PDF para o Cloudinary" + (detalhe ? ": " + detalhe.slice(0, 200) : "."));
  }
  const dados = await resposta.json();

  if (!window.__firebaseApp){
    window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
  }
  const db = firebase.firestore();

  await db.collection("notas_com_erro").add({
    criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
    criadoPorUid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : null,
    criadoPorEmail: firebase.auth().currentUser ? firebase.auth().currentUser.email : null,
    fileName: file.name,
    errorMsg: errorMsg || "",
    pdfUrl: dados.secure_url,
    cloudinaryPublicId: dados.public_id,
  });
}

// Monta uma mensagem de erro mais útil para o envio/reporte de notas com
// erro, distinguindo o caso comum de "rede bloqueada" (ex.: testando
// dentro do preview do Claude, que não permite chamadas externas) do
// resto — sempre mostrando o motivo real quando disponível, em vez de
// uma mensagem genérica que esconde a causa.
function _mensagemErroEnvio(err, acao){
  const msg = (err && err.message) || "";
  if (/failed to fetch|networkerror|load failed/i.test(msg)){
    return (
      `Não foi possível ${acao}: a chamada de rede para o Cloudinary ou o Firebase foi bloqueada. ` +
      "Se estiver testando dentro do preview do Claude, abra este arquivo direto no navegador " +
      "(ou hospedado no GitHub Pages) e tente de novo — o preview bloqueia conexões externas."
    );
  }
  if (msg) return `Não foi possível ${acao}: ${msg}`;
  return `Não foi possível ${acao}. Verifique sua conexão e tente novamente.`;
}

/* =====================================================================
   EVENTOS — camada de auditoria/monitoramento (Etapa 1 do projeto
   RecebeMais Intelligence). Cada evento importante do fluxo grava um
   registro em "eventos", sempre best-effort — nunca trava nem quebra o
   fluxo principal se a gravação falhar, porque é um log, não uma
   operação crítica. Isolado por "criadoPorUid", mesmo padrão de
   segurança já usado no resto do app.
   ===================================================================== */
async function registrarEvento(tipoEvento, dados){
  dados = dados || {};
  try{
    if (typeof firebase === "undefined" || !firebase.apps || !firebase.apps.length) return;
    const usuario = firebase.auth().currentUser;
    if (!usuario) return;
    const db = firebase.firestore();
    await db.collection("eventos").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      tipoEvento,
      usuarioId: usuario.uid,
      usuarioNome: (typeof __perfilAtual !== "undefined" && __perfilAtual && __perfilAtual.nome) || usuario.email || null,
      origem: "extrator",
      criadoPorUid: usuario.uid,
      // Vínculo com a empresa (Administração — Etapa 1) — permite
      // apurar custo de consultas e métricas por empresa, não só por
      // conta individual. Fica null pra quem ainda não foi cadastrado
      // em "usuarios" (sistema de papéis ainda não em uso por essa
      // conta) — nesse caso, essas métricas simplesmente não contam
      // esse evento até o cadastro ser feito.
      empresaId: (typeof __meuEmpresaId !== "undefined" && __meuEmpresaId) || null,
      ...dados,
    });
  } catch (err){
    console.error("Falha ao registrar evento:", tipoEvento, err);
  }
}

// Carrega, uma vez por login, a qual empresa esta conta pertence (se
// já estiver cadastrada em "usuarios" — ver Administração). Cacheado
// globalmente pra registrarEvento() marcar todo evento com a empresa
// certa, sem precisar consultar o Firestore de novo a cada evento.
let __meuEmpresaId = null;
let __meuUsuarioLogado = null; // { nome, email, papel, empresaId, superAdmin, ... } ou null se ainda não cadastrado em "usuarios"
async function carregarVinculoEmpresa(){
  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const usuario = firebase.auth().currentUser;
    if (!usuario) return;
    const doc = await firebase.firestore().collection("usuarios").doc(usuario.uid).get();
    __meuUsuarioLogado = doc.exists ? doc.data() : null;
    __meuEmpresaId = __meuUsuarioLogado ? (__meuUsuarioLogado.empresaId || null) : null;
    aplicarControleAcessoPorPapel();
  } catch (err){
    console.error("Não foi possível carregar o vínculo de empresa:", err);
    __meuEmpresaId = null;
    __meuUsuarioLogado = null;
  }
}

// Trava o botão "Configurações" (chave de API, provedor de consulta,
// etc.) pra quem não é super administrador — essas informações passam
// a ser administradas só por uma pessoa (você), mesmo que a conta seja
// "admin" de uma empresa específica. Enquanto o cadastro em "usuarios"
// ainda não carregou (ou não existe), o botão fica travado por padrão
// — só libera quando confirma superAdmin === true.
// Decide se o papel logado tem acesso a uma view específica. Usado
// tanto pra travar os botões do menu quanto como segunda camada de
// segurança dentro do próprio switchView() (ver abaixo).
function _temAcessoView(view){
  // Ainda sem cadastro em "usuarios" (fluxo de bootstrap em
  // Administração) — libera tudo, pra não travar quem está criando a
  // própria empresa agora.
  if (!__meuUsuarioLogado) return true;
  // Planilha (Romaneio) é exclusiva do super admin — nem "admin" comum
  // de uma empresa vê essa opção, diferente do resto do app.
  if (view === "planilha") return __meuUsuarioLogado.superAdmin === true;
  if (__meuUsuarioLogado.superAdmin === true || __meuUsuarioLogado.papel === "admin") return true;
  // Configurações agora é compartilhado — todo mundo entra, só que
  // cada seção lá dentro aparece ou não conforme o papel (ver
  // atualizarPainelConfigVisibilidadePorPapel). O tempo de sessão, por
  // exemplo, é algo que qualquer um deveria poder ajustar no próprio
  // aparelho.
  if (view === "config") return true;
  if (__meuUsuarioLogado.papel === "gestor") return view === "dashboard" || view === "extrator";
  if (__meuUsuarioLogado.papel === "funcionario") return view === "extrator" || view === "painel";
  return true;
}

function aplicarControleAcessoPorPapel(){
  const mapaViews = { extrator: "navExtrator", dashboard: "navDashboard", painel: "navPainel", planilha: "navPlanilha", config: "navConfig", erros: "navErros", admin: "navAdmin" };
  let primeiraPermitida = null;
  let viewAtualPermitida = true;

  Object.keys(mapaViews).forEach((view) => {
    const navEl = document.getElementById(mapaViews[view]);
    if (!navEl) return;
    const permitido = _temAcessoView(view);
    // Escondido de vez (não só desabilitado/acinzentado) — quem não
    // tem acesso a uma área nem fica sabendo que ela existe no menu.
    navEl.style.display = permitido ? "" : "none";
    navEl.disabled = !permitido;
    if (permitido && !primeiraPermitida) primeiraPermitida = view;

    const viewEl = document.getElementById("view-" + view);
    if (viewEl && viewEl.classList.contains("active") && !permitido) viewAtualPermitida = false;
  });

  // A tela que abre por padrão (Extrator Sefaz) pode não ser permitida
  // pro papel logado (ex: gestor) — nesse caso troca automaticamente
  // pra primeira tela que ele realmente pode ver, assim que o papel
  // termina de carregar (evita deixar a pessoa olhando uma tela vazia
  // ou bloqueada logo depois de entrar).
  if (!viewAtualPermitida && primeiraPermitida){
    switchView(primeiraPermitida);
  }

  // Botão "Excluir histórico de contagens" — só super admin e gestor.
  const btnExcluirHistEl = document.getElementById("btnExcluirHistoricoContagens");
  if (btnExcluirHistEl){
    const podeExcluirHistorico = !!(__meuUsuarioLogado && (__meuUsuarioLogado.superAdmin === true || __meuUsuarioLogado.papel === "gestor"));
    btnExcluirHistEl.style.display = podeExcluirHistorico ? "" : "none";
  }
}

/* =====================================================================
   MONITORAMENTO TÉCNICO (Etapa 4) — captura automaticamente qualquer
   erro de JavaScript não tratado e qualquer Promise rejeitada sem
   catch, gravando como ERRO_SISTEMA. Não substitui os registros
   manuais já feitos em pontos específicos (esses continuam com o
   "setor" certo); isso aqui é uma rede de segurança pra pegar o que
   passar batido. Deduplicação simples evita inundar "eventos" quando o
   mesmo erro se repete várias vezes na mesma sessão (ex: um erro dentro
   de um loop).
   ===================================================================== */
(function _instalarCapturaDeErrosExtrator(){
  const jaLogados = new Set();
  function _logErroAutomatico(mensagem, extra){
    const chave = String(mensagem || "Erro desconhecido").slice(0, 200);
    if (jaLogados.has(chave)) return;
    jaLogados.add(chave);
    if (typeof registrarEvento === "function"){
      registrarEvento("ERRO_SISTEMA", { mensagem: chave, setor: "extrator", metadata: extra || null });
    }
  }
  window.addEventListener("error", (event) => {
    _logErroAutomatico(event.message, { arquivo: event.filename || null, linha: event.lineno || null });
  });
  window.addEventListener("unhandledrejection", (event) => {
    const motivo = event.reason && event.reason.message ? event.reason.message : String(event.reason);
    _logErroAutomatico("Promise rejeitada: " + motivo, null);
  });
})();

function _checaFirebasePronto(){
  if (!RECEBEMAIS_CONFIG.firebaseConfig){
    showError("O envio para o Firebase ainda não está configurado neste arquivo.");
    return false;
  }
  if (typeof firebase === "undefined"){
    showError(
      "A biblioteca do Firebase não carregou neste ambiente (bloqueio de rede ou script externo). " +
      "Abra este arquivo direto no navegador (ou hospedado no GitHub Pages) em vez de usar o preview do Claude, e tente de novo."
    );
    return false;
  }
  if (!firebase.auth().currentUser){
    showError("Sessão expirada — faça login de novo antes de enviar.");
    return false;
  }
  return true;
}

async function guardarNotasComErro(){
  const notasComErro = state.notes.filter((n) => n.erro && n.file);
  if (!notasComErro.length){
    showError("Não há notas com erro para guardar.");
    return;
  }
  if (!_checaFirebasePronto()) return;

  const btn = document.getElementById("btnGuardarErros");
  if (btn) btn.disabled = true;

  try{
    // evita subir o mesmo arquivo duas vezes quando um PDF gerou mais de
    // uma "nota com erro" internamente (raro, mas possível)
    const arquivosUnicos = Array.from(new Set(notasComErro.map((n) => n.file)));

    let enviados = 0;
    for (let i = 0; i < arquivosUnicos.length; i++){
      const file = arquivosUnicos[i];
      const nota = notasComErro.find((n) => n.file === file);
      setProcessing(
        true,
        "Guardando notas com erro...",
        `Enviando ${i + 1}/${arquivosUnicos.length}: ${file.name}`
      );
      await _uploadNotaComErro(file, nota.errorMsg);
      enviados++;
    }

    setProcessing(false);
    showSuccess(
      enviados > 1
        ? `${enviados} notas com erro guardadas com sucesso.`
        : "Nota com erro guardada com sucesso."
    );
  } catch (err){
    console.error(err);
    setProcessing(false);
    showError(_mensagemErroEnvio(err, "guardar as notas com erro"));
  } finally {
    if (btn) btn.disabled = false;
  }
}

// Reporte manual: mesmo quando o app não detectou nenhum erro técnico
// (a nota "processou"), os dados extraídos podem estar errados (ex.:
// quantidade errada, referência incompleta). Esse botão aparece em TODA
// nota da lista — inclusive as que deram certo — para o usuário marcar
// "essa aqui saiu errada" e mandar o PDF original para revisão depois,
// com uma observação opcional sobre o que notou de errado.
async function reportarErroManual(uidNota){
  const nota = state.notes[uidNota];
  if (!nota || !nota.file){
    showError("Não foi possível localizar o arquivo original desta nota.");
    return;
  }
  if (!_checaFirebasePronto()) return;

  const obs = prompt("O que saiu errado nessa nota? (opcional, ajuda na hora de corrigir)", "");
  if (obs === null) return; // usuário cancelou

  try{
    setProcessing(true, "Reportando nota...", `Enviando ${nota.fileName} para revisão.`);
    const msg = obs.trim() || "Reportado manualmente pelo usuário (dados extraídos parecem incorretos).";
    await _uploadNotaComErro(nota.file, msg);
    setProcessing(false);
    showSuccess("Erro reportado com sucesso.");
  } catch (err){
    console.error(err);
    setProcessing(false);
    showError(_mensagemErroEnvio(err, "reportar esta nota"));
  }
}

async function enviarParaRecebeMais(){
  const notasOk = state.notes.filter((n) => !n.erro && n.products && n.products.length);
  if (!state.consolidated.length){
    showError("Não há produtos para enviar.");
    return;
  }

  if (!_checaFirebasePronto()) return;

  try{
    setProcessing(true, "Enviando para o RecebeMais...", "Gravando a carga consolidada na nuvem.");

    // Inicializa o Firebase uma única vez (evita reinicializar em cliques
    // repetidos do botão).
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();

    // Envia a carga inteira como UM ÚNICO documento em "pendentes", com
    // as referências já consolidadas entre todas as notas — assim ela
    // aparece no RecebeMais como uma única contagem, não uma por nota.
    const produtos = state.consolidated.map((p) => ({
      referencia: p.referencia,
      descricao: p.descricao || "",
      quantidade: p.quantidadeValida ? p.quantidade : (p.quantidade || 0),
      unidade: p.unidade || "",
    }));

    const pendRef = await db.collection(RECEBEMAIS_CONFIG.colecaoPendentes).add({
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
      criadoPorUid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : null,
      criadoPorEmail: firebase.auth().currentUser ? firebase.auth().currentUser.email : null,
      // Compartilhado com qualquer colega da mesma empresa (ver regras
      // do Firestore) — sem isso, só a conta que enviou enxergaria essa
      // NF no RecebeMais, mesmo que outro funcionário da empresa fosse
      // quem faz a contagem física.
      empresaId: __meuEmpresaId || null,
      forn: buildFornecedorCarga(notasOk),
      nf: buildNumerosNfCarga(notasOk),
      cnpj: buildCnpjCarga(notasOk),
      produtos,
    });

    registrarEvento("NF_ENVIADA_RECEBEMAIS", {
      nfId: pendRef.id,
      fornecedor: buildFornecedorCarga(notasOk),
      quantidade: produtos.length,
    });

    // Grava também no log permanente (ver colecaoHistorico), pro Painel
    // mostrar esse envio mesmo depois que o RecebeMais consumir/apagar o
    // documento de "pendentes". Se essa gravação falhar por algum
    // motivo, não interrompe o fluxo — o envio pro RecebeMais (acima) já
    // aconteceu, que é o que importa de verdade; só registramos no
    // console pra não perder o rastro do problema.
    //
    // "pendenteDocId" guarda o id do documento em "pendentes" — é o elo
    // que permite ao RecebeMais encontrar e atualizar este mesmo
    // registro quando o usuário finalizar a contagem lá (ver
    // sessSave()/_notificarFinalizacaoNoPainel() no RecebeMais), gravando
    // o resultado completo e mudando "status" de "pendente" para
    // "finalizada".
    try{
      await db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).add({
        criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
        criadoPorUid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : null,
        criadoPorEmail: firebase.auth().currentUser ? firebase.auth().currentUser.email : null,
        empresaId: __meuEmpresaId || null,
        forn: buildFornecedorCarga(notasOk),
        nf: buildNumerosNfCarga(notasOk),
        cnpj: buildCnpjCarga(notasOk),
        totalReferencias: produtos.length,
        totalQuantidade: produtos.reduce((soma, p) => soma + (Number(p.quantidade) || 0), 0),
        produtos,
        pendenteDocId: pendRef.id,
        status: "pendente",
        finalizadoEm: null,
        finalizadoPorEmail: null,
        resultado: null,
      });
    } catch (errHistorico){
      console.error("Falha ao gravar no histórico do Painel:", errHistorico);
    }

    setProcessing(false);
    __painelCarregado = false; // força recarregar o histórico na próxima vez que o Painel for aberto
    showSuccess(
      notasOk.length > 1
        ? `Carga com ${notasOk.length} notas enviada para o RecebeMais com sucesso.`
        : "Nota enviada para o RecebeMais com sucesso."
    );
    showToast("Contagem às cegas enviada ao aplicativo RecebeMais");
  } catch (err){
    console.error(err);
    setProcessing(false);
    showError("Não foi possível enviar para o RecebeMais. Verifique sua conexão e tente novamente.");
    registrarEvento("ERRO_SISTEMA", { mensagem: String(err && err.message || err), setor: "envio_recebemais" });
  }
}

/* =====================================================================
   EXPORTAÇÃO
   ===================================================================== */
function exportExcel(){
  const list = getFilteredSorted();
  if (!list.length) return;

  if (typeof XLSX === "undefined"){
    showError("Não foi possível carregar o módulo de exportação para Excel. Verifique sua conexão e tente novamente.");
    return;
  }

  const header = ["Referência", "Descrição", "Quantidade", "Unidade", "Notas"];
  const rows = list.map((p) => [
    p.referencia,
    p.descricao || "",
    p.quantidadeValida ? p.quantidade : (p.quantidade ?? ""),
    p.unidade || "",
    p.notas && p.notas.length ? p.notas.join(", ") : "",
  ]);

  const wb = XLSX.utils.book_new();
  const wsProdutos = XLSX.utils.aoa_to_sheet([header, ...rows]);
  wsProdutos["!cols"] = [{ wch: 16 }, { wch: 40 }, { wch: 14 }, { wch: 10 }, { wch: 20 }];
  XLSX.utils.book_append_sheet(wb, wsProdutos, "Produtos");

  const totals = calculateTotals(state.consolidated);
  const resumoRows = [
    ["Notas processadas", totals.notas],
    ["Linhas encontradas", totals.linhas],
    ["Referências únicas", totals.refs],
    ["Quantidade total", totals.qtdValida ? totals.qtdTotal : totals.qtdTotal + " (*)"],
  ];
  const wsResumo = XLSX.utils.aoa_to_sheet([["Campo", "Valor"], ...resumoRows]);
  wsResumo["!cols"] = [{ wch: 22 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(wb, wsResumo, "Resumo Geral");

  const notasRows = state.notes.map((n) => [
    n.fileName,
    n.erro ? "Erro" : "OK",
    n.nfInfo && n.nfInfo.numero ? n.nfInfo.numero : "",
    n.nfInfo && n.nfInfo.razaoSocial ? n.nfInfo.razaoSocial : "",
    n.nfInfo && n.nfInfo.dataEmissao ? n.nfInfo.dataEmissao : "",
    n.linhas || 0,
  ]);
  const wsNotas = XLSX.utils.aoa_to_sheet([
    ["Arquivo", "Status", "Número da NF", "Razão social", "Data de emissão", "Linhas encontradas"],
    ...notasRows,
  ]);
  wsNotas["!cols"] = [{ wch: 28 }, { wch: 8 }, { wch: 16 }, { wch: 34 }, { wch: 16 }, { wch: 18 }];
  XLSX.utils.book_append_sheet(wb, wsNotas, "Notas Processadas");

  XLSX.writeFile(wb, buildExportFilename() + ".xlsx");
}

// Monta o nome do arquivo exportado. Quando há apenas uma nota
// identificada, usa "<primeiro nome da razão social>_<número da NF sem
// zeros à esquerda>" (ex.: "SIMOLDES_419136"). Quando há várias notas
// (carga consolidada), usa o fornecedor em comum (se todas as notas
// forem do mesmo fornecedor) seguido de "CARGA"; caso contrário, cai
// para um nome padrão.
function buildExportFilename(){
  const notasOk = state.notes.filter((n) => !n.erro && n.nfInfo);
  if (!notasOk.length) return "conferencia-nf";

  if (notasOk.length === 1){
    const info = notasOk[0].nfInfo;
    if (info && info.razaoSocial && info.numero){
      const primeiroNome = sanitizeFilenamePart(info.razaoSocial.trim().split(/\s+/)[0]);
      const numeroLimpo = info.numero.replace(/\D/g, "").replace(/^0+(?=\d)/, "");
      if (primeiroNome && numeroLimpo) return `${primeiroNome}_${numeroLimpo}`;
    }
    return "conferencia-nf";
  }

  const primeirosNomes = new Set(
    notasOk
      .map((n) => n.nfInfo.razaoSocial && sanitizeFilenamePart(n.nfInfo.razaoSocial.trim().split(/\s+/)[0]))
      .filter(Boolean)
  );
  if (primeirosNomes.size === 1){
    return `${Array.from(primeirosNomes)[0]}_CARGA`;
  }
  return "conferencia-carga";
}

function sanitizeFilenamePart(str){
  return stripAccents(str || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function copyList(){
  const list = getFilteredSorted();
  if (!list.length) return;
  const text = list
    .map((p) => `${p.referencia} | ${p.quantidadeValida ? p.quantidade : (p.quantidade ?? "?")}`)
    .join("\n");

  navigator.clipboard.writeText(text).then(() => {
    showSuccess("Lista copiada para a área de transferência.");
  }).catch(() => {
    showError("Não foi possível copiar a lista neste navegador.");
  });
}

/* =====================================================================
   NOVA CARGA
   ===================================================================== */
function resetApp(){
  state.files = [];
  state.notes = [];
  state.consolidated = [];
  state.totalLinhas = 0;
  state.searchTerm = "";
  state.sortKey = "referencia";
  state.sortDir = 1;

  fileInput.value = "";
  fileInfoBar.classList.remove("visible");
  document.getElementById("searchInput").value = "";
  document.getElementById("resultsSection").classList.remove("visible");
  document.getElementById("notesPanel").classList.remove("visible");
  document.getElementById("btnGuardarErros").style.display = "none";
  limparFormularioManual();
  document.getElementById("manualAddForm").style.display = "none";
  clearMessages();
}

/* =====================================================================
   TRATAMENTO DE ERROS / MENSAGENS
   ===================================================================== */
function clearMessages(){
  ["msgError", "msgWarn", "msgSuccess"].forEach((id) => {
    const el = document.getElementById(id);
    el.classList.remove("visible");
    el.textContent = "";
  });
}
function showError(text){
  clearMessages();
  const el = document.getElementById("msgError");
  el.textContent = text;
  el.classList.add("visible");
}
function showWarn(text){
  const el = document.getElementById("msgWarn");
  el.textContent = text;
  el.classList.add("visible");
}
function showSuccess(text){
  const el = document.getElementById("msgSuccess");
  el.textContent = text;
  el.classList.add("visible");
}

/* =====================================================================
   TOAST FLUTUANTE (notificação temporária no topo da tela)
   ===================================================================== */
function showToast(text, duracaoMs){
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">${ICONS.check}</span><span>${escapeHTML(text)}</span>`;
  container.appendChild(toast);

  // força reflow para garantir que a transição de entrada rode
  requestAnimationFrame(() => toast.classList.add("toast-visible"));

  const tempoTotal = duracaoMs || 3200;
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    setTimeout(() => toast.remove(), 250);
  }, tempoTotal);
}

/* =====================================================================
   OBSERVAÇÃO SOBRE OCR
   O fluxo de leitura prioriza sempre o texto real embutido no PDF
   (rápido e preciso, via PDF.js). Quando uma página não tem nenhum
   texto extraível — notas escaneadas, ou geradas com o texto desenhado
   como vetor/imagem em vez de fonte real — a página é renderizada como
   imagem em alta resolução e lida via OCR (Tesseract.js), inteiramente
   no navegador (ver ocrExtractRowsFromPage). Como OCR pode errar
   dígitos, todo produto extraído dessa forma é sempre marcado para
   revisão manual (badge "OCR" com ícone de lupa), nunca tratado como tão confiável
   quanto o texto nativo do PDF.
   ===================================================================== */

/* =====================================================================
   INICIALIZAÇÃO
   ===================================================================== */
/* =====================================================================
   MENU LATERAL / NAVEGAÇÃO ENTRE VIEWS
   ===================================================================== */
let __painelCarregado = false; // evita recarregar do Firestore toda vez que o usuário troca de aba, exceto quando pedir "Atualizar" ou depois de um novo envio

// Abre/fecha o menu lateral. Não guarda preferência entre sessões de
// propósito — o menu sempre começa fechado logo após o login (ver
// initAuth), então persistir esse estado não faria diferença.
function toggleSidebar(forceState){
  const shell = document.querySelector(".app-shell");
  if (!shell) return;
  const collapsed = typeof forceState === "boolean" ? forceState : !shell.classList.contains("sidebar-collapsed");
  shell.classList.toggle("sidebar-collapsed", collapsed);
}

function switchView(view){
  if (view !== "dashboard" && typeof __dashTV !== "undefined" && __dashTV) dashboardToggleTV(false);
  // Trava de segurança (além dos botões desabilitados): mesmo que
  // switchView(view) seja chamado de outro jeito, sem passar pelo
  // clique no botão, ninguém entra numa tela que o papel dele não
  // permite.
  if (!_temAcessoView(view)){
    showToast("Você não tem acesso a esta área. Fale com o administrador.");
    return;
  }

  const views = { extrator: "view-extrator", dashboard: "view-dashboard", painel: "view-painel", planilha: "view-planilha", config: "view-config", admin: "view-admin", erros: "view-erros" };
  const navs  = { extrator: "navExtrator", dashboard: "navDashboard", painel: "navPainel", planilha: "navPlanilha", config: "navConfig", admin: "navAdmin", erros: "navErros" };

  Object.keys(views).forEach((key) => {
    document.getElementById(views[key]).classList.toggle("active", key === view);
    if (navs[key]) document.getElementById(navs[key]).classList.toggle("active", key === view);
  });

  if (view === "painel"){
    if (!__painelCarregado) carregarPainelHistorico();
    else carregarPainelHistorico(true); // já tinha cache: mostra na hora e atualiza em segundo plano
  }
  if (view === "dashboard" && !__dashboardCarregado){
    carregarDashboard();
  }
  if (view === "config"){
    atualizarPainelConfigSessao();
    atualizarPainelConfigVisibilidadePorPapel();
  }
  if (view === "admin"){
    carregarPainelAdmin();
  }
  if (view === "erros" && !__errosEscutando){
    escutarNotasComErro();
  }

  // Fecha o menu lateral assim que uma opção é escolhida, pra dar
  // destaque total ao conteúdo da view selecionada (o usuário reabre
  // pelo botão de 3 traços quando quiser trocar de novo).
  toggleSidebar(true);
}

/* =====================================================================
   CONFIGURAÇÕES — TEMPO LOGIN ABERTO
   Monta as opções de rádio (5 min / 30 min / 3h / sempre), marca a que
   está salva no localStorage, e ao trocar salva a nova escolha e já
   reinicia o cronômetro de sessão na hora (sem precisar deslogar).
   ===================================================================== */
// Configurações agora é compartilhado (ver _temAcessoView) — cada
// seção aparece ou não conforme o papel de quem está olhando: "Tempo
// login aberto" é de todo mundo; "Excluir histórico" é de gestor/super
// admin; Provedor/APIs/Dados continuam exclusivos do super admin.
// Configurações agora é compartilhado (ver _temAcessoView) — cada
// seção aparece ou não conforme o papel de quem está olhando: "Tempo
// login aberto" é de todo mundo; "Excluir histórico" é de gestor/super
// admin; "Dados" continua exclusivo do super admin. Provedor de
// consulta e chaves de API deixaram de existir nesta tela — a busca
// por chave usa sempre a MeuDanfe, com a chave como variável de
// ambiente no backend.
function atualizarPainelConfigVisibilidadePorPapel(){
  const souSuperAdmin = !!(__meuUsuarioLogado && __meuUsuarioLogado.superAdmin === true);
  const podeExcluirHistorico = souSuperAdmin || !!(__meuUsuarioLogado && __meuUsuarioLogado.papel === "gestor");

  const excluirHistoricoEl = document.getElementById("configExcluirHistoricoPanel");
  const dadosEl = document.getElementById("configDadosPanel");

  if (excluirHistoricoEl) excluirHistoricoEl.style.display = podeExcluirHistorico ? "block" : "none";
  if (dadosEl) dadosEl.style.display = souSuperAdmin ? "block" : "none";
}

function atualizarPainelConfigSessao(){
  const box = document.getElementById("configSessaoOpcoes");
  if (!box) return;
  const atual = _getSessionTimeoutSetting();

  box.innerHTML = SESSION_TIMEOUT_OPTIONS.map((opt) => `
    <label class="config-radio-option${opt.value === atual ? " selected" : ""}" data-value="${opt.value}">
      <input type="radio" name="sessaoTimeout" value="${opt.value}" ${opt.value === atual ? "checked" : ""}>
      <span class="label-text">${escapeHTML(opt.label)}</span>
    </label>
  `).join("");

  box.querySelectorAll('input[name="sessaoTimeout"]').forEach((input) => {
    input.addEventListener("change", () => {
      const valor = input.value;
      _setSessionTimeoutSetting(valor);
      box.querySelectorAll(".config-radio-option").forEach((el) => {
        el.classList.toggle("selected", el.dataset.value === valor);
      });
      // Reinicia o cronômetro de sessão já com o novo tempo escolhido,
      // sem precisar deslogar e logar de novo pra a mudança valer.
      if (__authInstance && __authInstance.currentUser){
        _startSessionTimeout(__authInstance);
      }
      const opt = SESSION_TIMEOUT_OPTIONS.find((o) => o.value === valor);
      const statusEl = document.getElementById("configSessaoStatus");
      if (statusEl){
        statusEl.textContent = `Salvo — a sessão atual já está usando "${opt ? opt.label : valor}".`;
      }
      showToast("Tempo de sessão atualizado: " + (opt ? opt.label : valor));
    });
  });
}

/* =====================================================================
   CONSULTA POR CHAVE DE ACESSO — provedor fixo em MeuDanfe (não é mais
   escolhido pelo usuário nem tem chave de API editável aqui; a chave
   fica como variável de ambiente no backend). O backend ainda pode
   cair pros outros dois provedores como reserva automática em caso de
   falha (ver server.js), de forma completamente transparente.
   ===================================================================== */
const NFE_PROVIDER_FIXO = "meudanfe";

/* =====================================================================
   PAINEL: HISTÓRICO DE ENVIOS AO RECEBEMAIS
   Lê a coleção permanente "historico_envios" (ver RECEBEMAIS_CONFIG),
   gravada em paralelo a cada envio bem-sucedido em enviarParaRecebeMais().
   ===================================================================== */
function _painelFormatarData(timestamp){
  if (!timestamp || typeof timestamp.toDate !== "function") return "—";
  const d = timestamp.toDate();
  return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

// Guarda os documentos carregados do histórico (por id) pra abrir os
// detalhes sem precisar buscar de novo no Firestore.
let __painelDocsPorId = {};

/* =====================================================================
   DASHBOARD — panorama gerencial construído em cima dos mesmos
   documentos de "historico_envios" já usados no Histórico (mesma
   consulta/índice, mesmo isolamento por criadoPorUid). Busca uma vez
   (até 500 registros mais recentes) e filtra/recalcula tudo no
   navegador — trocar o período/fornecedor/status não refaz a consulta,
   só reaplica os filtros sobre o que já foi carregado.
   ===================================================================== */
let __dashboardDocs = [];
let __dashboardCarregado = false;
let __dashboardFiltro = { periodo: "tudo", forn: "", status: "", dataInicio: null, dataFim: null, empresa: "todas" };

let __dashboardEventos = []; // cache dos eventos recentes, usado pra métricas cruzadas (tempo de processamento, erros, usuários ativos)
let __dashboardEventosIniciadas = []; // cache dedicado só de CONFERENCIA_INICIADA, sem concorrer por espaço com os outros tipos de evento

let __dashboardCarregando = false;
// silencioso=true: atualização automática (30s / modo TV) — mantém o
// conteúdo atual na tela até os dados novos chegarem, sem piscar.
async function carregarDashboard(silencioso){
  silencioso = silencioso === true;
  if (__dashboardCarregando) return;
  __dashboardCarregando = true;
  const statusEl  = document.getElementById("dashboardStatus");
  const contentEl = document.getElementById("dashboardContent");
  if (!silencioso){
    if (contentEl) contentEl.style.display = "none";
    if (statusEl) statusEl.innerHTML = '<div class="empty-state">Carregando...</div>';
  }

  if (!_checaFirebasePronto()){ if (statusEl) statusEl.innerHTML = ""; return; }

  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    const uid = firebase.auth().currentUser.uid;
    const souSuperAdmin = !!(__meuUsuarioLogado && __meuUsuarioLogado.superAdmin === true);

    // Só super admin enxerga além da própria conta — pra todo mundo
    // (inclusive admin comum), o Dashboard continua igual, restrito ao
    // que o próprio login criou. "historico_envios" não tem campo de
    // empresa (só criadoPorUid), então pra ver várias empresas juntas
    // é preciso: 1) mapear uid → empresa via "usuarios", 2) buscar
    // TODAS as contagens (sem filtro de uid) e marcar cada uma com a
    // empresa correspondente na hora, no navegador.
    let mapaUidParaEmpresa = null;
    if (souSuperAdmin){
      const usuariosSnap = await db.collection("usuarios").get();
      mapaUidParaEmpresa = {};
      usuariosSnap.docs.forEach((doc) => { mapaUidParaEmpresa[doc.id] = doc.data().empresaId || null; });
    }

    const historicoQuery = souSuperAdmin
      ? db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).orderBy("criadoEm", "desc").limit(1000)
      : __meuEmpresaId
        ? db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).where("empresaId", "==", __meuEmpresaId).orderBy("criadoEm", "desc").limit(500)
        : db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).where("criadoPorUid", "==", uid).orderBy("criadoEm", "desc").limit(500);

    // "eventos" (Etapa 1) alimenta métricas que o historico_envios
    // sozinho não tem: tempo de processamento ponta a ponta, erros do
    // sistema e usuários ativos. Diferente do historico_envios, cada
    // evento já é gravado com "empresaId" direto (ver
    // registrarEvento()), então pro super admin basta remover o filtro
    // de uid — sem precisar de mapeamento adicional.
    const eventosQuery = souSuperAdmin
      ? db.collection("eventos").orderBy("timestamp", "desc").limit(1000)
      : __meuEmpresaId
        ? db.collection("eventos").where("empresaId", "==", __meuEmpresaId).orderBy("timestamp", "desc").limit(500)
        : db.collection("eventos").where("criadoPorUid", "==", uid).orderBy("timestamp", "desc").limit(500);

    const iniciadasQuery = souSuperAdmin
      ? db.collection("eventos").where("tipoEvento", "==", "CONFERENCIA_INICIADA").limit(2000)
      : __meuEmpresaId
        ? db.collection("eventos").where("empresaId", "==", __meuEmpresaId).where("tipoEvento", "==", "CONFERENCIA_INICIADA").limit(1000)
        : db.collection("eventos").where("criadoPorUid", "==", uid).where("tipoEvento", "==", "CONFERENCIA_INICIADA").limit(1000);

    const [snapHistorico, snapEventos, snapIniciadas] = await Promise.all([
      historicoQuery.get(),
      eventosQuery.get().catch((err) => { console.error("Não foi possível carregar eventos para o Dashboard:", err); return null; }),
      iniciadasQuery.get().catch((err) => { console.error("Não foi possível carregar eventos de início de contagem:", err); return null; }),
    ]);

    // Descartadas ficam de fora do Dashboard inteiro — contagens que
    // nunca chegaram a ser feitas não são um dado gerencial relevante
    // aqui (continuam visíveis normalmente no Histórico).
    __dashboardDocs = snapHistorico.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((d) => d.status !== "descartada");
    if (mapaUidParaEmpresa){
      __dashboardDocs.forEach((d) => { d._empresaId = mapaUidParaEmpresa[d.criadoPorUid] || null; });
    }
    // Reaproveita o mesmo cache usado por abrirDetalhesContagem() (a
    // função do modal de Detalhes do Histórico) — assim, clicar em uma
    // linha aqui no Dashboard abre o mesmo modal, sem duplicar código.
    __dashboardDocs.forEach((d) => { __painelDocsPorId[d.id] = d; });
    __dashboardEventos = snapEventos ? snapEventos.docs.map((doc) => doc.data()) : [];
    __dashboardEventosIniciadas = snapIniciadas ? snapIniciadas.docs.map((doc) => doc.data()) : [];
    __dashboardCarregado = true;

    if (statusEl) statusEl.innerHTML = "";
    if (contentEl) contentEl.style.display = "block";

    __dashboardUltimaAtualizacao = Date.now();
    _dashboardPopularFiltroFornecedores();
    await _dashboardPopularFiltroEmpresas(souSuperAdmin);
    renderizarDashboard();
  } catch (err){
    console.error("Erro ao carregar Dashboard:", err);
    if (!silencioso && statusEl) statusEl.innerHTML = '<div class="empty-state">Não foi possível carregar o Dashboard. Tente atualizar.</div>';
  } finally {
    __dashboardCarregando = false;
  }
}

function _dashboardPopularFiltroFornecedores(){
  const selEl = document.getElementById("dashboardFiltroForn");
  if (!selEl) return;
  const atual = selEl.value;
  const fornecedores = Array.from(new Set(__dashboardDocs.map((d) => d.forn).filter(Boolean))).sort();
  selEl.innerHTML = '<option value="">Todos</option>' + fornecedores.map((f) => `<option value="${escapeHTML(f)}">${escapeHTML(f)}</option>`).join("");
  if (fornecedores.includes(atual)) selEl.value = atual;
}

// Só carrega/mostra pra super admin — os demais nem sabem que essa
// opção existe, o Dashboard deles continua igual, restrito à própria
// empresa (nem precisa desse seletor).
async function _dashboardPopularFiltroEmpresas(souSuperAdmin){
  const wrapEl = document.getElementById("dashboardFiltroEmpresaWrap");
  const selEl = document.getElementById("dashboardFiltroEmpresa");
  if (!wrapEl || !selEl) return;
  if (!souSuperAdmin){ wrapEl.style.display = "none"; return; }
  wrapEl.style.display = "block";
  try{
    const db = firebase.firestore();
    const snap = await db.collection("empresas").orderBy("nome").get();
    const atual = selEl.value || "todas";
    selEl.innerHTML = '<option value="todas">Todas</option>' +
      snap.docs.map((doc) => `<option value="${escapeHTML(doc.id)}">${escapeHTML(doc.data().nome || doc.id)}</option>`).join("");
    selEl.value = atual;
  } catch (err){
    console.error("Não foi possível carregar empresas para o filtro do Dashboard:", err);
  }
}

function _dashboardFiltroMudou(){
  __dashboardFiltro.periodo = document.getElementById("dashboardFiltroPeriodo").value;
  __dashboardFiltro.forn    = document.getElementById("dashboardFiltroForn").value;
  __dashboardFiltro.status  = document.getElementById("dashboardFiltroStatus").value;
  const empresaEl = document.getElementById("dashboardFiltroEmpresa");
  __dashboardFiltro.empresa = empresaEl ? empresaEl.value : "todas";

  const wrapPersonalizado = document.getElementById("dashboardFiltroPersonalizadoWrap");
  const ehPersonalizado = __dashboardFiltro.periodo === "personalizado";
  wrapPersonalizado.style.display = ehPersonalizado ? "flex" : "none";
  if (ehPersonalizado){
    __dashboardFiltro.dataInicio = document.getElementById("dashboardFiltroDataInicio").value || null;
    __dashboardFiltro.dataFim    = document.getElementById("dashboardFiltroDataFim").value || null;
  }

  renderizarDashboard();
}

// "Divergente" não é um valor de "status" salvo no documento — é uma
// contagem finalizada cujo resultado teve pelo menos uma referência
// com status "div". Tratado à parte no filtro por isso.
function _dashboardDocEhDivergente(d){
  return d.status === "finalizada" && !!(d.resultado && d.resultado.reconResumo && d.resultado.reconResumo.div > 0);
}

function _dashboardDocsFiltrados(janelaOverride){
  const agora = new Date();
  const limitesRolantes = {
    "1d": 1 * 24 * 60 * 60 * 1000,
    "7d": 7 * 24 * 60 * 60 * 1000,
    "15d": 15 * 24 * 60 * 60 * 1000,
    "30d": 30 * 24 * 60 * 60 * 1000,
  };
  // Intervalo personalizado usa limites de calendário (início do dia
  // "De" até o fim do dia "Até"), não janela rolante — é o que faz
  // sentido pra alguém escolhendo datas específicas no calendário.
  const inicioPersonalizado = __dashboardFiltro.dataInicio ? new Date(__dashboardFiltro.dataInicio + "T00:00:00").getTime() : null;
  const fimPersonalizado    = __dashboardFiltro.dataFim ? new Date(__dashboardFiltro.dataFim + "T23:59:59.999").getTime() : null;

  const inicioHoje = new Date(); inicioHoje.setHours(0, 0, 0, 0);
  return __dashboardDocs.filter((d) => {
    // Só existe (campo "_empresaId") quando o Dashboard foi carregado
    // como super admin — pra qualquer outro papel, esse filtro nunca
    // reduz nada, já que a busca já veio só da própria empresa.
    if (__dashboardFiltro.empresa && __dashboardFiltro.empresa !== "todas" && d._empresaId !== __dashboardFiltro.empresa) return false;

    const criado = (d.criadoEm && typeof d.criadoEm.toDate === "function") ? d.criadoEm.toDate().getTime() : 0;
    if (janelaOverride){
      // usado na comparação com o período anterior: ignora o filtro de
      // período atual e usa [início, fim) explícito.
      if (!criado || criado < janelaOverride[0] || criado >= janelaOverride[1]) return false;
    } else if (__dashboardFiltro.periodo === "hoje"){
      if (!criado || criado < inicioHoje.getTime()) return false;
    } else if (__dashboardFiltro.periodo === "personalizado"){
      if (inicioPersonalizado != null && (!criado || criado < inicioPersonalizado)) return false;
      if (fimPersonalizado != null && (!criado || criado > fimPersonalizado)) return false;
    } else if (limitesRolantes[__dashboardFiltro.periodo]){
      if (!criado || (agora.getTime() - criado) > limitesRolantes[__dashboardFiltro.periodo]) return false;
    }
    if (__dashboardFiltro.forn && d.forn !== __dashboardFiltro.forn) return false;
    if (__dashboardFiltro.status === "divergente"){
      if (!_dashboardDocEhDivergente(d)) return false;
    } else if (__dashboardFiltro.status && d.status !== __dashboardFiltro.status){
      return false;
    }
    return true;
  });
}

// Mesma filtragem por empresa, mas pra "eventos" — que já vêm com
// "empresaId" gravado direto (ver registrarEvento()), diferente do
// historico_envios, que precisa do mapeamento por uid feito em
// carregarDashboard(). Usado nas métricas que dependem de eventos
// (tempo de processamento, erros, usuários ativos, "Em andamento").
function _dashboardEventosFiltradosPorEmpresa(eventos){
  if (!__dashboardFiltro.empresa || __dashboardFiltro.empresa === "todas") return eventos;
  return eventos.filter((e) => e.empresaId === __dashboardFiltro.empresa);
}

// Baseline pra detecção de anomalias: __dashboardDocs inteiro (sem os
// filtros de período/fornecedor/status, que são o que a anomalia
// compara CONTRA), mas ainda respeitando o filtro de empresa — senão,
// com uma empresa específica selecionada, a média histórica ficaria
// contaminada com dados de outras empresas.
function _dashboardBaselineParaAnomalias(){
  if (!__dashboardFiltro.empresa || __dashboardFiltro.empresa === "todas") return __dashboardDocs;
  return __dashboardDocs.filter((d) => d._empresaId === __dashboardFiltro.empresa);
}

// Converte a string "DD/MM/AAAA, HH:MM:SS" (formato de
// toLocaleString('pt-BR') usado pelo RecebeMais em session.start/end)
// para timestamp em milissegundos. Retorna null se não bater o padrão.
function _dashboardParseDataHoraPtBR(str){
  if (!str) return null;
  const m = String(str).match(/^(\d{2})\/(\d{2})\/(\d{4}),?\s*(\d{2}):(\d{2}):(\d{2})/);
  if (!m) return null;
  const [, dia, mes, ano, hora, min, seg] = m;
  const dt = new Date(Number(ano), Number(mes) - 1, Number(dia), Number(hora), Number(min), Number(seg));
  return isNaN(dt.getTime()) ? null : dt.getTime();
}

function _dashboardFmtDuracao(ms){
  if (ms == null || !isFinite(ms) || ms < 0) return "—";
  const totalSeg = Math.round(ms / 1000);
  const h = Math.floor(totalSeg / 3600);
  const min = Math.floor((totalSeg % 3600) / 60);
  const seg = totalSeg % 60;
  if (h > 0) return `${h}h ${String(min).padStart(2, "0")}min`;
  if (min > 0) return `${min}min ${String(seg).padStart(2, "0")}s`;
  return `${seg}s`;
}

function _dashboardCalcularMetricas(docs){
  const pendentes       = docs.filter((d) => (d.status || "pendente") === "pendente");
  const todasFinalizadas = docs.filter((d) => d.status === "finalizada");
  const comDivergencia  = todasFinalizadas.filter((d) => _dashboardDocEhDivergente(d));
  // "Concluídas" conta só as finalizadas SEM divergência — uma
  // contagem divergente não é tratada como "concluída com sucesso" nos
  // números principais, ela entra separadamente em "Com divergência"
  // (mas continua contando normalmente em "NFs recebidas", que é o
  // total bruto de tudo que foi enviado).
  const concluidas = todasFinalizadas.filter((d) => !_dashboardDocEhDivergente(d));

  let pecasEsperadas = 0;
  docs.forEach((d) => { (d.produtos || []).forEach((p) => { pecasEsperadas += Number(p.quantidade) || 0; }); });

  // Peças contadas, % convergência e taxa de recontagem continuam
  // somando TODAS as finalizadas (convergentes + divergentes) — são
  // métricas sobre o trabalho de conferência já realizado, não sobre o
  // resultado ter batido ou não.
  let pecasContadas = 0, linhasConv = 0, linhasTotal = 0, totalRecontagens = 0;
  todasFinalizadas.forEach((d) => {
    const rows = (d.resultado && d.resultado.rows) || [];
    rows.forEach((r) => {
      pecasContadas += Number(r.qty) || 0;
      linhasTotal++;
      if (r.status === "conv") linhasConv++;
      if (r.recontagens && r.recontagens.length) totalRecontagens++;
    });
  });

  // Tempo médio de conferência — calculado a partir do início/fim
  // gravados em cada contagem finalizada (resultado.start/end, no
  // formato "DD/MM/AAAA, HH:MM:SS" enviado pelo RecebeMais).
  let somaDuracaoMs = 0, qtdComDuracao = 0;
  todasFinalizadas.forEach((d) => {
    if (!d.resultado) return;
    const inicioMs = _dashboardParseDataHoraPtBR(d.resultado.start);
    const fimMs    = _dashboardParseDataHoraPtBR(d.resultado.end);
    if (inicioMs == null || fimMs == null || fimMs < inicioMs) return;
    somaDuracaoMs += (fimMs - inicioMs);
    qtdComDuracao++;
  });
  const tempoMedioMs = qtdComDuracao > 0 ? (somaDuracaoMs / qtdComDuracao) : null;
  const taxaRecontagem = linhasTotal > 0 ? (totalRecontagens / linhasTotal * 100) : null;

  // ── Métricas alimentadas pela coleção "eventos" (Etapa 1) ──
  // Filtra por empresa aqui, uma vez só, e reaproveita nas métricas
  // abaixo — importante pro super admin com uma empresa específica
  // selecionada (ver dashboardFiltroEmpresa); pra qualquer outro papel,
  // isso não filtra nada (a busca já veio só da própria empresa).
  const eventosDaEmpresa = _dashboardEventosFiltradosPorEmpresa(__dashboardEventos);
  const iniciadasDaEmpresa = _dashboardEventosFiltradosPorEmpresa(__dashboardEventosIniciadas);

  // "Em andamento" só existe como conceito graças ao evento
  // CONFERENCIA_INICIADA — sem ele, o historico_envios sozinho não
  // distingue "aguardando alguém pegar" de "alguém já está contando".
  // Usa __dashboardEventosIniciadas (consulta dedicada) em vez de
  // __dashboardEventos — assim um início de contagem mais antigo não
  // some da lista só porque outros tipos de evento (login, erros etc.)
  // ocuparam as posições mais recentes na busca geral.
  const nfIdsIniciados = new Set(
    iniciadasDaEmpresa.filter((e) => e.nfId).map((e) => e.nfId)
  );
  const emAndamento = pendentes.filter((d) => nfIdsIniciados.has(d.pendenteDocId || d.id));
  const aguardando   = pendentes.filter((d) => !nfIdsIniciados.has(d.pendenteDocId || d.id));

  const agora = Date.now();
  const atrasadas = pendentes.filter((d) => {
    const criado = (d.criadoEm && typeof d.criadoEm.toDate === "function") ? d.criadoEm.toDate().getTime() : 0;
    return criado && (agora - criado) > 4 * 60 * 60 * 1000; // mesmo limite (4h) usado nos alertas
  });

  const errosDoSistema = eventosDaEmpresa.filter((e) => e.tipoEvento === "ERRO_SISTEMA").length;
  const usuariosAtivos = new Set(
    eventosDaEmpresa.filter((e) => e.tipoEvento === "USUARIO_LOGIN" && e.usuarioId).map((e) => e.usuarioId)
  ).size;

  // Tempo médio de processamento da NF: do envio ao RecebeMais até a
  // contagem finalizada, cruzando os dois eventos pelo mesmo nfId.
  const enviosPorNf = new Map();
  eventosDaEmpresa.forEach((e) => {
    if (e.tipoEvento === "NF_ENVIADA_RECEBEMAIS" && e.nfId && e.timestamp && typeof e.timestamp.toDate === "function"){
      enviosPorNf.set(e.nfId, e.timestamp.toDate().getTime());
    }
  });
  let somaProcessamentoMs = 0, qtdProcessamento = 0;
  eventosDaEmpresa.forEach((e) => {
    if (e.tipoEvento !== "CONFERENCIA_FINALIZADA" || !e.nfId || !e.timestamp || typeof e.timestamp.toDate !== "function") return;
    const inicioMs = enviosPorNf.get(e.nfId);
    if (inicioMs == null) return;
    const fimMs = e.timestamp.toDate().getTime();
    if (fimMs < inicioMs) return;
    somaProcessamentoMs += (fimMs - inicioMs);
    qtdProcessamento++;
  });
  const tempoMedioProcessamentoMs = qtdProcessamento > 0 ? (somaProcessamentoMs / qtdProcessamento) : null;

  return {
    total: docs.length,
    pendentes: pendentes.length,
    aguardando: aguardando.length,
    emAndamento: emAndamento.length,
    atrasadas: atrasadas.length,
    finalizadas: concluidas.length,
    processadas: todasFinalizadas.length,
    comDivergencia: comDivergencia.length,
    taxaDivergencia: todasFinalizadas.length > 0 ? (comDivergencia.length / todasFinalizadas.length * 100) : null,
    pecasEsperadas, pecasContadas,
    diferenca: pecasContadas - pecasEsperadas,
    pctConvergencia: linhasTotal > 0 ? (linhasConv / linhasTotal * 100) : null,
    totalRecontagens,
    taxaRecontagem,
    tempoMedioMs,
    tempoMedioProcessamentoMs,
    errosDoSistema,
    usuariosAtivos,
  };
}

function _dashboardAlertas(docs){
  const agora = Date.now();

  // Alertas marcados como "Resolvido" saem da lista — mas o documento em
  // si (e a divergência que ele registra) continua intacto, contando
  // normalmente no ranking de fornecedores, nos totais do Dashboard e
  // no Histórico. "Resolvido" só significa "já tratei isso, pode parar
  // de me lembrar".
  const naoResolvidos = docs.filter((d) => !d.alertaResolvido);

  const divergentes = naoResolvidos
    .filter((d) => d.status === "finalizada" && d.resultado && d.resultado.reconResumo && d.resultado.reconResumo.div > 0)
    .sort((a, b) => b.resultado.reconResumo.div - a.resultado.reconResumo.div)
    .slice(0, 5);

  const pendentesAntigas = naoResolvidos
    .filter((d) => (d.status || "pendente") === "pendente")
    .map((d) => ({ d, criado: (d.criadoEm && typeof d.criadoEm.toDate === "function") ? d.criadoEm.toDate().getTime() : 0 }))
    .filter((x) => x.criado && (agora - x.criado) > 4 * 60 * 60 * 1000) // mais de 4h aguardando
    .sort((a, b) => a.criado - b.criado)
    .slice(0, 5)
    .map((x) => x.d);

  const comRecontagem = naoResolvidos
    .filter((d) => d.status === "finalizada" && d.resultado && (d.resultado.rows || []).some((r) => r.recontagens && r.recontagens.length))
    .slice(0, 5);

  return { divergentes, pendentesAntigas, comRecontagem };
}

// Marca um alerta como resolvido: grava no próprio documento de
// historico_envios (alertaResolvido: true) — some da lista "Requer
// atenção", mas o registro e a divergência continuam contando
// normalmente em todo o resto (ranking, totais, Histórico).
async function marcarAlertaResolvido(docId, event){
  if (event) event.stopPropagation();
  const usuario = firebase.auth().currentUser;
  if (!usuario){ showError("Sessão expirada — faça login de novo."); return; }

  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    await db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).doc(docId).update({
      alertaResolvido: true,
      alertaResolvidoEm: firebase.firestore.FieldValue.serverTimestamp(),
      alertaResolvidoPorEmail: usuario.email || null,
    });

    // Atualiza os caches locais pra não precisar recarregar tudo do
    // Firestore de novo — só reflete a mudança e re-renderiza.
    if (__painelDocsPorId[docId]) __painelDocsPorId[docId].alertaResolvido = true;
    const docLocal = __dashboardDocs.find((d) => d.id === docId);
    if (docLocal) docLocal.alertaResolvido = true;

    renderizarDashboard();
    showToast("Marcado como resolvido.");
  } catch (err){
    console.error("Falha ao marcar alerta como resolvido:", err);
    showError("Não foi possível marcar como resolvido. Tente novamente.");
  }
}

function _dashboardRankingFornecedores(docs){
  const mapa = {};
  docs.forEach((d) => {
    const forn = d.forn || "—";
    if (!mapa[forn]) mapa[forn] = { forn, nfs: 0, divergencias: 0 };
    mapa[forn].nfs++;
    if (d.status === "finalizada" && d.resultado && d.resultado.reconResumo && d.resultado.reconResumo.div > 0) mapa[forn].divergencias++;
  });
  return Object.values(mapa)
    .map((f) => ({ ...f, indice: f.nfs > 0 ? (f.divergencias / f.nfs * 100) : 0 }))
    // Ordena por QUANTIDADE de casos divergentes primeiro — um
    // fornecedor com 2 divergências em 5 NFs preocupa mais no dia a dia
    // do que um com 1 divergência em 1 NF só, mesmo esse tendo um
    // índice percentual maior. Em empate na quantidade, usa o índice
    // como critério de desempate.
    .sort((a, b) => b.divergencias - a.divergencias || b.indice - a.indice)
    .slice(0, 8);
}

// Detecção de anomalias (Etapa 6) — regras simples, comparando a taxa
// de divergência do período filtrado contra a média histórica geral e
// por fornecedor (base = __dashboardDocs inteiro, sem filtro de
// período). Exige um mínimo de amostras dos dois lados pra não disparar
// alarme com 1 ou 2 NFs isoladas, e usa linguagem cautelosa — nunca
// afirma causa, só sinaliza o padrão e recomenda verificar.
function _dashboardCalcTaxaDivergencia(docs){
  const finalizadas = docs.filter((d) => d.status === "finalizada");
  if (!finalizadas.length) return null;
  const divergentes = finalizadas.filter((d) => _dashboardDocEhDivergente(d)).length;
  return { taxa: (divergentes / finalizadas.length) * 100, total: finalizadas.length };
}

function _dashboardAnomalias(docsAtual, docsBase){
  const anomalias = [];

  const atualGeral = _dashboardCalcTaxaDivergencia(docsAtual);
  const baseGeral  = _dashboardCalcTaxaDivergencia(docsBase);
  if (atualGeral && baseGeral && atualGeral.total >= 3 && baseGeral.total >= 5){
    const diff = atualGeral.taxa - baseGeral.taxa;
    if (diff >= 5 && atualGeral.taxa > baseGeral.taxa * 1.5){
      anomalias.push({
        titulo: "Aumento na taxa de divergência geral",
        detalhe: `Média histórica: ${_dashboardFmtPct(baseGeral.taxa)}% · Período atual: ${_dashboardFmtPct(atualGeral.taxa)}%. Há indícios de piora — recomenda-se verificar as últimas conferências.`,
      });
    }
  }

  const porFornBase = {};
  docsBase.forEach((d) => {
    const f = d.forn || "—";
    (porFornBase[f] = porFornBase[f] || []).push(d);
  });
  Object.keys(porFornBase).forEach((forn) => {
    const docsFornAtual = docsAtual.filter((d) => (d.forn || "—") === forn);
    const b = _dashboardCalcTaxaDivergencia(porFornBase[forn]);
    const a = _dashboardCalcTaxaDivergencia(docsFornAtual);
    if (a && b && a.total >= 2 && b.total >= 4){
      const diff = a.taxa - b.taxa;
      if (diff >= 8 && a.taxa > b.taxa * 1.5){
        anomalias.push({
          titulo: `Fornecedor ${forn} com possível aumento de divergência`,
          detalhe: `Média histórica: ${_dashboardFmtPct(b.taxa)}% · Período atual: ${_dashboardFmtPct(a.taxa)}%. Padrão identificado — recomenda-se verificar as últimas conferências desse fornecedor.`,
        });
      }
    }
  });

  return anomalias.slice(0, 5);
}

// Produtividade por conferente (Etapa 5) — agrupa as finalizadas por
// quem fez a contagem (perfil do aparelho no RecebeMais, ou e-mail como
// reserva). Ordenado por volume só pra leitura ficar organizada — não é
// um ranking de "melhor/pior": o objetivo é dar visão operacional
// (quem está com mais carga, onde o tempo médio foge do padrão), não
// incentivar competição entre conferentes.
function _dashboardProdutividade(docs){
  const finalizadas = docs.filter((d) => d.status === "finalizada");
  const porConferente = {};
  finalizadas.forEach((d) => {
    const nome = d.finalizadoPorPerfil || d.finalizadoPorEmail || "Não identificado";
    if (!porConferente[nome]){
      porConferente[nome] = { nome, nfs: 0, itens: 0, divergencias: 0, somaDuracaoMs: 0, qtdComDuracao: 0 };
    }
    const p = porConferente[nome];
    p.nfs++;
    const rows = (d.resultado && d.resultado.rows) || [];
    p.itens += rows.reduce((s, r) => s + (Number(r.qty) || 0), 0);
    if (_dashboardDocEhDivergente(d)) p.divergencias++;
    if (d.resultado){
      const inicioMs = _dashboardParseDataHoraPtBR(d.resultado.start);
      const fimMs = _dashboardParseDataHoraPtBR(d.resultado.end);
      if (inicioMs != null && fimMs != null && fimMs >= inicioMs){
        p.somaDuracaoMs += (fimMs - inicioMs);
        p.qtdComDuracao++;
      }
    }
  });
  return Object.values(porConferente)
    .map((p) => ({ ...p, tempoMedioMs: p.qtdComDuracao > 0 ? p.somaDuracaoMs / p.qtdComDuracao : null }))
    .sort((a, b) => b.nfs - a.nfs)
    .slice(0, 10);
}

/* =====================================================================
   ASSISTENTE RECEBEMAIS (Etapas 7+8) — o navegador NUNCA fala direto
   com a OpenAI. Monta um resumo enxuto dos dados já carregados no
   Dashboard (não o banco inteiro) e manda pro backend seguro, que é
   quem de fato guarda a chave da API e conversa com a OpenAI. Ver
   ia-backend/README.md para o deploy do servidor.
   ===================================================================== */
function _montarContextoParaIA(){
  const docs = _dashboardDocsFiltrados();
  const m = _dashboardCalcularMetricas(docs);
  const ranking = _dashboardRankingFornecedores(docs);
  const produtividade = _dashboardProdutividade(docs);
  const topDivergentes = _dashboardTopProdutosDivergentes(docs);
  const anomalias = _dashboardAnomalias(docs, _dashboardBaselineParaAnomalias());
  const alertas = _dashboardAlertas(docs);

  return {
    filtrosAtivos: {
      periodo: __dashboardFiltro.periodo,
      fornecedor: __dashboardFiltro.forn || "todos",
      status: __dashboardFiltro.status || "todos",
    },
    metricas: {
      nfsRecebidas: m.total,
      nfsProcessadas: m.processadas,
      nfsPendentesAguardando: m.aguardando,
      conferenciasEmAndamento: m.emAndamento,
      conferenciasAtrasadas: m.atrasadas,
      divergencias: m.comDivergencia,
      taxaDivergenciaPct: m.taxaDivergencia,
      itensConferidos: m.pecasContadas,
      tempoMedioConferenciaMs: m.tempoMedioMs,
      tempoMedioProcessamentoMs: m.tempoMedioProcessamentoMs,
      errosDoSistemaUltimas24h: m.errosDoSistema,
      usuariosAtivos: m.usuariosAtivos,
    },
    rankingFornecedores: ranking.map((f) => ({ fornecedor: f.forn, nfs: f.nfs, divergencias: f.divergencias, indicePct: f.indice })),
    produtividadePorConferente: produtividade.map((p) => ({ conferente: p.nome, nfs: p.nfs, itens: p.itens, divergencias: p.divergencias, tempoMedioMs: p.tempoMedioMs })),
    topReferenciasDivergentes: topDivergentes.map((p) => ({ referencia: p.ref, descricao: p.desc, diferenca: p.diferenca })),
    anomaliasDetectadas: anomalias.map((a) => ({ titulo: a.titulo, detalhe: a.detalhe })),
    alertasAbertos: {
      divergentesNaoResolvidos: alertas.divergentes.length,
      pendentesHaMaisDe4h: alertas.pendentesAntigas.length,
      comRecontagem: alertas.comRecontagem.length,
    },
  };
}

async function perguntarAssistenteIA(){
  const inputEl    = document.getElementById("iaAssistentePergunta");
  const respostaEl = document.getElementById("iaAssistenteResposta");
  const btnEl      = document.getElementById("btnIaAssistentePerguntar");
  const pergunta   = inputEl.value.trim();
  if (!pergunta) return;

  if (!IA_BACKEND_URL || IA_BACKEND_URL.includes("COLOQUE-AQUI")){
    respostaEl.innerHTML = '<div class="msg msg-error">O Assistente ainda não foi configurado — falta publicar o backend seguro (veja ia-backend/README.md) e preencher IA_BACKEND_URL no código.</div>';
    return;
  }
  if (!__dashboardCarregado){
    respostaEl.innerHTML = '<div class="msg msg-error">Aguarde o Dashboard terminar de carregar antes de perguntar.</div>';
    return;
  }

  btnEl.disabled = true;
  respostaEl.innerHTML = '<div class="empty-state" style="padding:12px 0;">Consultando o Assistente...</div>';

  try{
    const usuario = firebase.auth().currentUser;
    if (!usuario) throw new Error("Sessão expirada — faça login de novo.");
    const idToken = await usuario.getIdToken();
    const contexto = _montarContextoParaIA();

    const resp = await recebeMaisRequest(IA_BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + idToken },
      body: JSON.stringify({ pergunta, contexto }),
    });
    const dados = await resp.json();
    if (!resp.ok) throw new Error(dados.erro || "Não foi possível consultar o Assistente.");

    respostaEl.innerHTML = `<div style="background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:12px 14px; font-size:0.88rem; white-space:pre-wrap; line-height:1.5;">${escapeHTML(dados.resposta)}</div>`;
  } catch (err){
    console.error(err);
    respostaEl.innerHTML = `<div class="msg msg-error">${escapeHTML(err.message || "Erro ao consultar o Assistente.")}</div>`;
    registrarEvento("ERRO_API", { mensagem: String((err && err.message) || err), setor: "assistente_ia" });
  } finally {
    btnEl.disabled = false;
  }
}

// Referências mais divergentes: cruza o esperado (d.produtos, o que
// veio na nota) com o realmente contado (resultado.rows) por
// referência, somando a diferença ao longo de todas as notas do
// filtro atual.
function _dashboardTopProdutosDivergentes(docs){
  const mapa = {};
  docs.forEach((d) => {
    if (d.status !== "finalizada" || !d.resultado) return;
    const esperadoPorRef = {};
    (d.produtos || []).forEach((p) => { esperadoPorRef[p.referencia] = Number(p.quantidade) || 0; });
    (d.resultado.rows || []).forEach((r) => {
      if (r.status !== "div") return;
      const esperado = esperadoPorRef[r.ref];
      if (esperado == null) return;
      const dif = (Number(r.qty) || 0) - esperado;
      if (!mapa[r.ref]) mapa[r.ref] = { ref: r.ref, desc: r.desc || "", diferenca: 0 };
      mapa[r.ref].diferenca += dif;
    });
  });
  return Object.values(mapa).sort((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca)).slice(0, 10);
}

function _dashboardFmtNum(n){ return Number(n || 0).toLocaleString("pt-BR"); }
function _dashboardFmtPct(n){ return n.toFixed(1).replace(".", ","); }

/* =====================================================================
   DASHBOARD v2 — KPIs com comparação, gráficos de evolução (SVG puro,
   sem biblioteca), distribuição, rankings clicáveis, modo TV e
   atualização automática. Reaproveita os mesmos dados/filtros/alertas
   de antes; só a camada visual foi refeita.
   ===================================================================== */
let __dashboardUltimaAtualizacao = null;
let __dashTV = false;
let __dashAutoTimer = null;
let __dashClockTimer = null;
const DASH_AUTO_REFRESH_MS = 30000;

function _dashTs(ts){ return (ts && typeof ts.toDate === "function") ? ts.toDate().getTime() : 0; }
function _dashEsperado(d){ return (d.produtos || []).reduce((s, p) => s + (Number(p.quantidade) || 0), 0); }
function _dashContado(d){ return ((d.resultado && d.resultado.rows) || []).reduce((s, r) => s + (Number(r.qty) || 0), 0); }

// Janela [início, fim) do período anterior, de mesmo tamanho, pra
// comparar. "Tudo" não tem anterior (retorna null).
function _dashboardJanelaAnterior(){
  const DAY = 86400000, agora = Date.now(), f = __dashboardFiltro;
  const rolantes = { "1d": 1, "7d": 7, "15d": 15, "30d": 30 };
  if (f.periodo === "hoje"){
    // ontem, até a mesma hora de agora (comparação justa com o dia parcial)
    const ini = new Date(); ini.setHours(0, 0, 0, 0);
    return [ini.getTime() - DAY, ini.getTime() - DAY + (agora - ini.getTime())];
  }
  if (rolantes[f.periodo]){
    const L = rolantes[f.periodo] * DAY;
    return [agora - 2 * L, agora - L];
  }
  if (f.periodo === "personalizado" && f.dataInicio && f.dataFim){
    const ini = new Date(f.dataInicio + "T00:00:00").getTime();
    const fim = new Date(f.dataFim + "T23:59:59.999").getTime() + 1;
    return [ini - (fim - ini), ini];
  }
  return null;
}

// Define os "baldes" de tempo do eixo X conforme o período.
function _dashBuckets(docs){
  const f = __dashboardFiltro, DAY = 86400000, HOUR = 3600000, agora = Date.now();
  const rolantes = { "1d": 1, "7d": 7, "15d": 15, "30d": 30 };
  const tempos = [];
  docs.forEach((d) => { const a = _dashTs(d.criadoEm), b = _dashTs(d.finalizadoEm); if (a) tempos.push(a); if (b) tempos.push(b); });
  let ini, fim = agora, passo, tipo;
  if (f.periodo === "1d"){
    ini = Math.floor((agora - DAY) / HOUR) * HOUR; passo = HOUR; tipo = "h"; fim = agora;
  } else if (f.periodo === "hoje"){
    const d0 = new Date(); d0.setHours(0, 0, 0, 0);
    ini = d0.getTime(); passo = HOUR; tipo = "h"; fim = agora;
  } else {
    if (rolantes[f.periodo]) ini = agora - rolantes[f.periodo] * DAY;
    else if (f.periodo === "personalizado" && f.dataInicio) ini = new Date(f.dataInicio + "T00:00:00").getTime();
    else ini = tempos.length ? Math.min(...tempos) : agora - 7 * DAY;
    if (f.periodo === "personalizado" && f.dataFim) fim = new Date(f.dataFim + "T23:59:59.999").getTime();
    const d0 = new Date(ini); d0.setHours(0, 0, 0, 0); ini = d0.getTime();
    const span = fim - ini;
    if (span <= 62 * DAY){ passo = DAY; tipo = "d"; }
    else if (span <= 400 * DAY){ passo = 7 * DAY; tipo = "w"; }
    else { passo = 30 * DAY; tipo = "m"; }
  }
  const n = Math.max(1, Math.min(120, Math.ceil((fim - ini) / passo)));
  const baldes = [];
  for (let i = 0; i < n; i++){
    const t = ini + i * passo, dt = new Date(t);
    const dd = String(dt.getDate()).padStart(2, "0"), mm = String(dt.getMonth() + 1).padStart(2, "0");
    baldes.push({ t, label: tipo === "h" ? String(dt.getHours()).padStart(2, "0") + "h" : (tipo === "m" ? mm + "/" + String(dt.getFullYear()).slice(2) : dd + "/" + mm),
      enviadas: 0, finalizadas: 0, divergentes: 0, pecasContadas: 0, pecasEsperadas: 0 });
  }
  return { ini, passo, baldes };
}

function _dashSeriesPorTempo(docs){
  const { ini, passo, baldes } = _dashBuckets(docs);
  const idx = (t) => { const i = Math.floor((t - ini) / passo); return (i >= 0 && i < baldes.length) ? i : -1; };
  docs.forEach((d) => {
    const a = _dashTs(d.criadoEm);
    if (a){ const i = idx(a); if (i >= 0){ baldes[i].enviadas++; baldes[i].pecasEsperadas += _dashEsperado(d); } }
    if (d.status === "finalizada"){
      const b = _dashTs(d.finalizadoEm) || a;
      const i = b ? idx(b) : -1;
      if (i >= 0){
        baldes[i].finalizadas++;
        baldes[i].pecasContadas += _dashContado(d);
        if (_dashboardDocEhDivergente(d)) baldes[i].divergentes++;
      }
    }
  });
  return baldes;
}

function _dashPorHora(docs){
  const horas = Array.from({ length: 24 }, (_, h) => ({ label: String(h).padStart(2, "0"), v: 0 }));
  docs.forEach((d) => {
    if (d.status !== "finalizada") return;
    const t = _dashTs(d.finalizadoEm);
    if (t) horas[new Date(t).getHours()].v++;
  });
  return horas;
}

// Máximo do eixo Y = 4 × um passo "redondo" (1, 2, 3, 4, 5, 6, 8, 10...),
// assim as 5 marcas do eixo (0, 1/4, 1/2, 3/4, máx) caem sempre em
// números inteiros, sem repetir valores arredondados.
function _dashNiceMax(v){
  for (let p = 1; p < 1e12; p *= 10){
    const base = p === 1 ? [1, 2, 3, 4, 5, 6, 8] : [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8];
    for (const b of base){
      const passo = b * p;
      if (passo * 4 >= v) return passo * 4;
    }
  }
  return v;
}

// Barras agrupadas. series: [{nome, cor, valores[]}]
function _dashChartBarras(labels, series, opts){
  opts = opts || {};
  const W = opts.w || 640, H = opts.h || 230, fs = opts.fs || 13, mL = Math.round(fs * 3.4), mR = 8, mT = Math.max(10, Math.round(fs * 0.7)), mB = Math.round(fs * 2);
  const iw = W - mL - mR, ih = H - mT - mB;
  const max = _dashNiceMax(Math.max(1, ...series.flatMap((s) => s.valores)));
  const n = labels.length, grupo = iw / n, barW = Math.max(1.5, Math.min(26, (grupo * 0.8) / series.length));
  let svg = `<svg viewBox="0 0 ${W} ${H}" class="dash-svg" role="img" aria-label="${escapeHTML(opts.titulo || "gráfico")}">`;
  for (let g = 0; g <= 4; g++){
    const y = mT + ih - (ih * g / 4), val = max * g / 4;
    svg += `<line x1="${mL}" x2="${W - mR}" y1="${y}" y2="${y}" class="dash-grid"/><text x="${mL - 5}" y="${y + 3}" text-anchor="end" class="dash-ax" style="font-size:${fs}px">${_dashboardFmtNum(Math.round(val))}</text>`;
  }
  const passoLbl = Math.max(1, Math.ceil(n / 12));
  labels.forEach((lb, i) => {
    const x0 = mL + i * grupo + (grupo - barW * series.length) / 2;
    series.forEach((s, k) => {
      const v = s.valores[i] || 0, h = ih * v / max;
      svg += `<rect x="${(x0 + k * barW).toFixed(1)}" y="${(mT + ih - h).toFixed(1)}" width="${(barW - 1).toFixed(1)}" height="${h.toFixed(1)}" rx="2" style="fill:${s.cor}"><title>${escapeHTML(lb)} · ${escapeHTML(s.nome)}: ${_dashboardFmtNum(v)}</title></rect>`;
    });
    if (i % passoLbl === 0) svg += `<text x="${(mL + i * grupo + grupo / 2).toFixed(1)}" y="${H - 6}" text-anchor="middle" class="dash-ax" style="font-size:${fs}px">${escapeHTML(lb)}</text>`;
  });
  svg += "</svg>";
  return svg;
}

// Linhas com área. series: [{nome, cor, valores[], area?}]
function _dashChartLinhas(labels, series, opts){
  opts = opts || {};
  const W = opts.w || 640, H = opts.h || 230, fs = opts.fs || 13, mL = Math.round(fs * 4), mR = 14, mT = Math.max(10, Math.round(fs * 0.7)), mB = Math.round(fs * 2);
  const iw = W - mL - mR, ih = H - mT - mB;
  const max = _dashNiceMax(Math.max(1, ...series.flatMap((s) => s.valores)));
  const n = labels.length, dx = n > 1 ? iw / (n - 1) : 0;
  const X = (i) => mL + (n > 1 ? i * dx : iw / 2), Y = (v) => mT + ih - ih * v / max;
  let svg = `<svg viewBox="0 0 ${W} ${H}" class="dash-svg" role="img" aria-label="${escapeHTML(opts.titulo || "gráfico")}">`;
  for (let g = 0; g <= 4; g++){
    const y = mT + ih - (ih * g / 4), val = max * g / 4;
    svg += `<line x1="${mL}" x2="${W - mR}" y1="${y}" y2="${y}" class="dash-grid"/><text x="${mL - 5}" y="${y + 3}" text-anchor="end" class="dash-ax" style="font-size:${fs}px">${_dashboardFmtNum(Math.round(val))}</text>`;
  }
  const passoLbl = Math.max(1, Math.ceil(n / 12));
  labels.forEach((lb, i) => { if (i % passoLbl === 0) svg += `<text x="${X(i).toFixed(1)}" y="${H - 6}" text-anchor="middle" class="dash-ax" style="font-size:${fs}px">${escapeHTML(lb)}</text>`; });
  series.forEach((s) => {
    const pts = s.valores.map((v, i) => `${X(i).toFixed(1)},${Y(v || 0).toFixed(1)}`);
    if (s.area && n > 1) svg += `<polygon points="${X(0).toFixed(1)},${mT + ih} ${pts.join(" ")} ${X(n - 1).toFixed(1)},${mT + ih}" style="fill:${s.cor};opacity:.13"/>`;
    svg += `<polyline points="${pts.join(" ")}" fill="none" stroke-width="2" stroke-linejoin="round" style="stroke:${s.cor}"/>`;
    if (n <= 40) s.valores.forEach((v, i) => { svg += `<circle cx="${X(i).toFixed(1)}" cy="${Y(v || 0).toFixed(1)}" r="2.6" style="fill:${s.cor}"><title>${escapeHTML(labels[i])} · ${escapeHTML(s.nome)}: ${_dashboardFmtNum(v || 0)}</title></circle>`; });
  });
  svg += "</svg>";
  return svg;
}

function _dashLegenda(series){
  return `<div class="dash-legenda">${series.map((s) => `<span><i style="background:${s.cor}"></i>${escapeHTML(s.nome)}</span>`).join("")}</div>`;
}

function _dashDonut(itens){
  const total = itens.reduce((s, i) => s + i.n, 0);
  if (!total) return '<div class="empty-state">Sem dados.</div>';
  const R = 52, C = 2 * Math.PI * R;
  let off = 0, arcos = "";
  itens.forEach((it) => {
    if (!it.n) return;
    const len = C * it.n / total;
    arcos += `<circle cx="70" cy="70" r="${R}" fill="none" stroke-width="20" stroke-dasharray="${len.toFixed(2)} ${(C - len).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 70 70)" style="stroke:${it.cor}"><title>${escapeHTML(it.lbl)}: ${it.n}</title></circle>`;
    off += len;
  });
  return `<div class="dash-donut-wrap">
    <svg viewBox="0 0 140 140" class="dash-donut"><circle cx="70" cy="70" r="${R}" fill="none" stroke-width="20" style="stroke:var(--bg)"/>${arcos}
      <text x="70" y="68" text-anchor="middle" class="dash-donut-n">${total}</text><text x="70" y="84" text-anchor="middle" class="dash-ax">NFs</text></svg>
    <div class="dash-donut-leg">${itens.map((it) => `<div><i style="background:${it.cor}"></i>${escapeHTML(it.lbl)} <strong>${it.n}</strong></div>`).join("")}</div>
  </div>`;
}

function _dashDelta(atual, anterior, inverso){
  if (anterior == null || atual == null) return "";
  if (anterior === 0 && atual === 0) return '<div class="dash-delta">= igual ao período anterior</div>';
  if (anterior === 0) return '<div class="dash-delta">novo (sem dados antes)</div>';
  const pct = (atual - anterior) / Math.abs(anterior) * 100;
  if (Math.abs(pct) < 0.5) return '<div class="dash-delta">= igual ao período anterior</div>';
  const subiu = pct > 0, bom = inverso ? !subiu : subiu;
  return `<div class="dash-delta ${bom ? "d-bom" : "d-ruim"}">${subiu ? "▲" : "▼"} ${Math.abs(pct).toFixed(0)}% vs período anterior</div>`;
}

function _dashKpi(valor, label, opts){
  opts = opts || {};
  const click = opts.filtro !== undefined ? ` onclick="_dashboardAplicarStatus('${opts.filtro}')" role="button" tabindex="0"` : "";
  return `<div class="dash-kpi ${opts.cls || ""}${opts.filtro !== undefined ? " clicavel" : ""}"${click}>
    <div class="k-l">${label}</div><div class="k-n">${valor}</div>${opts.sub ? `<div class="k-s">${opts.sub}</div>` : ""}${opts.delta || ""}</div>`;
}

function _dashboardAplicarStatus(status){
  const sel = document.getElementById("dashboardFiltroStatus");
  if (!sel) return;
  sel.value = (sel.value === status) ? "" : status;
  _dashboardFiltroMudou();
}
function _dashboardAplicarFornecedor(forn){
  const sel = document.getElementById("dashboardFiltroForn");
  if (!sel) return;
  sel.value = (sel.value === forn) ? "" : forn;
  _dashboardFiltroMudou();
}

function _dashHeroHTML(m, mp){
  const d = (k, inv) => mp ? _dashDelta(m[k], mp[k], inv) : "";
  const taxa = m.taxaDivergencia, taxaP = mp ? mp.taxaDivergencia : null;
  return `<div class="dash-hero">
    ${_dashKpi(m.total, "NFs enviadas", { delta: d("total"), filtro: "" })}
    ${_dashKpi(m.processadas, "Finalizadas", { cls: "k-ok", delta: d("processadas"), filtro: "finalizada", sub: `${m.finalizadas} sem divergência` })}
    ${_dashKpi(m.pendentes, "Em conferência", { cls: m.atrasadas ? "k-warn" : "", filtro: "pendente", sub: `${m.emAndamento} contando · ${m.aguardando} aguardando` })}
    ${_dashKpi(m.atrasadas, "Atrasadas (+4h)", { cls: m.atrasadas ? "k-ruim" : "k-ok", sub: "pendentes há mais de 4 horas" })}
    ${_dashKpi(m.comDivergencia, "Com divergência", { cls: m.comDivergencia ? "k-ruim" : "k-ok", delta: d("comDivergencia", true), filtro: "divergente" })}
    ${_dashKpi(taxa == null ? "—" : _dashboardFmtPct(taxa) + "%", "Taxa de divergência", { cls: taxa == null ? "" : (taxa > 5 ? "k-ruim" : "k-ok"), delta: (taxa != null && taxaP != null) ? _dashDelta(taxa, taxaP, true) : "" })}
    ${_dashKpi(_dashboardFmtNum(m.pecasContadas), "Peças conferidas", { delta: d("pecasContadas"), sub: `de ${_dashboardFmtNum(m.pecasEsperadas)} esperadas` })}
    ${_dashKpi(m.pctConvergencia == null ? "—" : _dashboardFmtPct(m.pctConvergencia) + "%", "Referências convergentes", { cls: m.pctConvergencia != null && m.pctConvergencia >= 95 ? "k-ok" : "", sub: m.taxaRecontagem == null ? "" : `recontagem em ${_dashboardFmtPct(m.taxaRecontagem)}% das linhas` })}
    ${_dashKpi(_dashboardFmtDuracao(m.tempoMedioMs), "Tempo médio de conferência", { sub: "início → fim da contagem" })}
    ${_dashKpi(_dashboardFmtDuracao(m.tempoMedioProcessamentoMs), "Tempo médio envio → final", { sub: "da NF enviada até finalizada" })}
    ${_dashKpi(m.usuariosAtivos, "Usuários ativos", { sub: "logins no período carregado" })}
    ${_dashKpi(m.errosDoSistema, "Erros do sistema", { cls: m.errosDoSistema ? "k-ruim" : "k-ok" })}
  </div>`;
}

function _dashGraficosHTML(docs){
  const baldes = _dashSeriesPorTempo(docs);
  const labels = baldes.map((b) => b.label);
  const sNF = [
    { nome: "Enviadas", cor: "#2c7fb8", valores: baldes.map((b) => b.enviadas) },
    { nome: "Finalizadas", cor: "#1f9d55", valores: baldes.map((b) => b.finalizadas) },
    { nome: "Com divergência", cor: "#c1462f", valores: baldes.map((b) => b.divergentes) },
  ];
  const sPc = [
    { nome: "Peças esperadas (enviadas)", cor: "#9aa7b5", valores: baldes.map((b) => b.pecasEsperadas) },
    { nome: "Peças conferidas", cor: "#1f5f8b", area: true, valores: baldes.map((b) => b.pecasContadas) },
  ];
  const horas = _dashPorHora(docs);
  const sHr = [{ nome: "Finalizadas", cor: "#6c4ab6", valores: horas.map((h) => h.v) }];
  const pico = horas.reduce((a, h) => (h.v > a.v ? h : a), { v: 0, label: "—" });
  return `<div class="dash-grid2">
    <div class="panel"><div class="dash-section-title">Evolução de NFs</div>${_dashLegenda(sNF)}${_dashChartBarras(labels, sNF, { titulo: "Evolução de NFs" })}</div>
    <div class="panel"><div class="dash-section-title">Evolução de peças</div>${_dashLegenda(sPc)}${_dashChartLinhas(labels, sPc, { titulo: "Evolução de peças" })}</div>
  </div>
  <div class="panel"><div class="dash-section-title">Finalizações por hora do dia${pico.v ? ` <span class="dash-hint">· pico às ${pico.label}h (${pico.v})</span>` : ""}</div>${_dashChartBarras(horas.map((h) => h.label), sHr, { titulo: "Finalizações por hora", w: 1280, h: 200, fs: 20 })}</div>`;
}

function _dashDistribuicaoHTML(docs, m){
  const donut = _dashDonut([
    { lbl: "Concluídas", n: m.finalizadas, cor: "#1f9d55" },
    { lbl: "Com divergência", n: m.comDivergencia, cor: "#c1462f" },
    { lbl: "Em andamento", n: m.emAndamento, cor: "#e08a00" },
    { lbl: "Aguardando", n: m.aguardando, cor: "#9aa7b5" },
  ]);
  // Fornecedores por volume (clicável: filtra o Dashboard inteiro)
  const mapa = {};
  docs.forEach((d) => {
    const f = d.forn || "—";
    if (!mapa[f]) mapa[f] = { forn: f, nfs: 0, div: 0, pecas: 0 };
    mapa[f].nfs++; mapa[f].pecas += _dashEsperado(d);
    if (_dashboardDocEhDivergente(d)) mapa[f].div++;
  });
  const forns = Object.values(mapa).sort((a, b) => b.nfs - a.nfs).slice(0, 8);
  const maxNf = Math.max(1, ...forns.map((f) => f.nfs));
  const fornHTML = forns.length ? forns.map((f) => `<div class="dash-hbar clicavel" onclick="_dashboardAplicarFornecedor('${escapeHTML(f.forn).replace(/'/g, "&#39;")}')" title="Clique para filtrar por este fornecedor">
      <div class="hb-l">${escapeHTML(f.forn)}</div>
      <div class="hb-t"><div class="hb-f" style="width:${(f.nfs / maxNf * 100).toFixed(1)}%"></div>${f.div ? `<div class="hb-d" style="width:${(f.div / maxNf * 100).toFixed(1)}%"></div>` : ""}</div>
      <div class="hb-v">${f.nfs} NF${f.nfs !== 1 ? "s" : ""}${f.div ? ` · <span class="t-ruim">${f.div} div.</span>` : ""}</div></div>`).join("")
    : '<div class="empty-state">Sem dados.</div>';
  // Conferentes
  const prod = _dashboardProdutividade(docs);
  const maxIt = Math.max(1, ...prod.map((p) => p.itens));
  const confHTML = prod.length ? prod.slice(0, 8).map((p) => `<div class="dash-hbar">
      <div class="hb-l">${escapeHTML(p.nome)}</div>
      <div class="hb-t"><div class="hb-f hb-f2" style="width:${(p.itens / maxIt * 100).toFixed(1)}%"></div></div>
      <div class="hb-v">${_dashboardFmtNum(p.itens)} pç · ${p.nfs} NF${p.nfs !== 1 ? "s" : ""}</div></div>`).join("")
    : '<div class="empty-state">Sem dados.</div>';
  return `<div class="dash-grid3">
    <div class="panel"><div class="dash-section-title">Status das NFs</div>${donut}</div>
    <div class="panel"><div class="dash-section-title">Fornecedores por volume</div><div class="dash-hint" style="margin:-8px 0 10px;">vermelho = NFs com divergência · clique para filtrar</div>${fornHTML}</div>
    <div class="panel"><div class="dash-section-title">Peças conferidas por conferente</div>${confHTML}</div>
  </div>`;
}

function _dashFiltroResumo(){
  const t = (id) => { const el = document.getElementById(id); return el && el.options && el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : ""; };
  const partes = ["Período: " + (t("dashboardFiltroPeriodo") || "Tudo")];
  if (__dashboardFiltro.forn) partes.push("Fornecedor: " + __dashboardFiltro.forn);
  if (__dashboardFiltro.status) partes.push("Status: " + t("dashboardFiltroStatus"));
  return partes.join(" · ");
}

function _dashBarraToolbarHTML(){
  const hora = __dashboardUltimaAtualizacao ? new Date(__dashboardUltimaAtualizacao).toLocaleTimeString("pt-BR", { hour12: false }) : "—";
  return `<div class="dash-toolbar">
    <span class="dash-filtro-resumo">${escapeHTML(_dashFiltroResumo())}</span>
    <span>Atualizado às <strong>${hora}</strong></span>
    <label class="dash-auto"><input type="checkbox" id="dashboardAutoRefresh" ${__dashAutoTimer ? "checked" : ""} onchange="_dashboardAjustarTimer()"> Atualizar a cada 30s</label>
    <button class="btn-secondary" type="button" onclick="dashboardToggleTV()">${__dashTV ? "Sair do modo TV" : "Modo TV"}</button>
    <span class="dash-clock" id="dashboardRelogio"></span>
  </div>`;
}

function _dashboardAjustarTimer(){
  const chk = document.getElementById("dashboardAutoRefresh");
  const ligar = chk ? chk.checked : __dashTV;
  if (__dashAutoTimer){ clearInterval(__dashAutoTimer); __dashAutoTimer = null; }
  if (ligar){
    __dashAutoTimer = setInterval(() => {
      const view = document.getElementById("view-dashboard");
      if (!view || !view.classList.contains("active")) return;
      if (document.hidden && !__dashTV) return;
      const modal = document.getElementById("detalhesModalOverlay");
      if (modal && modal.classList.contains("visible")) return;
      if (typeof firebase === "undefined" || !firebase.apps || !firebase.apps.length || !firebase.auth().currentUser) return;
      carregarDashboard(true);
    }, DASH_AUTO_REFRESH_MS);
  }
}

function _dashboardAtualizarRelogio(){
  const el = document.getElementById("dashboardRelogio");
  if (el) el.textContent = new Date().toLocaleString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}

function dashboardToggleTV(forcar){
  __dashTV = typeof forcar === "boolean" ? forcar : !__dashTV;
  document.body.classList.toggle("dash-tv-on", __dashTV);
  const view = document.getElementById("view-dashboard");
  if (view) view.classList.toggle("dash-tv", __dashTV);
  if (__dashTV){
    try{ if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {}); } catch (e){}
    if (!__dashClockTimer) __dashClockTimer = setInterval(_dashboardAtualizarRelogio, 1000);
  } else {
    try{ if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {}); } catch (e){}
    if (__dashClockTimer){ clearInterval(__dashClockTimer); __dashClockTimer = null; }
  }
  renderizarDashboard();
  if (__dashTV){ const chk = document.getElementById("dashboardAutoRefresh"); if (chk) chk.checked = true; }
  _dashboardAjustarTimer();
  _dashboardAtualizarRelogio();
}
document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && __dashTV) dashboardToggleTV(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && __dashTV) dashboardToggleTV(false); });

function renderizarDashboard(){
  const contentEl = document.getElementById("dashboardContent");
  if (!contentEl) return;
  const docs = _dashboardDocsFiltrados();

  if (!docs.length){
    contentEl.innerHTML = _dashBarraToolbarHTML() + '<div class="empty-state">Nenhum envio encontrado para esse filtro.</div>';
    _dashboardAtualizarRelogio();
    return;
  }

  const m = _dashboardCalcularMetricas(docs);
  const alertas = _dashboardAlertas(docs);
  const ranking = _dashboardRankingFornecedores(docs);
  const topDivergentes = _dashboardTopProdutosDivergentes(docs);
  const anomalias = _dashboardAnomalias(docs, _dashboardBaselineParaAnomalias());
  const produtividade = _dashboardProdutividade(docs);

  const janelaAnt = _dashboardJanelaAnterior();
  const docsAnt = janelaAnt ? _dashboardDocsFiltrados(janelaAnt) : null;
  const mAnt = docsAnt ? _dashboardCalcularMetricas(docsAnt) : null;
  const cardsTopo = _dashBarraToolbarHTML() + _dashHeroHTML(m, mAnt);
  const graficosHTML = _dashGraficosHTML(docs);
  const distribuicaoHTML = _dashDistribuicaoHTML(docs, m);

  // Saúde do Sistema (Etapa 4) — status por componente, calculado a
  // partir dos ERRO_SISTEMA registrados em "eventos" nas últimas 24h
  // (capturados automaticamente pela rede de segurança window.onerror
  // dos dois apps, além dos pontos instrumentados manualmente). Sem
  // erro recente = operacional; sem dado suficiente pra afirmar mais
  // do que isso. Pro super admin, essa seção fica bem mais detalhada
  // (ver mais abaixo) — os demais continuam vendo só o essencial.
  const souSuperAdminDashboard = !!(__meuUsuarioLogado && __meuUsuarioLogado.superAdmin === true);

  // status: true = ok (verde) · false = problema (vermelho) · null = verificando (cinza, neutro)
  const _saudeLinha = (lbl, status, detalhe) => {
    const cor = status === true ? "#1f7a4d" : status === false ? "var(--danger)" : "var(--text-mute)";
    return `<div class="dash-bar-row" style="margin-bottom:8px;">
      <div class="lbl" style="width:auto; flex:1; display:flex; align-items:center; gap:8px; color:var(--text);">
        <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${cor}; flex-shrink:0;"></span>
        ${lbl}
      </div>
      <div class="pct" style="width:auto; font-weight:600; color:${cor};">${detalhe}</div>
    </div>`;
  };

  const saudeSistemaHTML = (() => {
    const agora = Date.now();
    const janela24h = 24 * 60 * 60 * 1000;
    const eventosRecentes = _dashboardEventosFiltradosPorEmpresa(__dashboardEventos);
    const errosPorSetor = {};
    eventosRecentes.forEach((e) => {
      if (e.tipoEvento !== "ERRO_SISTEMA") return;
      const t = (e.timestamp && typeof e.timestamp.toDate === "function") ? e.timestamp.toDate().getTime() : 0;
      if (!t || (agora - t) > janela24h) return;
      const setor = e.setor || "geral";
      errosPorSetor[setor] = (errosPorSetor[setor] || 0) + 1;
    });

    const componentesBase = [
      { chave: "extrator", lbl: "Extrator NF (site de conferência)" },
      { chave: "recebemais", lbl: "RecebeMais (app)" },
      { chave: "envio_recebemais", lbl: "Envio ao RecebeMais" },
    ];
    const linhasBase = componentesBase.map((c) => {
      const qtd = errosPorSetor[c.chave] || 0;
      return _saudeLinha(c.lbl, qtd === 0, qtd === 0 ? "Operacional" : `${qtd} erro${qtd !== 1 ? "s" : ""} (24h)`);
    }).join("");

    if (!souSuperAdminDashboard){
      return `<div class="panel">
        <div class="dash-section-title">Saúde do Sistema</div>
        ${linhasBase}
      </div>`;
    }

    // ── A partir daqui, só o que o super admin vê ──

    // Sincronização Extrator ↔ RecebeMais: contagens travadas (mais de
    // 4h como pendente) são o sinal mais direto de que o fluxo não tá
    // fluindo no ritmo esperado entre os dois apps.
    const sincronizacaoOk = m.atrasadas === 0;

    // Provedores de consulta por chave: uso de cada um nas últimas 24h
    // e quantas vezes cada consulta precisou cair pro backup (sinal de
    // que o provedor preferido pode estar degradado).
    const nomesProvedor = { danferapida: "Danfe Rápida", consultadanfe: "ConsultaDanfe", meudanfe: "MeuDanfe" };
    const usoProvedor = {};
    eventosRecentes.forEach((e) => {
      if (e.tipoEvento !== "NF_CONSULTA_CHAVE") return;
      const t = (e.timestamp && typeof e.timestamp.toDate === "function") ? e.timestamp.toDate().getTime() : 0;
      if (!t || (agora - t) > janela24h) return;
      const chave = e.provider || "desconhecido";
      if (!usoProvedor[chave]) usoProvedor[chave] = { total: 0, fallback: 0 };
      usoProvedor[chave].total++;
      if (e.metadata && e.metadata.fallback) usoProvedor[chave].fallback++;
    });
    const totalConsultas24h = Object.values(usoProvedor).reduce((s, p) => s + p.total, 0);
    const linhasProvedores = Object.keys(usoProvedor).length
      ? Object.keys(usoProvedor).map((chave) => {
          const p = usoProvedor[chave];
          const taxaFallback = p.total > 0 ? (p.fallback / p.total * 100) : 0;
          const ok = taxaFallback < 30; // menos de 30% caindo pro backup é considerado normal
          return _saudeLinha(
            nomesProvedor[chave] || chave,
            ok,
            `${p.total} consulta${p.total !== 1 ? "s" : ""} (24h)${p.fallback ? `, ${p.fallback} via backup` : ""}`
          );
        }).join("")
      : '<div style="color:var(--text-mute); font-size:0.82rem; padding:6px 0;">Nenhuma consulta por chave nas últimas 24h.</div>';

    return `<div class="panel">
      <div class="dash-section-title">Saúde Detalhada do Sistema</div>
      <div style="font-size:0.78rem; color:var(--text-mute); margin-bottom:14px;">Checagem ao vivo dos serviços de infraestrutura, mais o histórico de erros e uso das últimas 24h.</div>

      <div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.3px; color:var(--text-mute); margin-bottom:8px;">Verificação ao vivo</div>
      ${_saudeLinha("Banco de Dados (Firestore)", true, "Operacional")}
      ${_saudeLinha("Autenticação (Firebase Auth)", true, "Operacional")}
      <!-- "Backend de IA" e "Consulta de NF-e" viraram o MESMO servidor
           (Node.js em recebemais.online/ia) desde que a consulta saiu
           do Cloudflare Worker — por isso agora é uma checagem só. -->
      <div id="saudeBackendIA">${_saudeLinha("Backend de IA + Consulta de NF-e (Node.js)", null, "Verificando...")}</div>

      <div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.3px; color:var(--text-mute); margin:16px 0 8px;">Aplicativos (últimas 24h)</div>
      ${linhasBase}
      ${_saudeLinha("Sincronização (Extrator ↔ RecebeMais)", sincronizacaoOk, sincronizacaoOk ? "Operacional" : `${m.atrasadas} contagem${m.atrasadas !== 1 ? "ns" : ""} travada${m.atrasadas !== 1 ? "s" : ""} há mais de 4h`)}

      <div style="font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.3px; color:var(--text-mute); margin:16px 0 8px;">Provedores de consulta por chave (últimas 24h, ${totalConsultas24h} no total)</div>
      ${linhasProvedores}
    </div>`;
  })();

  const anomaliasHTML = anomalias.length
    ? `<div class="panel">
        <div class="dash-section-title">Anomalias Detectadas</div>
        ${anomalias.map((a) => `<div class="dash-alert-item alert-warn" style="margin-bottom:8px;">
          <div class="aa-title">${escapeHTML(a.titulo)}</div>
          <div class="aa-sub">${escapeHTML(a.detalhe)}</div>
        </div>`).join("")}
      </div>`
    : "";

  const alertasHTML = (() => {
    const grupos = [];
    if (alertas.divergentes.length){
      grupos.push(`<div class="dash-alert-group">
        <h3>Divergências</h3>
        ${alertas.divergentes.map((d) => `<div class="dash-alert-item" onclick="abrirDetalhesContagem('${d.id}')">
          <div class="aa-row">
            <div>
              <div class="aa-title">${escapeHTML(d.forn || "—")} — NF ${escapeHTML(d.nf || "—")}</div>
              <div class="aa-sub">${d.resultado.reconResumo.div} referência${d.resultado.reconResumo.div !== 1 ? "s" : ""} divergente${d.resultado.reconResumo.div !== 1 ? "s" : ""}</div>
            </div>
            <button class="aa-resolver" type="button" onclick="marcarAlertaResolvido('${d.id}', event)">Resolvido</button>
          </div>
        </div>`).join("")}
      </div>`);
    }
    if (alertas.pendentesAntigas.length){
      grupos.push(`<div class="dash-alert-group">
        <h3>Pendentes há mais de 4h</h3>
        ${alertas.pendentesAntigas.map((d) => `<div class="dash-alert-item alert-warn">
          <div class="aa-row">
            <div>
              <div class="aa-title">${escapeHTML(d.forn || "—")} — NF ${escapeHTML(d.nf || "—")}</div>
              <div class="aa-sub">Aguardando conferência desde ${_painelFormatarData(d.criadoEm)}</div>
            </div>
            <button class="aa-resolver" type="button" onclick="marcarAlertaResolvido('${d.id}', event)">Resolvido</button>
          </div>
        </div>`).join("")}
      </div>`);
    }
    if (alertas.comRecontagem.length){
      grupos.push(`<div class="dash-alert-group">
        <h3>Com recontagem</h3>
        ${alertas.comRecontagem.map((d) => `<div class="dash-alert-item alert-info" onclick="abrirDetalhesContagem('${d.id}')">
          <div class="aa-row">
            <div>
              <div class="aa-title">${escapeHTML(d.forn || "—")} — NF ${escapeHTML(d.nf || "—")}</div>
              <div class="aa-sub">Uma ou mais referências foram recontadas</div>
            </div>
            <button class="aa-resolver" type="button" onclick="marcarAlertaResolvido('${d.id}', event)">Resolvido</button>
          </div>
        </div>`).join("")}
      </div>`);
    }
    if (!grupos.length){
      return `<div class="panel"><div class="dash-section-title">Requer atenção</div><div class="empty-state">Nenhum alerta no momento.</div></div>`;
    }
    return `<div class="panel"><div class="dash-section-title">Requer atenção</div>${grupos.join("")}</div>`;
  })();

  const rankingHTML = `<div class="panel">
    <div class="dash-section-title" style="display:flex; justify-content:space-between; align-items:center;">
      <span>Ranking de fornecedores (índice de divergência)</span>
      ${ranking.length ? '<button class="btn-secondary" style="font-size:0.72rem; padding:4px 10px;" type="button" onclick="exportarRankingFornecedoresCSV()">Exportar CSV</button>' : ""}
    </div>
    ${ranking.length ? `<div class="dash-table-wrap"><table>
      <thead><tr><th>Fornecedor</th><th class="dash-num">NFs</th><th class="dash-num">Divergências</th><th class="dash-num">Índice</th></tr></thead>
      <tbody>${ranking.map((f) => `<tr>
        <td>${escapeHTML(f.forn)}</td>
        <td class="dash-num">${f.nfs}</td>
        <td class="dash-num">${f.divergencias}</td>
        <td class="dash-num">${_dashboardFmtPct(f.indice)}%</td>
      </tr>`).join("")}</tbody>
    </table></div>` : '<div class="empty-state">Sem dados suficientes.</div>'}
  </div>`;

  const produtividadeHTML = `<div class="panel">
    <div class="dash-section-title" style="display:flex; justify-content:space-between; align-items:center;">
      <span>Produtividade por conferente</span>
      ${produtividade.length ? '<button class="btn-secondary" style="font-size:0.72rem; padding:4px 10px;" type="button" onclick="exportarProdutividadeCSV()">Exportar CSV</button>' : ""}
    </div>
    <div style="font-size:0.78rem; color:var(--text-mute); margin-bottom:10px;">
      Visão operacional de carga e tempo por conferente — não é um ranking de desempenho individual.
    </div>
    ${produtividade.length ? `<div class="dash-table-wrap"><table>
      <thead><tr><th>Conferente</th><th class="dash-num">NFs</th><th class="dash-num">Itens</th><th class="dash-num">Divergências</th><th class="dash-num">Tempo médio</th></tr></thead>
      <tbody>${produtividade.map((p) => `<tr>
        <td>${escapeHTML(p.nome)}</td>
        <td class="dash-num">${p.nfs}</td>
        <td class="dash-num">${_dashboardFmtNum(p.itens)}</td>
        <td class="dash-num">${p.divergencias}</td>
        <td class="dash-num">${_dashboardFmtDuracao(p.tempoMedioMs)}</td>
      </tr>`).join("")}</tbody>
    </table></div>` : '<div class="empty-state">Sem dados suficientes.</div>'}
  </div>`;

  const topDivergentesHTML = `<div class="panel">
    <div class="dash-section-title">Top referências divergentes</div>
    ${topDivergentes.length ? `<div class="dash-table-wrap"><table>
      <thead><tr><th>Referência</th><th>Descrição</th><th class="dash-num">Diferença</th></tr></thead>
      <tbody>${topDivergentes.map((p) => `<tr>
        <td style="font-family:var(--mono);font-weight:700;">${escapeHTML(p.ref)}</td>
        <td>${escapeHTML(p.desc)}</td>
        <td class="dash-num" style="color:${p.diferenca < 0 ? "var(--danger)" : "#1f7a4d"};font-weight:700;">${p.diferenca > 0 ? "+" : ""}${_dashboardFmtNum(p.diferenca)}</td>
      </tr>`).join("")}</tbody>
    </table></div>` : '<div class="empty-state">Nenhuma divergência no período/filtro selecionado.</div>'}
  </div>`;

  const tabelaHTML = `<div class="panel">
    <div class="dash-section-title">Notas fiscais</div>
    <div class="dash-table-wrap"><table>
      <thead><tr><th>Data</th><th>Fornecedor</th><th>NF</th><th class="dash-num">Esperado</th><th class="dash-num">Contado</th><th class="dash-num">Dif.</th><th>Status</th></tr></thead>
      <tbody>${docs.map((d) => {
        const esperado = (d.produtos || []).reduce((s, p) => s + (Number(p.quantidade) || 0), 0);
        const rows = (d.resultado && d.resultado.rows) || [];
        const contado = rows.reduce((s, r) => s + (Number(r.qty) || 0), 0);
        const dif = d.status === "finalizada" ? (contado - esperado) : null;
        let statusLbl = "Em conferência", statusCor = "var(--warn)";
        if (d.status === "finalizada"){ statusLbl = "Finalizada"; statusCor = "#1f7a4d"; }
        else if (d.status === "descartada"){ statusLbl = "Descartada"; statusCor = "var(--text-mute)"; }
        if (_dashboardDocEhDivergente(d)){ statusLbl = "Divergente"; statusCor = "var(--danger)"; }
        return `<tr class="clickable" onclick="abrirDetalhesContagem('${d.id}')">
          <td>${_painelFormatarData(d.criadoEm)}</td>
          <td>${escapeHTML(d.forn || "—")}</td>
          <td>${escapeHTML(d.nf || "—")}</td>
          <td class="dash-num">${_dashboardFmtNum(esperado)}</td>
          <td class="dash-num">${d.status === "finalizada" ? _dashboardFmtNum(contado) : "—"}</td>
          <td class="dash-num" style="${dif != null && dif !== 0 ? "color:var(--danger);font-weight:700;" : ""}">${dif == null ? "—" : (dif > 0 ? "+" : "") + _dashboardFmtNum(dif)}</td>
          <td><span class="status-pill" style="background:transparent;border-color:${statusCor};color:${statusCor};">${statusLbl}</span></td>
        </tr>`;
      }).join("")}</tbody>
    </table></div>
  </div>`;

  if (__dashTV){
    // Modo TV: só o que se lê de longe — KPIs, gráficos, distribuição,
    // alertas e anomalias. Sem tabelas longas nem saúde detalhada.
    contentEl.innerHTML = cardsTopo + graficosHTML + distribuicaoHTML + `<div class="dash-grid2">${alertasHTML}${anomaliasHTML || ""}</div>`;
  } else {
    contentEl.innerHTML = cardsTopo + graficosHTML + distribuicaoHTML +
      `<div class="dash-grid2">${alertasHTML}${anomaliasHTML || saudeSistemaHTML}</div>` + (anomaliasHTML ? saudeSistemaHTML : "") +
      rankingHTML + produtividadeHTML + topDivergentesHTML + tabelaHTML;
  }
  _dashboardAtualizarRelogio();

  if (souSuperAdminDashboard && !__dashTV) _verificarSaudeAoVivo();
}

// Testa de verdade, ao vivo, se o backend de IA e o Worker de consulta
// de NF-e estão respondendo — diferente do resto da "Saúde Detalhada"
// (que é inferido de erros passados), isso é uma checagem em tempo
// real, feita toda vez que o Dashboard carrega. Cada uma atualiza só o
// próprio pedacinho da tela quando a resposta chega, sem travar o
// resto do Dashboard esperando.
async function _verificarSaudeAoVivo(){
  const elBackend = document.getElementById("saudeBackendIA");
  if (elBackend){
    try{
      const inicio = Date.now();
      const resp = await recebeMaisRequest(IA_BACKEND_BASE_URL + "/health", { method: "GET" });
      const ms = Date.now() - inicio;
      const ok = resp.ok;
      elBackend.innerHTML = ok
        ? `<div class="dash-bar-row" style="margin-bottom:8px;"><div class="lbl" style="width:auto; flex:1; display:flex; align-items:center; gap:8px; color:var(--text);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#1f7a4d; flex-shrink:0;"></span>Backend de IA + Consulta de NF-e (Node.js)</div><div class="pct" style="width:auto; font-weight:600; color:#1f7a4d;">Operacional (${ms}ms)</div></div>`
        : `<div class="dash-bar-row" style="margin-bottom:8px;"><div class="lbl" style="width:auto; flex:1; display:flex; align-items:center; gap:8px; color:var(--text);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--danger); flex-shrink:0;"></span>Backend de IA + Consulta de NF-e (Node.js)</div><div class="pct" style="width:auto; font-weight:600; color:var(--danger);">Respondeu com erro (${resp.status})</div></div>`;
    } catch (err){
      elBackend.innerHTML = `<div class="dash-bar-row" style="margin-bottom:8px;"><div class="lbl" style="width:auto; flex:1; display:flex; align-items:center; gap:8px; color:var(--text);"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--danger); flex-shrink:0;"></span>Backend de IA + Consulta de NF-e (Node.js)</div><div class="pct" style="width:auto; font-weight:600; color:var(--danger);">Fora do ar</div></div>`;
    }
  }
}

// Exporta a tabela detalhada (já respeitando os filtros ativos) como
// CSV, pra quem quiser abrir no Excel/Sheets fora do site.
function exportarDashboardCSV(){
  const docs = _dashboardDocsFiltrados();
  if (!docs.length){ showToast("Nada para exportar com esse filtro."); return; }

  const linhas = [["Data", "Fornecedor", "NF", "Peças esperadas", "Peças contadas", "Diferença", "Status"]];
  docs.forEach((d) => {
    const esperado = (d.produtos || []).reduce((s, p) => s + (Number(p.quantidade) || 0), 0);
    const rows = (d.resultado && d.resultado.rows) || [];
    const contado = rows.reduce((s, r) => s + (Number(r.qty) || 0), 0);
    const dif = d.status === "finalizada" ? (contado - esperado) : "";
    linhas.push([
      _painelFormatarData(d.criadoEm),
      d.forn || "",
      d.nf || "",
      esperado,
      d.status === "finalizada" ? contado : "",
      dif,
      d.status === "finalizada" ? "Finalizada" : (d.status === "descartada" ? "Descartada" : "Em conferência"),
    ]);
  });

  _baixarCSV("dashboard", linhas);
}

function exportarRankingFornecedoresCSV(){
  const docs = _dashboardDocsFiltrados();
  const ranking = _dashboardRankingFornecedores(docs);
  if (!ranking.length){ showToast("Nada para exportar com esse filtro."); return; }
  const linhas = [["Fornecedor", "NFs", "Divergências", "Índice"]];
  ranking.forEach((f) => linhas.push([f.forn, f.nfs, f.divergencias, _dashboardFmtPct(f.indice) + "%"]));
  _baixarCSV("ranking_fornecedores", linhas);
}

function exportarProdutividadeCSV(){
  const docs = _dashboardDocsFiltrados();
  const produtividade = _dashboardProdutividade(docs);
  if (!produtividade.length){ showToast("Nada para exportar com esse filtro."); return; }
  const linhas = [["Conferente", "NFs", "Itens", "Divergências", "Tempo médio"]];
  produtividade.forEach((p) => linhas.push([p.nome, p.nfs, p.itens, p.divergencias, _dashboardFmtDuracao(p.tempoMedioMs)]));
  _baixarCSV("produtividade", linhas);
}

// Exportação da tela Contagens — respeita os filtros de busca/status
// ativos ali (independente do Dashboard, que tem seus próprios filtros).
function exportarContagensCSV(){
  const docs = _histDocsFiltrados();
  if (!docs.length){ showToast("Nada para exportar com esse filtro."); return; }
  const usuarioLogado = firebase.auth().currentUser;
  const linhas = [["Data", "Fornecedor", "NF", "Enviado por", "Conferente", "Status"]];
  docs.forEach((d) => {
    const divergente = _histDocEhDivergente(d);
    let statusTxt = "Em conferência";
    if (d.status === "finalizada") statusTxt = divergente ? "Finalizada (divergente)" : "Finalizada";
    else if (d.status === "descartada") statusTxt = "Descartada";
    const nomeExibicao = (__perfilAtual && __perfilAtual.nome && usuarioLogado && d.criadoPorUid === usuarioLogado.uid)
      ? __perfilAtual.nome
      : (d.criadoPorEmail || "");
    linhas.push([
      _painelFormatarData(d.criadoEm),
      d.forn || "",
      d.nf || "",
      nomeExibicao,
      d.finalizadoPorPerfil || d.finalizadoPorEmail || "",
      statusTxt,
    ]);
  });
  _baixarCSV("contagens", linhas);
}

// Gera e baixa um arquivo CSV a partir de uma matriz de linhas (a
// primeira linha é o cabeçalho) — usado por todas as exportações do
// site (Dashboard, Ranking, Produtividade, Contagens).
function _baixarCSV(nomeBase, linhas){
  const csv = linhas.map((linha) => linha.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${nomeBase}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

let __painelDocsRaw = []; // [{id, ...dados}] — cache bruto pra reaplicar filtros sem refazer a consulta
let __histFiltro = { busca: "", status: "" };

let __painelCarregando = false;
// silencioso=true: usado pela atualização automática (30s) — não pisca
// "Carregando...", não limpa a lista e ignora erros de rede passageiros.
async function carregarPainelHistorico(silencioso){
  silencioso = silencioso === true;
  if (__painelCarregando) return;
  const statusEl = document.getElementById("painelStatus");
  const listaEl  = document.getElementById("painelLista");
  const emptyEl  = document.getElementById("painelEmptyState");
  const resumoEl = document.getElementById("painelResumo");

  if (!silencioso){
    statusEl.innerHTML = '<div class="msg" style="background:#eef5fb;color:var(--primary-dark);border-color:#cfe0ee;">Carregando histórico...</div>';
    listaEl.innerHTML = "";
    emptyEl.style.display = "none";
  }
  __painelCarregando = true;

  if (!_checaFirebasePronto()) { statusEl.innerHTML = ""; return; }

  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    // Empresas com múltiplos logins (Etapa 1 — Administração) veem o
    // histórico da EMPRESA TODA (quem enviou pode ser uma pessoa, quem
    // finaliza no RecebeMais pode ser outra) — por isso filtra por
    // "empresaId" quando essa conta já está vinculada a uma. Contas
    // antigas/sem empresa cadastrada continuam no filtro por
    // "criadoPorUid" de sempre, sem quebrar nada. Cada uma dessas
    // variações exige seu próprio índice composto no Firestore — se
    // aparecer erro de índice faltando no console, é só clicar no link
    // que o próprio erro fornece para criar automaticamente.
    const query = __meuEmpresaId
      ? db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).where("empresaId", "==", __meuEmpresaId).orderBy("criadoEm", "desc").limit(200)
      : db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).where("criadoPorUid", "==", firebase.auth().currentUser.uid).orderBy("criadoEm", "desc").limit(200);
    const snap = await query.get();

    statusEl.innerHTML = "";
    __painelCarregado = true;
    __painelUltimaAtualizacao = new Date();

    __painelDocsRaw = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    __painelDocsPorId = {};
    __painelDocsRaw.forEach((d) => { __painelDocsPorId[d.id] = d; });

    resumoEl.textContent = __painelDocsRaw.length
      ? `${__painelDocsRaw.length} envio${__painelDocsRaw.length !== 1 ? "s" : ""} registrado${__painelDocsRaw.length !== 1 ? "s" : ""} (últimos 200)`
      : "";

    _renderizarPainelCards();
    _renderizarHistoricoLista();
  } catch (err){
    console.error("Erro ao carregar histórico do Painel:", err);
    if (!silencioso){
      statusEl.innerHTML = '<div class="msg" style="background:#fbecea;color:var(--danger);border-color:#f2c9c1;">Não foi possível carregar o histórico. Verifique sua conexão e tente novamente.</div>';
    }
  } finally {
    __painelCarregando = false;
  }
}

/* ── Mini dashboard da tela Contagens + atualização automática (30s) ── */
let __painelUltimaAtualizacao = null;
const PAINEL_AUTO_REFRESH_MS = 30000;

function _painelDocData(ts){
  try{ return ts && ts.toDate ? ts.toDate() : null; } catch (e){ return null; }
}

function _renderizarPainelCards(){
  const el = document.getElementById("painelCards");
  if (!el) return;
  const docs = __painelDocsRaw;
  const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  let pend = 0, fin = 0, div = 0, desc = 0, enviadasHoje = 0, finHoje = 0, pecasHoje = 0;
  docs.forEach((d) => {
    if (d.status === "finalizada") fin++;
    else if (d.status === "descartada") desc++;
    else pend++;
    if (_histDocEhDivergente(d)) div++;
    const env = _painelDocData(d.criadoEm);
    if (env && env >= hoje) enviadasHoje++;
    const fim = _painelDocData(d.finalizadoEm);
    if (d.status === "finalizada" && fim && fim >= hoje){
      finHoje++;
      const rows = (d.resultado && d.resultado.rows) || [];
      pecasHoje += rows.reduce((a, r) => a + (Number(r.qty) || 0), 0);
    }
  });
  const card = (n, l, filtro, cor) =>
    `<button type="button" class="pc-card" ${filtro !== null ? `onclick="_painelCardFiltrar('${filtro}')"` : "disabled"} style="--pc:${cor}">
       <span class="pc-n">${n.toLocaleString("pt-BR")}</span><span class="pc-l">${l}</span></button>`;
  const hora = __painelUltimaAtualizacao ? __painelUltimaAtualizacao.toLocaleTimeString("pt-BR", { hour12: false }) : "—";
  el.innerHTML =
    `<div class="pc-grid">
      ${card(pend, "Em conferência", "pendente", "#e08a00")}
      ${card(finHoje, "Finalizadas hoje", "finalizada", "#1f9d55")}
      ${card(div, "Com divergência", "divergente", "#c0392b")}
      ${card(desc, "Descartadas", "descartada", "#7f8c8d")}
      ${card(enviadasHoje, "Enviadas hoje", "", "#2c7fb8")}
      ${card(pecasHoje, "Peças conferidas hoje", null, "#6c4ab6")}
    </div>
    <div class="pc-sub">Atualiza sozinho a cada 30s · última: <strong>${hora}</strong> · ${docs.length} no total</div>`;
}

function _painelCardFiltrar(status){
  const sel = document.getElementById("histFiltroStatus");
  if (!sel) return;
  sel.value = (sel.value === status) ? "" : status; // clicar de novo limpa o filtro
  _histFiltroMudou();
}

function _iniciarAtualizacaoAutomaticaPainel(){
  setInterval(() => {
    try{
      const view = document.getElementById("view-painel");
      if (!view || !view.classList.contains("active")) return;
      if (document.hidden) return;
      // Não atualiza por baixo de quem está editando/olhando um modal.
      const modal = document.getElementById("detalhesModalOverlay");
      if (modal && modal.classList.contains("visible")) return;
      if (typeof firebase === "undefined" || !firebase.apps || !firebase.apps.length || !firebase.auth().currentUser) return;
      carregarPainelHistorico(true);
    } catch (e){ console.error("Auto-refresh do Painel:", e); }
  }, PAINEL_AUTO_REFRESH_MS);
}

function _histFiltroMudou(){
  __histFiltro.busca  = (document.getElementById("histBusca").value || "").trim().toLowerCase();
  __histFiltro.status = document.getElementById("histFiltroStatus").value;
  _renderizarHistoricoLista();
}

// "Divergente" não é um status salvo — é uma finalizada cujo resultado
// teve pelo menos uma referência com status "div" (mesma lógica usada
// no Dashboard).
function _histDocEhDivergente(d){
  return d.status === "finalizada" && !!(d.resultado && d.resultado.reconResumo && d.resultado.reconResumo.div > 0);
}

function _histDocsFiltrados(){
  return __painelDocsRaw.filter((d) => {
    if (__histFiltro.busca){
      const alvo = `${d.forn || ""} ${d.nf || ""}`.toLowerCase();
      if (!alvo.includes(__histFiltro.busca)) return false;
    }
    if (__histFiltro.status === "divergente"){
      if (!_histDocEhDivergente(d)) return false;
    } else if (__histFiltro.status && d.status !== __histFiltro.status){
      return false;
    }
    return true;
  });
}

function _renderizarHistoricoLista(){
  const listaEl = document.getElementById("painelLista");
  const emptyEl = document.getElementById("painelEmptyState");
  if (!listaEl || !emptyEl) return;

  const usuarioLogado = firebase.auth().currentUser;

  const docsFiltrados = _histDocsFiltrados();

  if (!docsFiltrados.length){
    listaEl.innerHTML = "";
    emptyEl.style.display = "block";
    emptyEl.textContent = __painelDocsRaw.length ? "Nenhum envio encontrado para esse filtro." : "Nenhum envio registrado ainda.";
    return;
  }
  emptyEl.style.display = "none";

  listaEl.innerHTML = docsFiltrados.map((d) => {
    const finalizada = d.status === "finalizada";
    const descartada = d.status === "descartada";
    const divergente = _histDocEhDivergente(d);

    let classeStatus = "st-pendente";
    let statusHTML = '<span class="status-pill status-pendente">Em conferência</span>';
    if (descartada){
      classeStatus = "st-descartada";
      statusHTML = '<span class="status-pill status-descartada">Descartada</span>';
    } else if (divergente){
      classeStatus = "st-divergente";
      statusHTML = '<span class="status-pill status-finalizada">Finalizada</span> <span class="badge-generic badge-divergente">Divergente</span>';
    } else if (finalizada){
      classeStatus = "st-finalizada";
      statusHTML = '<span class="status-pill status-finalizada">Finalizada</span>';
    }

    // "Enviado por" mostra o nome de perfil (Configurações → Perfil) no
    // lugar do e-mail, quando esse envio pertence ao usuário logado e
    // ele já tem um nome cadastrado. "Conferente" é quem finalizou no
    // RecebeMais (perfil do aparelho lá, quando informado).
    const nomeExibicao = (__perfilAtual && __perfilAtual.nome && usuarioLogado && d.criadoPorUid === usuarioLogado.uid)
      ? __perfilAtual.nome
      : (d.criadoPorEmail || "—");
    const conferenteExibicao = d.finalizadoPorPerfil || d.finalizadoPorEmail || null;

    let detalhesBtnTitle = "Só disponível depois que a contagem for finalizada no RecebeMais";
    if (descartada){
      const responsavelDescarte = d.descartadoPorPerfil || d.descartadoPorEmail || null;
      detalhesBtnTitle = responsavelDescarte
        ? `Descartada por ${responsavelDescarte} no RecebeMais antes de ser finalizada — sem detalhes para exibir.`
        : "Contagem descartada no RecebeMais antes de ser finalizada — sem detalhes para exibir.";
    }
    const detalhesBtn = finalizada
      ? `<button class="btn-detalhes" type="button" onclick="abrirDetalhesContagem('${d.id}')">Detalhes</button>`
      : `<button class="btn-detalhes" type="button" disabled title="${escapeHTML(detalhesBtnTitle)}">Detalhes</button>`;

    const ehAdminHist = _souAdminOuSuperAdmin();
    const adminBtns = ehAdminHist
      ? `<button class="btn-detalhes" type="button" onclick="abrirEditorItensEnviados('${d.id}')">Itens enviados</button>
         <button class="btn-detalhes" type="button" style="color:#c0392b; border-color:#c0392b;" onclick="removerContagemDaNuvem('${d.id}')">Remover da nuvem</button>`
      : "";

    return `<div class="hist-card ${classeStatus}">
      <div class="hist-card-body">
        <div class="hist-card-top">
          <div>
            <div class="hist-card-forn">${escapeHTML(d.forn || "—")}</div>
            <div class="hist-card-nf">NF ${escapeHTML(d.nf || "—")} · ${_painelFormatarData(d.criadoEm)}</div>
          </div>
          <div>${statusHTML}</div>
        </div>
        <div class="hist-card-meta">
          <span>Enviado por: <strong>${escapeHTML(nomeExibicao)}</strong></span>
          ${conferenteExibicao ? `<span>Conferente: <strong>${escapeHTML(conferenteExibicao)}</strong></span>` : ""}
        </div>
      </div>
      <div class="hist-card-actions">${detalhesBtn}${adminBtns}</div>
    </div>`;
  }).join("");
}

// Marca/desmarca a liberação administrativa dessa NF, fechando o ciclo
// operacional → portaria/administrativo. Best-effort e otimista:
// atualiza a UI na hora, sem esperar reload. (Campo "lancadaFiscal"
// mantido no Firestore por compatibilidade com registros já gravados.)
async function marcarLancamentoFiscal(docId){
  const usuario = firebase.auth().currentUser;
  if (!usuario){ showError("Sessão expirada — faça login de novo."); return; }
  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    await db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).doc(docId).update({
      lancadaFiscal: true,
      lancadaFiscalEm: firebase.firestore.FieldValue.serverTimestamp(),
      lancadaFiscalPorEmail: usuario.email || null,
    });
    const agoraFake = { toDate: () => new Date() }; // pra exibir a hora na hora, sem esperar o próximo reload
    [__painelDocsPorId[docId], __painelDocsRaw.find((d) => d.id === docId)].forEach((ref) => {
      if (!ref) return;
      ref.lancadaFiscal = true;
      ref.lancadaFiscalEm = agoraFake;
      ref.lancadaFiscalPorEmail = usuario.email || null;
    });
    _renderizarHistoricoLista();
    showToast("Marcada como liberada.");
  } catch (err){
    console.error("Falha ao marcar liberação:", err);
    showError("Não foi possível marcar a liberação. Tente novamente.");
  }
}

async function desmarcarLancamentoFiscal(docId){
  const usuario = firebase.auth().currentUser;
  if (!usuario){ showError("Sessão expirada — faça login de novo."); return; }
  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    await db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).doc(docId).update({
      lancadaFiscal: false,
      lancadaFiscalEm: null,
      lancadaFiscalPorEmail: null,
    });
    [__painelDocsPorId[docId], __painelDocsRaw.find((d) => d.id === docId)].forEach((ref) => {
      if (!ref) return;
      ref.lancadaFiscal = false;
      ref.lancadaFiscalEm = null;
      ref.lancadaFiscalPorEmail = null;
    });
    _renderizarHistoricoLista();
    showToast("Liberação desfeita.");
  } catch (err){
    console.error("Falha ao desfazer liberação:", err);
    showError("Não foi possível desfazer. Tente novamente.");
  }
}

/* =====================================================================
   MODAL DE DETALHES — abre, para uma contagem já FINALIZADA no
   RecebeMais, as mesmas informações completas que aparecem lá na tela
   de Histórico/Contagens (referências, quantidades, status de
   conciliação, lotes/validade, observações, recontagens etc.). Os
   dados vêm prontos no campo "resultado" do próprio documento do
   Painel — gravados pelo RecebeMais no momento em que a contagem é
   finalizada (ver sessSave() no RecebeMais.html).
   ===================================================================== */
// Resumo consolidado de "múltiplo" (peças por volume) de todas as
// referências — é a informação usada pela portaria/administrativo pra
// imprimir a etiqueta certa de cada volume, então fica em destaque
// logo no topo do Detalhes, sem precisar abrir item por item.
function _detalhesEtiquetasHTML(rows){
  const linhas = [];
  rows.forEach((row) => {
    (row.multiplos || []).forEach((m) => {
      linhas.push({
        ref: row.ref,
        qtyPerVol: Number(m.qtyPerVol) || 0,
        vols: Number(m.vols) || 0,
        total: Number(m.qty) || 0,
      });
    });
  });
  if (!linhas.length) return "";
  return `<div style="margin: 16px 0;">
    <div style="font-weight:700; font-size:0.78rem; color:var(--primary-dark); text-transform:uppercase; letter-spacing:.3px; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
      ${_detalhesIconeSVG("multiplo")} Múltiplos e Volumes/Etiquetas
    </div>
    <div style="font-size:0.72rem; color:var(--text-mute); margin-bottom:8px;">
      Base para a liberação administrativa e para a impressão exata das etiquetas por volume.
    </div>
    <div class="dash-table-wrap"><table>
      <thead><tr>
        <th>Referência</th>
        <th class="dash-num">Qtd. Total Contada</th>
        <th class="dash-num">Múltiplo (pç/embalagem)</th>
        <th class="dash-num">Volumes/Etiquetas a Imprimir</th>
      </tr></thead>
      <tbody>${linhas.map((l) => `<tr>
        <td style="font-family:var(--mono); font-weight:700;">${escapeHTML(l.ref)}</td>
        <td class="dash-num" style="font-weight:700;">${l.total}</td>
        <td class="dash-num">${l.qtyPerVol}</td>
        <td class="dash-num" style="font-weight:700; color:var(--primary-dark);">${l.vols}</td>
      </tr>`).join("")}</tbody>
    </table></div>
  </div>`;
}

function _detalhesReconBadgeHTML(resumo){
  if (!resumo) return "";
  const partes = [];
  if (resumo.conv)  partes.push(`<span class="recon-conv">${resumo.conv} convergentes</span>`);
  if (resumo.div)   partes.push(`<span class="recon-div">${resumo.div} divergentes</span>`);
  if (resumo.pend)  partes.push(`<span class="recon-pend">${resumo.pend} pendentes</span>`);
  if (resumo.extra) partes.push(`<span class="recon-extra">${resumo.extra} fora da lista</span>`);
  return partes.length ? `<div class="detalhes-recon">${partes.join("")}</div>` : "";
}

// Ícones (SVG inline, sem emoji) usados nas linhas de detalhe da
// contagem — mesmo estilo de traço (feather-like) já usado nos ícones
// da barra lateral, herdando a cor do texto via currentColor.
function _detalhesIconeSVG(tipo){
  const icones = {
    obs: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    lote: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2.58 12.58a2 2 0 0 1 0-2.83l7.17-7.17A2 2 0 0 1 11.17 2H18a2 2 0 0 1 2 2v6.83a2 2 0 0 1-.59 1.41z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    multiplo: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    recontagem: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    warning: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  };
  return icones[tipo] || "";
}

function _detalhesLinhaHTML(row){
  const st = row.status || "";
  const volStr = row.vols ? `${row.vols} vol` : "";
  const scansStr = row.scans > 1 ? `${row.scans} leituras` : "";
  const metaParts = [row.desc || "", volStr, scansStr].filter(Boolean).join(" · ");
  let extras = "";
  if (row.obs){
    extras += `<div class="di-extra-row">${_detalhesIconeSVG("obs")}<span>${escapeHTML(row.obs)}</span></div>`;
  }
  if (row.lotes && row.lotes.length){
    extras += row.lotes.map((l) =>
      `<div class="di-extra-row">${_detalhesIconeSVG("lote")}<span>Lote ${escapeHTML(l.lote || "—")}${l.validade ? " · Val " + escapeHTML(l.validade) : ""} · ${Number(l.quantidade) || 0} pç</span></div>`
    ).join("");
  }
  if (row.multiplos && row.multiplos.length){
    extras += row.multiplos.map((m) =>
      `<div class="di-extra-row">${_detalhesIconeSVG("multiplo")}<span>${Number(m.qtyPerVol) || 0} pç/vol × ${Number(m.vols) || 0} vol = ${Number(m.qty) || 0} pç</span></div>`
    ).join("");
  }
  if (row.recontagens && row.recontagens.length){
    const recTxt = row.recontagens.map((r) => `${r.qty} pç`).join(", ");
    extras += `<div class="di-extra-row di-extra-recontagem">${_detalhesIconeSVG("recontagem")}<span>Recontagem — tentativa(s) anterior(es): ${recTxt}</span></div>`;
  }
  const labelMap = { conv: `${row.qty} pç`, div: `${row.qty} pç (divergente)`, pend: "Pendente", extra: `${row.qty} pç` };
  const qtyLabel = labelMap[st] || `${row.qty} pç`;
  return `<div class="detalhes-item ${st ? "st-" + st : ""}">
    <div style="min-width:0">
      <div class="di-ref">${escapeHTML(row.ref)}</div>
      ${metaParts ? `<div class="di-desc">${escapeHTML(metaParts)}</div>` : ""}
      ${extras}
    </div>
    <div class="di-qty">${qtyLabel}</div>
  </div>`;
}

/* =====================================================================
   CONFIGURAÇÕES → DADOS: excluir todos os dados desta conta na nuvem
   (pendentes, historico_envios e notas_com_erro), sempre restrito ao
   próprio usuário logado (mesmo campo "criadoPorUid" usado nas regras
   de segurança do Firestore) — nunca afeta dados de outra empresa/conta
   que use este mesmo app. Ação destrutiva e irreversível: pede
   confirmação dupla antes de executar.
   ===================================================================== */
async function _excluirTodosDocsDaColecao(db, nomeColecao, uid){
  let totalExcluidos = 0;
  // Apaga em lotes (limite de 500 operações por batch do Firestore;
  // usamos 300 pra deixar folga) até não sobrar mais nenhum documento
  // dessa coleção pertencente ao usuário.
  while (true){
    const snap = await db.collection(nomeColecao)
      .where("criadoPorUid", "==", uid)
      .limit(300)
      .get();
    if (snap.empty) break;
    const batch = db.batch();
    snap.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
    totalExcluidos += snap.size;
    if (snap.size < 300) break;
  }
  return totalExcluidos;
}

// Apaga o histórico de contagens (Contagens + Dashboard voltam a
// zero) de TODA a empresa — não só do próprio login. Passa pelo
// backend porque o isolamento hoje é por uid de quem enviou cada NF,
// não por empresa (ver comentário no server.js). Logins e o registro
// de custo de consultas (aba "Custo de consultas" em Administração)
// não são afetados por essa ação.
async function excluirHistoricoContagensEmpresa(){
  const confirmado = confirm(
    "Isso vai excluir PERMANENTEMENTE todo o histórico de contagens desta empresa — a tela de Contagens e os números do Dashboard voltam a zero.\n\n" +
    "Os logins e o custo de consultas já registrado NÃO são afetados.\n\n" +
    "Essa ação não pode ser desfeita. Deseja continuar?"
  );
  if (!confirmado) return;

  const btnEl = document.getElementById("btnExcluirHistoricoContagens");
  if (btnEl) btnEl.disabled = true;

  try{
    const usuario = firebase.auth().currentUser;
    const idToken = await usuario.getIdToken();
    const resp = await recebeMaisRequest(IA_BACKEND_BASE_URL + "/api/admin/excluir-historico-contagens", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + idToken },
    });
    const dados = await resp.json();
    if (!resp.ok) throw new Error(dados.erro || "Não foi possível excluir o histórico.");

    showSuccess(`Histórico excluído (${dados.excluidos} registro${dados.excluidos !== 1 ? "s" : ""}).`);
    // Recarrega os dados já visíveis, pra Contagens/Dashboard
    // refletirem a exclusão na hora, sem precisar apertar F5.
    __painelCarregado = false;
    __dashboardCarregado = false;
    if (document.getElementById("view-painel").classList.contains("active")) carregarPainelHistorico();
    if (document.getElementById("view-dashboard").classList.contains("active")) carregarDashboard();
  } catch (err){
    console.error(err);
    showError(err.message || "Não foi possível excluir o histórico de contagens.");
  } finally {
    if (btnEl) btnEl.disabled = false;
  }
}

function excluirTodosOsDados(){
  if (!_checaFirebasePronto()) return;

  const confirmado = confirm(
    "Isso vai excluir PERMANENTEMENTE todos os dados desta conta na nuvem: " +
    "notas pendentes de contagem, histórico de envios do Painel e notas com erro salvas.\n\n" +
    "Essa ação não pode ser desfeita. Na próxima tela, você vai precisar confirmar sua senha de acesso.\n\n" +
    "Deseja continuar?"
  );
  if (!confirmado) return;

  _abrirModalSenhaExclusao();
}

// Pede a senha de acesso ao site antes de excluir — não é só uma
// confirmação de texto, é uma reautenticação de verdade no Firebase
// (reauthenticateWithCredential), então só segue adiante se a senha
// digitada bater com a da conta logada.
/* =====================================================================
   PERFIL (nome de exibição, foto e senha) — acessível pelo avatar no
   canto superior esquerdo da barra lateral. Guardado em
   Firestore/perfis/{uid} (doc ID = uid, então as regras de segurança
   são simples: cada usuário só lê/grava o próprio documento). A foto é
   redimensionada e comprimida no navegador antes de salvar, pra manter
   o documento pequeno (evita depender de um serviço externo de upload
   só pra um avatar).
   ===================================================================== */
let __perfilAtual = { nome: "", fotoBase64: "" };
let __perfilCarregado = false;
let __perfilFotoNovaBase64 = null; // foto recém-escolhida no modal, ainda não salva

function _calcularIniciaisPerfil(nome, email){
  const base = (nome && nome.trim()) || (email && email.trim()) || "";
  if (!base) return "?";
  const partes = base.trim().split(/\s+/).filter(Boolean);
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return (partes[0][0] + partes[1][0]).toUpperCase();
}

function _mostrarAvatarEm(imgId, iniciaisId, fotoBase64, iniciais){
  const imgEl  = document.getElementById(imgId);
  const inicEl = document.getElementById(iniciaisId);
  if (!imgEl || !inicEl) return;
  if (fotoBase64){
    imgEl.src = fotoBase64;
    imgEl.style.display = "block";
    inicEl.style.display = "none";
  } else {
    imgEl.removeAttribute("src");
    imgEl.style.display = "none";
    inicEl.textContent = iniciais || "?";
    inicEl.style.display = "";
  }
}

// Atualiza tanto o avatar pequeno da barra lateral quanto o avatar
// grande dentro do modal de Perfil, de uma vez só — e também o nome
// exibido ao lado da foto na barra lateral (usa o nome de perfil
// cadastrado; sem nome, mantém "Conferência NF-e" como reserva).
function _aplicarAvatarUI(fotoBase64, nome, email){
  const iniciais = _calcularIniciaisPerfil(nome, email);
  _mostrarAvatarEm("perfilAvatarImg", "perfilAvatarIniciais", fotoBase64, iniciais);
  _mostrarAvatarEm("perfilAvatarPreviewImg", "perfilAvatarPreviewIniciais", fotoBase64, iniciais);
  const nomeLabelEl = document.getElementById("perfilNomeLabel");
  if (nomeLabelEl) nomeLabelEl.textContent = (nome && nome.trim()) || "Conferência NF-e";
}

// Lê o arquivo de imagem escolhido, recorta um quadrado central e
// redimensiona pra um avatar pequeno (200x200), comprimindo como JPEG —
// mantém o documento no Firestore bem leve (tipicamente poucos KB).
function _resizeImagemParaAvatar(file){
  return new Promise((resolve, reject) => {
    if (!file || !file.type || !file.type.startsWith("image/")){
      reject(new Error("Selecione um arquivo de imagem válido."));
      return;
    }
    const leitor = new FileReader();
    leitor.onerror = () => reject(new Error("Não foi possível ler a imagem selecionada."));
    leitor.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Não foi possível carregar a imagem selecionada."));
      img.onload = () => {
        const tamanho = 200;
        const canvas = document.createElement("canvas");
        canvas.width = tamanho;
        canvas.height = tamanho;
        const ctx = canvas.getContext("2d");
        const lado = Math.min(img.width, img.height);
        const sx = (img.width - lado) / 2;
        const sy = (img.height - lado) / 2;
        ctx.drawImage(img, sx, sy, lado, lado, 0, 0, tamanho, tamanho);
        resolve(canvas.toDataURL("image/jpeg", 0.75));
      };
      img.src = leitor.result;
    };
    leitor.readAsDataURL(file);
  });
}

async function _perfilFotoSelecionada(event){
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  try{
    const dataUrl = await _resizeImagemParaAvatar(file);
    __perfilFotoNovaBase64 = dataUrl;
    _mostrarAvatarEm("perfilAvatarPreviewImg", "perfilAvatarPreviewIniciais", dataUrl, "");
  } catch (err){
    console.error(err);
    showError(err.message || "Não foi possível processar a imagem selecionada.");
  } finally {
    event.target.value = ""; // permite escolher o mesmo arquivo de novo, se quiser
  }
}

// Busca o perfil do usuário logado assim que o login acontece (ver
// initAuth/onAuthStateChanged), pra já deixar o avatar da barra lateral
// certo desde o início e o nome disponível pro Painel ("Enviado por").
async function carregarPerfilAtual(){
  const usuario = firebase.auth().currentUser;
  if (!usuario) return;
  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    const doc = await db.collection("perfis").doc(usuario.uid).get();
    __perfilAtual = doc.exists
      ? { nome: doc.data().nome || "", fotoBase64: doc.data().fotoBase64 || "" }
      : { nome: "", fotoBase64: "" };
  } catch (err){
    console.error("Não foi possível carregar o perfil:", err);
    __perfilAtual = { nome: "", fotoBase64: "" };
  }
  __perfilCarregado = true;
  _aplicarAvatarUI(__perfilAtual.fotoBase64, __perfilAtual.nome, usuario.email);
}

function abrirPerfilModal(){
  const usuario = firebase.auth().currentUser;
  if (!usuario){ showError("Sessão expirada — faça login de novo."); return; }

  __perfilFotoNovaBase64 = null;
  document.getElementById("perfilNomeInput").value = __perfilAtual.nome || "";
  document.getElementById("perfilEmailDisplay").value = usuario.email || "";
  _aplicarAvatarUI(__perfilAtual.fotoBase64, __perfilAtual.nome, usuario.email);

  const statusEl = document.getElementById("perfilStatus");
  if (statusEl) statusEl.textContent = "";

  ["perfilSenhaAtualInput", "perfilSenhaNovaInput", "perfilSenhaConfirmaInput"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const erroEl = document.getElementById("perfilSenhaErro");
  const sucessoEl = document.getElementById("perfilSenhaSucesso");
  if (erroEl){ erroEl.style.display = "none"; erroEl.textContent = ""; }
  if (sucessoEl){ sucessoEl.style.display = "none"; sucessoEl.textContent = ""; }

  document.getElementById("perfilModalOverlay").classList.add("visible");
}

function fecharPerfilModal(){
  document.getElementById("perfilModalOverlay").classList.remove("visible");
}

async function salvarPerfil(){
  const usuario = firebase.auth().currentUser;
  if (!usuario){ showError("Sessão expirada — faça login de novo."); return; }

  const statusEl = document.getElementById("perfilStatus");
  const btn = document.getElementById("btnSalvarPerfil");
  const nome = document.getElementById("perfilNomeInput").value.trim();
  const fotoBase64 = __perfilFotoNovaBase64 !== null ? __perfilFotoNovaBase64 : (__perfilAtual.fotoBase64 || "");

  if (btn) btn.disabled = true;
  if (statusEl){ statusEl.textContent = "Salvando..."; statusEl.style.color = "var(--text-mute)"; }

  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    await db.collection("perfis").doc(usuario.uid).set({
      nome,
      fotoBase64,
      atualizadoEm: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    __perfilAtual = { nome, fotoBase64 };
    __perfilFotoNovaBase64 = null;
    _aplicarAvatarUI(fotoBase64, nome, usuario.email);
    __painelCarregado = false; // pro Painel recarregar e já refletir o nome novo em "Enviado por"

    if (statusEl){ statusEl.textContent = "Perfil salvo com sucesso."; statusEl.style.color = "#1f7a4d"; }
  } catch (err){
    console.error(err);
    if (statusEl){ statusEl.textContent = "Não foi possível salvar o perfil. Tente novamente."; statusEl.style.color = "var(--danger)"; }
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function alterarSenhaPerfil(){
  const usuario = firebase.auth().currentUser;
  const erroEl = document.getElementById("perfilSenhaErro");
  const sucessoEl = document.getElementById("perfilSenhaSucesso");
  const btn = document.getElementById("btnAlterarSenhaPerfil");
  const senhaAtual = document.getElementById("perfilSenhaAtualInput").value;
  const senhaNova = document.getElementById("perfilSenhaNovaInput").value;
  const senhaConfirma = document.getElementById("perfilSenhaConfirmaInput").value;

  if (erroEl){ erroEl.style.display = "none"; erroEl.textContent = ""; }
  if (sucessoEl){ sucessoEl.style.display = "none"; sucessoEl.textContent = ""; }

  if (!usuario){ showError("Sessão expirada — faça login de novo."); return; }
  if (senhaNova.length < 6){
    if (erroEl){ erroEl.textContent = "A nova senha precisa ter pelo menos 6 caracteres."; erroEl.style.display = "block"; }
    return;
  }
  if (senhaNova !== senhaConfirma){
    if (erroEl){ erroEl.textContent = "As senhas não coincidem."; erroEl.style.display = "block"; }
    return;
  }

  if (btn) btn.disabled = true;
  try{
    const credencial = firebase.auth.EmailAuthProvider.credential(usuario.email, senhaAtual);
    await usuario.reauthenticateWithCredential(credencial);
    await usuario.updatePassword(senhaNova);

    if (sucessoEl){ sucessoEl.textContent = "Senha atualizada com sucesso."; sucessoEl.style.display = "block"; }
    ["perfilSenhaAtualInput", "perfilSenhaNovaInput", "perfilSenhaConfirmaInput"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
  } catch (err){
    console.error(err);
    const mensagens = {
      "auth/wrong-password": "Senha atual incorreta.",
      "auth/invalid-credential": "Senha atual incorreta.",
      "auth/weak-password": "A nova senha é muito fraca — use pelo menos 6 caracteres.",
      "auth/too-many-requests": "Muitas tentativas — aguarde um pouco e tente de novo.",
      "auth/requires-recent-login": "Por segurança, faça login novamente antes de trocar a senha.",
    };
    if (erroEl){ erroEl.textContent = mensagens[err.code] || "Não foi possível atualizar a senha. Tente novamente."; erroEl.style.display = "block"; }
  } finally {
    if (btn) btn.disabled = false;
  }
}

function _abrirModalSenhaExclusao(){
  const erroEl = document.getElementById("senhaExclusaoErro");
  if (erroEl){ erroEl.style.display = "none"; erroEl.textContent = ""; }
  const inputEl = document.getElementById("senhaExclusaoInput");
  if (inputEl) inputEl.value = "";
  document.getElementById("senhaExclusaoOverlay").classList.add("visible");
  if (inputEl) setTimeout(() => inputEl.focus(), 50);
}

function _fecharModalSenhaExclusao(){
  document.getElementById("senhaExclusaoOverlay").classList.remove("visible");
}

async function _confirmarSenhaExclusao(){
  const usuario = firebase.auth().currentUser;
  const inputEl = document.getElementById("senhaExclusaoInput");
  const erroEl  = document.getElementById("senhaExclusaoErro");
  const btn     = document.getElementById("btnConfirmarSenhaExclusao");
  const senha   = inputEl ? inputEl.value : "";

  if (!usuario){ _fecharModalSenhaExclusao(); showError("Sessão expirada — faça login de novo antes de excluir."); return; }
  if (!senha){ return; }

  if (erroEl){ erroEl.style.display = "none"; erroEl.textContent = ""; }
  if (btn) btn.disabled = true;

  try{
    const credencial = firebase.auth.EmailAuthProvider.credential(usuario.email, senha);
    await usuario.reauthenticateWithCredential(credencial);
  } catch (err){
    console.error(err);
    if (btn) btn.disabled = false;
    if (erroEl){
      const mensagens = {
        "auth/wrong-password": "Senha incorreta.",
        "auth/invalid-credential": "Senha incorreta.",
        "auth/too-many-requests": "Muitas tentativas — aguarde um pouco e tente de novo.",
      };
      erroEl.textContent = mensagens[err.code] || "Não foi possível confirmar a senha. Tente novamente.";
      erroEl.style.display = "block";
    }
    return;
  }

  if (btn) btn.disabled = false;
  _fecharModalSenhaExclusao();
  await _executarExclusaoTodosDados(usuario);
}

async function _executarExclusaoTodosDados(usuario){
  const statusEl = document.getElementById("configDadosStatus");
  const btn = document.getElementById("btnExcluirTodosDados");
  if (btn) btn.disabled = true;
  if (statusEl) statusEl.textContent = "";

  try{
    setProcessing(true, "Excluindo todos os dados...", "Isso pode levar alguns instantes, dependendo da quantidade de registros.");

    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    const uid = usuario.uid;

    const totalPendentes = await _excluirTodosDocsDaColecao(db, RECEBEMAIS_CONFIG.colecaoPendentes, uid);
    const totalHistorico = await _excluirTodosDocsDaColecao(db, RECEBEMAIS_CONFIG.colecaoHistorico, uid);
    const totalErros      = await _excluirTodosDocsDaColecao(db, "notas_com_erro", uid);
    const total = totalPendentes + totalHistorico + totalErros;

    setProcessing(false);
    __painelCarregado = false; // força recarregar o Painel (agora vazio) na próxima vez que for aberto
    showSuccess(`Todos os dados foram excluídos (${total} registro${total !== 1 ? "s" : ""}).`);
    if (statusEl) statusEl.textContent = `Última exclusão: ${new Date().toLocaleString("pt-BR")} — ${total} registro${total !== 1 ? "s" : ""} removido${total !== 1 ? "s" : ""}.`;
  } catch (err){
    console.error(err);
    setProcessing(false);
    showError("Não foi possível excluir todos os dados. Verifique sua conexão e tente novamente.");
  } finally {
    if (btn) btn.disabled = false;
  }
}

/* =====================================================================
   ADMINISTRAÇÃO (RBAC — Etapa 1: Fundação) — empresas, usuários com
   papéis (admin/gestor/funcionario) e custo de consultas por chave de
   acesso. Criar login de outra pessoa passa pelo backend (Admin SDK);
   o resto (ler o próprio cadastro, bootstrap da primeira empresa,
   listar colegas da mesma empresa) roda direto no cliente, dentro do
   que as regras de segurança permitem.
   ===================================================================== */
let __meuUsuarioAdmin = null; // { nome, email, papel, empresaId, ... } ou null se ainda não cadastrado

async function carregarPainelAdmin(){
  const statusEl = document.getElementById("adminStatus");
  const bootstrapEl = document.getElementById("adminBootstrap");
  const somenteLeituraEl = document.getElementById("adminSomenteLeitura");
  const painelCompletoEl = document.getElementById("adminPainelCompleto");

  bootstrapEl.style.display = "none";
  somenteLeituraEl.style.display = "none";
  painelCompletoEl.style.display = "none";
  statusEl.innerHTML = '<div class="empty-state">Carregando...</div>';

  if (!_checaFirebasePronto()){ statusEl.innerHTML = ""; return; }

  try{
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    const usuario = firebase.auth().currentUser;
    const doc = await db.collection("usuarios").doc(usuario.uid).get();

    statusEl.innerHTML = "";

    if (!doc.exists){
      __meuUsuarioAdmin = null;
      bootstrapEl.style.display = "block";
      return;
    }

    __meuUsuarioAdmin = doc.data();
    __meuUsuarioLogado = __meuUsuarioAdmin; // mantém os dois em sincronia
    aplicarControleAcessoPorPapel();

    if (__meuUsuarioAdmin.papel !== "admin"){
      somenteLeituraEl.style.display = "block";
      const rotulosPapel = { gestor: "Gestor", funcionario: "Funcionário", admin: "Administrador" };
      document.getElementById("adminSomenteLeituraInfo").innerHTML = `
        <p><strong>Nome:</strong> ${escapeHTML(__meuUsuarioAdmin.nome || "—")}</p>
        <p><strong>E-mail:</strong> ${escapeHTML(__meuUsuarioAdmin.email || usuario.email || "—")}</p>
        <p><strong>Papel:</strong> ${rotulosPapel[__meuUsuarioAdmin.papel] || __meuUsuarioAdmin.papel}</p>
        <p style="color:var(--text-mute); font-size:0.85rem; margin-top:10px;">Fale com o administrador da sua empresa se precisar de acesso a outra área.</p>
      `;
      return;
    }

    painelCompletoEl.style.display = "block";
    await _carregarEmpresaAdmin(__meuUsuarioAdmin.empresaId);
    await _carregarCustoConsultasAdmin(__meuUsuarioAdmin.empresaId);
    await _carregarListaUsuariosAdmin(__meuUsuarioAdmin.empresaId);

    // Painel de empresas, seletor de empresa e o formulário de criar
    // login só aparecem pra super administrador — criar login deixou
    // de ser algo que qualquer "admin" de empresa pode fazer.
    const empresasPanelEl = document.getElementById("adminEmpresasCadastradasPanel");
    const empresaWrapEl = document.getElementById("adminNovoEmpresaWrap");
    const criarLoginPanelEl = document.getElementById("adminCriarLoginPanel");
    const usuariosEmpresaFiltroWrapEl = document.getElementById("adminUsuariosEmpresaFiltroWrap");
    if (__meuUsuarioAdmin.superAdmin === true){
      empresasPanelEl.style.display = "block";
      empresaWrapEl.style.display = "block";
      criarLoginPanelEl.style.display = "block";
      usuariosEmpresaFiltroWrapEl.style.display = "block";
      await _carregarListaEmpresasSuperAdmin();
    } else {
      empresasPanelEl.style.display = "none";
      empresaWrapEl.style.display = "none";
      criarLoginPanelEl.style.display = "none";
      usuariosEmpresaFiltroWrapEl.style.display = "none";
    }
  } catch (err){
    console.error("Erro ao carregar Administração:", err);
    statusEl.innerHTML = '<div class="msg" style="background:#fbecea;color:var(--danger);border-color:#f2c9c1;">Não foi possível carregar. Verifique sua conexão e tente novamente.</div>';
  }
}

// Lista TODAS as empresas cadastradas (não só a própria) — só chamado
// quando __meuUsuarioAdmin.superAdmin é true. Alimenta tanto a lista
// visível quanto o <select> de empresa no formulário de novo login.
async function _carregarListaEmpresasSuperAdmin(){
  const listaEl = document.getElementById("adminListaEmpresas");
  const selectEl = document.getElementById("adminNovoEmpresa");
  const filtroUsuariosEl = document.getElementById("adminUsuariosEmpresaFiltro");
  try{
    const db = firebase.firestore();
    const snap = await db.collection("empresas").orderBy("nome").get();
    if (snap.empty){
      listaEl.innerHTML = '<div class="empty-state">Nenhuma empresa cadastrada ainda.</div>';
      selectEl.innerHTML = "";
      filtroUsuariosEl.innerHTML = "";
      return;
    }
    listaEl.innerHTML = `<div class="dash-table-wrap"><table>
      <thead><tr><th>Nome</th><th>ID</th></tr></thead>
      <tbody>${snap.docs.map((doc) => `<tr><td>${escapeHTML(doc.data().nome || "—")}</td><td style="color:var(--text-mute); font-size:0.78rem;">${escapeHTML(doc.id)}</td></tr>`).join("")}</tbody>
    </table></div>`;
    const opcoesHTML = snap.docs.map((doc) =>
      `<option value="${escapeHTML(doc.id)}" ${doc.id === __meuUsuarioAdmin.empresaId ? "selected" : ""}>${escapeHTML(doc.data().nome || doc.id)}</option>`
    ).join("");
    selectEl.innerHTML = opcoesHTML;
    filtroUsuariosEl.innerHTML = opcoesHTML;
  } catch (err){
    console.error("Erro ao carregar lista de empresas:", err);
    listaEl.innerHTML = '<div class="empty-state">Não foi possível carregar.</div>';
  }
}

// Cadastra mais uma empresa no sistema — só super administrador tem
// esse botão visível.
async function cadastrarNovaEmpresaSuperAdmin(){
  const nomeInput = document.getElementById("adminNovaEmpresaNome");
  const nome = nomeInput.value.trim();
  if (!nome){ showToast("Digite o nome da empresa."); return; }

  try{
    const db = firebase.firestore();
    const usuario = firebase.auth().currentUser;
    await db.collection("empresas").add({
      nome,
      ativa: true,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
      criadoPorUid: usuario.uid,
    });
    nomeInput.value = "";
    showToast("Empresa cadastrada.");
    _carregarListaEmpresasSuperAdmin();
  } catch (err){
    console.error("Erro ao cadastrar empresa:", err);
    showError("Não foi possível cadastrar a empresa. Tente novamente.");
  }
}

async function _carregarEmpresaAdmin(empresaId){
  try{
    const db = firebase.firestore();
    const doc = await db.collection("empresas").doc(empresaId).get();
    const dados = doc.exists ? doc.data() : {};
    document.getElementById("adminEmpresaInfo").innerHTML = `
      <p><strong>Nome:</strong> ${escapeHTML(dados.nome || "—")}</p>
      <p style="color:var(--text-mute); font-size:0.82rem; margin-top:6px;">ID interno: ${escapeHTML(empresaId)}</p>
    `;
  } catch (err){
    console.error("Erro ao carregar empresa:", err);
  }
}

// Conta quantos eventos de consulta por chave (NF_CONSULTA_CHAVE — ver
// buscarNfePorChave) existem pra essa empresa, e multiplica por
// R$ 0,03 (custo real cobrado pelos provedores por consulta).
async function _carregarCustoConsultasAdmin(empresaId){
  const qtdEl = document.getElementById("adminCustoConsultas");
  const totalEl = document.getElementById("adminCustoTotal");
  try{
    const db = firebase.firestore();
    const snap = await db.collection("eventos")
      .where("empresaId", "==", empresaId)
      .where("tipoEvento", "==", "NF_CONSULTA_CHAVE")
      .get();
    const qtd = snap.size;
    qtdEl.textContent = qtd;
    totalEl.textContent = "R$ " + (qtd * 0.03).toFixed(2).replace(".", ",");
  } catch (err){
    console.error("Erro ao calcular custo de consultas:", err);
    qtdEl.textContent = "—";
    totalEl.textContent = "—";
  }
}

async function _carregarListaUsuariosAdmin(empresaId){
  const containerEl = document.getElementById("adminListaUsuarios");
  try{
    const db = firebase.firestore();
    const usuarioLogado = firebase.auth().currentUser;
    const souSuperAdmin = !!(__meuUsuarioAdmin && __meuUsuarioAdmin.superAdmin === true);
    const snap = await db.collection("usuarios").where("empresaId", "==", empresaId).get();
    if (snap.empty){
      containerEl.innerHTML = '<div class="empty-state">Nenhum login encontrado.</div>';
      return;
    }
    const rotulosPapel = { admin: "Administrador", gestor: "Gestor", funcionario: "Funcionário" };
    containerEl.innerHTML = `<div class="dash-table-wrap"><table>
      <thead><tr><th>Nome</th><th>E-mail</th><th>Papel</th><th>Status</th>${souSuperAdmin ? "<th>Ações</th>" : ""}</tr></thead>
      <tbody>${snap.docs.map((doc) => {
        const d = doc.data();
        const ehVoceMesmo = doc.id === (usuarioLogado && usuarioLogado.uid);
        const inativo = d.ativo === false;
        return `<tr>
          <td>${escapeHTML(d.nome || "—")}</td>
          <td>${escapeHTML(d.email || "—")}</td>
          <td>${rotulosPapel[d.papel] || escapeHTML(d.papel || "—")}</td>
          <td>${inativo ? '<span class="status-pill status-descartada">Inativo</span>' : '<span class="status-pill status-finalizada">Ativo</span>'}</td>
          ${souSuperAdmin ? `<td style="white-space:nowrap;">
            ${ehVoceMesmo ? '<span style="color:var(--text-mute); font-size:0.78rem;">Sua conta</span>' : `
              <button class="btn-ghost" style="padding:5px 9px; font-size:0.76rem;" onclick="alternarStatusUsuarioAdmin('${escapeHTML(doc.id)}', ${!inativo})">${inativo ? "Ativar" : "Inativar"}</button>
              <button class="btn-ghost" style="padding:5px 9px; font-size:0.76rem;" onclick="trocarSenhaUsuarioAdmin('${escapeHTML(doc.id)}', '${escapeHTML(d.nome || d.email || "")}')">Redefinir senha</button>

            `}
          </td>` : ""}
        </tr>`;
      }).join("")}</tbody>
    </table></div>`;
  } catch (err){
    console.error("Erro ao carregar lista de usuários:", err);
    containerEl.innerHTML = '<div class="empty-state">Não foi possível carregar a lista.</div>';
  }
}

// Chama um dos 3 endpoints de gestão de usuário no backend (só super
// admin chega a essas funções, já que os botões só são renderizados
// pra ele) — helper compartilhado pra não repetir a parte de pegar o
// token e tratar erro em cada uma das 3 ações.
async function _chamarEndpointGestaoUsuario(caminho, metodo, corpo){
  const usuario = firebase.auth().currentUser;
  const idToken = await usuario.getIdToken();
  const resp = await recebeMaisRequest(IA_BACKEND_BASE_URL + caminho, {
    method: metodo,
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + idToken },
    body: corpo ? JSON.stringify(corpo) : undefined,
  });
  const dados = await resp.json();
  if (!resp.ok) throw new Error(dados.erro || "Não foi possível concluir a ação.");
  return dados;
}

async function alternarStatusUsuarioAdmin(uid, novoAtivo){
  const acao = novoAtivo ? "ativar" : "inativar";
  if (!confirm(`Confirma ${acao} esse login?`)) return;
  try{
    await _chamarEndpointGestaoUsuario(`/api/admin/usuario/${uid}/status`, "POST", { ativo: novoAtivo });
    showToast(`Login ${novoAtivo ? "ativado" : "inativado"}.`);
    _carregarListaUsuariosAdmin(__meuUsuarioAdmin.empresaId);
  } catch (err){
    console.error(err);
    showError(err.message || "Não foi possível alterar o status.");
  }
}

async function trocarSenhaUsuarioAdmin(uid, nome){
  try {
    const doc = await firebase.firestore().collection('usuarios').doc(uid).get();
    if (!confirm('Enviar e-mail de redefinio de senha para ' + doc.data().email + '?')) return;
    await firebase.auth().sendPasswordResetEmail(doc.data().email);
    showToast('E-mail de redefinio enviado. Verifique tambm o spam.');
  } catch(err){ showError(err.message); }
}

async function excluirUsuarioAdmin(uid, nome){
  if (!confirm(`Excluir o login de ${nome}? Essa ação não pode ser desfeita.`)) return;
  try{
    await _chamarEndpointGestaoUsuario(`/api/admin/usuario/${uid}`, "DELETE", null);
    showToast("Login excluído.");
    _carregarListaUsuariosAdmin(__meuUsuarioAdmin.empresaId);
  } catch (err){
    console.error(err);
    showError(err.message || "Não foi possível excluir o login.");
  }
}

// Bootstrap: primeiro acesso de uma conta nova ao painel de
// Administração — cadastra a empresa e vira admin dela automaticamente.
async function bootstrapEmpresaAdmin(){
  const nomeInput = document.getElementById("adminBootstrapNome");
  const nome = nomeInput.value.trim();
  if (!nome){ showToast("Digite o nome da empresa."); return; }

  try{
    const db = firebase.firestore();
    const usuario = firebase.auth().currentUser;

    const empresaRef = await db.collection("empresas").add({
      nome,
      ativa: true,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
      criadoPorUid: usuario.uid,
    });

    await db.collection("usuarios").doc(usuario.uid).set({
      nome: (__perfilAtual && __perfilAtual.nome) || usuario.email || "",
      email: usuario.email || "",
      papel: "admin",
      empresaId: empresaRef.id,
      ativo: true,
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
      criadoPorUid: usuario.uid,
    });

    showSuccess("Empresa cadastrada — você agora é o administrador dela.");
    carregarPainelAdmin();
  } catch (err){
    console.error("Erro no bootstrap da empresa:", err);
    showError("Não foi possível cadastrar a empresa. Tente novamente.");
  }
}

// Cria um novo login (gestor/funcionário/outro admin) via backend —
// precisa do Admin SDK, que não existe no navegador.
async function criarNovoLoginAdmin(){
  const nome  = document.getElementById("adminNovoNome").value.trim();
  const email = document.getElementById("adminNovoEmail").value.trim();
  const senha = document.getElementById("adminNovoSenha").value;
  const papel = document.getElementById("adminNovoPapel").value;
  const statusEl = document.getElementById("adminCriarLoginStatus");
  const btnEl = document.getElementById("btnAdminCriarLogin");

  if (!nome || !email || !senha){
    statusEl.innerHTML = '<span style="color:var(--danger);">Preencha nome, e-mail e senha.</span>';
    return;
  }

  btnEl.disabled = true;
  statusEl.textContent = "Criando login...";

  try{
    const usuario = firebase.auth().currentUser;
    const idToken = await usuario.getIdToken();
    const corpo = { nome, email, senha, papel };
    // Só é enviado (e só faz efeito) quando quem está pedindo é super
    // administrador — o servidor ignora esse campo pra qualquer outro
    // admin, mesmo que o valor seja forçado manualmente na requisição.
    const empresaWrapEl = document.getElementById("adminNovoEmpresaWrap");
    if (empresaWrapEl && empresaWrapEl.style.display !== "none"){
      const empresaSelecionada = document.getElementById("adminNovoEmpresa").value;
      if (empresaSelecionada) corpo.empresaId = empresaSelecionada;
    }
    const resp = await recebeMaisRequest(IA_BACKEND_BASE_URL + "/api/admin/criar-usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + idToken },
      body: JSON.stringify(corpo),
    });
    const dados = await resp.json();
    if (!resp.ok) throw new Error(dados.erro || "Não foi possível criar o login.");

    statusEl.innerHTML = `<span style="color:#1f7a4d;">Login criado: ${escapeHTML(dados.email)}</span>`;
    document.getElementById("adminNovoNome").value = "";
    document.getElementById("adminNovoEmail").value = "";
    document.getElementById("adminNovoSenha").value = "";
    _carregarListaUsuariosAdmin(dados.empresaId || __meuUsuarioAdmin.empresaId);
  } catch (err){
    console.error(err);
    statusEl.innerHTML = `<span style="color:var(--danger);">${escapeHTML(err.message || "Erro ao criar login.")}</span>`;
  } finally {
    btnEl.disabled = false;
  }
}

/* =====================================================================
   NOTAS COM ERRO — PDFs de NF-e que a extração automática não
   conseguiu processar. Reaproveita a mesma conexão/login do resto do
   app (antes era um site separado, com seu próprio Firebase init e
   tela de login duplicados) — agora entra como mais uma view, pronta
   pra participar do controle de acesso por papel assim que ele for
   implementado.
   ===================================================================== */
let __errosEscutando = false;
let __errosUnsub = null;

function escutarNotasComErro(){
  if (!_checaFirebasePronto()) return;
  if (!window.__firebaseApp){
    window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
  }
  const usuario = firebase.auth().currentUser;
  if (!usuario) return;

  const statusEl = document.getElementById("errosStatus");
  statusEl.innerHTML = '<div class="empty-state">Carregando...</div>';

  const db = firebase.firestore();
  __errosUnsub = db.collection("notas_com_erro")
    .where("criadoPorUid", "==", usuario.uid)
    .orderBy("criadoEm", "desc")
    .onSnapshot(
      (snapshot) => {
        statusEl.innerHTML = "";
        const notas = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        _renderizarNotasComErro(notas);
      },
      (err) => {
        console.error("Erro ao carregar notas com erro:", err);
        statusEl.innerHTML = '<div class="msg msg-error" style="display:block;">Não foi possível carregar as notas com erro. Verifique as regras de acesso do Firestore.</div>';
      }
    );
  __errosEscutando = true;
}

function _renderizarNotasComErro(notas){
  const listEl  = document.getElementById("errosCardList");
  const emptyEl = document.getElementById("errosEmptyState");
  const countEl = document.getElementById("errosCount");

  countEl.textContent = notas.length;

  if (!notas.length){
    listEl.innerHTML = "";
    emptyEl.style.display = "block";
    return;
  }
  emptyEl.style.display = "none";

  listEl.innerHTML = notas.map((nota) => `
    <div class="erro-card">
      <div class="erro-card-top">
        <div class="erro-card-filename">${escapeHTML(nota.fileName || "(sem nome)")}</div>
        <div class="erro-card-date">${_painelFormatarData(nota.criadoEm)}</div>
      </div>
      ${nota.errorMsg ? `<div class="erro-card-msg">${escapeHTML(nota.errorMsg)}</div>` : ""}
      <div class="erro-card-actions">
        ${nota.pdfUrl ? `<a class="btn-secondary" style="padding:8px 14px; font-size:0.84rem;" href="${escapeHTML(nota.pdfUrl)}" target="_blank" rel="noopener">Abrir PDF</a>` : ""}
        <button class="btn-danger" style="padding:8px 14px; font-size:0.84rem;" onclick="removerNotaComErro('${escapeHTML(nota.id)}', this)">Marcar como corrigida</button>
      </div>
    </div>
  `).join("");
}

async function removerNotaComErro(id, btnEl){
  const confirmado = confirm("Marcar esta nota como corrigida? Ela será removida desta lista.");
  if (!confirmado) return;

  if (btnEl) btnEl.disabled = true;
  try{
    await firebase.firestore().collection("notas_com_erro").doc(id).delete();
    showToast("Nota removida da lista.");
  } catch (err){
    console.error(err);
    showError("Não foi possível remover esta nota. Tente novamente.");
    if (btnEl) btnEl.disabled = false;
  }
}

function abrirDetalhesContagem(docId){
  const d = __painelDocsPorId[docId];
  if (!d){ showError("Não foi possível localizar esse envio."); return; }
  if (d.status !== "finalizada" || !d.resultado){
    showError("Essa contagem ainda não foi finalizada no RecebeMais.");
    return;
  }
  const r = d.resultado;
  const rows = r.rows || [];
  const totalQtd = rows.reduce((s, row) => s + (Number(row.qty) || 0), 0);

  document.getElementById("detalhesTitulo").textContent = d.forn || "Contagem";
  // "Finalizada por" prioriza o nome do PERFIL DO APARELHO (cadastrado
  // em Configurações no RecebeMais) — identifica o conferente
  // específico, diferente do e-mail da conta, que é o mesmo em todos os
  // aparelhos da empresa. Cai no e-mail se o aparelho não tiver perfil
  // configurado.
  const finalizadoPorExibicao = d.finalizadoPorPerfil || d.finalizadoPorEmail || "—";
  document.getElementById("detalhesSub").innerHTML =
    `${d.nf ? "NF " + escapeHTML(d.nf) + " · " : ""}Início: ${escapeHTML(r.start || "—")} · Fim: ${escapeHTML(r.end || "—")}` +
    `<br>Finalizada por: ${escapeHTML(finalizadoPorExibicao)} em ${_painelFormatarData(d.finalizadoEm)}`;

  const statsHTML = `<div class="detalhes-stats">
    <div class="stat-box"><div class="n">${r.scans || 0}</div><div class="l">Scans</div></div>
    <div class="stat-box"><div class="n">${totalQtd.toLocaleString("pt-BR")}</div><div class="l">Peças</div></div>
    <div class="stat-box"><div class="n">${rows.length}</div><div class="l">Referências</div></div>
    <div class="stat-box"><div class="n">${r.totalVolumes || 0}</div><div class="l">Volumes</div></div>
  </div>`;

  const reconHTML = _detalhesReconBadgeHTML(r.reconResumo);

  const itensHTML = rows.length
    ? `<div class="detalhes-itens">${rows.map(_detalhesLinhaHTML).join("")}</div>`
    : '<div class="empty-state">Nenhum item registrado nessa contagem.</div>';

  const etiquetasHTML = _detalhesEtiquetasHTML(rows);

  document.getElementById("detalhesConteudo").innerHTML = statsHTML + reconHTML + etiquetasHTML + itensHTML +
    '<div id="detalhesAuditoria" style="margin-top:16px;"><div class="empty-state" style="padding:14px 0;">Carregando linha do tempo...</div></div>';
  document.getElementById("detalhesModalOverlay").classList.add("visible");

  // Auditoria (Etapa 2): busca os eventos ligados a essa NF (correlacionados
  // pelo pendenteDocId, o mesmo id compartilhado entre este site e o
  // RecebeMais) e preenche progressivamente, sem travar a abertura do
  // modal. Guarda de docId evita que uma resposta atrasada de uma
  // contagem já fechada apareça por engano numa contagem aberta depois.
  __detalhesAtualDocId = docId;
  _renderizarAuditoriaContagem(docId, d.pendenteDocId || docId);
}

let __detalhesAtualDocId = null;

async function _carregarEventosPorNf(nfId){
  try{
    if (!nfId) return [];
    if (!_checaFirebasePronto()) return [];
    if (!window.__firebaseApp){
      window.__firebaseApp = firebase.initializeApp(RECEBEMAIS_CONFIG.firebaseConfig);
    }
    const db = firebase.firestore();
    const snap = await db.collection("eventos")
      .where("criadoPorUid", "==", firebase.auth().currentUser.uid)
      .where("nfId", "==", nfId)
      .get();
    return snap.docs
      .map((doc) => doc.data())
      .sort((a, b) => {
        const ta = a.timestamp && typeof a.timestamp.toDate === "function" ? a.timestamp.toDate().getTime() : 0;
        const tb = b.timestamp && typeof b.timestamp.toDate === "function" ? b.timestamp.toDate().getTime() : 0;
        return ta - tb;
      });
  } catch (err){
    console.error("Falha ao carregar auditoria:", err);
    return [];
  }
}

async function _renderizarAuditoriaContagem(docId, nfId){
  const eventos = await _carregarEventosPorNf(nfId);
  if (__detalhesAtualDocId !== docId) return; // usuário já trocou/fechou o modal
  const containerEl = document.getElementById("detalhesAuditoria");
  if (!containerEl) return;
  if (!eventos.length){
    containerEl.innerHTML = "";
    return;
  }
  const rotulos = {
    NF_ENVIADA_RECEBEMAIS: "NF enviada ao RecebeMais",
    CONFERENCIA_INICIADA: "Contagem iniciada",
    CONFERENCIA_PAUSADA: "Contagem pausada",
    CONFERENCIA_RETOMADA: "Contagem retomada",
    CONFERENCIA_FINALIZADA: "Contagem finalizada",
    OPERACAO_CANCELADA: "Contagem descartada",
    CONTAGEM_ITENS_EDITADOS: "Itens enviados editados (admin)",
  };
  containerEl.innerHTML = `
    <div style="font-weight:700; font-size:0.78rem; color:var(--primary-dark); text-transform:uppercase; letter-spacing:.3px; margin-bottom:8px;">
      Linha do tempo
    </div>
    <div class="detalhes-itens">
      ${eventos.map((ev) => {
        const rotulo = rotulos[ev.tipoEvento] || ev.tipoEvento;
        return `<div class="detalhes-item" style="align-items:center;">
          <div>
            <div class="di-ref" style="font-size:0.82rem;">${escapeHTML(rotulo)}</div>
            <div class="di-desc">${escapeHTML(ev.usuarioNome || "—")}</div>
          </div>
          <div class="di-qty" style="color:var(--text-mute); font-weight:600; font-size:0.75rem;">${_painelFormatarData(ev.timestamp)}</div>
        </div>`;
      }).join("")}
    </div>`;
}

/* =====================================================================
   CONTAGENS ENVIADAS — edição dos itens e remoção da nuvem
   (somente admin da empresa e super admin; a UI esconde os botões dos
   demais papéis e as regras do Firestore reforçam no servidor).
   Altera só o que foi ENVIADO (referência, descrição, quantidade,
   unidade) em "historico_envios" e, se ainda existir, em "pendentes".
   Não mexe no histórico local/compartilhado de contagens do app
   (historico_app_contagens), que é o registro do que foi contado.
   ===================================================================== */
function _souAdminOuSuperAdmin(){
  return !!__meuUsuarioLogado && (__meuUsuarioLogado.superAdmin === true || __meuUsuarioLogado.papel === "admin");
}

function _linhaEditorItemHTML(it){
  const v = (x) => escapeHTML(x == null ? "" : String(x));
  return `<div class="manual-nf-produto-row">
    <input type="text" class="mnf-referencia" placeholder="Referência" value="${v(it.referencia)}">
    <input type="text" class="mnf-descricao" placeholder="Descrição (opcional)" value="${v(it.descricao)}">
    <input type="text" class="mnf-quantidade" placeholder="Qtd" value="${v(it.quantidade)}">
    <input type="text" class="mnf-unidade" placeholder="UN" value="${v(it.unidade)}">
    <button type="button" class="btn-remove-row" title="Remover linha" onclick="this.parentElement.remove()">${ICONS.close}</button>
  </div>`;
}

function _editorAdicionarLinha(){
  const box = document.getElementById("editorItensLista");
  if (!box) return;
  box.insertAdjacentHTML("beforeend", _linhaEditorItemHTML({}));
}

async function abrirEditorItensEnviados(docId){
  if (!_souAdminOuSuperAdmin()){ showError("Apenas administradores podem editar contagens enviadas."); return; }
  const d = __painelDocsPorId[docId];
  if (!d){ showError("Não foi possível localizar esse envio."); return; }

  const produtos = Array.isArray(d.produtos) ? d.produtos : [];
  document.getElementById("detalhesTitulo").textContent = "Itens enviados — " + (d.forn || "Contagem");
  document.getElementById("detalhesSub").innerHTML =
    `${d.nf ? "NF " + escapeHTML(d.nf) + " · " : ""}Enviada em ${_painelFormatarData(d.criadoEm)}`;

  let aviso = "";
  if (d.status === "finalizada"){
    aviso = "Esta contagem já foi finalizada. A alteração muda apenas a lista de itens ENVIADOS; o resultado da conferência já registrado não é alterado.";
  } else if (d.status === "descartada"){
    aviso = "Esta contagem foi descartada. A alteração muda apenas o registro do que foi enviado.";
  }
  document.getElementById("detalhesConteudo").innerHTML =
    (aviso ? `<div class="msg msg-error" style="margin-bottom:10px; font-size:0.82rem;">${escapeHTML(aviso)}</div>` : "") +
    `<div class="manual-nf-produtos-header"><span>Referência</span><span>Descrição</span><span>Qtd</span><span>UN</span><span></span></div>
     <div id="editorItensLista" class="detalhes-itens">${produtos.map(_linhaEditorItemHTML).join("")}</div>
     <div style="display:flex; gap:8px; margin-top:12px; flex-wrap:wrap;">
       <button type="button" class="btn-ghost" onclick="_editorAdicionarLinha()">+ Adicionar item</button>
       <span style="flex:1;"></span>
       <button type="button" class="btn-ghost" onclick="fecharDetalhesContagem()">Cancelar</button>
       <button type="button" class="btn-primary" id="btnSalvarItensEnviados" onclick="salvarItensEnviados('${docId}')">Salvar alterações</button>
     </div>
     <div id="editorItensStatus" style="margin-top:8px; font-size:0.82rem;"></div>`;
  __detalhesAtualDocId = null;
  document.getElementById("detalhesModalOverlay").classList.add("visible");
}

function _parseQtdEditor(txt){
  const t = String(txt || "").trim().replace(/\./g, "").replace(",", ".");
  const n = Number(t);
  return isFinite(n) ? n : NaN;
}

async function salvarItensEnviados(docId){
  if (!_souAdminOuSuperAdmin()) return;
  const d = __painelDocsPorId[docId];
  const usuario = firebase.auth().currentUser;
  if (!d || !usuario) return;
  const statusEl = document.getElementById("editorItensStatus");
  const btn = document.getElementById("btnSalvarItensEnviados");

  const linhas = Array.from(document.querySelectorAll("#editorItensLista .manual-nf-produto-row"));
  const produtos = [];
  for (const row of linhas){
    const referencia = row.querySelector(".mnf-referencia").value.trim();
    const descricao = row.querySelector(".mnf-descricao").value.trim();
    const qtdTxt = row.querySelector(".mnf-quantidade").value;
    const unidade = (row.querySelector(".mnf-unidade").value.trim() || "UN").toUpperCase();
    if (!referencia && !descricao && !qtdTxt.trim()) continue; // linha vazia
    if (!referencia){ statusEl.textContent = "Preencha a referência de todos os itens."; return; }
    const quantidade = _parseQtdEditor(qtdTxt);
    if (isNaN(quantidade) || quantidade < 0){ statusEl.textContent = `Quantidade inválida na referência ${referencia}.`; return; }
    produtos.push({ referencia, descricao, quantidade, unidade });
  }
  if (!produtos.length){ statusEl.textContent = "A contagem precisa ter ao menos um item. Para apagar tudo, use \"Remover da nuvem\"."; return; }

  const totalQuantidade = produtos.reduce((a, p) => a + p.quantidade, 0);
  const patch = {
    produtos,
    totalReferencias: produtos.length,
    totalQuantidade,
    editadoEm: firebase.firestore.FieldValue.serverTimestamp(),
    editadoPorUid: usuario.uid,
    editadoPorEmail: usuario.email || null,
  };

  try{
    if (btn) btn.disabled = true;
    statusEl.textContent = "Salvando...";
    const db = firebase.firestore();
    await db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).doc(docId).update(patch);

    // Fila de contagem (se ainda não foi finalizada/descartada).
    let atualizouFila = false;
    if (d.pendenteDocId && d.status !== "finalizada" && d.status !== "descartada"){
      try{
        const ref = db.collection(RECEBEMAIS_CONFIG.colecaoPendentes).doc(d.pendenteDocId);
        const snap = await ref.get();
        if (snap.exists){
          await ref.update({ produtos, totalReferencias: produtos.length, totalQuantidade });
          atualizouFila = true;
        }
      } catch (e){ console.error("Falha ao atualizar a fila (pendentes):", e); }
    }

    [__painelDocsPorId[docId], __painelDocsRaw.find((x) => x.id === docId)].forEach((ref) => {
      if (!ref) return;
      ref.produtos = produtos; ref.totalReferencias = produtos.length; ref.totalQuantidade = totalQuantidade;
    });
    registrarEvento("CONTAGEM_ITENS_EDITADOS", { nfId: d.pendenteDocId || docId, forn: d.forn || null, nf: d.nf || null, totalReferencias: produtos.length });
    fecharDetalhesContagem();
    _renderizarHistoricoLista();
    showSuccess(atualizouFila ? "Itens atualizados (histórico e fila de contagem)." : "Itens atualizados no histórico.");
  } catch (err){
    console.error(err);
    statusEl.textContent = "Não foi possível salvar: " + (err && err.message ? err.message : err);
    if (btn) btn.disabled = false;
  }
}

async function removerContagemDaNuvem(docId){
  if (!_souAdminOuSuperAdmin()){ showError("Apenas administradores podem remover contagens."); return; }
  const d = __painelDocsPorId[docId];
  if (!d) return;
  const db = firebase.firestore();

  let aviso = "";
  let pendSnap = null;
  if (d.pendenteDocId){
    try{
      pendSnap = await db.collection(RECEBEMAIS_CONFIG.colecaoPendentes).doc(d.pendenteDocId).get();
      if (pendSnap.exists && pendSnap.data().emConferenciaPor){
        aviso = `\n\nATENÇÃO: esta NF está sendo contada agora por ${pendSnap.data().emConferenciaPor}. Quem está contando poderá perder o vínculo com a nuvem.`;
      }
    } catch (e){ console.error(e); }
  }
  const ok = confirm(
    `Remover da nuvem a contagem de ${d.forn || "—"} (NF ${d.nf || "—"})?\n\n` +
    "Ela sairá da fila do RecebeMais e da lista de Contagens. Isso não apaga o histórico guardado nos aparelhos. Ação irreversível." + aviso
  );
  if (!ok) return;

  try{
    setProcessing(true, "Removendo contagem da nuvem...", "");
    if (pendSnap && pendSnap.exists) await pendSnap.ref.delete();
    await db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).doc(docId).delete();
    registrarEvento("CONTAGEM_REMOVIDA_NUVEM", { nfId: d.pendenteDocId || docId, forn: d.forn || null, nf: d.nf || null, statusAntes: d.status || null });
    setProcessing(false);
    delete __painelDocsPorId[docId];
    __painelDocsRaw = __painelDocsRaw.filter((x) => x.id !== docId);
    __painelCarregado = false;
    _renderizarHistoricoLista();
    showSuccess("Contagem removida da nuvem.");
  } catch (err){
    setProcessing(false);
    console.error(err);
    showError("Não foi possível remover: " + (err && err.message ? err.message : err));
  }
}

function fecharDetalhesContagem(){
  document.getElementById("detalhesModalOverlay").classList.remove("visible");
  __detalhesAtualDocId = null;
}

/* =====================================================================
   PLANILHA (ROMANEIO) — leitor da planilha de recebimento específica
   da empresa (formato próprio, diferente da NF-e em PDF do Extrator).
   Extrai fornecedor/referências/quantidade e envia pra MESMA fila de
   contagem em nuvem ("pendentes") que o Extrator Sefaz usa — o
   RecebeMais não faz distinção entre os dois, mostra tudo junto.
   Só aparece pra super admin (ver _temAcessoView/aplicarControleAcessoPorPapel).

   IMPORTANTE: estas const's precisam ficar ANTES de init() ser chamado
   (mais abaixo) — init() chama setupPlanilhaUploadArea() de forma
   síncrona, e essa função usa planilhaUploadArea logo na primeira
   linha. Como é `const`, declarar essas variáveis depois da chamada de
   init() quebra com "Cannot access before initialization" e trava o
   script inteiro (foi exatamente isso que causou a tela branca em
   15/09/2026 — nunca mover este bloco pra depois de init()/initAuth()
   de novo).
   ===================================================================== */
const planilhaUploadArea    = document.getElementById("planilhaUploadArea");
const planilhaFileInput     = document.getElementById("planilhaFileInput");
const planilhaFileInfoBar   = document.getElementById("planilhaFileInfoBar");
const planilhaFileInfoName  = document.getElementById("planilhaFileInfoName");
const planilhaResultadoPanel = document.getElementById("planilhaResultadoPanel");
const planilhaMetaEl        = document.getElementById("planilhaMeta");
const planilhaTableBody     = document.getElementById("planilhaTableBody");
const planilhaStatTotalEl   = document.getElementById("planilhaStatTotal");
const planilhaBtnCloud      = document.getElementById("planilhaBtnCloud");
const planilhaBtnExport     = document.getElementById("planilhaBtnExport");

// tudo que foi extraído da última planilha lida — usado tanto pra
// montar a exportação quanto pro envio à nuvem.
let __planilhaLastExport = null;

function init(){
  setupUploadArea();
  setupSearch();
  setupSort();
  setupChaveAcesso();
  setupManualAdd();
  document.getElementById("btnExportExcel").addEventListener("click", exportExcel);
  document.getElementById("btnEnviarRecebeMais").addEventListener("click", enviarParaRecebeMais);
  document.getElementById("btnGuardarErros").addEventListener("click", guardarNotasComErro);
  document.getElementById("btnNovaNota").addEventListener("click", resetApp);
  document.getElementById("btnPainelAtualizar").addEventListener("click", () => carregarPainelHistorico());
  _iniciarAtualizacaoAutomaticaPainel();
  document.getElementById("btnSidebarToggle").addEventListener("click", () => toggleSidebar());
  setupPlanilhaUploadArea();
}
init();
initAuth();

function setupPlanilhaUploadArea(){
  if (!planilhaUploadArea) return; // view ainda não existe no HTML (proteção)
  planilhaUploadArea.addEventListener("click", () => planilhaFileInput.click());
  planilhaUploadArea.addEventListener("dragover", (e) => { e.preventDefault(); planilhaUploadArea.classList.add("dragover"); });
  planilhaUploadArea.addEventListener("dragleave", () => planilhaUploadArea.classList.remove("dragover"));
  planilhaUploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    planilhaUploadArea.classList.remove("dragover");
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) planilhaHandleFile(file);
  });
  planilhaFileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) planilhaHandleFile(file);
  });
}

function planilhaResetar(){
  __planilhaLastExport = null;
  planilhaFileInput.value = "";
  planilhaFileInfoBar.style.display = "none";
  planilhaResultadoPanel.style.display = "none";
  document.getElementById("planilhaStatus").innerHTML = "";
}

function planilhaHandleFile(file){
  planilhaFileInfoBar.style.display = "flex";
  planilhaFileInfoName.textContent = file.name;
  planilhaResultadoPanel.style.display = "none";
  document.getElementById("planilhaStatus").innerHTML = '<div class="empty-state">Lendo planilha e extraindo quantidades...</div>';
  __planilhaLastExport = { sourceFileName: file.name };

  const reader = new FileReader();
  reader.onload = (evt) => {
    try{
      const data = new Uint8Array(evt.target.result);
      const wb = XLSX.read(data, { type: "array", cellFormula: true, bookFiles: true });
      planilhaProcessWorkbook(wb);
    } catch (err){
      console.error(err);
      showError("Não consegui abrir esse arquivo. Detalhe: " + (err.message || err));
      document.getElementById("planilhaStatus").innerHTML = "";
    }
  };
  reader.onerror = () => {
    showError("Não consegui ler o arquivo do disco. Tente novamente.");
    document.getElementById("planilhaStatus").innerHTML = "";
  };
  reader.readAsArrayBuffer(file);
}

// Acha a linha de cabeçalho procurando uma célula com "Qtd" + "Fís"
// (formato do romaneio desta empresa — "Qtd. Físico").
function planilhaFindHeaderRow(ws, range){
  for (let r = range.s.r; r <= Math.min(range.e.r, range.s.r + 40); r++){
    for (let c = range.s.c; c <= range.e.c; c++){
      const cell = ws[XLSX.utils.encode_cell({ r, c })];
      if (cell && typeof cell.v === "string"){
        const norm = cell.v.toLowerCase();
        if (norm.includes("qtd") && (norm.includes("fís") || norm.includes("fis"))){
          return { row: r, col: c };
        }
      }
    }
  }
  return null;
}

function planilhaCellStr(ws, r, c){
  const cell = ws[XLSX.utils.encode_cell({ r, c })];
  return cell && cell.v !== undefined ? String(cell.v).trim() : "";
}

function planilhaCellNum(ws, r, c){
  const cell = ws[XLSX.utils.encode_cell({ r, c })];
  if (!cell) return null;
  if (cell.v !== undefined && cell.v !== null && cell.v !== ""){
    if (typeof cell.v === "number") return cell.v;
    const parsed = planilhaParseLocaleNumber(cell.v);
    if (parsed !== null) return parsed;
  }
  // Fórmula sem valor cacheado (comum quando o arquivo foi gerado por
  // script e nunca recalculado no Excel/LibreOffice) — avalia só se for
  // aritmética pura, sem referência a outras células, por segurança.
  if (cell.f){
    const expr = cell.f.trim();
    if (/^[0-9+\-*/(). ]+$/.test(expr) && expr.length){
      try{
        const val = Function('"use strict"; return (' + expr + ");")();
        if (typeof val === "number" && !isNaN(val)) return val;
      } catch (e){ /* segue sem valor */ }
    }
  }
  return null;
}

// Aceita "1140", "1.140" (milhar pt-BR), "1.140,5" (decimal pt-BR) ou
// "1140.5" comum — devolve número ou null se não for numérico.
function planilhaParseLocaleNumber(raw){
  const s = String(raw).trim();
  if (s === "") return null;
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  if (/^-?\d{1,3}(\.\d{3})*(,\d+)?$/.test(s)){
    return Number(s.replace(/\./g, "").replace(",", "."));
  }
  const n = Number(s.replace(/\s/g, ""));
  return isNaN(n) ? null : n;
}

function planilhaFindLabelValue(ws, range, label){
  for (let r = range.s.r; r <= range.e.r; r++){
    for (let c = range.s.c; c <= range.e.c; c++){
      const cell = ws[XLSX.utils.encode_cell({ r, c })];
      if (cell && typeof cell.v === "string" && cell.v.trim().toLowerCase() === label.toLowerCase()){
        for (let cc = c + 1; cc <= Math.min(c + 6, range.e.c); cc++){
          const v = ws[XLSX.utils.encode_cell({ r, c: cc })];
          if (v && v.v !== undefined && v.v !== ""){
            if (typeof v.v === "number" && v.w && /^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(v.w) && XLSX.SSF && XLSX.SSF.parse_date_code){
              const d = XLSX.SSF.parse_date_code(v.v);
              if (d) return String(d.d).padStart(2, "0") + "/" + String(d.m).padStart(2, "0") + "/" + d.y;
            }
            return v.w || (v.v instanceof Date ? v.v.toLocaleDateString("pt-BR") : String(v.v));
          }
        }
      }
    }
  }
  return null;
}

// Alguns romaneios (ex.: SPI) não trazem a quantidade escrita na
// célula: ela vem de uma fórmula que consulta OUTRA planilha (vínculo
// externo, ex.: '[1]SPI - 15956'!B10). O Excel guarda uma cópia dos
// valores dessa planilha dentro do próprio arquivo (xl/externalLinks) —
// lemos essa cópia pra recuperar a quantidade esperada de cada item.
function planilhaLerCacheLinksExternos(wb){
  const out = {}; // { "1": { "Nome da aba": { B10: 120, ... } } }
  try{
    const files = wb && wb.files ? wb.files : null;
    if (!files) return out;
    Object.keys(files).forEach((path) => {
      const m = path.match(/xl\/externalLinks\/externalLink(\d+)\.xml$/);
      if (!m) return;
      let c = files[path] && files[path].content;
      if (!c) return;
      const xml = typeof c === "string" ? c : new TextDecoder("utf-8").decode(c);
      const nomes = [];
      (xml.match(/<sheetName val="[^"]*"/g) || []).forEach((t) => nomes.push(t.slice(16, -1).replace(/&amp;/g, "&").replace(/&apos;/g, "'")));
      const abas = {};
      const reSheet = /<sheetData sheetId="(\d+)"(?:\/>|>([\s\S]*?)<\/sheetData>)/g;
      let sm;
      while ((sm = reSheet.exec(xml))){
        const nome = nomes[Number(sm[1])];
        if (nome === undefined || !sm[2]) continue;
        const cells = {};
        const reCell = /<cell r="([A-Z]+\d+)"[^>]*><v>([^<]*)<\/v>/g;
        let cm;
        while ((cm = reCell.exec(sm[2]))){
          const n = Number(cm[2]);
          if (cm[2] !== "" && !isNaN(n)) cells[cm[1]] = n;
        }
        abas[nome.trim()] = cells;
      }
      out[m[1]] = abas;
    });
  } catch (e){ console.warn("Falha ao ler vínculos externos da planilha:", e); }
  return out;
}

// Procura, nas fórmulas da linha, uma referência a planilha externa
// ('[1]Aba'!B10) e devolve o valor em cache dela.
function planilhaQtdDoVinculoExterno(ws, r, range, cacheExt){
  const re = /\[(\d+)\]([^!]+)!\$?([A-Z]+)\$?(\d+)/g;
  for (let c = range.s.c; c <= range.e.c; c++){
    const cell = ws[XLSX.utils.encode_cell({ r, c })];
    if (!cell || !cell.f || cell.f.indexOf("[") < 0) continue;
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(cell.f))){
      const aba = m[2].replace(/^'/, "").replace(/'$/, "").trim();
      const v = cacheExt[m[1]] && cacheExt[m[1]][aba] && cacheExt[m[1]][aba][m[3] + m[4]];
      if (typeof v === "number") return v;
    }
  }
  return null;
}

function planilhaProcessWorkbook(wb){
  let targetSheet = null, header = null;
  for (const name of wb.SheetNames){
    const ws = wb.Sheets[name];
    if (!ws["!ref"]) continue;
    const range = XLSX.utils.decode_range(ws["!ref"]);
    const h = planilhaFindHeaderRow(ws, range);
    if (h){ targetSheet = { ws, range, name }; header = h; break; }
  }

  if (!targetSheet){
    showError('Não encontrei uma coluna de "Qtd. Físico" nessa planilha. Confirme se é um romaneio de conferência de recebimento no mesmo formato.');
    document.getElementById("planilhaStatus").innerHTML = "";
    return;
  }

  const { ws, range } = targetSheet;
  const headerRow = header.row;

  const colOf = {};
  const unidCandidates = [];
  const blacklistUnidade = ["negóc","organiz","centro","filial","empresa","setor",
    "área","area","requisit","solicit","respons","local","depósito","deposito",
    "almox","estoque","custo","projeto","negocio"];

  for (let c = range.s.c; c <= range.e.c; c++){
    const v = planilhaCellStr(ws, headerRow, c).toLowerCase();
    if (!v) continue;
    if (v.includes("código") && colOf.codigo === undefined) colOf.codigo = c;
    else if (v.includes("descri") && colOf.descricao === undefined) colOf.descricao = c;
    else if (v.includes("qtd") && (v.includes("fís") || v.includes("fis")) && colOf.fisico === undefined) colOf.fisico = c;
    else if (v.includes("confer") && colOf.status === undefined) colOf.status = c;

    const pareceUnidadeMedida = /^(un|und|um|un\.|und\.|um\.)$/.test(v) || v.includes("unid");
    if (pareceUnidadeMedida && !blacklistUnidade.some((b) => v.includes(b))){
      unidCandidates.push(c);
    }
  }
  if (colOf.codigo === undefined) colOf.codigo = header.col - 10 >= range.s.c ? header.col - 10 : range.s.c;
  if (colOf.fisico === undefined) colOf.fisico = header.col;

  // A coluna da quantidade nem sempre é a seguinte ao cabeçalho (células
  // mescladas deslocam o valor, ex.: cabeçalho em M, números em O).
  // Escolhe, entre as 5 colunas à direita do cabeçalho (a do cabeçalho é a contagem física), a que tem mais números.
  let colNecessario = colOf.fisico + 1;
  {
    let melhor = -1;
    for (let c = colOf.fisico + 1; c <= Math.min(colOf.fisico + 5, range.e.c); c++){
      let n = 0;
      for (let r = headerRow + 1; r <= range.e.r && r <= headerRow + 400; r++){
        if (planilhaCellStr(ws, r, colOf.codigo) && planilhaCellNum(ws, r, c) !== null) n++;
      }
      if (n > melhor || (n === melhor && n > 0 && c === colOf.fisico + 1)){ melhor = n; colNecessario = c; }
    }
  }

  if (unidCandidates.length){
    const ref = colOf.codigo;
    unidCandidates.sort((a, b) => Math.abs(a - ref) - Math.abs(b - ref));
    colOf.unidade = unidCandidates[0];
  }

  const cacheExt = planilhaLerCacheLinksExternos(wb);
  let qtdDeVinculo = 0;
  const items = [];
  let blankStreak = 0;
  for (let r = headerRow + 1; r <= range.e.r; r++){
    const codigo = planilhaCellStr(ws, r, colOf.codigo);
    const fisico = planilhaCellNum(ws, r, colOf.fisico);
    if (!codigo && fisico === null){
      blankStreak++;
      if (blankStreak > 3) break;
      continue;
    }
    blankStreak = 0;
    if (!codigo) continue;

    const descricao = colOf.descricao !== undefined ? planilhaCellStr(ws, r, colOf.descricao) : "";
    let necessario = planilhaCellNum(ws, r, colNecessario);
    if (necessario === null){
      necessario = planilhaQtdDoVinculoExterno(ws, r, range, cacheExt);
      if (necessario !== null) qtdDeVinculo++;
    }
    const unidade = colOf.unidade !== undefined ? planilhaCellStr(ws, r, colOf.unidade) : "";
    items.push({ codigo, descricao, necessario, unidade });
  }

  if (!items.length){
    showError("Encontrei a tabela, mas nenhum item com quantidade preenchida. Verifique se o arquivo não está vazio.");
    document.getElementById("planilhaStatus").innerHTML = "";
    return;
  }

  document.getElementById("planilhaStatus").innerHTML = "";
  planilhaRenderMeta(ws, range);
  planilhaRenderResults(items);
  const semQtd = items.filter((i) => i.necessario === null).length;
  if (qtdDeVinculo) showToast(`${qtdDeVinculo} quantidade${qtdDeVinculo !== 1 ? "s" : ""} recuperada${qtdDeVinculo !== 1 ? "s" : ""} do vínculo externo da planilha.`);
  if (semQtd) showError(`${semQtd} item${semQtd !== 1 ? "ns" : ""} sem quantidade na planilha — preencha na tabela antes de enviar.`);
}

function planilhaRenderMeta(ws, range){
  const nf = planilhaFindLabelValue(ws, range, "NF") || planilhaFindLabelValue(ws, range, "Nota Fiscal");
  const data = planilhaFindLabelValue(ws, range, "Data");
  const fornecedor = planilhaFindLabelValue(ws, range, "Fornecedor");
  const emissor = planilhaFindLabelValue(ws, range, "Emissor");
  const cnpj = planilhaFindLabelValue(ws, range, "CNPJ") || planilhaFindLabelValue(ws, range, "CNPJ Fornecedor");

  const fields = [
    ["Nota fiscal", nf], ["Data", data], ["Fornecedor", fornecedor], ["CNPJ", cnpj], ["Emissor", emissor],
  ].filter(([, v]) => v);

  planilhaMetaEl.innerHTML = fields.map(([k, v]) => `
    <div style="min-width:0;"><div style="font-size:0.72rem; color:var(--text-mute); margin-bottom:2px;">${escapeHTML(k)}</div><div style="font-weight:600; color:var(--text); overflow-wrap:anywhere; word-break:break-word;">${escapeHTML(String(v))}</div></div>
  `).join("");

  if (__planilhaLastExport){
    __planilhaLastExport.nf = nf || "";
    __planilhaLastExport.fornecedor = fornecedor || "";
    __planilhaLastExport.data = data || "";
    __planilhaLastExport.cnpj = cnpj || "";
    __planilhaLastExport.emissor = emissor || "";
  }
}

function planilhaRenderResults(items){
  planilhaStatTotalEl.textContent = items.length;

  planilhaTableBody.innerHTML = items.map((item, idx) => `
    <tr>
      <td><input type="text" value="${escapeHTML(item.codigo)}" oninput="planilhaEditItemField(${idx},'codigo',this.value)" title="Editar código/referência" style="width:100%; border:1px solid var(--border); border-radius:6px; padding:5px 7px; font-size:0.82rem;"></td>
      <td><input type="text" value="${escapeHTML(item.descricao || "")}" oninput="planilhaEditItemField(${idx},'descricao',this.value)" title="Editar descrição" style="width:100%; border:1px solid var(--border); border-radius:6px; padding:5px 7px; font-size:0.82rem;"></td>
      <td><input type="text" value="${escapeHTML(item.unidade || "")}" oninput="planilhaEditItemField(${idx},'unidade',this.value)" title="Editar unidade de medida" style="width:70px; border:1px solid var(--border); border-radius:6px; padding:5px 7px; font-size:0.82rem;"></td>
      <td><input type="number" step="any" value="${item.necessario ?? ""}" oninput="planilhaEditItemField(${idx},'necessario',this.value)" title="Editar quantidade necessária" style="width:90px; border:1px solid var(--border); border-radius:6px; padding:5px 7px; font-size:0.82rem;"></td>
      <td><button type="button" class="btn-ghost" style="padding:4px 8px; font-size:0.75rem; color:var(--danger);" title="Excluir esta linha da contagem" onclick="planilhaDeleteItemRow(${idx})">Excluir</button></td>
    </tr>
  `).join("");

  if (__planilhaLastExport) __planilhaLastExport.items = items;
  const temItens = items.length > 0;
  planilhaBtnExport.disabled = !temItens;
  planilhaBtnCloud.disabled = !temItens || !(typeof firebase !== "undefined" && firebase.apps && firebase.apps.length && firebase.auth().currentUser);

  planilhaResultadoPanel.style.display = "block";
}

// Atualiza um campo direto no modelo, sem re-renderizar a tabela
// inteira (evita perder o foco/cursor a cada tecla digitada).
function planilhaEditItemField(idx, field, value){
  if (!__planilhaLastExport || !__planilhaLastExport.items || !__planilhaLastExport.items[idx]) return;
  if (field === "necessario"){
    const n = value === "" ? null : Number(value);
    __planilhaLastExport.items[idx].necessario = (n === null || isNaN(n)) ? null : n;
  } else {
    __planilhaLastExport.items[idx][field] = value;
  }
}

function planilhaDeleteItemRow(idx){
  if (!__planilhaLastExport || !__planilhaLastExport.items) return;
  const removido = __planilhaLastExport.items[idx];
  __planilhaLastExport.items.splice(idx, 1);
  planilhaRenderResults(__planilhaLastExport.items);
  if (removido) showToast(`Linha removida: ${removido.codigo || "item"}`);
}

function planilhaExportarModelo(){
  if (!__planilhaLastExport || !__planilhaLastExport.items || !__planilhaLastExport.items.length){
    showToast("Nada para exportar ainda — leia uma planilha primeiro.");
    return;
  }
  const { items, nf, fornecedor, data, sourceFileName } = __planilhaLastExport;

  const produtosRows = [["Referência", "Descrição", "Quantidade", "Unidade", "Notas"]];
  items.forEach((item) => {
    produtosRows.push([
      item.codigo || "", item.descricao || "",
      item.necessario !== null && item.necessario !== undefined ? item.necessario : "",
      item.unidade || "PC", nf || "",
    ]);
  });
  const wsProdutos = XLSX.utils.aoa_to_sheet(produtosRows);
  wsProdutos["!cols"] = [{ wch: 16 }, { wch: 44 }, { wch: 12 }, { wch: 9 }, { wch: 18 }];

  const referenciasUnicas = new Set(items.map((i) => i.codigo)).size;
  const quantidadeTotal = items.reduce((sum, i) => sum + (Number(i.necessario) || 0), 0);
  const wsResumo = XLSX.utils.aoa_to_sheet([
    ["Campo", "Valor"], ["Notas processadas", 1], ["Linhas encontradas", items.length],
    ["Referências únicas", referenciasUnicas], ["Quantidade total", quantidadeTotal],
  ]);
  wsResumo["!cols"] = [{ wch: 22 }, { wch: 14 }];

  const wsNotas = XLSX.utils.aoa_to_sheet([
    ["Arquivo", "Status", "Número da NF", "Razão social", "Data de emissão", "Linhas encontradas"],
    [sourceFileName || "", "OK", nf || "", fornecedor || "", data || "", items.length],
  ]);
  wsNotas["!cols"] = [{ wch: 40 }, { wch: 8 }, { wch: 14 }, { wch: 34 }, { wch: 16 }, { wch: 18 }];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, wsProdutos, "Produtos");
  XLSX.utils.book_append_sheet(wb, wsResumo, "Resumo Geral");
  XLSX.utils.book_append_sheet(wb, wsNotas, "Notas Processadas");

  const safeNf = (nf || "CARGA").toString().split(/[^0-9A-Za-z]+/)[0] || "CARGA";
  XLSX.writeFile(wb, `${safeNf}_CARGA.xlsx`);
  showToast(`Exportado: ${safeNf}_CARGA.xlsx`);
}

// Envia pra MESMA fila ("pendentes") e pro MESMO histórico
// ("historico_envios") que o Extrator Sefaz usa — o RecebeMais e o
// Dashboard não fazem distinção nenhuma entre os dois formatos de
// origem. Grava empresaId (pra aparecer pros colegas da mesma
// empresa, não só pra quem enviou) e registra o evento de auditoria,
// no mesmo padrão de enviarParaRecebeMais() no Extrator.
async function planilhaEnviarParaNuvem(){
  if (!__planilhaLastExport || !__planilhaLastExport.items || !__planilhaLastExport.items.length){
    showToast("Nada para enviar ainda — leia uma planilha primeiro.");
    return;
  }
  if (typeof firebase === "undefined" || !firebase.apps || !firebase.apps.length){
    showError("Firebase não configurado — não é possível enviar para a nuvem.");
    return;
  }
  const usuario = firebase.auth().currentUser;
  if (!usuario){
    showError("Faça login para enviar para a nuvem.");
    return;
  }

  const { items, nf, fornecedor, cnpj, data, emissor, sourceFileName } = __planilhaLastExport;
  const produtos = items.map((item) => ({
    referencia: item.codigo || "",
    descricao: item.descricao || "",
    quantidade: item.necessario !== null && item.necessario !== undefined ? item.necessario : 0,
    unidade: item.unidade || "",
  }));

  const raw = [];
  if (data) raw.push({ campo: "Data de emissão", valor: String(data) });
  if (emissor) raw.push({ campo: "Emissor", valor: String(emissor) });
  if (sourceFileName) raw.push({ campo: "Arquivo de origem", valor: String(sourceFileName) });

  planilhaBtnCloud.disabled = true;
  planilhaBtnCloud.textContent = "Enviando...";
  try{
    const db = firebase.firestore();
    const pendRef = await db.collection(RECEBEMAIS_CONFIG.colecaoPendentes).add({
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
      criadoPorUid: usuario.uid,
      criadoPorEmail: usuario.email || null,
      empresaId: __meuEmpresaId || null,
      forn: fornecedor || "",
      nf: nf || "",
      cnpj: cnpj || "",
      produtos,
      raw,
    });

    registrarEvento("NF_ENVIADA_RECEBEMAIS", {
      nfId: pendRef.id,
      fornecedor: fornecedor || "",
      quantidade: produtos.length,
    });

    try{
      await db.collection(RECEBEMAIS_CONFIG.colecaoHistorico).add({
        criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
        criadoPorUid: usuario.uid,
        criadoPorEmail: usuario.email || null,
        empresaId: __meuEmpresaId || null,
        forn: fornecedor || "",
        nf: nf || "",
        cnpj: cnpj || "",
        totalReferencias: produtos.length,
        totalQuantidade: produtos.reduce((soma, p) => soma + (Number(p.quantidade) || 0), 0),
        produtos,
        pendenteDocId: pendRef.id,
        status: "pendente",
        finalizadoEm: null,
        finalizadoPorEmail: null,
        resultado: null,
      });
    } catch (errHistorico){
      console.error("Falha ao gravar no histórico (o envio ao RecebeMais já aconteceu):", errHistorico);
    }

    showSuccess("Enviado para a nuvem do RecebeMais.");
    planilhaBtnCloud.textContent = "Enviado";
  } catch (err){
    console.error(err);
    showError("Falha ao enviar para a nuvem: " + (err.message || err));
    planilhaBtnCloud.disabled = false;
    planilhaBtnCloud.textContent = "Enviar para nuvem (RecebeMais)";
  }
}

