"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "@/lib/gsap";

type ProblemTimelineRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  statementRefs: RefObject<HTMLDivElement | null>[];
  reducedMotion: boolean;
};

export function useProblemTimeline({
  sectionRef,
  trackRef,
  phoneRef,
  statementRefs,
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

      if (statements.length === 0) {
        return;
      }

      gsap.set(statements, { autoAlpha: 0.24, y: 24 });
      gsap.set(statements[0], { autoAlpha: 1, y: 0 });

      if (phoneRef.current) {
        gsap.set(phoneRef.current, { autoAlpha: 0.6, scale: 0.97 });
      }

      if (reducedMotion) {
        gsap.set(statements, { autoAlpha: 1, y: 0 });
        if (phoneRef.current) {
          gsap.set(phoneRef.current, { autoAlpha: 0.8, scale: 1 });
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

        statements.forEach((statement, index) => {
          const previous = statements[index - 1];

          timeline.to(
            statement,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
            },
            index === 0 ? 0 : "+=0.22",
          );

          if (previous) {
            timeline.to(
              previous,
              {
                autoAlpha: 0.3,
                y: -10,
                duration: 0.55,
              },
              "<",
            );
          }

          if (phoneRef.current) {
            timeline.to(
              phoneRef.current,
              {
                autoAlpha: Math.min(0.88, 0.62 + index * 0.08),
                scale: 0.97 + index * 0.006,
                duration: 0.55,
              },
              "<",
            );
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(statements, { autoAlpha: 1, y: 0 });
        if (phoneRef.current) {
          gsap.set(phoneRef.current, { autoAlpha: 0.8, scale: 1 });
        }
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [phoneRef, reducedMotion, sectionRef, statementRefs, trackRef]);
}
