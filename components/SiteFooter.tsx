'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-cyan-500/10">
                <img
                  src="/images/vimivo-icon-source.png"
                  alt="Vimivo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Vimivo
                </span>
                <p className="text-xs text-slate-400 font-medium">Every Sound. Every Frame.</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A privacy-first, offline universal audio and video player built with Kotlin Multiplatform
              and Compose Multiplatform for Android, macOS, Windows, Linux, and iOS.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Vimivo/Player"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
              <span className="text-xs text-slate-500 font-mono">MIT Licensed</span>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/features" className="hover:text-cyan-300 transition-colors">
                  Features &amp; Engines
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="hover:text-cyan-300 transition-colors">
                  Supported Platforms
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-cyan-300 transition-colors">
                  Downloads &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/docs/release-notes" className="hover:text-cyan-300 transition-colors">
                  Release Notes (v1.0.0-rc.1)
                </Link>
              </li>
              <li>
                <Link href="/docs/format-support" className="hover:text-cyan-300 transition-colors">
                  Codecs &amp; Containers
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Documentation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/docs" className="hover:text-cyan-300 transition-colors">
                  Docs Overview
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="hover:text-cyan-300 transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/docs/keyboard-shortcuts" className="hover:text-cyan-300 transition-colors">
                  Keyboard Shortcuts
                </Link>
              </li>
              <li>
                <Link href="/docs/audio-playback" className="hover:text-cyan-300 transition-colors">
                  Audio Equalizer &amp; Lyrics
                </Link>
              </li>
              <li>
                <Link href="/docs/video-playback" className="hover:text-cyan-300 transition-colors">
                  Video Player &amp; Subtitles
                </Link>
              </li>
              <li>
                <Link href="/docs/system-requirements" className="hover:text-cyan-300 transition-colors">
                  System Requirements
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Trust &amp; Privacy
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/docs/security-audit" className="hover:text-cyan-300 transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About &amp; Principles
                </Link>
              </li>
              <li>
                <Link href="/docs/community-guidelines" className="hover:text-cyan-300 transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/docs/known-issues" className="hover:text-cyan-300 transition-colors">
                  Known Limitations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom attribution bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Vimivo. Free &amp; Open Source under the MIT License.
          </div>

          {/* REQUIRED DEVELOPER CREDIT */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Designed and developed by</span>
            <a
              href="https://tashanto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300 underline decoration-cyan-500/40 hover:decoration-cyan-300 transition-colors"
            >
              TA Shanto
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <span>&bull;</span>
            <Link href="/docs" className="hover:text-slate-300 transition-colors">
              Docs
            </Link>
            <span>&bull;</span>
            <a
              href="https://github.com/Vimivo/Player"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
