"use client";

import { AppScreenGround } from "@/components/svg/AppScreenGround";
import { AppScreenNeutral } from "@/components/svg/AppScreenNeutral";
import { AppScreenReady } from "@/components/svg/AppScreenReady";
import { AppScreenReframe } from "@/components/svg/AppScreenReframe";
import { AppScreenSignal } from "@/components/svg/AppScreenSignal";
import { AppScreenSummary } from "@/components/svg/AppScreenSummary";
import { AppScreenValidate } from "@/components/svg/AppScreenValidate";
import { CueState } from "@/types";

type PhoneAppScreenProps = {
  state: CueState["id"] | "summary" | "signal";
};

export function PhoneAppScreen({ state }: PhoneAppScreenProps) {
  switch (state) {
    case "ready":
      return <AppScreenReady />;
    case "neutral":
      return <AppScreenNeutral />;
    case "validate":
      return <AppScreenValidate />;
    case "ground":
      return <AppScreenGround />;
    case "reframe":
      return <AppScreenReframe />;
    case "signal":
      return <AppScreenSignal />;
    case "summary":
      return <AppScreenSummary />;
    default:
      return <AppScreenReady />;
  }
}
