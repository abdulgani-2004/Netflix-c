import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

 
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    
    setError(""); 
    navigate("/home"); 
  };

  
  const handleSignUpClick = () => {
    navigate("/register"); 
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
        </div>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

         
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />

          {error && <div className="error">{error}</div>}

          <button className="loginButton" type="submit">Sign In</button>

          <span>
            New to Netflix? <b onClick={handleSignUpClick}>Sign up now.</b>
          </span>

          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
