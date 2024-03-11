import React, { useRef } from 'react'
import lang from '../utils/langConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_Options } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'
import openai from '../utils/openai'

const GptSearchBarPage = () => {
  const searchText = useRef(null)
  const languageChange = useSelector((store)=> store.config.lang)
  const dispatch = useDispatch()

  

  const searchMovieTMDB = async (movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_Options)
    const json = await data.json()
    return json.results;
    
  }

  const handleGptSearch = async()=>{
    const gptQuery = "Act as a movie recomendation system and suggest some movies for the query : " + 
    ". only gives me names of 5 movies, comma separated like the example given ahead. Example: Don, Dhoom, Sholay, Tiger, Bullet Raja"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResults.choices) return null;
  
  //
  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

  // it return array of movies 

  // For each movie I will search TMDB API
  const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
  const tmdbResults = await Promise.all(promiseArray)
  dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
  }
  
  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
        <form className="md:w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-8 md:col-span-9" placeholder={lang[languageChange].searchPlaceholder}></input>
            <button onClick={handleGptSearch} className="bg-red-700 text-white m-4 py-2 px-4 rounded-lg col-span-4 md:col-span-3" >{lang[languageChange].search}</button>
        </form>

       
      
    </div>
  )
}

export default GptSearchBarPage

