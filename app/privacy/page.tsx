import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  HardDrive,
  Radio,
  EyeOff,
  Lock,
  Database,
  FileCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Principles',
  description:
    'Vimivo privacy principles: offline-first architecture, zero analytics, zero tracking, local SQLite persistence, and direct user-provided stream connections.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy &amp; Data Ownership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Vimivo Privacy Policy
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Vimivo is designed as an offline-first, account-free media player.
            We believe your media consumption habits belong exclusively to you.
          </p>
          <div className="text-xs text-slate-500">
            Effective Date: October 16, 2026 &bull; Version 1.0.0
          </div>
        </div>

        {/* Core Guarantees Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
              <EyeOff className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white">Zero Telemetry</h2>
            <p className="text-xs text-slate-400">
              No tracking SDKs, no behavioral crash loggers, and no surveillance analytics.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white">No Cloud Accounts</h2>
            <p className="text-xs text-slate-400">
              No email, password, or account registration is ever required to use any feature.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto">
              <HardDrive className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white">100% Local Storage</h2>
            <p className="text-xs text-slate-400">
              All playlists, favorites, metadata, and history reside on your physical machine.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-950/60 border border-slate-850">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-cyan-400" />
              <span>1. Information Processed on Your Device</span>
            </h2>
            <p>
              With your explicit operating system permission, Vimivo scans your designated media directories or indexes files via platform mechanisms (such as Android MediaStore or macOS sandboxed folder bookmarks).
            </p>
            <p>
              Vimivo extracts metadata (artist name, album title, track title, track number, duration, embedded artwork references) to create a high-performance local SQLite index.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>
                <strong>Your media files are never uploaded:</strong> Vimivo does not maintain a cloud media locker. Media files are played directly from local disk bytes.
              </span>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-950/60 border border-slate-850">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-400" />
              <span>2. Local Persistence &amp; Database Architecture</span>
            </h2>
            <p>
              Vimivo stores your preferences, playlists, favorites, listening statistics, and resume positions in a private SQLite database file (<code className="font-mono text-cyan-300 text-xs">vimivo.db</code>, schema version 6).
            </p>
            <p>
              This database resides within the application’s private data directory:
            </p>
            <ul className="space-y-1 font-mono text-xs text-slate-400 list-disc list-inside">
              <li>macOS: <code className="text-slate-300">~/Library/Application Support/Vimivo/</code></li>
              <li>Windows: <code className="text-slate-300">%LOCALAPPDATA%\Vimivo\</code></li>
              <li>Linux: <code className="text-slate-300">~/.local/share/vimivo/</code></li>
              <li>Android / iOS: Application private internal sandbox</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-950/60 border border-slate-850">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Radio className="w-5 h-5 text-teal-400" />
              <span>3. Network Streams &amp; User-Provided URLs</span>
            </h2>
            <p>
              Vimivo allows you to open user-provided media streams (HTTP, HTTPS, HLS, MPEG-DASH, and RTSP).
            </p>
            <p>
              When playing a remote URL:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside">
              <li>
                <strong>Direct host communication:</strong> Your device connects directly to the specified remote host. No proxy servers operated by Vimivo are involved.
              </li>
              <li>
                <strong>Host logging:</strong> The remote server provider may record standard connection details (such as your public IP address and user-agent) according to their own server logging and privacy policies.
              </li>
              <li>
                <strong>Local stream history:</strong> Stream URLs are saved locally on your device for quick access. You can clear your stream history or purge specific URLs anytime via application Settings.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-950/60 border border-slate-850">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-purple-400" />
              <span>4. Backups and Data Deletion</span>
            </h2>
            <p>
              Vimivo provides manual local backup export and import using standard JSON / SQLite format. Automatic cloud backups (such as Google Drive automatic app backup) are disabled in the application manifest.
            </p>
            <p>
              If you wish to delete all stored application data:
            </p>
            <ol className="space-y-1.5 text-xs sm:text-sm list-decimal list-inside">
              <li>In Vimivo, navigate to <strong>Settings -&gt; Library &amp; Maintenance</strong>.</li>
              <li>Tap <strong>Clear All Application Data</strong> to reset the local database.</li>
              <li>Uninstalling Vimivo from your system removes all internal application configuration and caches.</li>
            </ol>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 p-6 rounded-2xl bg-slate-950/60 border border-slate-850">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>5. Website Privacy Notice</span>
            </h2>
            <p>
              This official website (<code className="font-mono text-cyan-300 text-xs">vimivo-website</code>) is a static Next.js application.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm list-disc list-inside">
              <li>No tracking cookies or marketing pixels are used.</li>
              <li>No personal information is collected through web forms.</li>
              <li>Static assets (fonts, icons, screenshots) are served directly without third-party ad networks.</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              This document reflects the verified data architecture of Vimivo v1.0.0. It is written to provide plain-language technical clarity and is not a substitute for formal jurisdiction-specific legal counsel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
