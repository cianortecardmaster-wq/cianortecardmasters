---
layout: post
title: "Palavras Cruzadas FAB em Cianorte: desafio estilo Coquetel"
category_label: "Flesh and Blood"
format: "HTML / imprimível"
schema_type: "BlogPosting"
summary: "Desafio de palavras cruzadas de Flesh and Blood em estilo Coquetel para jogadores de Cianorte e região, com pistas sobre cartas, keywords, heróis, lore e siglas do TCG."
description: "Resolva uma palavra cruzada temática de Flesh and Blood criada pelo Cianorte Card Masters, comunidade de TCG em Cianorte-PR, com pistas sobre Teklovossen, Heart of Ice, Aether Dart, Adaptive Plating, heróis, keywords e lore."
image: "/assets/img/banners/banner-palavras-cruzadas-fab.webp"
image_alt: "Palavras cruzadas de Flesh and Blood em estilo Coquetel para jogadores de TCG em Cianorte."
author: "Neto"
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
}

.fab-crossword-intro{
  border: 1px solid #111;
  padding: 1rem;
  margin: 1rem 0 1.25rem;
  background: #fafafa;
}

.fab-crossword-local{
  border-left: 4px solid #111;
  padding: .85rem 1rem;
  margin: 1rem 0 1.25rem;
  background: #f7f7f7;
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

.fab-crossword-gate{
  border-left: 4px solid #111;
  padding: .75rem 1rem;
  margin: 1rem 0;
  background: #f7f7f7;
  font-size: .95rem;
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
  background: var(--block-bg);
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

.fab-letter{
  display: none;
  position: absolute;
  inset: 0;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: clamp(18px, 3vw, 24px);
  letter-spacing: .5px;
}

.fab-crossword-post.gabarito-liberado .fab-letter{
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

.fab-crossword-post.gabarito-liberado .fab-start-arrow{
  opacity: .7;
}

.fab-answer-box{
  display: none;
  border: 2px solid #111;
  padding: 1rem;
  margin: 1.25rem 0;
  background: #fff;
}

.fab-crossword-post.gabarito-liberado .fab-answer-box{
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

.fab-seo-note{
  font-size: .95rem;
  line-height: 1.55;
}

@media print{
  .fab-crossword-post{
    --cell: 46px;
  }

  .fab-crossword-actions,
  .fab-crossword-gate,
  .fab-crossword-local,
  .fab-seo-note{
    display: none;
  }

  .fab-crossword-grid{
    break-inside: avoid;
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
}
</style>

# Palavras Cruzadas FAB em Cianorte: desafio estilo Coquetel

Quem joga **Flesh and Blood em Cianorte** já sabe: decorar cartas, keywords, heróis e pequenas siglas da comunidade ajuda muito na mesa. Para deixar esse treino mais divertido, o **Cianorte Card Masters** preparou uma palavra cruzada temática em estilo Coquetel, feita para jogadores de TCG, colecionadores e curiosos que acompanham os encontros de card games em Cianorte e região.

A cruzada mistura pistas de cartas conhecidas, lore de Rathe, equipamentos, heróis, keywords e abreviações comuns em conversas de jogadores de **Flesh and Blood**. O desafio é simples: leia a pista, siga a seta e preencha a resposta no espaço correto.

<div class="fab-crossword-post" id="fab-crossword-post">
  <div class="fab-crossword-intro">
    <strong>Como jogar:</strong> leia cada pista dentro do quadrado e siga a seta. A seta para a direita indica resposta horizontal; a seta para baixo indica resposta vertical. O quadrado da pista não recebe letra.
  </div>

  <div class="fab-crossword-local">
    Este passatempo faz parte dos conteúdos da comunidade <strong>Cianorte Card Masters</strong>, criada para fortalecer o cenário de TCG em Cianorte-PR, divulgar Flesh and Blood, Pokémon, Magic: The Gathering, One Piece e aproximar novos jogadores dos encontros locais.
  </div>

  <div class="fab-crossword-actions">
    <button type="button" onclick="window.print()">Imprimir / salvar em PDF</button>
    <button type="button" id="fab-answer-button" disabled>Gabarito liberado domingo depois das 18h</button>
  </div>

  <div class="fab-crossword-gate" id="fab-gate-message">
    O gabarito será liberado automaticamente no domingo, 07/06/2026, depois das 18h.
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
(function(){
  const RELEASE_AT = new Date('2026-06-07T18:00:00-03:00');

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
          div.innerHTML = `${markerHtml}<div class="fab-letter">${value}</div>`;
        }

        grid.appendChild(div);
      });
    });

    document.querySelectorAll('#fab-crossword-post .clue .text').forEach(fitClueText);
  }

  function updateGate(){
    const post = document.getElementById('fab-crossword-post');
    const button = document.getElementById('fab-answer-button');
    const message = document.getElementById('fab-gate-message');
    if(!post || !button || !message) return;

    const now = new Date();
    const unlocked = now >= RELEASE_AT;

    if(unlocked){
      button.disabled = false;
      button.textContent = 'Mostrar / ocultar gabarito';
      message.innerHTML = 'Gabarito liberado. Clique no botão para mostrar ou ocultar as respostas.';
      button.onclick = function(){
        post.classList.toggle('gabarito-liberado');
      };
    } else {
      button.disabled = true;
      const remainingMs = RELEASE_AT - now;
      const totalHours = Math.max(0, Math.ceil(remainingMs / 3600000));
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      message.innerHTML = `O gabarito será liberado no domingo, 07/06/2026, depois das 18h. Falta aproximadamente ${days} dia(s) e ${hours} hora(s).`;
    }
  }

  renderGrid();
  updateGate();
  window.addEventListener('resize', () => document.querySelectorAll('#fab-crossword-post .clue .text').forEach(fitClueText));
  setInterval(updateGate, 60000);
})();
</script>
