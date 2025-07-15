import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import DropRoulette from '@/components/drop-roulette/DropRoulette';
// --- Data ---
import mapInfo from '@/data/drop-spot/reload/squid-grounds.json';
// --- Styles ---
import styles from '@/components/drop-roulette/DropRoulette.module.css';

export const metadata: Metadata = {
  title: 'Drop Roulette - Fortnite Reload: Squid Grounds',
  description:
    "Don't just watch, play. Spice up your Fortnite Reload: Squid Grounds match with a random drop. Use our drop roulette and 'begin the next game' with a surprise.",
};

export default function DropRouletteSquidGroundsPage() {
  return (
    <PageLayout headerLogoUrl='/icons/logo.svg' headerLogoWidth={50} headerLogoHeight={50}>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <h1 className={`${styles.rouletteTitle} text-center my-3`}>
              Drop Roulette
              <span className='d-none d-sm-inline-block'>&nbsp;-&nbsp;</span>
              <br className='d-block d-sm-none' />
              Fortnite Reload: Squid Grounds
            </h1>
            <hr />

            <DropRoulette
              map='Reload - Squid Grounds'
              button_key='reload-squid-grounds'
              ga_label='ReloadSquidGrounds'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
