import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Favorit from './Library';
import LoginButton from './login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logout';

function Neav() {
  let {isAuthenticated,user}=useAuth0()
  console.log(user)
  return (
    
  <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="dark" class="navbar">
      <Container fluid>
        <Navbar.Brand href="">Gaming_hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Store">Store</Nav.Link>
            <Nav.Link href="/Library">Library</Nav.Link>
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                News
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profile">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {isAuthenticated?
        <>
         <LogoutButton/>
         <img src={user.picture} style={{width:"35px", height:"35px", margin:"0 10px 0 10px"}}></img>
         <h6 style={{color:'white'}}>{user.name}</h6>
         </>:
         <LoginButton/> }
      </Container>
    </Navbar>

    
  );
}

export default Neav;