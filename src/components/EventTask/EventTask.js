import React from 'react';
import Header from '../Header/Header';
import img from '../../images/event-img/birdHouse.png'
import { Button } from 'react-bootstrap';


const EventTask = () => {

             
    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="col-md-6 " >
                    <div className="d-flex">
                        <img style={{width:'150px'}} src={img} alt=""/>
                        <div className="description d-flex">
                            <div>
                            <h4>House Forest</h4>
                            <p>10 april 2020</p>
                            </div>
                            <div><Button variant="secondary">Cancel</Button></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex">
                        <img style={{width:'150px'}} src={img} alt=""/>
                        <div className="description d-flex">
                            <div>
                            <h4>House Forest</h4>
                            <p>10 april 2020</p>
                            </div>
                            <div><Button variant="secondary">Cancel</Button></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventTask;