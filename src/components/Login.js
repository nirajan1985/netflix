import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(email.current.value);
    console.log(password.current.value);
    //console.log(fullName.current.value);

    const message = ValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return null;

    if (!isSignIn) {
      //sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          });

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      {/* <Header /> */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/NO-en-20240916-TRIFECTA-perspective_1e0792f8-e184-4d6a-85a5-b526e9388e83_medium.jpg")`,
        }}
      >
        <form className="bg-black p-6 rounded-lg bg-opacity-80  text-white w-3/12">
          <h2 className="text-2xl mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          {!isSignIn && (
            <input
              ref={fullName}
              type="text"
              placeholder="Fullname"
              className="w-full p-3 mb-6 bg-transparent  border border-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="w-full p-3 mb-6 bg-transparent  border border-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-transparent border border-white"
          />
          <p className="text-red-700 font-bold mb-3">{errorMessage}</p>

          <button className="w-full p-3 bg-red-800" onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <h4 className="mt-8 cursor-pointer" onClick={toggleSignIn}>
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already a user? Sign in."}
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
