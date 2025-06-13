// --- Layout ---
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/landing-page/Hero';
import HowItWorks from '@/components/landing-page/HowItWorks';
import DropRoulette from '@/components/landing-page/DropRoulette';
import Why from '@/components/landing-page/Why';
// --- Styles ---
import '@/public/styles/landing.css';

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <HowItWorks />
      <DropRoulette />
      <Why />
    </PageLayout>
  );
}
