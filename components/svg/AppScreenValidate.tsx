import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { CueChip } from "@/components/svg/CueChip";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenValidate() {
  return (
    <BaseScreenLayout
      contextTitle="A moment that may need acknowledgment"
      contextDetail="Sustained vocal intensity may suggest emotional significance."
      footerStatus="Sustained vocal intensity change detected"
      accent="#BFD7EA"
      accentGlow="rgba(191,215,234,0.28)"
      sessionState="Cue"
      sessionStateText="Prosody cue surfaced"
      primaryActionLabel="Stop session"
      secondaryActionLabel="Mute"
    >
      <WaveformLayer variant="rings" color="#BFD7EA" opacity={0.34} />
      <MicCircle
        fill="#EEF6FB"
        stroke="#D7E7F2"
        halo="rgba(191,215,234,0.2)"
        innerLabel="Cue"
      />
      <CueChip label="VALIDATE" background="#EAF3FA" textColor="#5A8FB5" />
    </BaseScreenLayout>
  );
}
