'use client';

// --- React ---
import { useEffect } from 'react';
// --- Next ---
import { useRouter } from 'next/navigation';

// Define or import your redirects map
const redirects: Record<string, string> = {
  '/where-we-droppin/chapter-six/season-one': '/drop-roulette/chapter-six/season-one',
  '/where-we-droppin/chapter-six/season-two': '/drop-roulette/chapter-six/season-two',
  '/where-we-droppin/og/season-one': '/drop-roulette/og/season-one',
  '/where-we-droppin/og/season-two': '/drop-roulette/og/season-two',
  '/where-we-droppin/og/season-three': '/drop-roulette/og/season-three',
  '/where-we-droppin/reload/oasis': '/drop-roulette/reload/oasis',
  '/where-we-droppin/reload/venture': '/drop-roulette/reload/venture',
};

export default function NotFoundRedirector() {
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const newPath = redirects[currentPath];

    if (newPath) {
      if (window.location.pathname !== newPath) {
        router.replace(newPath);
      }
    }
  }, [router]);

  return null;
}
