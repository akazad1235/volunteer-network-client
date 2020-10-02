import React from 'react';
import './Register.css';
import logo from '../../images/logos/Group-1329.png';
import { Button } from 'react-bootstrap';

const Register = () => {
    return (
        <div className="wrapper">
            <img src={logo} alt="" />
            <div className="login-area">
                    <h4>Register</h4>
                    <input className="form-control" type="text" name="name"  value="Ak azad"/>
                    <input className="form-control" type="text" name="name" value="akazad914@gmail.com"/>
                    <input className="form-control" type="text" name="name" placeholder="date"/>
                    <input className="form-control" type="text" name="name" placeholder="Description"/>
                    <input  className="form-control" type="text" name="name"  value="house macker"/>
                    <Button className="form-control">Register</Button>
                   
            </div>
            
        </div>
    );
};

export default Register;