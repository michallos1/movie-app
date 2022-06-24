import React, { useState } from "react";
import {Link} from "react-router-dom"


function NavBar() {
const [menuOn, setMenuOn] = useState(false)


return(
<nav className="Nav-bar">
    <div className="Nav-mob" 
          onClick={() => {setMenuOn(!menuOn);}
          }>
      </div>
      <div className={menuOn ? "nav-menu-e" : "nav-menu"}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/series">Series</Link></li>
      </ul>
      </div>
    </nav>
);
}

export default NavBar;