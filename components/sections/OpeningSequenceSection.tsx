"use client";

import { createRef, useMemo, useRef } from "react";

import { PhoneAppScreen } from "@/components/device/PhoneAppScreen";
import { PhoneMockup } from "@/components/device/PhoneMockup";
import { PhoneScreenStage } from "@/components/device/PhoneScreenStage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useOpeningSequenceTimeline } from "@/components/motion/useOpeningSequenceTimeline";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { sectionContent } from "@/content/sectionContent";

const openingStages = [
  {
    kind: "hero",
    label: "Designed for psychotherapy",
    headline: sectionContent.hero.headline,
    subtext: sectionContent.hero.subtext,
  },
  {
    kind: "problem",
    label: "The Problem",
    headline: sectionContent.problem.lines[0],
  },
  {
    kind: "problem",
    label: "The Problem",
    headline: sectionContent.problem.lines[1],
  },
  {
    kind: "problem",
    label: "The Problem",
    headline: sectionContent.problem.lines[2],
  },
  {
    kind: "problem",
    label: "The Problem",
    headline: sectionContent.problem.lines[3],
  },
  {
    kind: "why-voice",
    label: "Why Voice",
    headline: sectionContent.whyVoice.headline,
    subtext: sectionContent.whyVoice.subtext,
  },
] as const;

function getStageHeadlineClass(stage: (typeof openingStages)[number], index: number) {
  if (stage.kind === "hero") {
    return "max-w-[9.8ch] text-[clamp(3rem,5.8vw,5.05rem)] font-medium leading-[0.9] tracking-[-0.06em] text-[#F1ECE5]";
  }

  if (stage.kind === "problem" && index === 2) {
    return "max-w-[9.2ch] text-[clamp(2.75rem,5.1vw,4.55rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#F1ECE5]";
  }

  if (stage.kind === "problem") {
    return "max-w-[9.8ch] text-[clamp(2.85rem,5.3vw,4.75rem)] font-medium leading-[0.93] tracking-[-0.055em] text-[#F1ECE5]";
  }

  return "max-w-[12.4ch] text-[clamp(3rem,5.6vw,5rem)] font-medium leading-[0.92] tracking-[-0.058em] text-[#F1ECE5]";
}

function renderStageSubtext(stage: (typeof openingStages)[number]) {
  if (!("subtext" in stage) || !stage.subtext) {
    return null;
  }

  if (stage.kind === "hero") {
    return (
      <div className="w-[28rem] max-w-full space-y-4 text-[1.04rem] leading-[1.78] text-[#B9C3CE]">
        <p>A therapist-facing</p>
        <p>prototype that uses vocal prosody to</p>
        <p>support timing, not replace judgment.</p>
      </div>
    );
  }

  if (stage.kind === "why-voice") {
    return (
      <div className="max-w-[34ch] space-y-3 text-[1.05rem] leading-[1.8] text-[#B9C3CE]">
        <p>
          Rhythm, pauses, and intensity often shift <span className="font-medium text-[#E2E8EF]">before the meaning is explicit</span>.
        </p>
        <p className="text-[#9EABB7]">
          The system stays with pattern, not interpretation.
        </p>
      </div>
    );
  }

  return null;
}

export function OpeningSequenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const readyRef = useRef<HTMLDivElement | null>(null);
  const neutralRef = useRef<HTMLDivElement | null>(null);
  const signalRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useMemo(() => openingStages.map(() => createRef<HTMLDivElement>()), []);
  const progressRefs = useMemo(() => openingStages.map(() => createRef<HTMLSpanElement>()), []);
  const reducedMotion = useReducedMotion();

  useOpeningSequenceTimeline({
    sectionRef,
    textRefs,
    phoneRef,
    readyRef,
    neutralRef,
    signalRef,
    progressRefs,
    reducedMotion,
  });

  const desktopUsesPinnedSequence = !reducedMotion;

  return (
    <SectionContainer
      id="opening-sequence"
      ref={sectionRef}
      className="min-h-screen pb-section pt-0 lg:-mt-[6vh]"
    >
      <div className="rounded-[40px] border border-border bg-[linear-gradient(180deg,rgba(17,22,30,0.44),rgba(14,19,27,0.62))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-[12px] sm:p-8 lg:p-10">
        <div className="hidden min-h-[82vh] lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
          <div className="flex h-full flex-col justify-center">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#909CAA]">
                Opening
              </p>
              {desktopUsesPinnedSequence ? (
                <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#7F8B99]">
                  {openingStages.map((_, index) => (
                    <span key={index} ref={progressRefs[index]} className="inline-flex items-center gap-2">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {index < openingStages.length - 1 ? (
                        <span className="inline-block h-px w-4 bg-white/10" aria-hidden="true" />
                      ) : null}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#7F8B99]">
                  Reduced motion
                </p>
              )}
            </div>

            <div className={desktopUsesPinnedSequence ? "relative min-h-[37rem]" : "grid gap-6"}>
              {openingStages.map((stage, index) => (
                <div
                  key={`${stage.kind}-${index}`}
                  ref={textRefs[index]}
                  className={
                    desktopUsesPinnedSequence
                      ? `absolute inset-0 grid ${
                          stage.kind === "why-voice"
                            ? "min-h-[37rem] grid-rows-[auto_minmax(0,1fr)_minmax(12rem,auto)]"
                            : "min-h-[37rem] grid-rows-[auto_minmax(0,1fr)_minmax(9rem,auto)]"
                        }`
                      : "rounded-[28px] border border-white/8 bg-[rgba(255,255,255,0.025)] px-6 py-7"
                  }
                >
                  {!desktopUsesPinnedSequence ? (
                    <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7F8B99]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  ) : null}
                  <div
                    className={
                      stage.kind === "why-voice"
                        ? "pb-8"
                        : "pb-6"
                    }
                  >
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C3]" aria-hidden="true" />
                      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                        {stage.label}
                      </p>
                    </div>
                  </div>

                  <div
                    className={
                      stage.kind === "hero"
                        ? "self-center pt-10"
                        : stage.kind === "why-voice"
                          ? "self-center pt-16"
                          : "self-center pt-10"
                    }
                  >
                    <h2 className={getStageHeadlineClass(stage, index)}>
                      {stage.headline}
                    </h2>
                  </div>

                  <div
                    className={
                      stage.kind === "hero"
                        ? "flex items-end pt-14"
                        : stage.kind === "why-voice"
                          ? "flex items-end pt-20"
                          : "flex items-end pt-10"
                    }
                  >
                    {renderStageSubtext(stage) ?? <div aria-hidden="true" />}
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div ref={phoneRef}>
            <PhoneMockup className="max-w-[394px] lg:translate-y-2 before:absolute before:inset-0 before:-z-10 before:rounded-[50px] before:bg-[radial-gradient(circle_at_20%_20%,rgba(191,215,234,0.28),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(230,199,156,0.2),transparent_44%)]">
              <PhoneScreenStage className="relative">
                <div ref={readyRef} className="absolute inset-0">
                  <PhoneAppScreen state="ready" />
                </div>
                <div ref={neutralRef} className="absolute inset-0">
                  <PhoneAppScreen state="neutral" />
                </div>
                <div ref={signalRef} className="absolute inset-0">
                  <PhoneAppScreen state="signal" />
                </div>
              </PhoneScreenStage>
            </PhoneMockup>
          </div>
        </div>

        <div className="grid gap-5 lg:hidden">
          {openingStages.map((stage, index) => (
            <article key={`${stage.kind}-${index}`} className="rounded-[30px] border border-border bg-[linear-gradient(180deg,rgba(18,25,34,0.88),rgba(14,20,28,0.94))] p-7">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C3]" aria-hidden="true" />
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#D3DBE4]">
                  {stage.label}
                </p>
              </div>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2.2rem,9vw,3.5rem)] font-medium leading-[0.96] tracking-[-0.045em] text-[#F1ECE5]">
                {stage.headline}
              </h2>
              {"subtext" in stage && stage.subtext ? (
                stage.kind === "why-voice" ? (
                  <div className="mt-7 max-w-[30ch] space-y-3 text-base leading-7 text-[#BCC6D1]">
                    <p>
                      Rhythm, pauses, and intensity often shift <span className="font-medium text-[#E2E8EF]">before the meaning is explicit</span>.
                    </p>
                    <p className="text-sm leading-6 text-[#96A3AF]">
                      The system stays with pattern, not interpretation.
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 max-w-prose text-base leading-7 text-[#BCC6D1]">
                    {stage.subtext}
                  </p>
                )
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
