import React from 'react';
import Link from 'next/link';
import { Disc, ArrowLeft, Home, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl glass-card border border-slate-800">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mx-auto">
          <Disc className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Media Track Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page or documentation article you were seeking doesn&apos;t exist or has moved to a new track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/docs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Browse Docs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
