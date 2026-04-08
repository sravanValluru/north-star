"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "@/lib/gsap";

type HeroRevealRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  labelRef: RefObject<HTMLParagraphElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  subtextRef: RefObject<HTMLParagraphElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  reducedMotion: boolean;
};

export function useHeroReveal({
  sectionRef,
  labelRef,
  headlineRef,
  subtextRef,
  phoneRef,
  reducedMotion,
}: HeroRevealRefs) {
  useEffect(() => {
    if (reducedMotion || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

      timeline
        .from(phoneRef.current, {
          autoAlpha: 0,
          y: 28,
          scale: 0.965,
          duration: 1.2,
        })
        .from(
          [labelRef.current, headlineRef.current],
          {
            autoAlpha: 0,
            y: 20,
            duration: 0.9,
            stagger: 0.1,
          },
          "-=0.75",
        )
        .from(
          subtextRef.current,
          {
            autoAlpha: 0,
            y: 18,
            duration: 0.9,
          },
          "-=0.55",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [headlineRef, labelRef, phoneRef, reducedMotion, sectionRef, subtextRef]);
}
