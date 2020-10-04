import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import img from '../../images/event-img/birdHouse.png'
import { Button } from 'react-bootstrap';
import FetchTask from './FetchTask';


const EventTask = () => {

          const [eventTask, setEventTaks] = useState([]);

          
          
          useEffect(() => {
            fetch('http://localhost:5000/showEvents')
            .then( res => res.json())
            .then( data =>setEventTaks(data))
          })

    return (
        <div>
            <Header></Header>
            <div className="row">
                {
                    eventTask.map( getTask => <FetchTask fetchTask={getTask}></FetchTask>)
                }
            </div>
        </div>
    );
};

export default EventTask;