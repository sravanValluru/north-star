import { SessionMicIcon } from "@/components/svg/SessionMicIcon";

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

      <g transform="translate(110 82)">
        <rect
          x="0"
          y="0"
          width="155"
          height="42"
          rx="21"
          fill="rgba(255,255,255,0.76)"
          stroke="rgba(255,255,255,0.72)"
        />
        <rect
          x="7"
          y="5"
          width="68"
          height="32"
          rx="16"
          fill="#98A18A"
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
          y="25"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#7D848C"
        >
          Normal
        </text>
      </g>

        <text
          x="187.5"
          y="145"
          textAnchor="middle"
          fontSize="12.5"
          fill="#99A0A7"
          fontWeight="600"
        >
          Mode: Demo
        </text>

      <g transform="translate(187.5 320)">
        <circle cx="0" cy="0" r="84" fill="rgba(255,255,255,0.28)" />
        <circle cx="0" cy="0" r="66" fill="#AEB59E" opacity="0.9" />
        <circle cx="0" cy="0" r="68" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="2.2" />
        <circle cx="0" cy="0" r="88" fill="none" stroke="rgba(219,211,199,0.26)" strokeWidth="1" />
        <circle cx="0" cy="0" r="106" fill="none" stroke="rgba(219,211,199,0.14)" strokeWidth="0.9" />
        <g transform="translate(0 0)">
          <circle cx="0" cy="0" r="46" fill="url(#micInnerGlow)" opacity="0.28" />
          <SessionMicIcon />
        </g>
      </g>

      <text
        x="187.5"
        y="458"
        textAnchor="middle"
        fontSize="18"
        fill="#5E666E"
        fontWeight="500"
      >
        Listening...
      </text>

      <text
        x="187.5"
        y="491"
        textAnchor="middle"
        fontSize="12.5"
        fill="#788089"
        fontWeight="600"
      >
        Tap mic to mute
      </text>

      <text
        x="187.5"
        y="554"
        textAnchor="middle"
        fontSize="13.5"
        fill="#9AA0A7"
        fontWeight="500"
      >
        Observing vocal patterns for empathy timing
      </text>

      <text
        x="187.5"
        y="620"
        textAnchor="middle"
        fontSize="14"
        fill="#727982"
        fontWeight="600"
      >
        4:46 remaining
      </text>

      <g transform="translate(105 720)">
        <rect
          x="0"
          y="0"
          width="165"
          height="44"
          rx="22"
          fill="rgba(255,255,255,0.84)"
        />
        <text
          x="82.5"
          y="28"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#5C646D"
        >
          Stop Listening
        </text>
      </g>

      <g transform="translate(98 790)">
        <circle cx="0" cy="0" r="4" fill="#98A18A" />
        <text x="13" y="5" fontSize="13" fill="#97A0A7" fontWeight="500">
          Connected
        </text>
        <text x="85" y="5" fontSize="13" fill="#C5CCD1" fontWeight="500">
          |
        </text>
        <circle cx="105" cy="0" r="4" fill="#98A18A" />
        <text x="118" y="5" fontSize="13" fill="#97A0A7" fontWeight="500">
          Audio Analysis Active
        </text>
      </g>

      <defs>
        <radialGradient id="micInnerGlow" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="rgba(230,199,156,0.34)" />
          <stop offset="60%" stopColor="rgba(230,199,156,0.08)" />
          <stop offset="100%" stopColor="rgba(230,199,156,0)" />
        </radialGradient>
      </defs>
    </svg>
  );
}
