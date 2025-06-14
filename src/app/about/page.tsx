// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// --- CHANGE: Updated icons to be Fortnite-themed ---
import { faMapLocationDot, faTrophy, faBus } from '@fortawesome/free-solid-svg-icons';
// --- Utils ---
import { generateGithubLink } from '@silocitypages/utils';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'RoyalHub';

  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    { template: 'feature-request-template.md', labels: 'feature' }
  );

  return (
    <PageLayout>
      <Container className='main-content mt-3 mb-3'>
        <Row className='shadow-lg mt-3 p-3 bg-body rounded'>
          <h2 className='fw-bold mb-3 text-center'>About {appName}</h2>
          <Col lg={8}>
            {/* --- CHANGE: Rewrote the entire paragraph for the RoyalHub/Fortnite theme --- */}
            <p className='lead fs-6 lh-lg text-center'>
              Welcome, Looper! Jump into the action with <strong>{appName}</strong>, your go-to
              companion for mastering the ever-changing Island. Built for players who love to shake
              up their strategy, our site provides the ultimate{' '}
              <FontAwesomeIcon icon={faMapLocationDot} className='icon-spacer' size='sm' />
              <strong> Drop Roulette</strong>. Unsure where to land? Let fate decide! From the
              moment you jump from the <FontAwesomeIcon icon={faBus} className='icon-spacer' />
              <strong> Battle Bus</strong>, every match is a new adventure. Built as a{' '}
              <strong>fully open-source project</strong>, the <strong>{appName}</strong> is here to
              keep your quest for the <FontAwesomeIcon icon={faTrophy} className='icon-spacer' />
              <strong> Victory Royale</strong> fresh and exciting,{' '}
              <em>one random drop at a time</em>.
            </p>

            <h4>Tech used to build this site</h4>
            <div>
              <ul>
                <li>
                  <a
                    href='https://github.com/SiloCityLabs/SiloCityPages'
                    target='_blank'
                    rel='noopener noreferrer'
                    // --- CHANGE: Updated link color class ---
                    className='text-fort'>
                    SiloCityPages
                  </a>
                  {' - '} A framework by SiloCityLabs leveraging Bootstrap, React, and Next.js for
                  efficient static site development. Deploy seamlessly to GitHub Pages.
                </li>
                <li>
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
                    href='https://nextjs.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-fort'>
                    Next.js
                  </a>
                </li>
                <li>
                  <a
                    href='https://react-bootstrap.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-fort'>
                    React Bootstrap
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
                  {' - '} Version control software
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <h4>Contact Us</h4>
            <p>
              Have you found a bug, an error, or have a cool feature we should add to the site?
              Create a ticket on our Github{' '}
              <a href={githubLink} target='_blank' rel='noopener noreferrer' className='text-fort'>
                here
              </a>{' '}
              and we will look into it!
            </p>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
