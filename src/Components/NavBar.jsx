import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


function NavBar(){
return(
    <>
    <div>
    <Navbar className="navbar" sticky="top" variant="light" style={{ backgroundColor: 'white'}}>
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="https://i.postimg.cc/Y03SM7cn/logo2023.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="botonera">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="/#quienes">¿Quiénes somos?</Nav.Link>
            <Nav.Link as={Link} to="/areas">Áreas de Práctica</Nav.Link>
            <NavDropdown title="Contacto" id="basic-nav-dropdown">
              {/* <NavDropdown.Item as={Link} to="/contacto">E-mail</NavDropdown.Item> */}
              <NavDropdown.Item href="https://api.whatsapp.com/send?phone=1130317308" target="blank">Whatsapp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#footer">
              Información de Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  </>
    );
}

export default NavBar
