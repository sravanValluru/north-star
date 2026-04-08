import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenNeutral() {
  return (
    <BaseScreenLayout
      contextText="Listening…"
      bottomText="No sustained change detected"
      accent="#B7C9C0"
      accentGlow="rgba(183,201,192,0.24)"
    >
      <WaveformLayer variant="rings" color="#B7C9C0" opacity={0.28} />
      <MicCircle
        fill="#EEF1EF"
        stroke="#CBD6D0"
        halo="rgba(183,201,192,0.18)"
      />
    </BaseScreenLayout>
  );
}
