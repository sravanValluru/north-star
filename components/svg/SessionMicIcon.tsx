type SessionMicIconProps = {
  muted?: boolean;
  stroke?: string;
  strokeWidth?: number;
};

export function SessionMicIcon({
  muted = false,
  stroke = "#FFFFFF",
  strokeWidth = 3.8,
}: SessionMicIconProps) {
  return (
    <g
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <rect x="-11" y="-28" width="22" height="39" rx="11" />
      <path d="M -18 -2 A 18 18 0 0 0 18 -2" />
      <path d="M 0 11 V 35" />
      <path d="M -13 35 H 13" />
      {muted ? <path d="M -20 -22 L 20 18" /> : null}
    </g>
  );
}
