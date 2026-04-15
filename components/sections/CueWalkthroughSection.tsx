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
  const progressRefs = useMemo(
    () => cueStates.map(() => createRef<HTMLSpanElement>()),
    [],
  );
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
    progressRefs,
    screenRefs,
    textRefs,
    reducedMotion,
  });

  return (
    <SectionContainer
      id="cue-walkthrough"
      ref={sectionRef}
      className="pt-0 pb-8 sm:pt-2 sm:pb-10 lg:pt-0 lg:pb-12"
    >
      <div className="rounded-[36px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.84),rgba(18,28,38,0.92)_34%,rgba(29,24,20,0.88)_68%,rgba(15,27,27,0.9))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="hidden lg:grid lg:min-h-[82vh] lg:grid-rows-[auto_1fr] lg:gap-8">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#909CAA]">
              Cue Walkthrough
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#7F8B99]">
              {cueStates.map((state, index) => (
                <span key={state.id} ref={progressRefs[index]} className="inline-flex items-center gap-2">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {index < cueStates.length - 1 ? (
                    <span className="inline-block h-px w-5 bg-white/10" aria-hidden="true" />
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[0.92fr_1.08fr] items-center gap-12">
          <div className="flex h-full flex-col justify-center">
            <div className="relative min-h-[31rem]">
            {cueStates.map((state, index) => (
              <div
                key={state.id}
                ref={textRefs[index]}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C3]" aria-hidden="true" />
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                    {state.label}
                  </p>
                </div>
                <h3 className="mt-6 max-w-[12ch] text-[clamp(2.8rem,4.6vw,4.4rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#F1ECE5]">
                  {state.headline}
                </h3>
                <p className="mt-6 max-w-[30ch] text-[1.1rem] leading-[1.85] text-[#C3CCD6]">
                  {state.subtext}
                </p>
                {state.microcopy ? (
                  <div className="mt-7 w-fit max-w-[34ch] rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-4 shadow-[0_14px_30px_rgba(0,0,0,0.14)]">
                    <p className="text-sm leading-7 text-[#9EABB8]">{state.microcopy}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          </div>
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
