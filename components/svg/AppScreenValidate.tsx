import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { CueChip } from "@/components/svg/CueChip";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenValidate() {
  return (
    <BaseScreenLayout
      contextText="A moment that may need acknowledgment"
      bottomText="Sustained vocal intensity change detected"
    >
      <WaveformLayer variant="rings" color="#BFD7EA" opacity={0.28} />
      <MicCircle fill="#EEF6FB" stroke="#D7E7F2" />
      <CueChip label="VALIDATE" background="#EAF3FA" textColor="#5A8FB5" />
    </BaseScreenLayout>
  );
}
