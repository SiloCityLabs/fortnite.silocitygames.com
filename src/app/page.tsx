import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import SclBadge from '@/components/_silabs/SclBadge';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDice } from '@fortawesome/free-solid-svg-icons';
// --- Data ---
import generatorList from '@/data/index/drop-spot-list.json';

export default function HomePage() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <h3 className='text-center my-3'>RoyaleHub</h3>
        <Row className='shadow-lg p-3 bg-body rounded'>
          <Col lg={8} className='p-3'>
            <p className='lead fs-6 lh-lg text-center'>
              Tired of dropping at the same old named locations every match? Break the cycle and
              inject <strong>pure randomness</strong> into your Fortnite games with our{' '}
              <FontAwesomeIcon icon={faMapMarkerAlt} className='icon-spacer' />{' '}
              <FontAwesomeIcon icon={faDice} className='icon-spacer' />{' '}
              <strong>Random Drop Spot generator</strong>! Whether you&apos;re looking to explore
              forgotten corners of the map, challenge yourself with unfamiliar terrain, or simply
              let fate decide your starting point, one click is all it takes to get a completely
              random POI or landmark for your next jump. Ditch the routine,{' '}
              <strong>embrace the chaos</strong>, and discover your next favorite landing zone
              completely by chance!
            </p>

            {/* <p className="lead fs-6 lh-lg text-center">
              But why stop at just the drop? Truly test your{" "}
              <strong>adaptability</strong> with our{" "}
              <FontAwesomeIcon icon={faCrosshairs} className="icon-spacer" />{" "}
              <FontAwesomeIcon icon={faDice} className="icon-spacer" />{" "}
              <strong>Random Loadout Generator</strong>. Forget sticking to your
              comfort weapons &ndash; we&apos;ll assign you a random set of gear
              to scavenge for, pushing you to master different playstyles. Will
              you be challenged to secure a Victory Royale{" "}
              <FontAwesomeIcon icon={faTrophy} className="icon-spacer" /> with
              an unconventional setup? Maybe you&apos;ll roll a loadout
              demanding you find and master the powerful{" "}
              <FontAwesomeIcon icon={faShieldHalved} className="icon-spacer" />{" "}
              <strong>Ballistic Shield</strong> alongside specific support
              items. Step out of the meta, sharpen your skills with any weapon,
              and prove you can win no matter what gear fate hands you!
            </p> */}
          </Col>
          <Col lg={4}>
            {generatorList.map((item) => (
              <div key={`item-${item.title}`}>
                <h5 className='text-center'>{`${item.title} - Drop Roulette`}</h5>
                <hr />
                <div className='d-flex flex-wrap gap-2 mb-3 justify-content-center'>
                  {item.drops.map((drops) => (
                    <Link
                      key={drops.title}
                      href={drops.link}
                      className='text-decoration-none'
                      passHref>
                      <SclBadge name={drops.title} variant='success' />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
