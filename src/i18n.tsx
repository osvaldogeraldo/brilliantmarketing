/* ============================================================
   BRILLIANTMARKETING — i18n (PT / EN)
   Contexto de idioma + textos da interface.
   Conteúdo (projetos, artigos, etc.) vive em data.ts.
   ============================================================ */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { content, type SiteContent } from './data'

export type Lang = 'pt' | 'en'

/* ---------- textos da interface ---------- */

const ptUI = {
  nav: {
    links: [
      { to: '/', label: 'Início' },
      { to: '/servicos', label: 'Serviços' },
      { to: '/portfolio', label: 'Portfólio' },
      { to: '/projetos-3d', label: 'Projetos 3D' },
      { to: '/sobre', label: 'Sobre' },
      { to: '/blog', label: 'Blog' },
    ],
    contact: 'Contacto',
    cta: 'Pedir Proposta',
  },
  footer: {
    ctaTitle: 'Tem um projeto?',
    ctaLink: 'Vamos conversar →',
    tagline:
      'Agência de publicidade, marketing e stands. Criatividade ao mais alto nível, do conceito à execução.',
    navHeading: 'Navegação',
    servicesHeading: 'Serviços',
    contactHeading: 'Contacto',
    serviceLinks: ['Stands & Eventos', 'Produção 3D & CGI', 'Publicidade', 'Marketing Digital'],
    rights: '© 2026 BRILLIANTMARKETING. Todos os direitos reservados.',
    madePre: 'Feito com',
    madePost: 'em Moçambique',
  },
  home: {
    servicesEyebrow: 'O que fazemos',
    servicesTitle: (
      <>
        Serviços <span className="stroke">completos</span> para a sua marca
      </>
    ),
    seeAll: 'Ver todos',
    aboutEyebrow: 'Quem somos',
    aboutTitle: (
      <>
        Criatividade com <span className="accent">estratégia</span>
      </>
    ),
    aboutText:
      'Somos uma agência 360° que une publicidade, marketing digital e produção de stands num só lugar. Há mais de uma década a transformar marcas em experiências memoráveis.',
    aboutBtn: 'Conhecer a agência',
    marquee: ['Publicidade', 'Marketing Digital', 'Stands & Eventos', 'Branding', 'Produção 3D', 'Audiovisual'],
    marqueeAccent: ['Vamos criar algo brilhante', 'A sua marca merece destaque', 'Do conceito à execução'],
    workEyebrow: 'Trabalho em destaque',
    workTitle: (
      <>
        Projetos que <span className="stroke">falam</span> por nós
      </>
    ),
    workBtn: 'Portfólio completo',
    testimonialsEyebrow: 'Testemunhos',
    testimonialsTitle: (
      <>
        O que dizem os <span className="accent">clientes</span>
      </>
    ),
    blogEyebrow: 'Blog & Notícias',
    blogTitle: (
      <>
        Ideias <span className="stroke">frescas</span>
      </>
    ),
    blogBtn: 'Ver blog',
    learnMore: 'Saber mais',
    readArticle: 'Ler artigo',
    standsEyebrow: 'Stands & Produção 3D',
    standsTitle: (
      <>
        Do ecrã <span className="accent">3D</span> para o chão da{' '}
        <span className="stroke">feira</span>
      </>
    ),
    standsText:
      'A nossa especialidade: stands aprovados em 3D interativo antes de um único parafuso ser apertado. Sem surpresas, sem desperdício.',
    standsPoints: [
      'Aprovação do projeto em 3D interativo',
      'Produção e montagem 100% próprias',
      'Renders e animações fotorrealistas',
      'CGI de produto para campanhas',
    ],
    standsBtn: 'Explorar Projetos 3D',
  },
  services: {
    crumb: 'Serviços',
    title: (
      <>
        Nossos <span className="stroke">Serviços</span>
      </>
    ),
    intro:
      'Soluções completas de comunicação — da estratégia à execução, com uma equipa que domina cada etapa do processo.',
    marquee: ['Estratégia', 'Criatividade', 'Produção', 'Resultados'],
    processEyebrow: 'Como trabalhamos',
    processTitle: (
      <>
        Um processo <span className="accent">afinado</span>
      </>
    ),
    ctaTitle: (
      <>
        Pronto para <span className="accent">começar?</span>
      </>
    ),
    ctaText: 'Conte-nos o seu desafio e receba uma proposta personalizada em menos de 48 horas.',
    ctaBtn: 'Pedir Proposta Grátis',
  },
  portfolio: {
    crumb: 'Portfólio',
    title: (
      <>
        Nosso <span className="stroke">Trabalho</span>
      </>
    ),
    intro:
      'Uma seleção de projetos que mostram como transformamos ideias em resultados — em todas as plataformas e formatos.',
    ctaTitle: (
      <>
        O próximo projeto pode ser <span className="lime">o seu</span>
      </>
    ),
    ctaText: 'Vamos criar algo que faça a sua marca brilhar.',
    ctaBtn: 'Iniciar Projeto',
  },
  p3d: {
    crumb: 'Projetos 3D',
    title: (
      <>
        Projetos <span className="stroke">3D</span>
      </>
    ),
    intro:
      'Explore os nossos stands e espaços em três dimensões — rode, faça zoom e veja cada detalhe antes de existir. É assim que aprovamos projetos sem surpresas.',
    videosEyebrow: 'Em movimento',
    videosTitle: (
      <>
        Animações & <span className="accent">walkthroughs</span>
      </>
    ),
    soon: 'Brevemente',
    demo: 'Demo',
    cgiEyebrow: 'CGI & Renders',
    cgiTitle: (
      <>
        Visualização que <span className="accent">vende</span>
      </>
    ),
    ctaTitle: (
      <>
        Quer ver o seu stand em <span className="accent">3D?</span>
      </>
    ),
    ctaText:
      'Enviamos uma pré-visualização tridimensional do seu projeto antes de qualquer compromisso de produção.',
    ctaBtn: 'Pedir Visualização 3D',
    viewerHint: '↻ Arrasta para rodar · Scroll para zoom',
    viewerLoading: 'A carregar modelo…',
    viewerError: 'Não foi possível carregar o modelo. Verifica o ficheiro em /public/models.',
  },
  about: {
    crumb: 'Sobre',
    title: (
      <>
        Somos a <span className="stroke">BRILLIANT</span>
      </>
    ),
    intro:
      'Uma agência 360° apaixonada por marcas. Unimos estratégia, criatividade e produção para entregar comunicação que funciona.',
    historyEyebrow: 'A nossa história',
    historyTitle: (
      <>
        12 anos a fazer marcas <span className="accent">brilhar</span>
      </>
    ),
    historyP1:
      'Nascemos como um pequeno estúdio de design e crescemos até nos tornarmos uma agência completa de publicidade e marketing, com produção própria de stands e conteúdo 3D.',
    historyP2:
      'Hoje servimos marcas líderes em todo o país — das feiras internacionais às campanhas digitais que batem recordes. O segredo? Uma equipa que trata cada projeto como se fosse o seu.',
    valuesEyebrow: 'Os nossos valores',
    valuesTitle: (
      <>
        No que <span className="stroke">acreditamos</span>
      </>
    ),
    marquee: ['A equipa', 'Os criativos', 'Os estrategas', 'Os makers'],
    teamEyebrow: 'A equipa',
    teamTitle: (
      <>
        As mentes <span className="accent">brilhantes</span>
      </>
    ),
    ctaTitle: (
      <>
        Vamos trabalhar <span className="lime">juntos?</span>
      </>
    ),
    ctaText: 'A sua marca merece uma equipa que pensa grande.',
    ctaBtn: 'Falar Connosco',
  },
  blog: {
    crumb: 'Blog',
    title: (
      <>
        Blog & <span className="stroke">Notícias</span>
      </>
    ),
    intro:
      'Tendências, bastidores e ideias práticas sobre publicidade, marketing digital, stands e produção 3D.',
    readArticle: 'Ler artigo',
  },
  post: {
    notFound: 'Artigo não encontrado',
    notFoundText: 'O artigo que procura não existe ou foi removido.',
    back: 'Voltar ao blog →',
    readSuffix: 'de leitura',
    continueTitle: (
      <>
        Continue a <span className="accent">ler</span>
      </>
    ),
  },
  contact: {
    crumb: 'Contacto',
    title: (
      <>
        Vamos <span className="stroke">conversar</span>
      </>
    ),
    intro: 'Conte-nos o seu desafio — respondemos em menos de 24 horas com os próximos passos.',
    infoTitle: (
      <>
        Informações de <span className="accent">contacto</span>
      </>
    ),
    office: 'Escritório',
    phone: 'Telefone / WhatsApp',
    email: 'Email',
    hours: 'Horário',
    formName: 'Nome',
    formNamePh: 'O seu nome',
    formEmail: 'Email',
    formEmailPh: 'email@empresa.com',
    formPhone: 'Telefone',
    formPhonePh: '+258 8X XXX XXXX',
    formService: 'Serviço pretendido',
    formSelect: 'Selecionar…',
    formOther: 'Outro',
    formMessage: 'Mensagem',
    formMessagePh: 'Conte-nos sobre o seu projeto…',
    formSend: 'Enviar Mensagem',
    successTitle: 'Mensagem enviada!',
    successText: 'Obrigado pelo contacto. A nossa equipa responderá em menos de 24 horas úteis.',
  },
}

const enUI: typeof ptUI = {
  nav: {
    links: [
      { to: '/', label: 'Home' },
      { to: '/servicos', label: 'Services' },
      { to: '/portfolio', label: 'Portfolio' },
      { to: '/projetos-3d', label: '3D Projects' },
      { to: '/sobre', label: 'About' },
      { to: '/blog', label: 'Blog' },
    ],
    contact: 'Contact',
    cta: 'Get a Quote',
  },
  footer: {
    ctaTitle: 'Got a project?',
    ctaLink: "Let's talk →",
    tagline:
      'Advertising, marketing and stands agency. Top-level creativity, from concept to execution.',
    navHeading: 'Navigation',
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    serviceLinks: ['Stands & Events', '3D & CGI Production', 'Advertising', 'Digital Marketing'],
    rights: '© 2026 BRILLIANTMARKETING. All rights reserved.',
    madePre: 'Made with',
    madePost: 'in Mozambique',
  },
  home: {
    servicesEyebrow: 'What we do',
    servicesTitle: (
      <>
        <span className="stroke">Full-service</span> solutions for your brand
      </>
    ),
    seeAll: 'See all',
    aboutEyebrow: 'Who we are',
    aboutTitle: (
      <>
        Creativity with <span className="accent">strategy</span>
      </>
    ),
    aboutText:
      'We are a 360° agency bringing advertising, digital marketing and stand production under one roof. Over a decade turning brands into memorable experiences.',
    aboutBtn: 'Meet the agency',
    marquee: ['Advertising', 'Digital Marketing', 'Stands & Events', 'Branding', '3D Production', 'Audiovisual'],
    marqueeAccent: ["Let's create something brilliant", 'Your brand deserves the spotlight', 'From concept to execution'],
    workEyebrow: 'Featured work',
    workTitle: (
      <>
        Projects that <span className="stroke">speak</span> for us
      </>
    ),
    workBtn: 'Full portfolio',
    testimonialsEyebrow: 'Testimonials',
    testimonialsTitle: (
      <>
        What our <span className="accent">clients</span> say
      </>
    ),
    blogEyebrow: 'Blog & News',
    blogTitle: (
      <>
        Fresh <span className="stroke">ideas</span>
      </>
    ),
    blogBtn: 'Visit blog',
    learnMore: 'Learn more',
    readArticle: 'Read article',
    standsEyebrow: 'Stands & 3D Production',
    standsTitle: (
      <>
        From the <span className="accent">3D</span> screen to the{' '}
        <span className="stroke">show floor</span>
      </>
    ),
    standsText:
      'Our speciality: stands approved in interactive 3D before a single bolt is tightened. No surprises, no waste.',
    standsPoints: [
      'Project approval in interactive 3D',
      '100% in-house production and assembly',
      'Photorealistic renders and animations',
      'Product CGI for campaigns',
    ],
    standsBtn: 'Explore 3D Projects',
  },
  services: {
    crumb: 'Services',
    title: (
      <>
        Our <span className="stroke">Services</span>
      </>
    ),
    intro:
      'Complete communication solutions — from strategy to execution, with a team that masters every step of the process.',
    marquee: ['Strategy', 'Creativity', 'Production', 'Results'],
    processEyebrow: 'How we work',
    processTitle: (
      <>
        A fine-tuned <span className="accent">process</span>
      </>
    ),
    ctaTitle: (
      <>
        Ready to <span className="accent">start?</span>
      </>
    ),
    ctaText: 'Tell us your challenge and receive a tailored proposal in under 48 hours.',
    ctaBtn: 'Get a Free Quote',
  },
  portfolio: {
    crumb: 'Portfolio',
    title: (
      <>
        Our <span className="stroke">Work</span>
      </>
    ),
    intro:
      'A selection of projects that show how we turn ideas into results — across every platform and format.',
    ctaTitle: (
      <>
        The next project could be <span className="lime">yours</span>
      </>
    ),
    ctaText: "Let's create something that makes your brand shine.",
    ctaBtn: 'Start a Project',
  },
  p3d: {
    crumb: '3D Projects',
    title: (
      <>
        3D <span className="stroke">Projects</span>
      </>
    ),
    intro:
      'Explore our stands and spaces in three dimensions — rotate, zoom and inspect every detail before it exists. That is how we approve projects without surprises.',
    videosEyebrow: 'In motion',
    videosTitle: (
      <>
        Animations & <span className="accent">walkthroughs</span>
      </>
    ),
    soon: 'Coming soon',
    demo: 'Demo',
    cgiEyebrow: 'CGI & Renders',
    cgiTitle: (
      <>
        Visualisation that <span className="accent">sells</span>
      </>
    ),
    ctaTitle: (
      <>
        Want to see your stand in <span className="accent">3D?</span>
      </>
    ),
    ctaText:
      'We send a three-dimensional preview of your project before any production commitment.',
    ctaBtn: 'Request 3D Preview',
    viewerHint: '↻ Drag to rotate · Scroll to zoom',
    viewerLoading: 'Loading model…',
    viewerError: 'Could not load the model. Check the file in /public/models.',
  },
  about: {
    crumb: 'About',
    title: (
      <>
        We are <span className="stroke">BRILLIANT</span>
      </>
    ),
    intro:
      'A 360° agency passionate about brands. We combine strategy, creativity and production to deliver communication that works.',
    historyEyebrow: 'Our story',
    historyTitle: (
      <>
        12 years making brands <span className="accent">shine</span>
      </>
    ),
    historyP1:
      'We started as a small design studio and grew into a full advertising and marketing agency, with in-house stand production and 3D content.',
    historyP2:
      'Today we serve leading brands across the country — from international trade fairs to record-breaking digital campaigns. The secret? A team that treats every project as its own.',
    valuesEyebrow: 'Our values',
    valuesTitle: (
      <>
        What we <span className="stroke">believe in</span>
      </>
    ),
    marquee: ['The team', 'The creatives', 'The strategists', 'The makers'],
    teamEyebrow: 'The team',
    teamTitle: (
      <>
        The <span className="accent">brilliant</span> minds
      </>
    ),
    ctaTitle: (
      <>
        Shall we work <span className="lime">together?</span>
      </>
    ),
    ctaText: 'Your brand deserves a team that thinks big.',
    ctaBtn: 'Talk to Us',
  },
  blog: {
    crumb: 'Blog',
    title: (
      <>
        Blog & <span className="stroke">News</span>
      </>
    ),
    intro:
      'Trends, behind-the-scenes and practical ideas on advertising, digital marketing, stands and 3D production.',
    readArticle: 'Read article',
  },
  post: {
    notFound: 'Article not found',
    notFoundText: 'The article you are looking for does not exist or has been removed.',
    back: 'Back to blog →',
    readSuffix: 'read',
    continueTitle: (
      <>
        Keep <span className="accent">reading</span>
      </>
    ),
  },
  contact: {
    crumb: 'Contact',
    title: (
      <>
        Let's <span className="stroke">talk</span>
      </>
    ),
    intro: 'Tell us your challenge — we reply within 24 hours with the next steps.',
    infoTitle: (
      <>
        Contact <span className="accent">information</span>
      </>
    ),
    office: 'Office',
    phone: 'Phone / WhatsApp',
    email: 'Email',
    hours: 'Opening hours',
    formName: 'Name',
    formNamePh: 'Your name',
    formEmail: 'Email',
    formEmailPh: 'email@company.com',
    formPhone: 'Phone',
    formPhonePh: '+258 8X XXX XXXX',
    formService: 'Service needed',
    formSelect: 'Select…',
    formOther: 'Other',
    formMessage: 'Message',
    formMessagePh: 'Tell us about your project…',
    formSend: 'Send Message',
    successTitle: 'Message sent!',
    successText: 'Thank you for reaching out. Our team will reply within 24 business hours.',
  },
}

const ui: Record<Lang, typeof ptUI> = { pt: ptUI, en: enUI }

/* ---------- contexto ---------- */

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof ptUI
  c: SiteContent
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('bm-lang')
    return saved === 'en' ? 'en' : 'pt'
  })

  useEffect(() => {
    localStorage.setItem('bm-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: ui[lang], c: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

/** Devolve { lang, setLang, t (textos UI), c (conteúdo) } */
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang deve ser usado dentro de <LangProvider>')
  return ctx
}
