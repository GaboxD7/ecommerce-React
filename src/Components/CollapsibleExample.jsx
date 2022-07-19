import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import Categories from './Categories';

import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand> <Link to={'/'}><img src="../../imagenes/logo-bike.png" height="80px" width="120px" alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'} className="barra-link-off" >INICIO</Link></Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="CATEGORIA" id="collasible-nav-dropdown">
              <Categories />
              {/* <NavDropdown.Item>Another action</NavDropdown.Item> */}
             {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><Link className='barra-link-off' to={'/cart'} ><CartWidget  /></Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;