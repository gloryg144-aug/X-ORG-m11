const ITEMS: { t: string; tone: string }[] = [
  { t: "FARHA · Math 98", tone: "text-acid" },
  { t: "মাধ্যমিক · WBBSE", tone: "text-sage" },
  { t: "AYESA · Physical Science 99", tone: "text-acid" },
  { t: "জৈব রসায়ন", tone: "text-aqua" },
  { t: "FARHA · PSC 97", tone: "text-acid" },
  { t: "ভৌতবিজ্ঞান", tone: "text-aqua" },
  { t: "FARHA · LSC 95+", tone: "text-acid" },
  { t: "গণিত", tone: "text-aqua" },
  { t: "অ্যানিমেটেড ল্যাব", tone: "text-amber" },
  { t: "জীবনবিজ্ঞান", tone: "text-aqua" },
  { t: "1200+ শিক্ষার্থী", tone: "text-amber" },
  { t: "দ্রুত রিভিশন ছক", tone: "text-amber" },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {ITEMS.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className={`whitespace-nowrap px-5 font-display text-[13px] font-semibold tracking-[0.12em] ${it.tone}`}>{it.t}</span>
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-hedge" fill="currentColor" aria-hidden="true">
            <path d="M6 0l1.6 4.4L12 6 7.6 7.6 6 12 4.4 7.6 0 6l4.4-1.6z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="OXYCHEM results and subjects" className="relative border-y border-cream/10 bg-pine/70 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" aria-hidden="true" />
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          <Row />
          <Row />
        </div>
      </div>
      <span className="sr-only">FARHA Math 98, PSC 97, LSC 95+. Ayesa Physical Science 99. Madhyamik WBBSE preparation in Bengali.</span>
    </section>
  );
}
