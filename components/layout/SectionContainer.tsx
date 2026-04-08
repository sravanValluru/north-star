import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type SectionContainerProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  function SectionContainer({ id, children, className }, ref) {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative px-6 py-section sm:px-10 lg:px-16",
          className,
        )}
      >
        <div className="mx-auto w-full max-w-content">{children}</div>
      </section>
    );
  },
);
