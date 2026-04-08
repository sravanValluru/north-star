import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenNeutral() {
  return (
    <BaseScreenLayout
      contextText="Listening…"
      bottomText="No sustained change detected"
    >
      <WaveformLayer variant="rings" color="#B7C9C0" opacity={0.2} />
      <MicCircle fill="#EEF1EF" stroke="#CBD6D0" />
    </BaseScreenLayout>
  );
}
