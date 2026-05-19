'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-200">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Builder Error</h2>
        <p className="text-slate-400 mb-4">{error.message}</p>
        <button onClick={reset} className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition-colors">
          Try Again
        </button>
      </div>
    </div>
  );
}
