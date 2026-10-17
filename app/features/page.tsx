import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Music,
  Film,
  Sliders,
  Volume2,
  FolderSync,
  Sparkles,
  ShieldCheck,
  Radio,
  Terminal,
  Layers,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features & Architecture',
  description:
    'Comprehensive catalog of verified Vimivo features: 10-band graphic EQ, ReplayGain, gapless playback, hardware video rendering, AST smart playlists, and dual-mode metadata.',
};

interface FeatureDetail {
  id: string;
  category: string;
  icon: React.ElementType;
  title: string;
  summary: string;
  benefit: string;
  howItWorks: string;
  accessPoint: string;
  platforms: string;
  docLink: string;
}

const FEATURE_CATALOG: FeatureDetail[] = [
  {
    id: 'graphic-equalizer',
    category: 'Audio Playback',
    icon: Sliders,
    title: '10-Band Graphic Equalizer with Auto-Preamp',
    summary:
      'Fine-grained acoustic control across 10 discrete frequency bands (32Hz to 16kHz) with built-in presets and automatic preamp compensation.',
    benefit:
      'Customize sound curves for headphones, studio monitors, or car audio without digital distortion or harsh audio clipping.',
    howItWorks:
      'The engine applies biquad IIR filtering directly within the audio render pipeline. When boost is applied, the preamp automatically calculates ceiling headroom and attenuates input level to prevent saturation.',
    accessPoint: 'Now Playing screen -> Audio Controls -> Equalizer or via Settings -> Audio.',
    platforms: 'Android, macOS, Windows, Linux.',
    docLink: '/docs/audio-playback',
  },
  {
    id: 'replaygain',
    category: 'Audio Playback',
    icon: Volume2,
    title: 'Native ReplayGain (Track & Album Modes)',
    summary:
      'Loudness normalization standard compliant with ITU-R BS.1770 and ReplayGain 2.0 metadata.',
    benefit:
      'Eliminate abrupt volume jumps between songs from different albums without modifying original audio files.',
    howItWorks:
      'Reads embedded RG tags (`REPLAYGAIN_TRACK_GAIN`, `REPLAYGAIN_ALBUM_GAIN`) or applies database-calculated peak profiles. Features an automatic peak limiter to prevent clipping on high-gain tracks.',
    accessPoint: 'Settings -> Audio -> ReplayGain Mode (Off / Track / Album).',
    platforms: 'All supported platforms.',
    docLink: '/docs/audio-playback',
  },
  {
    id: 'gapless-playback',
    category: 'Audio Playback',
    icon: Music,
    title: 'True Gapless Playback',
    summary:
      'Zero-latency sample-accurate audio transitions between consecutive playlist tracks.',
    benefit:
      'Essential for live concert recordings, continuous DJ mixes, and classical symphony albums where silence between tracks ruins the performance.',
    howItWorks:
      'The audio engine decodes the subsequent audio track in background buffer cache before the active track finishes, transitioning seamlessly at the boundary.',
    accessPoint: 'Enabled automatically for all supported lossless and lossy containers.',
    platforms: 'Android, macOS, Windows, Linux.',
    docLink: '/docs/audio-playback',
  },
  {
    id: 'gpu-video-pipeline',
    category: 'Video Experience',
    icon: Film,
    title: 'Hardware-Accelerated GPU Video Engine',
    summary:
      'Platform-native video rendering powered by libmpv on desktop and Media3 ExoPlayer on mobile.',
    benefit:
      'Buttery-smooth 4K, 60fps, and HDR video playback with minimal CPU usage and low battery drain.',
    howItWorks:
      'Uses platform-specific hardware decoders (Metal VideoToolbox on macOS, Direct3D 11 / NVDEC on Windows, VA-API on Linux, MediaCodec on Android).',
    accessPoint: 'Video Player viewport and context menu.',
    platforms: 'macOS, Windows, Linux, Android, iOS.',
    docLink: '/docs/video-playback',
  },
  {
    id: 'subtitle-sync',
    category: 'Video Experience',
    icon: Layers,
    title: 'Real-Time Subtitle Synchronization (±5000ms)',
    summary:
      'Interactive timing adjustment for external and embedded subtitles with full SSA/ASS vector styling support.',
    benefit:
      'Instantly fix out-of-sync subtitles while watching without needing to edit or re-download subtitle files.',
    howItWorks:
      'A hardware clock offset dynamically shifts subtitle rendering timestamps relative to audio master clock. Rendered natively by libass on desktop and Media3 subtitle parser on Android.',
    accessPoint: 'Video Player -> Subtitle Options -> Delay Slider.',
    platforms: 'All supported platforms.',
    docLink: '/docs/video-playback',
  },
  {
    id: 'smart-playlists',
    category: 'Media Library',
    icon: Sparkles,
    title: 'Rule-Based Smart Playlists (Typed AST)',
    summary:
      'Dynamic playlists evaluated against complex logical conditions across genre, year, play count, duration, and ratings.',
    benefit:
      'Create live auto-updating playlists such as "Top 80s Rock", "Recently Added Unplayed", or "Favorite Tracks over 5 Minutes".',
    howItWorks:
      'Conditions are parsed into a typed Abstract Syntax Tree (AST) stored as JSON in SQLite. The library evaluates rules whenever songs are added, played, or modified.',
    accessPoint: 'Playlists -> New Smart Playlist -> Define Rules.',
    platforms: 'All supported platforms.',
    docLink: '/docs/media-library',
  },
  {
    id: 'dual-mode-metadata',
    category: 'Organization',
    icon: FolderSync,
    title: 'Dual-Mode Metadata Management',
    summary:
      'Choose between non-destructive database overrides (Mode A) or safe embedded tag writing (Mode B).',
    benefit:
      'Organize media your way: keep pristine read-only archives untouched, or write standardized tags directly into file headers.',
    howItWorks:
      'Mode A writes to SQLite `metadata_overrides` table. Mode B executes preflight disk space checks, creates a safe temporary copy, writes ID3/FLAC/Vorbis tags, and validates the file before replacing the original.',
    accessPoint: 'Track Context Menu -> Edit Metadata -> Choose Override or Embed.',
    platforms: 'Android, macOS, Windows, Linux.',
    docLink: '/docs/metadata-editing',
  },
  {
    id: 'batch-renamer',
    category: 'Organization',
    icon: Terminal,
    title: 'Batch File Renaming & Organization',
    summary:
      'Automated file renaming using customizable template patterns with collision avoidance.',
    benefit:
      'Standardize messy downloaded filenames into clean, structured folder hierarchies without breaking playlist links.',
    howItWorks:
      'Templates like `{artist}/{album}/{track:02d} - {title}` are evaluated with real-time diff preview. Database file paths are atomically updated upon confirmation.',
    accessPoint: 'Library Tools -> Batch Rename.',
    platforms: 'macOS, Windows, Linux.',
    docLink: '/docs/file-organization',
  },
  {
    id: 'network-streams',
    category: 'Streaming & URL Playback',
    icon: Radio,
    title: 'Direct User-Provided Stream Playback',
    summary:
      'Direct playback for HTTP/HTTPS streams, HLS playlists, MPEG-DASH manifests, and RTSP feeds.',
    benefit:
      'Stream live radio, podcasts, or network security feeds directly in Vimivo without proprietary third-party apps.',
    howItWorks:
      'Streams connect directly to the destination host over native sockets without intermediate telemetry or proxy servers. Recent URLs are stored locally with custom bookmarking.',
    accessPoint: 'Main Navigation -> Stream URL -> Paste link.',
    platforms: 'All supported platforms.',
    docLink: '/docs/streaming-urls',
  },
  {
    id: 'offline-privacy',
    category: 'Security & Trust',
    icon: ShieldCheck,
    title: 'Zero-Account Offline Architecture',
    summary:
      '100% local SQLite v6 persistence with WAL mode. Zero accounts, zero analytics, zero data uploads.',
    benefit:
      'Total privacy and data sovereignty. Your listening habits, personal files, and metadata never leave your hardware.',
    howItWorks:
      'All states, playlists, bookmarks, and indexes reside in private local application sandboxes. No network telemetry calls exist in the binary.',
    accessPoint: 'Default architecture — active across entire application.',
    platforms: 'All supported platforms.',
    docLink: '/docs/privacy-policy',
  },
];

export default function FeaturesPage() {
  const categories = Array.from(new Set(FEATURE_CATALOG.map((f) => f.category)));

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Verified Specifications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Vimivo Feature Catalog
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every feature documented here is verified in the Vimivo codebase and test suites.
            Engineered with native platform performance, offline privacy, and user ownership.
          </p>
        </div>

        {/* Categories & Feature Cards */}
        <div className="space-y-16">
          {categories.map((category) => {
            const features = FEATURE_CATALOG.filter((f) => f.category === category);
            return (
              <section key={category} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {category}
                  </h2>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                    {features.length} {features.length === 1 ? 'Feature' : 'Features'}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.id}
                        id={feature.id}
                        className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6"
                      >
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                              {feature.platforms}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                          <p className="text-sm text-slate-300 leading-relaxed font-normal">
                            {feature.summary}
                          </p>

                          <div className="space-y-2.5 pt-2 text-xs">
                            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-850 space-y-1">
                              <strong className="text-cyan-300 font-semibold block uppercase tracking-wider text-[10px]">
                                Practical Benefit:
                              </strong>
                              <p className="text-slate-300">{feature.benefit}</p>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-850 space-y-1">
                              <strong className="text-indigo-300 font-semibold block uppercase tracking-wider text-[10px]">
                                Technical Implementation:
                              </strong>
                              <p className="text-slate-400">{feature.howItWorks}</p>
                            </div>

                            <div className="text-slate-400 pt-1">
                              <strong>Where to access:</strong> {feature.accessPoint}
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                          <Link
                            href={feature.docLink}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group"
                          >
                            <span>Read Technical Guide</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                            Verified Implementation
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white">Need Detailed Technical Documentation?</h3>
          <p className="text-sm text-slate-300">
            Browse our complete collection of architecture notes, system requirements, and codec specifications.
          </p>
          <div className="pt-2">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Documentation Hub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
