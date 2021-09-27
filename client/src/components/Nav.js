import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <Link to="/">Cocktailist</Link>
        <div className="nav-button">
          <button>search</button>
          <button>login</button>
        </div>
      </div>
      <div className="nav-middle">
        <Link to="/cocktaillist">Cocktail List</Link>
        <Link to="/community">Community</Link>
      </div>
    </div>
  );
};

export default Nav;
