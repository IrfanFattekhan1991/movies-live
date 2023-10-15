import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";

const SignInSignUp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const loginHandler = () => {
    setIsSignedIn(!isSignedIn);
  };

  const validateClickHandler = () => {
    //console.log(name, email.current.value, password.current.value);

    const message = validate(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    //console.log(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black text-white my-44 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignedIn ? "Sign Up" : "Sign In"}
        </h1>
        {isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-6 w-full bg-gray-600"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-4 my-6 w-full bg-gray-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-6 w-full bg-gray-600"
        />
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-800 w-full rounded-md font-bold text-lg"
          onClick={validateClickHandler}
        >
          {isSignedIn ? "Sign Up" : "Sign In"}
        </button>
        <h1 className="pt-4 text-lg cursor-pointer" onClick={loginHandler}>
          {isSignedIn
            ? "Already registered? Sign In now!"
            : "New to Netflix? Sign up now!"}
        </h1>
      </form>
    </div>
  );
};

export default SignInSignUp;
