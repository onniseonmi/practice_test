import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Nav = () => {
  const loginHandler = () => {
    const loginModal = document.querySelector(".login-modal");
    const button = document.querySelectorAll("button");
    console.log(button);
    const background = document.body;
    background.style.backgroundColor = "rgb(200,200,200)";
    button[0].style.backgroundColor = "rgb(200,200,200)";
    button[1].style.backgroundColor = "rgb(200,200,200)";
    loginModal.style.display = "inline-block";
    background.style.pointerEvents = "none";
    loginModal.style.pointerEvents = "all";
  };
  return (
    <div className="nav-container">
      <div className="nav-top">
        <Link to="/">Cocktailist</Link>
        <div className="nav-button">
          <button>search</button>
          <button onClick={loginHandler}>login</button>
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
