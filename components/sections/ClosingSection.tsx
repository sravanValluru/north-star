import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function ClosingSection() {
  const section = sectionContent.closing;

  return (
    <SectionContainer id="closing" className="min-h-[70vh]">
      <div className="max-w-[680px] rounded-[36px] border border-white/70 bg-white/50 p-8 shadow-soft backdrop-blur-[2px] sm:p-10">
        <SectionHeadline>{section.headline}</SectionHeadline>
        <SectionSubtext className="whitespace-pre-line">{section.subtext}</SectionSubtext>
      </div>
    </SectionContainer>
  );
}
