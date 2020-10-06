import React, { useContext, useState } from 'react';
import './Register.css';
import logo from '../../images/logos/Group-1329.png';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { event } from '../Home/Home';
import FakeData from '../FakeData/FakeData';

const Register = () => {
    let history = useHistory();
    let {id }= useParams();
   const singleEvent = FakeData.find(evt => evt.id === id)

   const {eventName, img} = singleEvent;
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [inputData, setInputData] = useState({})
    const [inputDate, setInputDate] = useState({})


 const handleInput = (e) => {
    setInputData({ [e.target.name]: e.target.value})
 }
 const handleInputDate = (e) => {
    setInputDate({ [e.target.name]: e.target.value})
 }


    const handleRegister = () => {
        history.push("/eventActivitis");
        const newVolunteer = {eventName,img,  ...loggedInUser,...inputData, ...inputDate};
        fetch('https://desolate-wave-80407.herokuapp.com/addUser', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
        })
   
    }
  
    return (
        <div className="wrapper">
            <img src={logo} alt="" />
            <div className="login-area">
                    <h4>Register</h4>


                    <form >
                       <input className="form-control" type="text" name="name"    value={loggedInUser.name} />
                        <input className="form-control" type="text"  name="email"  value={loggedInUser.email}/>
                        <input  className="form-control"type="text" name="desc"  onBlur={(e) => handleInput(e)}/>
                        <input className="form-control" type="date" name="dates"  onBlur={(e) => handleInputDate(e)}/>
                        <input  className="form-control" type="text" name="eventName" value={eventName}   />
                        <Button onClick={handleRegister}  >Add User</Button>
                        
                    </form>
                   
            </div>
            
        </div>
    );
};

export default Register;