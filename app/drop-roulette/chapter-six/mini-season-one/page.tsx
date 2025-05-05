import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/DropRoulette';
// --- Data ---
import mapInfo from '@/json/drop-spot/battle-royal/chapter-six/mini-season-one.json';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Chapter 6 Mini Season 1',
  description:
    'Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite chapter 6 mini season 1. The Star Wars season!',
};

export default function DropRouletteCh06S01Page() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h2 className='text-center my-3'>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Chapter 6 Mini Season 1
            </h2>
            <hr />

            <DropRoulette
              map='Chapter 6 Mini Season 1'
              button_key='br-ch6-1'
              ga_label='BrCh6-1'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
