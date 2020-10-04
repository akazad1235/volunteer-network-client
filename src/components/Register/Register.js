import React, { useContext, useState } from 'react';
import './Register.css';
import logo from '../../images/logos/Group-1329.png';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { event } from '../Home/Home';

const Register = () => {
    let {id }= useParams();
   const singleEvent = event.find(evt => evt.id === id)

   const {eventName, img} = singleEvent;
   //console.log(img);

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //new date and description
    const [inputData, setInputData] = useState({})
    const [inputDate, setInputDate] = useState({})




    // const handleDate = (date) => {
    //     const newDate = {...inputData}
    //     newDate.dates = date;
    //     setInputData(newDate)
    // }
    // const handleDesc = (desc) => {
    //     const newDesc = {...inputData}
    //     newDesc.desc = desc;
    //     setInputData(newDesc)
    // }

    // const handleDesc = (e)=> {
    //        const desc =  e.target.value;
    //       // console.log(desc);
    //        setInputData(desc)
    // }

 const handleInput = (e) => {
    setInputData({ [e.target.name]: e.target.value})
 }
 const handleInputDate = (e) => {
    setInputDate({ [e.target.name]: e.target.value})
 }
 console.log({inputData});
 console.log({inputDate});

    const handleRegister = (e) => {
        //let dates = e.target.value;
        const newVolunteer = {eventName,img,  ...loggedInUser,...inputData, ...inputDate};
        fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
        })
        e.preventDefault();
    }
    return (
        <div className="wrapper">
            <img src={logo} alt="" />
            <div className="login-area">
                    <h4>Register</h4>
                    {/* <input className="form-control" type="text"    value={loggedInUser.name}/>
                    <input className="form-control" type="text"    value={loggedInUser.email}/>
                    <input className="form-control"   type="date" name="date"     placeholder="date"/>
                    <input className="form-control" onBlur={handleDesc} type="text" name="description"     placeholder="Description"/>
                    <input  className="form-control" type="text" name="name"    value={eventName} />
                    <Button className="form-control" onClick={handleRegister}>Register</Button> */}

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