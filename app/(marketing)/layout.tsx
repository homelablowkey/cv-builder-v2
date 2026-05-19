export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-white text-lg">
            <span className="text-cyan-400">&lt;</span>CV Builder<span className="text-cyan-400">/&gt;</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/builder" className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-500 transition-colors text-sm">
              Edit CV
            </a>
          </div>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </div>
  );
}
