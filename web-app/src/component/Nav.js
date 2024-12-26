import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Book a Table</Link>
        </li>
        {/* Other nav items */}
      </ul>
    </nav>
  );
}

export default Nav;
