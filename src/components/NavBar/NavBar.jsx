import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    
    <nav className="waves-effect waves-light btn-large indigo accent-2">
      <div className="nav-wrapper">
        <a href="/bands" className="brand-logo center ">Thor</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li className="waves-effect waves-light btn-small indigo accent-3"><Link to="/bands">Bands</Link></li>
            <li className="waves-effect waves-light btn-small indigo accent-3"><Link to="/bands/new">New Band</Link></li>
            <li className="text">Welcome, {user.name}</li>
            <li className="waves-effect waves-light btn-small deep-orange accent-3"><Link className="link" to="" onClick={handleLogOut}>Log Out</Link></li>
          </ul>
      </div>
    </nav>
    
  );
}