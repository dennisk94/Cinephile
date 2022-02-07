import FavButton from './FavButton';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import { useMediaQuery } from 'react-responsive';

function MovieCardFavsPage( { movieObj } ) {

    //Media queries for different screen sizes
    const isMobile = useMediaQuery({ query: '(min-width: 400px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 800px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isDesktopWide = useMediaQuery({ query: '(min-width: 1500px)' });

    //Change overview length depending on screen size
    let overviewSummary = '';
    let summary = '';

    if ( isDesktopWide ) {
        overviewSummary = 140;
    } else if ( isDesktop ) {
        overviewSummary = 105;
    } else if ( isTablet ) {
        overviewSummary = 95;
    } else if ( isMobile ) {
        overviewSummary = 105;
    } else {
        overviewSummary = 80;
    }

    function movieOverview ( overview ) {
        if ( overview.length > overviewSummary ) {
            summary = overview.slice( 0, overviewSummary ) + '...';
        } else {
            summary = overview;
        }
    }

    function makeMovies(movieObj) {
        return movieObj.map((oneMovie, i) => {
            console.log(oneMovie);
            return (

                <div key={i} className="movie-card">
                    <img className="movie-poster-awesome" src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} alt={oneMovie.title} />
                    <div className="overlay">
                        <p>{ oneMovie.vote_average }/10</p>
                        <FavButton movieObj={oneMovie} />
                        <h4 className="movie-title" >{ oneMovie.title }</h4>
                        <p className="release-date" >{ oneMovie.release_date }</p>
                        <p className="synopsis">{ movieOverview( oneMovie.overview ) }{ summary }</p>
                        <Link className="more-info" to={`/movie/${oneMovie.id}`} ><p>More Info</p></Link>
                    </div>
                </div> 
            );
        });
    }

    return (

        <div className="movies-container">
            { makeMovies(movieObj)}
        </div>     
            
    )
}

export default MovieCardFavsPage;