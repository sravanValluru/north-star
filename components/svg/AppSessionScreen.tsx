import { SessionMicIcon } from "@/components/svg/SessionMicIcon";

type AppSessionScreenProps = {
  ariaLabel: string;
  backgroundStart: string;
  backgroundEnd: string;
  ambientColor: string;
  accentColor: string;
  title: string;
  subtitle: string;
  description: string;
  timer: string;
  primaryButtonLabel: string;
  cueLabel?: string;
  cueText?: string;
  cueTextColor?: string;
  cueBorderColor?: string;
  footerRightText?: string;
  muted?: boolean;
};

export function AppSessionScreen({
  ariaLabel,
  backgroundStart,
  backgroundEnd,
  ambientColor,
  accentColor,
  title,
  subtitle,
  description,
  timer,
  primaryButtonLabel,
  cueLabel,
  cueText,
  cueTextColor = "#6C90AA",
  cueBorderColor = "#8BB0C9",
  footerRightText = "Audio Analysis Active",
  muted = false,
}: AppSessionScreenProps) {
  return (
    <svg
      width="375"
      height="812"
      viewBox="0 0 375 812"
      role="img"
      aria-label={ariaLabel}
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={`screenBg-${accentColor.slice(1)}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={backgroundStart} />
          <stop offset="100%" stopColor={backgroundEnd} />
        </linearGradient>
        <radialGradient id={`screenGlow-${accentColor.slice(1)}`} cx="50%" cy="40%" r="78%">
          <stop offset="0%" stopColor={ambientColor} />
          <stop offset="48%" stopColor="rgba(255,255,255,0.16)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id={`micGlow-${accentColor.slice(1)}`} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <rect width="375" height="812" fill={`url(#screenBg-${accentColor.slice(1)})`} />
      <rect width="375" height="812" fill={`url(#screenGlow-${accentColor.slice(1)})`} />

      <g transform="translate(110 82)">
        <rect x="0" y="0" width="155" height="42" rx="21" fill="rgba(255,255,255,0.76)" stroke="rgba(255,255,255,0.72)" />
        <rect x="7" y="5" width="68" height="32" rx="16" fill="#98A18A" />
        <text x="41" y="25" textAnchor="middle" fontSize="13" fontWeight="600" fill="#FFFFFF">
          Demo
        </text>
        <text x="113" y="25" textAnchor="middle" fontSize="13" fontWeight="600" fill="#7D848C">
          Normal
        </text>
      </g>

      <text x="187.5" y="145" textAnchor="middle" fontSize="12.5" fill="#99A0A7" fontWeight="600">
        Mode: Demo
      </text>

      <g transform="translate(187.5 320)">
        <circle cx="0" cy="0" r="78" fill={`url(#micGlow-${accentColor.slice(1)})`} opacity="0.92" />
        <circle cx="0" cy="0" r="64" fill={accentColor} opacity="0.82" />
        <circle cx="0" cy="0" r="66" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="2.2" />
        <circle cx="0" cy="0" r="86" fill="none" stroke="rgba(208,214,213,0.18)" strokeWidth="1" />
        <circle cx="0" cy="0" r="104" fill="none" stroke="rgba(208,214,213,0.1)" strokeWidth="0.9" />
        <SessionMicIcon muted={muted} />
      </g>

      <text x="187.5" y="460" textAnchor="middle" fontSize="18" fill="#5E666E" fontWeight="500">
        {title}
      </text>
      <text x="187.5" y="492" textAnchor="middle" fontSize="12.5" fill="#788089" fontWeight="600">
        {subtitle}
      </text>
      <text x="187.5" y="554" textAnchor="middle" fontSize="13.5" fill="#9AA0A7" fontWeight="500">
        {description}
      </text>
      <text x="187.5" y="620" textAnchor="middle" fontSize="14" fill="#727982" fontWeight="600">
        {timer}
      </text>

      {cueLabel ? (
        <>
          <g transform="translate(98 670)">
            <rect
              x="0"
              y="0"
              width="179"
              height="56"
              rx="28"
              fill="rgba(255,255,255,0.28)"
              stroke={cueBorderColor}
              strokeWidth="2.2"
            />
            <text
              x="89.5"
              y="35"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              letterSpacing="0.12em"
              fill={cueTextColor}
            >
              {cueLabel}
            </text>
          </g>
          {cueText ? (
            <text x="187.5" y="744" textAnchor="middle" fontSize="13" fill="#8D949B" fontWeight="500">
              {cueText}
            </text>
          ) : null}
          <g transform="translate(105 776)">
            <rect x="0" y="0" width="165" height="40" rx="20" fill="rgba(255,255,255,0.84)" />
            <text x="82.5" y="25" textAnchor="middle" fontSize="14" fontWeight="600" fill="#5C646D">
              {primaryButtonLabel}
            </text>
          </g>
        </>
      ) : (
        <>
          <g transform="translate(105 734)">
            <rect x="0" y="0" width="165" height="44" rx="22" fill="rgba(255,255,255,0.84)" />
            <text x="82.5" y="28" textAnchor="middle" fontSize="14" fontWeight="600" fill="#5C646D">
              {primaryButtonLabel}
            </text>
          </g>
          <g transform="translate(98 798)">
            <circle cx="0" cy="0" r="4" fill="#98A18A" />
            <text x="13" y="5" fontSize="13" fill="#97A0A7" fontWeight="500">
              Connected
            </text>
            <text x="85" y="5" fontSize="13" fill="#C5CCD1" fontWeight="500">
              |
            </text>
            <circle cx="105" cy="0" r="4" fill="#98A18A" />
            <text x="118" y="5" fontSize="13" fill="#97A0A7" fontWeight="500">
              {footerRightText}
            </text>
          </g>
        </>
      )}
    </svg>
  );
}
