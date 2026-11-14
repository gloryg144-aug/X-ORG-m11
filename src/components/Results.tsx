import { Reveal, SectionHead, useCountUp, useInView, I } from "../lib/anim";

function ScoreStat({ value, label, delay = 0, suffix }: { value: number; label: string; delay?: number; suffix?: string }) {
  const { ref, on } = useInView<HTMLDivElement>(0.5);
  const n = useCountUp(value, on);
  return (
    <div ref={ref} className="rounded-md border border-cream/10 bg-ink/50 px-4 py-3.5 text-center transition-colors duration-300 hover:border-acid/40" style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-display text-3xl font-bold text-acid">
        {n}
        {suffix && <span className="text-xl text-acid/70">{suffix}</span>}
      </p>
      <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-mist">{label}</p>
    </div>
  );
}

const CARDS = [
  {
    initial: "F",
    color: "bg-acid",
    name: "FARHA",
    role: "মাধ্যমিক পরীক্ষার্থী",
    quote:
      "“আগে সমীকরণ দেখলেই ভয় লাগত। এখন NaHCO₃-এর বুদবুদটা চোখের সামনে ভাসে — পরীক্ষার হলে সমীকরণ নিজে থেকে লিখে ফেলেছি!”",
    stats: [
      { v: 98, l: "Math" },
      { v: 97, l: "PSC" },
      { v: 95, l: "LSC", s: "+" },
    ],
  },
  {
    initial: "A",
    color: "bg-aqua",
    name: "AYESA",
    role: "মাধ্যমিক পরীক্ষার্থী",
    quote:
      "“এস্টারফিকেশনের ওপর গাঢ় H₂SO₄ লিখতে ভুলতাম বারবার। OXYCHEM-এর Common Mistake সেকশনটা পড়ার পর আর ভুল হয়নি — ৯৯ তার প্রমাণ।”",
    stats: [{ v: 99, l: "Physical Science" }],
  },
];

export default function Results() {
  return (
    <section id="results" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="grid-bg grid-fade absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Social Proof · রেজাল্ট"
          title={
            <>
              সংখ্যা মিথ্যে বলে না — <span className="text-acid">ওরা পেরেছে, তুমিও পারবে</span>
            </>
          }
          sub="OXYCHEM-এর মেথডে শেখা শিক্ষার্থীরা শুধু পাস করে না — নম্বরের শীর্ষে ওঠে।"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.name} delay={i * 130} from={i === 0 ? "l" : "r"}>
              <article className="card-lift relative h-full rounded-lg border border-cream/10 bg-moss/80 p-6 sm:p-8">
                <svg viewBox="0 0 40 32" className="absolute right-6 top-6 h-8 w-10 text-acid/20" fill="currentColor" aria-hidden="true">
                  <path d="M0 32V20C0 8 6 1.6 17 0v6.4C11.4 7.6 8.4 11 8 16h8v16H0Zm24 0V20C24 8 30 1.6 41 0v6.4C35.4 7.6 32.4 11 32 16h8v16H24Z" />
                </svg>
                <div className="flex items-center gap-4">
                  <span className={`grid h-13 w-13 shrink-0 place-items-center rounded-full border-2 border-ink p-3.5 font-display text-xl font-bold text-ink shadow-[0_0_0_3px_rgba(201,242,78,0.25)] ${c.color}`}>
                    {c.initial}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-wide text-cream">{c.name}</h3>
                    <p className="font-bengali text-[13px] text-mist" lang="bn">{c.role}</p>
                  </div>
                  <span className="ml-auto flex text-amber">
                    {[...Array(5)].map((_, j) => (
                      <I.star key={j} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-5 font-bengali text-[15px] leading-relaxed text-sage" lang="bn">
                  {c.quote}
                </blockquote>
                <div className={`mt-6 grid gap-3 ${c.stats.length === 3 ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {c.stats.map((s, j) => (
                    <ScoreStat key={s.l} value={s.v} label={s.l} suffix={s.s} delay={j * 90} />
                  ))}
                  {c.stats.length === 1 && (
                    <div className="flex items-center justify-center gap-2 rounded-md border border-cream/10 bg-ink/50 px-4 py-3.5 font-bengali text-[13px] font-semibold text-sage">
                      <I.check className="h-4 w-4 text-acid" />
                      প্রায় পূর্ণ নম্বর — ভিজ্যুয়াল মেথডে
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
