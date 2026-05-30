# Ícones de heróis FAB

A página de Resultados busca badges locais dos heróis em `assets/img/fab-heroes/`.

## Formatos Classic Constructed / Living Legend

Use os retratos principais em slug minúsculo, sem espaços e sem vírgulas, por exemplo:

- `arakni-huntsman.webp`
- `pleiades-superstar.webp`
- `ira-scarlet-revenger.webp`
- `hala-bladesaint-of-the-vow.webp`

## Formatos Silver Age / Blitz / Young

Quando o front matter do resultado tiver `format: "Silver Age"`, `format: "Blitz"` ou algum formato contendo `Young`, o site troca automaticamente para os badges de heróis Young em:

```txt
assets/img/fab-heroes/young/
```

O mapa de equivalências fica em:

```txt
_data/fab_young_hero_badges.yml
```

Assim, se o resultado estiver em Silver Age e o herói estiver escrito como `Ira, Scarlet Revenger`, o site tenta usar automaticamente o badge Young equivalente `ira-crimson-haze.webp`.

Também é possível informar uma imagem manual em cada resultado do Markdown usando:

```yml
hero_icon: "/assets/img/fab-heroes/young/nome-do-heroi.webp"
```
