import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { SoftInfoCard } from "@/components/ui/SoftInfoCard";
import { sectionContent } from "@/content/sectionContent";

export function SafetySection() {
  const section = sectionContent.safety;

  return (
    <SectionContainer id="safety">
      <div className="rounded-[36px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.82),rgba(17,22,31,0.9))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
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
