import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/DropRoulette';
// --- Data ---
import mapInfo from '@/json/drop-spot/og/season-two.json';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite OG Season 2',
  description:
    'Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite og season 2.',
};

export default function DropRouletteOgS02Page() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h2 className='text-center my-3'>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite OG Season 2
            </h2>
            <hr />

            <DropRoulette
              map='OG Season 2'
              button_key='br-og-2'
              ga_label='BrOg-2'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
