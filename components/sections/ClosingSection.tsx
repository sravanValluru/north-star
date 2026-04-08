import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function ClosingSection() {
  const section = sectionContent.closing;

  return (
    <SectionContainer id="closing" className="min-h-[70vh]">
      <div className="max-w-[680px] rounded-[36px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(238,243,248,0.74),rgba(236,247,244,0.72))] p-8 shadow-soft backdrop-blur-[4px] sm:p-10">
        <SectionHeadline>{section.headline}</SectionHeadline>
        <SectionSubtext className="whitespace-pre-line">{section.subtext}</SectionSubtext>
      </div>
    </SectionContainer>
  );
}
