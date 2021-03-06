import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{}, dispatch] = useStateValue();
 
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));  
    };

    return (
    <div className="login">
        <div className="login_container">
            <h1>Login</h1>

            <div className="login_text">
                <h1>Sign in to Chato</h1>
            </div>

            <button onClick={signIn}>
                Sign in with Google
            </button>
        </div>
    </div>
  );
}

export default Login;