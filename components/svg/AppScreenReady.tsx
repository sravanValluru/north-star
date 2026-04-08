export function AppScreenReady() {
  return (
    <svg
      width="375"
      height="812"
      viewBox="0 0 375 812"
      role="img"
      aria-label="Ready screen with start session and mute controls."
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="readyBackground" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FEFCF8" />
          <stop offset="55%" stopColor="#F9F6F0" />
          <stop offset="100%" stopColor="#F5F0E8" />
        </linearGradient>
        <radialGradient id="readyGlowWarm" cx="35%" cy="20%" r="60%">
          <stop offset="0%" stopColor="rgba(230,199,156,0.24)" />
          <stop offset="55%" stopColor="rgba(230,199,156,0.08)" />
          <stop offset="100%" stopColor="rgba(230,199,156,0)" />
        </radialGradient>
        <radialGradient id="readyGlowCool" cx="70%" cy="72%" r="60%">
          <stop offset="0%" stopColor="rgba(191,215,234,0.2)" />
          <stop offset="55%" stopColor="rgba(191,215,234,0.06)" />
          <stop offset="100%" stopColor="rgba(191,215,234,0)" />
        </radialGradient>
      </defs>

      <rect width="375" height="812" fill="url(#readyBackground)" />
      <rect width="375" height="812" fill="url(#readyGlowWarm)" />
      <rect width="375" height="812" fill="url(#readyGlowCool)" />

      <g transform="translate(111 78)">
        <rect
          x="0"
          y="0"
          width="153"
          height="44"
          rx="22"
          fill="rgba(255,255,255,0.84)"
          stroke="rgba(229,225,217,0.95)"
        />
        <rect
          x="6"
          y="5"
          width="68"
          height="34"
          rx="17"
          fill="#232A31"
        />
        <text
          x="40"
          y="27"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#FFFFFF"
        >
          Demo
        </text>
        <text
          x="113"
          y="27"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#6F7780"
        >
          Normal
        </text>
      </g>

        <text
          x="187.5"
          y="142"
          textAnchor="middle"
          fontSize="13"
          fill="#838D97"
          fontWeight="500"
        >
          Mode: Demo
        </text>

      <g transform="translate(187.5 322)">
        <circle cx="0" cy="0" r="108" fill="rgba(255,255,255,0.56)" />
        <circle cx="0" cy="0" r="92" fill="rgba(255,255,255,0.42)" />
        <circle cx="0" cy="0" r="76" fill="url(#micCenterFill)" />
        <circle
          cx="0"
          cy="0"
          r="76"
          fill="none"
          stroke="rgba(219,211,199,0.95)"
        />
        <g transform="translate(0 -4)">
          <circle cx="0" cy="0" r="52" fill="url(#micInnerGlow)" opacity="0.58" />
          <circle cx="0" cy="0" r="44" fill="rgba(255,255,255,0.34)" />
          <g fill="none" stroke="#2F3740">
            <rect x="-12" y="-24" width="24" height="38" rx="12" strokeWidth="2.6" />
            <path d="M -17 0 A 17 17 0 0 0 17 0" strokeWidth="2.6" />
            <path d="M 0 14 V 29" strokeWidth="2.6" />
            <path d="M -12 29 H 12" strokeWidth="2.6" />
          </g>
        </g>
      </g>

      <text
        x="187.5"
        y="470"
        textAnchor="middle"
        fontSize="23"
        fill="#48515B"
        fontWeight="500"
      >
        Tap to start listening
      </text>

      <text
        x="187.5"
        y="516"
        textAnchor="middle"
        fontSize="12"
        fill="#7E8893"
        fontWeight="500"
      >
        <tspan x="187.5" dy="0">
          The companion will quietly observe and
        </tspan>
        <tspan x="187.5" dy="22">
          provide gentle cues when helpful
        </tspan>
      </text>

      <g transform="translate(145 620)">
        <circle cx="0" cy="0" r="4" fill="#9DA88E" />
        <text x="14" y="5" fontSize="13" fill="#7E8893" fontWeight="500">
          Connected
        </text>
      </g>

      <g transform="translate(34 690)">
        <rect
          x="0"
          y="0"
          width="255"
          height="56"
          rx="28"
          fill="url(#startButtonFill)"
          stroke="rgba(58,64,73,0.12)"
        />
        <text
          x="127.5"
          y="34"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#FFFFFF"
        >
          Start session
        </text>
        <g transform="translate(269 0)">
          <rect
            x="0"
            y="0"
            width="56"
            height="56"
            rx="28"
            fill="rgba(255,255,255,0.84)"
            stroke="rgba(228,223,214,0.98)"
          />
          <path
            d="M 20 21 H 27 C 30 21 32 23 32 26 V 30 C 32 33 30 35 27 35 H 20 Z"
            fill="none"
            stroke="#707D89"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M 32 25 L 38 21 V 35 L 32 31"
            fill="none"
            stroke="#707D89"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M 18 19 L 38 37"
            stroke="#707D89"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>
      </g>

      <defs>
        <radialGradient id="micInnerGlow" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="rgba(230,199,156,0.34)" />
          <stop offset="60%" stopColor="rgba(230,199,156,0.08)" />
          <stop offset="100%" stopColor="rgba(230,199,156,0)" />
        </radialGradient>
        <linearGradient id="micCenterFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFDFC" />
          <stop offset="100%" stopColor="#F4EFE7" />
        </linearGradient>
        <linearGradient id="startButtonFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F3740" />
          <stop offset="100%" stopColor="#1F252C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
