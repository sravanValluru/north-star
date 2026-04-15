import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { sectionContent } from "@/content/sectionContent";

export function ClosingSection() {
  const section = sectionContent.closing;
  const lines = section.subtext.split("\n");

  return (
    <SectionContainer
      id="closing"
      className="pt-2 pb-6 sm:pt-4 sm:pb-8 lg:pt-4 lg:pb-10"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-border bg-[linear-gradient(145deg,rgba(16,22,30,0.9),rgba(18,27,36,0.94)_46%,rgba(12,18,24,0.98))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(191,215,234,0.12),transparent_24%),radial-gradient(circle_at_76%_74%,rgba(230,199,156,0.1),transparent_22%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C3]" aria-hidden="true" />
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                Closing Reflection
              </p>
            </div>

            <SectionHeadline className="mt-7 max-w-[10ch] text-[clamp(3rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#F4EFE8]">
              {section.headline}
            </SectionHeadline>
          </div>

          <div className="self-end rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8F9BA8]">
              Final Principle
            </p>

            <div className="mt-4 space-y-3">
              {lines.map((line, index) => (
                <p
                  key={line}
                  className={
                    index === 0
                      ? "text-[1.26rem] leading-9 text-[#D9E1EA]"
                      : "text-[1.16rem] leading-9 text-[#F0E8DD]"
                  }
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(191,215,234,0.42),transparent)]" />
              <p className="text-sm uppercase tracking-[0.22em] text-[#9FAAB7]">
                Attentive by design
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
