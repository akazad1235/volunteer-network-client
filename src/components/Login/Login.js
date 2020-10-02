import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group-1329.png';
import './Login.css';

const Login = () => {
    return (
        <div className="wrapper">
            <img src={logo} alt="" />
            <div className="login-area">
                    <h4>Loign</h4>
                    <Button>Login with Google</Button>
                    <p>Don't have an account <Link to="">Creat an account</Link></p>
            </div>
            
        </div>
    );
};

export default Login;