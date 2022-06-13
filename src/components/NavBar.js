import React from 'react'
import Logoicon from "./../Images/logo.png" 
import "./navbar.css"

function NavBar() {
  return (
    <div className="navbarContainer">

        <div className="navbarImage">
        <img src="./../Images/logo.png"/>
        </div>

        <div className="middle">
            <ul>
                <li>Catalog</li>
                <li>Influencers Area</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="rightSide">
            
            <button>Log in</button>
            <div className="store">
                <img src=""/>
            </div>
        </div>

    </div>
  )
}

export default NavBar