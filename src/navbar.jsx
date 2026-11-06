import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import brandImg from "./assets/brand.png";
import { FaUser, FaShoppingBag } from "react-icons/fa";
const NavBar = () => {
  return (
    
      <Navbar
        expand="lg"
        className="fixed-top py-0"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(10px)",
          webkitBackdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Container className="py-0">
        <Link to="/">
          <img
            src={brandImg}
            alt="Brand Logo"
            style={{ width: "90px", height: "auto" }}
            className="mx-5 py-0"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 py-0">
            <Nav.Link as={NavLink} to="/" style={{ color: "#2b1f1a" }}>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={{ color: "#2b1f1a" }}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" style={{ color: "#2b1f1a" }}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="mx-5" style={{ backgroundColor: "2b1f1a" }}>
          <FaUser style={{ color: "#ebdcc0" }} className="fs-5" />
        </div>
        <div className="me-5" style={{ backgroundColor: "2b1f1a" }}>
          <FaShoppingBag style={{ color: "#ebdcc0" }} className="fs-5" />
        </div>
        </Container>
      </Navbar>
    
  );
};
export default NavBar;
