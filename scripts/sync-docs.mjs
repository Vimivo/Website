import fs from 'node:fs';
import path from 'node:path';

const SOURCE_DOCS_DIR = '/Users/ta-shanto/Coding/products/Vimivo/docs';
const TARGET_DOCS_DIR = path.resolve(process.cwd(), 'content/docs');

if (!fs.existsSync(TARGET_DOCS_DIR)) {
  fs.mkdirSync(TARGET_DOCS_DIR, { recursive: true });
}

// Approved public documentation mapping:
// slug -> { sourceFile: relative to SOURCE_DOCS_DIR, title: string, category: string, order: number, description: string }
const APPROVED_DOCS = [
  {
    slug: 'overview',
    sourceFile: 'FEATURES.md',
    title: 'Product Overview & Architecture',
    category: 'Getting Started',
    order: 1,
    description: 'Learn about Vimivo principles, native playback engines, and core capabilities.'
  },
  {
    slug: 'installation',
    sourceFile: 'INSTALLATION_GUIDE.md',
    title: 'Installation & Setup Guide',
    category: 'Getting Started',
    order: 2,
    description: 'Step-by-step installation instructions for Android, macOS, Windows, and Linux.'
  },
  {
    slug: 'system-requirements',
    sourceFile: 'SYSTEM_REQUIREMENTS.md',
    title: 'System Requirements',
    category: 'Getting Started',
    order: 3,
    description: 'Minimum and recommended hardware, OS versions, and graphics specifications.'
  },
  {
    slug: 'keyboard-shortcuts',
    sourceFile: 'KEYBOARD_SHORTCUTS.md',
    title: 'Keyboard Shortcuts Reference',
    category: 'Getting Started',
    order: 4,
    description: 'Comprehensive keyboard shortcuts across macOS, Windows, and Linux.'
  },
  {
    slug: 'audio-playback',
    sourceFile: 'AUDIO_ENHANCEMENTS.md',
    title: 'Pro Audio Playback & Equalizer',
    category: 'Features & Media',
    order: 5,
    description: 'Gapless playback, 10-band graphic equalizer, ReplayGain clipping safety, and synchronized LRC lyrics.'
  },
  {
    slug: 'video-playback',
    sourceFile: 'CINEMATIC_VIDEO_PLAYER_PHASE_4.md',
    title: 'Hardware-Accelerated Video Player',
    category: 'Features & Media',
    order: 6,
    description: 'GPU video adjustments, aspect ratio overrides, subtitle sync (±5000ms), and frame capture.'
  },
  {
    slug: 'format-support',
    sourceFile: 'FORMAT_SUPPORT.md',
    title: 'Supported Formats & Codecs',
    category: 'Features & Media',
    order: 7,
    description: 'Full compatibility matrix for audio containers, video codecs, subtitles, and playlists.'
  },
  {
    slug: 'media-library',
    sourceFile: 'PREMIUM_MEDIA_LIBRARY_PHASE_5.md',
    title: 'Media Library & Smart Playlists',
    category: 'Organization',
    order: 8,
    description: 'Local media indexing, sorting, filtering, and AST rule-based dynamic playlists.'
  },
  {
    slug: 'metadata-editing',
    sourceFile: 'MEDIA_METADATA.md',
    title: 'Metadata Editing (Dual Modes)',
    category: 'Organization',
    order: 9,
    description: 'Mode A database overrides vs. Mode B verified embedded audio tag writing.'
  },
  {
    slug: 'file-organization',
    sourceFile: 'FILE_ORGANIZATION.md',
    title: 'Batch File Renamer & Relinking',
    category: 'Organization',
    order: 10,
    description: 'Previewable pattern renaming, collision detection, and missing media reconciliation.'
  },
  {
    slug: 'streaming-urls',
    sourceFile: 'STREAMING_PROTOCOL_SUPPORT.md',
    title: 'Network Stream Playback',
    category: 'Features & Media',
    order: 11,
    description: 'User-provided HTTP, HTTPS, HLS, DASH, and RTSP stream playback with local storage.'
  },
  {
    slug: 'platform-matrix',
    sourceFile: 'PLATFORM_SUPPORT_MATRIX.md',
    title: 'Cross-Platform Capabilities',
    category: 'Platforms & Systems',
    order: 12,
    description: 'Detailed feature matrix and engine breakdown across all five supported operating systems.'
  },
  {
    slug: 'privacy-policy',
    sourceFile: 'PRIVACY.md',
    title: 'Privacy Policy & Principles',
    category: 'Security & Trust',
    order: 13,
    description: 'Offline-first, zero telemetry, local SQLite storage, and no cloud account requirement.'
  },
  {
    slug: 'security-audit',
    sourceFile: 'SECURITY_AUDIT.md',
    title: 'Security Architecture & Auditing',
    category: 'Security & Trust',
    order: 14,
    description: 'Parser sandboxing, stream safety, permission models, and update verification.'
  },
  {
    slug: 'release-notes',
    sourceFile: 'RELEASE_NOTES_1.0.0.md',
    title: 'Release Notes (v1.0.0-rc.1)',
    category: 'Releases',
    order: 15,
    description: 'Release highlights, verification hashes, package artifacts, and platform updates.'
  },
  {
    slug: 'release-manifest',
    sourceFile: 'RELEASE_MANIFEST.md',
    title: 'Release Artifact Manifest',
    category: 'Releases',
    order: 16,
    description: 'Toolchain specs, SHA-256 hashes, and download links for verified release binaries.'
  },
  {
    slug: 'community-guidelines',
    sourceFile: 'COMMUNITY_GUIDELINES.md',
    title: 'Community Guidelines',
    category: 'Community',
    order: 17,
    description: 'Feedback channels, issue reporting, and contribution principles.'
  },
  {
    slug: 'known-issues',
    sourceFile: 'KNOWN_ISSUES.md',
    title: 'Known Issues & Workarounds',
    category: 'Community',
    order: 18,
    description: 'Current platform-specific limitations, mitigations, and upcoming improvements.'
  }
];

function sanitizeContent(raw) {
  // Strip any local filesystem paths like /Users/ta-shanto/...
  let content = raw.replace(/\/Users\/ta-shanto\/Coding\/products\/Vimivo\//g, '');
  content = content.replace(/\/Users\/ta-shanto\/Coding\/products\/vimivo-website\//g, '');
  return content;
}

console.log(`Starting documentation curation from ${SOURCE_DOCS_DIR}...`);

let syncedCount = 0;
for (const doc of APPROVED_DOCS) {
  const sourcePath = path.join(SOURCE_DOCS_DIR, doc.sourceFile);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`Warning: Source file ${sourcePath} does not exist. Skipping.`);
    continue;
  }

  const rawContent = fs.readFileSync(sourcePath, 'utf8');
  const sanitized = sanitizeContent(rawContent);

  // Generate frontmatter
  const frontmatter = `---
slug: "${doc.slug}"
title: "${doc.title}"
category: "${doc.category}"
order: ${doc.order}
description: "${doc.description}"
sourceFile: "${doc.sourceFile}"
---

`;

  const targetPath = path.join(TARGET_DOCS_DIR, `${doc.slug}.md`);
  fs.writeFileSync(targetPath, frontmatter + sanitized, 'utf8');
  console.log(`✓ Curated [${doc.category}] ${doc.slug} <- ${doc.sourceFile}`);
  syncedCount++;
}

console.log(`\nSuccessfully curated ${syncedCount} documentation articles into ${TARGET_DOCS_DIR}`);
