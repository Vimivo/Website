import { NextRequest, NextResponse } from 'next/server';

interface ReleaseTarget {
  filename: string;
  url: string;
  contentType: string;
}

const RELEASE_MAP: Record<string, ReleaseTarget> = {
  macos: {
    filename: 'Vimivo-1.0.0.dmg',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-1.0.0.dmg',
    contentType: 'application/x-apple-diskimage',
  },
  'macos-dmg': {
    filename: 'Vimivo-1.0.0.dmg',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-1.0.0.dmg',
    contentType: 'application/x-apple-diskimage',
  },
  android: {
    filename: 'Vimivo-1.0.0.apk',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/androidApp-release-unsigned.apk',
    contentType: 'application/vnd.android.package-archive',
  },
  'android-apk': {
    filename: 'Vimivo-1.0.0.apk',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/androidApp-release-unsigned.apk',
    contentType: 'application/vnd.android.package-archive',
  },
  'android-aab': {
    filename: 'Vimivo-1.0.0.aab',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/androidApp-release.aab',
    contentType: 'application/octet-stream',
  },
  windows: {
    filename: 'Vimivo-Setup-1.0.0.exe',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-Setup-1.0.0.exe',
    contentType: 'application/x-msdownload',
  },
  'windows-exe': {
    filename: 'Vimivo-Setup-1.0.0.exe',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-Setup-1.0.0.exe',
    contentType: 'application/x-msdownload',
  },
  linux: {
    filename: 'vimivo_1.0.0_amd64.deb',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/vimivo_1.0.0_amd64.deb',
    contentType: 'application/vnd.debian.binary-package',
  },
  'linux-deb': {
    filename: 'vimivo_1.0.0_amd64.deb',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/vimivo_1.0.0_amd64.deb',
    contentType: 'application/vnd.debian.binary-package',
  },
  ios: {
    filename: 'VimivoCoreRust.xcframework.zip',
    url: 'https://github.com/Vimivo/Player/releases/download/v1.0.0-rc.1/Vimivo-iOS-TestFlight.mobileprovision',
    contentType: 'application/octet-stream',
  },
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ platform: string }> }
) {
  const { platform } = await context.params;
  const normalizedKey = (platform || '').toLowerCase().trim();

  const target = RELEASE_MAP[normalizedKey];

  if (!target) {
    return NextResponse.json(
      {
        error: 'Platform not found',
        validPlatforms: Object.keys(RELEASE_MAP),
        documentation: 'https://vimivo.tashanto.com/download',
        developer: 'TA Shanto (https://tashanto.com)',
      },
      { status: 404 }
    );
  }

  // Direct 307 Temporary Redirect to the official artifact binary
  const response = NextResponse.redirect(target.url, 307);
  response.headers.set(
    'Content-Disposition',
    `attachment; filename="${target.filename}"`
  );
  response.headers.set('Content-Type', target.contentType);
  response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=3600');
  response.headers.set('X-Developer', 'TA Shanto (tashanto.com)');
  response.headers.set('X-Robots-Tag', 'noindex');

  return response;
}
