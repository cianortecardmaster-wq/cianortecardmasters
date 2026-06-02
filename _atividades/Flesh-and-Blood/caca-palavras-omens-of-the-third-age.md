---
layout: post
title: "Caça-palavras Omens of the Third Age: desafio difícil de Flesh and Blood"
category_label: "Caça-palavras"
activity_type: "Caça-palavras"
game: "Flesh and Blood"
difficulty: "Difícil"
format: "HTML interativo / imprimível"
content_style: "flesh-and-blood"
schema_type: "CreativeWork"
summary: "Caça-palavras difícil de Flesh and Blood com tema Omens of the Third Age, pistas desafiadoras, grade 15x15 e foco em jogadores de Cianorte Card Masters."
description: "Atividade de caça-palavras difícil de Flesh and Blood para Cianorte e região: Omens of the Third Age, heróis, keywords, lugares, cartas e pistas temáticas para jogadores da comunidade Cianorte Card Masters."
image: "/assets/img/banners/banner-caca-palavras-omens-of-the-third-age.webp"
image_alt: "Caça-palavras difícil de Flesh and Blood com tema Omens of the Third Age para a comunidade Cianorte Card Masters."
author: "Neto"
date: 2026-06-02
last_modified_at: 2026-06-02
tags:
  - Flesh and Blood
  - Caça-palavras
  - Omens of the Third Age
  - Cianorte Card Masters
  - Card games em Cianorte
  - Comunidade TCG
published: true
---
<style>
  .omens-wordsearch {
    --ink: #111;
    --muted: #555;
    --line: #222;
    --paper: #fff;
    --soft: #f3f3f3;
    --select: #e7e7e7;
    --good: #d9f7d9;
    --locked: #f7f7f7;

    margin: 0;
    background: #e9e9e9;
    color: var(--ink);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.45;
    padding: 1px 0 28px;
  }

  .omens-wordsearch * {
    box-sizing: border-box;
  }

  /* Correção local: impede que o padrão visual do site deixe textos claros sobre fundo branco */
  .omens-wordsearch,
  .omens-wordsearch .page,
  .omens-wordsearch .box,
  .omens-wordsearch .seo-local,
  .omens-wordsearch .grid-card,
  .omens-wordsearch .status,
  .omens-wordsearch .clues,
  .omens-wordsearch .clue-list,
  .omens-wordsearch .clue-list li,
  .omens-wordsearch .answer-content,
  .omens-wordsearch .locked-box,
  .omens-wordsearch .answer-table {
    color: #111 !important;
  }

  .omens-wordsearch h1,
  .omens-wordsearch h2,
  .omens-wordsearch h3,
  .omens-wordsearch p,
  .omens-wordsearch li,
  .omens-wordsearch span,
  .omens-wordsearch strong,
  .omens-wordsearch em,
  .omens-wordsearch small,
  .omens-wordsearch td,
  .omens-wordsearch th {
    color: #111 !important;
  }

  .omens-wordsearch .subtitle,
  .omens-wordsearch .note {
    color: #555 !important;
  }

  .omens-wordsearch .answer-header,
  .omens-wordsearch .answer-header span,
  .omens-wordsearch .answer-header strong {
    color: #fff !important;
  }

  .omens-wordsearch .cell {
    color: #111 !important;
  }

  .omens-wordsearch.solution-revealed .cell.solution,
  .omens-wordsearch.solution-revealed .cell.solution.found {
    color: #fff !important;
  }

  .omens-wordsearch .clue-list li::before,
  .omens-wordsearch button.action,
  .omens-wordsearch .controls button {
    color: #fff !important;
  }

  .omens-wordsearch button.action.secondary,
  .omens-wordsearch .controls button.secondary {
    color: #000 !important;
  }

  .omens-wordsearch .page {
    max-width: 1040px;
    margin: 28px auto;
    background: var(--paper);
    padding: 34px;
    border: 2px solid var(--line);
    box-shadow: 0 10px 28px rgba(0,0,0,.15);
  }

  .omens-wordsearch header {
    border: 4px solid var(--line);
    padding: 18px 22px;
    margin-bottom: 22px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .04em;
    position: relative;
  }

  .omens-wordsearch header::before,
  .omens-wordsearch header::after {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 10px;
    width: 8px;
    background: repeating-linear-gradient(to bottom, #000 0, #000 8px, transparent 8px, transparent 14px);
  }

  .omens-wordsearch header::before {
    left: 10px;
  }

  .omens-wordsearch header::after {
    right: 10px;
  }

  .omens-wordsearch h1 {
    margin: 0;
    font-size: 30px;
    line-height: 1.1;
    color: #111 !important;
  }

  .omens-wordsearch .subtitle {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 14px;
    text-transform: none;
    letter-spacing: 0;
  }

  .omens-wordsearch .intro {
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 18px;
    margin-bottom: 22px;
    align-items: stretch;
  }

  .omens-wordsearch .box {
    border: 2px solid var(--line);
    padding: 14px 16px;
    background: #fff;
  }

  .omens-wordsearch .box h2 {
    margin: 0 0 8px;
    font-size: 18px;
    text-transform: uppercase;
    color: #111 !important;
  }

  .omens-wordsearch .box p {
    margin: 0;
    color: #222;
    font-size: 14px;
  }

  .omens-wordsearch .meta,
  .omens-wordsearch .seo-local {
    background: var(--soft);
  }

  .omens-wordsearch .meta ul {
    margin: 0;
    padding-left: 18px;
    font-size: 14px;
  }

  .omens-wordsearch .seo-local {
    margin: 0 0 22px;
    background: #fafafa;
  }

  .omens-wordsearch .seo-local strong {
    font-weight: 900;
    color: #111 !important;
  }

  .omens-wordsearch .game-layout {
    display: grid;
    grid-template-columns: minmax(300px, 570px) 1fr;
    gap: 24px;
    align-items: start;
  }

  .omens-wordsearch .grid-card {
    border: 3px solid #000;
    padding: 16px;
    background: #fff;
  }

  .omens-wordsearch .status {
    min-height: 42px;
    border: 2px solid #000;
    padding: 10px 12px;
    margin-bottom: 14px;
    font-weight: 800;
    text-align: center;
    background: #f7f7f7;
  }

  .omens-wordsearch .word-grid {
    display: grid;
    grid-template-columns: repeat(15, minmax(24px, 36px));
    justify-content: center;
    border: 3px solid #000;
    width: fit-content;
    margin: 0 auto;
    background: #000;
    gap: 1px;
    touch-action: none;
    user-select: none;
  }

  .omens-wordsearch .cell {
    width: 36px;
    height: 36px;
    border: 0;
    background: #fff;
    color: #111;
    text-align: center;
    font-weight: 900;
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
    cursor: pointer;
    padding: 0;
    touch-action: none;
    transition: transform .06s ease, background .08s ease;
  }

  .omens-wordsearch .cell:hover {
    background: #f0f0f0;
  }

  .omens-wordsearch .cell.selecting {
    background: var(--select);
    outline: 2px solid #000;
    outline-offset: -2px;
  }

  .omens-wordsearch .cell.found {
    background: var(--good);
    box-shadow: inset 0 0 0 3px #000;
  }

  .omens-wordsearch.solution-revealed .cell.solution {
    background: #111;
    color: #fff;
    box-shadow: inset 0 0 0 3px #111;
  }

  .omens-wordsearch.solution-revealed .cell.solution.found {
    background: #111;
    color: #fff;
  }

  .omens-wordsearch .cell.bad {
    animation: omensShake .18s linear 2;
  }

  @keyframes omensShake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }

  .omens-wordsearch .controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .omens-wordsearch button.action,
  .omens-wordsearch .controls button {
    border: 2px solid #000;
    background: #000;
    color: #fff;
    padding: 10px 14px;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: .03em;
  }

  .omens-wordsearch button.action.secondary,
  .omens-wordsearch .controls button.secondary {
    background: #fff;
    color: #000;
  }

  .omens-wordsearch .progress-wrap {
    margin-top: 14px;
    border: 2px solid #000;
    padding: 10px;
  }

  .omens-wordsearch .progress-text {
    margin: 0 0 8px;
    font-weight: 800;
    text-align: center;
  }

  .omens-wordsearch .progress-bar {
    height: 14px;
    border: 2px solid #000;
    background: #fff;
    overflow: hidden;
  }

  .omens-wordsearch .progress-fill {
    width: 0%;
    height: 100%;
    background: #000;
    transition: width .2s ease;
  }

  .omens-wordsearch .clues h2 {
    font-size: 22px;
    margin: 0 0 12px;
    border-bottom: 3px solid #000;
    padding-bottom: 6px;
    text-transform: uppercase;
    color: #111 !important;
  }

  .omens-wordsearch .clue-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .omens-wordsearch .clue-list li {
    border: 1px solid #222;
    padding: 10px 12px 10px 44px;
    min-height: 78px;
    position: relative;
    font-size: 14px;
    background: #fff;
    color: #111 !important;
  }

  .omens-wordsearch .clue-list li::before {
    content: attr(data-number);
    position: absolute;
    left: 10px;
    top: 10px;
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    background: #000;
    color: #fff;
  }

  .omens-wordsearch .clue-list li.done {
    background: var(--good);
    border-width: 2px;
  }

  .omens-wordsearch .found-label {
    display: none;
    margin-top: 6px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .omens-wordsearch .clue-list li.done .found-label {
    display: block;
  }

  .omens-wordsearch .answer-panel {
    border: 3px solid #000;
    margin-top: 24px;
    background: #fff;
  }

  .omens-wordsearch .answer-header {
    padding: 14px 16px;
    font-weight: 900;
    text-transform: uppercase;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .omens-wordsearch .answer-content {
    padding: 16px;
  }

  .omens-wordsearch .locked-box {
    border: 2px dashed #000;
    padding: 18px;
    background: var(--locked);
    text-align: center;
  }

  .omens-wordsearch .locked-box strong {
    display: block;
    font-size: 20px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .omens-wordsearch .answer-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  .omens-wordsearch .answer-table th,
  .omens-wordsearch .answer-table td {
    border: 1px solid #000;
    padding: 8px 9px;
    text-align: left;
  }

  .omens-wordsearch .answer-table th {
    background: #efefef;
    text-transform: uppercase;
    font-size: 12px;
  }

  .omens-wordsearch .note {
    margin-top: 12px;
    color: var(--muted);
    font-size: 13px;
  }

  .omens-wordsearch .hidden {
    display: none !important;
  }

  .omens-wordsearch footer {
    margin-top: 26px;
    border-top: 2px solid #000;
    padding-top: 12px;
    font-size: 12px;
    color: #444;
    text-align: center;
  }

  @media (max-width: 900px) {
    .omens-wordsearch .game-layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 760px) {
    .omens-wordsearch .page {
      margin: 0;
      border: none;
      padding: 16px;
    }

    .omens-wordsearch .intro {
      grid-template-columns: 1fr;
    }

    .omens-wordsearch h1 {
      font-size: 24px;
    }

    .omens-wordsearch .grid-card {
      padding: 10px;
    }

    .omens-wordsearch .word-grid {
      grid-template-columns: repeat(15, minmax(20px, 1fr));
      width: 100%;
    }

    .omens-wordsearch .cell {
      width: auto;
      height: auto;
      aspect-ratio: 1 / 1;
      font-size: clamp(13px, 4.2vw, 18px);
    }
  }

  @media print {
    .omens-wordsearch {
      background: #fff;
      padding: 0;
    }

    .omens-wordsearch .page {
      margin: 0;
      max-width: none;
      box-shadow: none;
      border: none;
      padding: 12mm;
    }

    .omens-wordsearch .game-layout {
      grid-template-columns: 1fr;
    }

    .omens-wordsearch .controls,
    .omens-wordsearch .status,
    .omens-wordsearch .progress-wrap {
      display: none;
    }

    .omens-wordsearch .word-grid {
      grid-template-columns: repeat(15, 31px);
      width: fit-content;
    }

    .omens-wordsearch .cell {
      width: 31px;
      height: 31px;
      font-size: 18px;
      box-shadow: none !important;
      outline: none !important;
      background: #fff !important;
    }

    .omens-wordsearch .cell.found {
      background: #fff !important;
    }

    .omens-wordsearch .clue-list li {
      break-inside: avoid;
    }

    .omens-wordsearch .answer-panel.locked-print {
      display: none;
    }
  }
</style>

<div class="omens-wordsearch">
  <main class="page">
    <header>
      <h1>Caça-palavras interativo</h1>
      <p class="subtitle">Tema: Omens of the Third Age • Grade 15x15 • Clique ou arraste para selecionar</p>
    </header>

    <section class="intro">
      <div class="box">
        <h2>Como jogar</h2>
        <p>Clique e arraste sobre as letras em linha reta. Vale horizontal, vertical e diagonal, tanto no sentido normal quanto invertido. Quando a resposta estiver correta, ela fica marcada automaticamente.</p>
      </div>

      <div class="box meta">
        <h2>Desafio</h2>
        <ul>
          <li>12 respostas escondidas.</li>
          <li>Dicas difíceis, sem lista direta.</li>
          <li>Funciona com mouse e toque no celular.</li>
          <li>Gabarito liberado apenas no fim de semana, destacando as respostas na grade.</li>
        </ul>
      </div>
    </section>

    <section class="box seo-local" aria-label="Texto SEO local">
      <h2>Atividade de Flesh and Blood em Cianorte</h2>
      <p><strong>Caça-palavras de Flesh and Blood para Cianorte e região:</strong> este desafio foi criado para a comunidade Cianorte Card Masters, reunindo jogadores de card games, RPG e cultura geek em uma atividade temática de <em>Omens of the Third Age</em>. O material pode ser usado em encontros locais, torneios, eventos de loja, oficinas e posts do blog para aproximar novos jogadores do universo de Rathe, com pistas sobre heróis, keywords, lugares e cartas da coleção.</p>
    </section>

    <section class="game-layout">
      <div class="grid-card">
        <div class="status" id="omens-status">Selecione uma palavra na grade.</div>

        <div class="word-grid" id="omens-word-grid" aria-label="Grade interativa do caça-palavras">
          <button class="cell" type="button" data-row="0" data-col="0" aria-label="Linha 1, coluna 1, letra Z">Z</button>
<button class="cell" type="button" data-row="0" data-col="1" aria-label="Linha 1, coluna 2, letra Q">Q</button>
<button class="cell" type="button" data-row="0" data-col="2" aria-label="Linha 1, coluna 3, letra E">E</button>
<button class="cell" type="button" data-row="0" data-col="3" aria-label="Linha 1, coluna 4, letra F">F</button>
<button class="cell" type="button" data-row="0" data-col="4" aria-label="Linha 1, coluna 5, letra O">O</button>
<button class="cell" type="button" data-row="0" data-col="5" aria-label="Linha 1, coluna 6, letra C">C</button>
<button class="cell" type="button" data-row="0" data-col="6" aria-label="Linha 1, coluna 7, letra U">U</button>
<button class="cell" type="button" data-row="0" data-col="7" aria-label="Linha 1, coluna 8, letra D">D</button>
<button class="cell" type="button" data-row="0" data-col="8" aria-label="Linha 1, coluna 9, letra J">J</button>
<button class="cell" type="button" data-row="0" data-col="9" aria-label="Linha 1, coluna 10, letra K">K</button>
<button class="cell" type="button" data-row="0" data-col="10" aria-label="Linha 1, coluna 11, letra I">I</button>
<button class="cell" type="button" data-row="0" data-col="11" aria-label="Linha 1, coluna 12, letra W">W</button>
<button class="cell" type="button" data-row="0" data-col="12" aria-label="Linha 1, coluna 13, letra V">V</button>
<button class="cell" type="button" data-row="0" data-col="13" aria-label="Linha 1, coluna 14, letra Y">Y</button>
<button class="cell" type="button" data-row="0" data-col="14" aria-label="Linha 1, coluna 15, letra O">O</button>
<button class="cell" type="button" data-row="1" data-col="0" aria-label="Linha 2, coluna 1, letra T">T</button>
<button class="cell" type="button" data-row="1" data-col="1" aria-label="Linha 2, coluna 2, letra R">R</button>
<button class="cell" type="button" data-row="1" data-col="2" aria-label="Linha 2, coluna 3, letra W">W</button>
<button class="cell" type="button" data-row="1" data-col="3" aria-label="Linha 2, coluna 4, letra A">A</button>
<button class="cell" type="button" data-row="1" data-col="4" aria-label="Linha 2, coluna 5, letra G">G</button>
<button class="cell" type="button" data-row="1" data-col="5" aria-label="Linha 2, coluna 6, letra N">N</button>
<button class="cell" type="button" data-row="1" data-col="6" aria-label="Linha 2, coluna 7, letra B">B</button>
<button class="cell" type="button" data-row="1" data-col="7" aria-label="Linha 2, coluna 8, letra A">A</button>
<button class="cell" type="button" data-row="1" data-col="8" aria-label="Linha 2, coluna 9, letra A">A</button>
<button class="cell" type="button" data-row="1" data-col="9" aria-label="Linha 2, coluna 10, letra L">L</button>
<button class="cell" type="button" data-row="1" data-col="10" aria-label="Linha 2, coluna 11, letra G">G</button>
<button class="cell" type="button" data-row="1" data-col="11" aria-label="Linha 2, coluna 12, letra H">H</button>
<button class="cell" type="button" data-row="1" data-col="12" aria-label="Linha 2, coluna 13, letra O">O</button>
<button class="cell" type="button" data-row="1" data-col="13" aria-label="Linha 2, coluna 14, letra R">R</button>
<button class="cell" type="button" data-row="1" data-col="14" aria-label="Linha 2, coluna 15, letra M">M</button>
<button class="cell" type="button" data-row="2" data-col="0" aria-label="Linha 3, coluna 1, letra Y">Y</button>
<button class="cell" type="button" data-row="2" data-col="1" aria-label="Linha 3, coluna 2, letra H">H</button>
<button class="cell" type="button" data-row="2" data-col="2" aria-label="Linha 3, coluna 3, letra V">V</button>
<button class="cell" type="button" data-row="2" data-col="3" aria-label="Linha 3, coluna 4, letra O">O</button>
<button class="cell" type="button" data-row="2" data-col="4" aria-label="Linha 3, coluna 5, letra P">P</button>
<button class="cell" type="button" data-row="2" data-col="5" aria-label="Linha 3, coluna 6, letra F">F</button>
<button class="cell" type="button" data-row="2" data-col="6" aria-label="Linha 3, coluna 7, letra Y">Y</button>
<button class="cell" type="button" data-row="2" data-col="7" aria-label="Linha 3, coluna 8, letra O">O</button>
<button class="cell" type="button" data-row="2" data-col="8" aria-label="Linha 3, coluna 9, letra L">L</button>
<button class="cell" type="button" data-row="2" data-col="9" aria-label="Linha 3, coluna 10, letra E">E</button>
<button class="cell" type="button" data-row="2" data-col="10" aria-label="Linha 3, coluna 11, letra O">O</button>
<button class="cell" type="button" data-row="2" data-col="11" aria-label="Linha 3, coluna 12, letra M">M</button>
<button class="cell" type="button" data-row="2" data-col="12" aria-label="Linha 3, coluna 13, letra I">I</button>
<button class="cell" type="button" data-row="2" data-col="13" aria-label="Linha 3, coluna 14, letra W">W</button>
<button class="cell" type="button" data-row="2" data-col="14" aria-label="Linha 3, coluna 15, letra E">E</button>
<button class="cell" type="button" data-row="3" data-col="0" aria-label="Linha 4, coluna 1, letra J">J</button>
<button class="cell" type="button" data-row="3" data-col="1" aria-label="Linha 4, coluna 2, letra M">M</button>
<button class="cell" type="button" data-row="3" data-col="2" aria-label="Linha 4, coluna 3, letra G">G</button>
<button class="cell" type="button" data-row="3" data-col="3" aria-label="Linha 4, coluna 4, letra B">B</button>
<button class="cell" type="button" data-row="3" data-col="4" aria-label="Linha 4, coluna 5, letra L">L</button>
<button class="cell" type="button" data-row="3" data-col="5" aria-label="Linha 4, coluna 6, letra T">T</button>
<button class="cell" type="button" data-row="3" data-col="6" aria-label="Linha 4, coluna 7, letra V">V</button>
<button class="cell" type="button" data-row="3" data-col="7" aria-label="Linha 4, coluna 8, letra U">U</button>
<button class="cell" type="button" data-row="3" data-col="8" aria-label="Linha 4, coluna 9, letra Q">Q</button>
<button class="cell" type="button" data-row="3" data-col="9" aria-label="Linha 4, coluna 10, letra F">F</button>
<button class="cell" type="button" data-row="3" data-col="10" aria-label="Linha 4, coluna 11, letra V">V</button>
<button class="cell" type="button" data-row="3" data-col="11" aria-label="Linha 4, coluna 12, letra L">L</button>
<button class="cell" type="button" data-row="3" data-col="12" aria-label="Linha 4, coluna 13, letra A">A</button>
<button class="cell" type="button" data-row="3" data-col="13" aria-label="Linha 4, coluna 14, letra Q">Q</button>
<button class="cell" type="button" data-row="3" data-col="14" aria-label="Linha 4, coluna 15, letra N">N</button>
<button class="cell" type="button" data-row="4" data-col="0" aria-label="Linha 5, coluna 1, letra U">U</button>
<button class="cell" type="button" data-row="4" data-col="1" aria-label="Linha 5, coluna 2, letra L">L</button>
<button class="cell" type="button" data-row="4" data-col="2" aria-label="Linha 5, coluna 3, letra G">G</button>
<button class="cell" type="button" data-row="4" data-col="3" aria-label="Linha 5, coluna 4, letra I">I</button>
<button class="cell" type="button" data-row="4" data-col="4" aria-label="Linha 5, coluna 5, letra R">R</button>
<button class="cell" type="button" data-row="4" data-col="5" aria-label="Linha 5, coluna 6, letra F">F</button>
<button class="cell" type="button" data-row="4" data-col="6" aria-label="Linha 5, coluna 7, letra S">S</button>
<button class="cell" type="button" data-row="4" data-col="7" aria-label="Linha 5, coluna 8, letra Y">Y</button>
<button class="cell" type="button" data-row="4" data-col="8" aria-label="Linha 5, coluna 9, letra S">S</button>
<button class="cell" type="button" data-row="4" data-col="9" aria-label="Linha 5, coluna 10, letra N">N</button>
<button class="cell" type="button" data-row="4" data-col="10" aria-label="Linha 5, coluna 11, letra T">T</button>
<button class="cell" type="button" data-row="4" data-col="11" aria-label="Linha 5, coluna 12, letra J">J</button>
<button class="cell" type="button" data-row="4" data-col="12" aria-label="Linha 5, coluna 13, letra B">B</button>
<button class="cell" type="button" data-row="4" data-col="13" aria-label="Linha 5, coluna 14, letra Y">Y</button>
<button class="cell" type="button" data-row="4" data-col="14" aria-label="Linha 5, coluna 15, letra S">S</button>
<button class="cell" type="button" data-row="5" data-col="0" aria-label="Linha 6, coluna 1, letra Q">Q</button>
<button class="cell" type="button" data-row="5" data-col="1" aria-label="Linha 6, coluna 2, letra B">B</button>
<button class="cell" type="button" data-row="5" data-col="2" aria-label="Linha 6, coluna 3, letra U">U</button>
<button class="cell" type="button" data-row="5" data-col="3" aria-label="Linha 6, coluna 4, letra I">I</button>
<button class="cell" type="button" data-row="5" data-col="4" aria-label="Linha 6, coluna 5, letra L">L</button>
<button class="cell" type="button" data-row="5" data-col="5" aria-label="Linha 6, coluna 6, letra I">I</button>
<button class="cell" type="button" data-row="5" data-col="6" aria-label="Linha 6, coluna 7, letra G">G</button>
<button class="cell" type="button" data-row="5" data-col="7" aria-label="Linha 6, coluna 8, letra Q">Q</button>
<button class="cell" type="button" data-row="5" data-col="8" aria-label="Linha 6, coluna 9, letra O">O</button>
<button class="cell" type="button" data-row="5" data-col="9" aria-label="Linha 6, coluna 10, letra S">S</button>
<button class="cell" type="button" data-row="5" data-col="10" aria-label="Linha 6, coluna 11, letra C">C</button>
<button class="cell" type="button" data-row="5" data-col="11" aria-label="Linha 6, coluna 12, letra I">I</button>
<button class="cell" type="button" data-row="5" data-col="12" aria-label="Linha 6, coluna 13, letra L">L</button>
<button class="cell" type="button" data-row="5" data-col="13" aria-label="Linha 6, coluna 14, letra I">I</button>
<button class="cell" type="button" data-row="5" data-col="14" aria-label="Linha 6, coluna 15, letra O">O</button>
<button class="cell" type="button" data-row="6" data-col="0" aria-label="Linha 7, coluna 1, letra E">E</button>
<button class="cell" type="button" data-row="6" data-col="1" aria-label="Linha 7, coluna 2, letra A">A</button>
<button class="cell" type="button" data-row="6" data-col="2" aria-label="Linha 7, coluna 3, letra U">U</button>
<button class="cell" type="button" data-row="6" data-col="3" aria-label="Linha 7, coluna 4, letra R">R</button>
<button class="cell" type="button" data-row="6" data-col="4" aria-label="Linha 7, coluna 5, letra O">O</button>
<button class="cell" type="button" data-row="6" data-col="5" aria-label="Linha 7, coluna 6, letra R">R</button>
<button class="cell" type="button" data-row="6" data-col="6" aria-label="Linha 7, coluna 7, letra A">A</button>
<button class="cell" type="button" data-row="6" data-col="7" aria-label="Linha 7, coluna 8, letra N">N</button>
<button class="cell" type="button" data-row="6" data-col="8" aria-label="Linha 7, coluna 9, letra J">J</button>
<button class="cell" type="button" data-row="6" data-col="9" aria-label="Linha 7, coluna 10, letra E">E</button>
<button class="cell" type="button" data-row="6" data-col="10" aria-label="Linha 7, coluna 11, letra B">B</button>
<button class="cell" type="button" data-row="6" data-col="11" aria-label="Linha 7, coluna 12, letra B">B</button>
<button class="cell" type="button" data-row="6" data-col="12" aria-label="Linha 7, coluna 13, letra S">S</button>
<button class="cell" type="button" data-row="6" data-col="13" aria-label="Linha 7, coluna 14, letra V">V</button>
<button class="cell" type="button" data-row="6" data-col="14" aria-label="Linha 7, coluna 15, letra F">F</button>
<button class="cell" type="button" data-row="7" data-col="0" aria-label="Linha 8, coluna 1, letra T">T</button>
<button class="cell" type="button" data-row="7" data-col="1" aria-label="Linha 8, coluna 2, letra C">C</button>
<button class="cell" type="button" data-row="7" data-col="2" aria-label="Linha 8, coluna 3, letra E">E</button>
<button class="cell" type="button" data-row="7" data-col="3" aria-label="Linha 8, coluna 4, letra N">N</button>
<button class="cell" type="button" data-row="7" data-col="4" aria-label="Linha 8, coluna 5, letra G">G</button>
<button class="cell" type="button" data-row="7" data-col="5" aria-label="Linha 8, coluna 6, letra S">S</button>
<button class="cell" type="button" data-row="7" data-col="6" aria-label="Linha 8, coluna 7, letra A">A</button>
<button class="cell" type="button" data-row="7" data-col="7" aria-label="Linha 8, coluna 8, letra U">U</button>
<button class="cell" type="button" data-row="7" data-col="8" aria-label="Linha 8, coluna 9, letra I">I</button>
<button class="cell" type="button" data-row="7" data-col="9" aria-label="Linha 8, coluna 10, letra Y">Y</button>
<button class="cell" type="button" data-row="7" data-col="10" aria-label="Linha 8, coluna 11, letra F">F</button>
<button class="cell" type="button" data-row="7" data-col="11" aria-label="Linha 8, coluna 12, letra I">I</button>
<button class="cell" type="button" data-row="7" data-col="12" aria-label="Linha 8, coluna 13, letra U">U</button>
<button class="cell" type="button" data-row="7" data-col="13" aria-label="Linha 8, coluna 14, letra G">G</button>
<button class="cell" type="button" data-row="7" data-col="14" aria-label="Linha 8, coluna 15, letra A">A</button>
<button class="cell" type="button" data-row="8" data-col="0" aria-label="Linha 9, coluna 1, letra S">S</button>
<button class="cell" type="button" data-row="8" data-col="1" aria-label="Linha 9, coluna 2, letra S">S</button>
<button class="cell" type="button" data-row="8" data-col="2" aria-label="Linha 9, coluna 3, letra I">I</button>
<button class="cell" type="button" data-row="8" data-col="3" aria-label="Linha 9, coluna 4, letra I">I</button>
<button class="cell" type="button" data-row="8" data-col="4" aria-label="Linha 9, coluna 5, letra L">L</button>
<button class="cell" type="button" data-row="8" data-col="5" aria-label="Linha 9, coluna 6, letra U">U</button>
<button class="cell" type="button" data-row="8" data-col="6" aria-label="Linha 9, coluna 7, letra V">V</button>
<button class="cell" type="button" data-row="8" data-col="7" aria-label="Linha 9, coluna 8, letra T">T</button>
<button class="cell" type="button" data-row="8" data-col="8" aria-label="Linha 9, coluna 9, letra R">R</button>
<button class="cell" type="button" data-row="8" data-col="9" aria-label="Linha 9, coluna 10, letra N">N</button>
<button class="cell" type="button" data-row="8" data-col="10" aria-label="Linha 9, coluna 11, letra G">G</button>
<button class="cell" type="button" data-row="8" data-col="11" aria-label="Linha 9, coluna 12, letra V">V</button>
<button class="cell" type="button" data-row="8" data-col="12" aria-label="Linha 9, coluna 13, letra M">M</button>
<button class="cell" type="button" data-row="8" data-col="13" aria-label="Linha 9, coluna 14, letra D">D</button>
<button class="cell" type="button" data-row="8" data-col="14" aria-label="Linha 9, coluna 15, letra R">R</button>
<button class="cell" type="button" data-row="9" data-col="0" aria-label="Linha 10, coluna 1, letra U">U</button>
<button class="cell" type="button" data-row="9" data-col="1" aria-label="Linha 10, coluna 2, letra S">S</button>
<button class="cell" type="button" data-row="9" data-col="2" aria-label="Linha 10, coluna 3, letra E">E</button>
<button class="cell" type="button" data-row="9" data-col="3" aria-label="Linha 10, coluna 4, letra X">X</button>
<button class="cell" type="button" data-row="9" data-col="4" aria-label="Linha 10, coluna 5, letra H">H</button>
<button class="cell" type="button" data-row="9" data-col="5" aria-label="Linha 10, coluna 6, letra L">L</button>
<button class="cell" type="button" data-row="9" data-col="6" aria-label="Linha 10, coluna 7, letra M">M</button>
<button class="cell" type="button" data-row="9" data-col="7" aria-label="Linha 10, coluna 8, letra U">U</button>
<button class="cell" type="button" data-row="9" data-col="8" aria-label="Linha 10, coluna 9, letra S">S</button>
<button class="cell" type="button" data-row="9" data-col="9" aria-label="Linha 10, coluna 10, letra I">I</button>
<button class="cell" type="button" data-row="9" data-col="10" aria-label="Linha 10, coluna 11, letra T">T</button>
<button class="cell" type="button" data-row="9" data-col="11" aria-label="Linha 10, coluna 12, letra I">I</button>
<button class="cell" type="button" data-row="9" data-col="12" aria-label="Linha 10, coluna 13, letra I">I</button>
<button class="cell" type="button" data-row="9" data-col="13" aria-label="Linha 10, coluna 14, letra N">N</button>
<button class="cell" type="button" data-row="9" data-col="14" aria-label="Linha 10, coluna 15, letra C">C</button>
<button class="cell" type="button" data-row="10" data-col="0" aria-label="Linha 11, coluna 1, letra T">T</button>
<button class="cell" type="button" data-row="10" data-col="1" aria-label="Linha 11, coluna 2, letra B">B</button>
<button class="cell" type="button" data-row="10" data-col="2" aria-label="Linha 11, coluna 3, letra H">H</button>
<button class="cell" type="button" data-row="10" data-col="3" aria-label="Linha 11, coluna 4, letra P">P</button>
<button class="cell" type="button" data-row="10" data-col="4" aria-label="Linha 11, coluna 5, letra A">A</button>
<button class="cell" type="button" data-row="10" data-col="5" aria-label="Linha 11, coluna 6, letra U">U</button>
<button class="cell" type="button" data-row="10" data-col="6" aria-label="Linha 11, coluna 7, letra S">S</button>
<button class="cell" type="button" data-row="10" data-col="7" aria-label="Linha 11, coluna 8, letra G">G</button>
<button class="cell" type="button" data-row="10" data-col="8" aria-label="Linha 11, coluna 9, letra L">L</button>
<button class="cell" type="button" data-row="10" data-col="9" aria-label="Linha 11, coluna 10, letra Y">Y</button>
<button class="cell" type="button" data-row="10" data-col="10" aria-label="Linha 11, coluna 11, letra C">C</button>
<button class="cell" type="button" data-row="10" data-col="11" aria-label="Linha 11, coluna 12, letra H">H</button>
<button class="cell" type="button" data-row="10" data-col="12" aria-label="Linha 11, coluna 13, letra Q">Q</button>
<button class="cell" type="button" data-row="10" data-col="13" aria-label="Linha 11, coluna 14, letra K">K</button>
<button class="cell" type="button" data-row="10" data-col="14" aria-label="Linha 11, coluna 15, letra A">A</button>
<button class="cell" type="button" data-row="11" data-col="0" aria-label="Linha 12, coluna 1, letra U">U</button>
<button class="cell" type="button" data-row="11" data-col="1" aria-label="Linha 12, coluna 2, letra J">J</button>
<button class="cell" type="button" data-row="11" data-col="2" aria-label="Linha 12, coluna 3, letra Z">Z</button>
<button class="cell" type="button" data-row="11" data-col="3" aria-label="Linha 12, coluna 4, letra R">R</button>
<button class="cell" type="button" data-row="11" data-col="4" aria-label="Linha 12, coluna 5, letra M">M</button>
<button class="cell" type="button" data-row="11" data-col="5" aria-label="Linha 12, coluna 6, letra B">B</button>
<button class="cell" type="button" data-row="11" data-col="6" aria-label="Linha 12, coluna 7, letra N">N</button>
<button class="cell" type="button" data-row="11" data-col="7" aria-label="Linha 12, coluna 8, letra P">P</button>
<button class="cell" type="button" data-row="11" data-col="8" aria-label="Linha 12, coluna 9, letra R">R</button>
<button class="cell" type="button" data-row="11" data-col="9" aria-label="Linha 12, coluna 10, letra K">K</button>
<button class="cell" type="button" data-row="11" data-col="10" aria-label="Linha 12, coluna 11, letra G">G</button>
<button class="cell" type="button" data-row="11" data-col="11" aria-label="Linha 12, coluna 12, letra K">K</button>
<button class="cell" type="button" data-row="11" data-col="12" aria-label="Linha 12, coluna 13, letra G">G</button>
<button class="cell" type="button" data-row="11" data-col="13" aria-label="Linha 12, coluna 14, letra B">B</button>
<button class="cell" type="button" data-row="11" data-col="14" aria-label="Linha 12, coluna 15, letra N">N</button>
<button class="cell" type="button" data-row="12" data-col="0" aria-label="Linha 13, coluna 1, letra F">F</button>
<button class="cell" type="button" data-row="12" data-col="1" aria-label="Linha 13, coluna 2, letra W">W</button>
<button class="cell" type="button" data-row="12" data-col="2" aria-label="Linha 13, coluna 3, letra T">T</button>
<button class="cell" type="button" data-row="12" data-col="3" aria-label="Linha 13, coluna 4, letra W">W</button>
<button class="cell" type="button" data-row="12" data-col="4" aria-label="Linha 13, coluna 5, letra K">K</button>
<button class="cell" type="button" data-row="12" data-col="5" aria-label="Linha 13, coluna 6, letra E">E</button>
<button class="cell" type="button" data-row="12" data-col="6" aria-label="Linha 13, coluna 7, letra Z">Z</button>
<button class="cell" type="button" data-row="12" data-col="7" aria-label="Linha 13, coluna 8, letra N">N</button>
<button class="cell" type="button" data-row="12" data-col="8" aria-label="Linha 13, coluna 9, letra Q">Q</button>
<button class="cell" type="button" data-row="12" data-col="9" aria-label="Linha 13, coluna 10, letra Q">Q</button>
<button class="cell" type="button" data-row="12" data-col="10" aria-label="Linha 13, coluna 11, letra Z">Z</button>
<button class="cell" type="button" data-row="12" data-col="11" aria-label="Linha 13, coluna 12, letra G">G</button>
<button class="cell" type="button" data-row="12" data-col="12" aria-label="Linha 13, coluna 13, letra E">E</button>
<button class="cell" type="button" data-row="12" data-col="13" aria-label="Linha 13, coluna 14, letra I">I</button>
<button class="cell" type="button" data-row="12" data-col="14" aria-label="Linha 13, coluna 15, letra A">A</button>
<button class="cell" type="button" data-row="13" data-col="0" aria-label="Linha 14, coluna 1, letra G">G</button>
<button class="cell" type="button" data-row="13" data-col="1" aria-label="Linha 14, coluna 2, letra S">S</button>
<button class="cell" type="button" data-row="13" data-col="2" aria-label="Linha 14, coluna 3, letra K">K</button>
<button class="cell" type="button" data-row="13" data-col="3" aria-label="Linha 14, coluna 4, letra D">D</button>
<button class="cell" type="button" data-row="13" data-col="4" aria-label="Linha 14, coluna 5, letra H">H</button>
<button class="cell" type="button" data-row="13" data-col="5" aria-label="Linha 14, coluna 6, letra N">N</button>
<button class="cell" type="button" data-row="13" data-col="6" aria-label="Linha 14, coluna 7, letra T">T</button>
<button class="cell" type="button" data-row="13" data-col="7" aria-label="Linha 14, coluna 8, letra M">M</button>
<button class="cell" type="button" data-row="13" data-col="8" aria-label="Linha 14, coluna 9, letra K">K</button>
<button class="cell" type="button" data-row="13" data-col="9" aria-label="Linha 14, coluna 10, letra F">F</button>
<button class="cell" type="button" data-row="13" data-col="10" aria-label="Linha 14, coluna 11, letra S">S</button>
<button class="cell" type="button" data-row="13" data-col="11" aria-label="Linha 14, coluna 12, letra T">T</button>
<button class="cell" type="button" data-row="13" data-col="12" aria-label="Linha 14, coluna 13, letra Y">Y</button>
<button class="cell" type="button" data-row="13" data-col="13" aria-label="Linha 14, coluna 14, letra E">E</button>
<button class="cell" type="button" data-row="13" data-col="14" aria-label="Linha 14, coluna 15, letra L">L</button>
<button class="cell" type="button" data-row="14" data-col="0" aria-label="Linha 15, coluna 1, letra A">A</button>
<button class="cell" type="button" data-row="14" data-col="1" aria-label="Linha 15, coluna 2, letra G">G</button>
<button class="cell" type="button" data-row="14" data-col="2" aria-label="Linha 15, coluna 3, letra B">B</button>
<button class="cell" type="button" data-row="14" data-col="3" aria-label="Linha 15, coluna 4, letra O">O</button>
<button class="cell" type="button" data-row="14" data-col="4" aria-label="Linha 15, coluna 5, letra E">E</button>
<button class="cell" type="button" data-row="14" data-col="5" aria-label="Linha 15, coluna 6, letra K">K</button>
<button class="cell" type="button" data-row="14" data-col="6" aria-label="Linha 15, coluna 7, letra D">D</button>
<button class="cell" type="button" data-row="14" data-col="7" aria-label="Linha 15, coluna 8, letra P">P</button>
<button class="cell" type="button" data-row="14" data-col="8" aria-label="Linha 15, coluna 9, letra C">C</button>
<button class="cell" type="button" data-row="14" data-col="9" aria-label="Linha 15, coluna 10, letra E">E</button>
<button class="cell" type="button" data-row="14" data-col="10" aria-label="Linha 15, coluna 11, letra W">W</button>
<button class="cell" type="button" data-row="14" data-col="11" aria-label="Linha 15, coluna 12, letra C">C</button>
<button class="cell" type="button" data-row="14" data-col="12" aria-label="Linha 15, coluna 13, letra Z">Z</button>
<button class="cell" type="button" data-row="14" data-col="13" aria-label="Linha 15, coluna 14, letra Z">Z</button>
<button class="cell" type="button" data-row="14" data-col="14" aria-label="Linha 15, coluna 15, letra P">P</button>
        </div>

        <div class="controls">
          <button class="action" type="button" onclick="window.print()">Imprimir</button>
          <button class="action secondary" type="button" id="omens-reset-button">Reiniciar</button>
          <button class="action secondary" type="button" id="omens-check-answer-button">Verificar gabarito</button>
        </div>

        <div class="progress-wrap" aria-label="Progresso">
          <p class="progress-text" id="omens-progress-text">0 de 12 encontradas</p>
          <div class="progress-bar">
            <div class="progress-fill" id="omens-progress-fill"></div>
          </div>
        </div>
      </div>

      <section class="clues">
        <h2>Dicas difíceis</h2>
        <ol class="clue-list">
          <li id="clue-1" data-number="1"><span>A estrela mais excêntrica do trio: ligada à ilusão, ao brilho e à primeira grande presença desse arquétipo elétrico na coleção.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-2" data-number="2"><span>Recurso/token que parece pequeno, mas dita ritmo, conversão e ameaças no limitado da coleção.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-3" data-number="3"><span>A macro que paira sobre a partida como presságio arcano, antes mesmo das cartas comuns começarem a resolver o jogo.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-4" data-number="4"><span>Fenda associada ao cenário da busca: um lugar que soa como ruptura cósmica e abriga o caminho para o poder oculto.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-5" data-number="5"><span>Classe de truques, espectros e ameaças difíceis de avaliar; em Omens, recebe um brilho elétrico especial.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-6" data-number="6"><span>Fortaleza ou refúgio dourado dentro da fenda, procurado por quem tenta entender os presságios da Terceira Era.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-7" data-number="7"><span>Nome sombrio que carrega a ideia de fim; soa como entidade ou presságio maior do que uma simples carta.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-8" data-number="8"><span>Palavra que resume clima, herança e energia: quando aparece, quase sempre indica que o raio não vem sozinho.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-9" data-number="9"><span>Mago elétrico que retorna em nova forma, mais ligado ao cálculo arcano do que à pancadaria direta.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-10" data-number="10"><span>Heroína relâmpago que voltou ao centro da narrativa, agora cercada por sinais de destino e fluxo elétrico.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-11" data-number="11"><span>Termo associado ao céu, estrelas e magia superior; combina bem com fluxo, ponte e presságios arcanos.</span><strong class="found-label">Encontrada</strong></li>
<li id="clue-12" data-number="12"><span>Sinal mágico condensado: aparece em nomes de cartas e sugere proteção, feitiço preparado ou marca arcana.</span><strong class="found-label">Encontrada</strong></li>
        </ol>
      </section>
    </section>

    <section class="answer-panel locked-print" id="omens-answer-panel">
      <div class="answer-header">
        <span>Gabarito do organizador</span>
        <span id="omens-answer-status">Bloqueado</span>
      </div>

      <div class="answer-content">
        <div class="locked-box" id="omens-locked-box">
          <strong>Gabarito bloqueado</strong>
          <p id="omens-locked-message">O gabarito será liberado apenas no sábado e domingo, pelo horário de Brasília.</p>
        </div>

        <div id="omens-answer-box" class="hidden">
          <table class="answer-table">
            <thead>
              <tr>
                <th>Resposta</th>
                <th>Início</th>
                <th>Fim</th>
                <th>Direção</th>
              </tr>
            </thead>
            <tbody id="omens-answer-table-body"></tbody>
          </table>
          <p class="note">Gabarito liberado automaticamente porque hoje é sábado ou domingo no horário de Brasília. As respostas também ficam destacadas em preto na própria grade.</p>
        </div>
      </div>
    </section>

    <footer>
      Material interativo criado para atividade temática de Flesh and Blood — Omens of the Third Age • Cianorte Card Masters • Card games em Cianorte – PR.
    </footer>
  </main>

  <script>
    (function () {
      const gridLetters = ["ZQEFOCUDJKIWVYO", "TRWAGNBAALGHORM", "YHVOPFYOLEOMIWE", "JMGBLTVUQFVLAQN", "ULGIRFSYSNTJBYS", "QBUILIGQOSCILIO", "EAURORANJEBBSVF", "TCENGSAUIYFIUGA", "SSIILUVTRNGVMDR", "USEXHLMUSITIINC", "TBHPAUSGLYCHQKA", "UJZRMBNPRKGKGBN", "FWTWKEZNQQZGEIA", "GSKDHNTMKFSTYEL", "AGBOEKDPCEWCZZP"];
      const encodedData = "eyJhbnN3ZXJzIjogW3siaWQiOiAxLCAid29yZCI6ICJaWUdHWVNUQVJMSUdIVCIsICJzdGFydCI6ICJMMTUgQzE0IiwgImVuZCI6ICJMMiBDMSIsICJkaXJlY3Rpb24iOiAiZGlhZ29uYWwgaW52ZXJ0aWRvIOKGliIsICJjb29yZHMiOiBbWzE0LCAxM10sIFsxMywgMTJdLCBbMTIsIDExXSwgWzExLCAxMF0sIFsxMCwgOV0sIFs5LCA4XSwgWzgsIDddLCBbNywgNl0sIFs2LCA1XSwgWzUsIDRdLCBbNCwgM10sIFszLCAyXSwgWzIsIDFdLCBbMSwgMF1dfSwgeyJpZCI6IDIsICJ3b3JkIjogIkxJR0hUTklOR0ZMT1ciLCAic3RhcnQiOiAiTDE0IEMxNSIsICJlbmQiOiAiTDIgQzMiLCAiZGlyZWN0aW9uIjogImRpYWdvbmFsIGludmVydGlkbyDihpYiLCAiY29vcmRzIjogW1sxMywgMTRdLCBbMTIsIDEzXSwgWzExLCAxMl0sIFsxMCwgMTFdLCBbOSwgMTBdLCBbOCwgOV0sIFs3LCA4XSwgWzYsIDddLCBbNSwgNl0sIFs0LCA1XSwgWzMsIDRdLCBbMiwgM10sIFsxLCAyXV19LCB7ImlkIjogMywgIndvcmQiOiAiT01FTlNPRkFSQ0FOQSIsICJzdGFydCI6ICJMMSBDMTUiLCAiZW5kIjogIkwxMyBDMTUiLCAiZGlyZWN0aW9uIjogInZlcnRpY2FsIG5vcm1hbCDihpMiLCAiY29vcmRzIjogW1swLCAxNF0sIFsxLCAxNF0sIFsyLCAxNF0sIFszLCAxNF0sIFs0LCAxNF0sIFs1LCAxNF0sIFs2LCAxNF0sIFs3LCAxNF0sIFs4LCAxNF0sIFs5LCAxNF0sIFsxMCwgMTRdLCBbMTEsIDE0XSwgWzEyLCAxNF1dfSwgeyJpZCI6IDQsICJ3b3JkIjogIk5FQlVMVVNSSUZUIiwgInN0YXJ0IjogIkwxNCBDNiIsICJlbmQiOiAiTDQgQzYiLCAiZGlyZWN0aW9uIjogInZlcnRpY2FsIGludmVydGlkbyDihpEiLCAiY29vcmRzIjogW1sxMywgNV0sIFsxMiwgNV0sIFsxMSwgNV0sIFsxMCwgNV0sIFs5LCA1XSwgWzgsIDVdLCBbNywgNV0sIFs2LCA1XSwgWzUsIDVdLCBbNCwgNV0sIFszLCA1XV19LCB7ImlkIjogNSwgIndvcmQiOiAiSUxMVVNJT05JU1QiLCAic3RhcnQiOiAiTDEgQzExIiwgImVuZCI6ICJMMTEgQzEiLCAiZGlyZWN0aW9uIjogImRpYWdvbmFsIG5vcm1hbCDihpkiLCAiY29vcmRzIjogW1swLCAxMF0sIFsxLCA5XSwgWzIsIDhdLCBbMywgN10sIFs0LCA2XSwgWzUsIDVdLCBbNiwgNF0sIFs3LCAzXSwgWzgsIDJdLCBbOSwgMV0sIFsxMCwgMF1dfSwgeyJpZCI6IDYsICJ3b3JkIjogIkFVUklDS0VFUCIsICJzdGFydCI6ICJMNyBDNyIsICJlbmQiOiAiTDE1IEMxNSIsICJkaXJlY3Rpb24iOiAiZGlhZ29uYWwgbm9ybWFsIOKGmCIsICJjb29yZHMiOiBbWzYsIDZdLCBbNywgN10sIFs4LCA4XSwgWzksIDldLCBbMTAsIDEwXSwgWzExLCAxMV0sIFsxMiwgMTJdLCBbMTMsIDEzXSwgWzE0LCAxNF1dfSwgeyJpZCI6IDcsICJ3b3JkIjogIkJBQUxHSE9SIiwgInN0YXJ0IjogIkwyIEM3IiwgImVuZCI6ICJMMiBDMTQiLCAiZGlyZWN0aW9uIjogImhvcml6b250YWwgbm9ybWFsIOKGkiIsICJjb29yZHMiOiBbWzEsIDZdLCBbMSwgN10sIFsxLCA4XSwgWzEsIDldLCBbMSwgMTBdLCBbMSwgMTFdLCBbMSwgMTJdLCBbMSwgMTNdXX0sIHsiaWQiOiA4LCAid29yZCI6ICJURU1QRVNUIiwgInN0YXJ0IjogIkwxNCBDNyIsICJlbmQiOiAiTDggQzEiLCAiZGlyZWN0aW9uIjogImRpYWdvbmFsIGludmVydGlkbyDihpYiLCAiY29vcmRzIjogW1sxMywgNl0sIFsxMiwgNV0sIFsxMSwgNF0sIFsxMCwgM10sIFs5LCAyXSwgWzgsIDFdLCBbNywgMF1dfSwgeyJpZCI6IDksICJ3b3JkIjogIk9TQ0lMSU8iLCAic3RhcnQiOiAiTDYgQzkiLCAiZW5kIjogIkw2IEMxNSIsICJkaXJlY3Rpb24iOiAiaG9yaXpvbnRhbCBub3JtYWwg4oaSIiwgImNvb3JkcyI6IFtbNSwgOF0sIFs1LCA5XSwgWzUsIDEwXSwgWzUsIDExXSwgWzUsIDEyXSwgWzUsIDEzXSwgWzUsIDE0XV19LCB7ImlkIjogMTAsICJ3b3JkIjogIkFVUk9SQSIsICJzdGFydCI6ICJMNyBDMiIsICJlbmQiOiAiTDcgQzciLCAiZGlyZWN0aW9uIjogImhvcml6b250YWwgbm9ybWFsIOKGkiIsICJjb29yZHMiOiBbWzYsIDFdLCBbNiwgMl0sIFs2LCAzXSwgWzYsIDRdLCBbNiwgNV0sIFs2LCA2XV19LCB7ImlkIjogMTEsICJ3b3JkIjogIkFTVFJBTCIsICJzdGFydCI6ICJMMTUgQzEiLCAiZW5kIjogIkwxMCBDNiIsICJkaXJlY3Rpb24iOiAiZGlhZ29uYWwgaW52ZXJ0aWRvIOKGlyIsICJjb29yZHMiOiBbWzE0LCAwXSwgWzEzLCAxXSwgWzEyLCAyXSwgWzExLCAzXSwgWzEwLCA0XSwgWzksIDVdXX0sIHsiaWQiOiAxMiwgIndvcmQiOiAiU0lHSUwiLCAic3RhcnQiOiAiTDcgQzEzIiwgImVuZCI6ICJMMTEgQzkiLCAiZGlyZWN0aW9uIjogImRpYWdvbmFsIG5vcm1hbCDihpkiLCAiY29vcmRzIjogW1s2LCAxMl0sIFs3LCAxMV0sIFs4LCAxMF0sIFs5LCA5XSwgWzEwLCA4XV19XX0=";
      const decodedBinary = atob(encodedData);
      const decodedBytes = Uint8Array.from(decodedBinary, char => char.charCodeAt(0));
      const gameData = JSON.parse(new TextDecoder("utf-8").decode(decodedBytes));
      const answers = gameData.answers;

      const gridEl = document.getElementById("omens-word-grid");
      const statusEl = document.getElementById("omens-status");
      const progressText = document.getElementById("omens-progress-text");
      const progressFill = document.getElementById("omens-progress-fill");

      let selecting = false;
      let startCell = null;
      let currentSelection = [];
      let foundIds = new Set();

      function coordKey(coords) {
        return coords.map(function (coord) {
          return coord[0] + "," + coord[1];
        }).join("|");
      }

      const answerMap = new Map();
      answers.forEach(function (answer) {
        answerMap.set(coordKey(answer.coords), answer);
        answerMap.set(coordKey(answer.coords.slice().reverse()), answer);
      });

      function getCell(row, col) {
        return document.querySelector('.omens-wordsearch .cell[data-row="' + row + '"][data-col="' + col + '"]');
      }

      function getCellFromPoint(x, y) {
        const el = document.elementFromPoint(x, y);
        if (!el || !el.classList.contains("cell")) return null;
        return el;
      }

      function clearSelecting() {
        document.querySelectorAll(".omens-wordsearch .cell.selecting").forEach(function (cell) {
          cell.classList.remove("selecting");
        });
        currentSelection = [];
      }

      function makeLine(start, end) {
        const r1 = Number(start.dataset.row);
        const c1 = Number(start.dataset.col);
        const r2 = Number(end.dataset.row);
        const c2 = Number(end.dataset.col);

        const dr = r2 - r1;
        const dc = c2 - c1;

        if (!(dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc))) {
          return [];
        }

        const steps = Math.max(Math.abs(dr), Math.abs(dc));
        if (steps === 0) return [[r1, c1]];

        const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
        const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

        const coords = [];
        for (let i = 0; i <= steps; i++) {
          coords.push([r1 + i * stepR, c1 + i * stepC]);
        }
        return coords;
      }

      function highlightSelection(coords) {
        clearSelecting();
        coords.forEach(function (coord) {
          const cell = getCell(coord[0], coord[1]);
          if (cell) cell.classList.add("selecting");
        });
        currentSelection = coords;
      }

      function selectedText(coords) {
        return coords.map(function (coord) {
          return gridLetters[coord[0]][coord[1]];
        }).join("");
      }

      function updateProgress() {
        const total = answers.length;
        const found = foundIds.size;
        progressText.textContent = found + " de " + total + " encontradas";
        progressFill.style.width = ((found / total) * 100) + "%";
      }

      function markFound(answer) {
        foundIds.add(answer.id);

        answer.coords.forEach(function (coord) {
          const cell = getCell(coord[0], coord[1]);
          if (cell) cell.classList.add("found");
        });

        const clue = document.getElementById("clue-" + answer.id);
        if (clue) clue.classList.add("done");

        updateProgress();

        if (foundIds.size === answers.length) {
          statusEl.textContent = "Perfeito! Você encontrou todas as respostas de Omens of the Third Age.";
        } else {
          statusEl.textContent = "Correto! Resposta " + answer.id + " encontrada.";
        }
      }

      function showBadSelection() {
        currentSelection.forEach(function (coord) {
          const cell = getCell(coord[0], coord[1]);
          if (cell) {
            cell.classList.add("bad");
            setTimeout(function () {
              cell.classList.remove("bad");
            }, 380);
          }
        });
        statusEl.textContent = "Ainda não. Tente outra direção ou outra pista.";
      }

      function finishSelection() {
        if (!currentSelection.length) return;

        const answer = answerMap.get(coordKey(currentSelection));
        if (answer && !foundIds.has(answer.id)) {
          markFound(answer);
        } else if (answer && foundIds.has(answer.id)) {
          statusEl.textContent = "Essa resposta já foi encontrada.";
        } else {
          const text = selectedText(currentSelection);
          if (text.length > 1) showBadSelection();
        }

        setTimeout(clearSelecting, 120);
      }

      function resetGame() {
        hideSolutionOnGrid();
        foundIds = new Set();
        clearSelecting();
        document.querySelectorAll(".omens-wordsearch .cell.found").forEach(function (cell) {
          cell.classList.remove("found");
        });
        document.querySelectorAll(".omens-wordsearch .clue-list li.done").forEach(function (li) {
          li.classList.remove("done");
        });
        statusEl.textContent = "Selecione uma palavra na grade.";
        updateProgress();
      }

      gridEl.addEventListener("pointerdown", function (event) {
        const target = event.target;
        if (!target.classList.contains("cell")) return;

        selecting = true;
        startCell = target;
        gridEl.setPointerCapture(event.pointerId);
        highlightSelection([[Number(target.dataset.row), Number(target.dataset.col)]]);
        statusEl.textContent = "Continue arrastando em linha reta.";
      });

      gridEl.addEventListener("pointermove", function (event) {
        if (!selecting || !startCell) return;

        const target = getCellFromPoint(event.clientX, event.clientY);
        if (!target) return;

        const coords = makeLine(startCell, target);
        if (coords.length) {
          highlightSelection(coords);
        }
      });

      gridEl.addEventListener("pointerup", function (event) {
        if (!selecting) return;
        selecting = false;
        finishSelection();
        startCell = null;
        try {
          gridEl.releasePointerCapture(event.pointerId);
        } catch (e) {}
      });

      gridEl.addEventListener("pointercancel", function () {
        selecting = false;
        startCell = null;
        clearSelecting();
        statusEl.textContent = "Seleção cancelada.";
      });

      document.getElementById("omens-reset-button").addEventListener("click", resetGame);

      function getSaoPauloWeekday() {
        return new Intl.DateTimeFormat("en-US", {
          weekday: "short",
          timeZone: "America/Sao_Paulo"
        }).format(new Date());
      }

      function getSaoPauloDateTimeText() {
        return new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: "America/Sao_Paulo"
        }).format(new Date());
      }

      function isWeekendInSaoPaulo() {
        const weekday = getSaoPauloWeekday();
        return weekday === "Sat" || weekday === "Sun";
      }

      function renderAnswers() {
        const tbody = document.getElementById("omens-answer-table-body");
        tbody.innerHTML = "";

        answers.forEach(function (item) {
          const tr = document.createElement("tr");
          tr.innerHTML =
            "<td>" + item.word + "</td>" +
            "<td>" + item.start + "</td>" +
            "<td>" + item.end + "</td>" +
            "<td>" + item.direction + "</td>";
          tbody.appendChild(tr);
        });
      }

      function revealSolutionOnGrid() {
        const wrapper = document.querySelector(".omens-wordsearch");
        if (wrapper) wrapper.classList.add("solution-revealed");

        answers.forEach(function (answer) {
          answer.coords.forEach(function (coord) {
            const cell = getCell(coord[0], coord[1]);
            if (cell) {
              cell.classList.add("solution");
              cell.setAttribute("title", answer.word);
              cell.setAttribute("aria-label", cell.getAttribute("aria-label") + " — resposta: " + answer.word);
            }
          });

          const clue = document.getElementById("clue-" + answer.id);
          if (clue) clue.classList.add("done");
        });

        foundIds = new Set(answers.map(function (answer) {
          return answer.id;
        }));

        updateProgress();
        statusEl.textContent = "Gabarito liberado: todas as respostas estão destacadas na grade.";
      }

      function hideSolutionOnGrid() {
        const wrapper = document.querySelector(".omens-wordsearch");
        if (wrapper) wrapper.classList.remove("solution-revealed");

        document.querySelectorAll(".omens-wordsearch .cell.solution").forEach(function (cell) {
          cell.classList.remove("solution");
          cell.removeAttribute("title");
        });
      }

      function updateAnswerLock() {
        const unlocked = isWeekendInSaoPaulo();
        const lockedBox = document.getElementById("omens-locked-box");
        const answerBox = document.getElementById("omens-answer-box");
        const status = document.getElementById("omens-answer-status");
        const panel = document.getElementById("omens-answer-panel");
        const lockedMessage = document.getElementById("omens-locked-message");

        if (unlocked) {
          renderAnswers();
          revealSolutionOnGrid();
          lockedBox.classList.add("hidden");
          answerBox.classList.remove("hidden");
          status.textContent = "Liberado";
          panel.classList.remove("locked-print");
        } else {
          hideSolutionOnGrid();
          lockedBox.classList.remove("hidden");
          answerBox.classList.add("hidden");
          status.textContent = "Bloqueado";
          panel.classList.add("locked-print");
          lockedMessage.textContent = "O gabarito será liberado apenas no sábado e domingo, pelo horário de Brasília. Agora: " + getSaoPauloDateTimeText() + ".";
        }
      }

      document.getElementById("omens-check-answer-button").addEventListener("click", updateAnswerLock);
      updateProgress();
      updateAnswerLock();
    })();
  </script>
</div>
