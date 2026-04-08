import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { CueChip } from "@/components/svg/CueChip";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenReframe() {
  return (
    <BaseScreenLayout
      contextText="A moment for reflection"
      bottomText="Stability returning"
      accent="#B7E3D6"
      accentGlow="rgba(183,227,214,0.28)"
    >
      <WaveformLayer variant="lines" color="#7CCAB1" opacity={0.46} />
      <MicCircle
        fill="#ECF7F4"
        stroke="#D2EADF"
        halo="rgba(183,227,214,0.22)"
      />
      <CueChip label="REFRAME" background="#E3F3EE" textColor="#3C8C7A" />
    </BaseScreenLayout>
  );
}
