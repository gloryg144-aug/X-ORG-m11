import { I, Reveal, SectionHead, useCountUp, useInView } from "../lib/anim";

function Stat99() {
  const { ref, on } = useInView<HTMLDivElement>(0.4);
  const n = useCountUp(99, on);
  return (
    <div ref={ref} className="card-lift relative overflow-hidden rounded-lg border border-acid/25 bg-gradient-to-br from-fern to-moss p-6">
      <div className="anim-breathe absolute -right-8 -top-8 h-32 w-32 rounded-full bg-acid/15 blur-2xl" aria-hidden="true" />
      <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-mist">সর্বোচ্চ স্কোর</p>
      <p className="mt-2 font-display text-6xl font-bold text-acid">
        {n}
        <span className="text-3xl text-acid/60">/100</span>
      </p>
      <p className="mt-2 font-bengali text-[13.5px] text-sage" lang="bn">
        AYESA — Physical Science-এ প্রায় পূর্ণ নম্বর। ভিজ্যুয়ালে শিখলে নম্বর কথা বলে।
      </p>
    </div>
  );
}

const TERMS = [
  ["এস্টারফিকেশন", "Esterification"],
  ["প্রসমন", "Neutralization"],
  ["কার্বক্সিল মূলক", "Carboxyl Group"],
  ["এফাভারভেসেন্স", "Effervescence"],
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="কেন OXYCHEM"
          title={
            <>
              যে সুবিধাগুলো তোমাকে এগিয়ে রাখে — <span className="text-acid">প্রতি পরীক্ষায়</span>
            </>
          }
          sub="OXYCHEM শুধু পড়ায় না — তোমার মস্তিষ্কে কনসেপ্টের একটা ছবি এঁকে দেয়, যেটা পরীক্ষার হলে হুবহু মনে পড়ে।"
        />

        <div className="grid gap-5 md:grid-cols-6">
          {/* big: answer template */}
          <Reveal className="md:col-span-4">
            <div className="card-lift group relative h-full overflow-hidden rounded-lg border border-cream/10 bg-moss/70 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-amber">Exam-Ready Answer</p>
                  <h3 className="mt-2 font-bd text-2xl font-bold text-cream" lang="bn">পরীক্ষার খাতায় ফুল-মার্কসের উত্তর</h3>
                  <p className="mt-2 max-w-md font-bengali text-[14px] leading-relaxed text-sage" lang="bn">
                    প্রতিটি কমন প্রশ্নের সাথে দেওয়া থাকে উত্তর লেখার নিখুঁত কৌশল — কোথা থেকে শুরু, কোন সমীকরণ, কী লিখলে নম্বর কাটে।
                  </p>
                </div>
                <I.target className="h-9 w-9 shrink-0 text-amber/70 transition-transform duration-500 group-hover:rotate-[360deg]" />
              </div>
              {/* mock answer sheet */}
              <div className="mt-6 rounded-md border border-cream/12 bg-[#f4f1e6] p-5 text-ink shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-rotate-1">
                <div className="flex items-center justify-between border-b-2 border-dashed border-ink/25 pb-2">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60">মাধ্যমিক · ভৌতবিজ্ঞান · ৩ নম্বর</span>
                  <span className="rounded bg-acid px-2 py-0.5 font-display text-[11px] font-bold text-ink">3/3 ✓</span>
                </div>
                <p className="mt-3 font-bengali text-[13px] font-bold text-ink">প্রশ্ন: এস্টারফিকেশন কাকে বলে? সমীকরণসহ লেখো।</p>
                <p className="mt-2 font-bengali text-[12.5px] leading-relaxed text-ink/80">
                  গাঢ় H₂SO₄-এর উপস্থিতিতে কার্বক্সিলিক অ্যাসিড ও অ্যালকোহলের বিক্রিয়ায় মিষ্টি গন্ধযুক্ত এস্টার গঠনকে{" "}
                  <span className="rounded bg-amber/40 px-1 font-semibold">এস্টারফিকেশন</span> বলে।
                </p>
                <p className="eq mt-2 rounded border border-ink/15 bg-ink/5 px-3 py-1.5 font-display text-[12px] font-semibold text-ink">
                  CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH —<sup>গাঢ় H₂SO₄</sup>→ CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="md:col-span-2">
            <Stat99 />
          </Reveal>

          {/* visual memory */}
          <Reveal delay={60} className="md:col-span-2">
            <div className="card-lift group relative h-full overflow-hidden rounded-lg border border-cream/10 bg-moss/70 p-6">
              <svg viewBox="0 0 120 60" className="h-14 w-28" aria-hidden="true">
                <rect x="38" y="6" width="44" height="50" rx="10" fill="none" stroke="#a4b9ab" strokeOpacity="0.5" strokeWidth="2.5" />
                <rect x="42" y="28" width="36" height="24" rx="7" fill="#c9f24e" opacity="0.35" />
                {[0, 1, 2].map((i) => (
                  <circle key={i} cx={50 + i * 10} cy="46" r={3 + i} fill="#edf3ea" className="bubble" style={{ animationDelay: `${i * 0.45}s` }} />
                ))}
              </svg>
              <h3 className="mt-3 font-bd text-lg font-bold text-cream" lang="bn">মুখস্থ নয়, ভিজ্যুয়াল মেমোরি</h3>
              <p className="mt-1.5 font-bengali text-[13.5px] leading-relaxed text-sage" lang="bn">
                CO₂-এর বুদবুদটা একবার চোখে দেখলে সমীকরণটা আর ভুলবে না — বিজ্ঞান বলে, ছবি মনে থাকে ৬ গুণ বেশিদিন।
              </p>
            </div>
          </Reveal>

          {/* bilingual */}
          <Reveal delay={120} className="md:col-span-2">
            <div className="card-lift h-full rounded-lg border border-cream/10 bg-moss/70 p-6">
              <I.atom className="h-8 w-8 text-aqua" />
              <h3 className="mt-3 font-bd text-lg font-bold text-cream" lang="bn">বাংলা + English টার্মস</h3>
              <div className="mt-3 space-y-2">
                {TERMS.map(([bn, en]) => (
                  <div key={bn} className="flex items-center justify-between rounded border border-cream/8 bg-ink/40 px-3 py-1.5 transition-colors duration-300 hover:border-aqua/35">
                    <span className="font-bengali text-[12.5px] font-semibold text-cream" lang="bn">{bn}</span>
                    <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.14em] text-aqua">{en}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* quick revision */}
          <Reveal delay={180} className="md:col-span-2">
            <div className="card-lift h-full rounded-lg border border-cream/10 bg-moss/70 p-6">
              <I.eye className="h-8 w-8 text-amber" />
              <h3 className="mt-3 font-bd text-lg font-bold text-cream" lang="bn">১০ মিনিটে পুরো রিভিশন</h3>
              <p className="mt-1.5 font-bengali text-[13.5px] leading-relaxed text-sage" lang="bn">
                প্রতিটি মডিউলের শেষে এক পাতার রিভিশন ছক — বিকারক, শর্ত, উৎপাদ, পর্যবেক্ষণ।
              </p>
              <div className="mt-3 space-y-1.5">
                {["NaOH → লবণ + জল", "NaHCO₃ → CO₂↑", "C₂H₅OH → এস্টার"].map((r, i) => (
                  <div key={r} className="flex items-center gap-2 font-display text-[11.5px] font-semibold text-sage">
                    <span className={`h-1.5 w-1.5 rounded-full ${["bg-aqua", "bg-amber", "bg-acid"][i]}`} />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
