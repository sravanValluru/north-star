import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { CueChip } from "@/components/svg/CueChip";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenReframe() {
  return (
    <BaseScreenLayout
      contextText="A moment for reflection"
      bottomText="Stability returning"
    >
      <WaveformLayer variant="lines" color="#B7E3D6" opacity={0.35} />
      <MicCircle fill="#ECF7F4" stroke="#D2EADF" />
      <CueChip label="REFRAME" background="#E3F3EE" textColor="#3C8C7A" />
    </BaseScreenLayout>
  );
}
