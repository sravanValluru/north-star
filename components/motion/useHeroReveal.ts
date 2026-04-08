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
        { xRange: [-70, 180], yRange: [-55, 45], scaleRange: [1.02, 1.24], durationRange: [9, 13] },
        { xRange: [-150, 45], yRange: [-35, 65], scaleRange: [1, 1.18], durationRange: [10, 14] },
        { xRange: [-20, 190], yRange: [-30, 72], scaleRange: [1.04, 1.22], durationRange: [9, 12.5] },
        { xRange: [-135, 30], yRange: [-68, 28], scaleRange: [1, 1.16], durationRange: [9.5, 13.5] },
        { xRange: [-55, 145], yRange: [-48, 58], scaleRange: [1.02, 1.2], durationRange: [10, 13] },
      ] as const;

      const randomInRange = ([min, max]: readonly [number, number]) =>
        gsap.utils.random(min, max, 1);

      blobRefs.forEach((blobRef, index) => {
        if (!blobRef.current) {
          return;
        }

        const settings = blobSettings[index % blobSettings.length];
        const node = blobRef.current;

        const driftBlob = () => {
          gsap.to(node, {
            x: randomInRange(settings.xRange),
            y: randomInRange(settings.yRange),
            scale: randomInRange(settings.scaleRange),
            duration: randomInRange(settings.durationRange),
            ease: "sine.inOut",
            onComplete: driftBlob,
          });
        };

        gsap.set(node, { x: 0, y: 0, scale: 1 });
        driftBlob();
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
