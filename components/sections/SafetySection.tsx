import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { SoftInfoCard } from "@/components/ui/SoftInfoCard";
import { sectionContent } from "@/content/sectionContent";

export function SafetySection() {
  const section = sectionContent.safety;

  return (
    <SectionContainer id="safety">
      <div className="rounded-[36px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(245,247,250,0.82))] p-6 shadow-soft backdrop-blur-[4px] sm:p-8 lg:p-10">
      <SectionHeadline>{section.headline}</SectionHeadline>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {section.points.map((point) => (
          <SoftInfoCard key={point}>{point}</SoftInfoCard>
        ))}
      </div>
      <SectionSubtext className="mt-8">{section.closingLine}</SectionSubtext>
      </div>
    </SectionContainer>
  );
}
