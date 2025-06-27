import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ChangelogTabs from '@/components/changelog/ChangelogTabs';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    "The official RoyaleHub Changelog. See how we're improving your drop roulette with new maps, updated POIs, and bug fixes for the best random landing experience.",
};

export default function ChangelogPage() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col>
            <ChangelogTabs />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
