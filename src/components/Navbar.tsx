import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { I } from "../lib/anim";

const LINKS = [
  { href: "#module", label: "লাইভ মডিউল" },
  { href: "#method", label: "মেথড" },
  { href: "#benefits", label: "সুবিধা" },
  { href: "#results", label: "রেজাল্ট" },
  { href: "#mentor", label: "মেন্টর" },
  { href: "#faq", label: "FAQ" },
];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="OXYCHEM home">
      <span className="relative grid h-10 w-10 place-items-center rounded-md border border-acid/40 bg-fern transition-colors duration-300 group-hover:bg-acid/15">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <circle cx="13" cy="19" r="6.5" fill="none" stroke="#c9f24e" strokeWidth="2" />
          <circle cx="24" cy="9" r="3.4" fill="#ff7a59" />
          <line x1="17.5" y1="14.5" x2="21.5" y2="11.5" stroke="#edf3ea" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="13" cy="19" r="2" fill="#c9f24e" />
        </svg>
        <span className="pulse-ring absolute inset-0 rounded-md border border-acid/50" aria-hidden="true" />
      </span>
      <span className="font-display text-lg font-bold tracking-[0.14em] text-cream">
        OXY<span className="text-acid">CHEM</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* announcement */}
      <div className="relative z-40 bg-acid text-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-2 text-[12.5px] font-semibold sm:text-[13px]">
          <I.flask className="h-4 w-4 shrink-0" />
          <span className="font-bengali">নতুন লাইভ: মডিউল ১১ — অ্যাসিটিক অ্যাসিডের রাসায়নিক ধর্ম</span>
          <a href="#module" className="hidden underline decoration-ink/40 underline-offset-2 transition hover:decoration-ink sm:inline">
            এখনই দেখো →
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled ? "glass border-b border-cream/10 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.8)]" : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
          <Logo />
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-md px-3.5 py-2 font-bengali text-[14.5px] font-medium text-sage transition-colors duration-300 hover:text-cream after:absolute after:bottom-0.5 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-acid after:transition-all after:duration-300 hover:after:w-6"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#module"
              className="btn-shine hidden items-center gap-2 rounded-md bg-acid px-4.5 py-2.5 font-bengali text-[14px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream sm:inline-flex"
            >
              <I.play className="h-3.5 w-3.5" />
              ফ্রি-তে শুরু করো
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "মেনু বন্ধ করো" : "মেনু খোলো"}
              className="grid h-10 w-10 place-items-center rounded-md border border-cream/15 text-cream transition-colors hover:border-acid/50 lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span className={cn("absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300", open && "top-1.5 rotate-45")} />
                <span className={cn("absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity duration-200", open && "opacity-0")} />
                <span className={cn("absolute left-0 top-3 h-0.5 w-full bg-current transition-all duration-300", open && "top-1.5 -rotate-45")} />
              </span>
            </button>
          </div>
        </nav>
        {/* mobile panel */}
        <div
          className={cn(
            "glass overflow-hidden border-b border-cream/10 transition-all duration-500 lg:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 border-b-0 opacity-0"
          )}
        >
          <ul className="space-y-1 px-5 py-4">
            {LINKS.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: `${i * 40}ms` }} className={cn("transition-all duration-400", open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0")}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-bengali text-[15px] font-medium text-sage transition-colors hover:bg-cream/5 hover:text-acid"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#module" onClick={() => setOpen(false)} className="block rounded-md bg-acid px-4 py-3 text-center font-bengali text-[15px] font-bold text-ink">
                ফ্রি-তে শুরু করো
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
