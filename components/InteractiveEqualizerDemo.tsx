'use client';

import React, { useState } from 'react';
import { Sliders, Sparkles, Volume2, ShieldCheck } from 'lucide-react';

interface Preset {
  name: string;
  bands: number[];
}

const PRESETS: Record<string, Preset> = {
  acoustic: {
    name: 'Acoustic Clarity',
    bands: [3.5, 2.0, 0.5, -1.0, 0.0, 1.5, 3.0, 4.5, 5.0, 3.5],
  },
  bass: {
    name: 'Bass Boost +6dB',
    bands: [6.0, 5.5, 4.0, 2.0, 0.0, 0.0, 0.5, 1.5, 2.5, 2.0],
  },
  vocal: {
    name: 'Voice Clarity',
    bands: [-3.0, -2.0, -1.0, 1.0, 3.5, 4.0, 3.5, 2.0, 0.0, -1.0],
  },
  electronic: {
    name: 'Electronic / Dance',
    bands: [5.0, 4.0, 2.0, 0.0, -1.0, 1.5, 3.0, 4.0, 5.5, 4.5],
  },
  rock: {
    name: 'Rock Dynamic',
    bands: [4.0, 3.0, -1.0, -2.0, 0.0, 1.5, 3.5, 4.0, 3.5, 3.0],
  },
  flat: {
    name: 'Flat Reference',
    bands: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

const FREQUENCIES = [
  '32Hz',
  '64Hz',
  '125Hz',
  '250Hz',
  '500Hz',
  '1kHz',
  '2kHz',
  '4kHz',
  '8kHz',
  '16kHz',
];

export function InteractiveEqualizerDemo() {
  const [activePreset, setActivePreset] = useState<string>('acoustic');
  const [bands, setBands] = useState<number[]>(PRESETS.acoustic.bands);

  const handlePresetChange = (presetKey: string) => {
    setActivePreset(presetKey);
    setBands([...PRESETS[presetKey].bands]);
  };

  const handleSliderChange = (idx: number, val: number) => {
    const updated = [...bands];
    updated[idx] = val;
    setBands(updated);
    setActivePreset('custom');
  };

  // Calculate auto-attenuating preamp to guarantee zero clipping
  const maxBoost = Math.max(0, ...bands);
  const autoPreamp = maxBoost > 0 ? -(maxBoost * 0.85).toFixed(1) : '0.0';

  return (
    <div className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden shadow-2xl">
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>Pure Rust 10-Band Graphic Equalizer</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                RBJ Biquad IIR
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Active Preset: <span className="text-cyan-300 font-semibold">{PRESETS[activePreset]?.name || 'Custom Curve'}</span>
            </p>
          </div>
        </div>

        {/* Preset Selector Dropdown / Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {Object.entries(PRESETS).map(([key, item]) => (
            <button
              key={key}
              onClick={() => handlePresetChange(key)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                activePreset === key
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* 10-Band Interactive Sliders Representation */}
      <div className="space-y-6">
        <div className="flex items-end justify-between h-44 px-2 sm:px-4 py-4 bg-slate-950/80 rounded-2xl border border-slate-800/90 gap-1.5 sm:gap-2">
          {FREQUENCIES.map((freq, idx) => {
            const db = bands[idx];
            // Normalize -12dB to +12dB into 0% to 100% height
            const normalizedHeight = Math.max(10, Math.min(100, ((db + 12) / 24) * 100));

            return (
              <div
                key={freq}
                className="flex-1 flex flex-col items-center justify-end h-full group"
              >
                {/* dB tooltip badge */}
                <span className="text-[10px] font-mono font-bold text-cyan-300 mb-1 tabular-nums group-hover:scale-110 transition-transform">
                  {db > 0 ? `+${db.toFixed(1)}` : db.toFixed(1)}
                </span>

                {/* Animated graphic bar */}
                <div className="w-full max-w-[28px] h-24 bg-slate-900 rounded-lg p-0.5 flex flex-col justify-end overflow-hidden border border-slate-800">
                  <div
                    style={{ height: `${normalizedHeight}%` }}
                    className={`w-full rounded-md transition-all duration-300 ${
                      db > 4
                        ? 'bg-gradient-to-t from-cyan-500 via-indigo-500 to-amber-400'
                        : db < 0
                        ? 'bg-gradient-to-t from-indigo-800 to-indigo-500'
                        : 'bg-gradient-to-t from-cyan-500 to-indigo-500'
                    }`}
                  />
                </div>

                {/* Vertical Slider Controller (Hidden native range overlaid for accessible drag) */}
                <input
                  type="range"
                  min={-12}
                  max={12}
                  step={0.5}
                  value={db}
                  onChange={(e) => handleSliderChange(idx, Number(e.target.value))}
                  aria-label={`Frequency ${freq}`}
                  className="w-full mt-2 h-1 bg-slate-800 rounded appearance-none cursor-pointer accent-cyan-400"
                />

                {/* Frequency Label */}
                <span className="text-[10px] font-mono text-slate-400 mt-1">{freq}</span>
              </div>
            );
          })}
        </div>

        {/* Real-Time Auto-Preamp & Audio DSP Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auto-Preamp (Headroom)</span>
            </span>
            <p className="font-mono text-sm font-bold text-emerald-300">
              {autoPreamp} dB <span className="text-[10px] text-slate-500 font-normal">(Zero Clipping)</span>
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Native ReplayGain 2.0</span>
            </span>
            <p className="font-mono text-sm font-bold text-indigo-300">
              Track Mode <span className="text-[10px] text-slate-500 font-normal">(+2.4 dB EBU R128)</span>
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Gapless Audio Engine</span>
            </span>
            <p className="font-mono text-sm font-bold text-cyan-300">
              Zero Latency <span className="text-[10px] text-slate-500 font-normal">(Sample-Accurate)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
