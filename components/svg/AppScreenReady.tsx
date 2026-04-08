import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { MicCircle } from "@/components/svg/MicCircle";

export function AppScreenReady() {
  return (
    <BaseScreenLayout
      contextText="Tap to start listening"
      bottomText="System inactive"
      accent="#D6D6D6"
      accentGlow="rgba(214,214,214,0.24)"
    >
      <MicCircle halo="rgba(214,214,214,0.24)" />
    </BaseScreenLayout>
  );
}
