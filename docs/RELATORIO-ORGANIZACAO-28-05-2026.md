# Relatório de organização — 28/05/2026

## O que foi feito

1. Arquivos de nota e relatórios antigos foram movidos da raiz para `docs/`, separados em `docs/guias/`, `docs/relatorios/` e `docs/manutencao/`.
2. Duplicados exatos foram removidos, mantendo um arquivo canônico.
3. O layout passou a carregar `assets/css/styles.min.css` em vez do CSS fonte completo.
4. Os quatro scripts públicos foram combinados em `assets/js/site.min.js` para reduzir requisições.
5. `docs/`, `scripts/` e `README-INSTRUCOES.md` foram adicionados ao `exclude` do Jekyll, evitando que documentação interna seja copiada para o site publicado.
6. Foram criados `docs/INDICE-DO-SITE.md` e `assets/README.md` para facilitar buscas futuras.

## Ganho de tamanho

- Duplicados removidos: 69 arquivo(s), aproximadamente 3.05 MB.
- CSS fonte: 236.1 KB → CSS minificado: 192.6 KB.
- JS fonte total: 88.3 KB em 4 arquivos → JS combinado: 88.4 KB em 1 arquivo.

## Arquivos de nota movidos

- `GUIA-HEROIS-DA-COMUNIDADE.md` → `docs/guias/GUIA-HEROIS-DA-COMUNIDADE.md`
- `GUIA-IMAGENS-API-POSTS.md` → `docs/guias/GUIA-IMAGENS-API-POSTS.md`
- `LEIA-ANTES-DE-SUBIR.txt` → `docs/manutencao/LEIA-ANTES-DE-SUBIR.txt`
- `RELATORIO-AGENDA-HOME-20-05-2026.md` → `docs/relatorios/RELATORIO-AGENDA-HOME-20-05-2026.md`
- `RELATORIO-AJUSTES-IMAGENS-AGENDA-SPIKES-20-05-2026.md` → `docs/relatorios/RELATORIO-AJUSTES-IMAGENS-AGENDA-SPIKES-20-05-2026.md`
- `RELATORIO-ALTERACOES-20-05-2026.md` → `docs/relatorios/RELATORIO-ALTERACOES-20-05-2026.md`
- `RELATORIO-BLOCO-ARMORY-COMUNIDADE-21-05-2026.md` → `docs/relatorios/RELATORIO-BLOCO-ARMORY-COMUNIDADE-21-05-2026.md`
- `RELATORIO-BLOCO-LIGA-COMUNIDADE-23-05-2026.md` → `docs/relatorios/RELATORIO-BLOCO-LIGA-COMUNIDADE-23-05-2026.md`
- `RELATORIO-CORRECAO-IMAGENS-HOME-BLOG-20-05-2026.md` → `docs/relatorios/RELATORIO-CORRECAO-IMAGENS-HOME-BLOG-20-05-2026.md`
- `RELATORIO-CORRECAO-LOG-SPIKES.txt` → `docs/relatorios/RELATORIO-CORRECAO-LOG-SPIKES.txt`
- `RELATORIO-CORRECAO-SPIKES-9-CARTAS-20-05-2026.md` → `docs/relatorios/RELATORIO-CORRECAO-SPIKES-9-CARTAS-20-05-2026.md`
- `RELATORIO-CORRECAO-SPIKES.txt` → `docs/relatorios/RELATORIO-CORRECAO-SPIKES.txt`
- `RELATORIO-CORRECAO.txt` → `docs/relatorios/RELATORIO-CORRECAO.txt`
- `RELATORIO-DECKLIST-LINKS-INTERNOS-22-05-2026.md` → `docs/relatorios/RELATORIO-DECKLIST-LINKS-INTERNOS-22-05-2026.md`
- `RELATORIO-GUIA-PARA-LERDOS-20-05-2026.txt` → `docs/relatorios/RELATORIO-GUIA-PARA-LERDOS-20-05-2026.txt`
- `RELATORIO-GUIA-PARA-LERDOS-SEO-22-05-2026.md` → `docs/relatorios/RELATORIO-GUIA-PARA-LERDOS-SEO-22-05-2026.md`
- `RELATORIO-HOME-SPIKES-20-05-2026.md` → `docs/relatorios/RELATORIO-HOME-SPIKES-20-05-2026.md`
- `RELATORIO-SPIKES-TCGCSV-20-05-2026.md` → `docs/relatorios/RELATORIO-SPIKES-TCGCSV-20-05-2026.md`

## Duplicados removidos

- Removido `assets/img/banners/banner-liga-prefeitura-flesh-and-blood.png`; mantido `assets/img/banners/banner-liga-fab-resultado.png` (510.2 KB).
- Removido `assets/img/fab-heroes/Hala, Bladesaint of the Vow.webp`; mantido `assets/img/fab-heroes/hala-bladesaint-of-the-vow.webp` (492.1 KB).
- Removido `assets/img/banner-home.webp`; mantido `assets/img/banners/banner-home.webp` (248.7 KB).
- Removido `assets/img/fab-heroes/Kayo, Berserker Runt.png`; mantido `assets/img/fab-heroes/kayo-berserker-runt.png` (183.7 KB).
- Removido `assets/img/banners/banner-resultados.webp`; mantido `assets/img/banners/banner-ferramentas.webp` (105.4 KB).
- Removido `assets/img/banners/banner-resultados-mobile.webp`; mantido `assets/img/banners/banner-ferramentas-mobile.webp` (78.4 KB).
- Removido `assets/img/fab-heroes/Oscilio, Constella Intelligence.webp`; mantido `assets/img/fab-heroes/oscilio-constella-intelligence.webp` (45.0 KB).
- Removido `assets/img/fab-heroes/Emperor, Dracai of Aesir.webp`; mantido `assets/img/fab-heroes/emperor-dracai-of-aesir.webp` (43.3 KB).
- Removido `assets/img/fab-heroes/Data Doll MKII.webp`; mantido `assets/img/fab-heroes/data-doll-mkii.webp` (36.5 KB).
- Removido `assets/img/fab-heroes/Aurora, Shooting Star.webp`; mantido `assets/img/fab-heroes/aurora-shooting-star.webp` (35.0 KB).
- Removido `assets/img/fab-heroes/Nuu, Alluring Desire.webp`; mantido `assets/img/fab-heroes/nuu-alluring-desire.webp` (34.2 KB).
- Removido `assets/img/fab-heroes/Lexi, Livewire.webp`; mantido `assets/img/fab-heroes/lexi-livewire.webp` (31.8 KB).
- Removido `assets/img/fab-heroes/Gravy Bones, Shipwrecked Looter.webp`; mantido `assets/img/fab-heroes/gravy-bones-shipwrecked-looter.webp` (31.2 KB).
- Removido `assets/img/fab-heroes/Jarl Vetreidi.webp`; mantido `assets/img/fab-heroes/jarl-vetreidi.webp` (31.0 KB).
- Removido `assets/img/fab-heroes/Kayo, Armed and Dangerous.webp`; mantido `assets/img/fab-heroes/kayo-armed-and-dangerous.webp` (30.7 KB).
- Removido `assets/img/fab-heroes/Maxx 'The Hype' Nitro.webp`; mantido `assets/img/fab-heroes/maxx-the-hype-nitro.webp` (30.2 KB).
- Removido `assets/img/fab-heroes/Rhinar, Reckless Rampage.webp`; mantido `assets/img/fab-heroes/rhinar-reckless-rampage.webp` (29.4 KB).
- Removido `assets/img/fab-heroes/Vynnset, Iron Maiden.webp`; mantido `assets/img/fab-heroes/vynnset-iron-maiden.webp` (29.4 KB).
- Removido `assets/img/fab-heroes/Dash I-O.webp`; mantido `assets/img/fab-heroes/dash-i-o.webp` (28.9 KB).
- Removido `assets/img/fab-heroes/Enigma, Ledger of Ancestry.webp`; mantido `assets/img/fab-heroes/enigma-ledger-of-ancestry.webp` (28.5 KB).
- Removido `assets/img/fab-heroes/Ira, Scarlet Revenger.webp`; mantido `assets/img/fab-heroes/ira-scarlet-revenger.webp` (28.4 KB).
- Removido `assets/img/fab-heroes/Bravo, Flattering Showman.webp`; mantido `assets/img/fab-heroes/bravo-flattering-showman.webp` (27.8 KB).
- Removido `assets/img/fab-heroes/Prism, Sculptor of Arc Light.webp`; mantido `assets/img/fab-heroes/prism-sculptor-of-arc-light.webp` (27.3 KB).
- Removido `assets/img/fab-heroes/Melody, Sing-along.webp`; mantido `assets/img/fab-heroes/melody-sing-along.webp` (26.8 KB).
- Removido `assets/img/fab-heroes/Brevant, Civic Protector.webp`; mantido `assets/img/fab-heroes/brevant-civic-protector.webp` (26.8 KB).
- Removido `assets/img/fab-heroes/Valda, Seismic Impact.webp`; mantido `assets/img/fab-heroes/valda-seismic-impact.webp` (26.2 KB).
- Removido `assets/img/fab-heroes/Betsy, Skin in the Game.webp`; mantido `assets/img/fab-heroes/betsy-skin-in-the-game.webp` (26.1 KB).
- Removido `assets/img/fab-heroes/Cindra, Dracai of Retribution.webp`; mantido `assets/img/fab-heroes/cindra-dracai-of-retribution.webp` (25.9 KB).
- Removido `assets/img/fab-heroes/Oldhim, Grandfather of Eternity.webp`; mantido `assets/img/fab-heroes/oldhim-grandfather-of-eternity.webp` (25.7 KB).
- Removido `assets/img/fab-heroes/Pleiades, Superstar.webp`; mantido `assets/img/fab-heroes/pleiades-superstar.webp` (25.1 KB).
- Removido `assets/img/fab-heroes/Kayo, Underhanded Cheat.webp`; mantido `assets/img/fab-heroes/kayo-underhanded-cheat.webp` (24.9 KB).
- Removido `assets/img/fab-heroes/Bravo, Star of the Show.webp`; mantido `assets/img/fab-heroes/bravo-star-of-the-show.webp` (24.9 KB).
- Removido `assets/img/fab-heroes/Chane, Bound by Shadow.webp`; mantido `assets/img/fab-heroes/chane-bound-by-shadow.webp` (24.8 KB).
- Removido `assets/img/fab-heroes/Dromai, Ash Artist.webp`; mantido `assets/img/fab-heroes/dromai-ash-artist.webp` (23.8 KB).
- Removido `assets/img/fab-heroes/Scurv, Stowaway.webp`; mantido `assets/img/fab-heroes/scurv-stowaway.webp` (23.7 KB).
- Removido `assets/img/fab-heroes/Fang, Dracai of Blades.webp`; mantido `assets/img/fab-heroes/fang-dracai-of-blades.webp` (23.0 KB).
- Removido `assets/img/fab-heroes/Lyath Goldmane.webp`; mantido `assets/img/fab-heroes/lyath-goldmane.webp` (22.9 KB).
- Removido `assets/img/fab-heroes/Dash, Inventor Extraordinaire.webp`; mantido `assets/img/fab-heroes/dash-inventor-extraordinaire.webp` (22.9 KB).
- Removido `assets/img/fab-heroes/Genis Wotchuneed.webp`; mantido `assets/img/fab-heroes/genis-wotchuneed.webp` (22.1 KB).
- Removido `assets/img/fab-heroes/Viserai, Rune Blood.webp`; mantido `assets/img/fab-heroes/viserai-rune-blood.webp` (22.1 KB).
- Removido `assets/img/fab-heroes/Katsu, the Wanderer.webp`; mantido `assets/img/fab-heroes/katsu-the-wanderer.webp` (22.0 KB).
- Removido `assets/img/fab-heroes/Marlynn, Treasure Hunter.webp`; mantido `assets/img/fab-heroes/marlynn-treasure-hunter.webp` (21.9 KB).
- Removido `assets/img/fab-heroes/Frankie, Make Ends Meat.webp`; mantido `assets/img/fab-heroes/frankie-make-ends-meat.webp` (21.7 KB).
- Removido `assets/img/fab-heroes/Iyslander, Stormbind.webp`; mantido `assets/img/fab-heroes/iyslander-stormbind.webp` (21.7 KB).
- Removido `assets/img/fab-heroes/Florian, Rotwood Harbinger.webp`; mantido `assets/img/fab-heroes/florian-rotwood-harbinger.webp` (21.3 KB).
- Removido `assets/img/fab-heroes/Kassai of the Golden Sand.webp`; mantido `assets/img/fab-heroes/kassai-of-the-golden-sand.webp` (21.1 KB).
- Removido `assets/img/fab-heroes/Kano, Dracai of Aether.webp`; mantido `assets/img/fab-heroes/kano-dracai-of-aether.webp` (21.1 KB).
- Removido `assets/img/fab-heroes/Fai, Rising Rebellion.webp`; mantido `assets/img/fab-heroes/fai-rising-rebellion.webp` (21.0 KB).
- Removido `assets/img/fab-heroes/Levia, Shadowborn Abomination.webp`; mantido `assets/img/fab-heroes/levia-shadowborn-abomination.webp` (20.2 KB).
- Removido `assets/img/fab-heroes/Olympia, Prized Fighter.webp`; mantido `assets/img/fab-heroes/olympia-prized-fighter.webp` (20.1 KB).
- Removido `assets/img/fab-heroes/Shiyana, Diamond Gemini.webp`; mantido `assets/img/fab-heroes/shiyana-diamond-gemini.webp` (20.0 KB).
- Removido `assets/img/fab-heroes/Dorinthea Ironsong.webp`; mantido `assets/img/fab-heroes/dorinthea-ironsong.webp` (20.0 KB).
- Removido `assets/img/fab-heroes/Prism, Awakener of Sol.webp`; mantido `assets/img/fab-heroes/prism-awakener-of-sol.webp` (20.0 KB).
- Removido `assets/img/fab-heroes/Kassai, Cintari Sellsword.webp`; mantido `assets/img/fab-heroes/kassai-cintari-sellsword.webp` (19.9 KB).
- Removido `assets/img/fab-heroes/Benji, Piercing Wind.webp`; mantido `assets/img/fab-heroes/benji-piercing-wind.webp` (19.6 KB).
- Removido `assets/img/fab-heroes/Bravo, Showstopper.webp`; mantido `assets/img/fab-heroes/bravo-showstopper.webp` (19.4 KB).
- Removido `assets/img/fab-heroes/Teklovossen, Esteemed Magnate.webp`; mantido `assets/img/fab-heroes/teklovossen-esteemed-magnate.webp` (19.3 KB).
- Removido `assets/img/fab-heroes/Tuffnut, Bumbling Hulkster.webp`; mantido `assets/img/fab-heroes/tuffnut-bumbling-hulkster.webp` (18.7 KB).
- Removido `assets/img/fab-heroes/Blaze, Firemind.webp`; mantido `assets/img/fab-heroes/blaze-firemind.webp` (18.2 KB).
- Removido `assets/img/fab-heroes/Verdance, Thorn of the Rose.webp`; mantido `assets/img/fab-heroes/verdance-thorn-of-the-rose.webp` (17.8 KB).
- Removido `assets/img/fab-heroes/Azalea, Ace in the Hole.webp`; mantido `assets/img/fab-heroes/azalea-ace-in-the-hole.webp` (17.3 KB).
- Removido `assets/img/fab-heroes/Yoji, Royal Protector.webp`; mantido `assets/img/fab-heroes/yoji-royal-protector.webp` (17.1 KB).
- Removido `assets/img/fab-heroes/Riptide, Lurker of the Deep.webp`; mantido `assets/img/fab-heroes/riptide-lurker-of-the-deep.webp` (16.1 KB).
- Removido `assets/img/fab-heroes/Uzuri, Switchblade.webp`; mantido `assets/img/fab-heroes/uzuri-switchblade.webp` (15.8 KB).
- Removido `assets/img/fab-heroes/Kavdaen, Trader of Skins.webp`; mantido `assets/img/fab-heroes/kavdaen-trader-of-skins.webp` (14.6 KB).
- Removido `assets/img/fab-heroes/Ser Boltyn, Breaker of Dawn.webp`; mantido `assets/img/fab-heroes/ser-boltyn-breaker-of-dawn.webp` (14.3 KB).
- Removido `assets/img/fab-heroes/Oscilio, Forked Continuum.webp`; mantido `assets/img/fab-heroes/oscilio-forked-continuum.webp` (14.1 KB).
- Removido `assets/img/fab-heroes/Victor Goldmane, High and Mighty.webp`; mantido `assets/img/fab-heroes/victor-goldmane-high-and-mighty.webp` (14.0 KB).
- Removido `assets/img/fab-heroes/Zen, Tamer of Purpose.webp`; mantido `assets/img/fab-heroes/zen-tamer-of-purpose.webp` (11.7 KB).

## Observação importante

Os arquivos fonte `styles.css`, `main.js`, `card-apis-global.js`, `spikes.js` e `community.js` continuam no projeto para edição. O site publicado usa os arquivos de produção gerados a partir deles.
