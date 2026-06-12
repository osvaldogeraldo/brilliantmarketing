# Vídeos de animação (.mp4)

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
