import React from 'react'
import lang from '../utils/langConstant'
import { useSelector } from 'react-redux'

const GptSearchBarPage = () => {
  const languageChange = useSelector((store)=> store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 ">
            <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[languageChange].searchPlaceholder}></input>
            <button className="bg-red-700 text-white m-4 py-2 px-4 rounded-lg col-span-3">{lang[languageChange].search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBarPage
