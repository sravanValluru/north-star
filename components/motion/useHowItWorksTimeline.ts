"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "@/lib/gsap";

type HowItWorksTimelineArgs = {
  sectionRef: RefObject<HTMLElement | null>;
  textRefs: RefObject<HTMLParagraphElement | null>[];
  reducedMotion: boolean;
};

const nodeIds = [
  "#node-client",
  "#node-physiology",
  "#node-voice",
  "#node-pattern",
  "#node-cue",
  "#node-therapist",
  "#node-regulation",
];

const lineIds = [
  "#line-client-physiology",
  "#line-physiology-voice",
  "#line-voice-pattern",
  "#line-pattern-cue",
  "#line-cue-therapist",
  "#line-therapist-regulation",
];

export function useHowItWorksTimeline({
  sectionRef,
  textRefs,
  reducedMotion,
}: HowItWorksTimelineArgs) {
  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const texts = textRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLParagraphElement => Boolean(node));

      gsap.set(nodeIds, { autoAlpha: 0, y: 18, scale: 0.97, transformOrigin: "50% 50%" });
      gsap.set(texts, { autoAlpha: 0.28, y: 12 });
      gsap.set(texts[0], { autoAlpha: 1, y: 0 });

      lineIds.forEach((selector) => {
        const line = sectionRef.current?.querySelector<SVGPathElement>(selector);
        if (!line) {
          return;
        }
        const length = line.getTotalLength();
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          autoAlpha: 1,
        });
      });

      gsap.set("#node-cue-highlight", { fill: "#DCE8EF", opacity: 0.65 });

      if (reducedMotion) {
        gsap.set(nodeIds, { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(texts, { autoAlpha: 1, y: 0 });
        lineIds.forEach((selector) => gsap.set(selector, { strokeDashoffset: 0 }));
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2200",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        timeline
          .to("#node-client", { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.7 })
          .to("#line-client-physiology", { strokeDashoffset: 0, duration: 0.45, ease: "none" })
          .to(texts[1], { autoAlpha: 1, y: 0, duration: 0.4 }, "<")
          .to(texts[0], { autoAlpha: 0.35, y: -8, duration: 0.4 }, "<")
          .to("#node-physiology", { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.7 })
          .to("#line-physiology-voice", { strokeDashoffset: 0, duration: 0.45, ease: "none" })
          .to("#node-voice", { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.7 })
          .to(texts[2], { autoAlpha: 1, y: 0, duration: 0.4 }, "<")
          .to(texts[1], { autoAlpha: 0.35, y: -8, duration: 0.4 }, "<")
          .to("#line-voice-pattern", { strokeDashoffset: 0, duration: 0.45, ease: "none" })
          .to("#node-pattern", { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.7 })
          .to(texts[3], { autoAlpha: 1, y: 0, duration: 0.4 }, "<")
          .to(texts[2], { autoAlpha: 0.35, y: -8, duration: 0.4 }, "<")
          .to("#line-pattern-cue", { strokeDashoffset: 0, duration: 0.45, ease: "none" })
          .to("#node-cue", { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.7 })
          .to("#node-cue-highlight", { fill: "#BFD7EA", duration: 0.28 })
          .to("#node-cue-highlight", { fill: "#E6C79C", duration: 0.28 })
          .to("#node-cue-highlight", { fill: "#B7E3D6", duration: 0.28 })
          .to("#line-cue-therapist", { strokeDashoffset: 0, duration: 0.45, ease: "none" })
          .to("#node-therapist", { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.72 })
          .to("#line-therapist-regulation", { strokeDashoffset: 0, duration: 0.45, ease: "none" })
          .to("#node-regulation", { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.72 })
          .to("#node-cue-highlight", { fill: "#DCE8EF", duration: 0.4 });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(nodeIds, { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(texts, { autoAlpha: 1, y: 0 });
        lineIds.forEach((selector) => gsap.set(selector, { strokeDashoffset: 0 }));
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, sectionRef, textRefs]);
}
