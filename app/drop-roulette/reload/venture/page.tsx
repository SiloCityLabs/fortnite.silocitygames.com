import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/DropRoulette';
// --- Data ---
import mapInfo from '@/json/drop-spot/reload/venture.json';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Reload: Venture',
  description:
    'Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite reload venture.',
};

export default function DropRouletteVenturePage() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h2 className='text-center my-3'>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Reload: Venture
            </h2>
            <hr />

            <DropRoulette
              map='Reload - Venture'
              button_key='reload-venture'
              ga_label='ReloadVenture'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
