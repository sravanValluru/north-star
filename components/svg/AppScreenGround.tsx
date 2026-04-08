import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";
import { CueChip } from "@/components/svg/CueChip";
import { MicCircle } from "@/components/svg/MicCircle";
import { WaveformLayer } from "@/components/svg/WaveformLayer";

export function AppScreenGround() {
  return (
    <BaseScreenLayout
      contextText="Regulation may be needed first"
      bottomText="Sustained activation detected"
    >
      <WaveformLayer variant="slow-rings" color="#E6C79C" opacity={0.3} />
      <MicCircle fill="#FAF3E8" stroke="#EBD6B8" />
      <CueChip label="GROUND" background="#F6E9D7" textColor="#A6792D" />
    </BaseScreenLayout>
  );
}
