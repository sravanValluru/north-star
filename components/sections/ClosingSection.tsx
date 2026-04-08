import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function ClosingSection() {
  const section = sectionContent.closing;

  return (
    <SectionContainer id="closing" className="min-h-[70vh]">
      <div className="max-w-[680px] rounded-[36px] border border-border bg-[linear-gradient(135deg,rgba(16,22,30,0.82),rgba(18,27,36,0.88),rgba(14,26,29,0.84))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-10">
        <SectionHeadline>{section.headline}</SectionHeadline>
        <SectionSubtext className="whitespace-pre-line">{section.subtext}</SectionSubtext>
      </div>
    </SectionContainer>
  );
}
