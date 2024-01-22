import React from 'react'
import {Link} from 'react-router-dom'

const Nav=()=>{
    const auth=localStorage.getItem('user');
    return (
        <>
          <div>
            <ul className="nav-ul">
              {/* adding links */}
              <li><Link to="/">Products</Link></li>
              <li><Link to="/add">Add Products</Link></li>
              <li><Link to="/update">Update Products</Link></li>
      
              <li><Link to="/profile">Profile</Link></li>
              {auth ? 
                <li><Link to="/logout">Logout</Link></li>
              
                :<li><Link to="/signup">Signup</Link></li>
              }
            </ul>
          </div>
        </>
      );
      
    
}
export default Nav;