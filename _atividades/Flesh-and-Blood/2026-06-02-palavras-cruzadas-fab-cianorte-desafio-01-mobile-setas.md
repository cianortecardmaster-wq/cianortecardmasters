---
layout: post
title: "Palavras Cruzadas FAB em Cianorte: desafio interativo estilo Coquetel"
category_label: "Palavras Cruzadas"
activity_type: "Palavras Cruzadas"
game: "Flesh and Blood"
difficulty: "Difícil"
format: "HTML / imprimível"
content_style: "flesh-and-blood"
schema_type: "CreativeWork"
summary: "Desafio interativo de palavras cruzadas de Flesh and Blood em estilo Coquetel para jogadores de Cianorte e região, com pistas sobre cartas, keywords, heróis, lore e siglas do TCG."
description: "Resolva online uma palavra cruzada temática de Flesh and Blood criada pelo Cianorte Card Masters, comunidade de TCG em Cianorte-PR, com pistas sobre Teklovossen, Heart of Ice, Aether Dart, Adaptive Plating, heróis, keywords e lore."
image: "/assets/img/banners/banner-palavras-cruzadas-fab.webp"
image_alt: "Palavras cruzadas interativa de Flesh and Blood em estilo Coquetel para jogadores de TCG em Cianorte."
author: "Knoha"
date: 2026-06-02
last_modified_at: 2026-06-02
tags:
  - Flesh and Blood
  - palavras cruzadas
  - Coquetel
  - TCG em Cianorte
  - Cianorte Card Masters
  - card games
  - Flesh and Blood Cianorte
  - comunidade TCG
---


<style>
.fab-crossword-post{
  --cols: 11;
  --rows: 16;
  --cell: clamp(38px, 7vw, 58px);
  --line: #111;
  --ink: #111;
  --clue-bg: #f4f4f4;
  --block-bg: #111;
  margin: 1.5rem auto;
  color: var(--ink);
}

.fab-crossword-post *{
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.fab-crossword-intro,
.fab-crossword-local,
.fab-crossword-gate,
.fab-crossword-status{
  border-left: 4px solid #111;
  padding: .85rem 1rem;
  margin: 1rem 0 1.25rem;
  background: #f7f7f7;
}

.fab-crossword-intro{
  border: 1px solid #111;
  border-left: 1px solid #111;
  background: #fafafa;
}

.fab-crossword-actions{
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
  margin: 1rem 0 1.25rem;
}

.fab-crossword-actions button{
  border: 2px solid #111;
  background: #fff;
  color: #111;
  padding: .55rem .8rem;
  font-weight: 800;
  cursor: pointer;
  border-radius: 4px;
}

.fab-crossword-actions button:hover:not(:disabled){
  background: #111;
  color: #fff;
}

.fab-crossword-actions button:disabled{
  opacity: .55;
  cursor: not-allowed;
}

.fab-crossword-wrap{
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding: .5rem 0 1.25rem;
}

.fab-crossword-grid{
  display: grid;
  grid-template-columns: repeat(var(--cols), var(--cell));
  grid-template-rows: repeat(var(--rows), var(--cell));
  border-left: 2px solid var(--line);
  border-top: 2px solid var(--line);
  background: #fff;
}

.fab-cell{
  width: var(--cell);
  height: var(--cell);
  border-right: 2px solid var(--line);
  border-bottom: 2px solid var(--line);
  position: relative;
  overflow: hidden;
}

.fab-cell.answer{
  background: #fff;
}

.fab-cell.block{
  background: var(--block-bg) !important;
  background-color: #111 !important;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.fab-cell.clue{
  background: var(--clue-bg);
}

.fab-cell.clue .text{
  position: absolute;
  inset: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 800;
  line-height: .96;
  word-break: normal;
  overflow-wrap: anywhere;
  hyphens: auto;
  z-index: 1;
}

.fab-input{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #111;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(18px, 3vw, 24px);
  letter-spacing: .5px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  padding: 0;
  z-index: 2;
}

.fab-input:focus{
  box-shadow: inset 0 0 0 3px #111;
}

.fab-cell.correta{
  background: #e9ffe9;
}

.fab-cell.errada{
  background: #ffecec;
}

.fab-crossword-post.gabarito-visivel .fab-input{
  display: none;
}

.fab-solution-letter{
  display: none;
  position: absolute;
  inset: 0;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: clamp(18px, 3vw, 24px);
  letter-spacing: .5px;
  z-index: 2;
}

.fab-crossword-post.gabarito-visivel .fab-solution-letter{
  display: flex;
}

.fab-start-arrow{
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  color: #111;
  background: transparent;
  border: 0;
  pointer-events: none;
  line-height: 1;
}

.fab-start-arrow.right{
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 13px;
  font-size: 13px;
}

.fab-start-arrow.down{
  left: 50%;
  top: 1px;
  transform: translateX(-50%);
  width: 13px;
  height: 13px;
  font-size: 13px;
}

.fab-crossword-post.gabarito-visivel .fab-start-arrow{
  opacity: .7;
}

.fab-answer-box{
  display: none;
  border: 2px solid #111;
  padding: 1rem;
  margin: 1.25rem 0;
  background: #fff;
}

.fab-crossword-post.gabarito-visivel .fab-answer-box{
  display: block;
}

.fab-answer-box ol{
  columns: 2;
  column-gap: 2rem;
  padding-left: 1.4rem;
}

.fab-answer-box li{
  break-inside: avoid;
  margin-bottom: .25rem;
}

.fab-answer-box span{
  font-size: .85em;
  color: #555;
}

.fab-crossword-status{
  font-size: .95rem;
}

@page{
  margin: 8mm;
}


.fab-direction-label{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #111;
  background: #fff;
  color: #111;
  padding: .55rem .8rem;
  font-weight: 800;
  border-radius: 4px;
}

.fab-mobile-direction-pad{
  display: none;
}

.fab-dir-choice{
  border: 2px solid #111;
  background: #fff;
  color: #111;
  padding: .6rem .85rem;
  font-weight: 900;
  border-radius: 999px;
  min-width: 96px;
  box-shadow: 0 4px 14px rgba(0,0,0,.18);
}

.fab-dir-choice.active{
  background: #111;
  color: #fff;
}

@media (max-width: 760px){
  .fab-crossword-post{
    --cell: clamp(30px, 8.15vw, 42px);
    margin: 1rem -0.75rem;
  }

  .fab-crossword-intro,
  .fab-crossword-local,
  .fab-crossword-gate,
  .fab-crossword-status{
    padding: .75rem .85rem;
    font-size: .92rem;
  }

  .fab-crossword-actions{
    gap: .45rem;
  }

  .fab-crossword-actions button,
  .fab-direction-label{
    width: 100%;
    justify-content: center;
    font-size: .9rem;
    padding: .6rem .7rem;
  }

  .fab-crossword-wrap{
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 5.8rem;
  }

  .fab-crossword-grid{
    margin: 0 auto;
  }

  .fab-cell{
    border-right-width: 1.6px;
    border-bottom-width: 1.6px;
  }

  .fab-cell.clue .text{
    inset: 2px;
    line-height: .92;
  }

  .fab-input{
    font-size: 18px;
    min-height: 30px;
  }

  .fab-start-arrow.right,
  .fab-start-arrow.down{
    width: 10px;
    height: 10px;
    font-size: 10px;
  }

  .fab-mobile-direction-pad{
    position: fixed;
    left: 50%;
    bottom: max(12px, env(safe-area-inset-bottom));
    transform: translateX(-50%);
    z-index: 9999;
    display: flex;
    gap: .55rem;
    background: rgba(255,255,255,.95);
    border: 2px solid #111;
    border-radius: 999px;
    padding: .45rem;
    box-shadow: 0 8px 28px rgba(0,0,0,.25);
  }

  .fab-answer-box ol{
    columns: 1;
  }
}

@media print{
  .fab-crossword-post{
    --cell: 46px;
  }

  .fab-crossword-actions,
  .fab-mobile-direction-pad,
  .fab-crossword-gate,
  .fab-crossword-local,
  .fab-crossword-status,
  .fab-print-hide{
    display: none;
  }

  .fab-crossword-grid{
    break-inside: avoid;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .fab-cell.block{
    background: #111 !important;
    background-color: #111 !important;
    color: #111 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    box-shadow: inset 0 0 0 999px #111 !important;
  }

  .fab-cell.clue{
    background: #f4f4f4 !important;
    background-color: #f4f4f4 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .fab-cell.clue .text{
    font-size: 6.2px !important;
  }

  .fab-start-arrow.right,
  .fab-start-arrow.down{
    width: 10px;
    height: 10px;
    font-size: 10px;
  }

  .fab-input{
    font-size: 18px;
  }

  /* Quando o usuário clica no botão, imprime somente a grade da cruzada.
     Isso esconde cabeçalho, menu, texto do post, tabela, rodapé e elementos do tema. */
  body.fab-print-crossword-only *{
    visibility: hidden !important;
  }

  body.fab-print-crossword-only #fab-crossword-grid,
  body.fab-print-crossword-only #fab-crossword-grid *{
    visibility: visible !important;
  }

  body.fab-print-crossword-only #fab-crossword-grid{
    position: fixed !important;
    left: 50% !important;
    top: 10mm !important;
    transform: translateX(-50%) !important;
    margin: 0 !important;
  }
}
</style>

# Palavras Cruzadas FAB em Cianorte: desafio interativo estilo Coquetel

Quem joga **Flesh and Blood em Cianorte** já sabe: decorar cartas, keywords, heróis e pequenas siglas da comunidade ajuda muito na mesa. Para deixar esse treino mais divertido, o **Cianorte Card Masters** preparou uma palavra cruzada temática em estilo Coquetel, feita para jogadores de TCG, colecionadores e curiosos que acompanham os encontros de card games em Cianorte e região.

A cruzada mistura pistas de cartas conhecidas, lore de Rathe, equipamentos, heróis, keywords e abreviações comuns em conversas de jogadores de **Flesh and Blood**. O desafio é simples: leia a pista, siga a seta e preencha a resposta no espaço correto.

<div class="fab-crossword-post" id="fab-crossword-post">
  <div class="fab-crossword-intro">
    <strong>Como jogar:</strong> clique em um quadrado branco e digite uma letra. A seta para a direita indica resposta horizontal; a seta para baixo indica resposta vertical. Escolha a direção do preenchimento pelas setas flutuantes no celular. O progresso fica salvo neste navegador.
  </div>

  <div class="fab-crossword-local">
    Este passatempo faz parte dos conteúdos da comunidade <strong>Cianorte Card Masters</strong>, criada para fortalecer o cenário de TCG em Cianorte-PR, divulgar Flesh and Blood, Pokémon, Magic: The Gathering, One Piece e aproximar novos jogadores dos encontros locais.
  </div>

  <div class="fab-crossword-actions">
    <button type="button" onclick="fabPrintCrosswordOnly()">Imprimir apenas a cruzada</button>
    <span class="fab-direction-label" id="fab-direction-label">Preenchimento: → lado</span>
    <button type="button" id="fab-clear-button">Limpar respostas</button>
    <button type="button" id="fab-check-button" disabled>Conferir depois de domingo às 18h</button>
    <button type="button" id="fab-answer-button" disabled>Gabarito liberado domingo depois das 18h</button>
  </div>

  <div class="fab-crossword-gate" id="fab-gate-message">
    O gabarito e a conferência serão liberados automaticamente no domingo, 07/06/2026, depois das 18h.
  </div>

  <div class="fab-crossword-status fab-print-hide" id="fab-status">
    Progresso salvo automaticamente neste navegador.
  </div>

  <div class="fab-mobile-direction-pad" aria-label="Escolha a direção do preenchimento">
    <button type="button" class="fab-dir-choice active" data-dir="H" aria-label="Preencher para o lado">→ Lado</button>
    <button type="button" class="fab-dir-choice" data-dir="V" aria-label="Preencher para baixo">↓ Baixo</button>
  </div>

  <div class="fab-crossword-wrap">
    <div class="fab-crossword-grid" id="fab-crossword-grid" aria-label="Palavras cruzadas temática de Flesh and Blood em Cianorte"></div>
  </div>

  <div class="fab-answer-box" id="fab-answer-box">
    <h2>Gabarito da palavra cruzada FAB</h2>
    <ol>
<li><strong>1.</strong> WARMACHINE <span>(H)</span></li>
<li><strong>2.</strong> HEARTOFICE <span>(H)</span></li>
<li><strong>3.</strong> AETHERDART <span>(H)</span></li>
<li><strong>4.</strong> TURNTIMBER <span>(H)</span></li>
<li><strong>5.</strong> RISINGTIDE <span>(H)</span></li>
<li><strong>6.</strong> ADAPTIVEPLATING <span>(V)</span></li>
<li><strong>7.</strong> AETHER <span>(V)</span></li>
<li><strong>8.</strong> RELOAD <span>(V)</span></li>
<li><strong>9.</strong> CENSOR <span>(V)</span></li>
<li><strong>10.</strong> ICEBIND <span>(V)</span></li>
<li><strong>11.</strong> SHAMANS <span>(V)</span></li>
<li><strong>12.</strong> CRASHDOWN <span>(V)</span></li>
<li><strong>13.</strong> RIFTING <span>(V)</span></li>
<li><strong>14.</strong> BAIT <span>(V)</span></li>
<li><strong>15.</strong> RECHARGE <span>(V)</span></li>
<li><strong>16.</strong> TEMPTOVER <span>(V)</span></li>
<li><strong>17.</strong> THRUST <span>(V)</span></li>
<li><strong>18.</strong> UZURI <span>(V)</span></li>
<li><strong>19.</strong> BET <span>(H)</span></li>
<li><strong>21.</strong> GO <span>(H)</span></li>
<li><strong>22.</strong> LEV <span>(H)</span></li>
<li><strong>23.</strong> BRU <span>(H)</span></li>
<li><strong>24.</strong> ITEM <span>(H)</span></li>
<li><strong>25.</strong> KAT <span>(H)</span></li>
    </ol>
  </div>
</div>

## Flesh and Blood, TCG e comunidade em Cianorte

Se você procura **Flesh and Blood em Cianorte**, quer conhecer jogadores de TCG no Paraná ou está começando agora nos card games, acompanhe os conteúdos do **Cianorte Card Masters**. Além de desafios como esta palavra cruzada, a comunidade publica guias, resultados de Armory, análises de heróis, novidades de coleções e materiais para quem quer aprender a jogar.

Este desafio também pode ser impresso para encontros presenciais, aulas introdutórias de TCG, eventos de comunidade ou atividades rápidas antes de torneios de Flesh and Blood.

<script>
function fabPrintCrosswordOnly(){
  document.body.classList.add('fab-print-crossword-only');
  window.print();
}

window.addEventListener('afterprint', function(){
  document.body.classList.remove('fab-print-crossword-only');
});

(function(){
  const RELEASE_AT = new Date('2026-06-07T18:00:00-03:00');
  const STORAGE_KEY = 'ccm_fab_crossword_desafio_01_respostas_v2';

  const rows = [
  [
    "block",
    "block",
    "Q7V",
    "Q8V",
    "block",
    "Q6V",
    "Q9V",
    "block",
    "Q10V",
    "block",
    "block"
  ],
  [
    "Q1H",
    "W",
    "A",
    "R",
    "M",
    "A",
    "C",
    "H",
    "I",
    "N",
    "E"
  ],
  [
    "block",
    "block",
    "E",
    "E",
    "block",
    "D",
    "E",
    "block",
    "C",
    "Q15V",
    "block"
  ],
  [
    "block",
    "Q11V",
    "T",
    "L",
    "Q12V",
    "A",
    "N",
    "block",
    "E",
    "R",
    "Q16V"
  ],
  [
    "block",
    "S",
    "H",
    "O",
    "C",
    "P",
    "S",
    "Q19H",
    "B",
    "E",
    "T"
  ],
  [
    "Q2H",
    "H",
    "E",
    "A",
    "R",
    "T",
    "O",
    "F",
    "I",
    "C",
    "E"
  ],
  [
    "block",
    "A",
    "R",
    "D",
    "A",
    "I",
    "R",
    "block",
    "N",
    "H",
    "M"
  ],
  [
    "block",
    "M",
    "block",
    "block",
    "S",
    "V",
    "Q13V",
    "block",
    "D",
    "A",
    "P"
  ],
  [
    "Q3H",
    "A",
    "E",
    "T",
    "H",
    "E",
    "R",
    "D",
    "A",
    "R",
    "T"
  ],
  [
    "block",
    "N",
    "Q18V",
    "Q17V",
    "D",
    "P",
    "I",
    "block",
    "Q21H",
    "G",
    "O"
  ],
  [
    "block",
    "S",
    "U",
    "T",
    "O",
    "L",
    "F",
    "Q22H",
    "L",
    "E",
    "V"
  ],
  [
    "block",
    "block",
    "Z",
    "H",
    "W",
    "A",
    "T",
    "block",
    "Q14V",
    "block",
    "E"
  ],
  [
    "Q4H",
    "T",
    "U",
    "R",
    "N",
    "T",
    "I",
    "M",
    "B",
    "E",
    "R"
  ],
  [
    "Q23H",
    "B",
    "R",
    "U",
    "block",
    "I",
    "N",
    "block",
    "A",
    "block",
    "block"
  ],
  [
    "Q5H",
    "R",
    "I",
    "S",
    "I",
    "N",
    "G",
    "T",
    "I",
    "D",
    "E"
  ],
  [
    "Q25H",
    "K",
    "A",
    "T",
    "block",
    "G",
    "Q24H",
    "I",
    "T",
    "E",
    "M"
  ]
];

  const clueText = {
  "Q1H": "Está na imagem de Teklovossen, Esteemed Magnate",
  "Q2H": "Peito Lendário elemental",
  "Q3H": "Maga causando três de dano arcano sem custo",
  "Q4H": "O cara tem troncos nos braços e bloca até 8",
  "Q5H": "Mystic Action attack três e tem custo um",
  "Q6V": "Equipamento do Homem Vitruviano com galvanize",
  "Q7V": "Termo arcano usado em várias cartas Wizard e Runeblade",
  "Q8V": "Keyword que só funciona se o arsenal estiver vazio",
  "Q9V": "Aquele que aplica censura, 1 para 5",
  "Q10V": "Fusão de gelo arcano, se hitar congela arsenal",
  "Q11V": "Quem manipula o Flow para criar miragens no Everfest?",
  "Q12V": "Aura destruída no início do turno que dá 6 de poder",
  "Q13V": "Ataque genérico e torna o próximo não ataque instante",
  "Q14V": "Aura de ranger",
  "Q15V": "Recarrega Hyper Driver e aumenta o dano",
  "Q16V": "Rouba uma aura token até o final do turno",
  "Q17V": "Attack reaction genérica com target em sword",
  "Q18V": "Texto muito grande para uma jovem assassina",
  "Q19H": "Três primeiras letras da heroína que usa uma viga",
  "Q21H": "__ Again",
  "Q22H": "Três primeiras letras da heroína possuída",
  "Q23H": "Três primeiras letras de roladores de dados",
  "Q24H": "Maioria das classes tem mas Mechas tem mais",
  "Q25H": "Três primeiras letras do herói andarilho"
};

  let currentDirection = 'H';

  function isAnswerCell(value){
    return /^[A-Z0-9]$/.test(value);
  }

  function clueKeyToPosition(key){
    for(let r = 0; r < rows.length; r++){
      for(let c = 0; c < rows[r].length; c++){
        if(rows[r][c] === key) return {r, c};
      }
    }
    return null;
  }

  function buildArrowMap(){
    const map = {};
    Object.keys(clueText).forEach(key => {
      const pos = clueKeyToPosition(key);
      if(!pos) return;
      const isH = key.endsWith('H');
      const target = isH ? {r: pos.r, c: pos.c + 1} : {r: pos.r + 1, c: pos.c};
      if(target.r < 0 || target.r >= rows.length || target.c < 0 || target.c >= rows[0].length) return;
      const mapKey = `${target.r},${target.c}`;
      if(!map[mapKey]) map[mapKey] = [];
      map[mapKey].push(isH ? 'right' : 'down');
    });
    return map;
  }

  const arrowMap = buildArrowMap();

  function positionKey(r, c){
    return `${r}-${c}`;
  }

  function getInput(r, c){
    return document.querySelector(`.fab-input[data-r="${r}"][data-c="${c}"]`);
  }

  function moveFrom(input, direction, backwards){
    let r = parseInt(input.dataset.r, 10);
    let c = parseInt(input.dataset.c, 10);
    const dr = direction === 'V' ? (backwards ? -1 : 1) : 0;
    const dc = direction === 'H' ? (backwards ? -1 : 1) : 0;

    r += dr;
    c += dc;

    if(r < 0 || r >= rows.length || c < 0 || c >= rows[0].length) return;
    if(!isAnswerCell(rows[r][c])) return;

    const next = getInput(r, c);
    if(next) {
      next.focus();
      next.select();
    }
  }

  function updateDirection(direction){
    currentDirection = direction === 'V' ? 'V' : 'H';

    const label = document.getElementById('fab-direction-label');
    if(label) {
      label.textContent = currentDirection === 'H' ? 'Preenchimento: → lado' : 'Preenchimento: ↓ baixo';
    }

    document.querySelectorAll('.fab-dir-choice').forEach(button => {
      button.classList.toggle('active', button.dataset.dir === currentDirection);
      button.setAttribute('aria-pressed', button.dataset.dir === currentDirection ? 'true' : 'false');
    });
  }

  function saveProgress(){
    const data = {};
    document.querySelectorAll('.fab-input').forEach(input => {
      data[positionKey(input.dataset.r, input.dataset.c)] = input.value || '';
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function loadProgress(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return;
      const data = JSON.parse(raw);
      document.querySelectorAll('.fab-input').forEach(input => {
        const value = data[positionKey(input.dataset.r, input.dataset.c)] || '';
        input.value = value.slice(0, 1).toUpperCase();
      });
    } catch(e) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  function clearProgress(){
    if(!confirm('Limpar todas as respostas desta cruzada?')) return;
    document.querySelectorAll('.fab-input').forEach(input => {
      input.value = '';
      input.closest('.fab-cell').classList.remove('correta', 'errada');
    });
    localStorage.removeItem(STORAGE_KEY);
    updateStatus('Respostas limpas.');
  }

  function updateStatus(text){
    const status = document.getElementById('fab-status');
    if(status) status.textContent = text;
  }

  function checkAnswers(){
    let total = 0;
    let filled = 0;
    let correct = 0;

    document.querySelectorAll('.fab-input').forEach(input => {
      const cell = input.closest('.fab-cell');
      const expected = input.dataset.answer;
      const value = (input.value || '').toUpperCase();

      total++;
      cell.classList.remove('correta', 'errada');

      if(value) {
        filled++;
        if(value === expected) {
          correct++;
          cell.classList.add('correta');
        } else {
          cell.classList.add('errada');
        }
      }
    });

    updateStatus(`Conferência: ${correct} letra(s) correta(s) de ${total}. Preenchidas: ${filled}.`);
  }

  function toggleAnswer(){
    const post = document.getElementById('fab-crossword-post');
    if(!post) return;
    post.classList.toggle('gabarito-visivel');
  }

  function fitClueText(el){
    let size = 8.4;
    el.style.fontSize = size + 'px';
    let guard = 0;
    while((el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) && size > 4.1 && guard < 90){
      size -= 0.2;
      el.style.fontSize = size.toFixed(1) + 'px';
      guard++;
    }
  }

  function renderGrid(){
    const grid = document.getElementById('fab-crossword-grid');
    if(!grid) return;
    grid.innerHTML = '';

    rows.forEach((row, r) => {
      row.forEach((value, c) => {
        const div = document.createElement('div');
        div.className = 'fab-cell';

        if(value === 'block'){
          div.classList.add('block');
        } else if(/^Q\d+[HV]$/.test(value)){
          div.classList.add('clue');
          const text = clueText[value] || '';
          div.title = text;
          div.innerHTML = `<div class="text">${text}</div>`;
        } else {
          div.classList.add('answer');
          const markers = arrowMap[`${r},${c}`] || [];
          const markerHtml = markers.map(dir =>
            `<div class="fab-start-arrow ${dir}">${dir === 'right' ? '→' : '↓'}</div>`
          ).join('');
          div.innerHTML = `${markerHtml}<input class="fab-input" type="text" inputmode="text" maxlength="1" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Linha ${r + 1}, coluna ${c + 1}" data-r="${r}" data-c="${c}" data-answer="${value}"><div class="fab-solution-letter">${value}</div>`;
        }

        grid.appendChild(div);
      });
    });

    document.querySelectorAll('#fab-crossword-post .clue .text').forEach(fitClueText);
    setupInputs();
    loadProgress();
  }

  function setupInputs(){
    document.querySelectorAll('.fab-input').forEach(input => {
      input.addEventListener('click', function(){
        this.select();
      });

      input.addEventListener('input', function(){
        this.value = (this.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 1);
        this.closest('.fab-cell').classList.remove('correta', 'errada');
        saveProgress();
        if(this.value) moveFrom(this, currentDirection, false);
      });

      input.addEventListener('keydown', function(event){
        if(event.key === 'ArrowRight') {
          event.preventDefault();
          updateDirection('H');
          moveFrom(this, 'H', false);
        } else if(event.key === 'ArrowLeft') {
          event.preventDefault();
          updateDirection('H');
          moveFrom(this, 'H', true);
        } else if(event.key === 'ArrowDown') {
          event.preventDefault();
          updateDirection('V');
          moveFrom(this, 'V', false);
        } else if(event.key === 'ArrowUp') {
          event.preventDefault();
          updateDirection('V');
          moveFrom(this, 'V', true);
        } else if(event.key === 'Backspace' && !this.value) {
          event.preventDefault();
          moveFrom(this, currentDirection, true);
        } else if(event.key === ' ' || event.key === 'Tab') {
          if(event.key === ' ') {
            event.preventDefault();
            updateDirection(currentDirection === 'H' ? 'V' : 'H');
          }
        }
      });
    });
  }

  function updateGate(){
    const button = document.getElementById('fab-answer-button');
    const checkButton = document.getElementById('fab-check-button');
    const message = document.getElementById('fab-gate-message');
    if(!button || !checkButton || !message) return;

    const now = new Date();
    const unlocked = now >= RELEASE_AT;

    if(unlocked){
      button.disabled = false;
      checkButton.disabled = false;
      button.textContent = 'Mostrar / ocultar gabarito';
      checkButton.textContent = 'Conferir respostas';
      message.innerHTML = 'Gabarito e conferência liberados. Você pode conferir suas respostas ou mostrar/ocultar o gabarito.';
      button.onclick = toggleAnswer;
      checkButton.onclick = checkAnswers;
    } else {
      button.disabled = true;
      checkButton.disabled = true;
      const remainingMs = RELEASE_AT - now;
      const totalHours = Math.max(0, Math.ceil(remainingMs / 3600000));
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      message.innerHTML = `O gabarito e a conferência serão liberados no domingo, 07/06/2026, depois das 18h. Falta aproximadamente ${days} dia(s) e ${hours} hora(s).`;
    }
  }

  document.querySelectorAll('.fab-dir-choice').forEach(button => {
    button.addEventListener('click', function(){
      updateDirection(this.dataset.dir);
      const active = document.activeElement;
      if(active && active.classList && active.classList.contains('fab-input')) {
        active.focus();
      }
    });
  });

  document.getElementById('fab-clear-button')?.addEventListener('click', clearProgress);

  renderGrid();
  updateDirection('H');
  updateGate();
  window.addEventListener('resize', () => document.querySelectorAll('#fab-crossword-post .clue .text').forEach(fitClueText));
  setInterval(updateGate, 60000);
})();
</script>
