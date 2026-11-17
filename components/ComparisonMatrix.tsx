'use client';

import React from 'react';
import {
  Check,
  X,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

interface ComparisonRow {
  feature: string;
  category: string;
  vimivo: { text: string; status: 'yes' | 'partial' | 'no' };
  vlc: { text: string; status: 'yes' | 'partial' | 'no' };
  mxPlayer: { text: string; status: 'yes' | 'partial' | 'no' };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    category: 'Privacy & Trust',
    feature: 'Ad-Free, Login-Free & Zero Telemetry',
    vimivo: { text: '100% Privacy-First, Zero Ads, Zero Trackers', status: 'yes' },
    vlc: { text: 'Ad-Free & Open Source', status: 'yes' },
    mxPlayer: { text: 'Heavy Banner & Video Ads, Tracking SDKs', status: 'no' },
  },
  {
    category: 'Video Decoders',
    feature: '1-Tap HW / HW+ / SW Decoder Chip',
    vimivo: { text: 'Top Bar Chip with Live Status Colors', status: 'yes' },
    vlc: { text: 'Hidden in Advanced Preferences', status: 'no' },
    mxPlayer: { text: 'Signature 1-Tap Chip', status: 'yes' },
  },
  {
    category: 'Audio Engine',
    feature: '200% Volume Boost + Soft-Knee Limiter',
    vimivo: { text: 'Pure Rust Soft-Knee Limiter (Zero Clipping)', status: 'yes' },
    vlc: { text: '200% Boost (Can Distort on Peaks)', status: 'partial' },
    mxPlayer: { text: '200% Volume Boost', status: 'yes' },
  },
  {
    category: 'Touch Gestures',
    feature: 'Cinema-Grade Gesture Feedback HUD',
    vimivo: { text: 'OLED Glassmorphic HUD with Tabular Delta', status: 'yes' },
    vlc: { text: 'Basic Popup Toast', status: 'partial' },
    mxPlayer: { text: 'Full Touch Gestures Standard', status: 'yes' },
  },
  {
    category: 'Orientation',
    feature: 'VLC-Style System Auto-Rotate Override',
    vimivo: { text: 'Rotates Widescreen Even When Lock is On', status: 'yes' },
    vlc: { text: 'Industry Standard Auto-Rotate Override', status: 'yes' },
    mxPlayer: { text: 'Requires System Rotation or Manual Menu', status: 'partial' },
  },
  {
    category: 'Playback Tools',
    feature: 'A-B Loop Repeat Precision Engine',
    vimivo: { text: 'Dedicated Button with Boundary Bounce', status: 'yes' },
    vlc: { text: 'Desktop Only (Clunky on Mobile)', status: 'partial' },
    mxPlayer: { text: 'Nested Menu Access', status: 'partial' },
  },
  {
    category: 'Subtitles',
    feature: 'Simultaneous Dual Subtitles (Learning Mode)',
    vimivo: { text: 'Top & Bottom Dual Subtitles with Collision Avoidance', status: 'yes' },
    vlc: { text: 'Single Subtitle Track Only', status: 'no' },
    mxPlayer: { text: 'Supported', status: 'yes' },
  },
  {
    category: 'Security',
    feature: 'Private Media Vault (AES-256-GCM)',
    vimivo: { text: '100% Offline Cryptographic Vault + Brute-Force Lock', status: 'yes' },
    vlc: { text: 'No Vault Built-in', status: 'no' },
    mxPlayer: { text: 'Ad-Locked Private Folder', status: 'partial' },
  },
  {
    category: 'Connectivity',
    feature: 'Offline Wi-Fi Hotspot Web Transfer',
    vimivo: { text: 'Zero-Cable Built-in HTTP Server', status: 'yes' },
    vlc: { text: 'Basic Web Interface', status: 'partial' },
    mxPlayer: { text: 'MX Share (Promotional Ads Included)', status: 'partial' },
  },
  {
    category: 'Diagnostics',
    feature: 'Stats for Nerds (Live Performance HUD)',
    vimivo: { text: 'Live FPS, Dropped Frames, Bitrate & Buffer Health', status: 'yes' },
    vlc: { text: 'Desktop Media Info Dialog', status: 'partial' },
    mxPlayer: { text: 'Not Available', status: 'no' },
  },
  {
    category: 'Architecture',
    feature: 'Core Performance Architecture',
    vimivo: { text: 'Pure Rust Core + Swift (macOS/iOS) + Kotlin (Android) + Rust UI (Win/Linux)', status: 'yes' },
    vlc: { text: 'C / C++ Core with Platform Adapters', status: 'yes' },
    mxPlayer: { text: 'Proprietary Closed-Source Java & C++ JNI', status: 'no' },
  },
];

export function ComparisonMatrix() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Definitive Benchmark</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Vimivo vs VLC vs MX Player
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          We studied what made VLC reliable and MX Player loved by billions, combined their greatest strengths, eliminated the intrusive ads and dated interfaces, and rebuilt everything from scratch with pure Rust and modern Cinema-Grade UI.
        </p>
      </div>

      {/* Comparison Table Container */}
      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-[#08090D]/90 shadow-2xl backdrop-blur-xl">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60">
              <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-2/5">
                Feature / Capability
              </th>
              <th className="py-5 px-6 text-center w-1/5 bg-gradient-to-b from-cyan-500/10 to-transparent border-x border-cyan-500/20">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-base font-extrabold text-cyan-300">Vimivo</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
                    Recommended
                  </span>
                </div>
              </th>
              <th className="py-5 px-6 text-center w-1/5">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold text-slate-300">VLC Player</span>
                  <span className="text-[10px] font-mono text-slate-500">Classic Standard</span>
                </div>
              </th>
              <th className="py-5 px-6 text-center w-1/5">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold text-slate-300">MX Player</span>
                  <span className="text-[10px] font-mono text-slate-500">Ad-Supported</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-900/40 transition-colors"
              >
                {/* Feature Description */}
                <td className="py-4 px-6">
                  <div className="font-semibold text-white">{row.feature}</div>
                  <div className="text-[11px] text-slate-400">{row.category}</div>
                </td>

                {/* Vimivo Column (Highlighted) */}
                <td className="py-4 px-6 text-center bg-cyan-950/15 border-x border-cyan-500/20">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs font-semibold text-cyan-200">
                      {row.vimivo.text}
                    </span>
                  </div>
                </td>

                {/* VLC Column */}
                <td className="py-4 px-6 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-1">
                    {row.vlc.status === 'yes' ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : row.vlc.status === 'partial' ? (
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <AlertTriangle className="w-3 h-3" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className="text-[11px] text-slate-400">{row.vlc.text}</span>
                  </div>
                </td>

                {/* MX Player Column */}
                <td className="py-4 px-6 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-1">
                    {row.mxPlayer.status === 'yes' ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : row.mxPlayer.status === 'partial' ? (
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <AlertTriangle className="w-3 h-3" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                        <X className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className="text-[11px] text-slate-400">{row.mxPlayer.text}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
