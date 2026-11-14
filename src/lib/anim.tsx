import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ---------------- useInView ---------------- */
export function useInView<T extends HTMLElement>(threshold = 0.16) {
  const ref = useRef<T | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, on };
}

/* ---------------- Reveal ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  from,
  as = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "l" | "r" | "z";
  as?: "div" | "section" | "li" | "span" | "article";
  style?: CSSProperties;
}) {
  const { ref, on } = useInView<HTMLDivElement>();
  return createElement(
    as,
    {
      ref,
      className: cn("rv", from && `rv-${from}`, on && "on", className),
      style: { transitionDelay: `${delay}ms`, ...style },
    },
    children
  );
}

/* ---------------- useCountUp ---------------- */
export function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

/* ---------------- ScrambleText ---------------- */
const GLYPHS = "CH₃COOH↔⇌Δ#*+·";
export function ScrambleText({
  text,
  className,
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [out, setOut] = useState(text);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      return;
    }
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      const locked = Math.floor(frame / 2.2);
      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < locked) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setOut(next);
      if (locked >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed]);
  return (
    <span className={className} aria-label={text}>
      {out}
    </span>
  );
}

/* ---------------- SectionHead ---------------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
  tone = "acid",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  tone?: "acid" | "aqua" | "amber";
}) {
  const toneCls =
    tone === "aqua" ? "text-aqua border-aqua/40 bg-aqua/10" : tone === "amber" ? "text-amber border-amber/40 bg-amber/10" : "text-acid border-acid/40 bg-acid/10";
  return (
    <div className={cn("mb-12 md:mb-16 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.22em]",
            toneCls
          )}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-cream sm:text-4xl md:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={180}>
          <p className="mt-5 font-bengali text-base leading-relaxed text-sage md:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Ticks (corner frame decoration) ---------------- */
export function Ticks({ className }: { className?: string }) {
  const base = "absolute h-3.5 w-3.5 border-acid/60";
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <span className={cn(base, "left-0 top-0 border-l-2 border-t-2")} />
      <span className={cn(base, "right-0 top-0 border-r-2 border-t-2")} />
      <span className={cn(base, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(base, "bottom-0 right-0 border-b-2 border-r-2")} />
    </span>
  );
}

/* ---------------- small inline icons ---------------- */
export const I = {
  flask: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={p.className} aria-hidden="true">
      <path d="M9.5 3h5M10.5 3v5.2L5.3 17a2.4 2.4 0 0 0 2.1 3.6h9.2a2.4 2.4 0 0 0 2.1-3.6l-5.2-8.8V3" />
      <path d="M7.4 14.5h9.2" />
      <circle cx="11" cy="17.4" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="16.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  bulb: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={p.className} aria-hidden="true">
      <path d="M12 3a6.2 6.2 0 0 0-3.6 11.2c.8.6 1.1 1.4 1.1 2.3h5c0-.9.3-1.7 1.1-2.3A6.2 6.2 0 0 0 12 3Z" />
      <path d="M9.8 19.5h4.4M10.6 22h2.8" />
    </svg>
  ),
  warn: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={p.className} aria-hidden="true">
      <path d="M12 4 2.8 19.6a1 1 0 0 0 .9 1.4h16.6a1 1 0 0 0 .9-1.4L12 4Z" />
      <path d="M12 10v4.4" />
      <circle cx="12" cy="17.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  target: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={p.className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  check: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={p.className} aria-hidden="true">
      <path d="m4.5 12.6 5 5L19.5 6.8" />
    </svg>
  ),
  arrow: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={p.className} aria-hidden="true">
      <path d="M4 12h15m0 0-6-6m6 6-6 6" />
    </svg>
  ),
  down: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={p.className} aria-hidden="true">
      <path d="M12 4v15m0 0 6-6m-6 6-6-6" />
    </svg>
  ),
  star: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden="true">
      <path d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 16.9 6.3 20l1.2-6.3L2.8 9.3l6.4-.8L12 2.6z" />
    </svg>
  ),
  atom: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={p.className} aria-hidden="true">
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  ),
  eye: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={p.className} aria-hidden="true">
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  ),
  play: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden="true">
      <path d="M8 5.8v12.4c0 .8.9 1.3 1.6.9l10-6.2c.6-.4.6-1.4 0-1.8l-10-6.2c-.7-.4-1.6.1-1.6.9Z" />
    </svg>
  ),
  plus: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={p.className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
};
