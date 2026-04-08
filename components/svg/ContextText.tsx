type ContextTextProps = {
  children: React.ReactNode;
};

export function ContextText({ children }: ContextTextProps) {
  return (
    <text
      x="187.5"
      y="600"
      textAnchor="middle"
      fontSize="16"
      fill="#5F5F5F"
      fontWeight="400"
    >
      {children}
    </text>
  );
}
