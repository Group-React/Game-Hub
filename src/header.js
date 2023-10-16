import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import LoginButton from './login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logout';


function Neav() {
  let {isAuthenticated,user}=useAuth0()
  console.log(user)
  return (
    
  <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="dark" id="Navbar">
      <Container fluid>
        <Navbar.Brand href="" style={{color: "#1e1c34",fontWeight:"bolder"}}>Game hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{color: "#1e1c34"}}>Store</Nav.Link>
            <Nav.Link href="/Library" style={{color: "#1e1c34"}}>Library</Nav.Link>
            <Nav.Link href="/News" style={{color: "#1e1c34"}}>News</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        {isAuthenticated?
        <>
         <LogoutButton/>
         <Button href="/profile" id="userButton"><img src={user.picture} style={{width:"35px", height:"35px", margin:"0 10px 0 10px", borderRadius: "20px"}}></img></Button>
         </>:
         <LoginButton/> }
      </Container>
    </Navbar>

    
  );
}

export default Neav;