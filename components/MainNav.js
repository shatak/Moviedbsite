import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Akshat Jain</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Movies</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
