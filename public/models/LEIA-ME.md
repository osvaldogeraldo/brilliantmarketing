# Modelos 3D (.glb / .gltf)

Coloca aqui os teus ficheiros de modelos 3D, por exemplo:

```
public/models/stand-modular.glb
public/models/pavilhao-premium.glb
```

Depois abre `src/data.ts`, procura `models3d` e troca `src: null` pelo caminho:

```ts
src: '/models/stand-modular.glb',
```

O visualizador centra e escala o modelo automaticamente.

> Dica: exporta do Blender / 3ds Max / SketchUp em formato **glTF Binary (.glb)**
> com texturas embutidas. Mantém os ficheiros abaixo de ~15 MB para o site
> carregar rápido.
