import TMDB from '../images/tmdb.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageAbout() {

  useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
  
      <div className="page-about">
        <h2>About Us</h2>
        <div className="page-about-card">
          <p>Welcome to the Cinephile database. Here you will find a variety of movies. Enjoy browsing and learning about the most talked about movies.</p>
          <p>Movie Pulse uses the TMDB API but is not endorsed or certified by TMBD.</p>
          <div className="tmdb-attribution">
          <Link to={{ pathname: "https://www.themoviedb.org/" }} target="_blank"  ><img src={ TMDB } alt="TMDB Logo" /></Link>
          </div>
        </div>
        
      </div>
    )
}
  
export default PageAbout;
  