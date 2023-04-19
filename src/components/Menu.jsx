import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/img/logo-digimon.png";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" width="80px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link text-decoration-none text-white" to="/">
            Inicio
          </NavLink>

          <NavLink className="nav-link text-decoration-none text-white" to="/galeria">
            Galería
          </NavLink>

          <NavLink className="nav-link text-decoration-none text-white" to="/resumen">
            Resumen
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Menu;
