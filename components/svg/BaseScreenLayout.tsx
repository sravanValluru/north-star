import { TopLabel } from "@/components/svg/TopLabel";

type BaseScreenLayoutProps = {
  children: React.ReactNode;
  contextTitle: string;
  contextDetail?: string;
  footerStatus: string;
  accent?: string;
  accentGlow?: string;
  sessionState: string;
  sessionStateText: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  modeLabel?: string;
};

export function BaseScreenLayout({
  children,
  contextTitle,
  contextDetail,
  footerStatus,
  accent = "#D6D6D6",
  accentGlow = "rgba(214,214,214,0.22)",
  sessionState,
  sessionStateText,
  primaryActionLabel,
  secondaryActionLabel = "Mute",
  modeLabel = "Session live",
}: BaseScreenLayoutProps) {
  return (
    <svg
      width="375"
      height="812"
      viewBox="0 0 375 812"
      role="img"
      aria-label={`${contextTitle}. ${footerStatus}`}
      className="h-full w-full"
    >
      <rect width="375" height="812" fill="#FBFAF8" />
      <rect
        width="375"
        height="812"
        fill="url(#screenBackground)"
      />
      <ellipse cx="188" cy="228" rx="126" ry="96" fill={accentGlow} />
      <ellipse cx="188" cy="628" rx="142" ry="116" fill="rgba(255,255,255,0.52)" />
      <defs>
        <linearGradient id="screenBackground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="56%" stopColor="#FBFAF8" />
          <stop offset="100%" stopColor="#F6F4F1" />
        </linearGradient>
      </defs>
      <TopLabel />
      <g transform="translate(32 84)">
        <rect
          x="0"
          y="0"
          width="110"
          height="30"
          rx="15"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(221,226,232,0.95)"
        />
        <circle cx="18" cy="15" r="4" fill={accent} />
        <text x="31" y="19" fontSize="12.5" fill="#596573" fontWeight="600">
          {sessionState}
        </text>
      </g>
      <g transform="translate(297 82)">
        <rect
          x="0"
          y="0"
          width="46"
          height="34"
          rx="17"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(221,226,232,0.95)"
        />
        <path
          d="M 14 21 V 12"
          stroke="#8A95A3"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M 18 18 V 12"
          stroke="#8A95A3"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M 22 23 V 12"
          stroke="#8A95A3"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M 26 16 V 12"
          stroke="#8A95A3"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </g>
      <text
        x="187.5"
        y="125"
        textAnchor="middle"
        fontSize="12.5"
        fill="#8B96A3"
        fontWeight="500"
      >
        {modeLabel}
      </text>
      <text
        x="187.5"
        y="145"
        textAnchor="middle"
        fontSize="11.5"
        fill="#A1AAB4"
      >
        {sessionStateText}
      </text>
      {children}
      <g transform="translate(40 556)">
        <text
          x="147.5"
          y="0"
          textAnchor="middle"
          fontSize="18"
          fill="#47515D"
          fontWeight="600"
        >
          {contextTitle}
        </text>
        {contextDetail ? (
          <text
            x="147.5"
            y="28"
            textAnchor="middle"
            fontSize="12.5"
            fill="#7D8896"
            fontWeight="500"
          >
            {contextDetail}
          </text>
        ) : null}
      </g>
      <g transform="translate(28 670)">
        <rect
          x="0"
          y="0"
          width="260"
          height="54"
          rx="27"
          fill={accent}
          opacity="0.2"
        />
        <rect
          x="0"
          y="0"
          width="260"
          height="54"
          rx="27"
          fill="url(#statePrimaryFill)"
          stroke="rgba(58,64,73,0.1)"
        />
        <text
          x="130"
          y="33"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#FFFFFF"
        >
          {primaryActionLabel}
        </text>
        <g transform="translate(271 0)">
          <rect
            x="0"
            y="0"
            width="48"
            height="54"
            rx="24"
            fill="rgba(255,255,255,0.84)"
            stroke="rgba(220,225,231,0.98)"
          />
          <path
            d="M 18 20 H 24 C 27 20 29 22 29 25 V 29 C 29 32 27 34 24 34 H 18 Z"
            fill="none"
            stroke="#697684"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 29 24 L 34 20 V 34 L 29 30"
            fill="none"
            stroke="#697684"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 16 18 L 34 36"
            stroke="#697684"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
      </g>
      <text
        x="187.5"
        y="754"
        textAnchor="middle"
        fontSize="13"
        fill="#7E8895"
        fontWeight="500"
      >
        {secondaryActionLabel} · {footerStatus}
      </text>
      <defs>
        <linearGradient id="statePrimaryFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F3740" />
          <stop offset="100%" stopColor="#1F252C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
