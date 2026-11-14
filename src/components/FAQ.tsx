import { useState } from "react";
import { I, Reveal, SectionHead } from "../lib/anim";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "OXYCHEM কাদের জন্য?",
    a: "মূলত মাধ্যমিক (WBBSE) পরীক্ষার্থীদের জন্য — ক্লাস ৯-১০-এর ভৌতবিজ্ঞান, জীবনবিজ্ঞান ও গণিত। তবে যে কেউ কনসেপ্ট ভিত্তিক শেখা শুরু করতে চাইলে এটি তার জন্যও।",
  },
  {
    q: "ক্লাস কি সম্পূর্ণ বাংলায় হয়?",
    a: "হ্যাঁ! ব্যাখ্যা সম্পূর্ণ বাংলায়, সাথে প্রতিটি ইংরেজি পরিভাষা জুড়ে দেওয়া থাকে — যাতে পরীক্ষার খাতায় দুই ভাষাতেই নিখুঁত উত্তর লিখতে পারো।",
  },
  {
    q: "অ্যানিমেটেড ল্যাব কি মোবাইলে চলে?",
    a: "অবশ্যই। প্রতিটি ল্যাব সম্পূর্ণ রেসপনসিভ — ফোন, ট্যাব বা কম্পিউটার, ব্রাউজারেই চলে। কোনো অ্যাপ ডাউনলোড বা হাই-স্পিড ইন্টারনেট লাগে না।",
  },
  {
    q: "মডিউল ১১ কি সত্যিই ফ্রি?",
    a: "হ্যাঁ, মডিউল ১১ (অ্যাসিটিক অ্যাসিডের রাসায়নিক ধর্ম) সম্পূর্ণ ফ্রি — তিনটি ইন্টারঅ্যাকটিভ ল্যাব, এক্সাম সাপোর্ট ও রিভিশন ছকসহ।",
  },
  {
    q: "সন্দেহ থাকলে কীভাবে ভাঙব?",
    a: "প্রতিটি মডিউলের শেষে Concept Check থাকে, আর নিয়মিত ডাউট সেশনে অলাউদ্দিন স্যার নিজে প্রশ্নের উত্তর দেন। প্রশ্ন বোকা হয় না — না জিজ্ঞেস করাটাই বোকামি!",
  },
  {
    q: "অন্যান্য অধ্যায় কবে আসবে?",
    a: "জৈব রসায়নের পরবর্তী মডিউল, ভৌতবিজ্ঞান ও জীবনবিজ্ঞানের অধ্যায় ধারাবাহিকভাবে যুক্ত হচ্ছে। ফুটারে ইমেল দিয়ে সাবস্ক্রাইব করলে নতুন মডিউলের খবর সবার আগে পাবে।",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              eyebrow="FAQ"
              title={
                <>
                  প্রশ্ন আছে? <span className="text-acid">থাকবেই।</span>
                  <br />
                  উত্তর এখানে।
                </>
              }
              sub="তবুও কিছু জানার থাকলে সরাসরি জিজ্ঞেস করো — hello@oxychem.in ঠিকানায়। জিজ্ঞাসা করাই শেখার প্রথম ধাপ।"
            />
            <Reveal delay={200}>
              <div className="flex items-center gap-3.5 rounded-md border border-cream/10 bg-moss/60 p-4">
                <I.bulb className="h-6 w-6 shrink-0 text-amber" />
                <p className="font-bengali text-[13.5px] leading-relaxed text-sage" lang="bn">
                  টিপ: প্রশ্নের উত্তর খোঁজার সময় <span className="font-semibold text-cream">প্রথমে রিভিশন ছকটা</span> দেখে নাও — ৮০% সন্দেহ ওখানেই মিটে যায়।
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 70}>
                  <div className={cn("overflow-hidden rounded-md border transition-all duration-400", isOpen ? "border-acid/40 bg-moss shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)]" : "border-cream/10 bg-moss/50 hover:border-cream/25")}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left">
                      <span className="flex items-center gap-3.5">
                        <span className={cn("font-display text-[12px] font-bold transition-colors", isOpen ? "text-acid" : "text-mist")}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-bengali text-[15.5px] font-bold text-cream" lang="bn">{f.q}</span>
                      </span>
                      <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-400", isOpen ? "rotate-45 border-acid/50 bg-acid/10 text-acid" : "border-cream/15 text-sage")}>
                        <I.plus className="h-3.5 w-3.5" />
                      </span>
                    </button>
                    <div className={cn("grid transition-all duration-500 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <p className="border-t border-cream/8 px-5 py-4 pl-[52px] font-bengali text-[14.5px] leading-relaxed text-sage" lang="bn">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
