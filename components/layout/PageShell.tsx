type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative overflow-x-clip">
      <div className="absolute inset-x-0 top-0 z-[-1] h-[48rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="ambient-orb pointer-events-none absolute left-[-10rem] top-[18rem] z-[-1] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(230,199,156,0.28),transparent_62%)] blur-3xl" />
      <div className="ambient-orb-slow pointer-events-none absolute right-[-9rem] top-[38rem] z-[-1] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(191,215,234,0.24),transparent_62%)] blur-3xl" />
      <div className="ambient-orb-delayed pointer-events-none absolute left-[18%] top-[90rem] z-[-1] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(183,227,214,0.18),transparent_60%)] blur-3xl" />
      <div className="ambient-orb-slow pointer-events-none absolute right-[18%] top-[124rem] z-[-1] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(230,199,156,0.18),transparent_60%)] blur-3xl" />
      {children}
    </main>
  );
}
