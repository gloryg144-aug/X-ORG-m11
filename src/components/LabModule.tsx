import { ReactNode } from "react";
import Molecule from "./Molecule";
import { I, Reveal, SectionHead, Ticks } from "../lib/anim";

export function LabShell({
  num,
  title,
  titleEn,
  tone,
  children,
  id,
}: {
  num: string;
  title: string;
  titleEn: string;
  tone: "aqua" | "amber" | "acid";
  children: ReactNode;
  id?: string;
}) {
  const toneTxt = tone === "aqua" ? "text-aqua" : tone === "amber" ? "text-amber" : "text-acid";
  const toneBrd = tone === "aqua" ? "border-aqua/30" : tone === "amber" ? "border-amber/30" : "border-acid/30";
  return (
    <Reveal as="article" delay={80} className="scroll-mt-28">
      <div id={id} className="relative rounded-lg border border-cream/10 bg-moss/60 p-5 sm:p-8">
        <Ticks />
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className={`rounded-md border ${toneBrd} bg-ink/60 px-3 py-1 font-display text-[12px] font-bold tracking-[0.2em] ${toneTxt}`}>
            ল্যাব {num}
          </span>
          <div>
            <h3 className="font-bd text-xl font-bold leading-snug text-cream sm:text-2xl" lang="bn">
              {title}
            </h3>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">{titleEn}</p>
          </div>
        </div>
        {children}
      </div>
    </Reveal>
  );
}

const ID_ROWS = [
  ["IUPAC নাম", "ইথানোইক অ্যাসিড (Ethanoic Acid)"],
  ["প্রচলিত নাম", "অ্যাসিটিক অ্যাসিড (Acetic Acid)"],
  ["আণবিক সংকেত", "C₂H₄O₂"],
  ["গাঠনিক সংকেত", "CH₃—COOH"],
  ["কার্যকারী মূলক", "—COOH (কার্বক্সিলিক অ্যাসিড মূলক)"],
];

export function StructCard() {
  return (
    <Reveal delay={120}>
      <div className="relative overflow-hidden rounded-lg border border-cream/10 bg-gradient-to-br from-fern/70 to-moss p-5 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua/40 bg-aqua/10 px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-aqua">
              <I.atom className="h-4 w-4" /> Basic Idea
            </span>
            <h3 className="mt-4 font-bd text-2xl font-bold text-cream" lang="bn">
              অণুটাকে আগে চিনে নাও
            </h3>
            <p className="mt-3 font-bengali text-[15px] leading-relaxed text-sage">
              অ্যাসিটিক অ্যাসিড একটি <span className="font-semibold text-cream">মৃদু জৈব এক-ক্ষারীয় অ্যাসিড</span>। এর শক্তির গোড়াটা হলো{" "}
              <span className="font-semibold text-acid">—COOH কার্বক্সিল মূলক</span> — এই মূলকের H-টাই সব বিক্রিয়ার নায়ক।
            </p>
            <dl className="mt-6 space-y-0 divide-y divide-cream/8 rounded-md border border-cream/10 bg-ink/40">
              {ID_ROWS.map(([k, v]) => (
                <div key={k} className="group flex items-baseline gap-4 px-4 py-3 transition-colors duration-300 hover:bg-acid/5">
                  <dt className="w-32 shrink-0 font-bengali text-[13px] font-semibold text-mist transition-colors group-hover:text-acid">{k}</dt>
                  <dd className="font-bengali text-[14px] font-semibold text-cream">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <Molecule interactive />
            <p className="mt-1 text-center font-display text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mist">
              ball-and-stick · hover the atoms
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function LabModule({ children }: { children: ReactNode }) {
  return (
    <section id="module" className="relative scroll-mt-24 py-20 md:py-28" lang="bn">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-acid/30 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="লাইভ মডিউল প্রিভিউ · অধ্যায়: জৈব রসায়ন"
          title={
            <>
              মডিউল ১১ — অ্যাসিটিক অ্যাসিডের
              <br className="hidden sm:block" /> <span className="text-acid">রাসায়নিক ধর্ম</span>, হাতে-কলমে
            </>
          }
          sub="ভিনেগারের সেই সুপরিচিত ঝাঁঝালো টক গন্ধের মূল উৎস CH₃COOH। কিন্তু রসায়নাগারে এটি পরিচিত তার তিনটি চমৎকার বিক্রিয়ার জন্য — ক্ষারের সাথে প্রসমন, বাইকার্বোনেটের সাথে CO₂-এর ফেনা, আর ইথানলের সাথে মিষ্টি সুগন্ধের এস্টার। নিচের ল্যাবগুলোতে ক্লিক করে বিক্রিয়াগুলো নিজেই ঘটাও।"
        />

        <div className="space-y-6 md:space-y-8">
          <StructCard />
          {children}
        </div>
      </div>
    </section>
  );
}
