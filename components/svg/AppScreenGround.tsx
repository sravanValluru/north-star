import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { CueChip } from "@/components/svg/CueChip";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenGround() {
  return (
    <BaseScreenLayout
      contextTitle="Regulation may be needed first"
      contextDetail="The system suggests slowing before interpretation."
      footerStatus="Sustained activation detected"
      accent="#E6C79C"
      accentGlow="rgba(230,199,156,0.3)"
      sessionState="Cue"
      sessionStateText="Activation remains elevated"
      primaryActionLabel="Stop session"
      secondaryActionLabel="Mute"
    >
      <WaveformLayer variant="slow-rings" color="#E6C79C" opacity={0.36} />
      <MicCircle
        fill="#FAF3E8"
        stroke="#EBD6B8"
        halo="rgba(230,199,156,0.22)"
        innerLabel="Steady"
      />
      <CueChip label="GROUND" background="#F6E9D7" textColor="#A6792D" />
    </BaseScreenLayout>
  );
}
