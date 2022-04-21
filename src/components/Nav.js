import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    

    return(
        <div>
        <img src="https://superfree.com/wp-content/uploads/2020/12/TRV_Logo.png"  width="140" height="140"/>
         
         <div>
          <NavLink className="nav" to="/"> 
            Homepage
          </NavLink>
          
          <NavLink  className="nav" to="/trivia"> 
            Play Trivia
          </NavLink>

          <NavLink className="nav" to="/create"> 
            Create A Question
          </NavLink>

          <NavLink className="nav" to="/about"> 
            About
          </NavLink>

          

          
         </div>

          <hr ></hr>  
       

        </div>
    );
}

export default Nav