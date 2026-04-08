import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { SectionSubtext } from "@/components/ui/SectionSubtext";
import { sectionContent } from "@/content/sectionContent";

export function WhyVoiceSection() {
  const section = sectionContent.whyVoice;

  return (
    <SectionContainer id="why-voice">
      <div className="rounded-[36px] border border-white/70 bg-white/55 p-6 shadow-soft backdrop-blur-[2px] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-prose">
            <SectionHeadline className="max-w-[15ch]">{section.headline}</SectionHeadline>
            <SectionSubtext>{section.subtext}</SectionSubtext>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#5F5F5F]">
              {section.labels.map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-[#FCFCFB] px-4 py-2 ring-1 ring-border"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-1 text-lg leading-8 text-muted">
              {section.closingLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-border bg-[#FBFAF8] p-6">
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(191,215,234,0.2),transparent_48%),linear-gradient(180deg,#FCFCFB_0%,#F6F4F1_100%)]">
              <div className="absolute h-56 w-56 rounded-full border border-neutral/20" />
              <div className="absolute h-72 w-72 rounded-full border border-neutral/10" />
              <svg
                viewBox="0 0 520 220"
                className="relative w-full max-w-[420px]"
                aria-hidden="true"
              >
                <path
                  d="M 24 110 C 60 75 88 145 126 110 S 190 75 224 110 S 286 145 320 110 S 382 75 420 110 S 460 145 496 110"
                  fill="none"
                  stroke="#B7C9C0"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 62 146 C 96 122 128 168 160 146 S 224 122 258 146 S 320 168 352 146 S 416 122 454 146"
                  fill="none"
                  stroke="#BFD7EA"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
