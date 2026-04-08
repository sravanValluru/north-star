type DiagramOrientation = "desktop" | "mobile";

type NodeConfig = {
  id: string;
  title: string;
  support: string;
  centerX: number;
  centerY: number;
  fill: string;
  stroke: string;
};

const desktopNodes: NodeConfig[] = [
  {
    id: "client",
    title: "Client State",
    support: "emotional activation",
    centerX: 100,
    centerY: 210,
    fill: "#F3F2EF",
    stroke: "#E4E1DB",
  },
  {
    id: "physiology",
    title: "Physiology",
    support: "autonomic response",
    centerX: 270,
    centerY: 210,
    fill: "#FAF3E8",
    stroke: "#E8D3B3",
  },
  {
    id: "voice",
    title: "Vocal Expression",
    support: "prosodic changes",
    centerX: 460,
    centerY: 210,
    fill: "#EEF5F1",
    stroke: "#C7D8CF",
  },
  {
    id: "pattern",
    title: "Pattern Recognition",
    support: "patterns, not labels",
    centerX: 660,
    centerY: 210,
    fill: "#EEF3F8",
    stroke: "#D0DCE8",
  },
  {
    id: "cue",
    title: "Cue",
    support: "validate / ground / reframe",
    centerX: 850,
    centerY: 210,
    fill: "#F5F7FA",
    stroke: "#D9E1EA",
  },
  {
    id: "therapist",
    title: "Therapist Judgment",
    support: "clinical interpretation",
    centerX: 1035,
    centerY: 210,
    fill: "#F6F6F6",
    stroke: "#DDDDDD",
  },
  {
    id: "regulation",
    title: "Regulation",
    support: "client stabilization",
    centerX: 1195,
    centerY: 210,
    fill: "#ECF7F4",
    stroke: "#C6E4DA",
  },
] as const;

const mobileNodes: NodeConfig[] = [
  {
    id: "client",
    title: "Client State",
    support: "emotional activation",
    centerX: 187.5,
    centerY: 90,
    fill: "#F3F2EF",
    stroke: "#E4E1DB",
  },
  {
    id: "physiology",
    title: "Physiology",
    support: "autonomic response",
    centerX: 187.5,
    centerY: 205,
    fill: "#FAF3E8",
    stroke: "#E8D3B3",
  },
  {
    id: "voice",
    title: "Vocal Expression",
    support: "prosodic changes",
    centerX: 187.5,
    centerY: 320,
    fill: "#EEF5F1",
    stroke: "#C7D8CF",
  },
  {
    id: "pattern",
    title: "Pattern Recognition",
    support: "patterns, not labels",
    centerX: 187.5,
    centerY: 435,
    fill: "#EEF3F8",
    stroke: "#D0DCE8",
  },
  {
    id: "cue",
    title: "Cue",
    support: "validate / ground / reframe",
    centerX: 187.5,
    centerY: 550,
    fill: "#F5F7FA",
    stroke: "#D9E1EA",
  },
  {
    id: "therapist",
    title: "Therapist Judgment",
    support: "clinical interpretation",
    centerX: 187.5,
    centerY: 665,
    fill: "#F6F6F6",
    stroke: "#DDDDDD",
  },
  {
    id: "regulation",
    title: "Regulation",
    support: "client stabilization",
    centerX: 187.5,
    centerY: 780,
    fill: "#ECF7F4",
    stroke: "#C6E4DA",
  },
] as const;

function getDimensions(orientation: DiagramOrientation) {
  return orientation === "desktop"
    ? { width: 1200, height: 420, cardWidth: 150, cardHeight: 78 }
    : { width: 375, height: 900, cardWidth: 240, cardHeight: 78 };
}

function getConnectorPath(
  start: NodeConfig,
  end: NodeConfig,
  orientation: DiagramOrientation,
  cardWidth: number,
  cardHeight: number,
) {
  if (orientation === "desktop") {
    const startX = start.centerX + cardWidth / 2;
    const endX = end.centerX - cardWidth / 2;
    const y = start.centerY;
    return `M ${startX} ${y} C ${startX + 28} ${y} ${endX - 28} ${y} ${endX} ${y}`;
  }

  const startY = start.centerY + cardHeight / 2;
  const endY = end.centerY - cardHeight / 2;
  const x = start.centerX;
  return `M ${x} ${startY} C ${x} ${startY + 24} ${x} ${endY - 24} ${x} ${endY}`;
}

function renderVoiceMotif(node: NodeConfig) {
  return (
    <path
      d={`M ${node.centerX - 48} ${node.centerY + 20} C ${node.centerX - 38} ${node.centerY + 12} ${node.centerX - 28} ${node.centerY + 28} ${node.centerX - 18} ${node.centerY + 20} S ${node.centerX + 3} ${node.centerY + 12} ${node.centerX + 14} ${node.centerY + 20}`}
      fill="none"
      stroke="#9FB9AD"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.9"
    />
  );
}

function renderPatternMotif(node: NodeConfig) {
  const dots = [
    [-18, 14],
    [-6, 14],
    [6, 14],
    [18, 14],
  ] as const;

  return (
    <g opacity="0.7">
      {dots.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={node.centerX + x}
          cy={node.centerY + y}
          r="2"
          fill="#9AB0C5"
        />
      ))}
    </g>
  );
}

function renderNode(
  node: NodeConfig,
  orientation: DiagramOrientation,
  cardWidth: number,
  cardHeight: number,
) {
  const x = node.centerX - cardWidth / 2;
  const y = node.centerY - cardHeight / 2;

  return (
    <g id={`node-${node.id}`} key={node.id}>
      <rect
        id={`node-${node.id}-card`}
        x={x}
        y={y}
        rx="24"
        width={cardWidth}
        height={cardHeight}
        fill={node.fill}
        stroke={node.stroke}
      />
      {node.id === "cue" ? (
        <rect
          id="node-cue-highlight"
          x={x + 14}
          y={y + 12}
          rx="14"
          width={cardWidth - 28}
          height="20"
          fill="#DCE8EF"
          opacity="0.65"
        />
      ) : null}
      <text
        id={`node-${node.id}-title`}
        x={node.centerX}
        y={node.centerY - 8}
        textAnchor="middle"
        fontSize={orientation === "desktop" ? "16" : "17"}
        fontWeight="600"
        fill="#1F1F1F"
      >
        {node.title}
      </text>
      <text
        id={`node-${node.id}-sub`}
        x={node.centerX}
        y={node.centerY + 18}
        textAnchor="middle"
        fontSize="12"
        fill="#6B7280"
      >
        {node.support}
      </text>
      {node.id === "voice" ? renderVoiceMotif(node) : null}
      {node.id === "pattern" ? renderPatternMotif(node) : null}
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
      aria-label="Conceptual flow from client state through physiology, vocal expression, pattern recognition, cue, therapist judgment, and regulation."
    >
      {nodes.slice(0, -1).map((node, index) => (
        <path
          key={`${node.id}-${nodes[index + 1].id}`}
          id={`line-${node.id}-${nodes[index + 1].id === "voice" ? "voice" : nodes[index + 1].id}`}
          d={getConnectorPath(
            node,
            nodes[index + 1],
            orientation,
            cardWidth,
            cardHeight,
          )}
          stroke="#D1D5DB"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {nodes.map((node) => renderNode(node, orientation, cardWidth, cardHeight))}
    </svg>
  );
}
