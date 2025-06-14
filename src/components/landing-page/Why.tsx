// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

const Why = () => {
  return (
    <Container className='feature-section bg-light py-5'>
      <h2 className='text-center mb-4'>Why Use RoyaleHub?</h2>
      <Row className='align-items-center'>
        <Col md={4} className='text-center mb-4'>
          <div className='icon'>
            <FontAwesomeIcon icon={faSmile} className='mb-3' />
          </div>
          <h4>Break the Monotony</h4>
          <p>
            Inject pure randomness and fun into your matches. Discover new favorite landing zones
            completely by chance!
          </p>
        </Col>
        <Col md={4} className='text-center mb-4'>
          <div className='icon'>
            <FontAwesomeIcon icon={faStar} className='mb-3' />
          </div>
          <h4>Challenge Yourself</h4>
          <p>
            Master unfamiliar terrain and improve your adaptability. Become a more versatile player
            by forcing yourself out of your comfort zone.
          </p>
        </Col>
        <Col md={4} className='text-center mb-4'>
          <div className='icon'>
            <FontAwesomeIcon icon={faUsers} className='mb-3' />
          </div>
          <h4>Settle Squad Disputes</h4>
          <p>
            No more arguing over where to drop! Let the wheel decide for a fair and fun start to
            your game with your friends.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Why;
