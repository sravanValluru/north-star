type MicCircleProps = {
  fill?: string;
  stroke?: string;
};

export function MicCircle({
  fill = "#F3F4F6",
  stroke = "#D1D5DB",
}: MicCircleProps) {
  return (
    <g id="mic-circle">
      <circle
        cx="187.5"
        cy="330"
        r="60"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <g transform="translate(187.5 330)" fill="none" stroke="#9CA3AF">
        <rect x="-10" y="-18" width="20" height="30" rx="10" strokeWidth="1.8" />
        <path d="M -14 0 A 14 14 0 0 0 14 0" strokeWidth="1.8" />
        <path d="M 0 12 V 24" strokeWidth="1.8" />
        <path d="M -10 24 H 10" strokeWidth="1.8" />
      </g>
    </g>
  );
}
