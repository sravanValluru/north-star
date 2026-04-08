type MicCircleProps = {
  fill?: string;
  stroke?: string;
  halo?: string;
  innerLabel?: string;
  iconStroke?: string;
  labelColor?: string;
};

export function MicCircle({
  fill = "#F3F4F6",
  stroke = "#D1D5DB",
  halo = "rgba(214,214,214,0.18)",
  innerLabel,
  iconStroke = "#56616E",
  labelColor = "#8D98A6",
}: MicCircleProps) {
  return (
    <g id="mic-circle">
      <circle cx="187.5" cy="330" r="108" fill={halo} opacity="0.92" />
      <circle
        cx="187.5"
        cy="330"
        r="88"
        fill="rgba(255,255,255,0.48)"
        stroke="rgba(235,231,224,0.86)"
        strokeWidth="1.1"
      />
      <circle
        cx="187.5"
        cy="330"
        r="72"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.4"
      />
      <circle cx="167" cy="309" r="12" fill="rgba(255,255,255,0.32)" />
      <circle
        cx="187.5"
        cy="330"
        r="52"
        fill="rgba(255,255,255,0.32)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      {innerLabel ? (
        <text
          x="187.5"
          y="401"
          textAnchor="middle"
          fontSize="11.5"
          fill={labelColor}
          fontWeight="600"
          letterSpacing="0.06em"
        >
          {innerLabel}
        </text>
      ) : null}
      <g transform="translate(187.5 330)" fill="none" stroke={iconStroke}>
        <rect x="-11" y="-21" width="22" height="35" rx="11" strokeWidth="2.4" />
        <path d="M -16 0 A 16 16 0 0 0 16 0" strokeWidth="2.4" />
        <path d="M 0 14 V 29" strokeWidth="2.4" />
        <path d="M -11 29 H 11" strokeWidth="2.4" />
      </g>
    </g>
  );
}
