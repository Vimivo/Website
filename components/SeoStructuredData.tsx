import React from 'react';

export function SeoStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Vimivo',
        alternateName: 'Vimivo Player',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Android 8.0+, macOS 12+, Windows 10+, Linux, iOS 16+',
        description:
          'Vimivo is a free, ad-free, login-free, privacy-first universal media player built with pure Rust, Kotlin Multiplatform, and hardware-accelerated playback. Features 1-tap HW/HW+/SW decoder switching, 200% volume boost, and offline Wi-Fi transfer.',
        url: 'https://vimivo.tashanto.com',
        downloadUrl: 'https://vimivo.tashanto.com/download',
        softwareVersion: '1.0.0-rc.1',
        fileSize: '151.4MB',
        license: 'https://opensource.org/licenses/MIT',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '1280',
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Person',
          name: 'TA Shanto',
          url: 'https://tashanto.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Vimivo Media',
          url: 'https://vimivo.tashanto.com',
          founder: {
            '@type': 'Person',
            name: 'TA Shanto',
            url: 'https://tashanto.com',
          },
        },
        featureList: [
          'Pure Rust core signal processing engine with UniFFI typed bindings',
          '1-tap HW, HW+, and SW hardware decoder switcher chip',
          '200% volume boost with pure Rust soft-knee limiter (zero clipping)',
          'VLC-style dynamic orientation and smart auto-rotation override',
          'A-B loop repeat precision engine',
          'Stats for Nerds live performance diagnostics HUD',
          'Simultaneous dual subtitles for language learners',
          'AES-256-GCM cryptographically secured private media vault',
          'Offline Wi-Fi hotspot high-speed file transfer',
          'Lossless video-to-audio extraction',
          'Local network storage streaming (SMB, SFTP, FTP, WebDAV, NFS)',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Vimivo completely free and ad-free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Vimivo is 100% free, open source under the MIT License, and contains zero ads, zero trackers, and zero telemetry.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who created and developed Vimivo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vimivo is designed, engineered, and developed by TA Shanto. You can learn more about TA Shanto at https://tashanto.com.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Vimivo compare to VLC and MX Player?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vimivo combines the best signature features of both players: the 1-tap HW/HW+/SW decoder switcher and muscle-memory touch gestures of MX Player, with the codec compatibility and auto-rotation override of VLC, all built with pure Rust and zero advertisements.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I install Vimivo from the terminal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can install Vimivo directly from the terminal by running: curl -fsSL https://vimivo.tashanto.com/install.sh | bash on macOS and Linux, or irm https://vimivo.tashanto.com/install.ps1 | iex on Windows.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
