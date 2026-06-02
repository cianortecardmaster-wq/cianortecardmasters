# Guia rápido — seção Atividades

A página pública fica em `/atividades/` e é alimentada pelo arquivo `_data/atividades.yml`. Também existe uma vitrine na página `/ferramentas/`, usando os mesmos dados e os mesmos filtros automáticos.

## Como publicar uma atividade

1. Crie a página HTML, PDF ou arquivo da atividade.
   - HTML jogável: use uma pasta dentro de `/atividades/`, por exemplo `/atividades/picross-dash-io/index.html`.
   - PDF/imagem: salve em uma pasta própria, por exemplo `/atividades/arquivos/`.
2. Abra `_data/atividades.yml`.
3. Copie um bloco de exemplo.
4. Preencha:
   - `title`
   - `description`
   - `tipo`
   - `jogo`
   - `difficulty`
   - `format`
   - `url` e/ou `download_url`
5. Troque `published: false` para `published: true`.

## Filtros automáticos

Os botões de filtro da página são criados pelo JavaScript usando os cards publicados.

- Para criar novo filtro de atividade, use um novo valor em `tipo`, como `Color Picross`.
- Para criar novo filtro de jogo, use um novo valor em `jogo`, como `Pokémon TCG` ou `Magic`.

Não é necessário editar o HTML da página para cada nova atividade.

## Exemplo publicado

```yml
- title: "Picross — Dash I/O"
  description: "Picross temático de Mechanologist para jogar no celular."
  tipo: "Picross"
  jogo: "Flesh and Blood"
  difficulty: "Médio"
  format: "HTML / JS"
  date: 2026-06-02
  url: "/atividades/picross-dash-io/"
  download_url: ""
  published: true
```
