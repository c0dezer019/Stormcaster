import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Games!</Link>
      </div>
      <div className="links">
        <ul>
          <li><Link to={'/games'}>All Games</Link></li>
          <li><Link to={'/games/new'}>Add New Game</Link></li>

          {props.currentUser ?
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><a href="/logout" onClick={props.logout}>Logout</a></li>
            </>
          :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          } 
        </ul>What
      </div>
    </header>
  );
}

export default Header;
