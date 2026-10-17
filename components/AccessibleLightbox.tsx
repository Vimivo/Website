'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface AccessibleLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  badge?: string;
}

export function AccessibleLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
  badge,
}: AccessibleLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    // Prevent body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col rounded-2xl bg-slate-950/90 border border-slate-700/60 shadow-2xl overflow-hidden"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            {badge && (
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {badge}
              </span>
            )}
            <h3 className="text-sm font-medium text-slate-200 truncate">{imageAlt}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Open or Download Original"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="relative flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center bg-black/50">
          <div className="relative max-w-full max-h-[75vh]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>

        {/* Footer caption */}
        {caption && (
          <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-900/50 text-xs text-slate-400 text-center">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
