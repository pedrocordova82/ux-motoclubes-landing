import Image from "next/image";

type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "compass"
  | "google"
  | "history"
  | "map"
  | "message"
  | "network"
  | "shield";

// Dados comerciais e URLs sensíveis à publicação ficam centralizados para evitar divergência entre os CTAs.
const siteConfig = {
  brand: "Estrada Digital",
  company: "UX Consultancy",
  companyUrl: "https://ux.tec.br/",
  whatsapp: {
    // A variável de ambiente permite trocar o contato sem alterar o código em futuras campanhas.
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "5561920008828",
    defaultMessage: "Olá, Pedro! Vi a página da Estrada Digital by UX Consultancy sobre sites para motoclubes e gostaria de solicitar um diagnóstico gratuito para o meu MC.",
    planMessage: (plan: string) => `Olá, Pedro! Vi a página da Estrada Digital by UX Consultancy e tenho interesse no plano ${plan} para o site do meu motoclube.`,
  },
  case: {
    url: process.env.NEXT_PUBLIC_CASE_URL || "https://mcospapas.com.br/",
    screenshot: process.env.NEXT_PUBLIC_CASE_SCREENSHOT || "/images/hero-estrada.png",
    hasRealScreenshot: Boolean(process.env.NEXT_PUBLIC_CASE_SCREENSHOT?.trim()),
  },
};

function getWhatsAppUrl(message: string) {
  // Sem número configurado, o WhatsApp abre o seletor de contatos sem apontar para um telefone fictício.
  const baseUrl = siteConfig.whatsapp.number ? `https://wa.me/${siteConfig.whatsapp.number}` : "https://wa.me/";
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

const benefits = [
  { icon: "history", title: "Valorizar a história", text: "Preserve marcos, fundadores e memórias em uma narrativa à altura da trajetória do MC." },
  { icon: "map", title: "Divulgar sedes e regionais", text: "Apresente a presença do motoclube com informações organizadas e fáceis de encontrar." },
  { icon: "calendar", title: "Organizar os eventos", text: "Centralize encontros, ações sociais, aniversários e calendários em um canal oficial." },
  { icon: "message", title: "Facilitar o contato", text: "Oriente interessados, parceiros e irmãos até o canal certo, sem ruído ou desencontro." },
  { icon: "google", title: "Fortalecer no Google", text: "Seja encontrado por quem já procura pelo nome, história ou atuação do motoclube." },
  { icon: "network", title: "Ter um canal próprio", text: "Complemente as redes sociais com um endereço oficial que organiza e preserva o patrimônio do MC." },
] satisfies Array<{ icon: IconName; title: string; text: string }>;

const caseDeliverables = [
  "Arquitetura institucional do conteúdo",
  "Página de história e propósitos",
  "Organização de sedes e regionais",
  "Calendário de eventos",
  "Experiência responsiva",
  "Integração com WhatsApp",
  "SEO básico",
  "Deploy e configuração de domínio",
];

const trustItems = [
  { title: "Atendimento consultivo", text: "Entendemos a história, a estrutura e o momento atual do MC antes de propor qualquer solução." },
  { title: "Desenvolvimento sob medida", text: "A experiência é criada respeitando identidade, brasão, tradição, sedes e objetivos do motoclube." },
  { title: "Proposta formal", text: "O escopo, os prazos e o investimento são apresentados de forma clara antes do início." },
  { title: "Contrato de prestação de serviço", text: "A contratação pode ser formalizada para trazer mais segurança para a diretoria e para o projeto." },
  { title: "Emissão de nota fiscal", text: "O serviço pode ser realizado pela UX Consultancy com emissão de nota fiscal." },
  { title: "Suporte pós-publicação", text: "Após a publicação, é possível contratar manutenção para atualizações, ajustes e evolução do site." },
];

const packages = [
  {
    name: "Institucional Essencial",
    cta: "Quero avaliar o plano Essencial",
    label: "Presença oficial",
    text: "Para MCs que precisam estabelecer uma base digital clara, segura e profissional.",
    features: ["Página institucional completa", "História e identidade do MC", "Sedes e canais de contato", "SEO e experiência mobile", "Integração com WhatsApp"],
  },
  {
    name: "Institucional Completo",
    cta: "Quero avaliar o plano Completo",
    label: "Mais escolhido",
    featured: true,
    text: "Para motoclubes com regionais, agenda ativa e uma história que merece mais profundidade.",
    features: ["Tudo do plano Essencial", "Páginas internas personalizadas", "Calendário de eventos", "Galeria de fotos e ações", "Área de notícias ou projetos", "Treinamento para atualização"],
  },
  {
    name: "Portal do Motoclube",
    cta: "Quero avaliar o Portal do Motoclube",
    label: "Estrutura avançada",
    text: "Para organizações maiores, com conteúdo recorrente e necessidades específicas de gestão.",
    features: ["Arquitetura sob medida", "Painel de conteúdo completo", "Regionais e eventos avançados", "Busca e filtros de conteúdo", "Integrações personalizadas", "Suporte evolutivo"],
  },
];

const processSteps = [
  ["01", "Diagnóstico", "Entendemos a história, a estrutura atual e o que o site precisa resolver."],
  ["02", "Identidade e arquitetura", "Organizamos conteúdo, navegação e direção visual com respeito ao brasão e à tradição."],
  ["03", "Desenvolvimento", "Construímos a experiência com tecnologia moderna, rápida e responsiva."],
  ["04", "Validação", "Apresentamos o projeto, coletamos percepções da diretoria e refinamos os detalhes."],
  ["05", "Publicação", "Configuramos domínio, segurança, indexação e colocamos o novo site na estrada."],
  ["06", "Manutenção opcional", "Se fizer sentido, seguimos cuidando de atualizações, conteúdo e evolução."],
];

const faqs = [
  ["Precisamos já ter todos os textos e fotos?", "Não. No diagnóstico, ajudamos a mapear o material existente e indicamos o que vale produzir. Também orientamos a organização dos textos para que a história seja contada com clareza e respeito."],
  ["O site funciona bem no celular?", "Sim. O projeto nasce mobile-first, porque grande parte dos acessos acontece pelo telefone. Navegação, leitura, agenda e contatos são pensados primeiro para telas menores."],
  ["É possível atualizar eventos e notícias?", "Sim. Nos projetos que incluem conteúdo recorrente, entregamos um painel simples e treinamento para que pessoas autorizadas pelo MC façam atualizações com autonomia."],
  ["Vocês trabalham com a identidade que já temos?", "Sim. Brasão, cores, símbolos e diretrizes existentes são respeitados. Nosso trabalho é criar um sistema visual digital coerente, sem descaracterizar a identidade do motoclube."],
  ["Quanto tempo leva para o site ficar pronto?", "O prazo depende do escopo e da disponibilidade do conteúdo. Um site institucional costuma levar de 4 a 8 semanas após a etapa de diagnóstico."],
  ["Hospedagem e domínio estão incluídos?", "Podemos cuidar de toda a configuração e orientar a contratação em nome do motoclube. Os custos recorrentes são apresentados com transparência antes do início."],
  ["Vocês emitem nota fiscal e trabalham com contrato?", "Sim. O serviço pode ser realizado pela UX Consultancy, com proposta comercial, contrato de prestação de serviço e emissão de nota fiscal, trazendo mais segurança para a diretoria e para o motoclube."],
  ["O site substitui o Instagram ou Facebook do motoclube?", "Não. O site complementa as redes sociais. Enquanto Instagram e Facebook ajudam na comunicação do dia a dia, o site funciona como presença oficial, organizada e permanente para história, sedes, eventos, contatos e informações institucionais."],
];

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    calendar: <><path d="M6 3v3m12-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" /><path d="M8 13h2m4 0h2m-8 4h2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
    google: <><circle cx="12" cy="12" r="8" /><path d="M20 12h-8m3 0v5" /></>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5m4-2v6l4 2" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15m6-12v15" /></>,
    message: <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5Z" />,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m11 7-5 9m7-9 5 9M7 18h10" /></>,
    shield: <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />,
  };

  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Logo() {
  const [brandPrimary, brandSecondary] = siteConfig.brand.split(" ");

  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label={`${siteConfig.brand} by ${siteConfig.company} — início`}>
      <span className="grid h-10 w-10 place-items-center border border-ember/70 text-ember"><Icon name="compass" className="h-6 w-6" /></span>
      <span className="leading-tight">
        <strong className="block font-display text-lg uppercase tracking-[0.11em]">{brandPrimary} <span className="text-white/65">{brandSecondary}</span></strong>
        <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-ember">by {siteConfig.company}</span>
      </span>
    </a>
  );
}

function WhatsAppButton({ label, message, variant = "primary", className = "" }: { label: string; message: string; variant?: "primary" | "secondary"; className?: string }) {
  return (
    <a className={`${variant === "primary" ? "button-primary" : "button-secondary"} ${className}`} href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer" aria-label={`${label} pelo WhatsApp em uma nova aba`}>
      <Icon name="message" /> <span>{label}</span> <Icon name="arrow" />
    </a>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-ink/30 backdrop-blur-sm">
        <div className="container-page flex h-20 items-center justify-between">
          <Logo />
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 xl:flex">
            {["Por que ter um site", "Case", "Planos", "Processo"].map((item, index) => (
              <a key={item} href={["#presenca", "#case", "#planos", "#processo"][index]} className="text-xs font-bold uppercase tracking-[0.14em] text-white/65 transition hover:text-white">{item}</a>
            ))}
          </nav>
          <WhatsAppButton label="Solicitar diagnóstico gratuito" message={siteConfig.whatsapp.defaultMessage} variant="secondary" className="hidden sm:inline-flex" />
          <a href="#diagnostico" className="text-xs font-bold uppercase tracking-[0.16em] text-ember sm:hidden">Diagnóstico</a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-end overflow-hidden pb-16 pt-36 sm:min-h-[820px] lg:min-h-screen lg:items-center lg:pb-0">
        <Image src="/images/hero-estrada.png" alt="Motociclistas viajando juntos por uma estrada ao amanhecer" fill priority sizes="100vw" className="object-cover object-[62%_center] lg:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,9,.97)_0%,rgba(7,8,9,.83)_43%,rgba(7,8,9,.2)_75%,rgba(7,8,9,.15)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b0c0d_0%,transparent_35%,rgba(0,0,0,.25)_100%)] lg:bg-[linear-gradient(0deg,#0b0c0d_0%,transparent_32%)]" />
        <div className="container-page relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow">{siteConfig.brand} by {siteConfig.company}</p>
            <h1 className="max-w-[900px] font-display text-[2.75rem] font-semibold uppercase leading-[1.02] tracking-[-0.025em] text-white sm:text-6xl lg:text-[5.2rem]">
              Sites institucionais para motoclubes que valorizam <span className="text-ember">história, identidade e estrada.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Ajudamos motoclubes a construir uma presença digital oficial, moderna e organizada — com atendimento consultivo, desenvolvimento profissional e entrega formalizada pela UX Consultancy.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="Solicitar diagnóstico gratuito do meu MC" message={siteConfig.whatsapp.defaultMessage} />
              <a href="#case" className="button-secondary">Conhecer o case MC Os Papas</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
              {["Projeto sob medida", "Mobile-first", "Suporte humano"].map((item) => <span key={item} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-ember" />{item}</span>)}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden items-center gap-4 border-l border-t border-white/10 bg-ink/70 px-8 py-5 text-xs uppercase tracking-[0.18em] text-white/45 backdrop-blur lg:flex">
          <span className="h-px w-12 bg-ember" /> Role para conhecer
        </div>
      </section>

      <section id="presenca" className="py-24 sm:py-32">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="eyebrow">O patrimônio também é digital</p>
              <h2 className="section-title">Por que um motoclube precisa de um site oficial?</h2>
            </div>
            <div className="border-l border-ember/50 pl-6 sm:pl-10">
              <p className="text-xl leading-8 text-white/85 sm:text-2xl sm:leading-10">As redes sociais mostram o momento. Um site oficial preserva a trajetória.</p>
              <p className="mt-6 max-w-2xl leading-7 text-white/55">É nele que a história encontra contexto, as sedes ganham visibilidade, os eventos permanecem organizados e o público reconhece uma fonte confiável de informação.</p>
              <p className="mt-5 max-w-2xl leading-7 text-white/55">O site não substitui as redes sociais: ele complementa essa presença com um endereço próprio, organizado e construído para durar — assim como a irmandade.</p>
            </div>
          </div>
          <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article key={item.title} className="group bg-ink p-7 transition hover:bg-coal sm:p-9">
                <div className="mb-7 grid h-12 w-12 place-items-center border border-ember/35 text-ember transition group-hover:border-ember"><Icon name={item.icon} /></div>
                <h3 className="font-display text-2xl uppercase tracking-wide">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case" className="overflow-hidden border-y border-white/10 bg-coal py-24 sm:py-32">
        <div className="container-page">
          <div className="grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Projeto de referência: MC Os Papas</p>
              <h2 className="section-title">MC Os Papas</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">O site do MC Os Papas foi desenvolvido para transformar a história, as sedes, os eventos e os canais de contato do motoclube em uma presença digital oficial, moderna e acessível.</p>
              <p className="mt-9 text-[11px] font-bold uppercase tracking-[.18em] text-ember">O que foi entregue no projeto</p>
              <ul className="mt-5 grid gap-x-5 gap-y-4 text-sm text-white/70 sm:grid-cols-2">
                {caseDeliverables.map((item) => <li key={item} className="flex gap-3"><Icon name="check" className="h-5 w-5 shrink-0 text-ember" />{item}</li>)}
              </ul>
              <p className="mt-7 max-w-xl border-l border-ember/45 pl-4 text-sm leading-6 text-white/60">Esse case serve como referência de qualidade, mas cada motoclube recebe uma solução própria, respeitando sua identidade, sua história e sua estrutura.</p>
              <a
                href={siteConfig.case.url}
                target="_blank"
                rel="noreferrer"
                className="button-secondary mt-9"
                aria-label="Visitar o site do MC Os Papas em uma nova aba"
              >
                Visitar o site do MC Os Papas <Icon name="arrow" />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-12 bg-ember/10 blur-3xl" />
              <a href={siteConfig.case.url} target="_blank" rel="noreferrer" className="group relative block rotate-1 border border-white/15 bg-[#080909] p-2 shadow-2xl transition duration-500 hover:rotate-0 hover:border-ember/50" aria-label="Abrir o site do MC Os Papas em uma nova aba">
                <div className="flex h-9 items-center gap-2 border-b border-white/10 px-3"><i className="h-2 w-2 rounded-full bg-ember" /><i className="h-2 w-2 rounded-full bg-white/15" /><i className="h-2 w-2 rounded-full bg-white/15" /><span className="mx-auto text-[9px] uppercase tracking-[.2em] text-white/25">mcospapas.com.br</span></div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                  <Image src={siteConfig.case.screenshot} alt={siteConfig.case.hasRealScreenshot ? "Página inicial do site do MC Os Papas" : ""} fill sizes="(min-width: 1024px) 50vw, 90vw" className={`object-cover object-top transition duration-700 group-hover:scale-[1.02] ${siteConfig.case.hasRealScreenshot ? "" : "opacity-45"}`} />
                  {!siteConfig.case.hasRealScreenshot && <>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
                    <div className="absolute left-[8%] top-[10%] flex items-center gap-2 text-[6px] font-bold uppercase tracking-[.2em] text-white sm:text-[8px]"><Icon name="shield" className="h-5 w-5 text-ember" /> MC OS PAPAS <span className="ml-5 text-white/35">História &nbsp; Sedes &nbsp; Eventos</span></div>
                    <div className="absolute left-[8%] top-[34%] max-w-[55%]">
                      <span className="text-[7px] uppercase tracking-[.2em] text-ember sm:text-[9px]">Tradição • Respeito • Irmandade</span>
                      <p className="mt-2 font-display text-2xl uppercase leading-none sm:text-5xl">Uma história escrita na estrada.</p>
                      <div className="mt-4 h-1.5 w-20 bg-ember sm:h-2 sm:w-28" />
                    </div>
                  </>}
                  <span className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-ink/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-paper backdrop-blur">Ver projeto ao vivo <Icon name="arrow" className="h-4 w-4 text-ember" /></span>
                </div>
              </a>
              <div className="absolute -bottom-8 -right-2 w-[35%] -rotate-2 border border-white/15 bg-ink p-1.5 shadow-2xl sm:-right-6">
                <div className="aspect-[9/17] overflow-hidden border border-white/5 bg-coal">
                  <div className="relative h-[45%]">
                    <Image src={siteConfig.case.screenshot} alt="" fill sizes="180px" className="object-cover object-top opacity-55" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coal" />
                    <Icon name="shield" className="absolute left-2 top-2 h-4 w-4 text-ember" />
                    <p className="absolute bottom-3 left-2 font-display text-[10px] uppercase leading-tight sm:text-base">A estrada nos une.</p>
                  </div>
                  <div className="space-y-2 p-2"><i className="block h-1 w-4/5 bg-white/15" /><i className="block h-1 w-full bg-white/10" /><i className="block h-1 w-2/3 bg-white/10" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="confianca" className="border-b border-white/10 bg-[#0e1011] py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Confiança para a diretoria</p>
              <h2 className="section-title !text-4xl sm:!text-5xl">Projeto profissional, do diagnóstico à publicação</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">Mais do que criar uma página bonita, conduzimos o projeto com clareza, organização e segurança para o motoclube.</p>
              <p className="mt-4 text-xs leading-6 text-white/40">{siteConfig.brand} é uma solução da <a href={siteConfig.companyUrl} target="_blank" rel="noreferrer" className="font-semibold text-paper underline decoration-ember/70 underline-offset-4 hover:text-ember">{siteConfig.company}</a>.</p>
            </div>
            <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li key={item.title} className="min-h-40 bg-[#0e1011] px-6 py-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center border border-ember/35 text-ember"><Icon name="check" className="h-4 w-4" /></span>
                    <h3 className="font-display text-lg uppercase tracking-wide text-paper">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/60">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="planos" className="py-24 sm:py-32">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow justify-center before:hidden">Estruturas para cada momento</p>
            <h2 className="section-title mx-auto">Um projeto na medida da sua estrada</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">Os pacotes orientam a conversa. O escopo final nasce do diagnóstico e da realidade de cada motoclube.</p>
          </div>
          <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className={`relative flex flex-col p-7 sm:p-9 ${item.featured ? "border border-ember bg-ember/[0.06] shadow-glow lg:-my-4 lg:py-13" : "surface"}`}>
                {item.featured && <span className="absolute right-0 top-0 bg-ember px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-ink">Recomendado</span>}
                <span className="text-[11px] font-bold uppercase tracking-[.18em] text-ember">{item.label}</span>
                <h3 className="mt-5 max-w-[14rem] font-display text-3xl uppercase leading-tight">{item.name}</h3>
                <p className="mt-5 min-h-20 text-sm leading-6 text-white/60">{item.text}</p>
                <div className="my-7 h-px bg-white/10" />
                <ul className="flex-1 space-y-4 text-sm text-white/70">
                  {item.features.map((feature) => <li key={feature} className="flex gap-3"><Icon name="check" className="h-5 w-5 shrink-0 text-ember" />{feature}</li>)}
                </ul>
                <WhatsAppButton label={item.cta} message={siteConfig.whatsapp.planMessage(item.name)} variant={item.featured ? "primary" : "secondary"} className="mt-8 w-full" />
              </article>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-4xl border-t border-white/10 pt-8 text-center text-sm leading-7 text-white/50">Cada projeto é orçado conforme a estrutura do motoclube, quantidade de sedes, volume de conteúdo, necessidade de atualização e integrações desejadas. Após o diagnóstico, enviamos uma proposta objetiva com escopo, prazo e investimento.</p>
        </div>
      </section>

      <section id="processo" className="border-y border-white/10 bg-paper py-24 text-ink sm:py-32">
        <div className="container-page">
          <p className="eyebrow text-[#9b5b24] before:bg-[#9b5b24]">Da primeira conversa à publicação</p>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="section-title !text-ink">Um processo claro, sem atalhos</h2>
            <p className="max-w-md leading-7 text-black/65">Cada etapa existe para transformar informação dispersa em uma presença digital coerente e duradoura.</p>
          </div>
          <div role="list" aria-label="Etapas do processo de criação do site" className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([number, title, text]) => (
              <div role="listitem" key={number} className="relative border-t border-black/15 pt-7">
                <span aria-hidden="true" className="absolute right-0 top-3 font-display text-6xl font-bold text-black/[0.07]">{number}</span>
                <h3 className="mt-7 font-display text-2xl uppercase">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-black/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="section-title">Antes de pegar a estrada</h2>
            <p className="mt-6 leading-7 text-white/50">Se a sua dúvida não estiver aqui, conte um pouco do momento do seu motoclube. A conversa é sem compromisso.</p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-semibold text-white/90 marker:hidden">
                  {question}<span aria-hidden="true" className="text-2xl font-light text-ember transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-7 pr-8 text-sm leading-7 text-white/60">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostico" className="relative overflow-hidden border-y border-white/10 py-24 sm:py-32">
        <Image src="/images/hero-estrada.png" alt="" fill sizes="100vw" className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0c0d_0%,rgba(11,12,13,.85)_50%,#0b0c0d_100%)]" />
        <div className="container-page relative text-center">
          <Icon name="compass" className="mx-auto h-12 w-12 text-ember" />
          <p className="mt-7 text-xs font-bold uppercase tracking-[.22em] text-ember">Diagnóstico inicial gratuito</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl uppercase leading-tight sm:text-5xl lg:text-7xl">A história do seu motoclube merece uma presença oficial.</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/60">Conte onde o MC está hoje. Nós avaliamos a presença digital atual, organizamos as possibilidades e indicamos o melhor caminho — com clareza, respeito e sem compromisso.</p>
          <WhatsAppButton label="Solicitar diagnóstico gratuito do meu MC" message={siteConfig.whatsapp.defaultMessage} className="mt-9" />
          <p className="mt-4 text-xs text-white/40">Atendimento humano • Proposta formal • Contrato e nota fiscal • Manutenção opcional</p>
        </div>
      </section>

      <footer className="py-10">
        <div className="container-page grid items-center gap-7 text-center sm:grid-cols-[auto_1fr_auto] sm:text-left">
          <Logo />
          <div>
            <p className="text-xs leading-5 text-white/45">© {year} {siteConfig.brand} by <a href={siteConfig.companyUrl} target="_blank" rel="noreferrer" className="text-white/70 underline decoration-white/20 underline-offset-4 hover:text-ember">{siteConfig.company}</a>. Sites institucionais para motoclubes que constroem história sobre duas rodas.</p>
            <p className="mt-1 text-[11px] leading-5 text-white/50">Projeto, desenvolvimento e publicação com proposta formal, contrato, emissão de nota fiscal e manutenção opcional.</p>
          </div>
          <a href="#inicio" className="text-xs font-bold uppercase tracking-[.14em] text-white/50 hover:text-ember">Voltar ao topo ↑</a>
        </div>
      </footer>
    </main>
  );
}
