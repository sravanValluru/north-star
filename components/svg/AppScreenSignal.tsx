export function AppScreenSignal() {
  return (
    <svg
      width="375"
      height="812"
      viewBox="0 0 375 812"
      role="img"
      aria-label="Voice-pattern screen comparing a steady baseline against the live listening signal."
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="signalBackground" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FCFBF8" />
          <stop offset="55%" stopColor="#F7F8F5" />
          <stop offset="100%" stopColor="#EEF4F6" />
        </linearGradient>
        <radialGradient id="signalGlowWarm" cx="30%" cy="18%" r="62%">
          <stop offset="0%" stopColor="rgba(230,199,156,0.2)" />
          <stop offset="58%" stopColor="rgba(230,199,156,0.06)" />
          <stop offset="100%" stopColor="rgba(230,199,156,0)" />
        </radialGradient>
        <radialGradient id="signalGlowCool" cx="76%" cy="64%" r="60%">
          <stop offset="0%" stopColor="rgba(191,215,234,0.22)" />
          <stop offset="58%" stopColor="rgba(191,215,234,0.08)" />
          <stop offset="100%" stopColor="rgba(191,215,234,0)" />
        </radialGradient>
        <linearGradient id="signalCardFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(247,249,248,0.96)" />
        </linearGradient>
        <linearGradient id="signalButtonFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#313941" />
          <stop offset="100%" stopColor="#232A31" />
        </linearGradient>
        <linearGradient id="signalWaveLive" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9EB9CC" />
          <stop offset="100%" stopColor="#7D9FBB" />
        </linearGradient>
        <linearGradient id="signalWaveBaseline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D9C7A7" />
          <stop offset="100%" stopColor="#C9D7CC" />
        </linearGradient>
        <radialGradient id="signalCenterGlow" cx="50%" cy="50%" r="58%">
          <stop offset="0%" stopColor="rgba(191,215,234,0.18)" />
          <stop offset="70%" stopColor="rgba(191,215,234,0.04)" />
          <stop offset="100%" stopColor="rgba(191,215,234,0)" />
        </radialGradient>
      </defs>

      <rect width="375" height="812" fill="url(#signalBackground)" />
      <rect width="375" height="812" fill="url(#signalGlowWarm)" />
      <rect width="375" height="812" fill="url(#signalGlowCool)" />

      <g transform="translate(28 80)">
        <rect x="0" y="0" width="114" height="32" rx="16" fill="rgba(255,255,255,0.92)" stroke="rgba(216,224,229,0.95)" />
        <circle cx="18" cy="16" r="4" fill="#B7C9C0" />
        <text x="31" y="20" fontSize="12.5" fill="#556560" fontWeight="600">
          Voice Lens
        </text>
      </g>

      <g transform="translate(292 79)">
        <rect x="0" y="0" width="50" height="34" rx="17" fill="rgba(255,255,255,0.92)" stroke="rgba(216,224,229,0.95)" />
        <path d="M 16 22 V 11" stroke="#82909B" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M 21 18 V 11" stroke="#82909B" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M 26 24 V 11" stroke="#82909B" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M 31 16 V 11" stroke="#82909B" strokeWidth="1.7" strokeLinecap="round" />
      </g>

      <text x="187.5" y="128" textAnchor="middle" fontSize="12.5" fill="#73828C" fontWeight="600">
        Mode: Listening
      </text>
      <text x="187.5" y="148" textAnchor="middle" fontSize="11.5" fill="#97A3AD">
        Changes are compared against a calmer baseline
      </text>

      <g transform="translate(34 174)">
        <rect x="0" y="0" width="307" height="104" rx="28" fill="url(#signalCardFill)" stroke="rgba(216,224,229,0.95)" />
        <text x="22" y="28" fontSize="11" fill="#90A0AB" fontWeight="700" letterSpacing="0.14em">
          WHAT STANDS OUT
        </text>
        <text x="22" y="50" fontSize="14" fill="#54616B" fontWeight="600">
          Pace rises while pauses get shorter.
        </text>
        <g transform="translate(20 64)">
          <rect x="0" y="0" width="86" height="26" rx="13" fill="rgba(191,215,234,0.18)" />
          <text x="43" y="17" textAnchor="middle" fontSize="11.5" fill="#5F7E93" fontWeight="600">
            Pace +12%
          </text>
        </g>
        <g transform="translate(116 64)">
          <rect x="0" y="0" width="92" height="26" rx="13" fill="rgba(230,199,156,0.2)" />
          <text x="46" y="17" textAnchor="middle" fontSize="11.5" fill="#7B6D5A" fontWeight="600">
            Pauses shorter
          </text>
        </g>
        <g transform="translate(218 64)">
          <rect x="0" y="0" width="74" height="26" rx="13" fill="rgba(183,201,192,0.18)" />
          <text x="37" y="17" textAnchor="middle" fontSize="11.5" fill="#5F726B" fontWeight="600">
            Stable tone
          </text>
        </g>
      </g>

      <g transform="translate(187.5 408)">
        <circle cx="0" cy="0" r="132" fill="url(#signalCenterGlow)" />
        <circle cx="0" cy="0" r="112" fill="rgba(255,255,255,0.46)" />
        <circle cx="0" cy="0" r="94" fill="rgba(247,249,248,0.98)" stroke="#D7E0E4" strokeWidth="1.1" />
        <circle cx="0" cy="0" r="74" fill="rgba(255,255,255,0.34)" />
        <circle cx="0" cy="0" r="56" fill="rgba(255,255,255,0.5)" />
        <circle cx="0" cy="0" r="78" fill="none" stroke="rgba(191,215,234,0.24)" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="102" fill="none" stroke="rgba(183,201,192,0.24)" strokeWidth="1.1" />
        <circle cx="0" cy="0" r="126" fill="none" stroke="rgba(230,199,156,0.18)" strokeWidth="1" />

        <path
          d="M -110 6 C -88 -10 -72 18 -48 4 S -10 -14 16 6 S 54 24 78 6 S 112 -16 132 0"
          fill="none"
          stroke="url(#signalWaveLive)"
          strokeWidth="4.8"
          strokeLinecap="round"
          opacity="0.98"
        />
        <path
          d="M -106 26 C -88 16 -66 36 -42 28 S -6 18 16 30 S 52 42 78 30 S 112 16 130 22"
          fill="none"
          stroke="url(#signalWaveBaseline)"
          strokeWidth="3.1"
          strokeLinecap="round"
          opacity="0.92"
        />
        <path
          d="M -90 -18 C -72 -28 -56 -4 -34 -12 S 2 -26 28 -14 S 68 0 90 -10"
          fill="none"
          stroke="rgba(183,201,192,0.44)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />

        <g opacity="0.9">
          <circle cx="-58" cy="18" r="5" fill="#BFD7EA" />
          <circle cx="34" cy="9" r="5" fill="#BFD7EA" />
          <circle cx="96" cy="8" r="5" fill="#BFD7EA" />
        </g>

        <g transform="translate(-112 -102)">
          <rect x="0" y="0" width="92" height="24" rx="12" fill="rgba(255,255,255,0.9)" stroke="rgba(214,222,227,0.95)" />
          <line x1="14" y1="12" x2="32" y2="12" stroke="#91ADC1" strokeWidth="3" strokeLinecap="round" />
          <text x="46" y="16" fontSize="10.5" fill="#6F7F89" fontWeight="600">
            Live now
          </text>
        </g>
        <g transform="translate(30 82)">
          <rect x="0" y="0" width="94" height="24" rx="12" fill="rgba(255,255,255,0.9)" stroke="rgba(214,222,227,0.95)" />
          <line x1="14" y1="12" x2="32" y2="12" stroke="#D5C4A4" strokeWidth="3" strokeLinecap="round" />
          <text x="46" y="16" fontSize="10.5" fill="#6F7F89" fontWeight="600">
            Baseline
          </text>
        </g>
      </g>

      <g transform="translate(44 552)">
        <rect x="0" y="0" width="287" height="138" rx="30" fill="url(#signalCardFill)" stroke="rgba(216,224,229,0.95)" />
        <text x="143.5" y="34" textAnchor="middle" fontSize="19" fill="#47535C" fontWeight="600">
          Listening quietly...
        </text>
        <text x="143.5" y="57" textAnchor="middle" fontSize="12.5" fill="#71808B" fontWeight="500">
          <tspan x="143.5" dy="0">A gentle rise in pace appears</tspan>
          <tspan x="143.5" dy="16">before the thought fully lands.</tspan>
        </text>

        <g transform="translate(24 88)">
          <text x="0" y="11" fontSize="10.5" fill="#94A0AA" fontWeight="700" letterSpacing="0.12em">
            PACE
          </text>
          <rect x="0" y="20" width="72" height="8" rx="4" fill="rgba(191,215,234,0.18)" />
          <rect x="0" y="20" width="49" height="8" rx="4" fill="#BFD7EA" />
        </g>
        <g transform="translate(108 88)">
          <text x="0" y="11" fontSize="10.5" fill="#94A0AA" fontWeight="700" letterSpacing="0.12em">
            PAUSES
          </text>
          <rect x="0" y="20" width="72" height="8" rx="4" fill="rgba(230,199,156,0.2)" />
          <rect x="0" y="20" width="58" height="8" rx="4" fill="#E6C79C" />
        </g>
        <g transform="translate(192 88)">
          <text x="0" y="11" fontSize="10.5" fill="#94A0AA" fontWeight="700" letterSpacing="0.12em">
            STABILITY
          </text>
          <rect x="0" y="20" width="72" height="8" rx="4" fill="rgba(183,201,192,0.18)" />
          <rect x="0" y="20" width="46" height="8" rx="4" fill="#B7C9C0" />
        </g>
      </g>

      <g transform="translate(30 718)">
        <rect x="0" y="0" width="258" height="54" rx="27" fill="url(#signalButtonFill)" stroke="rgba(61,68,76,0.12)" />
        <text x="129" y="33" textAnchor="middle" fontSize="14" fontWeight="600" fill="#FFFFFF">
          Continue listening
        </text>
        <g transform="translate(272 0)">
          <rect x="0" y="0" width="48" height="54" rx="24" fill="rgba(255,255,255,0.84)" stroke="rgba(220,226,223,0.98)" />
          <path d="M 18 20 H 24 C 27 20 29 22 29 25 V 29 C 29 32 27 34 24 34 H 18 Z" fill="none" stroke="#70807A" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M 29 24 L 34 20 V 34 L 29 30" fill="none" stroke="#70807A" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M 16 18 L 34 36" stroke="#70807A" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </g>

      <text x="187.5" y="796" textAnchor="middle" fontSize="13" fill="#7D8A85" fontWeight="500">
        Mute · Voice patterns stay quietly in view
      </text>
    </svg>
  );
}
