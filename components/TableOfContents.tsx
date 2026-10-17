'use client';

import React, { useEffect, useState } from 'react';
import { AlignLeft } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const lines = content.split('\n');
    const items: TOCItem[] = [];

    for (const line of lines) {
      if (line.startsWith('## ')) {
        const text = line.slice(3).trim();
        items.push({ id: slugify(text), text, level: 2 });
      } else if (line.startsWith('### ')) {
        const text = line.slice(4).trim();
        items.push({ id: slugify(text), text, level: 3 });
      }
    }

    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '0px 0px -70% 0px' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      className="hidden xl:block w-64 shrink-0 pl-6 border-l border-slate-800/80 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto"
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 pb-2 border-b border-slate-800">
        <AlignLeft className="w-3.5 h-3.5 text-cyan-400" />
        <span>On this page</span>
      </div>
      <ul className="space-y-1.5 text-xs">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li
              key={h.id}
              className={`${h.level === 3 ? 'pl-3' : ''}`}
            >
              <a
                href={`#${h.id}`}
                className={`block py-1 transition-colors leading-relaxed ${
                  isActive
                    ? 'text-cyan-400 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
