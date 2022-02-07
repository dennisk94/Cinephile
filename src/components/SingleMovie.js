import noPoster from '../images/no-movie-poster.jpg';
import { API_TOKEN, API_KEY } from '../globals/globals';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import VideoModal from './VideoModal';
import noPhoto from '../images/noCast.png';
import { useMediaQuery } from 'react-responsive';
import FavButton from '../components/FavButton';
import useGlobal from '../store/globalAppState';

function SingleMovie( { movieObj } ) {

    const [creditInfo, setCreditInfo] = useState(null);
    const [ movieVideoData, setMovieVideoData  ] = useState(null);    
    const [ heart, setHeart ] = useState(false);
    const isTablet = useMediaQuery({ query: '(min-width: 570px)' });

    const { id } = useParams();

    useEffect(() => {

        const fetchCredits = async () => {
            
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=<<${API_KEY}>>&language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawCreditInfo = await res.json();
            rawCreditInfo = rawCreditInfo.cast.splice(0, 6);
            setCreditInfo(rawCreditInfo);
            console.log(rawCreditInfo);
        }

        fetchCredits();

        const fetchMovieVideoData = async () => {
            
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=<<${API_KEY}>>&language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN,
                }
            });
            let rawVideoInfo = await res.json();
            setMovieVideoData(rawVideoInfo);
            console.log(rawVideoInfo);
        }

        fetchMovieVideoData();        

    }, []);

    //Get key for youtube video

    let clipKey = '';

    if ( movieVideoData !== null ) {
        for ( let i = 0; i < movieVideoData.results.length; i++ ) {
            if ( movieVideoData.results[i].type === 'Featurette' ) {
                clipKey = movieVideoData.results[i].key;
            } else if (movieVideoData.results[i].type === 'Clip') {
                clipKey = movieVideoData.results[i].key;
            }
        }
    }  

    return (
        <div className="single-movie-container">
            <div className="single-movie-content">
                <div className="single-movie-poster">
                    {movieObj.poster_path === null ? 
                    <img src={noPoster} alt="No poster" /> : 
                    isTablet ? <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt={movieObj.title} /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} /> 
                    }
                </div>
                <div className="single-movie-info">
                    <section className="info-container">
                        <h2>{ movieObj.title }</h2>
                        <div className="release-rating-container">
                            <p>Release Date: {movieObj.release_date}</p>
                            <p>Rating: {movieObj.vote_average}/10</p>
                        </div>

                        <section className="genres">
                            <p>Genre: </p>
                                { movieObj.genres !== null && movieObj.genres.map(( oneGenre, i ) =>                                         
                                            <p key={i} >{ oneGenre.name }</p>
                                )}
                        </section>
                            
                        <div className="heart-trailer">
                            <FavButton movieObj={movieObj} />
                            <VideoModal id={id}/>
                        </div>
                            <p>{movieObj.overview}</p>
                        </section>

                        { clipKey !== '' && 
                            <section className="movie-featurette">
                            <iframe title="movie-featurette" width="420" height="315"
                            src={`https://www.youtube.com/embed/${clipKey}`}>
                            </iframe>
                            </section>
                        }
                        
                        <section className="top-billed-cast">
                            <h3>Top Billed Cast</h3>
                            <div className="cast-container">
                                { creditInfo !== null && creditInfo.map(( oneCast, i ) => 
                                    <div key={i} className="cast-member">
                                        { oneCast.profile_path === null ? 
                                            <img src={noPhoto} alt='No profile poster' /> :
                                            <img src={`https://image.tmdb.org/t/p/w500/${oneCast.profile_path}`} alt={oneCast.name} />
                                        }
                                        
                                        <p>{ oneCast.name } as { oneCast.character }</p>
                                    </div>
                                ) }
                            </div>
                        </section>
                    </div>
                </div>
            </div>
    )
}

export default SingleMovie;
