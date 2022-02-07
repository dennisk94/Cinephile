import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import FavButton from '../components/FavButton';

function MoviesUpcomingTabletDesktop( { movieObj } ) {

    //Media query for tablet screen size
    const isTablet = useMediaQuery({ query: '(min-width: 800px)' });

    //Change movie title length based on screen size
    let titleLength = '';

    function titleCharacterLength() {

        if( isTablet ) {
            titleLength = 25;
        }
    }

    titleCharacterLength();

    let finalTitle = '';

    function titleOutput (title) {
        if( title.length > titleLength ) {
            finalTitle = title.slice( 0, titleLength );
        } else {
            finalTitle = title;
        }
    }

    //Change overview length depending on screen size
    let summaryLength = '';

    function overviewLength () {
        if ( isTablet ) {
            summaryLength = 100;
        } else {
            summaryLength = 450;
        }
    }

    overviewLength();
    let overviewSummary = summaryLength;
    let summary = '';
    
    function movieOverview ( overview ) {
        if ( overview.length > overviewSummary ) {
            summary = overview.slice( 0, overviewSummary ) + '...';
        } else {
            summary = overview;
        }
    }

    return (
        
        <div className="movie-card-slick">
            { isTablet ? <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`} alt={movieObj.title} /> :
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} />
            }
            <div className="overlay">
                <p>{ movieObj.vote_average }/10</p>
                <FavButton movieObj={movieObj}/>
                <h4 className="movie-title" >{ titleOutput( movieObj.title )}{ finalTitle }</h4>
                <p className="release-date" >{ movieObj.release_date }</p>
                <p className="synopsis" >{ movieOverview( movieObj.overview ) }{ summary }</p>
                <Link className="more-info" to={`/movie/${movieObj.id}`} ><p>More Info</p></Link>
            </div>
        </div>
    )
}

export default MoviesUpcomingTabletDesktop; 