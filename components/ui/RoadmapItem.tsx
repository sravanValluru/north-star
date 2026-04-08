type RoadmapItemProps = {
  children: React.ReactNode;
};

export function RoadmapItem({ children }: RoadmapItemProps) {
  return (
    <div className="rounded-[28px] border border-border bg-[#FCFCFB] px-6 py-5 text-base font-medium text-text shadow-[0_8px_24px_rgba(31,31,31,0.02)]">
      {children}
    </div>
  );
}
