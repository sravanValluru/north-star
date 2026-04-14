"use client";

import { RefObject, useEffect } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";

type HowItWorksTimelineArgs = {
  sectionRef: RefObject<HTMLElement | null>;
  stepperRef: RefObject<HTMLDivElement | null>;
  visualRef: RefObject<HTMLDivElement | null>;
  closingRef: RefObject<HTMLDivElement | null>;
  textRefs: RefObject<HTMLDivElement | null>[];
  reducedMotion: boolean;
};

const nodeIds = [
  "#node-client",
  "#node-physiology",
  "#node-voice",
  "#node-pattern",
  "#node-cue",
  "#node-therapist",
] as const;

const lineIds = [
  "#line-client-physiology",
  "#line-physiology-voice",
  "#line-voice-pattern",
  "#line-pattern-cue",
  "#line-cue-therapist",
] as const;

const nodeStyleMap = {
  "#node-client": {
    card: "#node-client-card",
    title: "#node-client-title",
    sub: "#node-client-sub",
    glow: "#node-client-glow",
  },
  "#node-physiology": {
    card: "#node-physiology-card",
    title: "#node-physiology-title",
    sub: "#node-physiology-sub",
    glow: "#node-physiology-glow",
  },
  "#node-voice": {
    card: "#node-voice-card",
    title: "#node-voice-title",
    sub: "#node-voice-sub",
    glow: "#node-voice-glow",
  },
  "#node-pattern": {
    card: "#node-pattern-card",
    title: "#node-pattern-title",
    sub: "#node-pattern-sub",
    glow: "#node-pattern-glow",
  },
  "#node-cue": {
    card: "#node-cue-card",
    title: "#node-cue-title",
    sub: "#node-cue-sub",
    glow: "#node-cue-glow",
  },
  "#node-therapist": {
    card: "#node-therapist-card",
    title: "#node-therapist-title",
    sub: "#node-therapist-sub",
    glow: "#node-therapist-glow",
  },
} as const;

function setCardInactive(targets: HTMLElement[]) {
  gsap.set(targets, {
    autoAlpha: 0.44,
    y: 0,
    scale: 0.992,
    borderColor: "rgba(255,255,255,0.08)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
  });
}

function setCardActive(target: HTMLElement) {
  gsap.set(target, {
    autoAlpha: 1,
    y: -2,
    scale: 1.008,
    borderColor: "rgba(255,255,255,0.4)",
    boxShadow: "0 28px 60px rgba(0,0,0,0.24)",
  });
}

function setVisualState(index: number) {
  const visibleNodeGroups = [
    ["#node-client"],
    ["#node-client", "#node-physiology"],
    ["#node-client", "#node-physiology", "#node-voice", "#node-pattern"],
    ["#node-client", "#node-physiology", "#node-voice", "#node-pattern", "#node-cue"],
    ["#node-client", "#node-physiology", "#node-voice", "#node-pattern", "#node-cue", "#node-therapist"],
  ] as const;

  const visibleLineGroups = [
    [] as string[],
    ["#line-client-physiology"],
    ["#line-client-physiology", "#line-physiology-voice", "#line-voice-pattern"],
    ["#line-client-physiology", "#line-physiology-voice", "#line-voice-pattern", "#line-pattern-cue"],
    ["#line-client-physiology", "#line-physiology-voice", "#line-voice-pattern", "#line-pattern-cue", "#line-cue-therapist"],
  ] as const;

  const activeNodes = new Set(visibleNodeGroups[index] ?? []);
  const activeLines = new Set(visibleLineGroups[index] ?? []);

  nodeIds.forEach((selector) => {
    const isActive = activeNodes.has(selector);
    const styles = nodeStyleMap[selector];

    gsap.to(selector, {
      autoAlpha: isActive ? 1 : 0.2,
      y: isActive ? 0 : 18,
      scale: isActive ? 1.02 : 0.968,
      duration: 0.36,
      overwrite: true,
      ease: "power2.out",
    });

    gsap.to(styles.card, {
      stroke: isActive ? "rgba(255,255,255,0.96)" : "rgba(214,222,230,0.86)",
      strokeWidth: isActive ? 2.6 : 1.35,
      duration: 0.36,
      overwrite: true,
      ease: "power2.out",
    });

    gsap.to(styles.title, {
      fill: isActive ? "#13181E" : "#454E59",
      duration: 0.32,
      overwrite: true,
      ease: "power2.out",
    });

    gsap.to(styles.sub, {
      fill: isActive ? "#56616D" : "#7A8592",
      duration: 0.32,
      overwrite: true,
      ease: "power2.out",
    });

    gsap.to(styles.glow, {
      autoAlpha: isActive ? 0.16 : 0.04,
      scale: isActive ? 1.06 : 0.98,
      duration: 0.36,
      overwrite: true,
      ease: "power2.out",
      transformOrigin: "50% 50%",
    });
  });

  lineIds.forEach((selector) => {
    const line = document.querySelector<SVGPathElement>(selector);
    if (!line) {
      return;
    }
    const length = line.getTotalLength();
    const isActive = activeLines.has(selector);
    gsap.to(line, {
      strokeDashoffset: isActive ? 0 : length,
      autoAlpha: isActive ? 0.9 : 0.16,
      strokeWidth: isActive ? 2.8 : 2.2,
      duration: 0.34,
      overwrite: true,
      ease: "power2.out",
    });
  });

  gsap.to("#node-cue-highlight", {
    fill: index >= 3 ? "#BFD7EA" : "#DCE8EF",
    opacity: index >= 3 ? 0.8 : 0.65,
    duration: 0.24,
    overwrite: true,
  });
}

export function useHowItWorksTimeline({
  sectionRef,
  stepperRef,
  visualRef,
  closingRef,
  textRefs,
  reducedMotion,
}: HowItWorksTimelineArgs) {
  useEffect(() => {
    if (!sectionRef.current || !stepperRef.current || !visualRef.current || !closingRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      if (!closingRef.current) {
        return;
      }

      const stepCards = textRefs
        .map((ref) => ref.current)
        .filter((node): node is HTMLDivElement => Boolean(node));
      const closingCard = closingRef.current;
      const allCards = [...stepCards, closingCard].filter(
        (node): node is HTMLDivElement => Boolean(node),
      );

      gsap.set(nodeIds, { autoAlpha: 0.18, y: 18, scale: 0.97, transformOrigin: "50% 50%" });
      gsap.set(lineIds, { autoAlpha: 0.18 });
      setCardInactive(allCards);
      setCardActive(stepCards[0]);
      setVisualState(0);

      lineIds.forEach((selector) => {
        const line = sectionRef.current?.querySelector<SVGPathElement>(selector);
        if (!line) {
          return;
        }
        const length = line.getTotalLength();
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          autoAlpha: 0.82,
        });
      });

      if (reducedMotion) {
        gsap.set(nodeIds, { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(allCards, { autoAlpha: 1, y: 0, scale: 1 });
        lineIds.forEach((selector) => gsap.set(selector, { strokeDashoffset: 0 }));
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: stepperRef.current,
          start: "top 18%",
          endTrigger: stepperRef.current,
          end: "bottom bottom-=48",
          pin: visualRef.current,
          pinSpacing: true,
          pinReparent: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        const activateCard = (activeIndex: number) => {
          setCardInactive(allCards);
          if (activeIndex < stepCards.length) {
            setCardActive(stepCards[activeIndex]);
          } else {
            setCardActive(closingCard);
          }
          setVisualState(activeIndex);
        };

        stepCards.forEach((card, index) => {
          const nextCard = stepCards[index + 1] ?? closingCard;
          const isCueStep = index === stepCards.length - 1;

          ScrollTrigger.create({
            trigger: card,
            start: isCueStep ? "top center+=40" : "top center+=90",
            endTrigger: nextCard,
            end: isCueStep ? "top center+=20" : "top center+=90",
            onEnter: () => activateCard(index),
            onEnterBack: () => activateCard(index),
          });
        });

        ScrollTrigger.create({
          trigger: closingCard,
          start: "top center",
          endTrigger: stepperRef.current,
          end: "bottom bottom",
          onEnter: () => activateCard(4),
          onEnterBack: () => activateCard(4),
          onLeaveBack: () => activateCard(3),
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(nodeIds, { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(allCards, { autoAlpha: 1, y: 0, scale: 1 });
        lineIds.forEach((selector) => gsap.set(selector, { strokeDashoffset: 0 }));
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [closingRef, reducedMotion, sectionRef, stepperRef, textRefs, visualRef]);
}
