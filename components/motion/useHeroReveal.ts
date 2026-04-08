"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "@/lib/gsap";

type HeroRevealRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  labelRef: RefObject<HTMLParagraphElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  subtextRef: RefObject<HTMLParagraphElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  blobRefs: RefObject<HTMLDivElement | null>[];
  reducedMotion: boolean;
};

export function useHeroReveal({
  sectionRef,
  labelRef,
  headlineRef,
  subtextRef,
  phoneRef,
  blobRefs,
  reducedMotion,
}: HeroRevealRefs) {
  useEffect(() => {
    if (!sectionRef.current) {
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

      if (reducedMotion) {
        return;
      }

      const blobSettings = [
        { x: 72, y: -46, scale: 1.18, duration: 11.5 },
        { x: -54, y: 34, scale: 1.12, duration: 14 },
        { x: 84, y: -28, scale: 1.16, duration: 15.5 },
        { x: -42, y: -36, scale: 1.1, duration: 12.5 },
        { x: 58, y: 24, scale: 1.14, duration: 13.5 },
      ] as const;

      blobRefs.forEach((blobRef, index) => {
        if (!blobRef.current) {
          return;
        }

        const settings = blobSettings[index % blobSettings.length];

        gsap.to(blobRef.current, {
          x: settings.x,
          y: settings.y,
          scale: settings.scale,
          duration: settings.duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [
    blobRefs,
    headlineRef,
    labelRef,
    phoneRef,
    reducedMotion,
    sectionRef,
    subtextRef,
  ]);
}
