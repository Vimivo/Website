import React from 'react';
import Link from 'next/link';
import {
  Download,
  Volume2,
  Sliders,
  Music,
  FolderSync,
  ShieldCheck,
  Cpu,
  Monitor,
  Smartphone,
  Sparkles,
  ArrowRight,
  Clock,
  ExternalLink,
  Layers,
  Terminal,
  Zap,
  Lock,
  Wifi,
  FileAudio,
  HardDrive,
} from 'lucide-react';
import { ScreenshotShowcase } from '@/components/ScreenshotShowcase';
import { InteractivePlayerDemo } from '@/components/InteractivePlayerDemo';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';
import { InteractiveEqualizerDemo } from '@/components/InteractiveEqualizerDemo';
import { CopyButton } from '@/components/CopyButton';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-ambient-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-[1200px] right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-[2400px] left-0 w-[550px] h-[550px] bg-cyan-500/10 blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 01. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Release & Architecture pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold">Vimivo v1.0.0-rc.1 Released</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300 flex items-center gap-1">
                <Zap className="w-3 h-3 text-emerald-400" /> Pure Rust Core + UniFFI Engine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
              Every Sound.{' '}
              <span className="text-gradient block sm:inline">
                Every Frame.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              The world&apos;s most capable, ad-free, login-free universal media player. Built with pure Rust, native hardware acceleration, and the muscle-memory controls you love from MX Player and VLC.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/download"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download v1.0.0-rc.1</span>
              </Link>
              <Link
                href="#interactive-demo"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Try Live Simulator</span>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <span>Documentation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Terminal One-Liner on Hero */}
            <div className="pt-2 max-w-lg mx-auto">
              <div className="p-2.5 px-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between gap-3 shadow-inner">
                <span className="truncate select-all text-slate-300">
                  <span className="text-cyan-500 font-bold">$</span> curl -fsSL https://vimivo.tashanto.com/install.sh | bash
                </span>
                <CopyButton text="curl -fsSL https://vimivo.tashanto.com/install.sh | bash" label="Copy" />
              </div>
            </div>

            {/* 5 First-Class Supported Platforms */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">5 Verified Platforms:</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Monitor className="w-3.5 h-3.5 text-cyan-400" /> macOS (Apple Silicon &amp; Intel DMG)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Android (APK &amp; AAB)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Monitor className="w-3.5 h-3.5 text-blue-400" /> Windows (EXE &amp; MSI)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> Linux (DEB &amp; RPM)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" /> iOS 16+ &amp; iPadOS
              </span>
            </div>
          </div>

          {/* Genuine Screenshot Showcase */}
          <div className="mt-14 md:mt-20">
            <ScreenshotShowcase />
          </div>
        </div>
      </section>

      {/* 02. INTERACTIVE PLAYER SIMULATOR SECTION */}
      <section id="interactive-demo" className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractivePlayerDemo />
        </div>
      </section>

      {/* 03. BENCHMARK COMPARISON MATRIX (Vimivo vs VLC vs MX Player) */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonMatrix />
        </div>
      </section>

      {/* 04. CORE ENGINEERING & RUST ARCHITECTURE */}
      <section className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Zero Telemetry • Pure Rust Core
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Built on Honest, High-Performance Engineering
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Vimivo eliminates the heavy bloat of web runtimes and cloud dependencies. All critical audio, gesture, encryption, and subtitle parsing algorithms are compiled in pure Rust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Privacy &amp; Offline</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No sign-up required. Zero server accounts, zero background analytics, and no cloud library syncing. Your library metadata, playlists, and history stay safely in local SQLite storage.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Pure Rust Core + UniFFI</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Audio DSP, ReplayGain, soft-knee limiter, subtitle parsing, and A-B looping run in memory-safe, high-efficiency Rust (`vimivo-core`), exposed via typed UniFFI bindings to Kotlin and Swift.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Native Platform Decoders</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Rather than bundling heavy web engines, Vimivo harnesses native multimedia engines: <code className="text-cyan-300 font-mono text-xs">libmpv</code> on desktop, Android Media3 ExoPlayer, and Apple AVFoundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. AUDIO ARCHITECTURE & INTERACTIVE EQUALIZER */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Music className="w-3.5 h-3.5" />
                <span>Audio Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Studio Fidelity. Pure Rust Sound Engine.
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
                    Biquad IIR filters with auto-attenuating preamp compensation to eliminate digital clipping.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-indigo-300">
                    <Volume2 className="w-4 h-4 text-indigo-400" />
                    <span>Native ReplayGain</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    EBU R128 loudness normalization across track and album modes with automatic peak limiter.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-sm text-teal-300">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>Gapless Playback</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Continuous cross-track transitions for live concert recordings and classical orchestral works.
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

            {/* Interactive 10-Band EQ Component */}
            <div className="lg:col-span-7">
              <InteractiveEqualizerDemo />
            </div>
          </div>
        </div>
      </section>

      {/* 06. NEW PRO CAPABILITIES (Vault, Wi-Fi Transfer, Audio Extractor, Network Shares) */}
      <section className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Pro Power Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Beyond Conventional Media Players
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Engineered with advanced privacy utilities, local network integration, and tools that make managing your private media effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Private Video Vault */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-2">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Private Media Vault</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cryptographically encrypted offline vault using AES-256-GCM and Argon2 key derivation. Features brute-force lockouts to protect sensitive videos.
              </p>
            </div>

            {/* Offline Wi-Fi File Transfer */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-2">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Offline Wi-Fi Transfer</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transfer media at gigabit speeds over local Wi-Fi without cables or cloud upload. Connect from any web browser on your computer or phone.
              </p>
            </div>

            {/* Video-to-Audio Extractor */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-2">
                <FileAudio className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Video-to-Audio Extractor</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                One-tap background extraction of pristine MP3, AAC, or FLAC audio streams from music concerts and video files without quality loss.
              </p>
            </div>

            {/* Local Network Shares (NAS) */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-2">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">NAS &amp; Network Shares</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stream media seamlessly from local storage over SMB (Windows Share), SFTP, FTP, WebDAV, and NFS with zero cloud intermediaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. MEDIA LIBRARY & SMART PLAYLISTS */}
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

      {/* 08. DOCUMENTATION SPOTLIGHT */}
      <section className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/60">
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

      {/* 09. FINAL CALL TO ACTION */}
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
              className="text-cyan-400 hover:underline font-semibold"
            >
              TA Shanto
            </a>
            {' '}(<a href="https://tashanto.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">tashanto.com</a>)
            . 100% Free &amp; Open Source under the MIT License.
          </p>
        </div>
      </section>
    </div>
  );
}
