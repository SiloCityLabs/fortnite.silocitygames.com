import { Card, Button } from 'react-bootstrap';
//Types
import { CardProps } from '@/types/GeneratorCard';

function GeneratorCard(props: CardProps) {
  return (
    <Card style={{ width: '18rem' }} className='mx-auto h-100 d-flex flex-column'>
      {/* <Card.Img variant="top" src="https://placehold.co/100x100" /> */}
      <Card.Body className='d-flex flex-column flex-grow-1'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className='d-grid gap-2 mt-auto'>
          {props.buttons.map((button, index) => (
            <Button
              key={index} // Important: Add a unique key for each button in the loop
              variant={props.variant}
              href={button.link}
              size='sm'
              disabled={button.disabled}>
              {button.btnText}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default GeneratorCard;
