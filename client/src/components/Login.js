import React from "react";

const Login = () => {
  const closeHandler = () => {
    const loginModal = document.querySelector(".login-modal");
    const button = document.querySelectorAll("button");
    const background = document.body;
    background.style.backgroundColor = "rgb(255,255,255)";
    button[0].style.backgroundColor = "rgb(255,255,255)";
    button[1].style.backgroundColor = "rgb(255,255,255)";
    loginModal.style.display = "none";
    background.style.pointerEvents = "all";
  };
  return (
    <div className="login-modal">
      <div className="login-modal-title">Cocktailist</div>
      <button className="login-button-close" onClick={closeHandler}>
        X
      </button>
      <div className="login-modal-input">
        <div>
          <span>username</span>
          <input></input>
        </div>
        <div>
          <span>password</span>
          <input></input>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
