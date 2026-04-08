import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function IBSContextSection() {
  const section = sectionContent.ibsContext;

  return (
    <SectionContainer id="ibs-context">
      <div className="rounded-[36px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(243,242,239,0.7)_42%,rgba(236,247,244,0.56))] p-6 shadow-soft backdrop-blur-[4px] sm:p-8 lg:p-10">
      <SectionHeadline>{section.headline}</SectionHeadline>
      <SectionSubtext>{section.subtext}</SectionSubtext>
      <div className="mt-8 grid gap-3 text-lg text-[#5F5F5F]">
        {section.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      </div>
    </SectionContainer>
  );
}
