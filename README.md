# LHDA-BALL (lhdaball.grok.me)

Clon de **DX-Ball** con estética de billetes argentinos y sonidos de *Los Herederos de Alberdi*.

## Características

- **Motor de física:** 120 Hz de paso fijo (fixed timestep) y detección de colisiones por ejes separados (cero *tunneling* o atravesado de ladrillos).
- **Ladrillos temáticos:** Billetes de $100 Guanaco, $200 Ballena, $500 Yaguareté, $1.000 Hornero, $2.000 Carrillo/Ciervo y $20.000 Alberdi (acero irrompible).
- **Power-ups:** 19 poderes originales de DX-Ball (regla de Borodin: 1 cápsula en caída por vez).
- **Anti-atascos:** Algoritmo Flood-Fill BFS (`sealedCheck`) que detecta ladrillos inaccesibles y activa ZAP automático.
- **Audio Robótico:** Voces sintetizadas ("Ave · Palán · Ponzi") integradas con Web Audio API.
- **Música de fondo:** Soporte preparado para pista 8-bit (`bgm_8bit.mp3`) con bucle, atenuación y silenciador independiente.
- **Niveles:** 50 niveles clásicos (BorodinArt) cargados dinámicamente desde `levels.json` con fallback en memoria.
- **Controles táctiles y teclado:** Pointer Events con suavizado para smartphones, mouse y flechas/A-D.

## Estructura de archivos

- `index.html`: Versión web principal para producción (Canvas HiDPI, Retina y responsive).
- `lhdaball-standalone.html`: Versión portable *single-file* con assets en base64 para uso offline.
- `levels.json`: Definición de los 50 niveles de juego.
- `bgm_8bit.mp3`: Archivo de música chiptune 8-bit (a colocar en la raíz del proyecto).
- `sfx-board.html`: Tablero interactivo para reproducir y testear los efectos de sonido.
