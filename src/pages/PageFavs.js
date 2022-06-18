import useGlobal from '../store/globalAppState';
import { Link } from 'react-router-dom';
import MovieCardFavsPage from '../components/MovieCardFavsPage';
import { useState, useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageFavs() {

  const [globalState ] = useGlobal();
  const [ favMovies, setFavMovies ] = useState(null);

  useEffect(() => {
		document.title = `${appTitle} - Favs`;
	}, []);

  useEffect(() => {
    if ( globalState.favs.length === 0 ) {
      setFavMovies(true);
    } else {
      setFavMovies(false);
    }
  }, [globalState])

    return (
      <div>
        <section className="page-favs">
          <h2>Favourite Movies</h2>
          { favMovies ?
            <p className="no-favourites" >No favourited movies. Please visit the <Link to={'/'}>home page</Link> to favourite a movie.</p> :
            <MovieCardFavsPage movieObj={globalState.favs} /> 
          }
        </section>
      </div>
    )
}
  
  export default PageFavs;
  