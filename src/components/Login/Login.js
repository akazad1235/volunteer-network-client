import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/Group-1329.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
             const signedInUser = {name: displayName, email} 
             setLoggedInUser(signedInUser);
             history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="wrapper">
            <img src={logo} alt="" />
            <div className="login-area">
                    <h4>Loign</h4>
                    <Button onClick={handleGoogleSignIn}>Login with Google</Button>
                    <p>Don't have an account <Link to="">Creat an account</Link></p>
            </div>
            
        </div>
    );
};

export default Login;