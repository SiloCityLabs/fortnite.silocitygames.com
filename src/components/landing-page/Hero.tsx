// --- React ---
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h1>Tired of Tilted Towers?</h1>
        <p>Let fate decide your next drop. Your next Victory Royale awaits.</p>
        <Button variant='success' size='lg' href='#drop-roulette' className='cta-button'>
          Find Your Drop Spot!
        </Button>
      </div>
    </div>
  );
};

export default Hero;
