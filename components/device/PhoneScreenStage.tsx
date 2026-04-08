type PhoneScreenStageProps = {
  children: React.ReactNode;
  className?: string;
};

export function PhoneScreenStage({
  children,
  className,
}: PhoneScreenStageProps) {
  return (
    <div
      className={`aspect-[375/812] w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFAF8_100%)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
