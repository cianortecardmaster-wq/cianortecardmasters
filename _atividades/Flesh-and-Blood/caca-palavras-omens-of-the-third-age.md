---
layout: post
title: "Caça-palavras Omens of the Third Age: desafio difícil de Flesh and Blood"
category_label: "Caça-palavras"
activity_type: "Caça-palavras"
game: "Flesh and Blood"
difficulty: "Difícil"
format: "HTML / imprimível"
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
      --locked: #f7f7f7;
    }

    .omens-wordsearch * {
      box-sizing: border-box;
    }

    .omens-wordsearch {
      margin: 0;
      background: #e9e9e9;
      color: var(--ink);
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.45;
      padding: 1px 0 28px;
    }

    .omens-wordsearch .page {
      max-width: 980px;
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
    .omens-wordsearch .omens-wordsearch header::after {
      content: "";
      position: absolute;
      top: 10px;
      bottom: 10px;
      width: 8px;
      background: repeating-linear-gradient(
        to bottom,
        #000 0,
        #000 8px,
        transparent 8px,
        transparent 14px
      );
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
    }

    .omens-wordsearch .box p {
      margin: 0;
      color: #222;
      font-size: 14px;
    }

    .omens-wordsearch .meta {
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
    }

    .omens-wordsearch .grid-wrap {
      display: flex;
      justify-content: center;
      margin: 26px 0 28px;
    }

    .omens-wordsearch table.word-grid {
      border-collapse: collapse;
      border: 3px solid #000;
      table-layout: fixed;
      background: #fff;
    }

    .omens-wordsearch .word-grid td {
      width: 36px;
      height: 36px;
      border: 1px solid #222;
      text-align: center;
      vertical-align: middle;
      font-weight: 800;
      font-size: 20px;
      font-family: "Courier New", Courier, monospace;
      user-select: none;
    }

    .omens-wordsearch .clues {
      margin-top: 14px;
    }

    .omens-wordsearch .clues h2 {
      font-size: 22px;
      margin: 0 0 12px;
      border-bottom: 3px solid #000;
      padding-bottom: 6px;
      text-transform: uppercase;
    }

    .omens-wordsearch .clue-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 18px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .omens-wordsearch .clue-list li {
      border: 1px solid #222;
      padding: 10px 12px 10px 44px;
      min-height: 88px;
      position: relative;
      font-size: 14px;
      background: #fff;
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

    .omens-wordsearch .controls {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin: 22px 0;
      flex-wrap: wrap;
    }

    .omens-wordsearch button {
      border: 2px solid #000;
      background: #000;
      color: #fff;
      padding: 10px 16px;
      font-weight: 800;
      text-transform: uppercase;
      cursor: pointer;
      letter-spacing: .03em;
    }

    .omens-wordsearch button.secondary {
      background: #fff;
      color: #000;
    }

    .omens-wordsearch .answer-panel {
      border: 3px solid #000;
      margin-top: 24px;
      background: #fff;
    }

    .answer-.omens-wordsearch header {
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

    @media (max-width: 760px) {
      .omens-wordsearch .page {
        margin: 0;
        border: none;
        padding: 18px;
      }

      .intro,
      .omens-wordsearch .clue-list {
        grid-template-columns: 1fr;
      }

      .omens-wordsearch .word-grid td {
        width: 28px;
        height: 28px;
        font-size: 16px;
      }
    }

    @media print {

    .omens-wordsearch {
      margin: 0;
      background: #e9e9e9;
      color: var(--ink);
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.45;
      padding: 1px 0 28px;
    }

      .omens-wordsearch .page {
        margin: 0;
        max-width: none;
        box-shadow: none;
        border: none;
        padding: 14mm;
      }

      .omens-wordsearch .controls {
        display: none;
      }

      .omens-wordsearch .word-grid td {
        width: 31px;
        height: 31px;
        font-size: 18px;
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
      <h1>Caça-palavras difícil</h1>
      <p class="subtitle">Tema: Omens of the Third Age • Grade 15x15 • Estilo revista Coquetel</p>
    </header>

    <section class="intro">
      <div class="box">
        <h2>Instruções</h2>
        <p>Encontre as respostas das dicas na grade. As palavras podem estar na horizontal, vertical ou diagonal, em sentido normal ou invertido. Algumas respostas se cruzam e outras estão escondidas entre letras muito parecidas.</p>
      </div>

      <div class="box meta">
        <h2>Desafio</h2>
        <ul>
          <li>12 respostas escondidas.</li>
          <li>Sem lista direta de palavras.</li>
          <li>Uma resposta de 14 letras e várias médias.</li>
          <li>Gabarito liberado apenas no fim de semana.</li>
        </ul>
      </div>
    </section>

    <section class="box seo-local" aria-label="Texto SEO local">
      <h2>Atividade de Flesh and Blood em Cianorte</h2>
      <p><strong>Caça-palavras de Flesh and Blood para Cianorte e região:</strong> este desafio foi criado para a comunidade Cianorte Card Masters, reunindo jogadores de card games, RPG e cultura geek em uma atividade temática de <em>Omens of the Third Age</em>. O material pode ser usado em encontros locais, torneios, eventos de loja, oficinas e posts do blog para aproximar novos jogadores do universo de Rathe, com pistas sobre heróis, keywords, lugares e cartas da coleção.</p>
    </section>

    <section class="grid-wrap" aria-label="Grade do caça-palavras">
      <table class="word-grid">
        <tbody>
          <tr>
            <td>Z</td>
            <td>Q</td>
            <td>E</td>
            <td>F</td>
            <td>O</td>
            <td>C</td>
            <td>U</td>
            <td>D</td>
            <td>J</td>
            <td>K</td>
            <td>I</td>
            <td>W</td>
            <td>V</td>
            <td>Y</td>
            <td>O</td>
          </tr>
          <tr>
            <td>T</td>
            <td>R</td>
            <td>W</td>
            <td>A</td>
            <td>G</td>
            <td>N</td>
            <td>B</td>
            <td>A</td>
            <td>A</td>
            <td>L</td>
            <td>G</td>
            <td>H</td>
            <td>O</td>
            <td>R</td>
            <td>M</td>
          </tr>
          <tr>
            <td>Y</td>
            <td>H</td>
            <td>V</td>
            <td>O</td>
            <td>P</td>
            <td>F</td>
            <td>Y</td>
            <td>O</td>
            <td>L</td>
            <td>E</td>
            <td>O</td>
            <td>M</td>
            <td>I</td>
            <td>W</td>
            <td>E</td>
          </tr>
          <tr>
            <td>J</td>
            <td>M</td>
            <td>G</td>
            <td>B</td>
            <td>L</td>
            <td>T</td>
            <td>V</td>
            <td>U</td>
            <td>Q</td>
            <td>F</td>
            <td>V</td>
            <td>L</td>
            <td>A</td>
            <td>Q</td>
            <td>N</td>
          </tr>
          <tr>
            <td>U</td>
            <td>L</td>
            <td>G</td>
            <td>I</td>
            <td>R</td>
            <td>F</td>
            <td>S</td>
            <td>Y</td>
            <td>S</td>
            <td>N</td>
            <td>T</td>
            <td>J</td>
            <td>B</td>
            <td>Y</td>
            <td>S</td>
          </tr>
          <tr>
            <td>Q</td>
            <td>B</td>
            <td>U</td>
            <td>I</td>
            <td>L</td>
            <td>I</td>
            <td>G</td>
            <td>Q</td>
            <td>O</td>
            <td>S</td>
            <td>C</td>
            <td>I</td>
            <td>L</td>
            <td>I</td>
            <td>O</td>
          </tr>
          <tr>
            <td>E</td>
            <td>A</td>
            <td>U</td>
            <td>R</td>
            <td>O</td>
            <td>R</td>
            <td>A</td>
            <td>N</td>
            <td>J</td>
            <td>E</td>
            <td>B</td>
            <td>B</td>
            <td>S</td>
            <td>V</td>
            <td>F</td>
          </tr>
          <tr>
            <td>T</td>
            <td>C</td>
            <td>E</td>
            <td>N</td>
            <td>G</td>
            <td>S</td>
            <td>A</td>
            <td>U</td>
            <td>I</td>
            <td>Y</td>
            <td>F</td>
            <td>I</td>
            <td>U</td>
            <td>G</td>
            <td>A</td>
          </tr>
          <tr>
            <td>S</td>
            <td>S</td>
            <td>I</td>
            <td>I</td>
            <td>L</td>
            <td>U</td>
            <td>V</td>
            <td>T</td>
            <td>R</td>
            <td>N</td>
            <td>G</td>
            <td>V</td>
            <td>M</td>
            <td>D</td>
            <td>R</td>
          </tr>
          <tr>
            <td>U</td>
            <td>S</td>
            <td>E</td>
            <td>X</td>
            <td>H</td>
            <td>L</td>
            <td>M</td>
            <td>U</td>
            <td>S</td>
            <td>I</td>
            <td>T</td>
            <td>I</td>
            <td>I</td>
            <td>N</td>
            <td>C</td>
          </tr>
          <tr>
            <td>T</td>
            <td>B</td>
            <td>H</td>
            <td>P</td>
            <td>A</td>
            <td>U</td>
            <td>S</td>
            <td>G</td>
            <td>L</td>
            <td>Y</td>
            <td>C</td>
            <td>H</td>
            <td>Q</td>
            <td>K</td>
            <td>A</td>
          </tr>
          <tr>
            <td>U</td>
            <td>J</td>
            <td>Z</td>
            <td>R</td>
            <td>M</td>
            <td>B</td>
            <td>N</td>
            <td>P</td>
            <td>R</td>
            <td>K</td>
            <td>G</td>
            <td>K</td>
            <td>G</td>
            <td>B</td>
            <td>N</td>
          </tr>
          <tr>
            <td>F</td>
            <td>W</td>
            <td>T</td>
            <td>W</td>
            <td>K</td>
            <td>E</td>
            <td>Z</td>
            <td>N</td>
            <td>Q</td>
            <td>Q</td>
            <td>Z</td>
            <td>G</td>
            <td>E</td>
            <td>I</td>
            <td>A</td>
          </tr>
          <tr>
            <td>G</td>
            <td>S</td>
            <td>K</td>
            <td>D</td>
            <td>H</td>
            <td>N</td>
            <td>T</td>
            <td>M</td>
            <td>K</td>
            <td>F</td>
            <td>S</td>
            <td>T</td>
            <td>Y</td>
            <td>E</td>
            <td>L</td>
          </tr>
          <tr>
            <td>A</td>
            <td>G</td>
            <td>B</td>
            <td>O</td>
            <td>E</td>
            <td>K</td>
            <td>D</td>
            <td>P</td>
            <td>C</td>
            <td>E</td>
            <td>W</td>
            <td>C</td>
            <td>Z</td>
            <td>Z</td>
            <td>P</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="clues">
      <h2>Dicas difíceis</h2>
      <ol class="clue-list">
        <li data-number="1">A estrela mais excêntrica do trio: ligada à ilusão, ao brilho e à primeira grande presença desse arquétipo elétrico na coleção.</li>
        <li data-number="2">Recurso/token que parece pequeno, mas dita ritmo, conversão e ameaças no limitado da coleção.</li>
        <li data-number="3">A macro que paira sobre a partida como presságio arcano, antes mesmo das cartas comuns começarem a resolver o jogo.</li>
        <li data-number="4">Fenda associada ao cenário da busca: um lugar que soa como ruptura cósmica e abriga o caminho para o poder oculto.</li>
        <li data-number="5">Classe de truques, espectros e ameaças difíceis de avaliar; em Omens, recebe um brilho elétrico especial.</li>
        <li data-number="6">Fortaleza ou refúgio dourado dentro da fenda, procurado por quem tenta entender os presságios da Terceira Era.</li>
        <li data-number="7">Nome sombrio que carrega a ideia de fim; soa como entidade ou presságio maior do que uma simples carta.</li>
        <li data-number="8">Palavra que resume clima, herança e energia: quando aparece, quase sempre indica que o raio não vem sozinho.</li>
        <li data-number="9">Mago elétrico que retorna em nova forma, mais ligado ao cálculo arcano do que à pancadaria direta.</li>
        <li data-number="10">Heroína relâmpago que voltou ao centro da narrativa, agora cercada por sinais de destino e fluxo elétrico.</li>
        <li data-number="11">Termo associado ao céu, estrelas e magia superior; combina bem com fluxo, ponte e presságios arcanos.</li>
        <li data-number="12">Sinal mágico condensado: aparece em nomes de cartas e sugere proteção, feitiço preparado ou marca arcana.</li>
      </ol>
    </section>

    <div class="controls">
      <button onclick="window.print()">Imprimir</button>
      <button class="secondary" id="check-answer-button" type="button">Verificar liberação do gabarito</button>
    </div>

    <section class="answer-panel locked-print" id="answer-panel">
      <div class="answer-header">
        <span>Gabarito do organizador</span>
        <span id="answer-status">Bloqueado</span>
      </div>

      <div class="answer-content">
        <div class="locked-box" id="locked-box">
          <strong>Gabarito bloqueado</strong>
          <p id="locked-message">O gabarito será liberado apenas no sábado e domingo, pelo horário de Brasília.</p>
        </div>

        <div id="answer-box" class="hidden">
          <table class="answer-table">
            <thead>
              <tr>
                <th>Resposta</th>
                <th>Início</th>
                <th>Fim</th>
                <th>Direção</th>
              </tr>
            </thead>
            <tbody id="answer-table-body"></tbody>
          </table>
          <p class="note">Gabarito liberado automaticamente porque hoje é sábado ou domingo no horário de Brasília.</p>
        </div>
      </div>
    </section>

    <footer>
      Material criado para atividade temática de Flesh and Blood — Omens of the Third Age • Cianorte Card Masters • Card games em Cianorte – PR.
    </footer>
  </main>

  <script>
    const encodedAnswers = "W3sicmVzcG9zdGEiOiAiWllHR1lTVEFSTElHSFQiLCAiaW5pY2lvIjogIkwxNSBDMTQiLCAiZmltIjogIkwyIEMxIiwgImRpcmVjYW8iOiAiZGlhZ29uYWwgaW52ZXJ0aWRvIOKGliJ9LCB7InJlc3Bvc3RhIjogIkxJR0hUTklOR0ZMT1ciLCAiaW5pY2lvIjogIkwxNCBDMTUiLCAiZmltIjogIkwyIEMzIiwgImRpcmVjYW8iOiAiZGlhZ29uYWwgaW52ZXJ0aWRvIOKGliJ9LCB7InJlc3Bvc3RhIjogIk9NRU5TT0ZBUkNBTkEiLCAiaW5pY2lvIjogIkwxIEMxNSIsICJmaW0iOiAiTDEzIEMxNSIsICJkaXJlY2FvIjogInZlcnRpY2FsIG5vcm1hbCDihpMifSwgeyJyZXNwb3N0YSI6ICJORUJVTFVTUklGVCIsICJpbmljaW8iOiAiTDE0IEM2IiwgImZpbSI6ICJMNCBDNiIsICJkaXJlY2FvIjogInZlcnRpY2FsIGludmVydGlkbyDihpEifSwgeyJyZXNwb3N0YSI6ICJJTExVU0lPTklTVCIsICJpbmljaW8iOiAiTDEgQzExIiwgImZpbSI6ICJMMTEgQzEiLCAiZGlyZWNhbyI6ICJkaWFnb25hbCBub3JtYWwg4oaZIn0sIHsicmVzcG9zdGEiOiAiQVVSSUNLRUVQIiwgImluaWNpbyI6ICJMNyBDNyIsICJmaW0iOiAiTDE1IEMxNSIsICJkaXJlY2FvIjogImRpYWdvbmFsIG5vcm1hbCDihpgifSwgeyJyZXNwb3N0YSI6ICJCQUFMR0hPUiIsICJpbmljaW8iOiAiTDIgQzciLCAiZmltIjogIkwyIEMxNCIsICJkaXJlY2FvIjogImhvcml6b250YWwgbm9ybWFsIOKGkiJ9LCB7InJlc3Bvc3RhIjogIlRFTVBFU1QiLCAiaW5pY2lvIjogIkwxNCBDNyIsICJmaW0iOiAiTDggQzEiLCAiZGlyZWNhbyI6ICJkaWFnb25hbCBpbnZlcnRpZG8g4oaWIn0sIHsicmVzcG9zdGEiOiAiT1NDSUxJTyIsICJpbmljaW8iOiAiTDYgQzkiLCAiZmltIjogIkw2IEMxNSIsICJkaXJlY2FvIjogImhvcml6b250YWwgbm9ybWFsIOKGkiJ9LCB7InJlc3Bvc3RhIjogIkFVUk9SQSIsICJpbmljaW8iOiAiTDcgQzIiLCAiZmltIjogIkw3IEM3IiwgImRpcmVjYW8iOiAiaG9yaXpvbnRhbCBub3JtYWwg4oaSIn0sIHsicmVzcG9zdGEiOiAiQVNUUkFMIiwgImluaWNpbyI6ICJMMTUgQzEiLCAiZmltIjogIkwxMCBDNiIsICJkaXJlY2FvIjogImRpYWdvbmFsIGludmVydGlkbyDihpcifSwgeyJyZXNwb3N0YSI6ICJTSUdJTCIsICJpbmljaW8iOiAiTDcgQzEzIiwgImZpbSI6ICJMMTEgQzkiLCAiZGlyZWNhbyI6ICJkaWFnb25hbCBub3JtYWwg4oaZIn1d";

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

    function decodeAnswers() {
      const binary = atob(encodedAnswers);
      const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
      return JSON.parse(new TextDecoder("utf-8").decode(bytes));
    }

    function renderAnswers() {
      const tbody = document.getElementById("answer-table-body");
      tbody.innerHTML = "";

      decodeAnswers().forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.resposta}</td>
          <td>${item.inicio}</td>
          <td>${item.fim}</td>
          <td>${item.direcao}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function updateAnswerLock() {
      const unlocked = isWeekendInSaoPaulo();
      const lockedBox = document.getElementById("locked-box");
      const answerBox = document.getElementById("answer-box");
      const status = document.getElementById("answer-status");
      const panel = document.getElementById("answer-panel");
      const lockedMessage = document.getElementById("locked-message");

      if (unlocked) {
        renderAnswers();
        lockedBox.classList.add("hidden");
        answerBox.classList.remove("hidden");
        status.textContent = "Liberado";
        panel.classList.remove("locked-print");
      } else {
        lockedBox.classList.remove("hidden");
        answerBox.classList.add("hidden");
        status.textContent = "Bloqueado";
        panel.classList.add("locked-print");
        lockedMessage.textContent = "O gabarito será liberado apenas no sábado e domingo, pelo horário de Brasília. Agora: " + getSaoPauloDateTimeText() + ".";
      }
    }

    document.getElementById("check-answer-button").addEventListener("click", updateAnswerLock);
    updateAnswerLock();
  </script>
</div>
