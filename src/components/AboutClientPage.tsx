'use client';

// --- React ---
import { Container, Row, Col, Card } from 'react-bootstrap';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faTrophy, faBus } from '@fortawesome/free-solid-svg-icons';
// --- Utils ---
import { generateGithubLink } from '@silocitypages/utils';

export default function AboutClientPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'RoyaleHub';

  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    { template: 'feature-request-template.md', labels: 'feature' }
  );

  return (
    <PageLayout>
      <Container className='main-content mt-3 mb-3'>
        <Row className='justify-content-center'>
          <Col lg={10} xl={8}>
            <div className='text-center mb-4'>
              <h1 className='fw-bolder'>About {appName}</h1>
              <p className='lead text-muted'>Forged in the Storm, for the community.</p>
            </div>

            <Card className='shadow-sm mb-4'>
              <Card.Body className='p-4'>
                <h3 className='card-title fw-bold text-center'>What We&apos;re About</h3>
                <p className='lead fs-6 lh-lg text-center'>
                  Ever get stuck in a pre-game lobby, arguing with your squad over where to drop?
                  Ever feel the fatigue of landing at the same POI match after match?{' '}
                  <strong>So did we.</strong> That’s why we created <strong>{appName}</strong>.
                </p>
                <p className='fs-6 lh-lg text-center'>
                  Built for players who love to shake up their strategy, our site provides the
                  ultimate{' '}
                  <FontAwesomeIcon icon={faMapLocationDot} className='icon-spacer' size='sm' />
                  <strong> Drop Roulette</strong>. From the moment you jump from the{' '}
                  <FontAwesomeIcon icon={faBus} className='icon-spacer' />
                  <strong>Battle Bus</strong>, every match becomes a new adventure.
                </p>
              </Card.Body>
            </Card>

            <Row>
              <Col md={8}>
                <Card className='shadow-sm h-100'>
                  <Card.Body className='p-4'>
                    <h4 className='fw-bold'>Our Mission</h4>
                    <p className='fs-6'>
                      We believe the heart of the game is its unpredictability. Our mission is to
                      keep your quest for the{' '}
                      <FontAwesomeIcon icon={faTrophy} className='icon-spacer' />
                      <strong>Victory Royale</strong> fresh and exciting,{' '}
                      <em>one random drop at a time</em>.
                    </p>
                    <p className='fs-6 mb-0'>
                      As a <strong>fully open-source project</strong>, {appName} is built on
                      community feedback. We&apos;re always looking to improve.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='mt-3 mt-md-0'>
                <Card className='shadow-sm h-100 bg-light'>
                  <Card.Body className='p-4'>
                    <h4 className='fw-bold'>Contact Us</h4>
                    <p className='fs-6'>
                      Found a bug or have a cool feature idea? Create a ticket on our GitHub{' '}
                      <a
                        href={githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-fort fw-bold'>
                        here
                      </a>
                      , and we&apos;ll look into it!
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card className='shadow-sm mt-4'>
              <Card.Body className='p-4'>
                <h4 className='fw-bold'>Tech Used To Build This Site</h4>
                <ul>
                  <li>
                    <a
                      href='https://github.com/SiloCityLabs/SiloCityPages'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-fort'>
                      SiloCityPages
                    </a>
                    {' - '}A framework by SiloCityLabs leveraging Bootstrap, React, and Next.js for
                    efficient static site development.
                  </li>
                  <li>
                    <a
                      href='https://nextjs.org/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-fort'>
                      Next.js
                    </a>
                    ,{' '}
                    <a
                      href='https://react-bootstrap.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-fort'>
                      React Bootstrap
                    </a>
                    , and{' '}
                    <a
                      href='https://pages.github.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-fort'>
                      GitHub Pages
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://git-scm.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-fort'>
                      Git
                    </a>
                    {' - '} For version control.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
