import { I, Reveal, SectionHead } from "../lib/anim";
import { cn } from "../utils/cn";

const STEPS = [
  {
    icon: I.bulb,
    tag: "HOOK",
    name: "দৃষ্টিভঙ্গির সূচনা",
    desc: "প্রতিটি মডিউল শুরু হয় একটি চেনা মুহূর্ত দিয়ে — ভিনেগারের গন্ধ, লেবুর টক স্বাদ। কনসেপ্ট আগে অনুভব করা যায়, তারপর মুখস্থ।",
    tone: "text-amber border-amber/40 bg-amber/10",
    meta: "~২ মিনিট",
  },
  {
    icon: I.atom,
    tag: "BASIC IDEA",
    name: "মূল কাঠামো",
    desc: "নাম, সংকেত, গঠন — ইন্টারঅ্যাকটিভ মলিকিউল কার্ডে প্রতিটি পরমাণুকে হাতে-নাতে চেনা। ভিত্তি মজবুত হলে বাকিটা সহজ।",
    tone: "text-aqua border-aqua/40 bg-aqua/10",
    meta: "ইন্টারঅ্যাকটিভ",
  },
  {
    icon: I.flask,
    tag: "DEEP EXPLANATION",
    name: "গভীর ব্যাখ্যা",
    desc: "প্রতিটি বিক্রিয়া ধাপে ধাপে — কোন বন্ড ভাঙছে, কোন পরমাণু বদলাচ্ছে, সমীকরণসহ পরিষ্কার ভাষায়।",
    tone: "text-acid border-acid/40 bg-acid/10",
    meta: "৩টি বিক্রিয়া",
  },
  {
    icon: I.eye,
    tag: "VISUALIZATION",
    name: "চোখের সামনে ল্যাব",
    desc: "বুদবুদ, শিখা, রঙ বদল — অ্যানিমেটেড সিমুলেশনে বিক্রিয়া নিজেই ঘটাও। যেটা দেখা যায়, সেটা আর ভোলা যায় না।",
    tone: "text-flame border-flame/40 bg-flame/10",
    meta: "ক্লিক করে চালাও",
  },
  {
    icon: I.target,
    tag: "EXAM SUPPORT",
    name: "পরীক্ষার খাঁটি প্রস্তুতি",
    desc: "মাধ্যমিকের কমন প্রশ্ন, উত্তর লেখার নিখুঁত কৌশল, আর যে ভুলগুলোতে নম্বর কাটে — সব এক জায়গায়।",
    tone: "text-amber border-amber/40 bg-amber/10",
    meta: "মাধ্যমিক প্যাটার্ন",
  },
  {
    icon: I.check,
    tag: "CONCEPT CHECK",
    name: "ধারণা যাচাই",
    desc: "পড়ার পরপরই নিজেকে পরখ করো। উত্তর লুকানো থাকে — ভেবে তারপর দেখো।",
    tone: "text-aqua border-aqua/40 bg-aqua/10",
    meta: "সাথে সাথে ফিডব্যাক",
  },
  {
    icon: I.star,
    tag: "REVISION",
    name: "দ্রুত রিভিশন ছক",
    desc: "পুরো মডিউল এক টেবিলে — বিকারক, শর্ত, উৎপাদ, পর্যবেক্ষণ। পরীক্ষার আগের রাতের সেরা বন্ধু।",
    tone: "text-acid border-acid/40 bg-acid/10",
    meta: "১ পাতায় সব",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-moss/60 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="The OXYCHEM Method"
          title={
            <>
              শেখার ৭টি ধাপ — <span className="text-acid">HOOK</span> থেকে{" "}
              <span className="text-acid">REVISION</span> পর্যন্ত
            </>
          }
          sub="প্রতিটি OXYCHEM মডিউল একই বৈজ্ঞানিক কাঠামো মেনে চলে — যাতে তোমার মস্তিষ্ক জানে ঠিক কোথায় কী খুঁজতে হবে। এটাই শেখার সিস্টেম, এলোমেলো নোট নয়।"
        />

        <div className="relative">
          {/* spine */}
          <div className="absolute bottom-6 left-[22px] top-6 w-px bg-gradient-to-b from-acid/50 via-cream/15 to-aqua/50 md:left-1/2" aria-hidden="true" />

          <ol className="space-y-8 md:space-y-12">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const left = i % 2 === 0;
              return (
                <li key={s.tag} className="relative md:grid md:grid-cols-2 md:gap-14">
                  {/* node */}
                  <span className="absolute left-0 top-1 z-10 grid h-11 w-11 place-items-center rounded-full border border-cream/15 bg-ink font-display text-[13px] font-bold text-acid md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </span>
                  <Reveal
                    as="div"
                    from={left ? "l" : "r"}
                    delay={60}
                    className={cn("ml-16 md:ml-0", left ? "md:col-start-1 md:text-right" : "md:col-start-2")}
                  >
                    <div className={cn("card-lift group inline-block w-full rounded-lg border border-cream/10 bg-moss/70 p-6 text-left", left && "md:text-left")}>
                      <div className="flex items-center justify-between gap-3">
                        <span className={cn("grid h-10 w-10 place-items-center rounded-md border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6", s.tone)}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full border border-cream/10 bg-ink/50 px-2.5 py-1 font-display text-[9.5px] font-bold uppercase tracking-[0.18em] text-mist">
                          {s.meta}
                        </span>
                      </div>
                      <p className="mt-4 font-display text-[11px] font-bold uppercase tracking-[0.24em] text-acid">{s.tag}</p>
                      <h3 className="mt-1 font-bd text-xl font-bold text-cream" lang="bn">{s.name}</h3>
                      <p className="mt-2 font-bengali text-[14px] leading-relaxed text-sage" lang="bn">{s.desc}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
