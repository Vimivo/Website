'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
  label?: string;
}

export function CopyButton({ text, className = '', label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label || (copied ? 'Copied to clipboard' : 'Copy to clipboard')}
      title={label || (copied ? 'Copied!' : 'Copy')}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        copied
          ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
          : 'bg-slate-800/80 text-slate-300 border-slate-700/70 hover:bg-slate-700/80 hover:text-white hover:border-slate-600'
      } ${className}`}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
      {label && <span>{copied ? 'Copied!' : label}</span>}
    </button>
  );
}
