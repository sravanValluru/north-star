import { PageShell } from "@/components/layout/PageShell";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { CueWalkthroughSection } from "@/components/sections/CueWalkthroughSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IBSContextSection } from "@/components/sections/IBSContextSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { OpeningSequenceSection } from "@/components/sections/OpeningSequenceSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { SafetySection } from "@/components/sections/SafetySection";

export default function HomePage() {
  return (
    <PageShell>
      <IntroSection />
      <OpeningSequenceSection />
      <HowItWorksSection />
      <CueWalkthroughSection />
      <SafetySection />
      <IBSContextSection />
      <RoadmapSection />
      <ClosingSection />
    </PageShell>
  );
}
