import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Event = (props) => {

    const {id, eventName, img} = props.event;
    
    return (
        <div className="col-md-3">
                        <CardGroup>
                        <Card>
                            <Link to={`/register/${id}`}><Card.Img variant="top" src={require(`../../images/event-img/${img}`)} alt="evnt" /></Link>
                            <Card.Footer>
                            <Link to={`/register/${id}`}>{eventName}</Link>
                            </Card.Footer>
                        </Card>   
                        </CardGroup>      
        </div>
    );
};

export default Event;