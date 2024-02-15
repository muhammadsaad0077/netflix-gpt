import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase.config'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { avtimg, logo } from '../utils/constant'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const handleSignOut = ()=>{
    signOut(auth)
      .then(()=>{
      })
      .catch((error)=>{
        navigate("/error")
      })
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate('/browse')
        }
        else{
            dispatch(removeUser())
            navigate('/')
        }
    });
    return ()=> unsubscribe();
}, [])
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img className="w-44" src={logo} alt='logo'></img>
      {user && (<div className="flex p-2">
        <img
        className="w-12 h-12"
       alt='usericon' 
       src={avtimg}
        ></img>
        <button onClick={handleSignOut} className="text-white font-bold" >(Sign Out)</button></div>)}
    </div>
  )
}

export default Header
