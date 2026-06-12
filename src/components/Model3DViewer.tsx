import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export type ViewerLabels = {
  loading: string
  error: string
  hint: string
}

const defaultLabels: ViewerLabels = {
  loading: 'A carregar modelo…',
  error: 'Não foi possível carregar o modelo. Verifica o ficheiro em /public/models.',
  hint: '↻ Arrasta para rodar · Scroll para zoom',
}

/**
 * Visualizador 3D interativo (rodar / zoom / arrastar).
 * - Com `src`: carrega o ficheiro .glb/.gltf de /public/models
 * - Sem `src`: mostra um stand de demonstração gerado proceduralmente
 */
export function Model3DViewer({
  src,
  accent = '#ff5c1a',
  labels = defaultLabels,
}: {
  src: string | null
  accent?: string
  labels?: ViewerLabels
}) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(!!src)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    setError(null)
    setLoading(!!src)

    // --- cena base ---
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#101013')
    scene.fog = new THREE.Fog('#101013', 18, 34)

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    )
    camera.position.set(7, 5, 9)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.1
    controls.minDistance = 4
    controls.maxDistance = 22
    controls.maxPolarAngle = Math.PI / 2.05
    controls.target.set(0, 1.4, 0)

    // --- iluminação ---
    scene.add(new THREE.AmbientLight('#ffffff', 0.45))

    const key = new THREE.DirectionalLight('#ffffff', 1.6)
    key.position.set(6, 10, 6)
    key.castShadow = true
    key.shadow.mapSize.set(2048, 2048)
    scene.add(key)

    const rim = new THREE.PointLight(accent, 30, 24)
    rim.position.set(-5, 4, -4)
    scene.add(rim)

    const fill = new THREE.PointLight('#c8ff2e', 12, 20)
    fill.position.set(4, 2.5, -6)
    scene.add(fill)

    // --- chão refletor ---
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(16, 64),
      new THREE.MeshStandardMaterial({ color: '#141417', roughness: 0.35, metalness: 0.6 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    const gridHelper = new THREE.GridHelper(32, 48, '#26262c', '#1b1b20')
    gridHelper.position.y = 0.01
    scene.add(gridHelper)

    // --- modelo: GLB ou stand de demonstração ---
    if (src) {
      const loader = new GLTFLoader()
      loader.load(
        src,
        (gltf) => {
          // centra e escala o modelo automaticamente
          const box = new THREE.Box3().setFromObject(gltf.scene)
          const size = box.getSize(new THREE.Vector3())
          const center = box.getCenter(new THREE.Vector3())
          const scale = 5 / Math.max(size.x, size.y, size.z)
          gltf.scene.scale.setScalar(scale)
          gltf.scene.position.sub(center.multiplyScalar(scale))
          gltf.scene.position.y += (size.y * scale) / 2
          gltf.scene.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.castShadow = true
              node.receiveShadow = true
            }
          })
          scene.add(gltf.scene)
          setLoading(false)
        },
        undefined,
        () => {
          setError(labels.error)
          setLoading(false)
        },
      )
    } else {
      buildDemoStand(scene, accent)
    }

    // --- loop de animação ---
    let raf = 0
    const t0 = performance.now()
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = (performance.now() - t0) / 1000
      rim.intensity = 26 + Math.sin(t * 1.8) * 8
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // --- resize ---
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      controls.dispose()
      scene.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.geometry.dispose()
          const mats = Array.isArray(node.material) ? node.material : [node.material]
          mats.forEach((m) => m.dispose())
        }
      })
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
    // labels.error só é usado no callback de erro — não precisa de reativar a cena
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, accent])

  return (
    <div className="viewer3d__canvas" ref={mountRef}>
      {loading && (
        <div className="viewer3d__status">
          <span className="viewer3d__spinner" /> {labels.loading}
        </div>
      )}
      {error && <div className="viewer3d__status viewer3d__status--error">{error}</div>}
      <div className="viewer3d__hint">{labels.hint}</div>
    </div>
  )
}

/** Stand de feira de demonstração, gerado proceduralmente. */
function buildDemoStand(scene: THREE.Scene, accent: string) {
  const group = new THREE.Group()

  const white = new THREE.MeshStandardMaterial({ color: '#e8e8e4', roughness: 0.55 })
  const dark = new THREE.MeshStandardMaterial({ color: '#1c1c21', roughness: 0.4, metalness: 0.3 })
  const brand = new THREE.MeshStandardMaterial({
    color: accent,
    roughness: 0.3,
    emissive: accent,
    emissiveIntensity: 0.25,
  })
  const lime = new THREE.MeshStandardMaterial({
    color: '#c8ff2e',
    emissive: '#c8ff2e',
    emissiveIntensity: 0.35,
  })

  const add = (mesh: THREE.Mesh) => {
    mesh.castShadow = true
    mesh.receiveShadow = true
    group.add(mesh)
  }

  // plataforma do stand
  const platform = new THREE.Mesh(new THREE.BoxGeometry(8, 0.18, 6), white)
  platform.position.y = 0.09
  add(platform)

  // parede de fundo
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(8, 3.4, 0.18), white)
  backWall.position.set(0, 1.88, -2.9)
  add(backWall)

  // painel de marca retroiluminado
  const brandPanel = new THREE.Mesh(new THREE.BoxGeometry(4.6, 1.4, 0.08), brand)
  brandPanel.position.set(0, 2.2, -2.78)
  add(brandPanel)

  // parede lateral com recorte
  const sideWall = new THREE.Mesh(new THREE.BoxGeometry(0.18, 3.4, 6), white)
  sideWall.position.set(-3.9, 1.88, 0)
  add(sideWall)

  const sideStripe = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.4, 1), lime)
  sideStripe.position.set(-3.82, 1.88, -1.2)
  add(sideStripe)

  // viga superior (truss)
  const beam = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.3, 0.3), dark)
  beam.position.set(0, 3.85, -1.4)
  add(beam)

  const beam2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 6.2), dark)
  beam2.position.set(-3.9, 3.85, 0)
  add(beam2)

  // balcão de atendimento
  const counter = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.05, 0.9), dark)
  counter.position.set(1.6, 0.7, 1.4)
  add(counter)

  const counterTop = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.08, 1.05), brand)
  counterTop.position.set(1.6, 1.27, 1.4)
  add(counterTop)

  // expositor cilíndrico
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.5, 1.1, 32), white)
  pedestal.position.set(-1.9, 0.73, 0.8)
  add(pedestal)

  const exhibit = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.3, 0.1, 96, 16),
    new THREE.MeshStandardMaterial({ color: accent, metalness: 0.8, roughness: 0.2 }),
  )
  exhibit.position.set(-1.9, 1.75, 0.8)
  add(exhibit)

  // letreiro vertical
  const totem = new THREE.Mesh(new THREE.BoxGeometry(0.5, 4.4, 0.5), dark)
  totem.position.set(3.6, 2.2, -2.4)
  add(totem)

  const totemLight = new THREE.Mesh(new THREE.BoxGeometry(0.54, 3, 0.1), lime)
  totemLight.position.set(3.6, 2.4, -2.12)
  add(totemLight)

  // poltronas (zona lounge)
  for (const x of [-2.6, -1.4]) {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.8), dark)
    seat.position.set(x, 0.4, 2)
    add(seat)
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.7, 0.15), dark)
    back.position.set(x, 0.9, 2.35)
    add(back)
  }

  // animação do objeto em exposição
  const t0 = performance.now()
  exhibit.onBeforeRender = () => {
    const t = (performance.now() - t0) / 1000
    exhibit.rotation.y = t * 0.8
    exhibit.rotation.x = Math.sin(t * 0.5) * 0.3
    exhibit.position.y = 1.75 + Math.sin(t * 1.4) * 0.08
  }

  scene.add(group)
}
