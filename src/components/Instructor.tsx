import { I, Reveal, Ticks } from "../lib/anim";

const CREDS = [
  { icon: I.star, text: "B.Sc. — Kalyani University (বি.এসসি, কল্যাণী বিশ্ববিদ্যালয়)" },
  { icon: I.flask, text: "মাধ্যমিক ভৌতবিজ্ঞান, জীবনবিজ্ঞান ও গণিতের বিশেষজ্ঞ মেন্টর" },
  { icon: I.atom, text: "১২০০+ শিক্ষার্থীকে অ্যানিমেটেড ল্যাব মেথডে শিখিয়েছেন" },
  { icon: I.target, text: "লক্ষ্য একটাই — কনসেপ্ট যেন পরীক্ষার হলে হাত ধরে নিয়ে যায়" },
];

export default function Instructor() {
  return (
    <section id="mentor" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* portrait */}
          <Reveal from="l">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-lg border border-dashed border-acid/25" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-lg border border-cream/15 bg-moss shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
                <Ticks />
                <img
                  src="/images/mentor.jpg"
                  alt="অলাউদ্দিন মণ্ডল — OXYCHEM-এর প্রতিষ্ঠাতা ও মেন্টর, হাতে ল্যাব ফ্লাস্ক"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="glass absolute inset-x-3 bottom-3 flex items-center justify-between rounded-md border border-cream/15 px-4 py-2.5">
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-cream">Alauddin Mondal</span>
                  <span className="rounded-full bg-acid/15 px-2.5 py-0.5 font-display text-[10px] font-bold tracking-[0.12em] text-acid">FOUNDER · MENTOR</span>
                </div>
              </div>
              <div className="anim-floaty absolute -right-4 -top-5 rounded-md border border-amber/40 bg-ink px-3.5 py-2 shadow-lg">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-amber">B.Sc.</p>
                <p className="font-display text-[12px] font-semibold text-cream">Kalyani University</p>
              </div>
              <div className="anim-floaty absolute -left-4 bottom-16 rounded-md border border-acid/40 bg-ink px-3.5 py-2 shadow-lg" style={{ animationDelay: "1.6s" }}>
                <p className="font-bengali text-[12px] font-bold text-acid" lang="bn">“Complex Concepts Made Easy.”</p>
              </div>
            </div>
          </Reveal>

          {/* bio */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-acid/40 bg-acid/10 px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-acid">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                তোমার মেন্টর
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-cream md:text-5xl">
                ALAUDDIN <span className="text-acid">MONDAL</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-2 font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-mist">B.Sc. — Kalyani University</p>
            </Reveal>
            <Reveal delay={230}>
              <p className="mt-6 max-w-xl font-bengali text-[16px] leading-relaxed text-sage" lang="bn">
                “আমি বিশ্বাস করি — <span className="font-semibold text-cream">কোনো কনসেপ্টই কঠিন নয়, শুধু কেউ সহজভাবে দেখায়নি।</span>{" "}
                ভিনেগারের গন্ধ থেকে শুরু করে এস্টারের সুবাস — তোমার চারপাশের পৃথিবীটাই আমার ক্লাসরুম। OXYCHEM-এ প্রতিটি অধ্যায় সাজানো হয়
                এমনভাবে, যেন তুমি নিজেই আবিষ্কার করছো বিজ্ঞানটা।”
              </p>
            </Reveal>
            <div className="mt-8 space-y-3.5">
              {CREDS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={i} delay={280 + i * 80}>
                    <div className="group flex items-center gap-4 rounded-md border border-cream/10 bg-moss/60 px-4 py-3 transition-all duration-300 hover:translate-x-1.5 hover:border-acid/35">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-acid/25 bg-acid/10 text-acid transition-transform duration-300 group-hover:-rotate-6">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <p className="font-bengali text-[14.5px] font-medium text-sage" lang="bn">{c.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={620}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["জৈব রসায়ন", "ভৌতবিজ্ঞান", "জীবনবিজ্ঞান", "গণিত"].map((s) => (
                  <span key={s} className="cursor-default rounded-full border border-cream/15 bg-ink/50 px-4 py-1.5 font-bengali text-[13px] font-semibold text-sage transition-all duration-300 hover:border-acid/50 hover:text-acid" lang="bn">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
