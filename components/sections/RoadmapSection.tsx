import { SectionContainer } from "@/components/layout/SectionContainer";
import { RoadmapItem } from "@/components/ui/RoadmapItem";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { sectionContent } from "@/content/sectionContent";

export function RoadmapSection() {
  const section = sectionContent.roadmap;

  return (
    <SectionContainer id="roadmap">
      <div className="rounded-[36px] border border-white/70 bg-white/55 p-6 shadow-soft backdrop-blur-[2px] sm:p-8 lg:p-10">
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
