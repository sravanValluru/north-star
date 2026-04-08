import { SectionContainer } from "@/components/layout/SectionContainer";
import { RoadmapItem } from "@/components/ui/RoadmapItem";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { sectionContent } from "@/content/sectionContent";

export function RoadmapSection() {
  const section = sectionContent.roadmap;

  return (
    <SectionContainer id="roadmap">
      <div className="rounded-[36px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(238,243,248,0.78),rgba(247,241,232,0.72))] p-6 shadow-soft backdrop-blur-[4px] sm:p-8 lg:p-10">
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
