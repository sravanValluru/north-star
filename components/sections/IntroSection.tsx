import { SectionContainer } from "@/components/layout/SectionContainer";
import { sectionContent } from "@/content/sectionContent";

export function IntroSection() {
  const section = sectionContent.intro;

  return (
    <SectionContainer id="intro" className="min-h-[92vh] pt-24 sm:pt-28">
      <div className="relative overflow-hidden rounded-[42px] border border-[rgba(186,198,211,0.14)] bg-[radial-gradient(circle_at_16%_20%,rgba(191,215,234,0.1),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(230,199,156,0.1),transparent_22%),linear-gradient(180deg,rgba(14,18,25,0.94),rgba(10,14,20,0.98))] px-6 py-8 shadow-[0_30px_110px_rgba(0,0,0,0.34)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-4rem] top-24 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_68%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-4rem] right-[-2rem] h-56 w-56 bg-[radial-gradient(circle,rgba(191,215,234,0.12),transparent_64%)] blur-3xl"
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_12.5rem] lg:gap-12">
          <div className="space-y-9">
            <div className="flex items-start justify-between gap-6">
              <p className="max-w-[24ch] text-[11px] font-medium uppercase tracking-[0.3em] text-[#98A4B1]">
                {section.microcopy}
              </p>
            </div>

            <h1 className="max-w-[10.8ch] text-[clamp(3.2rem,7.7vw,6.85rem)] font-medium leading-[0.88] tracking-[-0.068em] text-[#F5F0E9]">
              {section.headline}
            </h1>

            <div className="grid gap-10 pt-4 lg:grid-cols-[minmax(0,35rem)_minmax(0,1fr)] lg:items-end">
              <p className="max-w-[35rem] text-[1.03rem] leading-8 text-[#B7C1CC] sm:text-[1.14rem]">
                {section.subtext}
              </p>
              <div className="space-y-4 lg:justify-self-start">
                <div className="h-px w-16 bg-white/10" />
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#7D8895]">
                  Scope
                </p>
                <div className="space-y-2 text-sm leading-6 text-[#D1D8DF]">
                  <p>Psychotherapy</p>
                  <p>IBS-linked care</p>
                  <p>Prosodic attention</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-between border-l border-white/8 pl-5 lg:min-h-[31rem]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#7F8B99]">
                Opening Note
              </p>
              <p className="mt-5 max-w-[12rem] text-[1.1rem] leading-8 text-[#E3E8EE]">
                The signal is subtle. The interface should feel equally restrained.
              </p>
            </div>
            <div className="mt-10">
              <div className="h-px w-14 bg-white/10" />
              <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8A95A2]">
                Minimal cue system
              </p>
            </div>
          </aside>
        </div>
      </div>
    </SectionContainer>
  );
}
