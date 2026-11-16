import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { SeoStructuredData } from '@/components/SeoStructuredData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#060911',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vimivo.tashanto.com'),
  title: {
    default: 'Vimivo — Every Sound. Every Frame. | Free & Ad-Free Media Player by TA Shanto',
    template: '%s | Vimivo by TA Shanto',
  },
  description:
    'Vimivo is a privacy-first, 100% ad-free offline universal audio and video player designed and developed by TA Shanto. Built with pure Rust, hardware acceleration, 1-tap HW/HW+/SW decoder switching, 200% volume boost, and zero telemetry.',
  keywords: [
    'Vimivo',
    'Vimivo Media Player',
    'TA Shanto',
    'tashanto.com',
    'Ad-Free Media Player',
    'Free Video Player',
    'VLC Alternative',
    'MX Player Alternative',
    'Pure Rust Media Player',
    'Hardware Accelerated Video',
    'Offline Music Player',
    '10-Band Equalizer',
    'ReplayGain 2.0',
    'Dual Subtitles Player',
    'Private Video Vault',
    'Offline WiFi File Transfer',
    'Kotlin Multiplatform',
    'Compose Multiplatform',
  ],
  authors: [{ name: 'TA Shanto', url: 'https://tashanto.com' }],
  creator: 'TA Shanto',
  publisher: 'TA Shanto (https://tashanto.com)',
  alternates: {
    canonical: 'https://vimivo.tashanto.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vimivo.tashanto.com',
    title: 'Vimivo — Every Sound. Every Frame. | Crafted by TA Shanto',
    description:
      'The definitive ad-free, login-free universal media player. Built with pure Rust and native platform decoders for Android, macOS, Windows, Linux, and iOS.',
    siteName: 'Vimivo',
    images: [
      {
        url: '/images/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Vimivo — Every Sound. Every Frame.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vimivo — Every Sound. Every Frame. | By TA Shanto',
    description:
      'The definitive ad-free, login-free universal media player. Built with pure Rust and native platform decoders for Android, macOS, Windows, Linux, and iOS.',
    images: ['/images/logo.png'],
    creator: '@tashanto',
  },
  icons: {
    icon: '/images/vimivo-icon-source.png',
    apple: '/images/vimivo-icon-source.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <head>
        <SeoStructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-[#060911] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        <SiteHeader />
        <main className="flex-1 pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
