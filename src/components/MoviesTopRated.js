import { useState } from 'react'
import { Link } from 'react-router-dom';
import FavButton from '../components/FavButton';

function MoviesTopRated( { movieObj } ) {

    // Add ... to end of overview
    let overviewSummary = 80;
    let summary = '';

    function movieOverview ( overview ) {
        if ( overview.length > overviewSummary ) {
            summary = overview.slice( 0, overviewSummary ) + '...';
        } else {
            summary = overview;
        }
    }

return (
    
    <div className="movie-card">
        <img className="movie-poster-awesome" src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`} alt={movieObj.title} />
        <div className="overlay">
            <p>{ movieObj.vote_average }/10</p>
            <FavButton movieObj={movieObj}/>
            <h4 className="movie-title" >{ movieObj.title }</h4>
            <p className="release-date" >{ movieObj.release_date }</p>
            <p className="synopsis">{ movieOverview( movieObj.overview ) }{ summary }</p>
            <Link className="more-info" to={`/movie/${movieObj.id}`}><p>More Info</p></Link>
        </div>
    </div>        
)

}

export default MoviesTopRated;
