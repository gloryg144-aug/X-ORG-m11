import type { ReactNode } from "react";
import { I, Reveal, Ticks } from "../lib/anim";

export function FinalCTA() {
  return (
    <section className="relative px-4 pb-20 sm:px-6 md:pb-28">
      <Reveal from="z">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-acid/25 bg-gradient-to-br from-fern via-moss to-pine px-6 py-14 text-center sm:px-12 md:py-20">
          <Ticks />
          <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="anim-breathe absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-acid/15 blur-[90px]" aria-hidden="true" />
          {/* orbiting molecule deco */}
          <svg viewBox="0 0 100 100" className="anim-orbit-slow absolute left-6 top-6 h-20 w-20 text-acid/25" aria-hidden="true">
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="92" cy="50" r="2.5" fill="#ff7a59" opacity="0.7" />
          </svg>
          <svg viewBox="0 0 100 100" className="anim-orbit absolute bottom-6 right-6 h-24 w-24 text-aqua/25" aria-hidden="true">
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="8" cy="50" r="2.5" fill="#ffc24b" opacity="0.7" />
          </svg>

          <div className="relative">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-acid">Ready to React?</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-bd text-3xl font-bold leading-tight text-cream md:text-5xl" lang="bn">
              পরবর্তী পরীক্ষার আগে —<br />
              <span className="marker relative z-10 text-acid">একবার OXYCHEM-এ</span> ঘুরে যাও।
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-bengali text-[15.5px] leading-relaxed text-sage" lang="bn">
              মডিউল ১১ এখনই ফ্রি-তে শুরু করো — ৩টি অ্যানিমেটেড ল্যাব, এক্সাম সাপোর্ট আর রিভিশন ছক অপেক্ষা করছে।
              কঠিন বলে কিছু নেই, শুধু এখনো দেখা হয়নি।
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#module"
                className="btn-shine group inline-flex items-center gap-2.5 rounded-md bg-acid px-7 py-4 font-bengali text-[16px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_20px_50px_-14px_rgba(201,242,78,0.5)]"
              >
                <I.flask className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                মডিউল ১১ শুরু করো — ফ্রি
              </a>
              <a
                href="#mentor"
                className="inline-flex items-center gap-2.5 rounded-md border border-cream/20 px-7 py-4 font-bengali text-[16px] font-semibold text-cream transition-all duration-300 hover:border-acid/60 hover:bg-acid/10"
              >
                মেন্টরের কথা শোনো
              </a>
            </div>
            <p className="mt-6 font-bengali text-[12.5px] text-mist" lang="bn">কোনো কার্ড লাগবে না · মোবাইলেই চলবে · ১০ মিনিটে প্রথম বিক্রিয়া</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const COLS = [
  {
    h: "শেখা",
    links: [
      ["লাইভ মডিউল", "#module"],
      ["OXYCHEM মেথড", "#method"],
      ["রেজাল্ট", "#results"],
      ["FAQ", "#faq"],
    ],
  },
  {
    h: "বিষয়",
    links: [
      ["জৈব রসায়ন", "#module"],
      ["ভৌতবিজ্ঞান", "#mentor"],
      ["জীবনবিজ্ঞান", "#mentor"],
      ["গণিত", "#mentor"],
    ],
  },
  {
    h: "ল্যাব নোট",
    links: [
      ["ল্যাব ০১ · প্রসমন", "#lab-alkali"],
      ["ল্যাব ০২ · CO₂ পরীক্ষা", "#lab-fizz"],
      ["ল্যাব ০৩ · এস্টারফিকেশন", "#lab-ester"],
      ["রিভিশন ছক", "#module"],
    ],
  },
];

function Social({ label, children }: { label: string; children: ReactNode }) {
  return (
    <a
      href="#top"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-md border border-cream/12 text-sage transition-all duration-300 hover:-translate-y-1 hover:border-acid/50 hover:text-acid"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-pine/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-acid/40 bg-fern">
                <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
                  <circle cx="13" cy="19" r="6.5" fill="none" stroke="#c9f24e" strokeWidth="2" />
                  <circle cx="24" cy="9" r="3.4" fill="#ff7a59" />
                  <line x1="17.5" y1="14.5" x2="21.5" y2="11.5" stroke="#edf3ea" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="13" cy="19" r="2" fill="#c9f24e" />
                </svg>
              </span>
              <span className="font-display text-lg font-bold tracking-[0.14em] text-cream">
                OXY<span className="text-acid">CHEM</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs font-bengali text-[14px] leading-relaxed text-sage" lang="bn">
              যেখানে জটিল কনসেপ্ট সহজ হয়ে ওঠে — অ্যানিমেটেড ল্যাব, পরীক্ষাভিত্তিক প্রস্তুতি আর ভালোবাসা দিয়ে সাজানো বিজ্ঞান।
            </p>
            <p className="mt-3 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">Where Complex Concepts Become Easy</p>
            <div className="mt-5 flex gap-2.5">
              <Social label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                  <path d="M22 12c0-2.4-.3-4-.8-4.9-.4-.7-1-1.2-1.8-1.4C17.6 5.2 12 5.2 12 5.2s-5.6 0-7.4.5c-.8.2-1.4.7-1.8 1.4C2.3 8 2 9.6 2 12s.3 4 .8 4.9c.4.7 1 1.2 1.8 1.4 1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5c-.8-.2-1.4-.7-1.8-1.4.5-.9.8-2.5.8-4.9ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </Social>
              <Social label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                  <path d="M21.7 3.3 2.9 10.6c-.9.4-.9 1.6.1 1.9l4.6 1.5 1.8 5.5c.3.9 1.4 1 1.9.3l2.4-3 4.7 3.5c.8.6 1.9.2 2.1-.8l3-14.5c.2-1.1-.9-2-1.8-1.7ZM8.5 13.4l8.7-5.4c.3-.2.6.2.3.4l-6.9 6.5-.3 3-1.5-4.5Z" />
                </svg>
              </Social>
              <Social label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </Social>
            </div>
          </div>

          {COLS.map((c) => (
            <nav key={c.h} aria-label={c.h}>
              <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-mist">{c.h}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="group inline-flex items-center gap-2 font-bengali text-[14px] font-medium text-sage transition-colors duration-300 hover:text-acid" lang="bn">
                      <span className="h-px w-0 bg-acid transition-all duration-300 group-hover:w-3.5" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 sm:flex-row">
          <p className="font-bengali text-[13px] text-mist" lang="bn">© 2026 OXYCHEM · Alauddin Mondal · Kalyani, West Bengal</p>
          <p className="flex items-center gap-2 font-bengali text-[13px] text-mist" lang="bn">
            <I.atom className="h-4 w-4 text-acid/60" />
            কৌতূহলী শিক্ষার্থীদের জন্য যত্নে বানানো
          </p>
        </div>
      </div>
    </footer>
  );
}
