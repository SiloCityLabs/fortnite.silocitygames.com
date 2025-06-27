// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/drop-roulette/DropRoulette';
// --- Data ---
import mapInfo from '@/data/drop-spot/battle-royale/chapter-six/season-three.json';
// --- Styles ---
import styles from '@/components/drop-roulette/DropRoulette.module.css';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Chapter 6 Season 3',
  description:
    'A heroic journey starts with the drop! Use our randomizer to pick where you land in Fortnite Chapter 6 Season 3 and start your super-powered match.',
};

export default function DropRouletteCh06S01Page() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h1 className={`${styles.rouletteTitle} text-center my-3`}>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Chapter 6 Season 3
            </h1>
            <hr />

            <DropRoulette
              map='Chapter 6 Season 3'
              button_key='br-ch6-3'
              ga_label='BrCh6-3'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
