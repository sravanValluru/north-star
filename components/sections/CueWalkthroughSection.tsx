"use client";

import { createRef, useMemo, useRef } from "react";

import { PhoneAppScreen } from "@/components/device/PhoneAppScreen";
import { PhoneMockup } from "@/components/device/PhoneMockup";
import { PhoneScreenStage } from "@/components/device/PhoneScreenStage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useCueWalkthroughTimeline } from "@/components/motion/useCueWalkthroughTimeline";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { cueStates } from "@/content/cueStates";

export function CueWalkthroughSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const screenRefs = useMemo(
    () => cueStates.map(() => createRef<HTMLDivElement>()),
    [],
  );
  const textRefs = useMemo(
    () => cueStates.map(() => createRef<HTMLDivElement>()),
    [],
  );

  useCueWalkthroughTimeline({
    sectionRef,
    screenRefs,
    textRefs,
    reducedMotion,
  });

  return (
    <SectionContainer id="cue-walkthrough" ref={sectionRef}>
      <div className="rounded-[36px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.84),rgba(18,28,38,0.92)_34%,rgba(29,24,20,0.88)_68%,rgba(15,27,27,0.9))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="hidden min-h-[78vh] lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
          <div className="rounded-[32px] border border-border bg-[linear-gradient(180deg,rgba(18,25,34,0.92),rgba(14,20,28,0.96))] p-6">
            <div className="mx-auto max-w-[330px]">
              <PhoneMockup>
                <PhoneScreenStage className="relative">
                  {cueStates.map((state, index) => (
                    <div
                      key={state.id}
                      ref={screenRefs[index]}
                      className="absolute inset-0"
                    >
                      <PhoneAppScreen state={state.id} />
                    </div>
                  ))}
                </PhoneScreenStage>
              </PhoneMockup>
            </div>
          </div>
          <div className="relative h-[360px]">
            {cueStates.map((state, index) => (
              <div
                key={state.id}
                ref={textRefs[index]}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-micro">
                  {state.label}
                </p>
                <h3 className="mt-4 max-w-[14ch] text-[clamp(2.3rem,4vw,3.4rem)] font-medium leading-[1] tracking-[-0.04em] text-text">
                  {state.headline}
                </h3>
                <p className="mt-5 max-w-[34ch] text-lg leading-8 text-muted">
                  {state.subtext}
                </p>
                {state.microcopy ? (
                  <p className="mt-4 text-sm text-micro">{state.microcopy}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 lg:hidden">
          {cueStates.map((state) => (
            <article
              key={state.id}
              className="rounded-[30px] border border-border bg-[linear-gradient(180deg,rgba(18,25,34,0.88),rgba(14,20,28,0.94))] p-8"
            >
              <div className="mb-8">
                <PhoneMockup className="max-w-[290px]">
                  <PhoneScreenStage>
                    <PhoneAppScreen state={state.id} />
                  </PhoneScreenStage>
                </PhoneMockup>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-micro">
                {state.label}
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-text">
                {state.headline}
              </h3>
              <p className="mt-3 max-w-prose text-base leading-7 text-muted">
                {state.subtext}
              </p>
              {state.microcopy ? (
                <p className="mt-3 text-sm text-micro">{state.microcopy}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
