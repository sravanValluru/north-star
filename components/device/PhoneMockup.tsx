import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type PhoneMockupProps = {
  children: React.ReactNode;
  className?: string;
};

export const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  function PhoneMockup({ children, className }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[390px] rounded-[42px] border border-[#DADADA] bg-[#FCFBF9] p-[14px] shadow-ambient",
          className,
        )}
      >
        <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
            <div className="h-1.5 w-24 rounded-full bg-[#1F1F1F]/7" />
          </div>
          {children}
        </div>
      </div>
    );
  },
);
