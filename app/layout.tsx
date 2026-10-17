import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

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
    default: 'Vimivo — Every Sound. Every Frame.',
    template: '%s | Vimivo',
  },
  description:
    'Vimivo is a privacy-first, offline universal audio and video player built with Kotlin Multiplatform for Android, macOS, Windows, Linux, and iOS. Zero accounts, zero tracking, hardware-accelerated playback.',
  keywords: [
    'Vimivo',
    'Media Player',
    'Music Player',
    'Video Player',
    'Kotlin Multiplatform',
    'Compose Multiplatform',
    'Offline Player',
    'Equalizer',
    'ReplayGain',
    'libmpv',
    'Media3',
    'AVPlayer',
    'Audio Video Player',
    'TA Shanto',
  ],
  authors: [{ name: 'TA Shanto', url: 'https://tashanto.com' }],
  creator: 'TA Shanto',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vimivo.tashanto.com',
    title: 'Vimivo — Every Sound. Every Frame.',
    description:
      'A privacy-first, offline universal audio and video player built with Kotlin Multiplatform for Android, macOS, Windows, Linux, and iOS.',
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
    title: 'Vimivo — Every Sound. Every Frame.',
    description:
      'A privacy-first, offline universal audio and video player built with Kotlin Multiplatform for Android, macOS, Windows, Linux, and iOS.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/vimivo-icon-source.png',
    apple: '/images/vimivo-icon-source.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#060911] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        <SiteHeader />
        <main className="flex-1 pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
