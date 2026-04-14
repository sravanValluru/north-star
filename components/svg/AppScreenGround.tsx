import { AppSessionScreen } from "@/components/svg/AppSessionScreen";

export function AppScreenGround() {
  return (
    <AppSessionScreen
      ariaLabel="Ground cue screen modeled after the live app validate layout with a warmer alert tone."
      backgroundStart="#FBF7EF"
      backgroundEnd="#F4EBDD"
      ambientColor="rgba(230,199,156,0.38)"
      accentColor="#B9A48A"
      title="Listening..."
      subtitle="Tap mic to mute"
      description="Observing vocal patterns for empathy timing"
      timer="3:39 remaining"
      cueLabel="GROUND"
      cueText="Next cue in 12s"
      cueTextColor="#A47A39"
      cueBorderColor="#C9A86A"
      primaryButtonLabel="Stop Listening"
    />
  );
}
