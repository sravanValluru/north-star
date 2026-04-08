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
  const reducedMotion = useReducedMotion();

  useHeroReveal({
    sectionRef,
    labelRef,
    headlineRef,
    subtextRef,
    phoneRef,
    reducedMotion,
  });

  return (
    <SectionContainer
      id="hero"
      className="min-h-screen pt-24 sm:pt-28"
      ref={sectionRef}
    >
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-prose self-center">
          <MicroLabel ref={labelRef}>{section.microcopy}</MicroLabel>
          <SectionHeadline ref={headlineRef} as="h1" className="max-w-[13ch]">
            {section.headline}
          </SectionHeadline>
          <SectionSubtext ref={subtextRef}>{section.subtext}</SectionSubtext>
        </div>
        <PhoneMockup ref={phoneRef} className="lg:translate-y-2">
          <PhoneScreenStage>
            <PhoneAppScreen state="ready" />
          </PhoneScreenStage>
        </PhoneMockup>
      </div>
    </SectionContainer>
  );
}
