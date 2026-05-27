import { createFileRoute } from "@tanstack/react-router";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import heroBg from "@/assets/hero-bg.jpg";
import projFishdom from "@/assets/proj-fishdom.jpg";
import projAustin from "@/assets/proj-austin.jpg";
import projPartyHard from "@/assets/proj-partyhard.webp";
import projAqua from "@/assets/proj-aqua.jpg";
import projDino from "@/assets/proj-dino.jpg";
import ph0 from "@/assets/proj-ph-0.jpg";
import ph1 from "@/assets/proj-ph-1.jpg";
import ph2 from "@/assets/proj-ph-2.jpg";
import ph2_0 from "@/assets/proj-ph2-0.webp";
import ph2_1 from "@/assets/proj-ph2-1.jpg";
import ph2_3 from "@/assets/proj-ph2-3.jpg";
import fishdom1 from "@/assets/proj-fishdom-1.jpg";
import fishdom2 from "@/assets/proj-fishdom-2.jpg";
import am2 from "@/assets/proj-am-2.jpg";
import ao1 from "@/assets/proj-ao-1.jpg";
import ao2 from "@/assets/proj-ao-2.jpg";
import ao3 from "@/assets/proj-ao-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  title: string;
  role: string;
  studio: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  link2?: { label: string; href: string };
  slides?: { src: string; href?: string }[];
};

const projects: Project[] = [
  {
    title: "Party Hard 1 & 2",
    role: "Game Designer",
    studio: "Pinokl Games · published by TinyBuild",
    year: "2014 — 2019",
    image: projPartyHard,
    description:
      "- Designed and implemented trap and incident mechanics, taking features from initial GDD concepts through in-game implementation, balancing, and final polishing.\n- Designed level layouts focused on interactive systems, environmental storytelling, and puzzle-driven gameplay flow to support player engagement and exploration.\n- Designed NPC and event behavior systems enabling dynamic player interactions and emergent gameplay scenarios through reactive and context-driven logic.\n- Contributed to narrative and story design for DLC content, supporting plot structure, mission progression, and integration of narrative beats into gameplay flow.\n- Designed and implemented Twitch integration systems enabling real-time viewer interaction with gameplay, allowing audience-driven events and direct influence on in-game outcomes.",
    tags: ["Game Design", "Level Design", "Game Mechanics", "Unity", "GDD", "Narrative", "Twitch"],
    link: "https://store.steampowered.com/app/356570/Party_Hard/",
    linkLabel: "PARTY HARD ↗",
    link2: { label: "Party Hard 2 ↗", href: "https://store.steampowered.com/app/572430/Party_Hard_2/" },
    slides: [
      { src: ph2_0, href: "https://store.steampowered.com/app/572430/Party_Hard_2/" },
      { src: ph1, href: "https://store.steampowered.com/app/356570/Party_Hard/" },
      { src: ph2_1, href: "https://store.steampowered.com/app/572430/Party_Hard_2/" },
      { src: ph2, href: "https://store.steampowered.com/app/356570/Party_Hard/" },
      { src: ph2_3, href: "https://store.steampowered.com/app/572430/Party_Hard_2/" },
    ],
  },
  {
    title: "Fishdom",
    role: "Game Designer",
    studio: "PLAYRIX — LIVE SERVICE ",
    year: "2019 — Present",
    image: projFishdom,
    description:
      "- Designed and delivered new location systems (tanks), covering full pipeline from early concept and GDD creation to implementation, tuning, and final polish in live product.\n- Designed and implemented new fish character systems (event, premium, and collectible variants), defining gameplay behaviors, progression roles, personality design, and unique mechanics.\n-Designed and balanced core in-game economy systems for new locations, including soft/hard currency loops, shop structures, decoration systems, and collectible progression.\n- Owned end-to-end LiveOps event design driven by player analytics, including event systems configuration, economy tuning, narrative-driven GDDs, and UX flow improvements aimed at increasing engagement and retention.\n- Led and coordinated a team of Content Game Designers, overseeing feature ownership, task prioritization, content quality standards, and cross-team alignment to ensure consistent delivery against product goals.",
    tags: ["Balancing", "Events", "Monetisation", "Team Lead", "Locations", "Live-Ops", "Metagame", "VSO"],
    link: "https://apps.apple.com/ua/app/fishdom/id664575829",
    slides: [
      { src: projFishdom, href: "https://apps.apple.com/ua/app/fishdom/id664575829" },
      { src: fishdom1, href: "https://apps.apple.com/ua/app/fishdom/id664575829" },
      { src: fishdom2, href: "https://apps.apple.com/ua/app/fishdom/id664575829" },
    ],
  },
  {
    title: "Aqua Match",
    role: "Game Designer",
    studio: "Playrix — Live Service ",
    year: "2019 — Present",
    image: projAqua,
    description:
      "- Designed and tuned fish movement systems, physics, and behavioral interactions to improve gameplay feel, responsiveness, and player immersion within core gameplay loop in brand new game.\n- Designed FTUE flows for meta-game systems, including onboarding sequences, item purchase moments, and contextual fish reactions tied to player actions to improve early engagement and system comprehension.\n- Created and maintained GDDs for new tank location systems, including progression upgrade paths, animation beats, and first-purchase presentation flows designed to drive player conversion and feature understanding.",
    tags: ["Metagame", "Locations", "FTUE"],
    link: "https://apps.apple.com/ua/app/aqua-match/id6502511364",
    slides: [
      { src: projAqua, href: "https://apps.apple.com/ua/app/aqua-match/id6502511364" },
      { src: am2, href: "https://apps.apple.com/ua/app/aqua-match/id6502511364" },
    ],
  },
  {
    title: "Austin's Odyssey",
    role: "Technical Game Designer",
    studio: "PLAYRIX — SOFT LAUNCH",
    year: "2024",
    image: projAustin,
    description:
      "- Designed and documented event and gameplay feature systems through GDDs, defining technical and gameplay requirements for implementation, balancing, and content integration.\n- Collaborated on in-game UI implementation, aligning design intent with animation, VFX, and haptic feedback systems to ensure cohesive player experience.\n- Managed and integrated game assets, ensuring proper configuration and alignment with design specifications, feature requirements, and production standards.\n- Maintained and updated meta-game configurations and location content to support ongoing feature development, live balancing, and iterative content improvements.",
    tags: ["Event Logic", "Metagame", "VFX", "Animation", "GDD", "VSO", "UI/UX"],
    link: "https://apps.apple.com/us/app/austins-odyssey/id6740872037",
    slides: [
      { src: ao1, href: "https://apps.apple.com/us/app/austins-odyssey/id6740872037" },
      { src: ao2, href: "https://apps.apple.com/us/app/austins-odyssey/id6740872037" },
      { src: ao3, href: "https://apps.apple.com/us/app/austins-odyssey/id6740872037" },
    ],
  },
  {
    title: "Dino Battle",
    role: "Game Designer",
    studio: "Pinokl Games",
    year: "",
    image: projDino,
    description:
      "- Designed and documented event and gameplay feature systems through GDDs, defining technical and gameplay requirements for implementation, balancing, and content integration.\n- Collaborated on in-game UI implementation, aligning design intent with animation, VFX, and haptic feedback systems to ensure cohesive player experience.\n- Managed and integrated game assets, ensuring proper configuration and alignment with design specifications, feature requirements, and production standards.\n- Maintained and updated meta-game configurations and location content to support ongoing feature development, live balancing, and iterative content improvements.",
    tags: ["Combat System", "Balancing", "Economy", "Narrative", "GDD"],
    link2: { label: "Gameplay example ↗", href: "https://youtu.be/npMlNVcuaU0?si=Vkt_kr3u7lnGZmX4&t=22" },
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-void text-ghost font-sans selection:bg-neon selection:text-void antialiased">
      <Nav />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex justify-between items-center mix-blend-difference">
      <a href="#top" className="font-display font-bold tracking-tighter text-xl md:text-2xl uppercase">
        Rafalskyi <span className="text-neon">Anton</span>
      </a>
      <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em]">
        <a href="#work" className="hover:text-neon transition-colors">Work</a>
        <a href="#about" className="hover:text-neon transition-colors">About</a>
        <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/90 to-void/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_15%_85%,_var(--tw-gradient-stops))] from-void via-void/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon mb-6 md:mb-8">
          [ Game Designer · 12 Years · Lviv / Rivne, UA ]
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.85] uppercase tracking-tighter mb-8 md:mb-10">
          Building <span className="font-bold">Engaging</span> Gameplay <span className="font-bold italic">Systems</span>.
        </h1>
        <p className="max-w-xl text-base md:text-lg text-ghost/65 leading-relaxed">
          Game Designer with hands-on experience in gameplay systems, metagame design, LiveOps events, economy balancing, FTUE, and content production for mobile and PC games.
        </p>
      </div>

      <div className="absolute bottom-8 right-6 md:right-10 z-10 text-[10px] font-mono uppercase tracking-[0.25em] text-ghost/40 hidden sm:block">
        Scroll ↓
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-40 space-y-24 md:space-y-40">
      <div className="flex justify-between items-end border-b border-ghost/10 pb-4">
        <h2 className="font-display text-2xl md:text-4xl uppercase tracking-tight">
          Selected Work
        </h2>
        <span className="text-[11px] font-mono text-neon">[ 01 — 0{projects.length} ]</span>
      </div>

      {projects.map((p, i) => (
        <ProjectRow key={p.title} project={p} index={i} flipped={i % 2 === 1} />
      ))}
    </section>
  );
}

function ProjectRow({ project, index, flipped }: { project: Project; index: number; flipped: boolean }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
      <div className={`md:col-span-8 ${flipped ? "md:order-2" : ""}`}>
        <ProjectMedia project={project} num={num} />
      </div>
      <div className={`md:col-span-4 space-y-6 ${flipped ? "md:order-1" : ""}`}>
        <div className="space-y-2">
          <p className="text-neon text-[10px] font-mono uppercase tracking-[0.25em]">
            {project.role}
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none">
            {project.title}
          </h3>
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-ghost/40">
            {project.studio}
          </p>
        </div>
        <p className="text-ghost/70 leading-relaxed text-[15px] font-sans whitespace-pre-line">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 border border-ghost/10 text-[10px] uppercase tracking-[0.18em]">
              {t}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neon border-b border-neon/40 pb-1 hover:border-neon transition-colors"
          >
            {project.linkLabel || "Visit store page ↗"}
          </a>
        )}
        {project.link2 && (
          <a
            href={project.link2.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.link ? "ml-4" : ""} inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neon border-b border-neon/40 pb-1 hover:border-neon transition-colors`}
          >
            {project.link2.label}
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectMedia({ project, num }: { project: Project; num: string }) {
  if (project.slides && project.slides.length > 0) {
    return (
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {project.slides.map((slide, idx) => (
            <CarouselItem key={idx}>
              <div className="relative w-full aspect-video bg-surface outline outline-1 -outline-offset-1 outline-ghost/5 overflow-hidden">
                <img
                  src={slide.src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-void/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-[0.25em] text-neon">
                  / {num}
                </span>
                <span className="absolute bottom-4 right-4 text-[10px] font-mono uppercase tracking-[0.25em] text-ghost/70">
                  {idx + 1} / {project.slides!.length}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 top-1/2 translate-y-[-50%] bg-transparent border-white text-white hover:bg-white hover:text-void" />
        <CarouselNext className="right-3 top-1/2 translate-y-[-50%] bg-transparent border-white text-white hover:bg-white hover:text-void" />
      </Carousel>
    );
  }
  const inner = (
    <div className="relative w-full aspect-video bg-surface outline outline-1 -outline-offset-1 outline-ghost/5 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} key art`}
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-void/60 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-[0.25em] text-neon">
            / {num}
          </span>
        </div>
  );
  return inner;
}

function AboutSection() {
  const skills = [
    "Unity", "VSO (Playrix Engine)", "Figma · Miro", "Visual Studio",
    "Photoshop", "Google Sheets · Gridly", "AI Prototyping", "Git · Sourcetree",
    "Team Leadership",
  ];
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-40 border-t border-ghost/10">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon mb-6">[ About ]</p>
          <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-tighter leading-[0.9]">
            Twelve years <span className="font-bold">building</span> games people actually play.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-8">
          <p className="text-lg text-ghost/75 leading-relaxed">
            I design and ship gameplay systems for live-service mobile games and premium PC/console titles. Experienced in end-to-end feature ownership — from concept, GDD, balancing, and implementation to LiveOps support, UX flow, and final polishing. Worked on metagame systems, economy balancing, player progression, and content pipelines for projects with large-scale live audiences.
          </p>

          <div className="pt-6 border-t border-ghost/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ghost/40 mb-4">/ Toolkit</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1.5 border border-ghost/10 text-[11px] uppercase tracking-[0.15em] text-ghost/80">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-ghost/10">
            <Stat value="12" label="Years shipping" />
            <Stat value="M+" label="Installs reached" />
            <Stat value="3" label="Platforms — PC · Console · Mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl md:text-5xl font-bold text-neon leading-none">{value}</p>
      <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-ghost/50">{label}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 py-24 md:py-40 bg-surface border-t border-ghost/5">
      <div className="max-w-5xl">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon mb-6">[ Contact ]</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase mb-10 md:mb-12 leading-[0.9] tracking-tighter">
          Got a world to <span className="text-neon">build?</span>
        </h2>
        <p className="text-lg md:text-xl text-ghost/60 mb-10 md:mb-12 max-w-lg">
          Open to senior design and lead roles, freelance consulting, and ambitious collaborations.
        </p>
        <a
          href="mailto:antonrflsk57@gmail.com"
          className="inline-block text-2xl md:text-3xl font-display font-light border-b border-neon pb-2 hover:text-neon transition-colors"
        >
          antonrflsk57@gmail.com
        </a>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] font-mono uppercase tracking-[0.25em] text-ghost/40">
          <div>
            <p className="text-ghost/30 mb-2">/ Phone</p>
            <a href="tel:+380971003666" className="text-ghost/70 hover:text-neon transition-colors normal-case tracking-normal text-sm">+38 097 100 36 66</a>
          </div>
          <div>
            <p className="text-ghost/30 mb-2">/ Based</p>
            <p className="text-ghost/70 normal-case tracking-normal text-sm">Lviv / Rivne, UA</p>
          </div>
          <div>
            <p className="text-ghost/30 mb-2">/ Languages</p>
            <p className="text-ghost/70 normal-case tracking-normal text-sm">EN B2 · UA Native</p>
          </div>
          <div>
            <p className="text-ghost/30 mb-2">/ Elsewhere</p>
            <a href="https://www.linkedin.com/in/anton-rafalskyi-ba9b81a6/" target="_blank" rel="noopener noreferrer" className="text-ghost/70 hover:text-neon transition-colors normal-case tracking-normal text-sm">LinkedIn ↗</a>
          </div>
        </div>

        <p className="mt-16 text-[10px] font-mono uppercase tracking-[0.25em] text-ghost/25">
          © {new Date().getFullYear()} Anton Rafalskyi · Game Designer
        </p>
      </div>
    </footer>
  );
}
