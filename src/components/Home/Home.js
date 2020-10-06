import React from 'react';
import { Button, Card, CardGroup, Form, FormControl } from 'react-bootstrap';
import Event from '../Event/Event';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';

 const Home = () => {
    
    return (
        <div  style={{margin:'0 auto'}}>
            <Header></Header>
            <h2 style={{textAlign:'center'}}>I Grow By Helpig People In Need</h2>
            <Form inline className="justify-content-center m-5" >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>

            <div className="row">
                {
                    FakeData.map( events => <Event event = {events}></Event>)
                }
               
            </div>
        </div>

    );
};

export default Home;