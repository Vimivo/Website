'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, BookOpen, Layers, Menu, X } from 'lucide-react';
import type { DocMetadata } from '@/lib/docs';

interface DocCategoryGroup {
  category: string;
  docs: DocMetadata[];
}

interface DocSidebarProps {
  categories: DocCategoryGroup[];
}

export function DocSidebar({ categories }: DocSidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (cat: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const navContent = (
    <div className="space-y-6">
      {categories.map((group) => {
        const isCollapsed = collapsedCategories[group.category];
        return (
          <div key={group.category} className="space-y-2">
            <button
              type="button"
              onClick={() => toggleCategory(group.category)}
              className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-colors py-1"
            >
              <span>{group.category}</span>
              {isCollapsed ? (
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>

            {!isCollapsed && (
              <ul className="space-y-1 pl-2 border-l border-slate-800">
                {group.docs.map((doc) => {
                  const href = `/docs/${doc.slug}`;
                  const isActive = pathname === href;

                  return (
                    <li key={doc.slug}>
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-cyan-500/15 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                        }`}
                      >
                        {doc.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-6 flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Documentation Menu</span>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          aria-expanded={mobileOpen}
          aria-label="Toggle Documentation Navigation"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mb-8 p-4 rounded-2xl bg-slate-950 border border-slate-800/90 shadow-2xl">
          {navContent}
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 pr-6 border-r border-slate-800/80 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
        <div className="mb-4 pb-3 border-b border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-300">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Vimivo Documentation</span>
        </div>
        {navContent}
      </aside>
    </>
  );
}
