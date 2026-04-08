type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative overflow-x-clip">
      <div className="absolute inset-x-0 top-0 z-[-1] h-[48rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_60%)]" />
      <div className="pointer-events-none absolute left-[-12rem] top-[22rem] z-[-1] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(230,199,156,0.26),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-[44rem] z-[-1] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.22),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[20%] top-[96rem] z-[-1] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(183,227,214,0.2),transparent_60%)] blur-3xl" />
      {children}
    </main>
  );
}
