import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Event = (props) => {

    const {id, eventName, img} = props.event;
    
    return (
        <div className="col-md-3">
                        <CardGroup>
                        <Card>
                                <Card.Img variant="top" src={require(`../../images/event-img/${img}`)} alt="evnt" />
                                <Card.Footer>
                                {/* <small className="text-muted"></small> */}
                                <Link to={`/register/${id}`}>{eventName}</Link>
                                
                                
                                </Card.Footer>
                        </Card>
                            
                        </CardGroup>
                       
        </div>
    );
};

export default Event;