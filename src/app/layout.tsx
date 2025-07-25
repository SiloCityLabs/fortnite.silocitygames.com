import { Suspense } from 'react';
// --- Next ---
import type { Metadata, Viewport } from 'next';
import { Inter, Bangers } from 'next/font/google';
// --- Components ---
import { GoogleAnalytics } from '@silocitypages/ui-core';
import { WebSite, WithContext } from 'schema-dts';
import { StructuredData } from '@silocitypages/utils';
// --- FontAwesome ---
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// --- Styles ---
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/public/styles/_fw.css';
import './globals.css';

// --- Environment Variables ---
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_APP_GA_TRACKING_ID;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'SiloCityPages';
const APP_DESC = process.env.NEXT_PUBLIC_APP_DESC || 'Default description';
const APP_KEYWORDS = process.env.NEXT_PUBLIC_APP_KEYWORDS || 'default, keywords';

// --- Metadata ---
// Define static metadata for the entire application
export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`, // Example: "About | SiloCityPages"
  },
  description: APP_DESC,
  keywords: APP_KEYWORDS?.split(',').map((k) => k.trim()),
  manifest: '/manifest.json',
  appleWebApp: { title: 'Royale Hub', statusBarStyle: 'default', capable: true },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    // For the Apple touch icon
    apple: { url: '/apple-icon.png', type: 'image/png' },
  },
};

// --- Viewport ---
export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1 };

// Setup a font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bangers = Bangers({ subsets: ['latin'], weight: '400', variable: '--font-bangers' });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RoyaleHub',
    url: 'https://fortnite.silocitygames.com/',
  };

  return (
    <html lang='en'>
      <head>
        <StructuredData data={websiteSchema} />
      </head>

      <body className={`${inter.variable} ${bangers.variable}`}>
        {children}

        {GA_TRACKING_ID && (
          <Suspense fallback={null}>
            <GoogleAnalytics gaId={GA_TRACKING_ID} />
          </Suspense>
        )}
      </body>
    </html>
  );
}
