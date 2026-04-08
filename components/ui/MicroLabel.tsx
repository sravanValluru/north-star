import { forwardRef } from "react";

type MicroLabelProps = {
  children: React.ReactNode;
};

export const MicroLabel = forwardRef<HTMLParagraphElement, MicroLabelProps>(
  function MicroLabel({ children }, ref) {
    return (
      <p ref={ref} className="mb-5 text-sm font-medium tracking-[0.01em] text-micro">
        {children}
      </p>
    );
  },
);
