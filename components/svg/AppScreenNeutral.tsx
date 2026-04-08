export function AppScreenNeutral() {
  return (
    <svg
      width="375"
      height="812"
      viewBox="0 0 375 812"
      role="img"
      aria-label="Active listening screen with gentle monitoring state."
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="neutralBackground" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FCFBF8" />
          <stop offset="58%" stopColor="#F6F6F2" />
          <stop offset="100%" stopColor="#EFF3EF" />
        </linearGradient>
        <radialGradient id="neutralGlowPrimary" cx="34%" cy="21%" r="62%">
          <stop offset="0%" stopColor="rgba(183,201,192,0.24)" />
          <stop offset="58%" stopColor="rgba(183,201,192,0.08)" />
          <stop offset="100%" stopColor="rgba(183,201,192,0)" />
        </radialGradient>
        <radialGradient id="neutralGlowSecondary" cx="72%" cy="75%" r="60%">
          <stop offset="0%" stopColor="rgba(191,215,234,0.15)" />
          <stop offset="62%" stopColor="rgba(191,215,234,0.04)" />
          <stop offset="100%" stopColor="rgba(191,215,234,0)" />
        </radialGradient>
        <linearGradient id="neutralButtonFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E3740" />
          <stop offset="100%" stopColor="#222A31" />
        </linearGradient>
      </defs>

      <rect width="375" height="812" fill="url(#neutralBackground)" />
      <rect width="375" height="812" fill="url(#neutralGlowPrimary)" />
      <rect width="375" height="812" fill="url(#neutralGlowSecondary)" />

      <g transform="translate(32 84)">
        <rect
          x="0"
          y="0"
          width="96"
          height="30"
          rx="15"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(220,226,223,0.96)"
        />
        <circle cx="18" cy="15" r="4" fill="#9CB2A7" />
        <text x="31" y="19" fontSize="12.5" fill="#566660" fontWeight="600">
          Active
        </text>
      </g>

      <g transform="translate(296 82)">
        <rect
          x="0"
          y="0"
          width="46"
          height="34"
          rx="17"
          fill="rgba(255,255,255,0.9)"
          stroke="rgba(220,226,223,0.96)"
        />
        <path d="M 14 21 V 12" stroke="#86948E" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M 18 18 V 12" stroke="#86948E" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M 22 23 V 12" stroke="#86948E" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M 26 16 V 12" stroke="#86948E" strokeWidth="1.7" strokeLinecap="round" />
      </g>

      <text
        x="187.5"
        y="126"
        textAnchor="middle"
        fontSize="12.5"
        fill="#7E8E87"
        fontWeight="600"
      >
        Mode: Monitoring
      </text>
      <text
        x="187.5"
        y="146"
        textAnchor="middle"
        fontSize="11.5"
        fill="#9BA7A3"
      >
        Prosodic monitoring in progress
      </text>

      <g transform="translate(187.5 322)">
        <circle cx="0" cy="0" r="112" fill="rgba(183,201,192,0.14)" />
        <circle cx="0" cy="0" r="94" fill="rgba(255,255,255,0.46)" />
        <circle cx="0" cy="0" r="76" fill="rgba(239,244,240,0.92)" stroke="#CAD8D1" />
        <circle cx="0" cy="0" r="60" fill="none" stroke="rgba(146,171,160,0.3)" strokeWidth="1.1" />
        <circle cx="0" cy="0" r="86" fill="none" stroke="rgba(183,201,192,0.42)" strokeWidth="1.4" />
        <circle cx="0" cy="0" r="110" fill="none" stroke="rgba(183,201,192,0.28)" strokeWidth="1.3" />
        <circle cx="0" cy="0" r="134" fill="none" stroke="rgba(183,201,192,0.22)" strokeWidth="1.15" />
        <circle cx="0" cy="0" r="154" fill="none" stroke="rgba(183,201,192,0.16)" strokeWidth="1" />
        <circle cx="0" cy="0" r="52" fill="rgba(255,255,255,0.3)" />
        <g fill="none" stroke="#55675F" transform="translate(0 -2)">
          <rect x="-11" y="-21" width="22" height="35" rx="11" strokeWidth="2.4" />
          <path d="M -16 0 A 16 16 0 0 0 16 0" strokeWidth="2.4" />
          <path d="M 0 14 V 29" strokeWidth="2.4" />
          <path d="M -11 29 H 11" strokeWidth="2.4" />
        </g>
        <text
          x="0"
          y="79"
          textAnchor="middle"
          fontSize="11.5"
          fill="#7D8D87"
          fontWeight="600"
          letterSpacing="0.06em"
        >
          LIVE
        </text>
      </g>

      <text
        x="187.5"
        y="566"
        textAnchor="middle"
        fontSize="20"
        fill="#47545D"
        fontWeight="600"
      >
        Listening...
      </text>
      <text
        x="187.5"
        y="592"
        textAnchor="middle"
        fontSize="12.5"
        fill="#72808C"
        fontWeight="500"
      >
        No sustained vocal shift is currently being surfaced.
      </text>

      <g transform="translate(30 682)">
        <rect
          x="0"
          y="0"
          width="258"
          height="54"
          rx="27"
          fill="url(#neutralButtonFill)"
          stroke="rgba(61,68,76,0.12)"
        />
        <text
          x="129"
          y="33"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#FFFFFF"
        >
          Stop session
        </text>
        <g transform="translate(272 0)">
          <rect
            x="0"
            y="0"
            width="48"
            height="54"
            rx="24"
            fill="rgba(255,255,255,0.84)"
            stroke="rgba(220,226,223,0.98)"
          />
          <path
            d="M 18 20 H 24 C 27 20 29 22 29 25 V 29 C 29 32 27 34 24 34 H 18 Z"
            fill="none"
            stroke="#70807A"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 29 24 L 34 20 V 34 L 29 30"
            fill="none"
            stroke="#70807A"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 16 18 L 34 36"
            stroke="#70807A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
      </g>

      <text
        x="187.5"
        y="758"
        textAnchor="middle"
        fontSize="13"
        fill="#7D8A85"
        fontWeight="500"
      >
        Mute · No sustained change detected
      </text>
    </svg>
  );
}
