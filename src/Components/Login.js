import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkData } from '../utils/validation';
import { auth } from '../utils/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const toggleSignInForm = ()=>{
    setIsSignIn(!isSignIn);
  }

  const handleData = ()=>{
    
      console.log(email.current.value);
      console.log(password.current.value);
      const message = checkData(email.current.value, password.current.value);
      seterrorMessage(message);
      if(message) return;

      if(!isSignIn){
        // Logic For Sign up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);    
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + '-'+ errorMessage)
  })
      }
      else{
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);    
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + '-'+ errorMessage)
  })
      }
      

  }

  return (
    <div>
      <Header/>
    <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/6fac70dc-ef61-4033-8fbd-570c85f819ae/PK-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='bg-img'></img>
    </div>
    <form onSubmit={(e)=>{e.preventDefault()}} className='absolute bg-black opacity-80 w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg'>
      <h1 className="font-bold text-3xl py-4">{isSignIn? "Sign In": "Sign up"}</h1>
      {!isSignIn && (<input className="p-4 my-4 w-full bg-gray-700" placeholder='Full Name' type='text'></input>)}
      <input ref={email} className="p-4 my-4 w-full bg-gray-700" placeholder='Email Address' type='text'></input>
      <input ref={password} className="p-4 my-4 w-full bg-gray-700" placeholder='Password' type='password'></input>
      <p className="text-red-500 font-bold my-3 text-lg">{errorMessage}</p>
      <button onClick={handleData}  className="p-4 my-4 w-full bg-red-700 font-bold rounded-lg">{isSignIn? "Sign In": "Sign up"}</button>
      <p className="cursor-pointer py-4" onClick={toggleSignInForm}>{isSignIn? "New to Netflix? Sign up Now": "Already Joined! Sign In Now"}</p>
    </form>

    </div>
  )
}

export default Login
