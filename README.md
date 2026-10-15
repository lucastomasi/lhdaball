# LHDA-BALL (lhdaball.grok.me)

Clon temático de **DX-Ball** ambientado en el universo de *Los Herederos de Alberdi* (LHDA / Palandri).

## Estructura del proyecto

- `index.html`: Versión modular del juego web (carga `levels.json` y los clips de audio desde `sfx/`).
- `levels.json`: Catálogo de niveles clásicos de DX-Ball (fuente BorodinArt).
- `sfx/`: Clips de efectos de sonido originales de Palandri (re-cortados y normalizados a −1 dB).
- `sfx-board.html`: Tablero interactivo para testear y reproducir cada clip SFX.
- `lhdaball-standalone.html`: Versión empaquetada *single-file* autosuficiente (con todos los sprites y audios codificados en base64 para jugar offline o compartir en un solo archivo).
- `cumbialhda.mp3`: Banda sonora / tema principal.
