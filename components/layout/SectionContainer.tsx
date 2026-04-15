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
          "relative scroll-mt-8 px-6 py-section sm:scroll-mt-10 sm:px-10 lg:scroll-mt-12 lg:px-16",
          className,
        )}
      >
        <div className="mx-auto w-full max-w-content">{children}</div>
      </section>
    );
  },
);
