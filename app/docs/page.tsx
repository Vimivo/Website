import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  Terminal,
  Monitor,
  Music,
} from 'lucide-react';
import { getAllDocs, getDocCategories } from '@/lib/docs';
import { DocSidebar } from '@/components/DocSidebar';
import { DocSearch } from '@/components/DocSearch';

export const metadata: Metadata = {
  title: 'Documentation Hub',
  description:
    'Comprehensive user and developer documentation for Vimivo: installation guides, keyboard shortcuts, audio equalizer, video player engine, format support, and security audits.',
};

export default function DocsPage() {
  const allDocs = getAllDocs();
  const categories = getDocCategories();

  const categoryIcons: Record<string, React.ElementType> = {
    'Getting Started': BookOpen,
    'Features & Media': Music,
    Organization: Layers,
    'Platforms & Systems': Monitor,
    'Security & Trust': Shield,
    Releases: Sparkles,
    Community: Terminal,
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <DocSidebar categories={categories} />

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 space-y-12">
            {/* Header & Search */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <span>Official Documentation</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Vimivo Documentation
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Explore complete guides, technical specifications, keyboard shortcuts, and platform manuals for Vimivo universal media player.
                </p>
              </div>

              {/* Instant Search Bar */}
              <div className="max-w-xl">
                <DocSearch docs={allDocs} />
              </div>
            </div>

            {/* Quick Start Spotlight */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 bg-gradient-to-r from-cyan-950/20 via-slate-900/60 to-indigo-950/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>Featured Guide</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Getting Started with Vimivo
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Learn how Vimivo indexes local files, sets up your media library, configures hardware-accelerated playback, and respects your privacy.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/docs/overview"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                >
                  <span>Read Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/docs/installation"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 transition-colors"
                >
                  <span>Installation Manual</span>
                </Link>
                <Link
                  href="/docs/keyboard-shortcuts"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 transition-colors"
                >
                  <span>Keyboard Shortcuts</span>
                </Link>
              </div>
            </div>

            {/* Documentation by Categories */}
            <div className="space-y-10">
              <h2 className="text-xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
                Browse Documentation by Category
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((cat) => {
                  const Icon = categoryIcons[cat.category] || BookOpen;
                  return (
                    <div
                      key={cat.category}
                      className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-base">{cat.category}</h3>
                            <span className="text-[11px] text-slate-400">
                              {cat.docs.length} {cat.docs.length === 1 ? 'Article' : 'Articles'}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2 pt-2">
                          {cat.docs.map((doc) => (
                            <li key={doc.slug}>
                              <Link
                                href={`/docs/${doc.slug}`}
                                className="group flex items-start justify-between gap-2 p-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                              >
                                <div>
                                  <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                                    {doc.title}
                                  </div>
                                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                    {doc.description}
                                  </p>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 shrink-0 mt-0.5 transition-all" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
