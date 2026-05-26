import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import projFishdom from "@/assets/proj-fishdom.jpg";
import projAustin from "@/assets/proj-austin.jpg";
import projPartyHard from "@/assets/proj-partyhard.jpg";

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
};

const projects: Project[] = [
  {
    title: "Austin's Odyssey",
    role: "Technical Designer",
    studio: "Playrix — Soft Launch",
    year: "2024",
    image: projAustin,
    description:
      "Owned full UI layout and integration on a new Playrix title — atlas creation, asset wiring, audio and VFX setup. Shipped end-to-end on the VSO engine.",
    tags: ["VSO Engine", "UI Integration", "VFX & Audio"],
  },
  {
    title: "Fishdom",
    role: "Lead Game Designer",
    studio: "Playrix — Live Service",
    year: "2019 — Present",
    image: projFishdom,
    description:
      "Designed and shipped recurring live-ops events and continuous metagame updates. Owned GDD, balance tuning, and feature delivery from concept to launch for one of the world's top match-3 titles.",
    tags: ["Live-Ops", "Economy", "Metagame", "Team Lead"],
  },
  {
    title: "Party Hard 1 & 2",
    role: "Game Designer",
    studio: "Pinokl Games · published by TinyBuild",
    year: "2014 — 2019",
    image: projPartyHard,
    description:
      "Designed and implemented gameplay mechanics, levels and NPC behaviour across Steam, PlayStation and Xbox releases. A stealth-action cult classic.",
    tags: ["Level Design", "NPC AI", "Steam · PS · Xbox"],
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
            {project.studio} · {project.year}
          </p>
        </div>
        <p className="text-ghost/70 leading-relaxed text-[15px]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 border border-ghost/10 text-[10px] uppercase tracking-[0.18em]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
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
