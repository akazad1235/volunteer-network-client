import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group-1329.png';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img style={{width:'150px'}} src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            
          </ul>
          <span className="navbar-text">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/donation" className="nav-link">Donation</Link>
            </li>
            <li className="nav-item">
              <Link to="/eventActivitis" className="nav-link">Event Task</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
            <Link to="/admin" className="nav-link ">Admin</Link>
            </li>
            <li className="nav-item">
            {loggedInUser.name? <Link className="nav-link " ><strong>{loggedInUser.name}</strong></Link>: ""}
            </li>
          </ul>
          </span>
        </div>
        </nav>
    );
};

export default Header;