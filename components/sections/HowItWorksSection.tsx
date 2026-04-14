"use client";

import { createRef, useMemo, useRef } from "react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { useHowItWorksTimeline } from "@/components/motion/useHowItWorksTimeline";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { ConceptualFlowDiagram } from "@/components/svg/ConceptualFlowDiagram";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

const stepLabels = ["State", "Physiology", "Signal", "Cue"];

export function HowItWorksSection() {
  const section = sectionContent.howItWorks;
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const closingRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const textRefs = useMemo(
    () => section.steps.map(() => createRef<HTMLDivElement>()),
    [section.steps],
  );

  useHowItWorksTimeline({
    sectionRef,
    stepperRef,
    visualRef,
    closingRef,
    textRefs,
    reducedMotion,
  });

  return (
    <SectionContainer
      id="how-it-works"
      ref={sectionRef}
      className="pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-14"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-border bg-[linear-gradient(135deg,rgba(14,20,28,0.9),rgba(16,24,34,0.94)_52%,rgba(10,16,23,0.96))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute left-[-10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.14),rgba(191,215,234,0.04)_34%,transparent_68%)] blur-[30px]" />
        <div className="pointer-events-none absolute right-[-6%] top-[-8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(230,199,156,0.16),rgba(230,199,156,0.05)_36%,transparent_72%)] blur-[32px]" />

        <div className="relative grid gap-10">
          <div className="max-w-none pr-2 lg:pr-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#BFD7EA]" aria-hidden="true" />
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                How It Works
              </p>
            </div>

            <SectionHeadline className="mt-6 max-w-[22ch] text-[clamp(2.8rem,4.3vw,4.35rem)] leading-[0.95] tracking-[-0.052em] lg:max-w-[24ch]">
              {section.headline}
            </SectionHeadline>

            <SectionSubtext className="mt-5 max-w-[84ch] text-[0.98rem] leading-[1.72] text-[#B9C3CE] sm:text-[1.08rem] sm:leading-[1.76] lg:max-w-[96ch]">
              The system follows a physical chain from activation to signal, then deliberately stops short of interpretation.
            </SectionSubtext>
          </div>

          <div ref={stepperRef} className="relative pb-6 lg:pb-16">
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="grid gap-3">
                {section.steps.map((step, index) => (
                  <div
                    key={step}
                    ref={textRefs[index]}
                    className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7B4C2]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#7F8B99]">
                          {stepLabels[index]}
                        </p>
                        <p className="mt-2 text-[1rem] leading-7 text-[#D7DDE6]">
                          {step}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              <div
                ref={closingRef}
                className="rounded-[24px] border border-[rgba(191,215,234,0.18)] bg-[linear-gradient(180deg,rgba(191,215,234,0.09),rgba(255,255,255,0.025))] px-5 py-4"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#8EA3B5]">
                  Human Decision
                </p>
                  <p className="mt-2 text-[1.1rem] leading-8 text-[#E3E8EF]">
                    {section.closingLine}
                  </p>
                </div>
              </div>

            <div
              ref={visualRef}
              className="rounded-[34px] border border-border bg-[linear-gradient(180deg,rgba(14,20,28,0.86),rgba(10,16,23,0.94))] p-3 sm:p-4 lg:p-5"
            >
              <div className="overflow-hidden rounded-[30px] border border-white/6 bg-[radial-gradient(circle_at_18%_24%,rgba(191,215,234,0.14),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(230,199,156,0.12),transparent_30%),linear-gradient(180deg,rgba(15,21,29,0.98),rgba(10,15,22,0.99))]">
                <div className="hidden aspect-[760/980] lg:block">
                  <ConceptualFlowDiagram orientation="desktop" />
                  </div>
                  <div className="aspect-[390/1010] lg:hidden">
                    <ConceptualFlowDiagram orientation="mobile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
