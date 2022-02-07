import useGlobal from '../store/globalAppState';
import { Link } from 'react-router-dom';
import MovieCardFavsPage from '../components/MovieCardFavsPage';
import { useState, useEffect } from 'react';

function PageFavs() {

  const [globalState ] = useGlobal();
  const [ favMovies, setFavMovies ] = useState(null);

  useEffect(() => {
    if ( globalState.favs.length === 0 ) {
      setFavMovies(true);
    } else {
      setFavMovies(false);
    }
  }, [globalState])

    return (
  
      <main>
        <section className="page-favs">
          <h2>Favourite Movies</h2>
          { favMovies ?
            <p className="no-favourites" >No favourited movies. Please visit the <Link to={'/'}>home page</Link> to favourite a movie.</p> :
            // <MoviesPopular movieObj={globalState.favs} />
            <MovieCardFavsPage movieObj={globalState.favs} /> 
          }
        </section>
      </main>
    )
}
  
  export default PageFavs;
  