import { cn } from "@/lib/utils";
import { ElementType, forwardRef } from "react";

type SectionHeadlineProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
};

export const SectionHeadline = forwardRef<HTMLHeadingElement, SectionHeadlineProps>(
  function SectionHeadline({ children, className, as, style }, ref) {
    const Component = (as ?? "h2") as ElementType;

    return (
      <Component
        ref={ref}
        style={style}
        className={cn(
          "text-balance text-[clamp(2.8rem,6vw,5.2rem)] font-medium leading-[0.96] tracking-[-0.04em] text-text",
          className,
        )}
      >
        {children}
      </Component>
    );
  },
);
