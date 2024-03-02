import React from 'react'
import GptSearchBarPage from './GptSearchBarPage'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bgimg } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img className="h-screen object-cover md:w-screen" src={bgimg}
    alt='bg-img'></img>
    </div>
    <div>
    <GptSearchBarPage />
    <GptMovieSuggestion />
    </div>
    </>
  )
}

export default GptSearch
