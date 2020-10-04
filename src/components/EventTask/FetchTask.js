import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/event-img/birdHouse.png'

const FetchTask = (props) => {
    const {eventName, name} =props.fetchTask;
    return (

             <div className="col-md-6 " >
                    <div className="d-flex">
                        <img style={{width:'150px'}} src={img} alt=""/>
                        <div className="description d-flex">
                            <div>
                            <h4>{name}</h4>
                            <p>{eventName}</p>
                            </div>
                            <div><Button variant="secondary">Cancel</Button></div>
                        </div>
                    </div>
                </div>
      
    );
};

export default FetchTask;