import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/drop-roulette/DropRoulette';
// --- Data ---
import mapInfo from '@/data/drop-spot/reload/slurp-rush.json';
// --- Styles ---
import styles from '@/components/drop-roulette/DropRoulette.module.css';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Reload: Slurp Rush',
  description:
    'Get your fill of action! The Slurp Rush drop roulette instantly picks your landing spot in Fortnite Reload. Where will the juice take you? Spin now to find out!',
};

export default function DropRouletteSlurpRushPage() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h1 className={`${styles.rouletteTitle} text-center my-3`}>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Reload: Slurp Rush
            </h1>
            <hr />

            <DropRoulette
              map='Reload - Slurp Rush'
              button_key='reload-slurp-rush'
              ga_label='ReloadSlurpRush'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
