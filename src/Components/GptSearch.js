import React from 'react'
import GptSearchBarPage from './GptSearchBarPage'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bgimg } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
      <img src={bgimg}
    alt='bg-img'></img>
    </div>
    <GptSearchBarPage />
    <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
