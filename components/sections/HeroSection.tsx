"use client";

import { useRef } from "react";

import { PhoneMockup } from "@/components/device/PhoneMockup";
import { PhoneAppScreen } from "@/components/device/PhoneAppScreen";
import { PhoneScreenStage } from "@/components/device/PhoneScreenStage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useHeroReveal } from "@/components/motion/useHeroReveal";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { MicroLabel } from "@/components/ui/MicroLabel";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function HeroSection() {
  const section = sectionContent.hero;
  const sectionRef = useRef<HTMLElement | null>(null);
  const labelRef = useRef<HTMLParagraphElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtextRef = useRef<HTMLParagraphElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const blobOneRef = useRef<HTMLDivElement | null>(null);
  const blobTwoRef = useRef<HTMLDivElement | null>(null);
  const blobThreeRef = useRef<HTMLDivElement | null>(null);
  const blobFourRef = useRef<HTMLDivElement | null>(null);
  const blobFiveRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useHeroReveal({
    sectionRef,
    labelRef,
    headlineRef,
    subtextRef,
    phoneRef,
    blobRefs: [blobOneRef, blobTwoRef, blobThreeRef, blobFourRef, blobFiveRef],
    reducedMotion,
  });

  return (
    <SectionContainer
      id="hero"
      className="min-h-screen pt-24 sm:pt-28"
      ref={sectionRef}
    >
      <div
        ref={blobOneRef}
        className="pointer-events-none absolute left-[-14%] top-[-8%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(230,199,156,0.78),rgba(230,199,156,0.38)_24%,rgba(230,199,156,0.14)_42%,transparent_66%)] blur-[44px] mix-blend-screen"
      />
      <div
        ref={blobTwoRef}
        className="pointer-events-none absolute left-[8%] top-[18%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(183,227,214,0.42),rgba(183,227,214,0.18)_30%,transparent_66%)] blur-[46px] mix-blend-screen"
      />
      <div
        ref={blobThreeRef}
        className="pointer-events-none absolute right-[-8%] top-[-6%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.82),rgba(191,215,234,0.38)_24%,rgba(191,215,234,0.14)_44%,transparent_68%)] blur-[46px] mix-blend-screen"
      />
      <div
        ref={blobFourRef}
        className="pointer-events-none absolute right-[4%] top-[34%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(230,199,156,0.48),rgba(230,199,156,0.18)_36%,transparent_68%)] blur-[44px] mix-blend-screen"
      />
      <div
        ref={blobFiveRef}
        className="pointer-events-none absolute left-[24%] top-[48%] h-[24rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.34),rgba(191,215,234,0.16)_34%,transparent_70%)] blur-[48px] mix-blend-screen"
      />
      <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-[640px] self-center">
          <MicroLabel
            ref={labelRef}
            style={{
              fontFamily:
                '"Avenir Next", "Segoe UI Variable Text", "SF Pro Text", Inter, sans-serif',
            }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/7 bg-white/[0.03] px-4 py-2 text-[12.5px] tracking-[0.005em] text-[#9CA7B4]"
          >
            <span className="h-2 w-2 rounded-full bg-[#BFD7EA]" aria-hidden="true" />
            <span>{section.microcopy}</span>
          </MicroLabel>
          <SectionHeadline
            ref={headlineRef}
            as="h1"
            style={{
              fontFamily:
                '"Avenir Next", "Segoe UI Variable Display", "SF Pro Display", Inter, sans-serif',
            }}
            className="max-w-[10.5ch] text-[clamp(3.2rem,6.8vw,5.75rem)] leading-[0.9] tracking-[-0.055em]"
          >
            {section.headline}
          </SectionHeadline>
          <SectionSubtext
            ref={subtextRef}
            style={{
              fontFamily:
                '"Avenir Next", "Segoe UI Variable Text", "SF Pro Text", Inter, sans-serif',
            }}
            className="mt-8 max-w-[24ch] text-[1.08rem] leading-[1.72] text-[#B7C0CA] sm:text-[1.28rem] sm:leading-[1.68]"
          >
            {section.subtext}
          </SectionSubtext>
        </div>
        <PhoneMockup
          ref={phoneRef}
          className="lg:translate-y-2 before:absolute before:inset-0 before:-z-10 before:rounded-[50px] before:bg-[radial-gradient(circle_at_20%_20%,rgba(191,215,234,0.34),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(230,199,156,0.24),transparent_44%)]"
        >
          <PhoneScreenStage>
            <PhoneAppScreen state="ready" />
          </PhoneScreenStage>
        </PhoneMockup>
      </div>
    </SectionContainer>
  );
}
