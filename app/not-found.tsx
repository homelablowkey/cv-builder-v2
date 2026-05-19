export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-slate-400 mb-8">Page not found.</p>
        <a href="/" className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition-colors">
          Go Home
        </a>
      </div>
    </div>
  );
}
