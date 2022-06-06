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
    <div className="flex-container">
    <nav className="flex-item">
      <Link className="link" to="/bands">Bands</Link>
      &nbsp; | &nbsp;
      <Link className="link" to="/bands/new">New Band</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link className="link" to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    </div>
  );
}