import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../ContextApi/StateProvider";
import { actionTypes } from "../ContextApi/reducer";
import { signInWithPopup } from "firebase/auth";
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const [state, dispatch] = useStateValue();

  //to open a pop up sign in with google account
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };


  return (
    // Login page
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>

      </div>
    </div>
  );
};

export default Login;
