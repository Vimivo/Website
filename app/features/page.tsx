import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Music,
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
  Zap,
  Repeat,
  Activity,
  RotateCw,
  Lock,
  Wifi,
  FileAudio,
  HardDrive,
  Maximize2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features & Architecture',
  description:
    'Comprehensive catalog of verified Vimivo features: Pure Rust core, HW/HW+/SW decoder switcher, 200% volume boost with soft-knee limiter, A-B loop, dual subtitles, private vault, and offline Wi-Fi transfer.',
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
  // 1. Architecture & Performance
  {
    id: 'rust-core-engine',
    category: 'Architecture & Performance',
    icon: Zap,
    title: 'Pure Rust Multimedia Engine & UniFFI Typed Bindings',
    summary:
      'Zero-overhead, memory-safe Rust core library (`vimivo-core`) executing signal processing, subtitle parsing, cryptographic storage, and playback logic.',
    benefit:
      'Eliminates memory safety bugs, GC stutter, and latency across mobile and desktop platforms while ensuring 100% identical business logic on every OS.',
    howItWorks:
      'Compiled into native shared libraries with type-safe UniFFI generated bindings for Kotlin (Android/Desktop) and Swift (iOS/macOS) with zero serialization overhead.',
    accessPoint: 'Engine core — runs automatically beneath all player interfaces.',
    platforms: 'Android, macOS, Windows, Linux, iOS.',
    docLink: '/docs/overview',
  },

  // 2. Audio Playback
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
      'The engine applies biquad IIR filtering directly within the pure Rust audio pipeline. When boost is applied, the preamp automatically calculates headroom and attenuates input to prevent saturation.',
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

  // 3. Video Experience & Decoders
  {
    id: 'hw-decoder-switcher',
    category: 'Video Experience',
    icon: Zap,
    title: '1-Tap HW / HW+ / SW Hardware Decoder Switcher',
    summary:
      'Direct, instant switching between Hardware Acceleration (HW), Enhanced Hardware (HW+), and Software CPU fallback (SW).',
    benefit:
      'Resolve video stutter, damaged container playback, or audio desync with a single tap directly from the video top bar — identical to the beloved MX Player signature feature.',
    howItWorks:
      'Switches the libmpv / Media3 video decoder surface dynamically on the fly and remembers your decoder preference for each media file persistently.',
    accessPoint: 'Player Top Bar -> `⚡ HW+` / `⚡ HW` / `💻 SW` Chip.',
    platforms: 'Android, macOS, Windows, Linux, iOS.',
    docLink: '/docs/video-playback',
  },
  {
    id: 'gesture-feedback-hud',
    category: 'Video Experience',
    icon: Maximize2,
    title: 'MX Player Muscle-Memory Touch Gestures & Visual HUD',
    summary:
      'Vertical edge swipes for brightness and volume (up to 200%), horizontal seek delta scrubbing, double-tap seek, and 2x speed long press.',
    benefit:
      'Control your media seamlessly without touching small on-screen buttons. The volume boost turns amber at >100% with soft-knee limiter protection.',
    howItWorks:
      'Touch gesture engine computes velocity and deltas in pure Rust, projecting an ultra-crisp OLED glassmorphic HUD pill with tabular numbers (`+00:15`).',
    accessPoint: 'Video Player Viewport -> Swipe left edge (brightness), right edge (volume), or center (seek).',
    platforms: 'Android, iOS, Desktop touchscreens.',
    docLink: '/docs/video-playback',
  },
  {
    id: 'auto-rotation-vlc',
    category: 'Video Experience',
    icon: RotateCw,
    title: 'VLC-Style Dynamic Orientation & Smart Auto-Rotation',
    summary:
      'Intelligent orientation switcher that automatically rotates widescreen videos to landscape even when phone system auto-rotate is disabled.',
    benefit:
      'Watch widescreen movies in full landscape without having to swipe down the system notification shade to unlock screen rotation.',
    howItWorks:
      'Inspects media aspect ratio metadata upon load and requests native sensor orientation directly from the activity window manager, with 1-tap manual override.',
    accessPoint: 'Player Top Bar -> Orientation Toggle Button.',
    platforms: 'Android, iOS.',
    docLink: '/docs/video-playback',
  },
  {
    id: 'ab-loop-repeat',
    category: 'Video Experience',
    icon: Repeat,
    title: 'A-B Loop Repeat Precision Engine',
    summary:
      'Mark millisecond-accurate start (A) and end (B) timestamps to continuously loop any audio segment or video scene.',
    benefit:
      'Ideal for learning musical instruments, studying film dialogue, dance choreography, or examining high-speed frame motion.',
    howItWorks:
      'A dedicated pure Rust state machine tracks loop bounds. When playback reaches Point B, it automatically seeks back to Point A without audio dropout.',
    accessPoint: 'Player Controls -> A-B Loop Button (Tap once for A, tap twice for B, tap again to clear).',
    platforms: 'All supported platforms.',
    docLink: '/docs/video-playback',
  },
  {
    id: 'dual-subtitles',
    category: 'Video Experience',
    icon: Layers,
    title: 'Simultaneous Dual Subtitles with Collision Avoidance',
    summary:
      'Display two subtitle tracks simultaneously (e.g. English dialogue at the bottom, Bengali or Spanish translation on top).',
    benefit:
      'The ultimate tool for language learners and foreign cinema enthusiasts. Includes drag-to-reposition and pinch-to-scale gestures.',
    howItWorks:
      'Parses primary and secondary subtitle tracks into independent rendering layers with automatic collision detection and UTF-8 charset correction.',
    accessPoint: 'Player Subtitle Menu -> Select Primary & Secondary Subtitles.',
    platforms: 'All supported platforms.',
    docLink: '/docs/video-playback',
  },

  // 4. Diagnostics & Performance
  {
    id: 'stats-for-nerds',
    category: 'Diagnostics & Performance',
    icon: Activity,
    title: 'Stats for Nerds (Live Media Diagnostics HUD)',
    summary:
      'Real-time diagnostic overlay reporting live FPS, dropped frame count, video bitrates, audio layout, and buffer cache health.',
    benefit:
      'Verify whether your GPU is properly hardware-accelerating playback and troubleshoot dropped frames or network bandwidth bottlenecks.',
    howItWorks:
      'Samples underlying demuxer, decoder, and renderer statistics at 2Hz intervals and formats them with tabular precision.',
    accessPoint: 'Video Player Settings -> Stats for Nerds.',
    platforms: 'Android, macOS, Windows, Linux.',
    docLink: '/docs/video-playback',
  },

  // 5. Security & Privacy
  {
    id: 'private-vault',
    category: 'Security & Trust',
    icon: Lock,
    title: 'Private Media Vault (AES-256-GCM)',
    summary:
      'Cryptographically secured offline media vault to hide sensitive personal videos, recordings, and audio files from system media scans.',
    benefit:
      'Your private videos are completely invisible to gallery apps and external file scanners, protected by an offline master PIN/passphrase.',
    howItWorks:
      'Uses PBKDF2/Argon2 key derivation and AES-256-GCM authenticated encryption. Files are safely encrypted into a private application vault with brute-force lockout.',
    accessPoint: 'Main Navigation -> Vault -> Setup PIN / Unlock.',
    platforms: 'Android, macOS, Windows, Linux, iOS.',
    docLink: '/docs/privacy-policy',
  },
  {
    id: 'offline-privacy',
    category: 'Security & Trust',
    icon: ShieldCheck,
    title: 'Zero-Account Offline Architecture',
    summary:
      '100% local SQLite v6 persistence with WAL mode. Zero accounts, zero analytics, zero data uploads.',
    benefit:
      'Total privacy and data sovereignty. Your listening habits, personal files, and metadata never leave your physical device.',
    howItWorks:
      'All states, playlists, bookmarks, and indexes reside in private local application sandboxes. No network telemetry calls exist in the binary.',
    accessPoint: 'Default architecture — active across entire application.',
    platforms: 'All supported platforms.',
    docLink: '/docs/privacy-policy',
  },

  // 6. Organization & Transfer
  {
    id: 'wifi-transfer',
    category: 'Organization & Transfer',
    icon: Wifi,
    title: 'Offline Wi-Fi Hotspot File Sharing',
    summary:
      'High-speed zero-cable file transfer engine that creates a local HTTP server for wireless uploads and downloads.',
    benefit:
      'Transfer 4K videos or music libraries to your phone or computer over local Wi-Fi at maximum speed without requiring internet access or USB cables.',
    howItWorks:
      'Spawns an embedded asynchronous HTTP web server in pure Rust. Opening the displayed IP address in any browser allows drag-and-drop file transfers.',
    accessPoint: 'Settings -> Wi-Fi Transfer -> Start Server.',
    platforms: 'Android, macOS, Windows, Linux.',
    docLink: '/docs/file-organization',
  },
  {
    id: 'video-to-audio',
    category: 'Organization & Transfer',
    icon: FileAudio,
    title: 'Lossless Video-to-Audio Extractor',
    summary:
      'Extract pristine audio tracks (MP3, AAC, FLAC) from downloaded concerts, video clips, or lectures with background batch processing.',
    benefit:
      'Turn video podcasts, music videos, and recorded lectures into standalone music tracks for your library with a single tap.',
    howItWorks:
      'Uses stream copy where possible for zero-quality-loss extraction, or high-bitrate encoding with metadata preservation.',
    accessPoint: 'Video Item Menu -> Extract Audio.',
    platforms: 'Android, macOS, Windows, Linux.',
    docLink: '/docs/metadata-editing',
  },
  {
    id: 'smart-playlists',
    category: 'Organization & Transfer',
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
    category: 'Organization & Transfer',
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
    category: 'Organization & Transfer',
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

  // 7. Streaming & Network Shares
  {
    id: 'network-shares',
    category: 'Streaming & Network Shares',
    icon: HardDrive,
    title: 'Local Network Storage (NAS, SMB, SFTP, WebDAV)',
    summary:
      'Browse, index, and stream media directly from your home network storage drives over SMB, SFTP, FTP, WebDAV, and NFS.',
    benefit:
      'Access terabytes of media from your home server or Synology/QNAP NAS without taking up local phone or laptop storage space.',
    howItWorks:
      'Direct socket connection with protocol authentication handled locally. Streaming buffers are optimized for zero stutter over home Wi-Fi.',
    accessPoint: 'Main Navigation -> Network Storage -> Add Server.',
    platforms: 'All supported platforms.',
    docLink: '/docs/streaming-urls',
  },
  {
    id: 'network-streams',
    category: 'Streaming & Network Shares',
    icon: Radio,
    title: 'Direct User-Provided Stream Playback',
    summary:
      'Direct playback for HTTP/HTTPS streams, HLS playlists, MPEG-DASH manifests, and RTSP feeds.',
    benefit:
      'Stream live radio, podcasts, or network security feeds directly in Vimivo without proprietary third-party apps.',
    howItWorks:
      'Streams connect directly to destination hosts over native sockets without intermediate telemetry or proxy servers. Recent URLs are stored locally with custom bookmarking.',
    accessPoint: 'Main Navigation -> Stream URL -> Paste link.',
    platforms: 'All supported platforms.',
    docLink: '/docs/streaming-urls',
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
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pure Rust Core &amp; Verified Specifications</span>
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
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
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
