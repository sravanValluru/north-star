import { BottomStatusText } from "@/components/svg/BottomStatusText";
import { ContextText } from "@/components/svg/ContextText";
import { TopLabel } from "@/components/svg/TopLabel";

type BaseScreenLayoutProps = {
  children: React.ReactNode;
  contextText: string;
  bottomText: string;
};

export function BaseScreenLayout({
  children,
  contextText,
  bottomText,
}: BaseScreenLayoutProps) {
  return (
    <svg
      width="375"
      height="812"
      viewBox="0 0 375 812"
      role="img"
      aria-label={`${contextText}. ${bottomText}`}
      className="h-full w-full"
    >
      <rect width="375" height="812" fill="#FBFAF8" />
      <TopLabel />
      {children}
      <ContextText>{contextText}</ContextText>
      <BottomStatusText>{bottomText}</BottomStatusText>
    </svg>
  );
}
