import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

const principleMeta = [
  {
    id: "01",
    title: "No emotion labels",
    detail: "The system surfaces timing and change, not named feelings.",
    accent: "#BFD7EA",
  },
  {
    id: "02",
    title: "No diagnosis",
    detail: "It does not infer clinical meaning or assign therapeutic conclusions.",
    accent: "#E6C79C",
  },
  {
    id: "03",
    title: "No therapist evaluation",
    detail: "The interface never scores the therapist or judges the session.",
    accent: "#B7C9C0",
  },
  {
    id: "04",
    title: "No surveillance",
    detail: "The prototype is designed as an optional attentional aid, not oversight.",
    accent: "#D8D0C3",
  },
] as const;

export function SafetySection() {
  const section = sectionContent.safety;

  return (
    <SectionContainer
      id="safety"
      className="pt-4 pb-7 sm:pt-6 sm:pb-9 lg:pt-6 lg:pb-10"
    >
      <div className="relative overflow-hidden rounded-[38px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.84),rgba(17,23,31,0.92)_48%,rgba(14,20,28,0.94))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-[-8%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.12),rgba(191,215,234,0.04)_38%,transparent_70%)] blur-[28px]" />
        <div className="pointer-events-none absolute right-[-6%] top-[-8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(230,199,156,0.12),rgba(230,199,156,0.04)_36%,transparent_72%)] blur-[30px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C3]" aria-hidden="true" />
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                Design Principles
              </p>
            </div>

            <SectionHeadline className="mt-6 max-w-[10ch]">
              {section.headline}
            </SectionHeadline>

            <SectionSubtext className="mt-6 max-w-[26ch] text-[1.05rem] leading-[1.85] text-[#C0CAD4] sm:text-[1.12rem] sm:leading-[1.9]">
              The interface is intentionally narrow in what it claims, what it suggests, and what it is allowed to mean.
            </SectionSubtext>

            <div className="mt-8 w-fit rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-4 shadow-[0_14px_36px_rgba(0,0,0,0.16)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8F9BA8]">
                Core Rule
              </p>
              <p className="mt-2 text-[1.12rem] leading-8 text-[#E3E8EF]">
                {section.closingLine}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principleMeta.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
              >
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                  }}
                />
                <div
                  className="pointer-events-none absolute right-[-18%] top-[-12%] h-24 w-24 rounded-full blur-[18px]"
                  style={{
                    background: `radial-gradient(circle, ${item.accent}22, transparent 68%)`,
                  }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7B4C2]">
                    {item.id}
                  </div>
                  <div
                    className="h-3 w-12 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                      opacity: 0.55,
                    }}
                  />
                </div>

                <h3 className="relative mt-6 text-[1.34rem] font-medium tracking-[-0.025em] text-[#EFF2F6]">
                  {item.title}
                </h3>
                <p className="relative mt-3 max-w-[24ch] text-[0.98rem] leading-7 text-[#AAB6C3]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
