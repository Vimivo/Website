import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllDocs,
  getDocBySlug,
  getDocCategories,
} from '@/lib/docs';
import { DocSidebar } from '@/components/DocSidebar';
import { TableOfContents } from '@/components/TableOfContents';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { DocSearch } from '@/components/DocSearch';
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';

interface DocPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allDocs = getAllDocs();
  return allDocs.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Document Not Found',
    };
  }

  return {
    title: `${doc.title} — Vimivo Docs`,
    description: doc.description,
    openGraph: {
      title: `${doc.title} | Vimivo Documentation`,
      description: doc.description,
      type: 'article',
    },
  };
}

export default async function DocArticlePage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const allDocs = getAllDocs();
  const categories = getDocCategories();

  // Calculate previous and next articles
  const currentIndex = allDocs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className="py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10">
          {/* Left Navigation Sidebar */}
          <DocSidebar categories={categories} />

          {/* Center Article Content */}
          <article className="flex-1 min-w-0">
            {/* Top Bar with Breadcrumbs & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400">
                <Link href="/" className="hover:text-slate-200 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <Link href="/docs" className="hover:text-slate-200 transition-colors">
                  Docs
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span className="text-slate-500">{doc.category}</span>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-none">
                  {doc.title}
                </span>
              </nav>

              <div className="w-full sm:w-64">
                <DocSearch docs={allDocs} />
              </div>
            </div>

            {/* Article Header */}
            <header className="py-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <span>{doc.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {doc.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {doc.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 font-mono">
                <span>Source: {doc.sourceFile}</span>
                <span>&bull;</span>
                <a
                  href={`https://github.com/Vimivo/Player/blob/main/docs/${doc.sourceFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </header>

            {/* Markdown Body */}
            <div className="prose prose-invert max-w-none pt-2 pb-12 border-b border-slate-800">
              <MarkdownRenderer content={doc.content} />
            </div>

            {/* Previous / Next Article Navigation */}
            <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevDoc ? (
                <Link
                  href={`/docs/${prevDoc.slug}`}
                  className="group flex flex-col p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all text-left"
                >
                  <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-cyan-400 transition-colors mb-1">
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Article
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {prevDoc.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextDoc ? (
                <Link
                  href={`/docs/${nextDoc.slug}`}
                  className="group flex flex-col p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all text-right sm:col-start-2"
                >
                  <span className="flex items-center justify-end gap-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-cyan-400 transition-colors mb-1">
                    Next Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {nextDoc.title}
                  </span>
                </Link>
              ) : null}
            </div>
          </article>

          {/* Right Table of Contents */}
          <TableOfContents content={doc.content} />
        </div>
      </div>
    </div>
  );
}
