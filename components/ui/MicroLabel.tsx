import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type MicroLabelProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const MicroLabel = forwardRef<HTMLParagraphElement, MicroLabelProps>(
  function MicroLabel({ children, className, style }, ref) {
    return (
      <p
        ref={ref}
        style={style}
        className={cn(
          "mb-5 text-sm font-medium tracking-[0.01em] text-micro",
          className,
        )}
      >
        {children}
      </p>
    );
  },
);
