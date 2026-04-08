import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type SectionSubtextProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const SectionSubtext = forwardRef<HTMLParagraphElement, SectionSubtextProps>(
  function SectionSubtext({ children, className, style }, ref) {
    return (
      <p
        ref={ref}
        style={style}
        className={cn(
          "mt-5 max-w-prose text-lg leading-8 text-muted sm:text-[1.375rem] sm:leading-9",
          className,
        )}
      >
        {children}
      </p>
    );
  },
);
