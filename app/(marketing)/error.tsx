'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-200">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <button onClick={reset} className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-500 transition-colors">
          Try again
        </button>
      </div>
    </div>
  );
}
