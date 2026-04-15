import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

const roadmapMilestones = [
  {
    id: "01",
    title: "Baseline calibration",
    detail: "Build stable listening baselines before any cueing becomes meaningful.",
    accent: "#BFD7EA",
    align: "left",
  },
  {
    id: "02",
    title: "Speaker differentiation",
    detail: "Separate therapist and client signals so timing cues stay clinically interpretable.",
    accent: "#E6C79C",
    align: "right",
  },
  {
    id: "03",
    title: "Therapist pilot testing",
    detail: "Validate usefulness in practice with real therapeutic workflows and feedback loops.",
    accent: "#B7C9C0",
    align: "left",
  },
  {
    id: "04",
    title: "Ethical evaluation",
    detail: "Stress-test the system for overreach, unintended influence, and misuse before expansion.",
    accent: "#D8D0C3",
    align: "right",
  },
] as const;

export function RoadmapSection() {
  const section = sectionContent.roadmap;

  return (
    <SectionContainer
      id="roadmap"
      className="pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-12"
    >
      <div className="relative overflow-hidden rounded-[38px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.84),rgba(18,27,36,0.9)_52%,rgba(29,22,18,0.84))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-[50%] top-[9.4rem] hidden h-[24.5rem] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.24),rgba(255,255,255,0.08))] lg:block" />
        <div className="pointer-events-none absolute left-[50%] top-[10.2rem] hidden h-[22rem] w-[16rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.1),transparent_72%)] blur-[26px] lg:block" />

        <div className="relative">
          <div className="max-w-[68rem]">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C3]" aria-hidden="true" />
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                Forward Path
              </p>
            </div>

            <SectionHeadline className="mt-6 max-w-[13ch]">
              {section.headline}
            </SectionHeadline>

            <SectionSubtext className="mt-5 max-w-[46ch] text-[1.02rem] leading-[1.78] text-[#C0CAD4] sm:text-[1.08rem] sm:leading-[1.84]">
              A staged development path that prioritizes calibration, clinical usefulness, and ethical restraint before expansion.
            </SectionSubtext>
          </div>

          <div className="mt-8 grid gap-3 lg:mt-10">
            {roadmapMilestones.map((item) => (
              <div
                key={item.id}
                className={`relative grid ${
                  item.align === "left"
                    ? "lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]"
                    : "lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]"
                } items-center gap-4`}
              >
                <div
                  className={
                    item.align === "left"
                      ? "lg:col-start-1"
                      : "lg:col-start-3"
                  }
                >
                  <article className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                    <div
                      className="pointer-events-none absolute right-[-18%] top-[-16%] h-24 w-24 rounded-full blur-[20px]"
                      style={{
                        background: `radial-gradient(circle, ${item.accent}24, transparent 68%)`,
                      }}
                    />
                    <div
                      className={`pointer-events-none absolute top-1/2 h-px w-10 -translate-y-1/2 ${
                        item.align === "left" ? "right-[-2.25rem]" : "left-[-2.25rem]"
                      }`}
                      style={{
                        background: `linear-gradient(90deg, ${item.align === "left" ? item.accent : "transparent"}, ${
                          item.align === "left" ? "transparent" : item.accent
                        })`,
                        opacity: 0.55,
                      }}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7B4C2]">
                        {item.id}
                      </div>
                    </div>

                    <h3 className="relative mt-5 text-[1.42rem] font-medium tracking-[-0.025em] text-[#EFF2F6]">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 max-w-[32ch] text-[0.99rem] leading-7 text-[#AAB6C3]">
                      {item.detail}
                    </p>
                  </article>
                </div>

                <div className="relative hidden h-full items-center justify-center lg:flex">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/12" />
                  <div
                    className="relative z-10 h-5 w-5 rounded-full border border-white/12"
                    style={{
                      background: `radial-gradient(circle, ${item.accent}, rgba(255,255,255,0.02))`,
                      boxShadow: `0 0 0 10px ${item.accent}12, 0 0 18px ${item.accent}20`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
