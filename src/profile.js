import Figure from 'react-bootstrap/Figure';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Profile(){

    let {isAuthenticated,user}=useAuth0()

     return (
        
       


    <Card  id="profile" style={{ width:"50%",marginTop:"7%",marginLeft:"25%",backgroundColor:"transparent",marginBottom:"16%"}}>
    {isAuthenticated?
        <div >
          
      <Figure.Image variant="top" 
            width={171}
            height={180}
            alt="171x180"
            src={user.picture} style={{marginTop:"2%",marginLeft:"2%",borderRadius:"100px"}} />
      <Card.Body>
        <Card.Title style={{color:"white"}} ><h1 >First Name: {user.given_name}</h1></Card.Title>
        </Card.Body>
        <Card.Body>
        <Card.Title style={{color:"white"}} ><h1 >Last Name: {user.family_name}</h1></Card.Title>
        </Card.Body>
        <Card.Body>
        <Card.Title style={{color:"white"}} ><h1 >Nick Name: {user.nickname}</h1></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item  style={{color:"white",backgroundColor:"transparent"}}><h1 >Email: {user.email}</h1></ListGroup.Item>
      </ListGroup>
      </div>:
          <h1 style={{color:"white",marginLeft:"25%"}}>you must login first</h1>}
    </Card>
         
        
       
      );
    }
    
export default Profile;