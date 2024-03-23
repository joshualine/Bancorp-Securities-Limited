import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar-dark fixed-top px-3" style={{backgroundColor: '#191970'}}>
        <Container>
          <Navbar.Brand href="#home">Bancorp Securities Limited</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              
              <NavDropdown title="Reports" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/daily_reports"}>Daily Reports</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/weekly_reports"}>Weekly Reports</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/monthly_reports"}>Monthly Reports</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/yearly_reports"}>Yearly Reports</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header