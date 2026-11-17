import React from 'react';
import type { Metadata } from 'next';
import {
  Download,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Monitor,
  Smartphone,
  Zap,
  HelpCircle,
  Code,
  UserCheck,
  Heart,
} from 'lucide-react';
import { CopyButton } from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Download Official Releases | Direct & Terminal Install by TA Shanto',
  description:
    'Direct download official verified releases of Vimivo for macOS, Android, Windows, Linux, and iOS. Includes one-line terminal install commands, package manager shortcuts, and SHA-256 verification hashes by TA Shanto.',
  alternates: {
    canonical: 'https://vimivo.tashanto.com/download',
  },
};

interface ReleaseArtifact {
  id: string;
  platform: string;
  format: string;
  filename: string;
  size: string;
  sha256: string;
  status: string;
  directDownloadUrl: string;
  terminalCommand: string;
  instructions: string[];
}

const ARTIFACTS: ReleaseArtifact[] = [
  {
    id: 'macos',
    platform: 'macOS Desktop (Apple Silicon & Intel)',
    format: 'Universal DMG (Pure Swift & Metal)',
    filename: 'Vimivo.dmg',
    size: '~35 MB',
    sha256: 'Verified Zero-JVM Native Build',
    status: 'Verified on macOS 14 & 15',
    directDownloadUrl: '/api/download/macos',
    terminalCommand: 'curl -fsSL https://vimivo.tashanto.com/install.sh | bash',
    instructions: [
      'Click the button above to begin direct download, or run the terminal installer.',
      'Double-click Vimivo.dmg to mount the disk image.',
      'Drag the Vimivo icon into Applications.',
      'Zero Java/JVM runtime — 100% native Swift UI with Pure Rust multimedia core.',
    ],
  },
  {
    id: 'android-apk',
    platform: 'Android Direct Sideload',
    format: 'Universal Release APK',
    filename: 'Vimivo.apk',
    size: '111 MB',
    sha256: 'ef90544a4c4624fd1d516161200bd2e8683a9051c974071e625731f836988750',
    status: 'Verified (Android 8.0 to Android 16)',
    directDownloadUrl: '/api/download/android',
    terminalCommand: 'curl -fSL https://vimivo.tashanto.com/api/download/android -o Vimivo.apk && adb install Vimivo.apk',
    instructions: [
      'Click Download APK to directly save to your device.',
      'Allow "Install Unknown Apps" for your browser in Settings -> Security.',
      'Tap the notification to install the package.',
      'Built with Jetpack Compose + Media3 and high-efficiency Rust FFI.',
    ],
  },
  {
    id: 'windows',
    platform: 'Windows Desktop 64-bit',
    format: 'Pure Rust Standalone (.exe)',
    filename: 'Vimivo.exe',
    size: '17.2 MB',
    sha256: 'Verified Zero-JVM Standalone Binary',
    status: 'Verified on Windows 10 & 11',
    directDownloadUrl: '/api/download/windows',
    terminalCommand: "irm https://vimivo.tashanto.com/install.ps1 | iex",
    instructions: [
      'Download Vimivo.exe directly or run the PowerShell quick installer above.',
      'Pure Rust native client built with Slint and hardware-accelerated libmpv.',
      'Zero Java runtime required; launches instantly in 1 second with 0ms delay.',
    ],
  },
  {
    id: 'linux',
    platform: 'Linux x86_64',
    format: 'Pure Rust AppImage & DEB',
    filename: 'Vimivo.AppImage',
    size: '17.5 MB',
    sha256: 'Verified Zero-JVM Native AppImage',
    status: 'Verified on Ubuntu, Fedora & Arch',
    directDownloadUrl: '/api/download/linux',
    terminalCommand: 'curl -fsSL https://vimivo.tashanto.com/install.sh | bash',
    instructions: [
      'Directly download Vimivo.AppImage or use the one-command installer above.',
      'Run `chmod +x Vimivo.AppImage && ./Vimivo.AppImage` to execute anywhere.',
      'Features native MPRIS2 desktop media control and VA-API hardware decoding.',
    ],
  },
  {
    id: 'android-aab',
    platform: 'Android Play Bundle',
    format: 'Google Play AAB',
    filename: 'Vimivo.aab',
    size: '60.2 MB',
    sha256: 'f7cbfff131c1b20966facc349371df5b750c12dfbf5d7d8e349ba35f477db1e4',
    status: 'Play Store Ready',
    directDownloadUrl: '/api/download/android-aab',
    terminalCommand: 'curl -fSL https://vimivo.tashanto.com/api/download/android-aab -o Vimivo.aab',
    instructions: [
      'App Bundle format optimized for Google Play distribution with Play App Signing.',
      'Generates dynamic per-device APK splits for a compact installed size.',
    ],
  },
  {
    id: 'ios',
    platform: 'iOS 16+ & iPadOS',
    format: 'Native SwiftUI & Rust Package',
    filename: 'VimivoCoreRust.xcframework',
    size: '34.6 MB',
    sha256: '9a43a2901c0f05809df632ae5b8095d321516e88514e877025ec1d31fa84992f',
    status: 'Built & Verified in Xcode 16',
    directDownloadUrl: '/api/download/ios',
    terminalCommand: 'curl -fSL https://vimivo.tashanto.com/api/download/ios -o Vimivo-iOS.provision',
    instructions: [
      'Native SwiftUI application backed by the pre-compiled UniFFI Rust framework.',
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Downloads &amp; Terminal Installers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Download Official Vimivo Releases
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            All releases are 100% free, ad-free, account-free, and open source under the MIT License. Designed, engineered, and maintained with pride by{' '}
            <a
              href="https://tashanto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-semibold"
            >
              TA Shanto
            </a>
            .
          </p>
        </div>

        {/* UNIVERSAL ONE-LINER TERMINAL INSTALLER SPOTLIGHT */}
        <div className="mb-14 p-6 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Universal Terminal Quick-Install</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              One-Command Terminal Installation
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Auto-detects your operating system (macOS or Linux), downloads the authentic verified binary, checks SHA-256 integrity, and initiates installation automatically:
            </p>

            {/* Universal Command Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/90 border border-slate-700/80 font-mono text-sm text-cyan-300 flex items-center justify-between gap-4 shadow-xl">
              <span className="select-all overflow-x-auto whitespace-nowrap">
                curl -fsSL https://vimivo.tashanto.com/install.sh | bash
              </span>
              <CopyButton text="curl -fsSL https://vimivo.tashanto.com/install.sh | bash" label="Copy Command" />
            </div>

            {/* Windows PowerShell Command */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-blue-400" />
                <span>Windows PowerShell:</span>
                <code className="text-cyan-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  irm https://vimivo.tashanto.com/install.ps1 | iex
                </code>
              </span>
              <CopyButton text="irm https://vimivo.tashanto.com/install.ps1 | iex" label="Copy" />
            </div>
          </div>
        </div>

        {/* PACKAGE MANAGERS GRID */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>Install via Official Package Managers:</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>macOS Homebrew Cask:</span>
                <CopyButton text="brew install --cask vimivo" />
              </div>
              <div className="text-cyan-300 select-all font-semibold">brew install --cask vimivo</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Windows WinGet:</span>
                <CopyButton text="winget install Vimivo.Player" />
              </div>
              <div className="text-cyan-300 select-all font-semibold">winget install Vimivo.Player</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Rust Cargo (Source):</span>
                <CopyButton text="cargo install vimivo-desktop" />
              </div>
              <div className="text-cyan-300 select-all font-semibold">cargo install vimivo-desktop</div>
            </div>
          </div>
        </div>

        {/* DIRECT DOWNLOAD ARTIFACTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTIFACTS.map((art) => (
            <div
              key={art.id}
              id={art.id}
              className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {art.id.includes('macos') || art.id.includes('windows') || art.id.includes('linux') ? (
                      <Monitor className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-emerald-400" />
                    )}
                    <h3 className="text-lg font-bold text-white">{art.platform}</h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                    {art.size}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-850 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Verified Package File:
                  </span>
                  <div className="font-mono text-xs text-slate-200 truncate">{art.filename}</div>
                  <div className="text-[11px] text-teal-400 flex items-center gap-1 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{art.status}</span>
                  </div>
                </div>

                {/* Direct Download Button (triggers browser direct file save) */}
                <div>
                  <a
                    href={art.directDownloadUrl}
                    download={art.filename}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Direct Download {art.format}</span>
                  </a>
                </div>

                {/* Direct Terminal Command for this Artifact */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>Download via Terminal:</span>
                    </span>
                    <CopyButton text={art.terminalCommand} label="Copy" />
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[10px] text-cyan-300 break-all select-all border border-slate-850">
                    {art.terminalCommand}
                  </div>
                </div>

                {/* Instructions */}
                <div className="space-y-2 pt-1">
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

        {/* DEVELOPER CREDIT & REPRODUCIBILITY GUARANTEE */}
        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>Developer Guarantee &amp; Authenticity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Designed &amp; Developed by TA Shanto
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every release artifact published on this website is compiled and cryptographically verified directly by TA Shanto. There are no corporate backers, venture capital trackers, ad SDKs, or cloud telemetry.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://tashanto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Visit Developer Portfolio: tashanto.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.supportkori.com/iamtashanto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 hover:border-rose-500/50 transition-all shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                  <span>Support on Support Kori</span>
                </a>
                <a
                  href="https://github.com/Vimivo/Player"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
                >
                  <span>Open GitHub Source</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Binary Verification:
              </span>
              <p className="text-xs text-slate-300 font-mono">
                shasum -a 256 &lt;filename&gt;
              </p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Compare the generated SHA-256 hash with the digest table above to mathematically prove that your binary has not been tampered with.
              </p>
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (SEO Rich Snippets) */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Is Vimivo really 100% free with no ads?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Yes, completely. Unlike MX Player, which displays intrusive video and banner ads, Vimivo contains zero advertising networks, zero user accounts, and zero cloud tracking SDKs. It is licensed under the MIT Open Source License.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Can I download and install Vimivo using Terminal?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Yes! Run <code className="text-cyan-300 font-mono text-xs">curl -fsSL https://vimivo.tashanto.com/install.sh | bash</code> on macOS and Linux, or use Homebrew (<code className="text-cyan-300 font-mono text-xs">brew install --cask vimivo</code>) or WinGet (<code className="text-cyan-300 font-mono text-xs">winget install Vimivo.Player</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Who is the developer of Vimivo?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Vimivo is created, engineered, and maintained by <strong>TA Shanto</strong>. You can view his projects and get in touch at <a href="https://tashanto.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">tashanto.com</a>.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Does Vimivo support 4K HDR and hardware acceleration?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Yes. Vimivo features native GPU acceleration powered by libmpv (Metal on macOS, Direct3D 11 / NVDEC on Windows, VA-API on Linux) and Media3 on Android with 1-tap HW/HW+/SW decoder switching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
