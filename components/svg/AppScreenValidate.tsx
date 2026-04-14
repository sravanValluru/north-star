import { AppSessionScreen } from "@/components/svg/AppSessionScreen";

export function AppScreenValidate() {
  return (
    <AppSessionScreen
      ariaLabel="Validate cue screen modeled after the live app validate state."
      backgroundStart="#F2F8FC"
      backgroundEnd="#E4F0F8"
      ambientColor="rgba(159,203,233,0.36)"
      accentColor="#7FA7BE"
      title="Listening..."
      subtitle="Tap mic to mute"
      description="Observing vocal patterns for empathy timing"
      timer="3:43 remaining"
      cueLabel="VALIDATE"
      cueText="Next cue in 10s"
      cueTextColor="#6E98B8"
      cueBorderColor="#86AECB"
      primaryButtonLabel="Stop Listening"
    />
  );
}
