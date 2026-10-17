'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Search, X, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';
import type { DocMetadata } from '@/lib/docs';

interface DocSearchProps {
  docs: DocMetadata[];
}

export function DocSearch({ docs }: DocSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  // Global hotkey: Cmd+K / Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filteredDocs = query.trim()
    ? docs.filter(
        (d) =>
          d.title.toLowerCase().includes(query.toLowerCase()) ||
          d.description.toLowerCase().includes(query.toLowerCase()) ||
          d.category.toLowerCase().includes(query.toLowerCase())
      )
    : docs.slice(0, 6);

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all text-xs"
        aria-label="Search documentation"
      >
        <span className="flex items-center gap-2">
          <Search className="w-4 h-4 text-cyan-400" />
          <span>Search documentation...</span>
        </span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Documentation"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/50">
              <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search topics, codecs, playback engines, installation..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 rounded text-slate-500 hover:text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results list */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {query.trim() ? `Search Results (${filteredDocs.length})` : 'Popular Articles'}
              </div>

              {filteredDocs.length > 0 ? (
                filteredDocs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    onClick={handleClose}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-900/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                          {doc.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/60 shrink-0">
                          {doc.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {doc.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center text-slate-400 text-xs">
                  No documentation found matching &ldquo;{query}&rdquo;.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between text-[11px] text-slate-500">
              <span>Press <kbd className="font-mono bg-slate-800 px-1 py-0.5 rounded text-slate-400">ESC</kbd> to exit</span>
              <span className="flex items-center gap-1">
                <CornerDownLeft className="w-3 h-3" /> to navigate
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
