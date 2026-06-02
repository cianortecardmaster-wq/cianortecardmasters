# Guia rápido — seção Atividades

A página pública fica em `/atividades/` e agora é alimentada pela coleção `_atividades/`, igual ao fluxo de Blog, Decks e Comunidade. Também existe uma vitrine na página `/ferramentas/`, usando os mesmos arquivos `.md` e os mesmos filtros automáticos.

## Como publicar uma atividade

1. Crie um arquivo `.md` dentro de `_atividades/`.
   - Exemplo: `_atividades/Flesh-and-Blood/caca-palavras-omens-of-the-third-age.md`
   - Exemplo: `_atividades/Pokemon/picross-pikachu.md`
   - Exemplo: `_atividades/Cianorte-Card-Masters/quiz-card-games-cianorte.md`
2. Preencha o front matter com `activity_type`, `game`, `difficulty`, `format`, `summary` e `description`.
3. Coloque o conteúdo da atividade abaixo do front matter. Pode ser Markdown, HTML, CSS e JS puro.
4. Use `published: true` para publicar. Use `published: false` para deixar como rascunho/modelo.

## Filtros automáticos

Os botões de filtro da página são criados pelo JavaScript usando os cards publicados.

- Para criar novo filtro de atividade, use um novo valor em `activity_type`, como `Color Picross`.
- Para criar novo filtro de jogo, use um novo valor em `game`, como `Pokémon TCG`, `Magic` ou `One Piece TCG`.

Não é necessário editar o HTML da página para cada nova atividade.

## Modelo de front matter

```yaml
---
layout: post
title: "Picross — Dash I/O"
category_label: "Picross"
activity_type: "Picross"
game: "Flesh and Blood"
difficulty: "Médio"
format: "HTML / JS"
content_style: "flesh-and-blood"
schema_type: "CreativeWork"
summary: "Picross temático de Mechanologist para jogar no celular."
description: "Picross de Flesh and Blood para a comunidade Cianorte Card Masters, jogável no navegador e leve para celular."
image: "/assets/img/banners/banner-ferramentas.webp"
image_alt: "Picross temático de Flesh and Blood."
author: "Cianorte Card Masters"
date: 2026-06-02
last_modified_at: 2026-06-02
tags:
  - Flesh and Blood
  - Picross
published: true
---
```

## Campos principais

- `activity_type`: cria o filtro por atividade. Exemplos: `Caça-palavras`, `Palavras Cruzadas`, `Quiz`, `Picross`, `Color Picross`.
- `game`: cria o filtro por jogo. Exemplos: `Flesh and Blood`, `Pokémon TCG`, `Magic`, `One Piece TCG`, `RPG`.
- `content_style`: define a cor/estilo do card. Exemplos: `flesh-and-blood`, `pokemon`, `magic`, `tcg`, `rpg`, `cianorte-card-master`.
- `difficulty`: aparece no card.
- `format`: aparece no card.
- `summary`: resumo curto do card.
- `description`: descrição SEO da página.

## Modelos prontos

Existem modelos com `published: false` em:

- `_atividades/Modelos/modelo-atividade.md`
- `_atividades/Flesh-and-Blood/modelo-picross-fab.md`
