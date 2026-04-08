import { SectionContainer } from "@/components/layout/SectionContainer";
import { RoadmapItem } from "@/components/ui/RoadmapItem";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { sectionContent } from "@/content/sectionContent";

export function RoadmapSection() {
  const section = sectionContent.roadmap;

  return (
    <SectionContainer id="roadmap">
      <div className="rounded-[36px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.82),rgba(18,27,36,0.88),rgba(28,22,18,0.82))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
      <SectionHeadline>{section.headline}</SectionHeadline>
      <div className="mt-8 grid gap-4">
        {section.items.map((item) => (
          <RoadmapItem key={item}>{item}</RoadmapItem>
        ))}
      </div>
      </div>
    </SectionContainer>
  );
}
