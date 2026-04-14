"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "@/lib/gsap";

type CueWalkthroughTimelineArgs = {
  sectionRef: RefObject<HTMLElement | null>;
  progressRefs: RefObject<HTMLSpanElement | null>[];
  screenRefs: RefObject<HTMLDivElement | null>[];
  textRefs: RefObject<HTMLDivElement | null>[];
  reducedMotion: boolean;
};

export function useCueWalkthroughTimeline({
  sectionRef,
  progressRefs,
  screenRefs,
  textRefs,
  reducedMotion,
}: CueWalkthroughTimelineArgs) {
  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const screens = screenRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLDivElement => Boolean(node));
      const texts = textRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLDivElement => Boolean(node));
      const progressItems = progressRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLSpanElement => Boolean(node));

      const setProgressState = (activeIndex: number) => {
        progressItems.forEach((item, index) => {
          gsap.to(item, {
            color: index <= activeIndex ? "#E2E8EF" : "#7F8B99",
            opacity: index <= activeIndex ? 1 : 0.56,
            duration: 0.28,
            overwrite: true,
            ease: "power2.out",
          });
        });
      };

      gsap.set(screens, { autoAlpha: 0 });
      gsap.set(texts, { autoAlpha: 0, y: 24 });
      gsap.set(progressItems, { opacity: 0.56, color: "#7F8B99" });
      gsap.set([screens[0], texts[0]], { autoAlpha: 1 });
      gsap.set(texts[0], { y: 0 });
      setProgressState(0);

      if (reducedMotion) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        for (let index = 1; index < screens.length; index += 1) {
          timeline
            .to(
              screens[index - 1],
              {
                autoAlpha: 0,
                duration: 0.7,
                ease: "power2.out",
              },
              "+=0.5",
            )
            .fromTo(
              screens[index],
              {
                autoAlpha: 0,
                scale: 1.01,
              },
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
              },
              "<",
            )
            .to(
              texts[index - 1],
              {
                autoAlpha: 0,
                y: -16,
                duration: 0.55,
                ease: "power2.out",
              },
              "<",
            )
            .fromTo(
              texts[index],
              {
                autoAlpha: 0,
                y: 24,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
              },
              "<+0.08",
            );

          timeline.call(() => setProgressState(index), undefined, ">");
        }
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set([...screens, ...texts], { clearProps: "all" });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, screenRefs, sectionRef, textRefs]);
}
