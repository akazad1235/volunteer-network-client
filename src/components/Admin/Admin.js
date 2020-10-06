import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group-1329.png';
import userIcon from '../../images/logos/users-alt-1.png';
import plusIcon from '../../images/logos/plus-1.png';
import './Admin.css'
import { Table } from 'react-bootstrap';
import dltIcon from '../../images/logos/trash-2 9.png'

const Admin = () => {

    const [volunteerList, setVolunteerList] = useState([]);

          useEffect(() => {
            fetch('https://desolate-wave-80407.herokuapp.com/allVolunteer')
            .then( res => res.json())
            .then( data =>setVolunteerList(data))
          }, [])
        
          console.log(volunteerList);
          const deleteRegPerson= (id) => {
             const updateItem = volunteerList.filter(item => item._id !==id);
             fetch('https://desolate-wave-80407.herokuapp.com/deleteRegPerson/'+id, {
             method: 'delete'
                })
                .then(res => res.json())
                .then(result => {
                    console.log('delete success', result);
                  
                })
                setVolunteerList(updateItem)
                
          } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} alt="" style={{width: '100px', marginBottom:'30px'}} />
                    <p><span><img style={{width:'20px'}} src={userIcon} alt=""/></span><Link to="">Volantiar Register List</Link></p>
                    <p><span><img style={{width:'20px'}} src={plusIcon} alt=""/></span><Link to>Add Event</Link></p>
                </div>
                <div className="col-md-8">
                    <h4 >Voluanter User List</h4>
                    <div>
                            <div style={{padding:'20px'}}>
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Reg Date</th>
                                <th>Volunteer List</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                volunteerList.map( vlt => {   
                            return <tr>
                                <td>{vlt.name}</td>
                                <td>{vlt.email}</td>
                                <td>{vlt.dates}</td>
                                <td>{vlt.eventName}</td>
                                <td onClick={()=> deleteRegPerson(`${vlt._id}`)}><img style={{width:'50%', cursor:'pointer', borderRadius:'5px', marginLeft:'auto', marginRight:'auto', display:'block', backgroundColor:'red'}} src={dltIcon} alt=""/></td>              
                                </tr>
                            })
                            }
                             </tbody>
                             
                            </Table>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;