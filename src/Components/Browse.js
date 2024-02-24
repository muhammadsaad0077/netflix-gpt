import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
       <Header/>   {/* using ternay operator */}
       {showGptSearch ? (     
       <GptSearch />
       ) : (
        <>  {/*This is a react fragment which is used to make a single parent of more than one elements */}
       <MainContainer/>
       <SecondaryContainer />
       </>
       )}
    </div>
  )
}

export default Browse
