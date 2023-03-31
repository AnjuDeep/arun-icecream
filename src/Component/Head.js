import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import '../Css/headStyle.css'


function Head() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"> <img src="https://arunicecreams.in/images/arun-icecream-logo.png" className="logo" height="80" width="150" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-5 ms-auto">
            <Nav.Link ><Link to="/" className="list">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about" className="list">About Us</Link></Nav.Link>
            <NavDropdown className="list" title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href=""><Link to="/bar" className="list1">Bar</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/cups" className="list1">Cups</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/ibar" className="list1">Ibar</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/ibarmini" className="list1">Ibar Mini</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/icone" className="list1">Icone</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/tubs" className="list1">Tubs</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/specialities" className="list1">Specialities</Link></NavDropdown.Item> 
            </NavDropdown>
            <Nav.Link><Link to="/media" className="list">Media</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className="list">Contact Us</Link></Nav.Link>
          </Nav>
          <Nav.Link><Link to="/Login" className="list"><Image src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-127000119.jpg" style={{width:65,height:65}}/></Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Head;