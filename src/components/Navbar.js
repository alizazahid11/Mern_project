import React from 'react'
import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
       <>
       <ul className="nav-ul">
           {/* adding links */}
           <li><Link to ="/">Products</Link></li>
           <li><Link to ="/add">add Products</Link></li>
           <li><Link to ="/update">update Products</Link></li>
           <li><Link to ="/logout">logout</Link></li>
           <li><Link to ="/profile">Profile</Link></li>
           <li><Link to ="/signup">Signup</Link></li>
       </ul>
       </> 
    )
}
export default Nav;