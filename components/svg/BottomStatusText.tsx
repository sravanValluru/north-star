type BottomStatusTextProps = {
  children: React.ReactNode;
};

export function BottomStatusText({ children }: BottomStatusTextProps) {
  return (
    <text
      x="187.5"
      y="740"
      textAnchor="middle"
      fontSize="14"
      fill="#8A8A8A"
      fontWeight="400"
    >
      {children}
    </text>
  );
}
