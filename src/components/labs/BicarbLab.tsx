import { useEffect, useRef, useState } from "react";
import { LabShell } from "../LabModule";
import { I } from "../../lib/anim";
import { cn } from "../../utils/cn";

const BUBBLES = [
  { cx: 118, r: 5, d: 0, dur: 1.5 },
  { cx: 132, r: 7, d: 0.35, dur: 1.8 },
  { cx: 146, r: 4, d: 0.7, dur: 1.4 },
  { cx: 124, r: 6, d: 1.05, dur: 1.9 },
  { cx: 140, r: 5, d: 0.2, dur: 1.6 },
  { cx: 152, r: 3.5, d: 0.85, dur: 1.35 },
  { cx: 112, r: 4, d: 1.25, dur: 1.7 },
];

export default function BicarbLab() {
  const [fizzing, setFizzing] = useState(false);
  const [lime, setLime] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    if (fizzing) return;
    setFizzing(true);
  };
  const reset = () => {
    timers.current.forEach(clearTimeout);
    setFizzing(false);
    setLime(false);
  };

  return (
    <LabShell num="০২" title="সোডিয়াম বাইকার্বোনেটের সাথে বিক্রিয়া — অ্যাসিড সনাক্তকরণ" titleEn="Reaction with NaHCO₃ · The Acid Test" tone="amber" id="lab-fizz">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* test tube + lime water visual */}
        <div className="relative rounded-md border border-cream/10 bg-ink/50 p-4">
          <svg viewBox="0 0 460 300" className="w-full" role="img" aria-label="সোডিয়াম বাইকার্বোনেটের সাথে অ্যাসিটিক অ্যাসিডের বিক্রিয়ায় কার্বন ডাইঅক্সাইড নির্গমন ও চুনজল পরীক্ষা">
            {/* powder spoon */}
            {fizzing && (
              <g className="anim-pop">
                <path d="M88 42 q14 -10 28 0 l-4 12 h-20 z" fill="#ffc24b" />
                <text x="102" y="32" textAnchor="middle" fontSize="11.5" fill="#ffc24b" fontFamily="Space Grotesk" fontWeight="700">
                  NaHCO₃
                </text>
              </g>
            )}

            {/* test tube */}
            <path d="M100 60 v160 a35 35 0 0 0 70 0 V60" fill="none" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="90" y1="60" x2="110" y2="60" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="160" y1="60" x2="180" y2="60" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <path
              d="M105 120 v100 a30 30 0 0 0 60 0 V120 z"
              fill={fizzing ? "#ffc24b" : "#c9f24e"}
              opacity={fizzing ? 0.45 : 0.35}
              style={{ transition: "fill 1s ease" }}
            />
            <ellipse cx="135" cy="120" rx="30" ry="5.5" fill={fizzing ? "#ffc24b" : "#c9f24e"} opacity="0.6" style={{ transition: "fill 1s ease" }} />

            {/* bubbles */}
            {fizzing &&
              BUBBLES.map((b, i) => (
                <circle
                  key={i}
                  cx={b.cx}
                  cy="205"
                  r={b.r}
                  fill="#edf3ea"
                  className="bubble"
                  style={{ animationDelay: `${b.d}s`, animationDuration: `${b.dur}s` }}
                />
              ))}

            {/* CO2 escape arrow */}
            {fizzing && (
              <g className="anim-pop" style={{ animationDelay: "0.5s" }}>
                <path d="M135 96 V40" stroke="#ffc24b" strokeWidth="2.4" strokeDasharray="5 5" />
                <path d="M127 48 l8 -12 l8 12" fill="none" stroke="#ffc24b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <text x="135" y="24" textAnchor="middle" fontSize="14.5" fill="#ffc24b" fontFamily="Space Grotesk" fontWeight="700">
                  CO₂ ↑
                </text>
              </g>
            )}

            {/* delivery tube to lime water */}
            <path
              d="M170 78 h120 a14 14 0 0 1 14 14 v58"
              fill="none"
              stroke="#a4b9ab"
              strokeOpacity={fizzing ? 0.85 : 0.35}
              strokeWidth="5"
              strokeLinecap="round"
              style={{ transition: "stroke-opacity 0.6s" }}
            />
            {fizzing && lime && <circle cx="304" cy="120" r="4" fill="#edf3ea" className="bubble" style={{ animationDelay: "0.2s", animationDuration: "1.2s" }} />}

            {/* lime water beaker */}
            <path d="M262 150 v80 a18 18 0 0 0 18 18 h48 a18 18 0 0 0 18-18 v-80" fill="none" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="252" y1="150" x2="272" y2="150" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <line x1="336" y1="150" x2="356" y2="150" stroke="#edf3ea" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <rect x="266" y="168" width="76" height="76" rx="14" fill={lime ? "#e9e4d8" : "#6fe3d4"} opacity={lime ? 0.8 : 0.25} style={{ transition: "fill 1.4s ease, opacity 1.4s ease" }} />
            <text x="304" y="272" textAnchor="middle" fontSize="13" fill="#a4b9ab" fontFamily="Hind Siliguri, sans-serif">
              স্বচ্ছ চুনজল Ca(OH)₂
            </text>
            {lime && (
              <g className="anim-pop" style={{ animationDelay: "0.9s" }}>
                <text x="304" y="290" textAnchor="middle" fontSize="13.5" fill="#ffc24b" fontFamily="Hind Siliguri, sans-serif" fontWeight="700">
                  ঘোলা হয়ে গেল — CO₂ নিশ্চিত!
                </text>
              </g>
            )}

            <text x="135" y="272" textAnchor="middle" fontSize="13" fill="#a4b9ab" fontFamily="Hind Siliguri, sans-serif">
              {fizzing ? "তীব্র বুদবুদ — এফাভারভেসেন্স!" : "অ্যাসিটিক অ্যাসিড দ্রবণ"}
            </text>
          </svg>
        </div>

        {/* explainer */}
        <div className="flex flex-col">
          <p className="font-bengali text-[15px] leading-relaxed text-sage">
            অ্যাসিটিক অ্যাসিডের দ্রবণে <span className="font-semibold text-cream">NaHCO₃</span> (খাবার সোডা) যোগ করলেই তীব্র বুদবুদসহ বেরিয়ে আসে{" "}
            <span className="font-semibold text-amber">বর্ণহীন, গন্ধহীন CO₂ গ্যাস</span> — যা স্বচ্ছ চুনজলকে ঘোলা করে দেয়।
          </p>
          <div className="eq mt-5 rounded-md border border-cream/10 bg-ink/60 px-4 py-4 font-display text-[14px] font-semibold text-cream sm:text-[15.5px]">
            CH<sub>3</sub>COOH <span className="text-mist">+</span> NaHCO<sub>3</sub> <span className="mx-2 text-amber">⟶</span>{" "}
            <span className={cn("rounded px-1 transition-all duration-700", fizzing ? "bg-amber/15 text-amber" : "text-mist/50")}>
              CH<sub>3</sub>COONa
            </span>{" "}
            <span className="text-mist">+</span>{" "}
            <span className={cn("rounded px-1 transition-all duration-700", fizzing ? "bg-amber/15 text-amber" : "text-mist/50")}>
              CO<sub>2</sub>↑
            </span>{" "}
            <span className="text-mist">+</span> <span className={cn("rounded px-1 transition-all duration-700", fizzing ? "bg-amber/15 text-amber" : "text-mist/50")}>H<sub>2</sub>O</span>
          </div>

          {/* remember callout */}
          <div className="mt-5 flex gap-3.5 rounded-md border border-amber/30 bg-amber/8 p-4">
            <I.bulb className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
            <p className="font-bengali text-[14px] leading-relaxed text-sage">
              <span className="font-bold text-amber">মনে রাখো:</span> এটাই <span className="font-bold text-cream">—COOH মূলক সনাক্তকরণের সুনির্দিষ্ট পরীক্ষা</span>।
              অ্যালকোহল বা ফেনল NaHCO₃-এর সাথে CO₂ দিতে পারে না — তাই বুদবুদ মানেই কার্বক্সিলিক অ্যাসিড।
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <button
              onClick={run}
              disabled={fizzing}
              className="btn-shine inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-bengali text-[14.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(255,194,75,0.5)] disabled:cursor-wait disabled:opacity-70"
            >
              <I.flask className="h-4.5 w-4.5" />
              {fizzing ? "বুদবুদ উঠছে…" : "NaHCO₃ ফেলো"}
            </button>
            <button
              onClick={() => setLime(true)}
              disabled={!fizzing || lime}
              className="inline-flex items-center gap-2 rounded-md border border-cream/15 px-5 py-3 font-bengali text-[14.5px] font-semibold text-sage transition-all duration-300 enabled:hover:border-amber/50 enabled:hover:text-cream disabled:opacity-40"
            >
              <I.eye className="h-4.5 w-4.5" />
              {lime ? "চুনজল ঘোলা ✓" : "গ্যাস চুনজলে পাঠাও"}
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
