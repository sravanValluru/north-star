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
  const progressRefs = useMemo(
    () =>
      sectionContent.problem.lines.map(() => createRef<HTMLSpanElement>()),
    [],
  );
  const reducedMotion = useReducedMotion();

  useProblemTimeline({
    sectionRef,
    trackRef,
    phoneRef,
    statementRefs,
    progressRefs,
    reducedMotion,
  });

  return (
    <SectionContainer id="problem" ref={sectionRef} className="min-h-screen">
      <PinnedSection className="rounded-[36px] border border-border bg-[linear-gradient(180deg,rgba(17,22,30,0.78),rgba(14,19,27,0.88))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div ref={trackRef} className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#909CAA]">
                The Problem
              </p>
              <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#7F8B99]">
                {sectionContent.problem.lines.map((_, index) => (
                  <span
                    key={index}
                    ref={progressRefs[index]}
                    className="inline-flex items-center gap-2"
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {index < sectionContent.problem.lines.length - 1 ? (
                      <span className="inline-block h-px w-4 bg-white/10" aria-hidden="true" />
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative hidden min-h-[28rem] lg:block">
              {sectionContent.problem.lines.map((line, index) => (
                <div
                  key={line}
                  ref={statementRefs[index]}
                  className="absolute inset-0 flex items-start"
                >
                  <p
                    className={`font-medium text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.048em] text-[#EEF0F3] ${
                      index === 0 ? "max-w-[9ch]" : ""
                    } ${index === 1 ? "max-w-[10.5ch]" : ""} ${
                      index === 2 ? "max-w-[10.5ch]" : ""
                    } ${index === 3 ? "max-w-[11ch]" : ""}`}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 lg:hidden">
              {sectionContent.problem.lines.map((line, index) => (
                <div key={line}>
                  <p
                    className={`font-medium tracking-[-0.04em] ${
                      index === 0
                        ? "max-w-[10ch] text-[clamp(2.2rem,9vw,3.4rem)] leading-[0.98] text-[#F1ECE5]"
                        : ""
                    } ${
                      index === 1
                        ? "max-w-[12ch] text-[clamp(1.6rem,6vw,2.2rem)] leading-[1.05] text-[#CBD5DF]"
                        : ""
                    } ${
                      index === 2
                        ? "max-w-[12ch] text-[clamp(1.55rem,5.8vw,2.1rem)] leading-[1.08] text-[#D5DDE6]"
                        : ""
                    } ${
                      index === 3
                        ? "max-w-[18ch] text-[clamp(1rem,4vw,1.2rem)] leading-[1.55] tracking-[0.02em] text-[#96A3B1]"
                        : ""
                    }`}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div ref={phoneRef} className="hidden lg:block">
            <PhoneMockup className="max-w-[350px] opacity-[0.9]">
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
