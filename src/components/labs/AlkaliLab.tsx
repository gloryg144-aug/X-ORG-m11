import { useEffect, useRef, useState } from "react";
import { LabShell } from "../LabModule";
import { I } from "../../lib/anim";
import { cn } from "../../utils/cn";

type Stage = 0 | 1 | 2;

export default function AlkaliLab() {
  const [stage, setStage] = useState<Stage>(0);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    if (stage === 1) return;
    timers.current.forEach(clearTimeout);
    setStage(1);
    timers.current.push(window.setTimeout(() => setStage(2), 1700));
  };
  const reset = () => {
    timers.current.forEach(clearTimeout);
    setStage(0);
  };

  return (
    <LabShell num="০১" title="ক্ষারের সাথে প্রসমন বিক্রিয়া" titleEn="Reaction with Alkali · Neutralization" tone="aqua" id="lab-alkali">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* beaker visual */}
        <div className="relative rounded-md border border-cream/10 bg-ink/50 p-4">
          <svg viewBox="0 0 420 300" className="w-full" role="img" aria-label="অ্যাসিটিক অ্যাসিড ও সোডিয়াম হাইড্রক্সাইডের প্রসমন বিক্রিয়ার অ্যানিমেশন">
            {/* beaker */}
            <path d="M120 70 v150 a30 30 0 0 0 30 30 h120 a30 30 0 0 0 30-30 V70" fill="none" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="108" y1="70" x2="132" y2="70" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="288" y1="70" x2="312" y2="70" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            {/* liquid */}
            <path
              d="M126 150 v70 a24 24 0 0 0 24 24 h120 a24 24 0 0 0 24-24 v-70 z"
              fill={stage === 2 ? "#6fe3d4" : "#c9f24e"}
              opacity={stage === 2 ? 0.55 : 0.4}
              style={{ transition: "fill 1.2s ease, opacity 1.2s ease" }}
            />
            <ellipse cx="210" cy="150" rx="84" ry="8" fill={stage === 2 ? "#6fe3d4" : "#c9f24e"} opacity={0.65} style={{ transition: "fill 1.2s ease" }} />

            {/* swirl when mixing */}
            {stage >= 1 && (
              <g className={cn(stage === 1 && "anim-wobble")} style={{ transformOrigin: "210px 200px" }}>
                <path d="M160 195 q50 -22 100 0" fill="none" stroke="#edf3ea" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
                <path d="M170 215 q40 16 80 0" fill="none" stroke="#edf3ea" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
              </g>
            )}

            {/* NaOH pellet drops */}
            {stage === 1 &&
              [0, 1, 2].map((i) => (
                <g key={i} className="anim-drop" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${190 + i * 22}px 60px` }}>
                  <rect x={184 + i * 22} y="52" width="13" height="13" rx="3" fill="#6fe3d4" />
                  <text x={190.5 + i * 22} y="48" textAnchor="middle" fontSize="11" fill="#6fe3d4" fontFamily="Space Grotesk" fontWeight="700">
                    NaOH
                  </text>
                </g>
              ))}

            {/* products pop */}
            {stage === 2 && (
              <>
                <g className="anim-pop" style={{ animationDelay: "0.1s" }}>
                  <rect x="128" y="96" width="96" height="30" rx="6" fill="#0a120e" stroke="#6fe3d4" strokeWidth="1.6" />
                  <text x="176" y="116" textAnchor="middle" fontSize="14" fill="#6fe3d4" fontFamily="Space Grotesk" fontWeight="700">
                    CH₃COONa
                  </text>
                </g>
                <g className="anim-pop" style={{ animationDelay: "0.35s" }}>
                  <rect x="236" y="96" width="60" height="30" rx="6" fill="#0a120e" stroke="#edf3ea" strokeWidth="1.6" />
                  <text x="266" y="116" textAnchor="middle" fontSize="14" fill="#edf3ea" fontFamily="Space Grotesk" fontWeight="700">
                    H₂O
                  </text>
                </g>
              </>
            )}

            {/* labels */}
            <text x="210" y="285" textAnchor="middle" fontSize="13.5" fill="#a4b9ab" fontFamily="Hind Siliguri, sans-serif">
              {stage === 0 && "পাত্রে আছে অ্যাসিটিক অ্যাসিড দ্রবণ"}
              {stage === 1 && "NaOH মেশানো হচ্ছে… H⁺ প্রতিস্থাপিত হচ্ছে Na⁺ দ্বারা"}
              {stage === 2 && "প্রসমন সম্পূর্ণ — সোডিয়াম অ্যাসিটেট + জল"}
            </text>
          </svg>

          {/* pH meter */}
          <div className="mt-3 rounded-md border border-cream/10 bg-pine px-4 py-3">
            <div className="flex items-center justify-between font-display text-[10.5px] font-semibold uppercase tracking-[0.2em] text-mist">
              <span>pH মিটার</span>
              <span className={cn("font-bengali tracking-normal", stage === 2 ? "text-aqua" : "text-acid")}>
                {stage === 2 ? "pH 7 · নিরপেক্ষ" : "pH ~3 · অম্লীয়"}
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-gradient-to-r from-flame via-amber to-aqua opacity-30" />
            <div className="relative mt-[-8px] h-2">
              <div
                className="absolute top-0 h-2 rounded-full bg-gradient-to-r from-flame via-amber to-aqua transition-all duration-[1400ms] ease-out"
                style={{ width: stage === 2 ? "100%" : "38%" }}
              />
            </div>
          </div>
        </div>

        {/* explainer */}
        <div className="flex flex-col">
          <p className="font-bengali text-[15px] leading-relaxed text-sage">
            অ্যাসিটিক অ্যাসিড <span className="font-semibold text-cream">NaOH</span>-এর মতো তীব্র ক্ষারের সাথে{" "}
            <span className="font-semibold text-aqua">প্রশমন বিক্রিয়া</span> ঘটিয়ে লবণ ও জল তৈরি করে। এখানে —COOH মূলকের{" "}
            <span className="font-semibold text-cream">H-এর জায়গা দখল করে Na</span>।
          </p>
          <div className="eq mt-5 rounded-md border border-cream/10 bg-ink/60 px-4 py-4 font-display text-[15px] font-semibold text-cream sm:text-base">
            CH<sub>3</sub>COOH <span className="text-mist">+</span> NaOH <span className="mx-2 inline-block text-aqua">⟶</span>{" "}
            <span className={cn("rounded px-1.5 transition-all duration-700", stage === 2 ? "bg-aqua/15 text-aqua" : "text-mist/50")}>
              CH<sub>3</sub>COONa
            </span>{" "}
            <span className="text-mist">+</span>{" "}
            <span className={cn("rounded px-1.5 transition-all duration-700", stage === 2 ? "bg-aqua/15 text-aqua" : "text-mist/50")}>
              H<sub>2</sub>O
            </span>
          </div>
          <ul className="mt-5 space-y-2.5 font-bengali text-[14px] text-sage">
            <li className="flex gap-2.5">
              <I.check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
              <span>
                উৎপন্ন লবণ: <span className="font-bold text-cream">সোডিয়াম অ্যাসিটেট</span> (CH₃COONa)
              </span>
            </li>
            <li className="flex gap-2.5">
              <I.check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
              <span>
                উপজাত: <span className="font-bold text-cream">জল</span> (H₂O) — তাই এটি প্রসমন বিক্রিয়া
              </span>
            </li>
            <li className="flex gap-2.5">
              <I.check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
              <span>
                সাধারণ উষ্ণতাতেই ঘটে — কোনো অনুঘটক বা উত্তাপ লাগে না
              </span>
            </li>
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <button
              onClick={run}
              disabled={stage === 1}
              className="btn-shine inline-flex items-center gap-2 rounded-md bg-aqua px-5 py-3 font-bengali text-[14.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(111,227,212,0.5)] disabled:cursor-wait disabled:opacity-70"
            >
              <I.flask className="h-4.5 w-4.5" />
              {stage === 0 ? "NaOH যোগ করো" : stage === 1 ? "বিক্রিয়া চলছে…" : "বিক্রিয়া সম্পন্ন ✓"}
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-md border border-cream/15 px-5 py-3 font-bengali text-[14.5px] font-semibold text-sage transition-all duration-300 hover:border-cream/40 hover:text-cream"
            >
              আবার দেখো
            </button>
          </div>
        </div>
      </div>
    </LabShell>
  );
}
