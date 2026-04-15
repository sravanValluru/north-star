import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

const contextSignals = [
  {
    id: "01",
    title: "Timing matters",
    detail: "Moments of activation can pass quickly, so attentional support has to be early and restrained.",
    accent: "#BFD7EA",
  },
  {
    id: "02",
    title: "Attunement matters",
    detail: "Subtle shifts are often relational before they are fully verbal, especially in emotionally loaded care.",
    accent: "#E6C79C",
  },
  {
    id: "03",
    title: "Subtle shifts matter",
    detail: "IBS psychotherapy sits close to the boundary where physiology and emotion visibly influence one another.",
    accent: "#B7C9C0",
  },
] as const;

export function IBSContextSection() {
  const section = sectionContent.ibsContext;

  return (
    <SectionContainer
      id="ibs-context"
      className="pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-12"
    >
      <div className="relative overflow-hidden rounded-[38px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.84),rgba(17,23,31,0.92)_44%,rgba(13,27,28,0.9))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-[-10%] top-[4%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.12),rgba(191,215,234,0.03)_40%,transparent_72%)] blur-[28px]" />
        <div className="pointer-events-none absolute right-[-6%] bottom-[-10%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(183,201,192,0.12),rgba(183,201,192,0.03)_36%,transparent_72%)] blur-[30px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#BFD7EA]" aria-hidden="true" />
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                Clinical Context
              </p>
            </div>

            <SectionHeadline className="mt-6 max-w-[11ch]">
              {section.headline}
            </SectionHeadline>

            <SectionSubtext className="mt-6 max-w-[31ch] text-[1.05rem] leading-[1.85] text-[#C0CAD4] sm:text-[1.12rem] sm:leading-[1.9]">
              {section.subtext}
            </SectionSubtext>

            <div className="mt-8 max-w-[30rem] rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-5 shadow-[0_16px_38px_rgba(0,0,0,0.16)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8F9BA8]">
                Why This Domain
              </p>
              <p className="mt-3 text-[1.06rem] leading-8 text-[#E2E8EF]">
                In IBS psychotherapy, emotional process and bodily state are often closely coupled. That makes timing, pacing, and physiological sensitivity especially relevant.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {contextSignals.map((item) => (
              <article
                key={item.id}
                className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
              >
                <div
                  className="pointer-events-none absolute inset-y-6 left-0 w-px"
                  style={{
                    background: `linear-gradient(180deg, transparent, ${item.accent}, transparent)`,
                  }}
                />
                <div
                  className="pointer-events-none absolute right-[-16%] top-[-10%] h-24 w-24 rounded-full blur-[18px]"
                  style={{
                    background: `radial-gradient(circle, ${item.accent}22, transparent 68%)`,
                  }}
                />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7B4C2]">
                    {item.id}
                  </div>

                  <div className="min-w-0">
                    <div
                      className="mb-4 h-2 w-16 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                        opacity: 0.6,
                      }}
                    />
                    <h3 className="text-[1.4rem] font-medium tracking-[-0.025em] text-[#EFF2F6]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[30ch] text-[0.99rem] leading-7 text-[#AAB6C3]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
