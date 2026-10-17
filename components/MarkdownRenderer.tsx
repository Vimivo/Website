import React from 'react';
import { CopyButton } from './CopyButton';
import { Info, AlertTriangle, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Split lines
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  let keyIndex = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check for fenced code block: ```lang
    if (line.trim().startsWith('```')) {
      const langMatch = line.trim().match(/^```([a-zA-Z0-9_-]*)/);
      const language = langMatch ? langMatch[1] : '';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing ```
      const codeText = codeLines.join('\n');
      elements.push(
        <div
          key={`code-${keyIndex++}`}
          className="my-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-950/90 shadow-xl"
        >
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <span>{language || 'text'}</span>
            <CopyButton text={codeText} label="Copy" />
          </div>
          <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
            <code>{codeText}</code>
          </pre>
        </div>
      );
      continue;
    }

    // Check for Callouts: > [!NOTE], > [!TIP], > [!IMPORTANT], > [!WARNING], > [!CAUTION]
    if (line.trim().startsWith('> [!')) {
      const match = line.trim().match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
      if (match) {
        const type = match[1].toUpperCase();
        const calloutLines: string[] = [];
        i++;
        while (i < lines.length && lines[i].trim().startsWith('>')) {
          calloutLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }

        const calloutStyles = {
          NOTE: {
            border: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-200',
            icon: <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />,
            title: 'Note',
          },
          TIP: {
            border: 'border-teal-500/40 bg-teal-950/20 text-teal-200',
            icon: <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />,
            title: 'Tip',
          },
          IMPORTANT: {
            border: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-200',
            icon: <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />,
            title: 'Important',
          },
          WARNING: {
            border: 'border-amber-500/40 bg-amber-950/20 text-amber-200',
            icon: <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />,
            title: 'Warning',
          },
          CAUTION: {
            border: 'border-rose-500/40 bg-rose-950/20 text-rose-200',
            icon: <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />,
            title: 'Caution',
          },
        }[type] || {
          border: 'border-slate-700 bg-slate-900/40 text-slate-200',
          icon: <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />,
          title: 'Notice',
        };

        elements.push(
          <div
            key={`callout-${keyIndex++}`}
            className={`my-5 p-4 rounded-xl border ${calloutStyles.border} shadow-lg`}
          >
            <div className="flex items-center gap-2 font-semibold text-xs tracking-wider uppercase mb-1.5">
              {calloutStyles.icon}
              <span>{calloutStyles.title}</span>
            </div>
            <div className="text-sm leading-relaxed space-y-1">
              {calloutLines.map((cl, cIdx) => (
                <p key={cIdx}>{renderInline(cl)}</p>
              ))}
            </div>
          </div>
        );
        continue;
      }
    }

    // Check for Standard blockquotes: > text
    if (line.trim().startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      elements.push(
        <blockquote
          key={`quote-${keyIndex++}`}
          className="my-4 pl-4 border-l-2 border-cyan-500/50 italic text-slate-300 text-sm leading-relaxed"
        >
          {quoteLines.map((ql, qIdx) => (
            <p key={qIdx}>{renderInline(ql)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Check for Markdown table: | col | col |
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .slice(1, -1)
          .split('|')
          .map((c) => c.trim());
        // line 1 is separator |---|---|
        const bodyRows = tableLines.slice(2).map((row) =>
          row
            .slice(1, -1)
            .split('|')
            .map((c) => c.trim())
        );

        elements.push(
          <div
            key={`table-${keyIndex++}`}
            className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60 shadow-lg"
          >
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-200">
                <tr>
                  {headerRow.map((h, hIdx) => (
                    <th key={hIdx} className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-cyan-400">
                      {renderInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-slate-300">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // Check for Headings
    if (line.startsWith('# ')) {
      const text = line.slice(2).trim();
      const id = slugify(text);
      elements.push(
        <h1
          key={`h1-${keyIndex++}`}
          id={id}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-8 mb-4 border-b border-slate-800 pb-3"
        >
          {renderInline(text)}
        </h1>
      );
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      const text = line.slice(3).trim();
      const id = slugify(text);
      elements.push(
        <h2
          key={`h2-${keyIndex++}`}
          id={id}
          className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-8 mb-3"
        >
          <a href={`#${id}`} className="hover:text-cyan-300 group transition-colors">
            {renderInline(text)}
            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 ml-2 text-sm font-normal">#</span>
          </a>
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      const text = line.slice(4).trim();
      const id = slugify(text);
      elements.push(
        <h3
          key={`h3-${keyIndex++}`}
          id={id}
          className="text-lg sm:text-xl font-semibold text-slate-100 mt-6 mb-2"
        >
          <a href={`#${id}`} className="hover:text-cyan-300 group transition-colors">
            {renderInline(text)}
            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 ml-2 text-sm font-normal">#</span>
          </a>
        </h3>
      );
      i++;
      continue;
    }
    if (line.startsWith('#### ')) {
      const text = line.slice(5).trim();
      elements.push(
        <h4 key={`h4-${keyIndex++}`} className="text-base font-semibold text-slate-200 mt-4 mb-2">
          {renderInline(text)}
        </h4>
      );
      i++;
      continue;
    }

    // Check for Horizontal Rule: ---
    if (line.trim() === '---' || line.trim() === '***') {
      elements.push(<hr key={`hr-${keyIndex++}`} className="my-8 border-slate-800" />);
      i++;
      continue;
    }

    // Check for Unordered list item: - or *
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${keyIndex++}`} className="my-3 space-y-1.5 list-disc list-inside text-slate-300 text-sm sm:text-base">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Check for Numbered list item: 1.
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${keyIndex++}`} className="my-3 space-y-1.5 list-decimal list-inside text-slate-300 text-sm sm:text-base">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Blank line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Standard paragraph
    elements.push(
      <p key={`p-${keyIndex++}`} className="my-3 text-sm sm:text-base text-slate-300 leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <div className="markdown-body space-y-1 max-w-none">{elements}</div>;
}

// Inline markdown parser: **bold**, *italic*, `code`, [link](url)
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Inline code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 text-xs sm:text-sm font-mono border border-slate-700/60"
        >
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Bold italic: ***text***
    const boldItalicMatch = remaining.match(/^\*\*\*([^*]+)\*\*\*/);
    if (boldItalicMatch) {
      parts.push(
        <strong key={key++} className="font-bold italic text-white">
          {boldItalicMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldItalicMatch[0].length);
      continue;
    }

    // Bold: **text**
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      parts.push(
        <strong key={key++} className="font-semibold text-white">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Italic: *text* or _text_
    const italicMatch = remaining.match(/^\*([^*]+)\*/) || remaining.match(/^_([^_]+)_/);
    if (italicMatch) {
      parts.push(
        <em key={key++} className="italic text-slate-200">
          {italicMatch[1]}
        </em>
      );
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Link: [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const linkText = linkMatch[1];
      let href = linkMatch[2];
      // Sanitize local file:// links from docs to relative web links
      if (href.startsWith('file://')) {
        const basename = href.split('/').pop()?.replace('.md', '') || '';
        href = `/docs/${basename.toLowerCase()}`;
      } else if (href.endsWith('.md')) {
        const basename = href.replace(/\.md$/, '').toLowerCase();
        href = `/docs/${basename}`;
      }

      const isExternal = href.startsWith('http://') || href.startsWith('https://');

      parts.push(
        <a
          key={key++}
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-500/40 hover:decoration-cyan-300 transition-colors"
        >
          {linkText}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Plain text chunk up to the next markdown token
    const nextSpecial = remaining.search(/[`*_[\]]/);
    if (nextSpecial === -1) {
      parts.push(remaining);
      break;
    } else if (nextSpecial === 0) {
      // First character is special but did not match regex pattern
      parts.push(remaining[0]);
      remaining = remaining.slice(1);
    } else {
      parts.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    }
  }

  return <>{parts}</>;
}
