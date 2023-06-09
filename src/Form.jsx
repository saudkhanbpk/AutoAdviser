import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import './Form.css';
import { auth } from "./firebase-config";
import { Link } from "react-router-dom";
import Socialicons from "./Socialicons";
function Form() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

  })
  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(userCredential.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (


    <div className="container">
      <div className="wrapper">
        <div className="title">
          Login
        </div>
        <form className="forms">

          <div className="field">
            <input
              type="email"
              value={loginEmail}
              required
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={loginPassword}
              required
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label>Password</label>
          </div>



          <div className="field">
            <button onClick={login}>
              Login
            </button>
          </div>
          <Socialicons />
          <div>
            <div className="signup-link">
              Don't Have An Account?
              <Link to="/signup">Sign_Up </Link>{" "}
            </div>
          </div>
          <h4>User Logged In:</h4>
          {user?.email}

          <button onClick={logout}>Sign Out</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
