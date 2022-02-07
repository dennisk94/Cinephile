import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globals';
import Banner from '../components/Banner';
import Movies from '../components/Movies';

function PageHome() {

  const [ movieData, setMovieData ] = useState(null);
  const [ movieDataTopRated, setMovieDataTopRated ] = useState(null);
  const [ movieDataNowPlaying, setMovieDataNowPlaying ] = useState(null);
  const [ movieDataUpcoming, setMovieDataUpcoming ] = useState(null);

  useEffect(() => {

    //Popular Movies
    const fetchMoviesPopular = async () => {

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
            }
        });

        let rawMovieData = await res.json();
        rawMovieData = rawMovieData.results.splice(0, 12);
        setMovieData(rawMovieData);
        console.log(rawMovieData);
    }

    fetchMoviesPopular();

    //Top Rated Movies
    const fetchMoviesTopRated = async () => {

      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?&language=en-US&page=1`, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + API_TOKEN
          }
      });

      let rawMovieData = await res.json();
      rawMovieData = rawMovieData.results.splice(0, 12);
      setMovieDataTopRated(rawMovieData);
      console.log(rawMovieData);
  }

  fetchMoviesTopRated();

  //Now Playing Movies
  const fetchMoviesNowPlaying = async () => {

    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?&language=en-US&page=1`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_TOKEN
        }
    });

    let rawMovieData = await res.json();
    rawMovieData = rawMovieData.results.splice(0, 12);
    setMovieDataNowPlaying(rawMovieData);
    console.log(rawMovieData);
  }

  fetchMoviesNowPlaying();

   //Upcoming Movies
   const fetchMoviesUpcoming = async () => {

    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?&language=en-US&page=1`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_TOKEN
        }
    });

    let rawMovieData = await res.json();
    rawMovieData = rawMovieData.results.splice(0, 12);
    setMovieDataUpcoming(rawMovieData);
    console.log(rawMovieData);
  }

  fetchMoviesUpcoming();
  
}, []);

    return (
  
      <div>
        { movieData !== null && <Banner popular={ movieData } /> }
        { ( movieData && movieDataTopRated && movieDataNowPlaying && movieDataUpcoming) !== null && <Movies popular={ movieData } topRated={ movieDataTopRated } nowPlaying={ movieDataNowPlaying } upcoming={ movieDataUpcoming } /> }
      </div>
    )
  }
  
  export default PageHome;
  