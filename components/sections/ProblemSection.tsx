"use client";

import { createRef, useMemo, useRef } from "react";

import { PhoneAppScreen } from "@/components/device/PhoneAppScreen";
import { PhoneMockup } from "@/components/device/PhoneMockup";
import { PhoneScreenStage } from "@/components/device/PhoneScreenStage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PinnedSection } from "@/components/layout/PinnedSection";
import { useProblemTimeline } from "@/components/motion/useProblemTimeline";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
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
      <PinnedSection className="rounded-[36px] border border-border bg-[linear-gradient(180deg,rgba(17,22,30,0.78),rgba(14,19,27,0.88))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div ref={trackRef} className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-5">
            {sectionContent.problem.lines.map((line, index) => (
              <div key={line} ref={statementRefs[index]}>
                <p
                  className={`max-w-[16ch] text-[clamp(1.8rem,4vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-text ${
                    index === 1 ? "max-w-[12ch]" : ""
                  } ${index === 3 ? "text-[clamp(1.55rem,3.1vw,2.55rem)] text-muted" : ""}`}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>
          <div ref={phoneRef} className="hidden lg:block">
            <PhoneMockup className="max-w-[350px] opacity-75">
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
