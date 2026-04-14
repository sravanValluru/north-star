import { AppSessionScreen } from "@/components/svg/AppSessionScreen";

export function AppScreenReframe() {
  return (
    <AppSessionScreen
      ariaLabel="Reframe cue screen modeled after the live app validate layout with a calmer green treatment."
      backgroundStart="#EFF8F4"
      backgroundEnd="#E2F2EA"
      ambientColor="rgba(183,227,214,0.34)"
      accentColor="#95B5AA"
      title="Listening..."
      subtitle="Tap mic to mute"
      description="Observing vocal patterns for empathy timing"
      timer="3:31 remaining"
      cueLabel="REFRAME"
      cueText="Next cue in 14s"
      cueTextColor="#4E8C7E"
      cueBorderColor="#7CB8A9"
      primaryButtonLabel="Stop Listening"
    />
  );
}
