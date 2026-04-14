"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "@/lib/gsap";

type OpeningSequenceTimelineArgs = {
  sectionRef: RefObject<HTMLElement | null>;
  textRefs: RefObject<HTMLDivElement | null>[];
  phoneRef: RefObject<HTMLDivElement | null>;
  readyRef: RefObject<HTMLDivElement | null>;
  neutralRef: RefObject<HTMLDivElement | null>;
  signalRef: RefObject<HTMLDivElement | null>;
  progressRefs: RefObject<HTMLSpanElement | null>[];
  reducedMotion: boolean;
};

export function useOpeningSequenceTimeline({
  sectionRef,
  textRefs,
  phoneRef,
  readyRef,
  neutralRef,
  signalRef,
  progressRefs,
  reducedMotion,
}: OpeningSequenceTimelineArgs) {
  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const texts = textRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLDivElement => Boolean(node));
      const progressItems = progressRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLSpanElement => Boolean(node));

      gsap.set(texts, { autoAlpha: 0, y: 28 });
      gsap.set(texts[0], { autoAlpha: 1, y: 0 });
      gsap.set(progressItems, { autoAlpha: 0.3, color: "#7F8B99" });
      gsap.set(progressItems[0], { autoAlpha: 1, color: "#E9E5DE" });
      gsap.set(readyRef.current, { autoAlpha: 1 });
      gsap.set(neutralRef.current, { autoAlpha: 0 });
      gsap.set(signalRef.current, { autoAlpha: 0 });
      if (phoneRef.current) {
        gsap.set(phoneRef.current, { autoAlpha: 1, y: 0, scale: 1 });
      }

      if (reducedMotion) {
        gsap.set(texts, { clearProps: "all" });
        gsap.set(progressItems, { clearProps: "all" });
        gsap.set(readyRef.current, { autoAlpha: 0 });
        gsap.set(neutralRef.current, { autoAlpha: 0 });
        gsap.set(signalRef.current, { autoAlpha: 1 });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=4600",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        const chapterSpacing = [0.62, 0.28, 0.26, 0.26, 0.34] as const;

        const advanceText = (index: number, dwell: number) => {
          const previous = texts[index - 1];
          const previousProgress = progressItems[index - 1];
          const current = texts[index];
          const currentProgress = progressItems[index];

          timeline
            .to(
              previous,
              {
                autoAlpha: 0,
                y: -16,
                duration: 0.45,
                ease: "power2.out",
              },
              `+=${dwell}`,
            )
            .to(
              previousProgress,
              {
                autoAlpha: 0.3,
                color: "#7F8B99",
                duration: 0.3,
                ease: "power2.out",
              },
              "<",
            )
            .fromTo(
              current,
              {
                autoAlpha: 0,
                y: 28,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
              },
              "<+0.08",
            )
            .to(
              currentProgress,
              {
                autoAlpha: 1,
                color: "#E9E5DE",
                duration: 0.3,
                ease: "power2.out",
              },
              "<",
            );
        };

        timeline.fromTo(
          phoneRef.current,
          {
            y: 16,
            scale: 0.985,
          },
          {
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
          },
        );

        advanceText(1, chapterSpacing[0]);

        timeline
          .to(readyRef.current, { autoAlpha: 0, duration: 0.45, ease: "power2.out" }, "<+0.02")
          .to(neutralRef.current, { autoAlpha: 1, duration: 0.5, ease: "power2.out" }, "<");

        advanceText(2, chapterSpacing[1]);
        advanceText(3, chapterSpacing[2]);
        advanceText(4, chapterSpacing[3]);
        advanceText(5, chapterSpacing[4]);

        timeline
          .to(neutralRef.current, { autoAlpha: 0, duration: 0.45, ease: "power2.out" }, "<+0.02")
          .to(signalRef.current, { autoAlpha: 1, duration: 0.5, ease: "power2.out" }, "<")
          .to(
            phoneRef.current,
            {
              y: -10,
              scale: 1.015,
              duration: 0.8,
              ease: "power2.out",
            },
            "<+0.08",
          )
          .to(
            phoneRef.current,
            {
              y: -6,
              duration: 0.6,
              ease: "sine.out",
            },
            "+=0.42",
          );
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(texts, { clearProps: "all" });
        gsap.set(progressItems, { clearProps: "all" });
        gsap.set(readyRef.current, { clearProps: "all" });
        gsap.set(neutralRef.current, { clearProps: "all" });
        gsap.set(signalRef.current, { clearProps: "all" });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [
    neutralRef,
    phoneRef,
    progressRefs,
    readyRef,
    reducedMotion,
    sectionRef,
    signalRef,
    textRefs,
  ]);
}
