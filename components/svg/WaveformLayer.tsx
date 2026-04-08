type WaveformVariant = "none" | "rings" | "slow-rings" | "lines";

type WaveformLayerProps = {
  variant: WaveformVariant;
  color?: string;
  opacity?: number;
};

export function WaveformLayer({
  variant,
  color = "#B7C9C0",
  opacity = 0.2,
}: WaveformLayerProps) {
  if (variant === "none") {
    return null;
  }

  if (variant === "lines") {
    return (
      <g id="waveform-layer" opacity={opacity}>
        <path
          d="M 115 332 C 132 316 143 348 158 332 S 184 316 199 332 S 224 348 242 332 S 269 316 287 332"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 127 353 C 143 341 154 365 170 353 S 196 341 211 353 S 236 365 249 353"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
    );
  }

  return (
    <g id="waveform-layer" opacity={opacity}>
      <circle
        cx="187.5"
        cy="330"
        r={variant === "slow-rings" ? "88" : "84"}
        fill="none"
        stroke={color}
        strokeWidth={variant === "slow-rings" ? "3" : "2"}
      />
      <circle
        cx="187.5"
        cy="330"
        r={variant === "slow-rings" ? "114" : "108"}
        fill="none"
        stroke={color}
        strokeWidth={variant === "slow-rings" ? "2.5" : "2"}
      />
      <circle
        cx="187.5"
        cy="330"
        r={variant === "slow-rings" ? "138" : "132"}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.8"
      />
    </g>
  );
}
