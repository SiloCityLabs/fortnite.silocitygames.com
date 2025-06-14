'use client';

// --- React ---
import { Container, Row, Col, Card } from 'react-bootstrap';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faMap, faRocket } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <Container className='feature-section text-center'>
      <h2>How It Works</h2>
      <Row>
        <Col md={4} className='mb-4'>
          <Card className='how-it-works-card'>
            <Card.Body>
              <div className='icon'>
                <FontAwesomeIcon icon={faMap} />
              </div>
              <Card.Title>1. Pick Your Map</Card.Title>
              <Card.Text>
                Choose from any Battle Royale, OG, or Reload map across all chapters and seasons.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='mb-4'>
          <Card className='how-it-works-card'>
            <Card.Body>
              <div className='icon'>
                <FontAwesomeIcon icon={faDice} />
              </div>
              <Card.Title>2. Spin the Wheel</Card.Title>
              <Card.Text>
                Hit the button to randomly select a named location or landmark from your chosen map.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='mb-4'>
          <Card className='how-it-works-card'>
            <Card.Body>
              <div className='icon'>
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <Card.Title>3. Drop & Dominate</Card.Title>
              <Card.Text>
                Challenge yourself with a new drop spot and adapt your strategy to conquer the
                island.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorks;
