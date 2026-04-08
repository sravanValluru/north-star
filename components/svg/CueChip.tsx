type CueChipProps = {
  label: string;
  background: string;
  textColor: string;
};

export function CueChip({ label, background, textColor }: CueChipProps) {
  return (
    <g id={`cue-chip-${label.toLowerCase()}`} transform="translate(122 450)">
      <rect x="0" y="0" width="131" height="36" rx="18" fill={background} />
      <text
        x="65.5"
        y="23"
        textAnchor="middle"
        fontSize="13"
        fontWeight="500"
        fill={textColor}
        letterSpacing="0.08em"
      >
        {label}
      </text>
    </g>
  );
}
