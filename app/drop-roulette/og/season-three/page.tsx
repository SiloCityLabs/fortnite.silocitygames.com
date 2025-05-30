import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/DropRoulette';
// --- Data ---
import mapInfo from '@/json/drop-spot/og/season-one.json';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite OG Season 3',
  description:
    'Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite og season 3.',
};

export default function DropRouletteOgS03Page() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h2 className='text-center my-3'>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite OG Season 3
            </h2>
            <hr />

            <DropRoulette
              map='OG Season 3'
              button_key='br-og-3'
              ga_label='BrOg-3'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
