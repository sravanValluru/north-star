import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function IBSContextSection() {
  const section = sectionContent.ibsContext;

  return (
    <SectionContainer id="ibs-context">
      <div className="rounded-[36px] border border-border bg-[linear-gradient(180deg,rgba(16,22,30,0.82),rgba(21,27,34,0.9)_42%,rgba(14,26,29,0.84))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-[12px] sm:p-8 lg:p-10">
      <SectionHeadline>{section.headline}</SectionHeadline>
      <SectionSubtext>{section.subtext}</SectionSubtext>
      <div className="mt-8 grid gap-3 text-lg text-muted">
        {section.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      </div>
    </SectionContainer>
  );
}
