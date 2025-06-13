import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/DropRoulette';
// --- Data ---
import mapInfo from '@/data/drop-spot/reload/slurp-rush.json';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Reload: Slurp Rush',
  description:
    'Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite reload slurp-rush.',
};

export default function DropRouletteSlurpRushPage() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h2 className='text-center my-3'>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Reload: Slurp Rush
            </h2>
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
