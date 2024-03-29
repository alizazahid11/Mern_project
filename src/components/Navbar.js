import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
      localStorage.clear();
     navigate('/signup') //it will check whenever any route change in our application it will redirect thhe component
    }
    return (
        <>
          <div>
            
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"/>
            {

            auth?
            <ul className="nav-ul">
              {/* adding links */}
              <li><Link to="/">Products</Link></li>
              <li><Link to="/add">Add Products</Link></li>
              <li><Link to="/update">Update Products</Link></li>
             <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
             </ul>
:<ul className="nav-ul nav-right">
             
                  
                    <li><Link to="/signup">Signup</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      </ul>
                
                  }
           
          </div>
        </>
      );
      
    
}
export default Nav;