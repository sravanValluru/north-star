type DiagramOrientation = "desktop" | "mobile";

type NodeConfig = {
  id: string;
  title: string;
  support: string;
  badge: string;
  centerX: number;
  centerY: number;
  fill: string;
  stroke: string;
  accent: string;
  accentSoft: string;
};

const desktopNodes: NodeConfig[] = [
  {
    id: "client",
    title: "State Shift",
    support: "emotional activation",
    badge: "01",
    centerX: 380,
    centerY: 114,
    fill: "#F3F2EF",
    stroke: "#E5E0D6",
    accent: "#D9C7A7",
    accentSoft: "#F0E4CF",
  },
  {
    id: "physiology",
    title: "Body Response",
    support: "breath, pace, tension",
    badge: "02",
    centerX: 380,
    centerY: 260,
    fill: "#FAF3E8",
    stroke: "#E8D3B3",
    accent: "#E6C79C",
    accentSoft: "#F5E3C8",
  },
  {
    id: "voice",
    title: "Voice Signal",
    support: "prosodic expression",
    badge: "03",
    centerX: 380,
    centerY: 406,
    fill: "#EEF5F1",
    stroke: "#C7D8CF",
    accent: "#B7C9C0",
    accentSoft: "#DCE9E3",
  },
  {
    id: "pattern",
    title: "Pattern Layer",
    support: "change, not meaning",
    badge: "04",
    centerX: 380,
    centerY: 552,
    fill: "#EEF3F8",
    stroke: "#D0DCE8",
    accent: "#BFD7EA",
    accentSoft: "#DCE8F3",
  },
  {
    id: "cue",
    title: "Minimal Cue",
    support: "validate / ground / reframe",
    badge: "05",
    centerX: 380,
    centerY: 698,
    fill: "#F4F8FB",
    stroke: "#D5E0EA",
    accent: "#BFD7EA",
    accentSoft: "#E5F0F8",
  },
  {
    id: "therapist",
    title: "Therapist Judgment",
    support: "clinical interpretation",
    badge: "06",
    centerX: 380,
    centerY: 844,
    fill: "#F8F8F7",
    stroke: "#E3E3E0",
    accent: "#E6C79C",
    accentSoft: "#F3E6D0",
  },
] as const;

const mobileNodes: NodeConfig[] = [
  {
    id: "client",
    title: "State Shift",
    support: "emotional activation",
    badge: "01",
    centerX: 195,
    centerY: 120,
    fill: "#F3F2EF",
    stroke: "#E5E0D6",
    accent: "#D9C7A7",
    accentSoft: "#F0E4CF",
  },
  {
    id: "physiology",
    title: "Body Response",
    support: "breath, pace, tension",
    badge: "02",
    centerX: 195,
    centerY: 274,
    fill: "#FAF3E8",
    stroke: "#E8D3B3",
    accent: "#E6C79C",
    accentSoft: "#F5E3C8",
  },
  {
    id: "voice",
    title: "Voice Signal",
    support: "prosodic expression",
    badge: "03",
    centerX: 195,
    centerY: 428,
    fill: "#EEF5F1",
    stroke: "#C7D8CF",
    accent: "#B7C9C0",
    accentSoft: "#DCE9E3",
  },
  {
    id: "pattern",
    title: "Pattern Layer",
    support: "change, not meaning",
    badge: "04",
    centerX: 195,
    centerY: 582,
    fill: "#EEF3F8",
    stroke: "#D0DCE8",
    accent: "#BFD7EA",
    accentSoft: "#DCE8F3",
  },
  {
    id: "cue",
    title: "Minimal Cue",
    support: "validate / ground / reframe",
    badge: "05",
    centerX: 195,
    centerY: 736,
    fill: "#F4F8FB",
    stroke: "#D5E0EA",
    accent: "#BFD7EA",
    accentSoft: "#E5F0F8",
  },
  {
    id: "therapist",
    title: "Therapist Judgment",
    support: "clinical interpretation",
    badge: "06",
    centerX: 195,
    centerY: 890,
    fill: "#F8F8F7",
    stroke: "#E3E3E0",
    accent: "#E6C79C",
    accentSoft: "#F3E6D0",
  },
] as const;

function getDimensions(orientation: DiagramOrientation) {
  return orientation === "desktop"
    ? { width: 760, height: 980, cardWidth: 250, cardHeight: 116 }
    : { width: 390, height: 1010, cardWidth: 294, cardHeight: 120 };
}

function getConnectorPath(
  start: NodeConfig,
  end: NodeConfig,
  orientation: DiagramOrientation,
  cardWidth: number,
  cardHeight: number,
) {
  if (orientation === "desktop") {
    const startX = start.centerX;
    const startY = start.centerY + cardHeight / 2;
    const endX = end.centerX;
    const endY = end.centerY - cardHeight / 2;
    const midY = (startY + endY) / 2;
    return `M ${startX} ${startY} C ${startX} ${midY - 34} ${endX} ${midY + 34} ${endX} ${endY}`;
  }

  const startX = start.centerX;
  const startY = start.centerY + cardHeight / 2;
  const endX = end.centerX;
  const endY = end.centerY - cardHeight / 2;
  const midY = (startY + endY) / 2;
  return `M ${startX} ${startY} C ${startX} ${midY - 26} ${endX} ${midY + 26} ${endX} ${endY}`;
}

function renderNodeIcon(node: NodeConfig, x: number, y: number) {
  const chipX = x + 182;
  const chipY = y + 20;

  const chip = (
    <>
      <rect x={chipX} y={chipY + 2} width="52" height="52" rx="17" fill="rgba(13,18,24,0.06)" />
      <rect x={chipX + 6} y={chipY + 8} width="40" height="40" rx="14" fill={node.accentSoft} opacity="0.92" />
      <rect x={chipX + 10} y={chipY + 12} width="32" height="32" rx="12" fill={node.accent} opacity="0.16" />
    </>
  );

  switch (node.id) {
    case "client":
      return (
        <g opacity="0.95">
          {chip}
          <circle cx={chipX + 26} cy={chipY + 25} r="6.8" fill="none" stroke="#6F7D8A" strokeWidth="2.2" />
          <path d={`M ${chipX + 15} ${chipY + 38} C ${chipX + 20} ${chipY + 30} ${chipX + 32} ${chipY + 30} ${chipX + 37} ${chipY + 38}`} fill="none" stroke="#6F7D8A" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      );
    case "physiology":
      return (
        <g opacity="0.95">
          {chip}
          <path d={`M ${chipX + 14} ${chipY + 35} C ${chipX + 18} ${chipY + 24} ${chipX + 22} ${chipY + 41} ${chipX + 27} ${chipY + 29} C ${chipX + 31} ${chipY + 23} ${chipX + 35} ${chipY + 37} ${chipX + 39} ${chipY + 26}`} fill="none" stroke="#7B6B58" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "voice":
      return (
        <g opacity="0.95">
          {chip}
          <path d={`M ${chipX + 14} ${chipY + 35} C ${chipX + 18} ${chipY + 27} ${chipX + 22} ${chipY + 39} ${chipX + 27} ${chipY + 30} S ${chipX + 37} ${chipY + 26} ${chipX + 41} ${chipY + 34}`} fill="none" stroke="#6E8793" strokeWidth="2.4" strokeLinecap="round" />
          <path d={`M ${chipX + 17} ${chipY + 27} L ${chipX + 17} ${chipY + 38}`} fill="none" stroke="#6E8793" strokeWidth="2" strokeLinecap="round" />
          <path d={`M ${chipX + 38} ${chipY + 26} L ${chipX + 38} ${chipY + 35}`} fill="none" stroke="#6E8793" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case "pattern":
      return (
        <g opacity="0.95">
          {chip}
          <rect x={chipX + 14} y={chipY + 18} width="7" height="21" rx="3.5" fill="#7890A5" />
          <rect x={chipX + 24} y={chipY + 23} width="7" height="16" rx="3.5" fill="#9AB0C5" />
          <rect x={chipX + 34} y={chipY + 14} width="7" height="25" rx="3.5" fill="#7890A5" opacity="0.82" />
        </g>
      );
    case "cue":
      return (
        <g id="node-cue-highlight" opacity="0.95">
          {chip}
          <circle cx={chipX + 18} cy={chipY + 28} r="4.2" fill="#8BA8BC" />
          <circle cx={chipX + 26} cy={chipY + 28} r="4.2" fill="#D8B67D" />
          <circle cx={chipX + 34} cy={chipY + 28} r="4.2" fill="#A8BDC9" />
          <path d={`M ${chipX + 15} ${chipY + 37} L ${chipX + 37} ${chipY + 37}`} fill="none" stroke="#9FB1BF" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case "therapist":
      return (
        <g opacity="0.95">
          {chip}
          <path d={`M ${chipX + 16} ${chipY + 31} L ${chipX + 24} ${chipY + 39} L ${chipX + 38} ${chipY + 19}`} fill="none" stroke="#7C6C59" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    default:
      return null;
  }
}

function renderNode(
  node: NodeConfig,
  orientation: DiagramOrientation,
  cardWidth: number,
  cardHeight: number,
) {
  const x = node.centerX - cardWidth / 2;
  const y = node.centerY - cardHeight / 2;
  const titleSize = orientation === "desktop" ? 18.5 : 20.5;
  const subSize = orientation === "desktop" ? 12.6 : 13.8;

  return (
    <g id={`node-${node.id}`} key={node.id}>
      <ellipse
        id={`node-${node.id}-glow`}
        cx={node.centerX}
        cy={node.centerY + 4}
        rx={cardWidth / 2 - 12}
        ry={cardHeight / 2 - 8}
        fill={node.accent}
        opacity="0.08"
      />
      <rect
        x={x}
        y={y + 10}
        rx="28"
        width={cardWidth}
        height={cardHeight}
        fill="rgba(0,0,0,0.18)"
        opacity="0.22"
      />
      <rect
        id={`node-${node.id}-card`}
        x={x}
        y={y}
        rx="28"
        width={cardWidth}
        height={cardHeight}
        fill={node.fill}
        stroke={node.stroke}
      />
      <rect x={x + 16} y={y + 12} rx="10" width={cardWidth - 32} height="8" fill={node.accentSoft} opacity="0.46" />
      <rect x={x + 12} y={y + 20} width="4" height={cardHeight - 40} rx="2" fill={node.accent} opacity="0.38" />
      <rect x={x + 18} y={y + 16} rx="12" width="42" height="22" fill={node.accent} opacity="0.18" />
      <text x={x + 39} y={y + 31} textAnchor="middle" fontSize="10.5" fontWeight="700" letterSpacing="0.12em" fill="#56616D">
        {node.badge}
      </text>
      <text id={`node-${node.id}-title`} x={x + 18} y={y + 64} fontSize={titleSize} fontWeight="700" fill="#171C22">
        {node.title}
      </text>
      <text id={`node-${node.id}-sub`} x={x + 18} y={y + 88} fontSize={subSize} fill="#65707C">
        {node.support}
      </text>
      {renderNodeIcon(node, x, y)}
    </g>
  );
}

export function ConceptualFlowDiagram({
  orientation = "desktop",
}: {
  orientation?: DiagramOrientation;
}) {
  const { width, height, cardWidth, cardHeight } = getDimensions(orientation);
  const nodes = orientation === "desktop" ? desktopNodes : mobileNodes;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      role="img"
      aria-label="A vertical signal pipeline showing state shift, body response, voice signal, pattern layer, minimal cue, and therapist judgment."
    >
      <defs>
        <radialGradient id="diagramGlowDesktop" cx="50%" cy="32%" r="52%">
          <stop offset="0%" stopColor="rgba(191,215,234,0.18)" />
          <stop offset="62%" stopColor="rgba(191,215,234,0.04)" />
          <stop offset="100%" stopColor="rgba(191,215,234,0)" />
        </radialGradient>
        <linearGradient id="diagramRail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(230,199,156,0.12)" />
          <stop offset="50%" stopColor="rgba(191,215,234,0.18)" />
          <stop offset="100%" stopColor="rgba(183,201,192,0.12)" />
        </linearGradient>
      </defs>

      {orientation === "desktop" ? (
        <>
          <ellipse cx="380" cy="488" rx="168" ry="372" fill="url(#diagramGlowDesktop)" opacity="0.22" />
          <ellipse cx="380" cy="488" rx="118" ry="298" fill="none" stroke="rgba(255,255,255,0.05)" />
          <path d="M 380 86 L 380 874" stroke="url(#diagramRail)" strokeWidth="154" strokeLinecap="round" opacity="0.12" fill="none" />
        </>
      ) : (
        <>
          <rect x="70" y="86" width="250" height="842" rx="125" fill="url(#diagramRail)" opacity="0.12" />
          <rect x="108" y="118" width="174" height="778" rx="87" fill="none" stroke="rgba(255,255,255,0.06)" />
        </>
      )}

      {nodes.slice(0, -1).map((node, index) => (
        <path
          key={`${node.id}-${nodes[index + 1].id}`}
          id={`line-${node.id}-${nodes[index + 1].id}`}
          d={getConnectorPath(node, nodes[index + 1], orientation, cardWidth, cardHeight)}
          stroke="rgba(201,210,219,0.82)"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {nodes.map((node) => renderNode(node, orientation, cardWidth, cardHeight))}
    </svg>
  );
}
