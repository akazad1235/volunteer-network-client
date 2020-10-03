import React from 'react';
import { Button, Card, CardGroup, Form, FormControl } from 'react-bootstrap';
import Event from '../Event/Event';
import Header from '../Header/Header';


export const event = [
    {
        id:'1',
        name : 'Baby',
        img : 'babySit.png'
    },
    {
        id:'2',
        name : 'Anymel Shelter',
        img : 'animalShelter.png'
    },
    {
        id:'3',
        name : 'Bard Housing',
        img : 'birdHouse.png'
    },
    {
        id:'4',
        name : 'Clean Garden',
        img : 'babySit.png'
    },
    {
        id:'5',
        name : 'Clean Garden',
        img : 'babySit.png'
    },
    {
        id:'6',
        name : 'Clean Garden',
        img : 'babySit.png'
    }
]


 const Home = () => {
    
    return (
        <div  style={{margin:'0 auto'}}>
            <Header></Header>
            <h2 style={{textAlign:'center'}}>I Grow By Helpig People In Need</h2>
            <Form inline >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>

            <div className="row">
                {
                    event.map( events => <Event eventt = {events}></Event>)
                }
               
            </div>
        </div>

    );
};

export default Home;