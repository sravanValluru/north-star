import { BottomStatusText } from "@/components/svg/BottomStatusText";
import { ContextText } from "@/components/svg/ContextText";
import { TopLabel } from "@/components/svg/TopLabel";

type BaseScreenLayoutProps = {
  children: React.ReactNode;
  contextText: string;
  bottomText: string;
  accent?: string;
  accentGlow?: string;
};

export function BaseScreenLayout({
  children,
  contextText,
  bottomText,
  accent = "#D6D6D6",
  accentGlow = "rgba(214,214,214,0.22)",
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
      <rect
        width="375"
        height="812"
        fill="url(#screenBackground)"
      />
      <ellipse cx="188" cy="228" rx="126" ry="96" fill={accentGlow} />
      <ellipse cx="188" cy="628" rx="142" ry="116" fill="rgba(255,255,255,0.52)" />
      <defs>
        <linearGradient id="screenBackground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="56%" stopColor="#FBFAF8" />
          <stop offset="100%" stopColor="#F6F4F1" />
        </linearGradient>
      </defs>
      <rect
        x="28"
        y="686"
        width="319"
        height="82"
        rx="28"
        fill="rgba(255,255,255,0.68)"
        stroke="rgba(229,229,229,0.95)"
      />
      <TopLabel />
      {children}
      <ContextText>{contextText}</ContextText>
      <BottomStatusText>{bottomText}</BottomStatusText>
    </svg>
  );
}
