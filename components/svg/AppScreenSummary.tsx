import { BaseScreenLayout } from "@/components/svg/BaseScreenLayout";

const summaryRows = [
  { label: "Validate", count: "3 moments", y: 298, tint: "#EAF3FA" },
  { label: "Ground", count: "2 moments", y: 364, tint: "#F6E9D7" },
  { label: "Reframe", count: "1 moment", y: 430, tint: "#E3F3EE" },
] as const;

export function AppScreenSummary() {
  return (
    <BaseScreenLayout
      contextTitle="Session Summary"
      contextDetail="A brief review of surfaced cue moments."
      footerStatus="Post-session reflection"
      accent="#BFD7EA"
      accentGlow="rgba(191,215,234,0.18)"
      sessionState="Complete"
      sessionStateText="Session ended"
      primaryActionLabel="Export notes"
      secondaryActionLabel="Mute"
    >
      <g id="summary-block">
        <text
          x="187.5"
          y="220"
          textAnchor="middle"
          fontSize="20"
          fontWeight="500"
          fill="#1F1F1F"
        >
          Session Summary
        </text>
        {summaryRows.map((row) => (
          <g key={row.label} transform={`translate(57 ${row.y})`}>
            <rect
              x="0"
              y="0"
              width="261"
              height="48"
              rx="24"
              fill={row.tint}
              stroke="#ECE8E1"
            />
            <text x="22" y="30" fontSize="15" fontWeight="500" fill="#1F1F1F">
              {row.label}
            </text>
            <text
              x="239"
              y="30"
              textAnchor="end"
              fontSize="14"
              fill="#5F5F5F"
            >
              {row.count}
            </text>
          </g>
        ))}
      </g>
    </BaseScreenLayout>
  );
}
