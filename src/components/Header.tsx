'use client';

// --- React ---
import React from 'react';
import { Container, Nav, Navbar, Badge } from 'react-bootstrap';
// --- Next ---
import Image from 'next/image';

interface Props {
  className?: string;
  navLinks?: { label: string; href: string; target?: string }[];
  darkLinks?: boolean;
  showBadge?: boolean;
  logoUrl?: string;
  logoWidth?: number | string;
  logoHeight?: number | string;
}

const defaultNavLinks = [
  { label: 'Home', href: '/', target: '' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Feedback', href: '/feedback', target: '' },
  { label: 'GitHub', href: process.env.NEXT_PUBLIC_APP_GITHUB_URL || '', target: '_blank' },
];

export default function Header({
  className,
  navLinks = defaultNavLinks,
  darkLinks = false,
  showBadge = false,
  logoUrl,
  logoWidth = 30,
  logoHeight = 30,
}: Props) {
  navLinks = navLinks.length > 0 ? navLinks : defaultNavLinks;

  return (
    <Navbar id='site-header' expand='lg' bg='dark' data-bs-theme='dark' className={`${className}`}>
      <Container>
        <Navbar.Brand href='/' className='position-relative d-flex align-items-center'>
          {logoUrl && (
            <Image
              src={logoUrl}
              width={Number(logoWidth)}
              height={Number(logoHeight)}
              alt={`${process.env.NEXT_PUBLIC_APP_NAME || 'Site'} Logo`}
              style={{ marginRight: '0.75rem' }}
            />
          )}
          {showBadge && (
            <Badge bg='warning' text='dark' style={{ fontSize: '.6rem', marginRight: '0.5rem' }}>
              {process.env.NEXT_PUBLIC_NAVBAR_BRAND_BADGE}
            </Badge>
          )}
          <div>
            {process.env.NEXT_PUBLIC_APP_NAME}
            {process.env.NEXT_PUBLIC_NAVBAR_BRAND_SUBTITLE && (
              <span className='navbar-subtitle'>
                {process.env.NEXT_PUBLIC_NAVBAR_BRAND_SUBTITLE}
              </span>
            )}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className={darkLinks ? 'black-toggler' : ''}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {navLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href} target={link.target ? link.target : '_self'}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
