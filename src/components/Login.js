import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/NO-en-20240916-TRIFECTA-perspective_1e0792f8-e184-4d6a-85a5-b526e9388e83_medium.jpg")`,
        }}
      >
        <form className="bg-black p-6 rounded-lg bg-opacity-80  text-white">
          <h2 className="text-2xl mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          {!isSignIn && (
            <>
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 mb-6 bg-transparent  border border-white"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 mb-6 bg-transparent  border border-white"
              />
            </>
          )}

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-6 bg-transparent  border border-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-transparent border border-white"
          />
          <button className="w-full p-3 bg-red-800">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <h4 className="mt-8 cursor-pointer" onClick={toggleSignIn}>
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already a user. Sign in."}
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
