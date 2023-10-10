import React from 'react';
import{ useAuth0 } from '@auth0/auth0-react';
const LoginButton =()=> {
const { loginWithRedirect } = useAuth0();
return (
<button
style={{borderRadius: "20px"}}
className="btn btn-primary btn-block"
onClick={()=> loginWithRedirect()}
>
LogIn</button>
);
};
export default LoginButton;