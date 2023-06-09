import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import './Form.css'; 
import { auth } from "./firebase-config";

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm_Password, setRegisterConfirm_Password] = useState("");


  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

  })


  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerConfirm_Password
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
        Signup
        </div>
        <form className="forms">
          
          <div className="field">
            <input
              type="email"
              value={registerEmail}
              required
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={registerPassword}
              required
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={registerConfirm_Password}
              required
              onChange={(e) => setRegisterConfirm_Password(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>


          
          <div className="field">
            <button onClick={register}>
              Register
            </button>
          </div>
          <div>
            <div className="signup-link">
              Don't Have An Account?
              {/* <Link to="/signUp">Sign_Up </Link>{" "} */}
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

export default Signup;
