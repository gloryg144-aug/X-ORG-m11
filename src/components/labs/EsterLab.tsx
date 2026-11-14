import { useEffect, useRef, useState } from "react";
import { LabShell } from "../LabModule";
import { I } from "../../lib/anim";
import { cn } from "../../utils/cn";

type Stage = 0 | 1 | 2;

export default function EsterLab() {
  const [stage, setStage] = useState<Stage>(0);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    if (stage === 1) return;
    timers.current.forEach(clearTimeout);
    setStage(1);
    timers.current.push(window.setTimeout(() => setStage(2), 2600));
  };
  const reset = () => {
    timers.current.forEach(clearTimeout);
    setStage(0);
  };

  return (
    <LabShell num="০৩" title="এস্টারফিকেশন — মিষ্টি সুগন্ধের জাদু" titleEn="Esterification · The Fruity Reaction" tone="acid" id="lab-ester">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* flask visual */}
        <div className="relative rounded-md border border-cream/10 bg-ink/50 p-4">
          <svg viewBox="0 0 440 310" className="w-full" role="img" aria-label="গাঢ় সালফিউরিক অ্যাসিডের উপস্থিতিতে ইথানল ও অ্যাসিটিক অ্যাসিডের এস্টারফিকেশন বিক্রিয়া">
            {/* flame */}
            {stage >= 1 && (
              <g>
                <path className="flame" d="M200 292 q-16 -18 -6 -38 q4 10 10 12 q-2 -14 8 -24 q2 12 8 16 q4 -6 2 -14 q14 12 8 34 q-4 14 -30 14z" fill="#ff7a59" />
                <path className="flame" style={{ animationDelay: "0.12s" }} d="M206 288 q-8 -10 -2 -22 q3 6 7 7 q0 -8 5 -13 q1 7 5 9 q3 -3 2 -8 q8 8 4 20 q-3 8 -21 7z" fill="#ffc24b" />
                <rect x="176" y="294" width="64" height="6" rx="3" fill="#21382c" />
              </g>
            )}

            {/* round bottom flask */}
            <path d="M196 96 v44 a62 62 0 1 0 48 0 V96" fill="none" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="186" y1="96" x2="206" y2="96" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="234" y1="96" x2="254" y2="96" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            {/* mixture */}
            <path d="M166 190 a54 54 0 0 0 108 0 z" fill={stage === 2 ? "#c9f24e" : "#a4b9ab"} opacity={stage === 2 ? 0.5 : 0.32} style={{ transition: "fill 1.2s ease, opacity 1.2s ease" }} />
            <ellipse cx="220" cy="190" rx="54" ry="7" fill={stage === 2 ? "#c9f24e" : "#a4b9ab"} opacity="0.55" style={{ transition: "fill 1.2s ease" }} />
            {stage >= 1 && (
              <>
                <circle cx="204" cy="216" r="4" fill="#edf3ea" className="bubble" style={{ animationDuration: "1.3s" }} />
                <circle cx="232" cy="222" r="3" fill="#edf3ea" className="bubble" style={{ animationDelay: "0.5s", animationDuration: "1.5s" }} />
              </>
            )}

            {/* catalyst chip */}
            {stage >= 1 && (
              <g className="anim-pop">
                <rect x="256" y="70" width="98" height="28" rx="6" fill="#0a120e" stroke="#ffc24b" strokeWidth="1.5" />
                <text x="305" y="89" textAnchor="middle" fontSize="13" fill="#ffc24b" fontFamily="Space Grotesk" fontWeight="700">
                  গাঢ় H₂SO₄
                </text>
                <path d="M256 84 h-12 v56" fill="none" stroke="#ffc24b" strokeWidth="1.5" strokeDasharray="4 4" />
              </g>
            )}

            {/* water leaves */}
            {stage >= 1 && (
              <g>
                <path className="anim-drop" d="M176 140 q6 9 0 13 q-6 -4 0 -13z" fill="#6fe3d4" />
                <text x="160" y="134" textAnchor="end" fontSize="12" fill="#6fe3d4" fontFamily="Space Grotesk" fontWeight="700">
                  H₂O বেরিয়ে যায়
                </text>
              </g>
            )}

            {/* ester result */}
            {stage === 2 && (
              <g>
                <g className="anim-pop" style={{ animationDelay: "0.2s" }}>
                  <rect x="52" y="52" width="132" height="32" rx="7" fill="#0a120e" stroke="#c9f24e" strokeWidth="1.8" />
                  <text x="118" y="73" textAnchor="middle" fontSize="13.5" fill="#c9f24e" fontFamily="Space Grotesk" fontWeight="700">
                    CH₃COOC₂H₅
                  </text>
                </g>
                {/* aroma waves */}
                {[0, 1, 2].map((i) => (
                  <path
                    key={i}
                    className="aroma"
                    style={{ animationDelay: `${i * 0.5}s` }}
                    d={`M${262 + i * 22} 210 q10 -16 0 -32 q-10 -16 0 -32`}
                    fill="none"
                    stroke="#c9f24e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                ))}
                <g className="anim-pop" style={{ animationDelay: "0.6s" }}>
                  <text x="330" y="150" fontSize="14.5" fill="#c9f24e" fontFamily="Hind Siliguri, sans-serif" fontWeight="700">
                    ফলের মিষ্টি
                  </text>
                  <text x="330" y="170" fontSize="14.5" fill="#c9f24e" fontFamily="Hind Siliguri, sans-serif" fontWeight="700">
                    সুগন্ধ!
                  </text>
                </g>
              </g>
            )}

            <text x="220" y="20" textAnchor="middle" fontSize="13.5" fill="#a4b9ab" fontFamily="Hind Siliguri, sans-serif">
              {stage === 0 && "ফ্লাস্কে: অ্যাসিটিক অ্যাসিড + ইথানল"}
              {stage === 1 && "গাঢ় H₂SO₄ দিয়ে উত্তাপ — জল অপসারিত হচ্ছে…"}
              {stage === 2 && "ইথাইল অ্যাসিটেট (এস্টার) তৈরি!"}
            </text>
          </svg>
        </div>

        {/* explainer */}
        <div className="flex flex-col">
          <p className="font-bengali text-[15px] leading-relaxed text-sage">
            <span className="font-semibold text-cream">গাঢ় H₂SO₄</span>-এর উপস্থিতিতে অ্যাসিটিক অ্যাসিড ও ইথানলকে উত্তপ্ত করলে জল অপসারিত হয়ে
            জন্ম নেয় <span className="font-semibold text-acid">ইথাইল অ্যাসিটেট</span> — মিষ্টি ফলের গন্ধওয়ালা এস্টার। এই বিক্রিয়াই{" "}
            <span className="font-semibold text-acid">এস্টারফিকেশন</span>।
          </p>
          <div className="eq mt-5 rounded-md border border-cream/10 bg-ink/60 px-4 py-4">
            <div className="flex flex-wrap items-center gap-x-2 font-display text-[14px] font-semibold text-cream sm:text-[15.5px]">
              <span>
                CH<sub>3</sub>COOH
              </span>
              <span className="text-mist">+</span>
              <span>
                C<sub>2</sub>H<sub>5</sub>OH
              </span>
              <span className="mx-1 inline-flex flex-col items-center leading-none">
                <span className="font-bengali text-[10px] font-bold text-amber">গাঢ় H₂SO₄ · Δ</span>
                <span className="mt-0.5 text-acid">⟶</span>
              </span>
              <span className={cn("rounded px-1.5 transition-all duration-700", stage === 2 ? "bg-acid/15 text-acid" : "text-mist/50")}>
                CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>
              </span>
              <span className="text-mist">+</span>
              <span className={cn("rounded px-1.5 transition-all duration-700", stage === 2 ? "bg-acid/15 text-acid" : "text-mist/50")}>
                H<sub>2</sub>O
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex gap-3 rounded-md border border-cream/10 bg-pine p-3.5">
              <I.atom className="mt-0.5 h-5 w-5 shrink-0 text-acid" />
              <p className="font-bengali text-[13.5px] leading-relaxed text-sage">
                <span className="font-bold text-cream">গাঢ় H₂SO₄</span> এখানে অনুঘটক <span className="text-mist">এবং</span> নিরুদক (জল শোষক) — দুটো ভূমিকা-ই তার।
              </p>
            </div>
            <div className="flex gap-3 rounded-md border border-cream/10 bg-pine p-3.5">
              <I.eye className="mt-0.5 h-5 w-5 shrink-0 text-acid" />
              <p className="font-bengali text-[13.5px] leading-relaxed text-sage">
                বৈশিষ্ট্যপূর্ণ পর্যবেক্ষণ: <span className="font-bold text-cream">মিষ্টি ফলের মতো সুবাস</span> — পরীক্ষাগারে এস্টার চেনার সহজ উপায়।
              </p>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <button
              onClick={run}
              disabled={stage === 1}
              className="btn-shine inline-flex items-center gap-2 rounded-md bg-acid px-5 py-3 font-bengali text-[14.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(201,242,78,0.5)] disabled:cursor-wait disabled:opacity-70"
            >
              <I.flask className="h-4.5 w-4.5" />
              {stage === 0 ? "H₂SO₄ দাও + উত্তাপ দাও" : stage === 1 ? "উত্তপ্ত হচ্ছে…" : "এস্টার তৈরি ✓"}
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
