export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-200">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-sm text-slate-400">Loading builder...</p>
      </div>
    </div>
  );
}
