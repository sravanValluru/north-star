import { cn } from "@/lib/utils";

type PinnedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function PinnedSection({
  children,
  className,
}: PinnedSectionProps) {
  return <div className={cn("relative", className)}>{children}</div>;
}
