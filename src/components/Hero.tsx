import Molecule from "./Molecule";
import { I, Reveal, ScrambleText, Ticks } from "../lib/anim";

const CHIPS = [
  { txt: "NaOH → লবণ + জল", cls: "left-[-4%] top-[10%]", delay: "0s", tone: "text-aqua border-aqua/30" },
  { txt: "NaHCO₃ → CO₂↑ বুদবুদ", cls: "right-[-3%] top-[34%]", delay: "1.4s", tone: "text-amber border-amber/30" },
  { txt: "C₂H₅OH → ফলের সুগন্ধ", cls: "left-[2%] bottom-[16%]", delay: "2.6s", tone: "text-acid border-acid/30" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient layers */}
      <div className="grid-bg grid-fade absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-acid/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-aqua/10 blur-[110px]" aria-hidden="true" />
      <div className="anim-drift absolute right-[12%] top-[16%] hidden font-display text-[11px] tracking-[0.3em] text-mist lg:block" aria-hidden="true">
        CH₃—COOH
      </div>
      <div className="anim-floaty absolute left-[6%] top-[62%] hidden font-display text-[11px] tracking-[0.3em] text-mist lg:block" style={{ animationDelay: "1.2s" }} aria-hidden="true">
        C₂H₄O₂
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-28 lg:pt-20">
        {/* left */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-cream/12 bg-cream/5 px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-sage">
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-flame" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
              </span>
              <ScrambleText text="MODULE 11 · ORGANIC CHEMISTRY" />
            </span>
          </Reveal>

          <Reveal delay={110}>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight text-cream sm:text-6xl lg:text-[4.15rem]">
              Where{" "}
              <span className="text-transparent [-webkit-text-stroke:1.4px_rgba(237,243,234,0.6)]">Complex</span>
              <br />
              Concepts Become
              <br />
              <span className="marker relative z-10 text-acid">Easy.</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl font-bengali text-[16.5px] leading-relaxed text-sage md:text-lg">
              ভিনেগারের ঝাঁঝালো টক গন্ধ থেকে এস্টারের মিষ্টি সুবাস — <span className="font-semibold text-cream">অ্যাসিটিক অ্যাসিডের</span> প্রতিটি
              বিক্রিয়া এখন অ্যানিমেটেড ল্যাবে, চোখের সামনে। মুখস্থ নয় — <span className="text-acid">দেখে বুঝে</span> মনে রাখো।
            </p>
          </Reveal>

          <Reveal delay={330}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#module"
                className="btn-shine group inline-flex items-center gap-2.5 rounded-md bg-acid px-6 py-3.5 font-bengali text-[15.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_18px_40px_-14px_rgba(201,242,78,0.45)]"
              >
                <I.flask className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                মডিউল ১১ শুরু করো — ফ্রি
              </a>
              <a
                href="#lab-ester"
                className="group inline-flex items-center gap-2.5 rounded-md border border-cream/15 px-6 py-3.5 font-bengali text-[15.5px] font-semibold text-cream transition-all duration-300 hover:border-acid/60 hover:bg-acid/10"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cream/10 transition-colors duration-300 group-hover:bg-acid group-hover:text-ink">
                  <I.play className="h-3 w-3" />
                </span>
                এস্টার ল্যাব দেখো
              </a>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-cream/10 pt-7">
              <div className="flex -space-x-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-acid font-display text-[13px] font-bold text-ink">F</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-aqua font-display text-[13px] font-bold text-ink">A</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-fern font-display text-[11px] font-bold text-acid">+১২০০</span>
              </div>
              <div className="font-bengali text-[13.5px] leading-snug text-sage">
                <span className="font-bold text-cream">FARHA</span> — Math <span className="text-acid font-bold">98</span> ·{" "}
                <span className="font-bold text-cream">AYESA</span> — Phy. Science <span className="text-acid font-bold">99</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex text-amber">
                  {[...Array(5)].map((_, i) => (
                    <I.star key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
                <span className="font-display text-[13px] font-semibold text-sage">4.9/5</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* right — molecule specimen panel */}
        <Reveal from="r" delay={200} className="relative">
          <div className="relative rounded-lg border border-cream/12 bg-gradient-to-b from-moss to-pine p-4 pt-5 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)] sm:p-6">
            <Ticks />
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="inline-flex items-center gap-2 font-display text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mist">
                <I.atom className="h-4 w-4 text-acid" />
                Specimen · ইথানোইক অ্যাসিড
              </span>
              <span className="rounded-full border border-acid/30 bg-acid/10 px-2.5 py-0.5 font-display text-[10px] font-bold tracking-[0.18em] text-acid">
                CH₃COOH
              </span>
            </div>

            <Molecule />

            {/* floating reaction chips */}
            {CHIPS.map((c) => (
              <span
                key={c.txt}
                aria-hidden="true"
                className={`anim-floaty absolute hidden rounded-full border bg-ink/80 px-3 py-1.5 font-bengali text-[12px] font-semibold backdrop-blur md:block ${c.cls} ${c.tone}`}
                style={{ animationDelay: c.delay }}
              >
                {c.txt}
              </span>
            ))}

            {/* spec strip */}
            <div className="mt-3 grid grid-cols-3 divide-x divide-cream/10 rounded-md border border-cream/10 bg-ink/50 text-center">
              {[
                ["IUPAC", "ইথানোইক অ্যাসিড"],
                ["সংকেত", "C₂H₄O₂"],
                ["pKa", "4.76 (মৃদু অ্যাসিড)"],
              ].map(([k, v]) => (
                <div key={k} className="px-2 py-2.5">
                  <div className="font-display text-[9.5px] font-semibold uppercase tracking-[0.2em] text-mist">{k}</div>
                  <div className="mt-0.5 font-bengali text-[12.5px] font-semibold text-cream">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
