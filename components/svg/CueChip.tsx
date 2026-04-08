type CueChipProps = {
  label: string;
  background: string;
  textColor: string;
};

export function CueChip({ label, background, textColor }: CueChipProps) {
  return (
    <g id={`cue-chip-${label.toLowerCase()}`} transform="translate(112 450)">
      <rect
        x="0"
        y="0"
        width="151"
        height="38"
        rx="19"
        fill={background}
        stroke="rgba(255,255,255,0.82)"
      />
      <circle cx="22" cy="19" r="4.5" fill={textColor} opacity="0.9" />
      <text
        x="87"
        y="24"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill={textColor}
        letterSpacing="0.08em"
      >
        {label}
      </text>
    </g>
  );
}
