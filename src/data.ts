/* ============================================================
   BRILLIANTMARKETING — Conteúdo do site (PT / EN)
   Edita este ficheiro para alterar textos, projetos, equipa,
   artigos, vídeos e modelos 3D em ambos os idiomas.
   ============================================================ */

import {
  Megaphone,
  Rocket,
  Store,
  Sparkles,
  Clapperboard,
  Printer,
  Rotate3d,
  type LucideIcon,
} from 'lucide-react'
import type { Lang } from './i18n'

import imgRobotic from './assets/images/robotic.jpg'
import imgGear from './assets/images/female.jpg'
import imgLemon from './assets/images/lemon.webp'
import imgOrange from './assets/images/orange.webp'

export type HeroSlide = {
  tag: string
  title: { text: string; style: 'solid' | 'stroke' | 'accent' }[]
  sub: string
  primary: { label: string; to: string }
  ghost: { label: string; to: string }
  orbs: { color: string; top: string; left: string; size: number }[]
  image?: string
  /** Vídeo de fundo (.mp4 em /public/videos) — tem prioridade sobre image.
      Ex.: video: '/videos/hero.mp4' */
  video?: string
}

export type Service = {
  icon: LucideIcon
  title: string
  desc: string
  details: string[]
}

export type ProcessStep = { step: string; title: string; desc: string }

export type Project = {
  id: number
  title: string
  category: string
  desc: string
  client: string
  year: string
  gradient: string
  image?: string
  wide?: boolean
}

export type ProjectDetail = {
  challenge: string
  solution: string
  results: { value: string; label: string }[]
  tags: string[]
}

export type Model3D = {
  id: number
  title: string
  desc: string
  /** Caminho para o .glb em /public/models — null usa o modelo de demonstração */
  src: string | null
  accent: string
}

export type Video3D = {
  id: number
  title: string
  desc: string
  /** Caminho para o .mp4 em /public/videos — null mostra placeholder */
  src: string | null
  poster: string
  duration: string
}

export type CgiItem = {
  img: string
  title: string
  tag: string
}

export type TeamMember = {
  name: string
  role: string
  initials: string
  gradient: string
}

export type ValueItem = { title: string; desc: string }

export type Testimonial = {
  text: string
  author: string
  role: string
  initials: string
  gradient: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  icon: LucideIcon
  gradient: string
  body: { heading?: string; text: string }[]
}

export type Stat = { value: number; suffix: string; label: string }

export type ContactInfo = {
  address: string
  phone: string
  email: string
  hours: string
}

export type SiteContent = {
  heroSlides: HeroSlide[]
  services: Service[]
  process: ProcessStep[]
  projects: Project[]
  projectDetails: Record<number, ProjectDetail>
  projectCategories: string[]
  models3d: Model3D[]
  videos3d: Video3D[]
  cgiGallery: CgiItem[]
  team: TeamMember[]
  values: ValueItem[]
  testimonials: Testimonial[]
  clients: string[]
  posts: Post[]
  stats: Stat[]
  contactInfo: ContactInfo
}

/* ---------- elementos partilhados entre idiomas ---------- */

const orbsA = [
  { color: '#ff5c1a', top: '8%', left: '62%', size: 420 },
  { color: '#7c3aed', top: '55%', left: '82%', size: 300 },
]
const orbsB = [
  { color: '#c8ff2e', top: '12%', left: '70%', size: 360 },
  { color: '#ff5c1a', top: '60%', left: '55%', size: 280 },
]
const orbsC = [
  { color: '#0ea5e9', top: '15%', left: '58%', size: 380 },
  { color: '#ff5c1a', top: '50%', left: '80%', size: 320 },
]

const gradients = {
  orange: 'linear-gradient(135deg, #ff5c1a 0%, #7c2d12 100%)',
  blue: 'linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 100%)',
  lime: 'linear-gradient(135deg, #c8ff2e 0%, #365314 100%)',
  purple: 'linear-gradient(135deg, #7c3aed 0%, #2e1065 100%)',
  rose: 'linear-gradient(135deg, #f43f5e 0%, #4c0519 100%)',
  amber: 'linear-gradient(135deg, #fbbf24 0%, #78350f 100%)',
  duo: 'linear-gradient(135deg, #ff5c1a 0%, #c8ff2e 120%)',
  pink: 'linear-gradient(135deg, #ec4899 0%, #500724 100%)',
}

const clients = [
  'TechCorp', 'MozaPay', 'Banco Azul', 'Vodacom', 'EnergiaMoz',
  'Grupo Horizonte', 'Café Ribaué', 'FACIM',
]

/** Ficheiros 3D/vídeo — partilhados entre idiomas (muda aqui o src) */
const modelFiles = [
  { id: 1, src: null as string | null, accent: '#ff5c1a' }, // ex.: '/models/stand-modular.glb'
  { id: 2, src: null as string | null, accent: '#c8ff2e' }, // ex.: '/models/pavilhao-premium.glb'
  { id: 3, src: null as string | null, accent: '#0ea5e9' }, // ex.: '/models/quiosque.glb'
  { id: 4, src: null as string | null, accent: '#7c3aed' }, // ex.: '/models/stand-ilha.glb'
]

const videoFiles = [
  { id: 1, src: null as string | null, poster: gradients.orange, duration: '1:24' }, // ex.: '/videos/walkthrough-techcorp.mp4'
  { id: 2, src: null as string | null, poster: gradients.purple, duration: '2:10' },
  { id: 3, src: null as string | null, poster: gradients.lime, duration: '0:58' },
]

/* ============================================================
   PORTUGUÊS
   ============================================================ */

const pt: SiteContent = {
  heroSlides: [
    {
      tag: 'Agência Criativa 360°',
      title: [
        { text: 'Criamos', style: 'solid' },
        { text: 'marcas que', style: 'stroke' },
        { text: 'impactam', style: 'accent' },
      ],
      sub: 'Publicidade, marketing e ativação de marca com criatividade ao mais alto nível. Da estratégia à execução — nós fazemos acontecer.',
      primary: { label: 'Ver Portfólio', to: '/portfolio' },
      ghost: { label: 'Pedir Proposta', to: '/contacto' },
      orbs: orbsA,
      image: imgRobotic,
    },
    {
      tag: 'Stands & Produção 3D',
      title: [
        { text: 'Stands que', style: 'solid' },
        { text: 'param', style: 'accent' },
        { text: 'a feira', style: 'stroke' },
      ],
      sub: 'Desenho, produção e montagem de stands personalizados, aprovados em 3D antes de existirem. A sua marca em destaque nas maiores feiras.',
      primary: { label: 'Projetos 3D', to: '/projetos-3d' },
      ghost: { label: 'Falar Connosco', to: '/contacto' },
      orbs: orbsB,
      image: imgGear,
    },
    {
      tag: 'Marketing Digital',
      title: [
        { text: 'Resultados', style: 'stroke' },
        { text: 'que se', style: 'solid' },
        { text: 'medem', style: 'accent' },
      ],
      sub: 'Campanhas digitais, gestão de redes sociais e performance marketing orientados a dados. Crescimento real para o seu negócio.',
      primary: { label: 'Nossos Serviços', to: '/servicos' },
      ghost: { label: 'Ver Resultados', to: '/portfolio' },
      orbs: orbsC,
    },
  ],

  services: [
    {
      icon: Store,
      title: 'Stands & Eventos',
      desc: 'Conceção, produção e montagem de stands personalizados para feiras, exposições e ativações de marca.',
      details: ['Design 3D de Stands', 'Produção & Montagem', 'Ativações de Marca', 'Eventos Corporativos'],
    },
    {
      icon: Rotate3d,
      title: 'Produção 3D & CGI',
      desc: 'Modelação, renderização e animação 3D: produtos, espaços e stands visualizados antes de existirem.',
      details: ['Visualização de Produto', 'Animação 3D', 'Renders Fotorrealistas', 'Modelação Hard-Surface'],
    },
    {
      icon: Megaphone,
      title: 'Publicidade',
      desc: 'Campanhas criativas que colocam a sua marca na boca do público — outdoor, imprensa, rádio, TV e mais.',
      details: ['Campanhas 360°', 'Outdoor & MUPIs', 'Spots TV e Rádio', 'Imprensa'],
    },
    {
      icon: Rocket,
      title: 'Marketing Digital',
      desc: 'Estratégia, conteúdo e performance nas plataformas onde o seu cliente está — com resultados mensuráveis.',
      details: ['Gestão de Redes Sociais', 'Google & Meta Ads', 'SEO & Conteúdo', 'Email Marketing'],
    },
    {
      icon: Sparkles,
      title: 'Branding',
      desc: 'Identidades visuais memoráveis: logótipo, manual de marca, naming e todo o universo da sua marca.',
      details: ['Logótipo & Identidade', 'Manual de Marca', 'Naming', 'Rebranding'],
    },
    {
      icon: Clapperboard,
      title: 'Produção Audiovisual',
      desc: 'Vídeos institucionais, motion graphics e fotografia profissional que contam a sua história.',
      details: ['Vídeo Institucional', 'Motion Graphics', 'Fotografia', 'Cobertura de Eventos'],
    },
    {
      icon: Printer,
      title: 'Produção Gráfica',
      desc: 'Impressão de grande formato, brindes personalizados, sinalética e todo o material gráfico da sua marca.',
      details: ['Grande Formato', 'Brindes Corporativos', 'Sinalética', 'Material Promocional'],
    },
  ],

  process: [
    { step: '01', title: 'Descoberta', desc: 'Ouvimos o seu negócio, objetivos e desafios para definir a estratégia certa.' },
    { step: '02', title: 'Conceito', desc: 'Criamos o conceito criativo e apresentamos propostas visuais em 3D.' },
    { step: '03', title: 'Produção', desc: 'Executamos com rigor: design, produção gráfica, montagem ou campanhas ao vivo.' },
    { step: '04', title: 'Resultados', desc: 'Medimos, reportamos e otimizamos. O sucesso do projeto é medido em números.' },
  ],

  projects: [
    {
      id: 1,
      title: 'Stand Expo Maputo — TechCorp',
      category: 'Stands',
      desc: 'Stand de 120 m² com LED wall panorâmico e zona de demonstração — o mais visitado de todo o pavilhão central.',
      client: 'TechCorp',
      year: '2025',
      gradient: gradients.orange,
      wide: true,
    },
    {
      id: 2,
      title: 'CGI de Produto — Citrinos Frescos',
      category: '3D',
      desc: 'Visualização fotorrealista para campanha de bebidas: modelação, materiais e iluminação 100% em CGI.',
      client: 'Refrescos Maputo',
      year: '2025',
      gradient: gradients.lime,
      image: imgLemon,
    },
    {
      id: 3,
      title: 'Animação 3D — Mãos Robóticas',
      category: '3D',
      desc: 'Animação hard-surface para spot televisivo de tecnologia — rigging, simulação e render completos.',
      client: 'TechCorp',
      year: '2024',
      gradient: gradients.blue,
      image: imgRobotic,
      wide: true,
    },
    {
      id: 4,
      title: 'Campanha Nacional — Banco Azul',
      category: 'Publicidade',
      desc: 'Campanha integrada em TV, rádio e outdoor que elevou a notoriedade da marca em 34% num trimestre.',
      client: 'Banco Azul',
      year: '2024',
      gradient: gradients.blue,
    },
    {
      id: 5,
      title: 'Stand 3D — Feira FACIM',
      category: 'Stands',
      desc: 'Stand modular de 60 m² projetado e aprovado em 3D interativo, montado em apenas 48 horas.',
      client: 'FACIM',
      year: '2025',
      gradient: gradients.rose,
    },
    {
      id: 6,
      title: 'Hard-Surface — Equipamento Tech',
      category: '3D',
      desc: 'Modelação 3D de equipamento tecnológico para catálogo digital e visualizador interativo no website.',
      client: 'TechCorp',
      year: '2024',
      gradient: gradients.orange,
      image: imgGear,
    },
    {
      id: 7,
      title: 'Rebranding — Sabores de Moçambique',
      category: 'Branding',
      desc: 'Nova identidade completa: logótipo, embalagens e manual de marca para 12 linhas de produto.',
      client: 'Sabores de Moçambique',
      year: '2023',
      gradient: gradients.lime,
    },
    {
      id: 8,
      title: 'Pavilhão Imersivo — EnergiaMoz',
      category: 'Stands',
      desc: 'Pavilhão de dois pisos com sala de reuniões, LED wall e percurso interativo — aprovado em 3D sem surpresas.',
      client: 'EnergiaMoz',
      year: '2025',
      gradient: gradients.duo,
      wide: true,
    },
    {
      id: 9,
      title: 'CGI de Produto — Laranjas',
      category: '3D',
      desc: 'Série de renders de produto para campanha digital — do briefing ao ficheiro final em cinco dias.',
      client: 'Refrescos Maputo',
      year: '2025',
      gradient: gradients.amber,
      image: imgOrange,
    },
    {
      id: 10,
      title: 'Lançamento Digital — MozaPay',
      category: 'Digital',
      desc: 'Estratégia de lançamento com social media e performance — 50 mil instalações no primeiro mês.',
      client: 'MozaPay',
      year: '2024',
      gradient: gradients.purple,
    },
    {
      id: 11,
      title: 'Outdoor Interativo — Vodacom',
      category: 'Publicidade',
      desc: 'Outdoor com QR dinâmico no centro de Maputo — 18 mil interações registadas em duas semanas.',
      client: 'Vodacom',
      year: '2023',
      gradient: gradients.amber,
    },
    {
      id: 12,
      title: 'Social Media — Grupo Horizonte',
      category: 'Digital',
      desc: 'Gestão integral de redes sociais: conteúdo, design e relatórios mensais de crescimento.',
      client: 'Grupo Horizonte',
      year: '2024',
      gradient: gradients.pink,
    },
  ],

  projectDetails: {
    1: {
      challenge: 'A TechCorp precisava de se destacar entre mais de 200 expositores na Expo Maputo — com apenas seis semanas até à abertura do certame.',
      solution: 'Projetámos o stand em 3D interativo e obtivemos aprovação do cliente em 48 horas. Estrutura, LED wall panorâmico e zona de demonstração foram produzidos nas nossas oficinas e montados no recinto sem uma única alteração em obra.',
      results: [
        { value: '+1.200', label: 'contactos qualificados' },
        { value: '120 m²', label: 'de área construída' },
        { value: '#1', label: 'stand mais visitado' },
      ],
      tags: ['Design 3D', 'Produção Própria', 'Montagem', 'LED Wall'],
    },
    2: {
      challenge: 'Fotografar produto fresco com consistência entre dezenas de variações de campanha era caro, lento e dependente da época.',
      solution: 'Criámos os citrinos em CGI fotorrealista — modelação, materiais e iluminação de estúdio virtual — permitindo gerar qualquer ângulo ou composição sem nova sessão fotográfica.',
      results: [
        { value: '-60%', label: 'custo vs. fotografia' },
        { value: '12', label: 'peças de campanha' },
        { value: '4K', label: 'renders finais' },
      ],
      tags: ['CGI', 'Modelação 3D', 'Iluminação Virtual', 'Pós-produção'],
    },
    3: {
      challenge: 'O spot de TV exigia mãos robóticas em movimento ultra-realista — impossível de filmar com adereços físicos dentro do orçamento.',
      solution: 'Modelámos e animámos as mãos em 3D hard-surface, com rigging completo de dedos e articulações, e integrámos a animação no footage real do spot.',
      results: [
        { value: '30s', label: 'de animação final' },
        { value: '3', label: 'semanas de produção' },
        { value: '2M+', label: 'visualizações do spot' },
      ],
      tags: ['Animação 3D', 'Hard-Surface', 'Rigging', 'Compositing'],
    },
    4: {
      challenge: 'O banco enfrentava queda de notoriedade junto do público jovem urbano, num mercado cada vez mais disputado.',
      solution: 'Campanha 360° com nova linguagem visual: spots de TV e rádio, outdoors nas principais avenidas e ativação digital em simultâneo.',
      results: [
        { value: '+34%', label: 'notoriedade da marca' },
        { value: '5', label: 'cidades cobertas' },
        { value: '90', label: 'dias de campanha' },
      ],
      tags: ['Campanha 360°', 'TV & Rádio', 'Outdoor', 'Digital'],
    },
    5: {
      challenge: 'Prazo de montagem de apenas 48 horas no recinto da FACIM, com inauguração oficial marcada e sem margem para atrasos.',
      solution: 'Stand modular pré-fabricado em oficina e aprovado pelo cliente em 3D interativo, reduzindo o trabalho no local a encaixes e acabamentos.',
      results: [
        { value: '48h', label: 'de montagem no local' },
        { value: '60 m²', label: 'de stand modular' },
        { value: '0', label: 'alterações em obra' },
      ],
      tags: ['Stand Modular', 'Design 3D', 'Produção', 'Logística'],
    },
    6: {
      challenge: 'O catálogo impresso não mostrava o detalhe técnico do equipamento e ficava desatualizado a cada revisão de produto.',
      solution: 'Modelámos o equipamento em 3D com precisão de engenharia e integrámos um visualizador interativo 360° no website do cliente.',
      results: [
        { value: '360°', label: 'visualização interativa' },
        { value: '-40%', label: 'dúvidas pré-venda' },
        { value: '8', label: 'modelos publicados' },
      ],
      tags: ['Modelação 3D', 'Web 3D', 'Texturização'],
    },
    7: {
      challenge: 'A marca tinha 12 linhas de produto com identidades desalinhadas e pouca força na prateleira face à concorrência.',
      solution: 'Rebranding completo: novo logótipo, sistema de embalagem unificado e manual de marca aplicado a todos os pontos de contacto.',
      results: [
        { value: '12', label: 'linhas redesenhadas' },
        { value: '+22%', label: 'vendas em 6 meses' },
        { value: '1', label: 'manual de marca completo' },
      ],
      tags: ['Rebranding', 'Embalagem', 'Manual de Marca'],
    },
    8: {
      challenge: 'Apresentar um portefólio energético complexo de forma memorável para decisores, investidores e imprensa.',
      solution: 'Pavilhão imersivo de dois pisos com percurso interativo, LED wall e sala de reuniões privada — integralmente aprovado em 3D antes da produção.',
      results: [
        { value: '2', label: 'pisos construídos' },
        { value: '15', label: 'reuniões executivas no local' },
        { value: '0', label: 'alterações em obra' },
      ],
      tags: ['Pavilhão', 'Design 3D', 'Experiência Interativa'],
    },
    9: {
      challenge: 'A campanha digital precisava de visuais de produto em cinco dias — sem tempo para organizar produção fotográfica.',
      solution: 'Reutilizámos o pipeline CGI já criado para a marca e gerámos uma série de renders em alta resolução dentro do prazo.',
      results: [
        { value: '5', label: 'dias do briefing à entrega' },
        { value: '9', label: 'renders finais' },
        { value: '3', label: 'formatos de campanha' },
      ],
      tags: ['CGI', 'Renders', 'Campanha Digital'],
    },
    10: {
      challenge: 'Lançar uma app de pagamentos num mercado dominado por dois operadores estabelecidos há mais de uma década.',
      solution: 'Estratégia digital de lançamento: teasing com influenciadores, performance ads segmentados e campanha de onboarding incentivado.',
      results: [
        { value: '50 mil', label: 'instalações no 1.º mês' },
        { value: 'x3', label: 'vendas online em 3 meses' },
        { value: '12', label: 'influenciadores ativados' },
      ],
      tags: ['Performance', 'Social Media', 'Marketing de Influência'],
    },
    11: {
      challenge: 'Transformar um outdoor estático numa avenida movimentada num canal mensurável de interação com o público.',
      solution: 'Outdoor com QR dinâmico ligado a uma landing page gamificada, com prémios instantâneos para quem interagia.',
      results: [
        { value: '18 mil', label: 'interações em 2 semanas' },
        { value: '32%', label: 'conversão da landing page' },
        { value: '24/7', label: 'medição em tempo real' },
      ],
      tags: ['OOH', 'Interatividade', 'Gamificação'],
    },
    12: {
      challenge: 'Presença digital dispersa por seis empresas do grupo, sem voz coerente nem calendário editorial.',
      solution: 'Gestão integral centralizada: calendário editorial único, identidade visual coesa e relatórios mensais por empresa.',
      results: [
        { value: '6', label: 'marcas geridas' },
        { value: '+180%', label: 'alcance médio mensal' },
        { value: '30+', label: 'conteúdos por mês' },
      ],
      tags: ['Social Media', 'Conteúdo', 'Reporting'],
    },
  },

  projectCategories: ['Todos', 'Stands', '3D', 'Publicidade', 'Branding', 'Digital'],

  models3d: [
    {
      ...modelFiles[0],
      title: 'Stand Modular 6×4',
      desc: 'Conceito de stand modular com balcão de atendimento, parede de marca retroiluminada e zona lounge.',
    },
    {
      ...modelFiles[1],
      title: 'Pavilhão Premium',
      desc: 'Pavilhão de dois pisos para feiras internacionais, com sala de reuniões e led wall panorâmico.',
    },
    {
      ...modelFiles[2],
      title: 'Quiosque de Ativação',
      desc: 'Quiosque compacto para ativações de marca em centros comerciais e eventos outdoor.',
    },
    {
      ...modelFiles[3],
      title: 'Stand Ilha 8×8',
      desc: 'Stand aberto nos quatro lados com torre central de marca, ideal para posições premium em feiras.',
    },
  ],

  videos3d: [
    {
      ...videoFiles[0],
      title: 'Walkthrough — Stand TechCorp',
      desc: 'Visita virtual ao stand da TechCorp na Expo Maputo 2025.',
    },
    {
      ...videoFiles[1],
      title: 'Animação 3D — Pavilhão EnergiaMoz',
      desc: 'Render animado do pavilhão imersivo com simulação de iluminação.',
    },
    {
      ...videoFiles[2],
      title: 'Montagem Timelapse — FACIM',
      desc: 'Da estrutura vazia ao stand completo em 48 horas.',
    },
  ],

  cgiGallery: [
    { img: imgRobotic, title: 'Mãos Robóticas', tag: 'Animação 3D' },
    { img: imgGear, title: 'Equipamento Sci-Fi', tag: 'Modelação Hard-Surface' },
    { img: imgLemon, title: 'Citrinos Frescos', tag: 'Visualização de Produto' },
    { img: imgOrange, title: 'Laranjas', tag: 'Visualização de Produto' },
  ],

  team: [
    { name: 'Carlos Mendes', role: 'Diretor Criativo', initials: 'CM', gradient: gradients.orange },
    { name: 'Ana Macamo', role: 'Head de Marketing Digital', initials: 'AM', gradient: gradients.purple },
    { name: 'João Sitoe', role: 'Designer 3D & Stands', initials: 'JS', gradient: gradients.blue },
    { name: 'Marta Cossa', role: 'Gestora de Projetos', initials: 'MC', gradient: gradients.lime },
    { name: 'Pedro Nhaca', role: 'Produtor Audiovisual', initials: 'PN', gradient: gradients.rose },
    { name: 'Sofia Langa', role: 'Copywriter Sénior', initials: 'SL', gradient: gradients.amber },
  ],

  values: [
    { title: 'Criatividade com propósito', desc: 'Ideias bonitas que também vendem. Cada conceito nasce de um objetivo de negócio.' },
    { title: 'Execução impecável', desc: 'Do píxel ao parafuso do stand — obsessão pelo detalhe em tudo o que entregamos.' },
    { title: 'Parceria verdadeira', desc: 'Não somos fornecedores, somos a extensão criativa da sua equipa.' },
    { title: 'Resultados mensuráveis', desc: 'Relatórios claros e métricas reais. O nosso trabalho prova-se em números.' },
  ],

  testimonials: [
    {
      text: 'O stand que a BRILLIANTMARKETING criou para nós foi o mais fotografado de toda a feira. O retorno em contactos comerciais superou tudo o que esperávamos.',
      author: 'Ricardo Matola',
      role: 'CEO, TechCorp Moçambique',
      initials: 'RM',
      gradient: gradients.orange,
    },
    {
      text: 'Profissionalismo do início ao fim. A campanha digital triplicou as nossas vendas online em três meses. Recomendo sem hesitar.',
      author: 'Lúcia Bila',
      role: 'Diretora de Marketing, MozaPay',
      initials: 'LB',
      gradient: gradients.lime,
    },
    {
      text: 'Aprovámos o nosso pavilhão em 3D sem uma única surpresa na montagem. A visualização prévia poupou-nos tempo e dinheiro.',
      author: 'Hélder Cuna',
      role: 'Diretor Comercial, EnergiaMoz',
      initials: 'HC',
      gradient: gradients.blue,
    },
  ],

  clients,

  posts: [
    {
      slug: 'tendencias-stands-2026',
      title: '5 tendências de stands para feiras em 2026',
      excerpt: 'Do LED imersivo à sustentabilidade: o que vai marcar os pavilhões das grandes feiras este ano.',
      category: 'Stands',
      date: '28 Mai 2026',
      readTime: '4 min',
      icon: Store,
      gradient: gradients.orange,
      body: [
        { text: 'As feiras e exposições continuam a ser um dos canais mais poderosos de geração de negócio — mas o visitante de 2026 é mais exigente do que nunca. Reunimos as cinco tendências que estão a redefinir o design de stands.' },
        { heading: '1. Ecrãs LED imersivos', text: 'Paredes de LED curvas e chãos interativos transformam o stand numa experiência sensorial. A marca deixa de ser vista — passa a ser vivida.' },
        { heading: '2. Sustentabilidade visível', text: 'Materiais reutilizáveis, madeira certificada e estruturas modulares que se desmontam e remontam sem desperdício são agora um fator de decisão para os visitantes.' },
        { heading: '3. Zonas de experiência', text: 'O balcão de atendimento dá lugar a zonas de demonstração, realidade virtual e cafés de marca, onde o visitante fica — e conversa.' },
      ],
    },
    {
      slug: 'marketing-digital-pequenas-empresas',
      title: 'Marketing digital para PMEs: por onde começar',
      excerpt: 'Um guia prático para pequenas e médias empresas que querem crescer online sem desperdiçar orçamento.',
      category: 'Digital',
      date: '15 Mai 2026',
      readTime: '6 min',
      icon: Rocket,
      gradient: gradients.purple,
      body: [
        { text: 'Muitas PMEs sabem que precisam de estar online, mas não sabem por onde começar. A boa notícia: não é preciso um orçamento gigante — é preciso estratégia.' },
        { heading: 'Defina o seu cliente ideal', text: 'Antes de investir um único metical em anúncios, descreva com precisão quem é o seu cliente: idade, hábitos, redes que usa e problemas que quer resolver.' },
        { heading: 'Escolha 2 canais, não 10', text: 'É melhor dominar o Facebook e o WhatsApp Business do que estar presente em seis redes sem consistência. Profundidade vence dispersão.' },
      ],
    },
    {
      slug: 'poder-do-3d-na-publicidade',
      title: 'O poder do 3D na publicidade moderna',
      excerpt: 'Como a visualização 3D está a mudar a forma como as marcas apresentam produtos e espaços.',
      category: '3D & CGI',
      date: '02 Mai 2026',
      readTime: '5 min',
      icon: Rotate3d,
      gradient: gradients.blue,
      body: [
        { text: 'A renderização 3D deixou de ser exclusiva dos grandes estúdios. Hoje, qualquer marca pode mostrar o seu produto, stand ou espaço comercial em três dimensões — antes de ele existir.' },
        { heading: 'Aprovação sem surpresas', text: 'Com um modelo 3D interativo, o cliente vê exatamente o que vai receber: materiais, iluminação, proporções. As alterações fazem-se no ecrã, não na obra.' },
        { heading: 'Conteúdo que vende', text: 'O mesmo modelo 3D gera renders para redes sociais, vídeos de animação e experiências interativas no website — um investimento, múltiplos formatos.' },
      ],
    },
  ],

  stats: [
    { value: 250, suffix: '+', label: 'Projetos entregues' },
    { value: 120, suffix: '+', label: 'Clientes satisfeitos' },
    { value: 85, suffix: '+', label: 'Stands construídos' },
    { value: 12, suffix: '', label: 'Anos de experiência' },
  ],

  contactInfo: {
    address: 'Av. Julius Nyerere, 1234 — Maputo, Moçambique',
    phone: '+258 84 123 4567',
    email: 'geral@brilliantmarketing.co.mz',
    hours: 'Seg–Sex · 8h00–17h30',
  },
}

/* ============================================================
   ENGLISH
   ============================================================ */

const en: SiteContent = {
  heroSlides: [
    {
      tag: '360° Creative Agency',
      title: [
        { text: 'We craft', style: 'solid' },
        { text: 'brands with', style: 'stroke' },
        { text: 'impact', style: 'accent' },
      ],
      sub: 'Advertising, marketing and brand activation with top-level creativity. From strategy to execution — we make it happen.',
      primary: { label: 'View Portfolio', to: '/portfolio' },
      ghost: { label: 'Get a Quote', to: '/contacto' },
      orbs: orbsA,
      image: imgRobotic,
    },
    {
      tag: 'Stands & 3D Production',
      title: [
        { text: 'Stands that', style: 'solid' },
        { text: 'stop', style: 'accent' },
        { text: 'the show', style: 'stroke' },
      ],
      sub: 'Design, production and assembly of custom stands, approved in 3D before they exist. Your brand in the spotlight at the biggest fairs.',
      primary: { label: '3D Projects', to: '/projetos-3d' },
      ghost: { label: 'Talk to Us', to: '/contacto' },
      orbs: orbsB,
      image: imgGear,
    },
    {
      tag: 'Digital Marketing',
      title: [
        { text: 'Results', style: 'stroke' },
        { text: 'you can', style: 'solid' },
        { text: 'measure', style: 'accent' },
      ],
      sub: 'Data-driven digital campaigns, social media management and performance marketing. Real growth for your business.',
      primary: { label: 'Our Services', to: '/servicos' },
      ghost: { label: 'See Results', to: '/portfolio' },
      orbs: orbsC,
    },
  ],

  services: [
    {
      icon: Store,
      title: 'Stands & Events',
      desc: 'Design, production and assembly of custom stands for trade fairs, exhibitions and brand activations.',
      details: ['3D Stand Design', 'Production & Assembly', 'Brand Activations', 'Corporate Events'],
    },
    {
      icon: Rotate3d,
      title: '3D & CGI Production',
      desc: '3D modelling, rendering and animation: products, spaces and stands visualised before they exist.',
      details: ['Product Visualisation', '3D Animation', 'Photorealistic Renders', 'Hard-Surface Modelling'],
    },
    {
      icon: Megaphone,
      title: 'Advertising',
      desc: 'Creative campaigns that get your brand talked about — outdoor, press, radio, TV and beyond.',
      details: ['360° Campaigns', 'Billboards & MUPIs', 'TV & Radio Spots', 'Press'],
    },
    {
      icon: Rocket,
      title: 'Digital Marketing',
      desc: 'Strategy, content and performance on the platforms where your customers are — with measurable results.',
      details: ['Social Media Management', 'Google & Meta Ads', 'SEO & Content', 'Email Marketing'],
    },
    {
      icon: Sparkles,
      title: 'Branding',
      desc: 'Memorable visual identities: logo, brand guidelines, naming and your brand’s entire universe.',
      details: ['Logo & Identity', 'Brand Guidelines', 'Naming', 'Rebranding'],
    },
    {
      icon: Clapperboard,
      title: 'Audiovisual Production',
      desc: 'Corporate videos, motion graphics and professional photography that tell your story.',
      details: ['Corporate Video', 'Motion Graphics', 'Photography', 'Event Coverage'],
    },
    {
      icon: Printer,
      title: 'Print Production',
      desc: 'Large-format printing, branded merchandise, signage and all your brand’s graphic materials.',
      details: ['Large Format', 'Corporate Gifts', 'Signage', 'Promotional Material'],
    },
  ],

  process: [
    { step: '01', title: 'Discovery', desc: 'We listen to your business, goals and challenges to define the right strategy.' },
    { step: '02', title: 'Concept', desc: 'We craft the creative concept and present visual proposals in 3D.' },
    { step: '03', title: 'Production', desc: 'We execute with rigour: design, print production, assembly or live campaigns.' },
    { step: '04', title: 'Results', desc: 'We measure, report and optimise. Project success is measured in numbers.' },
  ],

  projects: [
    {
      id: 1,
      title: 'Expo Maputo Stand — TechCorp',
      category: 'Stands',
      desc: '120 m² stand with a panoramic LED wall and demo area — the most visited in the entire central pavilion.',
      client: 'TechCorp',
      year: '2025',
      gradient: gradients.orange,
      wide: true,
    },
    {
      id: 2,
      title: 'Product CGI — Fresh Citrus',
      category: '3D',
      desc: 'Photorealistic visualisation for a beverage campaign: modelling, materials and lighting 100% in CGI.',
      client: 'Refrescos Maputo',
      year: '2025',
      gradient: gradients.lime,
      image: imgLemon,
    },
    {
      id: 3,
      title: '3D Animation — Robotic Hands',
      category: '3D',
      desc: 'Hard-surface animation for a technology TV spot — full rigging, simulation and rendering.',
      client: 'TechCorp',
      year: '2024',
      gradient: gradients.blue,
      image: imgRobotic,
      wide: true,
    },
    {
      id: 4,
      title: 'National Campaign — Banco Azul',
      category: 'Advertising',
      desc: 'Integrated TV, radio and outdoor campaign that raised brand awareness by 34% in one quarter.',
      client: 'Banco Azul',
      year: '2024',
      gradient: gradients.blue,
    },
    {
      id: 5,
      title: '3D Stand — FACIM Fair',
      category: 'Stands',
      desc: '60 m² modular stand designed and approved in interactive 3D, assembled in just 48 hours.',
      client: 'FACIM',
      year: '2025',
      gradient: gradients.rose,
    },
    {
      id: 6,
      title: 'Hard-Surface — Tech Gear',
      category: '3D',
      desc: '3D modelling of tech equipment for a digital catalogue and interactive website viewer.',
      client: 'TechCorp',
      year: '2024',
      gradient: gradients.orange,
      image: imgGear,
    },
    {
      id: 7,
      title: 'Rebranding — Sabores de Moçambique',
      category: 'Branding',
      desc: 'Complete new identity: logo, packaging and brand guidelines for 12 product lines.',
      client: 'Sabores de Moçambique',
      year: '2023',
      gradient: gradients.lime,
    },
    {
      id: 8,
      title: 'Immersive Pavilion — EnergiaMoz',
      category: 'Stands',
      desc: 'Two-storey pavilion with meeting room, LED wall and interactive visitor journey — approved in 3D, no surprises.',
      client: 'EnergiaMoz',
      year: '2025',
      gradient: gradients.duo,
      wide: true,
    },
    {
      id: 9,
      title: 'Product CGI — Oranges',
      category: '3D',
      desc: 'Product render series for a digital campaign — from briefing to final files in five days.',
      client: 'Refrescos Maputo',
      year: '2025',
      gradient: gradients.amber,
      image: imgOrange,
    },
    {
      id: 10,
      title: 'Digital Launch — MozaPay',
      category: 'Digital',
      desc: 'Launch strategy with social media and performance ads — 50k installs in the first month.',
      client: 'MozaPay',
      year: '2024',
      gradient: gradients.purple,
    },
    {
      id: 11,
      title: 'Interactive Billboard — Vodacom',
      category: 'Advertising',
      desc: 'Billboard with dynamic QR in downtown Maputo — 18k interactions recorded in two weeks.',
      client: 'Vodacom',
      year: '2023',
      gradient: gradients.amber,
    },
    {
      id: 12,
      title: 'Social Media — Grupo Horizonte',
      category: 'Digital',
      desc: 'Full social media management: content, design and monthly growth reports.',
      client: 'Grupo Horizonte',
      year: '2024',
      gradient: gradients.pink,
    },
  ],

  projectDetails: {
    1: {
      challenge: 'TechCorp needed to stand out among 200+ exhibitors at Expo Maputo — with only six weeks until opening day.',
      solution: 'We designed the stand in interactive 3D and got client approval within 48 hours. Structure, panoramic LED wall and demo area were produced in our own workshops and assembled on site without a single change order.',
      results: [
        { value: '+1,200', label: 'qualified leads' },
        { value: '120 m²', label: 'built area' },
        { value: '#1', label: 'most visited stand' },
      ],
      tags: ['3D Design', 'In-house Production', 'Assembly', 'LED Wall'],
    },
    2: {
      challenge: 'Shooting fresh produce consistently across dozens of campaign variations was expensive, slow and season-dependent.',
      solution: 'We built the citrus in photorealistic CGI — modelling, materials and virtual studio lighting — enabling any angle or composition without another photo shoot.',
      results: [
        { value: '-60%', label: 'cost vs. photography' },
        { value: '12', label: 'campaign assets' },
        { value: '4K', label: 'final renders' },
      ],
      tags: ['CGI', '3D Modelling', 'Virtual Lighting', 'Post-production'],
    },
    3: {
      challenge: 'The TV spot called for ultra-realistic robotic hands in motion — impossible to film with physical props within budget.',
      solution: 'We modelled and animated the hands in hard-surface 3D, with full finger and joint rigging, and composited the animation into the spot’s live footage.',
      results: [
        { value: '30s', label: 'of final animation' },
        { value: '3', label: 'weeks of production' },
        { value: '2M+', label: 'spot views' },
      ],
      tags: ['3D Animation', 'Hard-Surface', 'Rigging', 'Compositing'],
    },
    4: {
      challenge: 'The bank was losing awareness among young urban audiences in an increasingly contested market.',
      solution: '360° campaign with a fresh visual language: TV and radio spots, billboards on the main avenues and simultaneous digital activation.',
      results: [
        { value: '+34%', label: 'brand awareness' },
        { value: '5', label: 'cities covered' },
        { value: '90', label: 'campaign days' },
      ],
      tags: ['360° Campaign', 'TV & Radio', 'Outdoor', 'Digital'],
    },
    5: {
      challenge: 'Only 48 hours of on-site assembly time at FACIM, with the official opening scheduled and zero slack.',
      solution: 'A modular stand pre-built in our workshop and approved by the client in interactive 3D, reducing on-site work to fitting and finishing.',
      results: [
        { value: '48h', label: 'on-site assembly' },
        { value: '60 m²', label: 'modular stand' },
        { value: '0', label: 'change orders' },
      ],
      tags: ['Modular Stand', '3D Design', 'Production', 'Logistics'],
    },
    6: {
      challenge: 'The printed catalogue failed to show the equipment’s technical detail and went stale with every product revision.',
      solution: 'We modelled the equipment in 3D with engineering precision and embedded an interactive 360° viewer on the client’s website.',
      results: [
        { value: '360°', label: 'interactive viewing' },
        { value: '-40%', label: 'pre-sales questions' },
        { value: '8', label: 'models published' },
      ],
      tags: ['3D Modelling', 'Web 3D', 'Texturing'],
    },
    7: {
      challenge: 'The brand had 12 product lines with misaligned identities and weak shelf presence against competitors.',
      solution: 'Complete rebranding: new logo, unified packaging system and brand guidelines applied to every touchpoint.',
      results: [
        { value: '12', label: 'lines redesigned' },
        { value: '+22%', label: 'sales in 6 months' },
        { value: '1', label: 'complete brand manual' },
      ],
      tags: ['Rebranding', 'Packaging', 'Brand Guidelines'],
    },
    8: {
      challenge: 'Presenting a complex energy portfolio memorably to decision-makers, investors and press.',
      solution: 'A two-storey immersive pavilion with an interactive visitor journey, LED wall and private meeting room — fully approved in 3D before production.',
      results: [
        { value: '2', label: 'floors built' },
        { value: '15', label: 'executive meetings hosted' },
        { value: '0', label: 'change orders' },
      ],
      tags: ['Pavilion', '3D Design', 'Interactive Experience'],
    },
    9: {
      challenge: 'The digital campaign needed product visuals in five days — no time to organise a photo production.',
      solution: 'We reused the brand’s existing CGI pipeline and generated a series of high-resolution renders within the deadline.',
      results: [
        { value: '5', label: 'days from brief to delivery' },
        { value: '9', label: 'final renders' },
        { value: '3', label: 'campaign formats' },
      ],
      tags: ['CGI', 'Renders', 'Digital Campaign'],
    },
    10: {
      challenge: 'Launching a payments app in a market dominated by two operators established for over a decade.',
      solution: 'Digital launch strategy: influencer teasing, segmented performance ads and an incentivised onboarding campaign.',
      results: [
        { value: '50k', label: 'installs in month 1' },
        { value: 'x3', label: 'online sales in 3 months' },
        { value: '12', label: 'influencers activated' },
      ],
      tags: ['Performance', 'Social Media', 'Influencer Marketing'],
    },
    11: {
      challenge: 'Turning a static billboard on a busy avenue into a measurable channel of audience interaction.',
      solution: 'A billboard with a dynamic QR linked to a gamified landing page, with instant prizes for everyone who interacted.',
      results: [
        { value: '18k', label: 'interactions in 2 weeks' },
        { value: '32%', label: 'landing page conversion' },
        { value: '24/7', label: 'real-time measurement' },
      ],
      tags: ['OOH', 'Interactivity', 'Gamification'],
    },
    12: {
      challenge: 'Digital presence scattered across six group companies, with no coherent voice or editorial calendar.',
      solution: 'Centralised full management: a single editorial calendar, cohesive visual identity and monthly reports per company.',
      results: [
        { value: '6', label: 'brands managed' },
        { value: '+180%', label: 'average monthly reach' },
        { value: '30+', label: 'pieces of content per month' },
      ],
      tags: ['Social Media', 'Content', 'Reporting'],
    },
  },

  projectCategories: ['All', 'Stands', '3D', 'Advertising', 'Branding', 'Digital'],

  models3d: [
    {
      ...modelFiles[0],
      title: 'Modular Stand 6×4',
      desc: 'Modular stand concept with a service counter, backlit brand wall and lounge area.',
    },
    {
      ...modelFiles[1],
      title: 'Premium Pavilion',
      desc: 'Two-storey pavilion for international fairs, with a meeting room and panoramic LED wall.',
    },
    {
      ...modelFiles[2],
      title: 'Activation Kiosk',
      desc: 'Compact kiosk for brand activations in shopping centres and outdoor events.',
    },
    {
      ...modelFiles[3],
      title: 'Island Stand 8×8',
      desc: 'Open stand on all four sides with a central brand tower, ideal for premium fair positions.',
    },
  ],

  videos3d: [
    {
      ...videoFiles[0],
      title: 'Walkthrough — TechCorp Stand',
      desc: 'Virtual tour of the TechCorp stand at Expo Maputo 2025.',
    },
    {
      ...videoFiles[1],
      title: '3D Animation — EnergiaMoz Pavilion',
      desc: 'Animated render of the immersive pavilion with lighting simulation.',
    },
    {
      ...videoFiles[2],
      title: 'Assembly Timelapse — FACIM',
      desc: 'From empty structure to finished stand in 48 hours.',
    },
  ],

  cgiGallery: [
    { img: imgRobotic, title: 'Robotic Hands', tag: '3D Animation' },
    { img: imgGear, title: 'Sci-Fi Gear', tag: 'Hard-Surface Modelling' },
    { img: imgLemon, title: 'Fresh Citrus', tag: 'Product Visualisation' },
    { img: imgOrange, title: 'Oranges', tag: 'Product Visualisation' },
  ],

  team: [
    { name: 'Carlos Mendes', role: 'Creative Director', initials: 'CM', gradient: gradients.orange },
    { name: 'Ana Macamo', role: 'Head of Digital Marketing', initials: 'AM', gradient: gradients.purple },
    { name: 'João Sitoe', role: '3D & Stand Designer', initials: 'JS', gradient: gradients.blue },
    { name: 'Marta Cossa', role: 'Project Manager', initials: 'MC', gradient: gradients.lime },
    { name: 'Pedro Nhaca', role: 'Audiovisual Producer', initials: 'PN', gradient: gradients.rose },
    { name: 'Sofia Langa', role: 'Senior Copywriter', initials: 'SL', gradient: gradients.amber },
  ],

  values: [
    { title: 'Creativity with purpose', desc: 'Beautiful ideas that also sell. Every concept is born from a business goal.' },
    { title: 'Flawless execution', desc: 'From the pixel to the last bolt of the stand — obsession with detail in everything we deliver.' },
    { title: 'True partnership', desc: 'We are not suppliers — we are the creative extension of your team.' },
    { title: 'Measurable results', desc: 'Clear reports and real metrics. Our work proves itself in numbers.' },
  ],

  testimonials: [
    {
      text: 'The stand BRILLIANTMARKETING created for us was the most photographed of the entire fair. The return in business leads exceeded all our expectations.',
      author: 'Ricardo Matola',
      role: 'CEO, TechCorp Mozambique',
      initials: 'RM',
      gradient: gradients.orange,
    },
    {
      text: 'Professionalism from start to finish. The digital campaign tripled our online sales in three months. I recommend them without hesitation.',
      author: 'Lúcia Bila',
      role: 'Marketing Director, MozaPay',
      initials: 'LB',
      gradient: gradients.lime,
    },
    {
      text: 'We approved our pavilion in 3D without a single surprise during assembly. The preview saved us time and money.',
      author: 'Hélder Cuna',
      role: 'Commercial Director, EnergiaMoz',
      initials: 'HC',
      gradient: gradients.blue,
    },
  ],

  clients,

  posts: [
    {
      slug: 'tendencias-stands-2026',
      title: '5 trade fair stand trends for 2026',
      excerpt: 'From immersive LED to sustainability: what will define the pavilions of major fairs this year.',
      category: 'Stands',
      date: 'May 28, 2026',
      readTime: '4 min',
      icon: Store,
      gradient: gradients.orange,
      body: [
        { text: 'Trade fairs and exhibitions remain one of the most powerful business-generation channels — but the 2026 visitor is more demanding than ever. Here are the five trends redefining stand design.' },
        { heading: '1. Immersive LED screens', text: 'Curved LED walls and interactive floors turn the stand into a sensory experience. The brand is no longer seen — it is lived.' },
        { heading: '2. Visible sustainability', text: 'Reusable materials, certified wood and modular structures that disassemble and reassemble without waste are now a deciding factor for visitors.' },
        { heading: '3. Experience zones', text: 'The service counter gives way to demo areas, virtual reality and brand cafés, where visitors stay — and talk.' },
      ],
    },
    {
      slug: 'marketing-digital-pequenas-empresas',
      title: 'Digital marketing for SMEs: where to start',
      excerpt: 'A practical guide for small and medium businesses that want to grow online without wasting budget.',
      category: 'Digital',
      date: 'May 15, 2026',
      readTime: '6 min',
      icon: Rocket,
      gradient: gradients.purple,
      body: [
        { text: 'Many SMEs know they need to be online but don’t know where to start. The good news: you don’t need a huge budget — you need strategy.' },
        { heading: 'Define your ideal customer', text: 'Before investing a single cent in ads, describe precisely who your customer is: age, habits, networks they use and problems they want solved.' },
        { heading: 'Pick 2 channels, not 10', text: 'It’s better to master Facebook and WhatsApp Business than to be present on six networks without consistency. Depth beats dispersion.' },
      ],
    },
    {
      slug: 'poder-do-3d-na-publicidade',
      title: 'The power of 3D in modern advertising',
      excerpt: 'How 3D visualisation is changing the way brands present products and spaces.',
      category: '3D & CGI',
      date: 'May 02, 2026',
      readTime: '5 min',
      icon: Rotate3d,
      gradient: gradients.blue,
      body: [
        { text: '3D rendering is no longer exclusive to big studios. Today, any brand can show its product, stand or commercial space in three dimensions — before it exists.' },
        { heading: 'Approval without surprises', text: 'With an interactive 3D model, the client sees exactly what they will get: materials, lighting, proportions. Changes happen on screen, not on site.' },
        { heading: 'Content that sells', text: 'The same 3D model generates renders for social media, animation videos and interactive website experiences — one investment, multiple formats.' },
      ],
    },
  ],

  stats: [
    { value: 250, suffix: '+', label: 'Projects delivered' },
    { value: 120, suffix: '+', label: 'Happy clients' },
    { value: 85, suffix: '+', label: 'Stands built' },
    { value: 12, suffix: '', label: 'Years of experience' },
  ],

  contactInfo: {
    address: 'Av. Julius Nyerere, 1234 — Maputo, Mozambique',
    phone: '+258 84 123 4567',
    email: 'geral@brilliantmarketing.co.mz',
    hours: 'Mon–Fri · 8:00–17:30',
  },
}

export const content: Record<Lang, SiteContent> = { pt, en }
