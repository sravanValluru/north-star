"use client";

import { createRef, useMemo, useRef } from "react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { useHowItWorksTimeline } from "@/components/motion/useHowItWorksTimeline";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { ConceptualFlowDiagram } from "@/components/svg/ConceptualFlowDiagram";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function HowItWorksSection() {
  const section = sectionContent.howItWorks;
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const textRefs = useMemo(
    () => section.steps.map(() => createRef<HTMLParagraphElement>()),
    [section.steps],
  );

  useHowItWorksTimeline({
    sectionRef,
    textRefs,
    reducedMotion,
  });

  return (
    <SectionContainer id="how-it-works" ref={sectionRef}>
      <div className="rounded-[36px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.82),rgba(20,27,36,0.86)_56%,rgba(16,26,31,0.88))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-prose">
            <SectionHeadline className="max-w-[16ch]">
              {section.headline}
            </SectionHeadline>
            <div className="mt-8 grid gap-4">
              {section.steps.map((step, index) => (
                <p
                  key={step}
                  ref={textRefs[index]}
                  className="text-base leading-7 text-muted"
                >
                  {step}
                </p>
              ))}
            </div>
            <SectionSubtext className="mt-8">{section.closingLine}</SectionSubtext>
          </div>
          <div className="rounded-[32px] border border-border bg-[linear-gradient(180deg,rgba(18,25,34,0.9),rgba(15,20,28,0.94))] p-4 sm:p-6">
            <div className="hidden aspect-[1200/420] lg:block">
              <ConceptualFlowDiagram orientation="desktop" />
            </div>
            <div className="aspect-[375/900] lg:hidden">
              <ConceptualFlowDiagram orientation="mobile" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
