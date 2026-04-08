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
          "relative mx-auto w-[min(100%,calc(82vh*0.466))] max-w-[394px] rounded-[46px] border border-white/12 bg-[linear-gradient(180deg,#313845_0%,#1E2530_35%,#151A22_100%)] px-[13px] pb-[13px] pt-[14px] shadow-[0_36px_120px_rgba(0,0,0,0.45)]",
          className,
        )}
      >
        <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-black">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center pt-[2px]">
            <div className="flex h-[30px] w-[132px] items-center justify-center rounded-b-[18px] rounded-t-[15px] border border-white/8 bg-[#05070b] shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
              <div className="h-1.5 w-14 rounded-full bg-white/14" />
              <div className="ml-3 flex h-3 w-3 items-center justify-center rounded-full bg-[#0f141b] ring-1 ring-white/14">
                <div className="h-1.5 w-1.5 rounded-full bg-[#1c2734]" />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  },
);
