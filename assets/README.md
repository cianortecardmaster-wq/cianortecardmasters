# Organização da pasta `assets`

- `assets/css/styles.css`: arquivo fonte editável do CSS global.
- `assets/css/styles.min.css`: arquivo minificado carregado pelo layout do site.
- `assets/js/main.js`, `card-apis-global.js`, `spikes.js`, `community.js`: fontes JS editáveis por assunto.
- `assets/js/site.min.js`: JS minificado e combinado carregado pelo layout do site.
- `assets/img/banners/`: banners principais das páginas.
- `assets/img/fab-heroes/`: imagens locais dos heróis FAB em padrão slug minúsculo, sem espaços e sem vírgulas.
- `assets/img/fab-heroes/young/`: badges dos heróis Young usados automaticamente em resultados Silver Age, Blitz e Young.
- `assets/data/spikes.json`: cache estático das cartas em alta, atualizado pelo workflow.

Ao editar CSS/JS, edite os arquivos fonte e gere novamente os minificados antes de publicar.
