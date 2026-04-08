"use client";

import { createRef, useMemo, useRef } from "react";

import { PhoneAppScreen } from "@/components/device/PhoneAppScreen";
import { PhoneMockup } from "@/components/device/PhoneMockup";
import { PhoneScreenStage } from "@/components/device/PhoneScreenStage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PinnedSection } from "@/components/layout/PinnedSection";
import { useProblemTimeline } from "@/components/motion/useProblemTimeline";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { SoftInfoCard } from "@/components/ui/SoftInfoCard";
import { sectionContent } from "@/content/sectionContent";

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const statementRefs = useMemo(
    () =>
      sectionContent.problem.lines.map(() => createRef<HTMLDivElement>()),
    [],
  );
  const reducedMotion = useReducedMotion();

  useProblemTimeline({
    sectionRef,
    trackRef,
    phoneRef,
    statementRefs,
    reducedMotion,
  });

  return (
    <SectionContainer id="problem" ref={sectionRef} className="min-h-screen">
      <PinnedSection className="rounded-[36px] border border-white/70 bg-white/55 p-6 shadow-soft backdrop-blur-[2px] sm:p-8 lg:p-10">
        <div ref={trackRef} className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4">
            {sectionContent.problem.lines.map((line, index) => (
              <div key={line} ref={statementRefs[index]}>
                <SoftInfoCard>{line}</SoftInfoCard>
              </div>
            ))}
          </div>
          <div ref={phoneRef} className="hidden lg:block">
            <PhoneMockup className="max-w-[350px] opacity-70">
              <PhoneScreenStage>
                <PhoneAppScreen state="neutral" />
              </PhoneScreenStage>
            </PhoneMockup>
          </div>
        </div>
      </PinnedSection>
    </SectionContainer>
  );
}
