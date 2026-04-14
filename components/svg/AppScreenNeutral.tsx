import { AppSessionScreen } from "@/components/svg/AppSessionScreen";

export function AppScreenNeutral() {
  return (
    <AppSessionScreen
      ariaLabel="Baseline listening screen modeled after the live app."
      backgroundStart="#F4F8F4"
      backgroundEnd="#EEF4EA"
      ambientColor="rgba(214,225,204,0.34)"
      accentColor="#AAB49D"
      title="Listening..."
      subtitle="Tap mic to mute"
      description="Observing vocal patterns for empathy timing"
      timer="4:46 remaining"
      primaryButtonLabel="Stop Listening"
    />
  );
}
