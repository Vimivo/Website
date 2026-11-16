'use client';

import React, { useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  Sun,
  RotateCw,
  Repeat,
  Activity,
  Layers,
  Sparkles,
  Zap,
  X,
  Lock,
  Unlock,
} from 'lucide-react';

export function InteractivePlayerDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [decoderMode, setDecoderMode] = useState<'HW_PLUS' | 'HW' | 'SW'>('HW_PLUS');
  const [volume, setVolume] = useState<number>(145); // 0 - 200%
  const [brightness, setBrightness] = useState<number>(85); // 0 - 100%
  const [progress, setProgress] = useState<number>(42); // 0 - 100%
  const [orientation, setOrientation] = useState<'landscape' | 'portrait'>('landscape');
  const [abLoopState, setAbLoopState] = useState<'none' | 'pointA' | 'active'>('active');
  const [showStats, setShowStats] = useState<boolean>(false);
  const [dualSubtitles, setDualSubtitles] = useState<boolean>(true);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  // Cycle Decoder Mode
  const cycleDecoder = () => {
    if (decoderMode === 'HW_PLUS') setDecoderMode('HW');
    else if (decoderMode === 'HW') setDecoderMode('SW');
    else setDecoderMode('HW_PLUS');
  };

  // Cycle A-B Loop
  const cycleAbLoop = () => {
    if (abLoopState === 'none') setAbLoopState('pointA');
    else if (abLoopState === 'pointA') setAbLoopState('active');
    else setAbLoopState('none');
  };

  return (
    <div className="w-full glass-panel rounded-3xl p-4 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Header with Title & Interactive Chips */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Interactive Player Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Cinema-Grade Touch &amp; Gesture Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Click controls, toggle decoder chips, and experience the 200% volume boost engine live in your browser.
          </p>
        </div>

        {/* Quick Simulator Preset Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowStats(!showStats)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              showStats
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
            <span>Stats for Nerds</span>
          </button>

          <button
            onClick={() => setDualSubtitles(!dualSubtitles)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              dualSubtitles
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dual Subtitles</span>
          </button>
        </div>
      </div>

      {/* Simulated Screen / Viewport Container */}
      <div
        className={`relative mx-auto rounded-2xl overflow-hidden border border-slate-700/80 bg-[#08090D] shadow-2xl transition-all duration-500 ${
          orientation === 'landscape'
            ? 'w-full aspect-[16/9] max-h-[520px]'
            : 'w-full max-w-[340px] aspect-[9/16] min-h-[500px]'
        }`}
      >
        {/* Simulated Video Canvas / Visual Backing */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#0B0F1C] to-slate-900 flex items-center justify-center">
          {/* Animated Ambient Video Motion */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen overflow-hidden">
            <div className="w-[120%] h-[120%] -top-[10%] -left-[10%] absolute bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.25),transparent_60%)] animate-pulse" />
            <div className="w-[80%] h-[80%] bottom-0 right-0 absolute bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.2),transparent_50%)]" />
          </div>

          {/* Film Grain & Letterbox Effect */}
          <div className="text-center space-y-2 select-none relative z-10 px-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400/80 bg-slate-900/80 px-3 py-1 rounded-full border border-cyan-500/20 backdrop-blur-md">
              4K HDR 10-Bit • DCI-P3 Master (Cinema 2.39:1)
            </span>
            <p className="text-lg sm:text-2xl font-bold text-white tracking-wide">
              {isPlaying ? 'Interstellar — Flight Across the Gargantua' : 'Playback Paused'}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Pure Rust Signal Pipeline • libmpv Metal Accelerated
            </p>
          </div>
        </div>

        {/* TOP BAR OVERLAYS */}
        <div className="absolute top-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            {/* HW / HW+ / SW Signature Decoder Chip */}
            <button
              onClick={cycleDecoder}
              title="Click to cycle hardware decoder modes"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold tracking-wider transition-all duration-200 border cursor-pointer ${
                decoderMode === 'HW_PLUS'
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/20'
                  : decoderMode === 'HW'
                  ? 'bg-sky-950/80 text-sky-300 border-sky-500/50 shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-300 border-slate-600'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>
                {decoderMode === 'HW_PLUS' ? 'HW+ (Direct GPU)' : decoderMode === 'HW' ? 'HW (Platform)' : 'SW (CPU Fallback)'}
              </span>
            </button>

            {/* Screen Lock Toggle */}
            <button
              onClick={() => setIsLocked(!isLocked)}
              className="p-1.5 rounded-lg bg-black/60 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md transition-colors"
              title={isLocked ? 'Screen Locked' : 'Screen Unlocked'}
            >
              {isLocked ? <Lock className="w-3.5 h-3.5 text-amber-400" /> : <Unlock className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Right Top Bar: Rotation & Aspect */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOrientation(orientation === 'landscape' ? 'portrait' : 'landscape')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 text-slate-300 hover:text-white border border-white/10 text-xs font-medium backdrop-blur-md transition-colors"
              title="Toggle VLC-Style Smart Orientation (Bypasses System Lock)"
            >
              <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">
                {orientation === 'landscape' ? 'Landscape (Sensor)' : 'Portrait Locked'}
              </span>
            </button>

            <button
              onClick={cycleAbLoop}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border backdrop-blur-md transition-colors ${
                abLoopState === 'active'
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                  : abLoopState === 'pointA'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-black/60 text-slate-400 border-white/10'
              }`}
              title="A-B Repeat Loop Engine"
            >
              <Repeat className="w-3.5 h-3.5" />
              <span>
                {abLoopState === 'active' ? 'A-B Loop [Active]' : abLoopState === 'pointA' ? 'A [Set]' : 'A-B'}
              </span>
            </button>
          </div>
        </div>

        {/* DUAL SUBTITLES OVERLAY */}
        {dualSubtitles && (
          <>
            {/* Secondary Subtitle (Top - Bengali/Learning Language) */}
            <div className="absolute top-14 inset-x-0 text-center z-10 pointer-events-none px-4">
              <span className="inline-block px-3 py-1 rounded-md bg-black/75 text-amber-300 text-xs sm:text-sm font-medium tracking-wide shadow-md backdrop-blur-sm border border-amber-500/20">
                [সেকেন্ডারি সাবটাইটেল]: সময় একটি মাত্রা যা আমরা অতিক্রম করতে পারি
              </span>
            </div>

            {/* Primary Subtitle (Bottom Dialogue) */}
            <div className="absolute bottom-16 inset-x-0 text-center z-10 pointer-events-none px-4">
              <span className="inline-block px-3.5 py-1 rounded-md bg-black/80 text-white text-xs sm:text-base font-semibold tracking-wide shadow-lg backdrop-blur-sm border border-white/10 text-shadow">
                &quot;Time is relative, okay? It can stretch and it can squeeze.&quot;
              </span>
            </div>
          </>
        )}

        {/* CENTER GESTURE FEEDBACK HUD (Volume 200% / Brightness / Delta Seek) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex flex-col items-center gap-2">
          {/* Animated Volume Pill with 200% Boost Soft-Knee Alert */}
          {volume > 100 ? (
            <div className="px-5 py-3 rounded-2xl bg-black/85 border border-amber-500/50 shadow-2xl shadow-amber-500/20 backdrop-blur-xl flex items-center gap-3 animate-pulse-subtle">
              <Volume2 className="w-6 h-6 text-amber-400 shrink-0" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-mono font-extrabold text-amber-300 tabular-nums">
                    {volume}%
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    ⚡ BOOST
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  Pure Rust Soft-Knee Limiter Active
                </span>
              </div>
            </div>
          ) : (
            <div className="px-4 py-2.5 rounded-2xl bg-black/75 border border-white/15 shadow-xl backdrop-blur-xl flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-base font-mono font-bold text-white tabular-nums">
                {volume}%
              </span>
            </div>
          )}
        </div>

        {/* STATS FOR NERDS MODAL HUD OVERLAY */}
        {showStats && (
          <div className="absolute top-12 left-4 z-40 max-w-xs sm:max-w-sm rounded-xl bg-black/90 p-4 border border-cyan-500/30 text-xs font-mono shadow-2xl backdrop-blur-xl space-y-2 text-slate-300">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-1.5">
              <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Stats for Nerds (Live HUD)</span>
              </span>
              <button
                onClick={() => setShowStats(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
              <span className="text-slate-400">Resolution:</span>
              <span className="text-white font-semibold">3840×2160 (4K DCI)</span>
              <span className="text-slate-400">Frame Rate:</span>
              <span className="text-emerald-400 font-semibold">59.940 fps (Smooth)</span>
              <span className="text-slate-400">Video Codec:</span>
              <span className="text-white">HEVC Main 10 (HDR10)</span>
              <span className="text-slate-400">Bitrate:</span>
              <span className="text-cyan-400 font-semibold">48.6 Mbps</span>
              <span className="text-slate-400">Dropped Frames:</span>
              <span className="text-emerald-400 font-semibold">0 / 48,920 (0.00%)</span>
              <span className="text-slate-400">Hardware Decoder:</span>
              <span className="text-indigo-300">videotoolbox (Metal)</span>
              <span className="text-slate-400">Audio Stream:</span>
              <span className="text-white">FLAC 5.1 (24-bit / 96kHz)</span>
              <span className="text-slate-400">Buffer Health:</span>
              <span className="text-emerald-400 font-semibold">100% (4.8s cache)</span>
            </div>
          </div>
        )}

        {/* BOTTOM TIMELINE & TRANSPORT CONTROLS */}
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 space-y-2">
          {/* Progress Timeline Slider */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-300 tabular-nums">
              01:14:28
            </span>
            <div className="relative flex-1 group">
              <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 group-hover:h-2.5 transition-all"
              />
              {/* Simulated A-B loop markers on scrubber */}
              {abLoopState === 'active' && (
                <>
                  <div
                    style={{ left: '25%' }}
                    className="absolute top-0 w-1 h-3 -mt-0.5 bg-cyan-400 rounded-full pointer-events-none"
                    title="Loop Point A"
                  />
                  <div
                    style={{ left: '65%' }}
                    className="absolute top-0 w-1 h-3 -mt-0.5 bg-cyan-400 rounded-full pointer-events-none"
                    title="Loop Point B"
                  />
                </>
              )}
            </div>
            <span className="text-[11px] font-mono text-slate-400 tabular-nums">
              02:49:03
            </span>
          </div>

          {/* Lower Bar Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/25 transition-all"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <span className="text-xs font-semibold text-slate-200 hidden sm:inline">
                Track 04 • Gargantua Arrival
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700/80 text-cyan-300">
                10-Band EQ Active
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700/80 text-indigo-300">
                Soft-Knee Limiter
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* EXTERNAL INTERACTION SLIDERS (For visitors to test gestures easily) */}
      <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Volume Slider with 200% Boost Range */}
        <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-cyan-400" />
              <span>Volume (200% Soft-Knee Boost)</span>
            </span>
            <span
              className={`font-mono font-bold ${
                volume > 100 ? 'text-amber-400' : 'text-cyan-400'
              }`}
            >
              {volume}% {volume > 100 && '(BOOST)'}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={200}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <p className="text-[11px] text-slate-400">
            Slide past 100% to simulate Vimivo&apos;s pure Rust soft-knee limiter boost.
          </p>
        </div>

        {/* Brightness Slider */}
        <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Screen Brightness (Left Swipe)</span>
            </span>
            <span className="font-mono font-bold text-amber-400">{brightness}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <p className="text-[11px] text-slate-400">
            Replicates mobile vertical swipe gesture on the left screen edge.
          </p>
        </div>

        {/* Decoder Mode Switcher Card */}
        <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Hardware Decoder Mode</span>
            </span>
            <span className="font-mono font-bold text-emerald-400">{decoderMode}</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <button
              onClick={() => setDecoderMode('HW_PLUS')}
              className={`py-1 text-center rounded-lg text-xs font-mono font-bold transition-all ${
                decoderMode === 'HW_PLUS'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              HW+
            </button>
            <button
              onClick={() => setDecoderMode('HW')}
              className={`py-1 text-center rounded-lg text-xs font-mono font-bold transition-all ${
                decoderMode === 'HW'
                  ? 'bg-sky-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              HW
            </button>
            <button
              onClick={() => setDecoderMode('SW')}
              className={`py-1 text-center rounded-lg text-xs font-mono font-bold transition-all ${
                decoderMode === 'SW'
                  ? 'bg-slate-300 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              SW
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            MX Player&apos;s famous signature 1-tap hardware decoder switch.
          </p>
        </div>
      </div>
    </div>
  );
}
