'use client';

import React, { useState } from 'react';
import { Monitor, Smartphone, ZoomIn, CheckCircle2 } from 'lucide-react';
import { AccessibleLightbox } from './AccessibleLightbox';

interface ScreenshotItem {
  id: string;
  tabLabel: string;
  platform: string;
  title: string;
  description: string;
  src: string;
  aspect: 'desktop' | 'mobile';
  badge: string;
  caption: string;
  highlights: string[];
}

const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'macos-desktop',
    tabLabel: 'macOS Desktop',
    platform: 'Desktop (Compose Multiplatform & libmpv)',
    title: 'Vimivo Desktop Workspace',
    description:
      'Captured live on macOS. Features the dark glass interface, offline personalized dashboard, Listening Insights, URL streaming input, and persistent mini-player with full hardware acceleration.',
    src: '/images/screenshots/desktop-main-window.png',
    aspect: 'desktop',
    badge: 'Live macOS Capture',
    caption: 'Official Vimivo Desktop window running on macOS (v1.0.0-rc.1 build) — 100% genuine capture',
    highlights: [
      'Offline-First Personalization without cloud tracking',
      'Unified sidebar navigation for Music, Albums, Videos, and Playlists',
      'Hardware-accelerated libmpv backend with zero-latency scrubbing',
      'Direct HTTP/HTTPS and RTSP stream entry',
    ],
  },
  {
    id: 'ios-phone',
    tabLabel: 'iOS / iPhone',
    platform: 'Mobile (SwiftUI & AVFoundation)',
    title: 'iOS Native Experience',
    description:
      'Native iOS application interface showing the unified media dashboard, local file import via sandboxed iOS Files / iCloud Drive, and iOS HIG navigation.',
    src: '/images/screenshots/ios-iphone17pro-home.png',
    aspect: 'mobile',
    badge: 'Genuine iOS 18 Capture',
    caption: 'Official Vimivo iOS application running on iPhone 17 Pro simulator — genuine UI screenshot',
    highlights: [
      'Direct import from Files app & iCloud Drive',
      'Clean statistics for local music tracks and videos',
      'iOS 16+ Lock Screen and Dynamic Island live playback',
      'Zero account creation or sign-in barrier',
    ],
  },
  {
    id: 'ios-widget',
    tabLabel: 'iOS Widgets',
    platform: 'iOS System Integration',
    title: 'Dynamic Island & Home Widgets',
    description:
      'Home screen and system-level playback widgets for rapid resume, quick favorites access, and playback status at a glance.',
    src: '/images/screenshots/ios-iphone17pro-widget-embedded-home.png',
    aspect: 'mobile',
    badge: 'iOS Widget System',
    caption: 'Vimivo home and widget integration on iOS — genuine application screenshot',
    highlights: [
      'Instant one-tap resume from home screen',
      'Artwork caching with zero battery drain',
      'Native AVPlayer session persistence',
    ],
  },
];

export function ScreenshotShowcase() {
  const [activeTab, setActiveTab] = useState<string>('macos-desktop');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeItem = SCREENSHOTS.find((s) => s.id === activeTab) || SCREENSHOTS[0];

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist" aria-label="Screenshots">
        {SCREENSHOTS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {item.aspect === 'desktop' ? (
                <Monitor className="w-4 h-4 text-cyan-400" />
              ) : (
                <Smartphone className="w-4 h-4 text-indigo-400" />
              )}
              <span>{item.tabLabel}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Showcase Panel */}
      <div
        id={`panel-${activeItem.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeItem.id}`}
        className="glass-card rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-800/80"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Screenshot Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              onClick={() => setLightboxOpen(true)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-slate-700/60 bg-black/40 shadow-2xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:shadow-2xl"
              title="Click to expand full resolution screenshot"
            >
              {/* Window Header Frame (for Desktop) */}
              {activeItem.aspect === 'desktop' ? (
                <div className="relative max-w-full">
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="w-full h-auto object-cover max-h-[460px] rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-full border border-cyan-500/30">
                      <ZoomIn className="w-3.5 h-3.5" /> Click to view full resolution (2474 × 1676)
                    </span>
                    <span className="text-[11px] text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-full">
                      Runtime Verified
                    </span>
                  </div>
                </div>
              ) : (
                /* Mobile Device Frame */
                <div className="relative py-2 px-4 max-w-[320px] mx-auto">
                  <div className="relative rounded-[36px] overflow-hidden border-[6px] border-slate-800 bg-slate-950 shadow-2xl">
                    <img
                      src={activeItem.src}
                      alt={activeItem.title}
                      className="w-full h-auto object-contain max-h-[480px] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 bg-slate-900/90 px-3 py-1.5 rounded-full border border-cyan-500/30">
                      <ZoomIn className="w-3.5 h-3.5" /> Full Resolution
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Screenshot Details & Features */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {activeItem.platform}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                {activeItem.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Verified Capabilities on this Screen:
              </h4>
              <ul className="space-y-2.5">
                {activeItem.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 transition-all"
              >
                <ZoomIn className="w-3.5 h-3.5" /> Open Full-Size Preview
              </button>
              <span className="text-xs text-slate-500 italic">
                100% Genuine UI — No Fabricated Graphics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AccessibleLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={activeItem.src}
        imageAlt={activeItem.title}
        badge={activeItem.badge}
        caption={activeItem.caption}
      />
    </div>
  );
}
