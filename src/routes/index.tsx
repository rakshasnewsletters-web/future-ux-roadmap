import { createFileRoute } from "@tanstack/react-router";
import qr from "@/assets/charul-upi-qr.png.asset.json";
import studioOrbisMark from "@/assets/studio-orbis-mark.png.asset.json";

const PAY_URL = "https://razorpay.me/@charulbhati";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UX Design in the Age of AI — Studio Orbis" },
      { name: "description", content: "A live Studio Orbis workshop on the AI-era UX role, hiring at top companies and portfolio strategy." },
      { property: "og:title", content: "UX Design in the Age of AI — Studio Orbis" },
      { property: "og:description", content: "Live online workshop: AI-era UX, hiring insights and a real portfolio framework." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const modules = [
  { n: "01", t: "The UX role in the AI era", d: "How the designer's job is evolving — without the fear.", m: "15–20 min" },
  { n: "02", t: "Hiring at top companies", d: "Inside insights on how big startups and MNCs hire designers.", m: "15–20 min" },
  { n: "03", t: "Portfolio strategy", d: "A real framework to make your portfolio prove your thinking.", m: "15–20 min" },
  { n: "04", t: "Live Q&A", d: "Bring your questions — portfolios, careers, AI tools.", m: "30 min" },
];

const facts = [
  { k: "Sat, 3 Oct", v: "Proposed date" },
  { k: "90 minutes", v: "60 min + 30 min Q&A" },
  { k: "Online", v: "Zoom / Google Meet" },
  { k: "Beginner → Lead", v: "UX designers" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-display text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-workshop items-center justify-between gap-6 px-6 py-5">
          <a href="#" className="flex items-baseline gap-3">
            <span className="font-display text-lg font-semibold tracking-[0.35em]">ORBIS</span>
            <span className="hidden text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:inline">Studio</span>
          </a>
          <div className="hidden gap-10 text-sm text-muted-foreground md:flex">
            <a href="#learn" className="hover:text-foreground">What you'll learn</a>
            <a href="#ticket" className="hover:text-foreground">Ticket</a>
          </div>
          <a href="#ticket" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Reserve your spot ↗</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative orbis-glow">
          <div className="orbis-aurora pointer-events-none absolute right-0 top-8 z-0 hidden w-[min(42vw,500px)] lg:block">
            <img src={studioOrbisMark.url} alt="Studio Orbis logo" className="block aspect-square h-auto w-full object-contain" />
          </div>
          <div className="relative z-10 mx-auto max-w-workshop px-6 pb-16 pt-20 md:pb-24 md:pt-28 lg:pb-28">
            <Eyebrow>Workshop 01 / Live online</Eyebrow>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:max-w-[58%]">
              UX Design in the <span className="text-primary">Age of AI.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:max-w-[52%]">
              Understand where design is heading, how top companies hire, and how to build a portfolio that proves your thinking.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#ticket" className="inline-flex items-center justify-between gap-6 rounded-full bg-primary py-2 pl-7 pr-2 font-medium text-primary-foreground">
                Save my seat
                <span className="grid size-10 place-items-center rounded-full bg-primary-foreground text-primary">→</span>
              </a>
              <p className="glass rounded-full border border-border px-6 py-3 text-sm">
                ✦ Don't fear the AI wave. <span className="italic text-muted-foreground">Learn to grow with it.</span>
              </p>
            </div>
          </div>
          <div className="orbis-aurora relative z-10 mx-auto -mt-2 w-full max-w-[390px] lg:hidden">
            <img src={studioOrbisMark.url} alt="Studio Orbis logo" className="block aspect-square h-auto w-full object-contain" />
          </div>
          <div className="border-y border-border">
            <dl className="mx-auto grid max-w-workshop grid-cols-2 gap-px bg-border md:grid-cols-4">
              {facts.map((f) => (
                <div key={f.k} className="bg-background px-6 py-6">
                  <dt className="font-display text-sm font-medium uppercase tracking-[0.15em]">{f.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Learn */}
        <section id="learn" className="mx-auto max-w-workshop px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <Eyebrow>What you'll learn</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Turn AI into a real advantage in your UX career.
              </h2>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {modules.map((m) => (
                <li key={m.n} className="grid grid-cols-[3rem_1fr_auto] items-start gap-5 py-7">
                  <span className="grid size-10 place-items-center rounded-full border border-border font-display text-xs">{m.n}</span>
                  <div>
                    <h3 className="font-display text-lg font-medium">{m.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
                  </div>
                  <span className="pt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{m.m}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-workshop gap-6 px-6 py-24 md:grid-cols-3">
            {[
              ["A clear view", "of design's future with AI — calm, not fearful."],
              ["Inside insights", "on hiring, from IIT Roorkee to Razorpay to Stripe."],
              ["A real framework", "for a portfolio that gets you shortlisted."],
            ].map(([a, b]) => (
              <div key={a} className="rounded-2xl border border-border bg-card p-8">
                <p className="font-display text-xl font-medium text-primary">{a}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ticket */}
        <section id="ticket" className="orbis-glow border-t border-border">
          <div className="mx-auto max-w-workshop px-6 py-24 md:py-32">
            <div className="text-center">
              <Eyebrow>Your ticket</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">Scan, pay, you're in.</h2>
            </div>

            <div className="mt-16 overflow-hidden rounded-3xl bg-ticket text-ticket-foreground shadow-2xl lg:grid lg:grid-cols-[1.1fr_1fr_0.8fr]">
              <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
                <div>
                  <p className="font-display text-sm font-semibold tracking-[0.3em]">STUDIO ORBIS</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ticket-muted">AI Workshop Series</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-ticket-line">Live · Practical · Interactive</p>
                  <h3 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight">UX Design in the Age of AI</h3>
                </div>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.15em]">
                  <span className="rounded-full border border-ticket-line px-4 py-2">Sat, Oct 3 (proposed)</span>
                  <span className="rounded-full border border-ticket-line px-4 py-2">90 minutes</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 border-t border-dashed border-ticket-line p-8 md:p-10 lg:border-l lg:border-t-0">
                <p className="text-xs uppercase tracking-[0.25em]">Scan this UPI QR code</p>
                <img src={qr.url} alt="Charul Bhati UPI QR code, 9358344725@ptsbi" className="w-full max-w-[260px] rounded-xl" />
                <a href={PAY_URL} target="_blank" rel="noreferrer" className="w-full max-w-[260px] rounded-full bg-ticket-foreground px-6 py-3 text-center text-sm font-medium text-ticket">
                  Or pay on Razorpay ↗
                </a>
              </div>

              <div className="flex flex-col justify-between gap-8 border-t-2 border-dashed border-ticket-line bg-ticket-stub p-8 md:p-10 lg:border-l-2 lg:border-t-0">
                <div className="flex justify-between text-xs uppercase tracking-[0.25em]">
                  <span>Workshop ticket</span><span className="font-semibold">001</span>
                </div>
                <ul className="space-y-4 border-y border-ticket-line/40 py-6 text-sm">
                  <li>Sat, October 3 · proposed</li>
                  <li>60 min session + 30 min Q&A</li>
                  <li>Online · Zoom / Google Meet</li>
                </ul>
                <div aria-hidden className="h-10 w-full" style={{ background: "repeating-linear-gradient(90deg, var(--ticket-foreground) 0 2px, transparent 2px 5px, var(--ticket-foreground) 5px 6px, transparent 6px 9px)" }} />
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">After paying, joining details will be shared with you.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-workshop flex-col justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display tracking-[0.3em] text-foreground">STUDIO ORBIS</span>
          <span>AI Workshop Series · 2026</span>
        </div>
      </footer>
    </div>
  );
}
