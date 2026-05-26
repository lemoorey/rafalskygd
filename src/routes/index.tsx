import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import projFishdom from "@/assets/proj-fishdom.jpg";
import projAustin from "@/assets/proj-austin.jpg";
import projPartyHard from "@/assets/proj-partyhard.webp";
import projAqua from "@/assets/proj-aqua.png";
import projDino from "@/assets/proj-dino.png";

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
  link2?: { label: string; href: string };
};

const projects: Project[] = [
  {
    title: "Party Hard 1 & 2",
    role: "Game Designer",
    studio: "Pinokl Games · published by TinyBuild",
    year: "2014 — 2019",
    image: projPartyHard,
    description:
      "- Designed and implemented trap and incident mechanics, taking features from initial GDD concepts through in-game implementation, balancing, and final polishing.\n- Created level layouts focused on interactive objects, environmental storytelling, and puzzle-driven gameplay flow.\n- Developed NPC and event behavior systems to support dynamic player interactions and emergent gameplay scenarios.\n- Contributed to narrative design and story development for DLC content, including plot structure and mission progression.\n- Designed and implemented Twitch integration features, enabling viewers to directly interact with gameplay and influence the streamer’s in-game experience in real time.",
    tags: ["Game Design", "Level Design", "Game Mechanics", "Unity", "GDD", "Narrative", "Twitch"],
    link: "https://store.steampowered.com/app/356570/Party_Hard/",
    link2: { label: "Party Hard 2 on Steam ↗", href: "https://store.steampowered.com/app/572430/Party_Hard_2/" },
  },
  {
    title: "Fishdom",
    role: "Game Designer",
    studio: "PLAYRIX — LIVE SERVICE ",
    year: "2019 — Present",
    image: projFishdom,
    description:
      "- Designed and documented new locations (tanks) features, taking content from initial concept and GDD creation through implementation and final polishing.\n- Developed new fish characters, including event, premium, and collectible variants, defining their movement sets, behaviors, personalities, and unique gameplay features.\n- Balanced in-game economy systems for new locations, including soft/hard currency shops, decorations, and collectible content.\n- Analyzed player analytics data to design, develop, and manage LiveOps events end-to-end, including event configuration, balance tuning, narrative-driven GDD documentation, and UX flow improvements to increase player engagement and retention.\n- Led and coordinated a team of Content Game Designers, overseeing task distribution, feature ownership, content quality, and cross-team collaboration to ensure consistent delivery and alignment with project goals.",
    tags: ["Balancing", "Events", "Monetisation", "Team Lead", "Locations", "Live-Ops"],
    link: "https://apps.apple.com/ua/app/fishdom/id664575829",
  },
  {
    title: "Aqua Match",
    role: "Game Designer",
    studio: "Playrix — Live Service ",
    year: "2019 — Present",
    image: projAqua,
    description:
      "- Designed and tuned fish physics, movement sets, and behavioral interactions to enhance gameplay feel and immersion.\n- Developed FTUE flows for meta-game systems, including item purchase scenes and fish reactions tied to player actions.\n- Created GDD documentation for new tank locations, including full upgrade paths, animations, and first-purchase presentation scenes.",
    tags: ["Metagame", "Locations", "FTUE"],
    link: "https://apps.apple.com/ua/app/aqua-match/id6502511364",
  },
  {
    title: "Austin's Odyssey",
    role: "Technical Game Designer",
    studio: "PLAYRIX — SOFT LAUNCH",
    year: "2024",
    image: projAustin,
    description:
      "- Created GDD documentation for the technical implementation of in-game events and gameplay features.\n- Implemented UI elements in-game, working closely with animations, VFX, and haptic feedback systems.\n- Managed game resources, including importing and configuring assets according to design documentation and feature requirements.\n- Updated meta-game configurations and location content to support ongoing feature development.",
    tags: ["Event Logic", "Metagame", "VFX", "Animation", "GDD"],
    link: "https://play.google.com/store/apps/details?id=com.mg0.ao",
  },
  {
    title: "Dino Battle",
    role: "Game Designer",
    studio: "",
    year: "",
    image: projDino,
    description:
      "- Created GDD documentation for the technical implementation of in-game events and gameplay features.\n- Implemented UI elements in-game, working closely with animations, VFX, and haptic feedback systems.\n- Managed game resources, including importing and configuring assets according to design documentation and feature requirements.\n- Updated meta-game configurations and location content to support ongoing feature development.",
    tags: ["Combat System", "Balancing", "Economy", "Narrative", "GDD"],
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
        Rafalskyi<span className="text-neon">.</span>
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
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/30" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-neon mb-6 md:mb-8">
          [ Game Designer · 12 Years · Lviv / Rivne, UA ]
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.85] uppercase tracking-tighter mb-8 md:mb-10">
          Designing <span className="font-bold">Systems</span> Players <span className="font-bold italic">Return</span> To.
        </h1>
        <p className="max-w-xl text-base md:text-lg text-ghost/65 leading-relaxed">
          Anton Rafalskyi — Lead Game Designer shipping live-service mobile hits at Playrix and premium PC/console titles with TinyBuild. Systems, economy, metagame, live-ops.
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
            Visit store page ↗
          </a>
        )}
        {project.link2 && (
          <a
            href={project.link2.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neon border-b border-neon/40 pb-1 hover:border-neon transition-colors"
          >
            {project.link2.label}
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectMedia({ project, num }: { project: Project; num: string }) {
  const inner = (
    <div className="group relative w-full aspect-video bg-surface outline outline-1 -outline-offset-1 outline-ghost/5 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} key art`}
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-void/60 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-[0.25em] text-neon">
            / {num}
          </span>
        </div>
  );
  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
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
            I design and ship game systems for a living. Live-service mobile titles with tens of millions of installs, premium PC/console releases on Steam and consoles, and browser MMOs. End-to-end ownership — from GDD and balance to UI integration, VFX wiring and live-ops calendars.
          </p>
          <p className="text-ghost/60 leading-relaxed">
            Currently Lead Game Designer at Zagrava Studios (Playrix), mentoring a team of designers and driving feature delivery across Fishdom and Austin's Odyssey.
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
            <a href="#" className="text-ghost/70 hover:text-neon transition-colors normal-case tracking-normal text-sm">LinkedIn ↗</a>
          </div>
        </div>

        <p className="mt-16 text-[10px] font-mono uppercase tracking-[0.25em] text-ghost/25">
          © {new Date().getFullYear()} Anton Rafalskyi · Game Designer
        </p>
      </div>
    </footer>
  );
}
