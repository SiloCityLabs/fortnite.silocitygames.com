import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/drop-roulette/DropRoulette';
// --- Data ---
import mapInfo from '@/data/drop-spot/og/season-four.json';
// --- Styles ---
import styles from '@/components/drop-roulette/DropRoulette.module.css';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite OG Season 5',
  description:
    'Drift into the action! Season 5 brings new worlds to explore with the arrival of the All-Terrain Kart and the mysterious Viking ship. Will you drop into the sandy paradise of Paradise Palms, hit the links at Lazy Links, or ride the rifts to victory?',
};

export default function DropRouletteOgS03Page() {
  return (
    <PageLayout headerLogoUrl='/icons/logo.svg' headerLogoWidth={50} headerLogoHeight={50}>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h1 className={`${styles.rouletteTitle} text-center my-3`}>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite OG Season 5
            </h1>
            <hr />

            <DropRoulette
              map='OG Season 5'
              button_key='br-og-5'
              ga_label='BrOg-5'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
