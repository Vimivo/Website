import React from 'react';
import Link from 'next/link';
import {
  Download,
  Play,
  Volume2,
  Sliders,
  Film,
  Music,
  FolderSync,
  ShieldCheck,
  Cpu,
  Monitor,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock,
  Radio,
  ExternalLink,
  Layers,
  Terminal,
} from 'lucide-react';
import { ScreenshotShowcase } from '@/components/ScreenshotShowcase';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-ambient-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 01. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Release pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Vimivo v1.0.0-rc.1 Released</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-400">Kotlin &amp; Compose Multiplatform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Every Sound.{' '}
              <span className="text-gradient block sm:inline">
                Every Frame.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Your music. Your videos. One thoughtfully designed media experience.
              Built offline-first with zero accounts, zero telemetry, and platform-native multimedia engines.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/download"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download v1.0.0-rc.1</span>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <span>Read Documentation</span>
              </Link>
            </div>

            {/* Platform pills */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500">Verified Platforms:</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-cyan-400" /> macOS (DMG)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Android (APK / AAB)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-blue-400" /> Windows (EXE / MSI)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> Linux (DEB / RPM)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" /> iOS / iPadOS
              </span>
            </div>
          </div>

          {/* Genuine Screenshot Showcase */}
          <div className="mt-14 md:mt-20">
            <ScreenshotShowcase />
          </div>
        </div>
      </section>

      {/* 02. CORE PHILOSOPHY / VALUE PROPOSITIONS */}
      <section className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Product Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Built on Honest Engineering
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Vimivo is crafted for users who own their media and demand uncompromised performance without corporate cloud surveillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Offline-First</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No sign-up required. No server accounts, zero background analytics, and no cloud library syncing. Your library metadata, playlists, and history stay safely on your physical drive in local SQLite storage.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Native Platform Engines</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Rather than bundling heavy web runtimes, Vimivo harnesses native multimedia engines: <code className="text-cyan-300 font-mono text-xs">libmpv</code> on desktop, Android Media3 ExoPlayer, and Apple AVFoundation for fluid rendering.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400">
                <FolderSync className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">User-Owned Media Files</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your original audio and video files are treated with total respect. Non-destructive metadata overrides keep media bytes intact, while optional embedded tag writes feature preflight backup and verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. AUDIO EXPERIENCE */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Music className="w-3.5 h-3.5" />
                <span>Audio Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Studio Fidelity. Precise Sound Control.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Experience high-resolution local music with genuine audiophile capabilities built right into the core playback engine.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-cyan-300">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span>10-Band Graphic EQ</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Fine-tune frequencies with custom presets, interactive sliders, and an auto-attenuating preamp to eliminate clipping.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-indigo-300">
                    <Volume2 className="w-4 h-4 text-indigo-400" />
                    <span>Native ReplayGain</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Loudness normalization across track and album modes with automatic peak limiter protection.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-teal-300">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Gapless Playback</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Continuous cross-track transition for live concert recordings and classical orchestral works.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-purple-300">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Synced LRC Lyrics</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Line-by-line synchronized lyrics parsed from external <code className="text-xs font-mono">.lrc</code> files or embedded tags.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/docs/audio-playback"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Read Audio Engine Documentation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Audio Visualizer Card */}
            <div className="lg:col-span-6">
              <div className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Equalizer &amp; Gain Engine</h4>
                      <p className="text-xs text-slate-400">Active Preset: Acoustic Clarity</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-teal-500/15 text-teal-300 border border-teal-500/30">
                    Gapless Active
                  </span>
                </div>

                {/* 10-Band EQ Graphic Representation */}
                <div className="space-y-4">
                  <div className="flex items-end justify-between h-36 px-2 py-4 bg-slate-950/60 rounded-xl border border-slate-850">
                    {[
                      { band: '32Hz', db: '+3.5', height: '65%' },
                      { band: '64Hz', db: '+2.0', height: '55%' },
                      { band: '125Hz', db: '+0.5', height: '45%' },
                      { band: '250Hz', db: '-1.0', height: '35%' },
                      { band: '500Hz', db: '0.0', height: '42%' },
                      { band: '1kHz', db: '+1.5', height: '52%' },
                      { band: '2kHz', db: '+3.0', height: '62%' },
                      { band: '4kHz', db: '+4.5', height: '72%' },
                      { band: '8kHz', db: '+5.0', height: '78%' },
                      { band: '16kHz', db: '+3.5', height: '65%' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end">
                        <div
                          style={{ height: item.height }}
                          className="w-3 sm:w-4 rounded-t-sm bg-gradient-to-t from-cyan-500 to-indigo-500 shadow-sm"
                        />
                        <span className="text-[9px] font-mono text-slate-400">{item.band}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span>Preamp: <strong className="text-slate-200">-1.8 dB (Auto)</strong></span>
                    <span>ReplayGain: <strong className="text-cyan-400">Track Mode (+2.4 dB)</strong></span>
                    <span>Speed: <strong className="text-slate-200">1.0x (Pitch-Preserved)</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. VIDEO EXPERIENCE */}
      <section className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Specs */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <Film className="w-5 h-5 text-indigo-400" />
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      Hardware Video Pipeline
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-800/50">
                    GPU Accelerated
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-slate-850">
                    <span className="text-slate-400">Desktop Engine</span>
                    <span className="font-mono text-slate-200">libmpv (Metal / D3D11 / VA-API)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-slate-850">
                    <span className="text-slate-400">Android Engine</span>
                    <span className="font-mono text-slate-200">Media3 ExoPlayer 1.11.1</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-slate-850">
                    <span className="text-slate-400">Subtitle Renderers</span>
                    <span className="font-mono text-slate-200">libass (ASS/SSA) + WebVTT + SRT</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-slate-850">
                    <span className="text-slate-400">Delay Synchronization</span>
                    <span className="font-mono text-cyan-400">Real-time ±5000ms slider</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm py-2">
                    <span className="text-slate-400">Aspect Overrides</span>
                    <span className="font-mono text-slate-200">Fit, Fill, 16:9, 4:3, 21:9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <Film className="w-3.5 h-3.5" />
                <span>Cinematic Video</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Smooth Playback. Zero Frame Drops.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Vimivo renders high-bitrate 4K and HDR files effortlessly using platform-native hardware decoders, complete with real-time video shaders and advanced subtitle rendering.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>GPU Video Adjustments:</strong> Live sliders for Brightness, Contrast, Saturation, and Gamma.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>A-B Repeat Looping:</strong> Set exact start and end timestamps to study, analyze, or loop specific scenes.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Clean Screenshot Capture:</strong> Save frame-accurate native image snapshots directly to disk.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/docs/video-playback"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  <span>Explore Video Player Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. MEDIA LIBRARY & SMART PLAYLISTS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Media Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Intelligent Library &amp; Dual-Mode Metadata
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Organize massive music and video libraries with high-performance SQLite v6 WAL persistence, rule-based smart playlists, and safe batch operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-2">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Smart Playlists (AST)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dynamic collections evaluated against typed AST rules across genre, year, play count, duration, and favorites with instant recalculation.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-2">
                <FolderSync className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Dual-Mode Metadata</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mode A stores non-destructive DB overrides leaving files untouched. Mode B embeds verified ID3/FLAC/Vorbis tags with preflight backup.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-2">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Batch File Renaming</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Template pattern renamer (<code className="font-mono text-cyan-300">{'{artist} - {title}'}</code>) with collision detection and automatic database relinking.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">M3U/M3U8 Portability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standard playlist import and export with full UTF-8 Unicode preservation, ensuring compatibility with all major external players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. USER-PROVIDED MEDIA URLS */}
      <section className="py-20 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5" />
                <span>Network Streams</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Direct Stream Playback Without Cloud Proxies
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Vimivo connects directly from your device to user-provided network streams. Paste direct media URLs for instant playback with local history and bookmarking.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-300 pt-2">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  HTTP / HTTPS
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  HLS (.m3u8)
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  MPEG-DASH
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  RTSP Streams
                </div>
              </div>
              <p className="text-xs text-slate-400 italic">
                * Note: Vimivo is a playback client for user-authorized streams. It does not provide unauthorized media downloads or bypass DRM-protected commercial streaming services.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Stream Security Guarantees:
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct client-to-host connection with zero intermediary servers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Stream history stored strictly in local device database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Instant URL purge controls available in Settings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. DOCUMENTATION SPOTLIGHT */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Comprehensive Public Docs
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  Engineered with Complete Documentation
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Explore 18 curated guides covering installation, system requirements, keyboard shortcuts, codec specifications, audio architecture, and security audits.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors"
                  >
                    <span>Browse All Documentation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/docs/keyboard-shortcuts"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700 hover:text-white transition-colors"
                  >
                    <span>Keyboard Shortcuts</span>
                  </Link>
                  <Link
                    href="/docs/system-requirements"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700 hover:text-white transition-colors"
                  >
                    <span>System Requirements</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2.5">
                {[
                  { title: 'Installation Guide', slug: 'installation' },
                  { title: 'Audio Equalizer & ReplayGain', slug: 'audio-playback' },
                  { title: 'Video Engine & Subtitle Sync', slug: 'video-playback' },
                  { title: 'Format & Codec Support Matrix', slug: 'format-support' },
                  { title: 'Privacy Principles & Security', slug: 'privacy-policy' },
                ].map((item) => (
                  <Link
                    key={item.slug}
                    href={`/docs/${item.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 text-xs text-slate-300 hover:text-cyan-300 transition-colors group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FINAL CALL TO ACTION */}
      <section className="py-20 md:py-28 border-t border-slate-800/80 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl mx-auto overflow-hidden shadow-xl shadow-cyan-500/20">
            <img
              src="/images/vimivo-icon-source.png"
              alt="Vimivo Icon"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready for a Thoughtful Media Player?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Download the official release today or explore the open-source repository on GitHub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Vimivo v1.0.0-rc.1</span>
            </Link>

            <a
              href="https://github.com/Vimivo/Player"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
            >
              <span>View Source on GitHub</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-6">
            Designed and developed by{' '}
            <a
              href="https://tashanto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-medium"
            >
              TA Shanto
            </a>
            . 100% Free &amp; Open Source under the MIT License.
          </p>
        </div>
      </section>
    </div>
  );
}
