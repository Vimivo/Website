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
} from 'lucide-react';
import { CopyButton } from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Download Official Releases',
  description:
    'Download official verified releases of Vimivo for macOS and Android. Includes cryptographic SHA-256 verification hashes and installation guides.',
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
    platform: 'macOS Desktop',
    format: 'Standalone DMG',
    filename: 'Vimivo-1.0.0.dmg',
    size: '151.4 MB',
    sha256: '42e7784c1850fd2d20c94366d4d19c8c25a24b1895ac566af3ddc225b9153cc8',
    status: 'Built & Verified on macOS',
    downloadUrl: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-1.0.0.dmg',
    instructions: [
      'Download Vimivo-1.0.0.dmg to your Downloads folder.',
      'Double-click the .dmg to open the disk image.',
      'Drag the Vimivo icon into your Applications folder.',
      'For pre-release builds: right-click Vimivo.app and select "Open", then confirm to bypass Gatekeeper.',
    ],
  },
  {
    id: 'android-apk',
    platform: 'Android Direct APK',
    format: 'Sideload APK',
    filename: 'androidApp-release-unsigned.apk',
    size: '147.5 MB',
    sha256: '7425f12d6a8bd450bfe88420c4ad2137f0820e0bcc0e35b1046efdcee65c92b3',
    status: 'Built & Verified',
    downloadUrl:
      'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/androidApp-release-unsigned.apk',
    instructions: [
      'Download the APK on your Android device.',
      'Allow "Install Unknown Apps" for your browser in Android Settings -> Security.',
      'Open the APK file from notifications or file manager and tap Install.',
      'Grant audio/video storage permissions on initial launch to scan your local media.',
    ],
  },
  {
    id: 'android-aab',
    platform: 'Android App Bundle',
    format: 'Google Play AAB',
    filename: 'androidApp-release.aab',
    size: '76.1 MB',
    sha256: '8d7f0060a9ec770bb5162d0f5d61ed90f5cd7226a67ef64216030c8710af7133',
    status: 'Built for Play Store Signing',
    downloadUrl:
      'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/androidApp-release.aab',
    instructions: [
      'App Bundle format optimized for Google Play distribution with Play App Signing.',
      'Includes dynamic split APK generation for smaller installed footprint on user devices.',
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
            <span>Release Channel: v1.0.0-rc.1</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Download Official Vimivo Releases
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            All releases are 100% free, open source under the MIT license, and built directly from the verified Git repository.
          </p>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ARTIFACTS.map((art) => (
            <div
              key={art.id}
              id={art.id}
              className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {art.id.includes('macos') ? (
                      <Monitor className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-emerald-400" />
                    )}
                    <h2 className="text-xl font-bold text-white">{art.platform}</h2>
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

        {/* Windows and Linux Section */}
        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>Windows &amp; Linux Build Availability</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Building &amp; Installing on Windows &amp; Linux
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Windows (EXE/MSI) and Linux (DEB/RPM/AppImage) packaging pipelines are fully automated in the repository. You can launch or package standalone binaries directly using the Gradle build tool:
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span># Run desktop application</span>
                  <CopyButton text="./gradlew :desktopApp:run" />
                </div>
                <div>./gradlew :desktopApp:run</div>
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
