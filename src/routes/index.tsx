import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, MessageCircle } from "lucide-react";
import workshopBoard from "../assets/workshop-board.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UX Design in the Age of AI | Live Workshop" },
      {
        name: "description",
        content:
          "A live, interactive workshop on AI-era UX, hiring at leading companies, and portfolio strategy, hosted by Charul and Rakshita.",
      },
      { property: "og:title", content: "UX Design in the Age of AI | Live Workshop" },
      {
        property: "og:description",
        content:
          "Build a relevant UX career, understand what top teams hire for, and create a portfolio that gets noticed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkshopPage,
});

const outcomes = [
  {
    title: "A clear view of design’s future",
    copy: "Understand what AI is changing, what remains distinctly human, and where to focus next.",
  },
  {
    title: "Inside-the-room hiring insight",
    copy: "Learn what large startups and MNC design teams actually evaluate—and which common mistakes hold candidates back.",
  },
  {
    title: "A stronger portfolio framework",
    copy: "Structure case studies to show judgment, impact, and AI-era relevance instead of relying on generic polish.",
  },
];

function WorkshopPage() {
  return (
    <main className="min-h-screen bg-background font-body text-foreground selection:bg-accent/30">
      <nav aria-label="Main navigation" className="w-full pt-7 pb-4 md:pt-9">
        <div className="mx-auto flex max-w-workshop items-end justify-between px-5 md:px-8">
          <a href="#top" className="flex flex-col" aria-label="Louve Studio workshop home">
            <span className="font-display text-xl font-semibold uppercase md:text-2xl">Louve Studio</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">Workshop Series</span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.14em] sm:flex">
            <a className="transition-colors hover:text-primary" href="#syllabus">Syllabus</a>
            <a className="transition-colors hover:text-primary" href="#outcomes">Outcomes</a>
            <a className="text-accent transition-opacity hover:opacity-70" href="#register">Register interest</a>
          </div>
        </div>
      </nav>

      <section id="top" className="py-12 md:py-20">
        <div className="mx-auto max-w-workshop px-5 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="sticker-tilt-left mb-7 inline-block bg-accent px-3 py-1.5 text-accent-foreground">
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">Proposed: Saturday, October 3 · 90 minutes</span>
              </div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">Live, practical, interactive</p>
              <h1 className="mb-8 max-w-4xl text-balance font-display text-5xl font-medium leading-[0.94] md:text-7xl lg:text-8xl">
                UX Design in the Age of AI
              </h1>
              <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Build a career that stays relevant. Learn what leading teams look for and how to make your portfolio prove it.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a className="group inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-sm font-medium uppercase tracking-[0.08em] text-primary-foreground transition-transform active:scale-[0.98]" href="#register">
                  Register interest
                  <ArrowRight className="ml-3 size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <div className="inline-flex h-12 items-center gap-3 border border-border px-4 text-xs font-medium uppercase tracking-[0.08em]">
                  <span className="size-2 rounded-full bg-accent" />
                  Zoom / Google Meet
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-5 lg:col-span-4" aria-label="Workshop hosts and format">
              <div className="sticker-tilt-right bg-primary p-6 text-primary-foreground md:p-7">
                <span className="mb-5 block text-xs uppercase tracking-[0.18em] opacity-70">Hosted by</span>
                <div className="divide-y divide-primary-foreground/20">
                  <div className="flex items-center gap-4 pb-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-primary-foreground/30 font-display text-sm">C</span>
                    <div><p className="font-display text-lg font-medium">Charul</p></div>
                  </div>
                  <div className="flex items-center gap-4 pt-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-primary-foreground/30 font-display text-sm">R</span>
                    <div><p className="font-display text-lg font-medium">Rakshita</p><p className="text-sm opacity-70">Co-host</p></div>
                  </div>
                </div>
              </div>
              <div className="border border-border p-6">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Format</span>
                <p className="text-sm leading-relaxed">One focused hour of teaching, followed by 30 minutes of open, live Q&amp;A.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="syllabus" className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-workshop px-5 md:px-8">
          <header className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end md:mb-12">
            <div><p className="mb-2 text-xs uppercase tracking-[0.2em] opacity-60">The hour, mapped</p><h2 className="font-display text-4xl font-medium md:text-5xl">Workshop board</h2></div>
            <span className="w-fit border-b border-primary-foreground/40 pb-1 text-xs uppercase tracking-[0.16em]">60 min session + 30 min Q&amp;A</span>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <article className="workshop-card relative overflow-hidden bg-background p-7 text-foreground md:col-span-2 md:p-8">
              <span className="absolute right-5 top-4 font-display text-xs opacity-30">01</span>
              <span className="mb-7 inline-block bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">15–20 min</span>
              <h3 className="mb-4 max-w-md font-display text-2xl font-medium">UX design in the age of AI</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">What is changing, what is not, and how to become more valuable by strengthening judgment, context, and human-centered thinking.</p>
            </article>
            <article className="workshop-card relative bg-accent p-7 text-accent-foreground md:p-8">
              <span className="absolute right-5 top-4 font-display text-xs opacity-40">02</span>
              <span className="mb-7 inline-block bg-accent-foreground/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">15–20 min</span>
              <h3 className="mb-4 font-display text-2xl font-medium">Getting hired at top companies</h3>
              <p className="text-sm leading-relaxed opacity-85">What teams at ambitious startups and MNCs look for, how the hiring process works, and how candidates stand out.</p>
            </article>
            <article className="workshop-card relative bg-foreground p-7 text-background md:p-8">
              <span className="absolute right-5 top-4 font-display text-xs opacity-40">03</span>
              <span className="mb-7 inline-block bg-background/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">15–20 min</span>
              <h3 className="mb-4 font-display text-2xl font-medium">Portfolio strategy</h3>
              <p className="text-sm leading-relaxed opacity-80">Build and structure a portfolio that communicates AI-era relevance and earns attention from senior hiring managers.</p>
            </article>
            <article className="flex flex-col items-start justify-between gap-8 border border-primary-foreground/25 p-7 md:col-span-4 md:flex-row md:items-center md:p-8">
              <div className="flex items-center gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent"><MessageCircle className="size-5" aria-hidden="true" /></span>
                <div><h3 className="font-display text-2xl font-medium">Live Q&amp;A</h3><p className="text-xs uppercase tracking-[0.16em] opacity-60">30 minutes · open floor</p></div>
              </div>
              <p className="max-w-lg text-sm italic leading-relaxed opacity-75 md:text-right">Bring the career and portfolio questions you actually need answered—not the ones that fit neatly on a slide.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="outcomes" className="py-20 md:py-24">
        <div className="mx-auto grid max-w-workshop gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">Leave with something useful</p>
            <h2 className="mb-7 max-w-md text-balance font-display text-4xl font-medium leading-tight md:text-5xl">Clarity, not AI anxiety.</h2>
            <img className="aspect-[4/3] w-full object-cover" src={workshopBoard} alt="A tactile studio board of UX flow diagrams and interface notes" loading="lazy" width={1200} height={912} />
          </div>
          <div className="self-end md:col-span-7 md:pl-8">
            <div className="divide-y divide-border border-y border-border">
              {outcomes.map((outcome, index) => (
                <article className="group grid gap-4 py-7 sm:grid-cols-[2rem_1fr]" key={outcome.title}>
                  <span className="font-display text-sm text-accent">0{index + 1}</span>
                  <div><h3 className="mb-2 font-display text-xl font-medium">{outcome.title}</h3><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{outcome.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-16">
        <div className="mx-auto max-w-workshop px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div><span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">For</span><p className="font-display text-xl">Beginner to mid-level UX designers</p></div>
            <div><span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Also for</span><p className="font-display text-xl">Design leads preparing for larger roles</p></div>
            <div><span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Approach</span><p className="font-display text-xl">Honest, actionable, non-fearful</p></div>
          </div>
        </div>
      </section>

      <footer id="register" className="py-16 md:py-20">
        <div className="mx-auto max-w-workshop px-5 md:px-8">
          <div className="relative overflow-hidden bg-foreground p-8 text-background md:p-14">
            <div className="relative z-10 grid items-end gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">Registration opening soon</p>
                <h2 className="mb-5 max-w-2xl text-balance font-display text-4xl font-medium md:text-6xl">Make your next design move with clarity.</h2>
                <p className="max-w-xl text-sm leading-relaxed text-background/65">The final time, platform, entry details, and compensation terms are still being confirmed.</p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <span className="inline-flex min-h-13 items-center justify-center rounded-sm bg-accent px-6 text-sm font-medium uppercase tracking-[0.08em] text-accent-foreground">
                  Registration details coming soon <ArrowDownRight className="ml-3 size-4" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 size-40 rotate-12 border-[20px] border-primary opacity-50" aria-hidden="true" />
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:flex-row">
            <p>Louve Studio × Rakshita</p><p>UX Design in the Age of AI</p>
          </div>
        </div>
      </footer>
    </main>
  );
}