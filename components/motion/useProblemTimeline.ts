"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "@/lib/gsap";

type ProblemTimelineRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  readyScreenRef: RefObject<HTMLDivElement | null>;
  neutralScreenRef: RefObject<HTMLDivElement | null>;
  statementRefs: RefObject<HTMLDivElement | null>[];
  progressRefs: RefObject<HTMLSpanElement | null>[];
  reducedMotion: boolean;
};

export function useProblemTimeline({
  sectionRef,
  trackRef,
  phoneRef,
  readyScreenRef,
  neutralScreenRef,
  statementRefs,
  progressRefs,
  reducedMotion,
}: ProblemTimelineRefs) {
  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const statements = statementRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLDivElement => Boolean(node));
      const progressItems = progressRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLSpanElement => Boolean(node));
      const readyScreen = readyScreenRef.current;
      const neutralScreen = neutralScreenRef.current;

      if (statements.length === 0) {
        return;
      }

      gsap.set(statements, { autoAlpha: 0, y: 28 });
      gsap.set(statements[0], { autoAlpha: 1, y: 0 });
      gsap.set(progressItems, { autoAlpha: 0.34, color: "#7F8B99" });
      gsap.set(progressItems[0], { autoAlpha: 1, color: "#E9E5DE" });
      if (readyScreen && neutralScreen) {
        gsap.set(readyScreen, { autoAlpha: 1 });
        gsap.set(neutralScreen, { autoAlpha: 0 });
      }

      if (phoneRef.current) {
        gsap.set(phoneRef.current, { autoAlpha: 0.84, scale: 1, y: 0 });
      }

      if (reducedMotion) {
        gsap.set(statements, { autoAlpha: 1, y: 0 });
        gsap.set(progressItems, { autoAlpha: 1, color: "#C8D1DB" });
        if (readyScreen && neutralScreen) {
          gsap.set(readyScreen, { autoAlpha: 0 });
          gsap.set(neutralScreen, { autoAlpha: 1 });
        }
        if (phoneRef.current) {
          gsap.set(phoneRef.current, { autoAlpha: 1, scale: 1, y: 0 });
        }
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1800",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        if (readyScreen && neutralScreen) {
          timeline
            .to(
              readyScreen,
              {
                autoAlpha: 0,
                duration: 0.45,
                ease: "power2.out",
              },
              0.08,
            )
            .to(
              neutralScreen,
              {
                autoAlpha: 1,
                duration: 0.55,
                ease: "power2.out",
              },
              0.1,
            );
        }

        statements.forEach((statement, index) => {
          const previous = statements[index - 1];
          const previousProgress = progressItems[index - 1];

          if (index > 0) {
            timeline
              .to(
                previous,
                {
                  autoAlpha: 0,
                  y: -16,
                  duration: 0.5,
                  ease: "power2.out",
                },
                "+=0.28",
              )
              .to(
                previousProgress,
                {
                  autoAlpha: 0.34,
                  color: "#7F8B99",
                  duration: 0.35,
                  ease: "power2.out",
                },
                "<",
              );
          }

          timeline.to(
            statement,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            index === 0 ? 0 : "<+0.08",
          );

          if (progressItems[index]) {
            timeline.to(
              progressItems[index],
              {
                autoAlpha: 1,
                color: "#E9E5DE",
                duration: 0.4,
                ease: "power2.out",
              },
              "<",
            );
          }

          if (phoneRef.current) {
            timeline.to(
              phoneRef.current,
              {
                autoAlpha: Math.min(1, 0.84 + index * 0.04),
                y: 0,
                scale: 1,
                duration: 0.55,
              },
              "<",
            );
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(statements, { autoAlpha: 1, y: 0 });
        gsap.set(progressItems, { autoAlpha: 1, color: "#C8D1DB" });
        if (phoneRef.current) {
          gsap.set(phoneRef.current, { autoAlpha: 1, scale: 1, y: 0 });
        }
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [
    neutralScreenRef,
    phoneRef,
    progressRefs,
    readyScreenRef,
    reducedMotion,
    sectionRef,
    statementRefs,
    trackRef,
  ]);
}
