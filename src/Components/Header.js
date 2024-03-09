import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase.config'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { avtimg, language, logo } from '../utils/constant'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const handleLanguage = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  const handleGptSearch = ()=>{
    dispatch(toggleGptSearchView())
  }
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
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between flex-col md:flex-row ">       {/* tailwind classes for responsiveness: sm is for small devices(tablet), md is for medium devices(desktop, laptop), by-default classes are used for mobiles/smartphones */}
      <Link to={"/"}><img className="w-44 mx-auto md:mx-0" src={logo} alt='logo'></img></Link>
      {user && (<div className="flex p-2 justify-between">
       {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguage}>
          {language.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>)}
      <button className="py-2 px-4 mx-4 bg-purple-800 my-2 rounded-lg text-white hover:text-white hover:bg-black transition" onClick={handleGptSearch}>{showGptSearch ? "Home" : "GPT Search"}</button>
        <img
        className="w-12 h-12 hidden md:block"
       alt='usericon' 
       src={avtimg}
        ></img>
        <button onClick={handleSignOut} className="text-white font-bold" >(Sign Out)</button></div>)}
    </div>
  )
}

export default Header
