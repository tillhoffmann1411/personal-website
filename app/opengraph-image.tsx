import { ImageResponse } from 'next/og';
import { siteContent } from '@/lib/data/site-content';

export const alt = 'Till Hoffmann — Freelance Softwareentwickler & Gründer in Köln';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          color: '#fafafa',
          padding: '72px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 6, color: '#4fb84c' }}>
          {siteContent.availability.toUpperCase()}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2 }}>
            {siteContent.name}
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#a1a1aa', marginTop: 16 }}>
            {siteContent.role}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 26,
            letterSpacing: 4,
            color: '#71717a',
            borderTop: '2px solid #27272a',
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex' }}>till-hoffmann.me</div>
          <div style={{ display: 'flex' }}>{siteContent.location.toUpperCase()}</div>
        </div>
      </div>
    ),
    size,
  );
}
