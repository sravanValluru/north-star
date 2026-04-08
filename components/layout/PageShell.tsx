type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative overflow-x-clip">
      <div className="absolute inset-x-0 top-0 z-[-1] h-[48rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_60%)]" />
      {children}
    </main>
  );
}
