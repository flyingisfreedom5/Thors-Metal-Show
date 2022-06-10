import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <div class="flex-container">
    <nav className="navbar navbar-dark bg-primary">
      <span class="navbar-text">
      <Link className="navbar-brand" to="/bands">Bands</Link>
      <Link className="navbar-brand" to="/bands/new">New Band</Link>
      <span class="navbar-toggler-icon">Welcome, {user.name}</span>
      <Link className="link" to="" onClick={handleLogOut}>Log Out</Link>
      </span>
    </nav>
    </div>
  );
}