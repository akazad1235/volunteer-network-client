import React from 'react';
import { Button } from 'react-bootstrap';


const FetchTask = (props) => {
    const deleteItem = (id) => {
       // console.log(id);
        fetch('http://localhost:5000/delete/'+id, {
            method: 'delete'

        })
        .then(res => res.json())
        .then(result => {
            console.log('delete success', result);
        })

    }
    const {_id, eventName, name, img} =props.fetchTask;
    return (

             <div className="col-md-6 " >
                    <div className="d-flex">
                        <img style={{width:'150px'}} src={require(`../../images/event-img/${img}`)} alt=""/>
                        <div className="description d-flex">
                            <div>
                            <h4>{name}</h4>
                            <p>{eventName}</p>
                            </div>
                            <div><Button variant="secondary" onClick={ () => deleteItem(`${_id}`)} >Cancel</Button></div>
                        </div>
                    </div>
                </div>
      
    );
};

export default FetchTask;