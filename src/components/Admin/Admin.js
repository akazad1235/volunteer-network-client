import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group-1329.png';
import userIcon from '../../images/logos/users-alt-1.png';
import plusIcon from '../../images/logos/plus-1.png';
import './Admin.css'

const Admin = () => {
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
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;