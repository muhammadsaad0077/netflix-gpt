import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkData } from "../utils/validation";
import { auth } from "../utils/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { avtimg, bgimg } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleData = () => {
    const message = checkData(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Logic For Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avtimg,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:w-screen" src={bgimg} alt="bg-img"></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black opacity-80 w-full md:w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
            placeholder="Full Name"
            type="text"
          ></input>
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Email Address"
          type="text"
        ></input>
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Password"
          type="password"
        ></input>
        <p className="text-red-500 font-bold my-3 text-lg">{errorMessage}</p>
        <button
          onClick={handleData}
          className="p-4 my-4 w-full bg-red-700 font-bold rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up Now"
            : "Already Joined! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
