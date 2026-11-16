import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'install.sh');
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        'X-Developer': 'TA Shanto (tashanto.com)',
      },
    });
  } catch {
    return new NextResponse('#!/usr/bin/env bash\necho "Installer unavailable"\n', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
