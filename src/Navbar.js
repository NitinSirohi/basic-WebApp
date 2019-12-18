import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';


const Navbar = () =>{
    return (
        <div>
          
            <nav >
              <ul className="navbar">
                <li><NavLink to="/" exact activeClassName="current">Home</NavLink></li>
                <li><input placeholder="Search"/></li>
                <li><NavLink to="/Forms/" exact  activeClassName="current">Forms</NavLink></li>
                <li><NavLink to="/LogIn/"  exact activeClassName="current"><button style={{borderRadius:"5px", padding:"4px"}}>LogIn</button></NavLink></li>
                <li><NavLink to="/SignUp/"  exact activeClassName="current"><button style={{borderRadius:"5px",padding:"4px"}}>SignUp</button></NavLink></li>
              </ul>
            </nav>
          
        </div>
    )
  }

export default Navbar;



