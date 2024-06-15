import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    // fixed=top
    <Navbar
      collapseOnSelect
      expand="lg"
      // style={{ borderBottom: "1px solid #000" }}
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home" as={Link} to="/">
          <img
            src="/src/assets/psm_logo.svg"
            alt=""
            width="30"
            height="30"
            className="me-2 d-inline-block align-top"
          />
          PT. PUTRA SINAR MAS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Tentang Kami
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Produk
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Kontak
            </Nav.Link>
            <Button
              variant="success"
              as={Link}
              to="/register"
              className="btn rounded-1"
            >
              Daftar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
