import { useState } from "react";
import { I, Reveal } from "../../lib/anim";
import { cn } from "../../utils/cn";

/* ---------------- Exam Support ---------------- */
const EXAM_QS = [
  {
    q: "“একটি টেস্ট টিউবে অজ্ঞাত জৈব দ্রবণ আছে — অ্যাসিড নাকি অ্যালকোহল, একটিমাত্র রাসায়নিক পরীক্ষায় কীভাবে নিশ্চিত করবে?”",
    a: (
      <>
        <p className="font-bengali text-[14px] leading-relaxed">
          দ্রবণটিতে সামান্য <b className="text-cream">সোডিয়াম বাইকার্বোনেট (NaHCO₃)</b> যোগ করো:
        </p>
        <ol className="mt-2 space-y-1.5 font-bengali text-[14px] leading-relaxed">
          <li className="flex gap-2">
            <span className="font-display font-bold text-amber">১.</span>
            <span>তীব্র বুদবুদসহ <b className="text-cream">CO₂</b> নির্গত হলে দ্রবণটি <b className="text-acid">অ্যাসিটিক অ্যাসিড</b>।</span>
          </li>
          <li className="flex gap-2">
            <span className="font-display font-bold text-amber">২.</span>
            <span>কোনো বুদবুদ না উঠলে দ্রবণটি <b className="text-aqua">অ্যালকোহল</b>।</span>
          </li>
        </ol>
        <p className="eq mt-3 rounded border border-cream/10 bg-ink/60 px-3 py-2 font-display text-[13.5px] font-semibold text-sage">
          CH<sub>3</sub>COOH + NaHCO<sub>3</sub> → CH<sub>3</sub>COONa + CO<sub>2</sub>↑ + H<sub>2</sub>O
        </p>
      </>
    ),
  },
  {
    q: "“এস্টারফিকেশন বিক্রিয়া কাকে বলে? একটি উদাহরণ সমীকরণসহ লেখো।”",
    a: (
      <>
        <p className="font-bengali text-[14px] leading-relaxed">
          <b className="text-cream">গাঢ় সালফিউরিক অ্যাসিডের</b> উপস্থিতিতে কার্বক্সিলিক অ্যাসিড ও অ্যালকোহলের বিক্রিয়ায়{" "}
          <b className="text-acid">মিষ্টি গন্ধযুক্ত এস্টার</b> গঠনের প্রক্রিয়াকে <b className="text-cream">এস্টারফিকেশন</b> বলে।
        </p>
        <p className="eq mt-3 rounded border border-cream/10 bg-ink/60 px-3 py-2 font-display text-[13.5px] font-semibold text-sage">
          CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH <span className="text-amber">—(গাঢ় H₂SO₄)→</span> CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O
        </p>
      </>
    ),
  },
];

export function ExamSupport() {
  const [open, setOpen] = useState(0);
  return (
    <Reveal delay={100}>
      <div className="rounded-lg border border-cream/10 bg-pine/70 p-5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-md border border-amber/30 bg-amber/10 px-3 py-1 font-display text-[12px] font-bold tracking-[0.2em] text-amber">
            EXAM SUPPORT
          </span>
          <h3 className="font-bd text-xl font-bold text-cream sm:text-2xl" lang="bn">পরীক্ষাভিত্তিক প্রস্তুতি</h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* common mistake */}
          <div className="flex gap-3.5 rounded-md border border-flame/30 bg-flame/8 p-5">
            <I.warn className="mt-0.5 h-5.5 w-5.5 shrink-0 text-flame" />
            <div>
              <p className="font-display text-[11.5px] font-bold uppercase tracking-[0.2em] text-flame">Common Mistake</p>
              <p className="mt-2 font-bengali text-[14px] leading-relaxed text-sage">
                এস্টারফিকেশনের সমীকরণে তীরচিহ্নের ওপরে <b className="text-cream">গাঢ় H₂SO₄</b> লিখতে ভুলো না — অসম্পূর্ণ রাখলে উত্তর ভুল গণ্য হতে পারে।
                মনে রেখো, এটি <b className="text-cream">অনুঘটক ও নিরুদক</b> — দুই ভূমিকাই পালন করে।
              </p>
            </div>
          </div>
          {/* exam point */}
          <div className="flex gap-3.5 rounded-md border border-amber/30 bg-amber/8 p-5">
            <I.target className="mt-0.5 h-5.5 w-5.5 shrink-0 text-amber" />
            <div>
              <p className="font-display text-[11.5px] font-bold uppercase tracking-[0.2em] text-amber">Exam Point</p>
              <p className="mt-2 font-bengali text-[14px] leading-relaxed text-sage">
                মাধ্যমিকে এই অধ্যায় থেকে <b className="text-cream">প্রতি বছর</b> প্রশ্ন আসে — NaHCO₃ পরীক্ষা ও এস্টারফিকেশনের সমীকরণ দুটো{" "}
                <b className="text-cream">শর্তসহ</b> লেখার অভ্যাস করো।
              </p>
            </div>
          </div>
        </div>

        {/* Q&A accordion */}
        <div className="mt-6 space-y-3">
          {EXAM_QS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={cn("overflow-hidden rounded-md border transition-colors duration-400", isOpen ? "border-amber/40 bg-moss" : "border-cream/10 bg-ink/40 hover:border-cream/25")}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="flex items-start gap-3.5">
                    <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-md font-display text-[13px] font-bold transition-colors", isOpen ? "bg-amber text-ink" : "bg-cream/10 text-sage")}>
                      {i + 1}
                    </span>
                    <span className="font-bengali text-[15px] font-semibold leading-relaxed text-cream">{item.q}</span>
                  </span>
                  <I.plus className={cn("mt-1 h-4.5 w-4.5 shrink-0 text-sage transition-transform duration-400", isOpen && "rotate-45 text-amber")} />
                </button>
                <div className={cn("grid transition-all duration-500 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <div className="border-t border-cream/10 px-5 py-4 pl-[62px]">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------- Concept Check ---------------- */
const CHECKS = [
  {
    q: "অ্যাসিটিক অ্যাসিড ও সোডিয়াম বাইকার্বোনেটের বিক্রিয়ায় উৎপন্ন গ্যাসের নাম ও তার ধর্ম কী?",
    a: "উৎপন্ন গ্যাসটি কার্বন ডাইঅক্সাইড (CO₂) — বর্ণহীন ও গন্ধহীন, এবং এটি স্বচ্ছ চুনজলকে ঘোলা করে।",
  },
  {
    q: "ইথাইল অ্যাসিটেটের গাঠনিক সংকেত কী এবং এটি কোন শ্রেণির জৈব যৌগ?",
    a: "এটি এস্টার শ্রেণির জৈব যৌগ। গাঠনিক সংকেত: CH₃—COO—CH₂—CH₃ (বা CH₃COOC₂H₅)।",
  },
];

export function ConceptCheck() {
  const [revealed, setRevealed] = useState<boolean[]>([false, false]);
  return (
    <Reveal delay={120}>
      <div className="rounded-lg border border-cream/10 bg-moss/60 p-5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-md border border-aqua/30 bg-aqua/10 px-3 py-1 font-display text-[12px] font-bold tracking-[0.2em] text-aqua">
            CONCEPT CHECK
          </span>
          <h3 className="font-bd text-xl font-bold text-cream sm:text-2xl" lang="bn">ধারণা যাচাই করো নিজেই</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {CHECKS.map((c, i) => (
            <div key={i} className="group flex flex-col rounded-md border border-cream/10 bg-ink/40 p-5 transition-colors duration-300 hover:border-aqua/35">
              <p className="font-bengali text-[15px] font-semibold leading-relaxed text-cream">{c.q}</p>
              <div className={cn("overflow-hidden transition-all duration-500", revealed[i] ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0")}>
                <div className="flex gap-2.5 rounded-md border border-aqua/25 bg-aqua/8 p-3.5">
                  <I.check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                  <p className="font-bengali text-[13.5px] leading-relaxed text-sage">{c.a}</p>
                </div>
              </div>
              <button
                onClick={() => setRevealed((r) => r.map((v, j) => (j === i ? !v : v)))}
                className="mt-4 inline-flex w-fit items-center gap-2 font-bengali text-[13.5px] font-bold text-aqua transition-all duration-300 hover:gap-3"
              >
                {revealed[i] ? "উত্তর লুকাও" : "উত্তর দেখো"}
                <I.arrow className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------- Revision Table ---------------- */
const ROWS = [
  {
    reagent: "ক্ষার (NaOH)",
    tone: "aqua" as const,
    cond: "সাধারণ উষ্ণতা",
    product: "CH₃COONa + H₂O",
    name: "সোডিয়াম অ্যাসিটেট",
    obs: "প্রসমন বিক্রিয়া — লবণ ও জল তৈরি",
  },
  {
    reagent: "NaHCO₃ (বাইকার্বোনেট)",
    tone: "amber" as const,
    cond: "সাধারণ উষ্ণতা",
    product: "CH₃COONa + CO₂↑ + H₂O",
    name: "সোডিয়াম অ্যাসিটেট + CO₂",
    obs: "তীব্র বুদবুদে CO₂ নির্গমন — অ্যাসিড পরীক্ষা",
  },
  {
    reagent: "ইথানল (C₂H₅OH)",
    tone: "acid" as const,
    cond: "গাঢ় H₂SO₄ + উত্তাপ",
    product: "CH₃COOC₂H₅ + H₂O",
    name: "ইথাইল অ্যাসিটেট (এস্টার)",
    obs: "মিষ্টি ফলের সুবাস — এস্টারফিকেশন",
  },
];

const TONE = {
  aqua: "border-aqua/35 bg-aqua/10 text-aqua",
  amber: "border-amber/35 bg-amber/10 text-amber",
  acid: "border-acid/35 bg-acid/10 text-acid",
};

export function RevisionTable() {
  return (
    <Reveal delay={140}>
      <div className="overflow-hidden rounded-lg border border-cream/10 bg-pine/70">
        <div className="flex flex-wrap items-center gap-3 px-5 pt-6 sm:px-8">
          <span className="rounded-md border border-acid/30 bg-acid/10 px-3 py-1 font-display text-[12px] font-bold tracking-[0.2em] text-acid">
            REVISION
          </span>
          <h3 className="font-bd text-xl font-bold text-cream sm:text-2xl" lang="bn">দ্রুত রিভিশন ছক — এক নজরে সব</h3>
        </div>
        <p className="px-5 pb-4 pt-2 font-bengali text-[13.5px] text-mist sm:px-8">পরীক্ষার আগের রাতে এই ছকটাই যথেষ্ট।</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-y border-cream/10 bg-ink/60 font-display text-[10.5px] font-bold uppercase tracking-[0.18em] text-mist">
                <th className="px-5 py-3.5 sm:px-8">বিকারক</th>
                <th className="px-4 py-3.5">শর্ত</th>
                <th className="px-4 py-3.5">প্রধান উৎপন্ন বস্তু</th>
                <th className="px-4 py-3.5">নাম</th>
                <th className="px-5 py-3.5 sm:px-8">বিশেষ পর্যবেক্ষণ</th>
              </tr>
            </thead>
            <tbody className="font-bengali text-[13.5px]">
              {ROWS.map((r) => (
                <tr key={r.reagent} className="group border-b border-cream/8 transition-colors duration-300 last:border-0 hover:bg-acid/4">
                  <td className="px-5 py-4 sm:px-8">
                    <span className={cn("inline-block rounded-full border px-3 py-1 text-[12.5px] font-bold", TONE[r.tone])}>{r.reagent}</span>
                  </td>
                  <td className="px-4 py-4 text-sage">{r.cond}</td>
                  <td className="eq px-4 py-4 font-display text-[13px] font-semibold text-cream">{r.product}</td>
                  <td className="px-4 py-4 text-sage">{r.name}</td>
                  <td className="px-5 py-4 text-sage transition-colors group-hover:text-cream sm:px-8">{r.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
