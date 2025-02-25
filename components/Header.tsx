import { Container, Nav, Navbar } from "react-bootstrap";

interface HeaderProps {
  className?: string;
  navLinks?: { label: string; href: string; target?: string }[];
}

const defaultNavLinks = [
  { label: "Home", href: "/", target: "" },
  { label: "Changelog", href: "/changelog" },
  { label: "Feedback", href: "/feedback", target: "" },
  {
    label: "GitHub",
    href: "https://github.com/SiloCityLabs/fortnite.silocitygames.com",
    target: "_blank",
  },
];

const navbarBrand = {
  title: "bootstrap-nextjs-github-pages",
  subtitle: "By SiloCityLabs",
}

function Header(props: HeaderProps) {
  const { className, navLinks = defaultNavLinks, darkLinks = false } = props;

  return (
    <Navbar
      id="main-header"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className={`${className}`}
    >
      <Container>
        <Navbar.Brand href="/">
          {navbarBrand.title}
          {navbarBrand.subtitle && <span className="navbar-subtitle">{navbarBrand.subtitle}</span>}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={darkLinks ? 'black-toggler' : ""} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.href}
                target={link.target ? link.target : "_self"}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
