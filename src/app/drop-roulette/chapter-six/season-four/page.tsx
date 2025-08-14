// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/drop-roulette/DropRoulette';
// --- Data ---
import mapInfo from '@/data/drop-spot/battle-royale/chapter-six/season-four.json';
// --- Styles ---
import styles from '@/components/drop-roulette/DropRoulette.module.css';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Chapter 6 Season 4',
  description:
    "It's a wild ride! The apocalypse is here, and the wasteland awaits. Use our randomizer to pick your landing spot in Fortnite Chapter 6 Season 4 and begin your post-apocalyptic adventure.",
};

export default function DropRouletteCh06S01Page() {
  return (
    <PageLayout headerLogoUrl='/icons/logo.svg' headerLogoWidth={50} headerLogoHeight={50}>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h1 className={`${styles.rouletteTitle} text-center my-3`}>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Chapter 6 Season 4
            </h1>
            <hr />

            <DropRoulette
              map='Chapter 6 Season 4'
              button_key='br-ch6-4'
              ga_label='BrCh6-4'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
