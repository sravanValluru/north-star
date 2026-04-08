import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { MicCircle } from "@/components/svg/MicCircle";

export function AppScreenReady() {
  return (
    <BaseScreenLayout
      contextText="Tap to start listening"
      bottomText="System inactive"
    >
      <MicCircle />
    </BaseScreenLayout>
  );
}
