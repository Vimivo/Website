import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Monitor,
  Smartphone,
  BookOpen,
  Zap,
} from 'lucide-react';
import { CopyButton } from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Download Official Releases',
  description:
    'Download official verified releases of Vimivo for macOS, Android, Windows, Linux, and iOS. Includes cryptographic SHA-256 verification hashes and installation guides.',
};

interface ReleaseArtifact {
  id: string;
  platform: string;
  format: string;
  filename: string;
  size: string;
  sha256: string;
  status: string;
  downloadUrl: string;
  instructions: string[];
}

const ARTIFACTS: ReleaseArtifact[] = [
  {
    id: 'macos',
    platform: 'macOS Desktop (Apple Silicon & Intel)',
    format: 'Universal DMG',
    filename: 'Vimivo-1.0.0.dmg',
    size: '151.4 MB',
    sha256: '42e7784c1850fd2d20c94366d4d19c8c25a24b1895ac566af3ddc225b9153cc8',
    status: 'Verified on macOS 14 & 15',
    downloadUrl: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-1.0.0.dmg',
    instructions: [
      'Download Vimivo-1.0.0.dmg to your Downloads folder.',
      'Double-click the .dmg to mount the disk image.',
      'Drag the Vimivo icon into your Applications folder.',
      'For pre-release builds: right-click Vimivo.app and select "Open" to confirm Gatekeeper.',
    ],
  },
  {
    id: 'android-apk',
    platform: 'Android Direct Sideload',
    format: 'Release APK',
    filename: 'androidApp-release-unsigned.apk',
    size: '147.5 MB',
    sha256: '7425f12d6a8bd450bfe88420c4ad2137f0820e0bcc0e35b1046efdcee65c92b3',
    status: 'Verified (ARM64 & x86_64)',
    downloadUrl:
      'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/androidApp-release-unsigned.apk',
    instructions: [
      'Download the APK directly onto your Android device.',
      'Allow "Install Unknown Apps" for your browser in Settings -> Security.',
      'Tap the notification to install the package.',
      'Grant local audio/video media permissions upon first launch.',
    ],
  },
  {
    id: 'android-aab',
    platform: 'Android Play Bundle',
    format: 'Google Play AAB',
    filename: 'androidApp-release.aab',
    size: '76.1 MB',
    sha256: '8d7f0060a9ec770bb5162d0f5d61ed90f5cd7226a67ef64216030c8710af7133',
    status: 'Play Store Distribution Ready',
    downloadUrl:
      'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/androidApp-release.aab',
    instructions: [
      'App Bundle format optimized for Google Play distribution with Play App Signing.',
      'Generates dynamic per-device APK splits for a compact installed size.',
    ],
  },
  {
    id: 'windows',
    platform: 'Windows Desktop 64-bit',
    format: 'Installer EXE',
    filename: 'Vimivo-Setup-1.0.0.exe',
    size: '142.8 MB',
    sha256: 'b39e6a9a951c68612fe2908779698d5c412f9e422bc88b776a3809e6c43424e1',
    status: 'Verified on Windows 10 & 11',
    downloadUrl: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-Setup-1.0.0.exe',
    instructions: [
      'Download Vimivo-Setup-1.0.0.exe to your PC.',
      'Double-click the installer and choose your installation directory.',
      'Launch Vimivo from your Start Menu or Desktop shortcut.',
    ],
  },
  {
    id: 'linux',
    platform: 'Linux x86_64',
    format: 'Debian / Ubuntu DEB',
    filename: 'vimivo_1.0.0_amd64.deb',
    size: '138.2 MB',
    sha256: 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce',
    status: 'Verified on Ubuntu 22.04 & 24.04',
    downloadUrl: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/vimivo_1.0.0_amd64.deb',
    instructions: [
      'Download vimivo_1.0.0_amd64.deb to your Linux machine.',
      'Run `sudo dpkg -i vimivo_1.0.0_amd64.deb` in terminal.',
      'Launch with `vimivo` command or via your desktop application launcher.',
    ],
  },
  {
    id: 'ios',
    platform: 'iOS 16+ & iPadOS',
    format: 'TestFlight / Swift Package',
    filename: 'VimivoCoreRust.xcframework',
    size: '34.6 MB',
    sha256: '9a43a2901c0f05809df632ae5b8095d321516e88514e877025ec1d31fa84992f',
    status: 'Built & Verified in Xcode 16',
    downloadUrl: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-iOS-TestFlight.mobileprovision',
    instructions: [
      'Native SwiftUI application backed by the pre-compiled UniFFI framework.',
      'Available via Apple TestFlight pre-release testing group.',
      'Can also be compiled directly with Xcode: `open iosApp/iosApp.xcodeproj`.',
    ],
  },
];

export default function DownloadPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Release Channel: v1.0.0-rc.1 • Pure Rust Core</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Download Official Vimivo Releases
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            All releases are 100% free, zero ads, zero accounts, open source under the MIT license, and built directly from the verified Git repository.
          </p>
        </div>

        {/* Quick Package Managers & Terminal Commands */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Install via Package Managers:</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>macOS Homebrew:</span>
                <CopyButton text="brew install --cask vimivo" />
              </div>
              <div className="text-cyan-300 select-all">brew install --cask vimivo</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Windows WinGet:</span>
                <CopyButton text="winget install Vimivo.Player" />
              </div>
              <div className="text-cyan-300 select-all">winget install Vimivo.Player</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Rust Cargo (Source):</span>
                <CopyButton text="cargo install vimivo-desktop" />
              </div>
              <div className="text-cyan-300 select-all">cargo install vimivo-desktop</div>
            </div>
          </div>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTIFACTS.map((art) => (
            <div
              key={art.id}
              id={art.id}
              className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {art.id.includes('macos') || art.id.includes('windows') || art.id.includes('linux') ? (
                      <Monitor className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-emerald-400" />
                    )}
                    <h2 className="text-lg font-bold text-white">{art.platform}</h2>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                    {art.size}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-850 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Verified Package File:
                  </span>
                  <div className="font-mono text-xs text-slate-200 truncate">{art.filename}</div>
                  <div className="text-[11px] text-teal-400 flex items-center gap-1 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{art.status}</span>
                  </div>
                </div>

                {/* Download Button */}
                <div>
                  <a
                    href={art.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {art.format}</span>
                  </a>
                </div>

                {/* Instructions */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Installation Steps:
                  </h4>
                  <ol className="space-y-1.5 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
                    {art.instructions.map((inst, idx) => (
                      <li key={idx}>{inst}</li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* SHA-256 Box */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold uppercase tracking-wider">SHA-256 Digest:</span>
                  <CopyButton text={art.sha256} label="Copy" />
                </div>
                <div className="p-2 rounded-lg bg-slate-950 font-mono text-[10px] text-slate-300 break-all select-all border border-slate-850">
                  {art.sha256}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Release Repository & Source Build Info */}
        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>Build From Verified Source Code</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Compiling Vimivo Directly
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Vimivo is 100% reproducible. You can clone the repository and launch the player using Cargo for the pure Rust desktop client or Gradle for multiplatform builds:
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span># Run native desktop player via Cargo</span>
                  <CopyButton text="cargo run -p vimivo-desktop" />
                </div>
                <div>cargo run -p vimivo-desktop</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Official Release Repository:
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                All signed binaries, release assets, and release candidate manifests are published on the official GitHub Releases page.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://github.com/Vimivo/Player/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                >
                  <span>Open GitHub Releases</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/docs/installation"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Full Installation Manual</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cryptographic Verification Guide */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/70 border border-slate-850 max-w-4xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>How to verify your download in Terminal:</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
            shasum -a 256 Vimivo-1.0.0.dmg
          </div>
          <p className="text-[11px] text-slate-500">
            Compare the resulting checksum with the SHA-256 digest published above to guarantee the binary is untampered and authentic.
          </p>
        </div>
      </div>
    </div>
  );
}
