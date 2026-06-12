# Vídeos (.mp4)

## Vídeo de fundo do banner (hero)

Coloca aqui o vídeo (ex.: `hero.mp4`) e em `src/data.ts` adiciona ao slide:

```ts
video: '/videos/hero.mp4',
```

O vídeo toca automaticamente em loop, sem som, atrás do texto do banner
(tem prioridade sobre `image`). Recomendado: 1080p, H.264, 10–20 s, < 8 MB.

## Vídeos de animação 3D

Coloca aqui os teus vídeos, por exemplo:

```
public/videos/walkthrough-techcorp.mp4
public/videos/pavilhao-energiamoz.mp4
```

Depois abre `src/data.ts`, procura `videos3d` e troca `src: null` pelo caminho:

```ts
src: '/videos/walkthrough-techcorp.mp4',
```

O cartão passa automaticamente de "Brevemente" para um leitor de vídeo.

> Dica: usa MP4 (H.264) em 1080p. Para vídeos longos considera alojar no
> YouTube/Vimeo e incorporar, para não pesar no site.
