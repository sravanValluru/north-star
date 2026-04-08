type SoftInfoCardProps = {
  children: React.ReactNode;
};

export function SoftInfoCard({ children }: SoftInfoCardProps) {
  return (
    <div className="rounded-[28px] border border-border bg-[#FCFCFB] px-6 py-5 text-base leading-7 text-muted shadow-[0_8px_24px_rgba(31,31,31,0.02)]">
      {children}
    </div>
  );
}
