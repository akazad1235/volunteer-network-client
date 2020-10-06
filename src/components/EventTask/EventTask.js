import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import './EventTask.css'


const EventTask = () => {
         const [loggedInUser, setLoggedInUser] = useContext(UserContext) 
         const [eventTask, setEventTaks] = useState([]);

          useEffect(() => {
            fetch('https://desolate-wave-80407.herokuapp.com/showEvents?email='+loggedInUser.email)
            .then( res => res.json())
            .then( data =>setEventTaks(data))
          }, [])

          console.log(eventTask);
         const  deleteItem = (id) =>{
                const updateTask = eventTask.filter(items => items._id !==id )
                fetch('https://desolate-wave-80407.herokuapp.com/delete/'+id, {
                    method: 'delete'
                })
                .then(res => res.json())
                .then(result => {
                    console.log('delete success', result);
                })
                setEventTaks(updateTask);
          }

    return (
        <div className="bg">
            <Header></Header>
            <div className="row">
                {
                    eventTask.map( getTast => {
                    return<div className="col-md-6 ">
                           <div className="d-flex mb-4 bg-task">
                            <img style={{width:'150px'}} src={require(`../../images/event-img/${getTast.img}`)} alt=""/>
                            <div className="description d-flex ml-3">
                                <div>
                                <h4>{getTast.eventName}</h4>
                                <p>{getTast.dates}</p>
                                </div>
                                <div className="mt-5"><Button variant="secondary" onClick={ ()=> deleteItem(`${getTast._id}`)}>Cancel</Button></div>
                            </div>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    );
};

export default EventTask;