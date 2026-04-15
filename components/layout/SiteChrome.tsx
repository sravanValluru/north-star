"use client";

import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "opening-sequence", label: "Opening" },
  { id: "how-it-works", label: "How It Works" },
  { id: "cue-walkthrough", label: "Walkthrough" },
  { id: "safety", label: "Safety" },
  { id: "ibs-context", label: "Context" },
  { id: "roadmap", label: "Roadmap" },
  { id: "closing", label: "Closing" },
] as const;

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollDownOneViewport() {
  window.scrollBy({
    top: Math.max(window.innerHeight * 0.88, 640),
    behavior: "smooth",
  });
}

export function SiteChrome() {
  const [activeId, setActiveId] = useState<string>("intro");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);

  const itemIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const sections = itemIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-24% 0px -48% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [itemIds]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const viewport = window.innerHeight;
      const footer = document.getElementById("site-footer");
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;

      setShowScrollCue(footerTop > viewport - 56);
      setShowTopButton(y > viewport * 1.2);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:hidden">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(16,22,30,0.76),rgba(12,18,24,0.8))] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-[16px] pointer-events-auto sm:px-5">
          <button
            type="button"
            onClick={() => scrollToId("intro")}
            className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D9E1EA]"
          >
            North Star
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#D9E1EA]"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.5 5.25H14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M3.5 9H14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M3.5 12.75H14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <div className="mx-auto mt-3 max-w-[92rem] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,22,30,0.9),rgba(12,18,24,0.94))] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-[16px] pointer-events-auto">
            <div className="grid gap-1">
              {navItems.map((item) => {
                const active = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      scrollToId(item.id);
                      setMenuOpen(false);
                    }}
                    className={`rounded-[18px] px-4 py-3 text-left text-sm transition ${
                      active
                        ? "bg-white/[0.08] text-[#EEF2F6]"
                        : "text-[#97A4B1] hover:bg-white/[0.04] hover:text-[#D9E1EA]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </header>

      <aside className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="group/nav pointer-events-auto relative flex w-[82px] flex-col gap-3 rounded-[34px] border border-[#D7E0E9]/[0.13] bg-[linear-gradient(180deg,rgba(23,29,38,0.8),rgba(10,14,20,0.9))] px-3 py-5 shadow-[0_24px_68px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.018)] backdrop-blur-[20px] transition-[width,box-shadow,background,border-color] duration-300 ease-out hover:w-[220px] hover:border-[#E2EAF2]/[0.17] hover:bg-[linear-gradient(180deg,rgba(24,30,39,0.86),rgba(10,14,20,0.93))] hover:shadow-[0_30px_90px_rgba(0,0,0,0.34)] focus-within:w-[220px] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-[33px] before:border before:border-white/[0.05] before:content-['']">
          <div className="pointer-events-none absolute inset-y-[14px] left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_12%,rgba(255,255,255,0.02)_88%,rgba(255,255,255,0.08))] opacity-60 group-hover/nav:opacity-0 group-focus-within/nav:opacity-0" />
          <nav className="relative z-[1] flex flex-col gap-2">
            {navItems.map((item, index) => {
              const active = activeId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  aria-label={item.label}
                  className={`group/item relative flex min-h-[50px] items-center justify-center gap-3 rounded-[18px] px-3 py-2.5 text-left transition group-hover/nav:justify-start group-focus-within/nav:justify-start ${
                    active
                      ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.028))] text-[#EEF2F6] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_24px_rgba(0,0,0,0.16)]"
                      : "text-[#8F9CA8] hover:bg-white/[0.05] hover:text-[#D9E1EA]"
                  }`}
                >
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[12px] font-medium transition ${
                      active
                        ? "border-white/24 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.24),rgba(255,255,255,0.07))] text-[#F6F8FA] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_24px_rgba(0,0,0,0.2)]"
                        : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] text-[#73808D]"
                    }`}
                  >
                    <span className={`transition-transform duration-200 ${active ? "scale-110" : "group-hover/item:scale-105"}`}>
                      {index + 1}
                    </span>
                  </span>
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-[15px] tracking-[0.01em] opacity-0 transition-all duration-200 ease-out group-hover/nav:max-w-[144px] group-hover/nav:opacity-100 group-focus-within/nav:max-w-[144px] group-focus-within/nav:opacity-100">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      <button
        type="button"
        onClick={scrollDownOneViewport}
        className={`group fixed bottom-8 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#D7E0E9]/[0.12] bg-[linear-gradient(180deg,rgba(23,29,38,0.76),rgba(10,14,20,0.88))] px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-[#D3DCE5] shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-[18px] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-full before:border before:border-white/[0.06] before:content-[''] transition duration-300 ${
          showScrollCue ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label="Scroll down to continue"
      >
        <span className="relative z-[1]">Scroll More</span>
        <span className="relative z-[1] flex h-6 w-6 items-center justify-center rounded-full border border-[#D7E0E9]/[0.14] bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))]">
          <svg
            className="animate-gentle-bob"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <button
        type="button"
        onClick={() => scrollToId("intro")}
        className={`fixed bottom-8 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(16,22,30,0.8),rgba(12,18,24,0.9))] text-[#D9E1EA] shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-[14px] transition duration-300 sm:right-8 ${
          showTopButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3.5 9.5L8 5L12.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
