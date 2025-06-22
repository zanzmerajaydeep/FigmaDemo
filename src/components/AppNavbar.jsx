import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./appNavbar.css";
import logo from "../assets/logo.png";
import Arrow from "./Arrow";

const AppNavbar = () => {
  const navItems = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/about" },
    { label: "Our Products", route: "/products" },
    { label: "Services", route: "/services" },
    { label: "Case Studies", route: "/caseStudies" },
    { label: "Blog", route: "/blog" },
    { label: "Career", route: "/career" },
  ];
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {navItems.map((item) => (
              <Nav.Link href="#features">{item.label}</Nav.Link>
            ))}
          </Nav>
          <button className="btn-purple">Contact Us <Arrow /></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
