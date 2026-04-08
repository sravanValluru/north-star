import { PageShell } from "@/components/layout/PageShell";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { CueWalkthroughSection } from "@/components/sections/CueWalkthroughSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IBSContextSection } from "@/components/sections/IBSContextSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { SafetySection } from "@/components/sections/SafetySection";
import { WhyVoiceSection } from "@/components/sections/WhyVoiceSection";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <ProblemSection />
      <WhyVoiceSection />
      <HowItWorksSection />
      <CueWalkthroughSection />
      <SafetySection />
      <IBSContextSection />
      <RoadmapSection />
      <ClosingSection />
    </PageShell>
  );
}
