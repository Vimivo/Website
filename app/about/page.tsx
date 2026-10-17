import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  Code,
  Github,
  ExternalLink,
  ShieldCheck,
  Disc,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Vimivo & Developer',
  description:
    'Learn about the Vimivo project philosophy, architecture, open source MIT license, and creator TA Shanto.',
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>About The Project</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Vimivo: Every Sound. Every Frame.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A modern, offline-first universal audio and video player built for individuals who own their media and expect privacy, craftsmanship, and performance.
          </p>
        </div>

        {/* Developer Credit Spotlight */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-tr from-cyan-500 to-indigo-600 p-1 shrink-0 shadow-xl shadow-cyan-500/20">
              <img
                src="/images/vimivo-icon-source.png"
                alt="Vimivo Icon"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Creator &amp; Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Designed and Developed by TA Shanto
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Vimivo is designed and engineered by TA Shanto as a universal media playback platform built on Kotlin Multiplatform, Compose Multiplatform, and platform-native multimedia decoders.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <a
                  href="https://tashanto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Visit tashanto.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Vimivo/Player"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Principles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            Product Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Zero Corporate Overreach</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Modern media software has become dominated by subscription paywalls, forced logins, invasive behavioral telemetry, and lossy cloud transcoding. Vimivo rejects this paradigm entirely: it functions 100% offline with zero accounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>True Native Performance</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rather than wrapping heavy web rendering engines, Vimivo bridges directly into the finest native media backends: libmpv with Metal / D3D11 / VA-API for desktop and Google Media3 ExoPlayer for mobile devices.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-400" />
                <span>Non-Destructive Storage</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Your media files are precious. Vimivo’s Mode A database overrides ensure you can rename, fix tags, and organize your media library without risking accidental byte corruption of your original master files.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                <span>Open Source Community</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Vimivo is published under the permissive MIT license. Anyone is free to audit the source code, compile standalone binaries, inspect security guarantees, and contribute enhancements.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack Specifications */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/60 border border-slate-850 space-y-4">
          <h2 className="text-lg font-bold text-white">Engineered with Modern Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-300">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-cyan-400 font-bold mb-1">Language</div>
              <div>Kotlin 2.3.20</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-indigo-400 font-bold mb-1">UI Framework</div>
              <div>Compose Multiplatform</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-teal-400 font-bold mb-1">Desktop Engine</div>
              <div>libmpv 2.0.0</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-purple-400 font-bold mb-1">Android Engine</div>
              <div>Media3 ExoPlayer</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <span>Explore all features &amp; audio specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
