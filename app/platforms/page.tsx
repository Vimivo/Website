import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Monitor,
  Smartphone,
  Terminal,
  Cpu,
  Download,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supported Platforms',
  description:
    'Verified cross-platform support for Vimivo across Android, macOS, Windows, Linux, and iOS with honest platform statuses, hardware requirements, and packaging formats.',
};

interface PlatformInfo {
  name: string;
  icon: React.ElementType;
  status: 'Runtime Verified' | 'Built & Tested' | 'In Development';
  statusColor: string;
  engine: string;
  minOs: string;
  targetOs: string;
  architectures: string;
  packaging: string[];
  features: string[];
  limitations: string;
  installGuideSlug: string;
  downloadAvailable: boolean;
  downloadSlug?: string;
}

const PLATFORMS: PlatformInfo[] = [
  {
    name: 'macOS Desktop',
    icon: Monitor,
    status: 'Runtime Verified',
    statusColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    engine: 'libmpv with Metal VideoToolbox hardware acceleration',
    minOs: 'macOS 12.0 Monterey',
    targetOs: 'macOS 14 Sonoma / macOS 15 Sequoia',
    architectures: 'Apple Silicon (M1/M2/M3/M4 native) & Intel x86_64',
    packaging: ['Standalone DMG (151 MB)', 'Self-contained .app with bundled JDK 17'],
    features: [
      'Bit-perfect audio playback with graphic EQ & ReplayGain',
      'Hardware-accelerated 4K & HDR video with zero frame drops',
      'Native Retina display support & macOS media keys integration',
      'Non-destructive SQLite v6 persistence in application sandbox',
    ],
    limitations:
      'Pre-release candidate DMG requires right-click Open on first launch pending Apple Developer ID notarization.',
    installGuideSlug: 'installation',
    downloadAvailable: true,
    downloadSlug: '/download#macos',
  },
  {
    name: 'Android (Phone & Tablet)',
    icon: Smartphone,
    status: 'Built & Tested',
    statusColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
    engine: 'AndroidX Media3 ExoPlayer 1.11.1',
    minOs: 'Android 8.0 Oreo (API 26)',
    targetOs: 'Android 16 Baklava (API 36)',
    architectures: 'arm64-v8a, armeabi-v7a, x86_64',
    packaging: ['Direct APK (147 MB)', 'Google Play App Bundle (.aab, 76 MB)'],
    features: [
      'Foreground MediaSessionService with Lock Screen & notification controls',
      'Picture-in-Picture (PiP) video playback with swipe gestures',
      'Scoped storage integration via Android MediaStore & Storage Access Framework (SAF)',
      '352 automated unit and integration tests passing in CI',
    ],
    limitations:
      'Background video playback runs in audio-only mode unless Picture-in-Picture is active.',
    installGuideSlug: 'installation',
    downloadAvailable: true,
    downloadSlug: '/download#android',
  },
  {
    name: 'Windows Desktop',
    icon: Monitor,
    status: 'Built & Tested',
    statusColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
    engine: 'libmpv with Direct3D 11 & NVDEC GPU acceleration',
    minOs: 'Windows 10 64-bit (Build 19041+)',
    targetOs: 'Windows 11 (22H2+)',
    architectures: '64-bit Intel / AMD (x64)',
    packaging: ['NSIS Installer (.exe)', 'Enterprise MSI Package (.msi)'],
    features: [
      'Per-monitor High-DPI UI scaling with Compose Desktop',
      'Windows Media Control keys and System Media Transport Controls',
      'Safe Windows reserved filename sanitization and long-path support',
      'Local SQLite WAL database stored in %LOCALAPPDATA%\\Vimivo',
    ],
    limitations:
      'Windows SmartScreen warning may appear on unsigned installer binaries until EV code signing certificate is attached.',
    installGuideSlug: 'installation',
    downloadAvailable: true,
    downloadSlug: '/download#windows',
  },
  {
    name: 'Linux Desktop',
    icon: Terminal,
    status: 'Built & Tested',
    statusColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
    engine: 'System libmpv with VA-API / VDPAU decoding',
    minOs: 'Ubuntu 20.04+ / GNU C Library (GLIBC) 2.31+',
    targetOs: 'Ubuntu 24.04 LTS / Fedora 40+ / Arch Linux',
    architectures: 'x86_64',
    packaging: ['Debian/Ubuntu (.deb)', 'Fedora/RHEL (.rpm)', 'Standalone AppImage'],
    features: [
      'MPRIS v2 D-Bus interface for desktop media integration (GNOME, KDE Plasma)',
      'X11 and Wayland (via XWayland) display compositing',
      'XDG base directory compliance (~/.local/share/vimivo, ~/.config/vimivo)',
      'Native libsecret integration for credential isolation',
    ],
    limitations:
      'Requires system libmpv2 package installed (`sudo apt install libmpv2` or distro equivalent).',
    installGuideSlug: 'installation',
    downloadAvailable: true,
    downloadSlug: '/download#linux',
  },
  {
    name: 'iOS & iPadOS',
    icon: Smartphone,
    status: 'In Development',
    statusColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
    engine: 'Native Apple AVFoundation (AVPlayer, AVURLAsset)',
    minOs: 'iOS 16.0 / iPadOS 16.0',
    targetOs: 'iOS 18 / iPadOS 18',
    architectures: 'arm64 (Apple Silicon)',
    packaging: ['Xcode Archive (.xcarchive)', 'TestFlight Prototype Build'],
    features: [
      'Sandboxed document picker integration with Apple Files app and iCloud Drive',
      'Live Activities & Dynamic Island lockscreen controls',
      'Native SwiftUI design adhering to Apple Human Interface Guidelines',
      'Zero third-party cloud analytics',
    ],
    limitations:
      'Architecture and UI prototypes are implemented in repository; public App Store distribution is scheduled following desktop and Android releases.',
    installGuideSlug: 'platform-matrix',
    downloadAvailable: false,
  },
];

export default function PlatformsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Unified Kotlin Core</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Cross-Platform Support Baseline
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Vimivo delivers native performance across five operating systems.
            We provide transparent status reporting for every platform target.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="space-y-8">
          {PLATFORMS.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6"
              >
                {/* Top header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{platform.name}</h2>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Architectures: {platform.architectures}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${platform.statusColor}`}
                    >
                      {platform.status}
                    </span>
                    {platform.downloadAvailable && platform.downloadSlug && (
                      <Link
                        href={platform.downloadSlug}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Grid of specs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Multimedia Engine
                    </span>
                    <p className="font-mono text-cyan-300">{platform.engine}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Operating System Baseline
                    </span>
                    <p className="text-slate-300">
                      Min: <strong className="text-white">{platform.minOs}</strong>
                      <br />
                      Target: <span className="text-slate-400">{platform.targetOs}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Packaging Formats
                    </span>
                    <div className="space-y-0.5">
                      {platform.packaging.map((pkg, idx) => (
                        <div key={idx} className="font-mono text-slate-300 text-xs">
                          &bull; {pkg}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features & Limitations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Platform Capabilities:
                    </h4>
                    <ul className="space-y-2">
                      {platform.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Platform Considerations:
                    </h4>
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{platform.limitations}</p>
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <Link
                    href={`/docs/${platform.installGuideSlug}`}
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View {platform.name} Installation &amp; Configuration Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-slate-500 text-[11px]">
                    Continuous Integration Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
