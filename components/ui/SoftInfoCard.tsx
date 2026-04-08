type SoftInfoCardProps = {
  children: React.ReactNode;
};

export function SoftInfoCard({ children }: SoftInfoCardProps) {
  return (
    <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(23,29,39,0.88),rgba(17,22,30,0.94))] px-6 py-5 text-base leading-7 text-muted shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
      {children}
    </div>
  );
}
