import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/drop-roulette/DropRoulette';
// --- Data ---
import mapInfo from '@/data/drop-spot/blitz-royale/oathbound-citadel.json';
// --- Styles ---
import styles from '@/components/drop-roulette/DropRoulette.module.css';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Blitz Royale Oathbound Citadel',
  description:
    'No time to hesitate. Blitz Royale is a five-minute frenzy of action. Our drop roulette picks your landing spot instantly so you can get into the fight faster than anyone else.',
};

export default function DropRouletteBlitzRoyaleS01Page() {
  return (
    <PageLayout headerLogoUrl='/icons/logo.svg' headerLogoWidth={50} headerLogoHeight={50}>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h1 className={`${styles.rouletteTitle} text-center my-3`}>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Blitz Royale Oathbound Citadel
            </h1>
            <hr />

            <DropRoulette
              map='Fortnite Blitz Royale Oathbound Citadel'
              button_key='br-blitz-oathbound-citadel'
              ga_label='BrBlitz-oathbound-citadel'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
