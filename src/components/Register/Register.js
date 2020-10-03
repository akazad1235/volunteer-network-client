import React, { useContext } from 'react';
import './Register.css';
import logo from '../../images/logos/Group-1329.png';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { event } from '../Home/Home';

const Register = () => {
    let {id }= useParams();
   const singleEvent = event.find(evt => evt.id === id)

   const {name} = singleEvent;
   console.log(singleEvent);

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="wrapper">
            <img src={logo} alt="" />
            <div className="login-area">
                    <h4>Register</h4>
                    <input className="form-control" type="text" name="name"  value={loggedInUser.name}/>
                    <input className="form-control" type="text" name="name"     value={loggedInUser.email}/>
                    <input className="form-control" type="date" name="name" placeholder="date"/>
                    <input className="form-control" type="text" name="name" placeholder="Description"/>
                    <input  className="form-control" type="text" name="name"  value={name} />
                    <Button className="form-control">Register</Button>
                   
            </div>
            
        </div>
    );
};

export default Register;