import { useState } from "react";

type AtomDef = {
  id: string;
  x: number;
  y: number;
  r: number;
  el: string;
  name: string;
  fill: string;
  text: string;
  stroke: string;
};

const ATOMS: AtomDef[] = [
  { id: "c1", x: 155, y: 265, r: 30, el: "C", name: "কার্বন (মিথিল, -CH₃)", fill: "#2f3d34", text: "#edf3ea", stroke: "#c9f24e" },
  { id: "h1", x: 88, y: 198, r: 17, el: "H", name: "হাইড্রোজেন", fill: "#edf3ea", text: "#0a120e", stroke: "#edf3ea" },
  { id: "h2", x: 76, y: 322, r: 17, el: "H", name: "হাইড্রোজেন", fill: "#edf3ea", text: "#0a120e", stroke: "#edf3ea" },
  { id: "h3", x: 170, y: 374, r: 17, el: "H", name: "হাইড্রোজেন", fill: "#edf3ea", text: "#0a120e", stroke: "#edf3ea" },
  { id: "c2", x: 292, y: 212, r: 30, el: "C", name: "কার্বন (কার্বক্সিল)", fill: "#2f3d34", text: "#edf3ea", stroke: "#c9f24e" },
  { id: "o1", x: 347, y: 98, r: 25, el: "O", name: "অক্সিজেন (=O, কার্বনাইল)", fill: "#ff7a59", text: "#0a120e", stroke: "#ff9a80" },
  { id: "o2", x: 408, y: 272, r: 25, el: "O", name: "অক্সিজেন (-OH)", fill: "#ff7a59", text: "#0a120e", stroke: "#ff9a80" },
  { id: "oh", x: 487, y: 236, r: 17, el: "H", name: "অ্যাসিডিক হাইড্রোজেন (δ+)", fill: "#edf3ea", text: "#0a120e", stroke: "#c9f24e" },
];

const BONDS = [
  { a: "c1", b: "c2", double: false },
  { a: "c1", b: "h1", double: false },
  { a: "c1", b: "h2", double: false },
  { a: "c1", b: "h3", double: false },
  { a: "c2", b: "o1", double: true },
  { a: "c2", b: "o2", double: false },
  { a: "o2", b: "oh", double: false },
];

export default function Molecule({ interactive = false }: { interactive?: boolean }) {
  const [active, setActive] = useState<AtomDef | null>(null);
  const byId = (id: string) => ATOMS.find((a) => a.id === id)!;

  return (
    <div className="relative">
      <svg viewBox="0 0 540 440" className="w-full" role="img" aria-label="অ্যাসিটিক অ্যাসিড (CH₃COOH) অণুর গাঠনিক চিত্র">
        <defs>
          <radialGradient id="molglow" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#c9f24e" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#c9f24e" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="540" height="440" fill="url(#molglow)" />

        {/* functional group ring */}
        <ellipse
          cx="390"
          cy="196"
          rx="132"
          ry="122"
          transform="rotate(-16 390 196)"
          fill="none"
          stroke="#c9f24e"
          strokeOpacity="0.42"
          strokeWidth="1.6"
          strokeDasharray="7 7"
          className="anim-breathe"
          style={{ transformOrigin: "390px 196px", transformBox: "view-box" }}
        />

        {/* orbiting electron around CH3 carbon */}
        <g className="anim-orbit" style={{ transformOrigin: "155px 265px" }}>
          <circle cx="155" cy="265" r="52" fill="none" stroke="#6fe3d4" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 6" />
          <circle cx="207" cy="265" r="4" fill="#6fe3d4" />
        </g>

        {/* pulse ring behind carboxyl carbon */}
        <circle cx="292" cy="212" r="40" fill="none" stroke="#c9f24e" strokeWidth="1.4" className="pulse-ring" />

        {/* bonds */}
        {BONDS.map((b, i) => {
          const A = byId(b.a);
          const B = byId(b.b);
          const dx = B.x - A.x;
          const dy = B.y - A.y;
          const len = Math.hypot(dx, dy);
          const nx = (-dy / len) * 4.5;
          const ny = (dx / len) * 4.5;
          return b.double ? (
            <g key={i}>
              <line x1={A.x + nx} y1={A.y + ny} x2={B.x + nx} y2={B.y + ny} stroke="#edf3ea" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" className="draw" style={{ animationDelay: `${0.25 + i * 0.13}s` }} />
              <line x1={A.x - nx} y1={A.y - ny} x2={B.x - nx} y2={B.y - ny} stroke="#edf3ea" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" className="draw" style={{ animationDelay: `${0.35 + i * 0.13}s` }} />
            </g>
          ) : (
            <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#edf3ea" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" className="draw" style={{ animationDelay: `${0.25 + i * 0.13}s` }} />
          );
        })}

        {/* atoms */}
        {ATOMS.map((a, i) => (
          <g
            key={a.id}
            className={interactive ? "atom" : "anim-pop"}
            style={interactive ? undefined : { animationDelay: `${0.5 + i * 0.09}s` }}
            onMouseEnter={interactive ? () => setActive(a) : undefined}
            onMouseLeave={interactive ? () => setActive(null) : undefined}
            tabIndex={interactive ? 0 : undefined}
            onFocus={interactive ? () => setActive(a) : undefined}
            onBlur={interactive ? () => setActive(null) : undefined}
            role={interactive ? "button" : undefined}
            aria-label={a.name}
          >
            <title>{a.name}</title>
            <circle cx={a.x} cy={a.y} r={a.r} fill={a.fill} stroke={a.stroke} strokeOpacity={0.75} strokeWidth="2" />
            <text x={a.x} y={a.y + (a.r > 20 ? 7 : 5)} textAnchor="middle" fontSize={a.r > 20 ? 21 : 15} fontWeight="700" fill={a.text} fontFamily="Space Grotesk, sans-serif">
              {a.el}
            </text>
          </g>
        ))}

        {/* labels */}
        <text x="150" y="425" textAnchor="middle" fontSize="14" fill="#a4b9ab" fontFamily="Hind Siliguri, sans-serif">
          মিথিল মূলক (CH₃—)
        </text>
        <text x="420" y="400" textAnchor="middle" fontSize="14" fill="#c9f24e" fontFamily="Hind Siliguri, sans-serif" fontWeight="600">
          কার্বক্সিল মূলক (—COOH)
        </text>
        <text x="500" y="210" textAnchor="middle" fontSize="13" fill="#6fe3d4" fontFamily="Space Grotesk, sans-serif">
          δ+
        </text>
      </svg>

      {interactive && (
        <div
          aria-live="polite"
          className="pointer-events-none absolute bottom-2 left-1/2 w-[86%] -translate-x-1/2 rounded-md border border-cream/10 bg-ink/85 px-4 py-2.5 text-center font-bengali text-[13px] text-sage backdrop-blur transition-opacity duration-300"
          style={{ opacity: active ? 1 : 0 }}
        >
          {active ? active.name : "পরমাণুর ওপর মাউস রাখো — পরিচয় জেনে নাও"}
        </div>
      )}
    </div>
  );
}
