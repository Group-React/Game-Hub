import Figure from 'react-bootstrap/Figure';
import { useAuth0 } from '@auth0/auth0-react';

function Profile(){

    let {isAuthenticated,user}=useAuth0()

     return (
        
        <Figure >
           {isAuthenticated?
        <div style={{backgroundColor:"#5D6D7E", marginLeft:"30%", marginTop:"5%", width:"150%"}}>
         <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={user.picture} 
            />
            <Figure.Caption>
          <h1 style={{color:'white'}}>{user.name}</h1>
          <h1 style={{color:"white"}}>{user.email}</h1>
          </Figure.Caption>
       
         
         </div>:
          <h1></h1>}
            
          
          
          
          
          
          
          
        </Figure>
      );
    }
    
export default Profile;