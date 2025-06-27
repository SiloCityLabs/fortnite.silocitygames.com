// --- Next ---
import type { Metadata } from 'next';
// --- Components ---
import AboutClientPage from '@/components/AboutClientPage';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about RoyaleHub, the ultimate drop roulette for Fortnite. Discover our mission to make every match a new adventure and see how our open-source tool is built.',
};

export default function AboutPage() {
  return <AboutClientPage />;
}
