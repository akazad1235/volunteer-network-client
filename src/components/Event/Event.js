import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import event from '../../images/event-img/babySit.png';

const Event = (props) => {

    const {id, eventName, img} = props.eventt;
    
    return (
        <div className="col-md-3">
                        <CardGroup>
                        <Card>
                                <Card.Img variant="top" src={event} alt="evnt" />
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