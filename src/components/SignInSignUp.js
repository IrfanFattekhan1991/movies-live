import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignInSignUp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const loginHandler = () => {
    setIsSignedIn(!isSignedIn);
  };

  const validateClickHandler = () => {
    //console.log(name, email.current.value, password.current.value);

    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (isSignedIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
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
          //console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header isSignedIn={isSignedIn} />
      <div className="absolute w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-8 bg-black text-white my-44 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-3 my-3 w-full bg-gray-600 rounded-md"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-3 my-3 w-full bg-gray-600 rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-3 my-3 w-full bg-gray-600 rounded-md"
        />
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button
          className="p-3 my-3 bg-red-800 w-full rounded-md font-bold text-l"
          onClick={validateClickHandler}
        >
          {isSignedIn ? "Sign Up" : "Sign In"}
        </button>
        <h1 className="pt-2 text-l cursor-pointer" onClick={loginHandler}>
          {isSignedIn
            ? "Already registered? Sign In now!"
            : "New to Netflix? Sign up now!"}
        </h1>
      </form>
    </div>
  );
};

export default SignInSignUp;
