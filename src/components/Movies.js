import { useMediaQuery } from 'react-responsive';
import MoviesPopular from '../components/MoviesPopular';
import MoviesTopRated from '../components/MoviesTopRated';
import MoviesNowPlaying from '../components/MoviesNowPlaying';
import MoviesUpcoming from '../components/MoviesUpcoming';
import MoviesPopularTabletDesktop from '../components/MoviesPopularTabletDesktop';
import MoviesTopRatedTabletDesktop from '../components/MoviesTopRatedTabletDesktop';
import MoviesNowPlayingTabletDesktop from '../components/MoviesNowPlayingTabletDesktop';
import MoviesUpcomingTabletDesktop from '../components/MoviesUpcomingTabletDesktop';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Movies( { popular, topRated, nowPlaying, upcoming } ) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    var settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        draggable: true,

        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    draggable: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    draggable: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    draggable: true,
                }
            }

        ]
    };

    return (
        
        <div>
            <div className="movies">
                <section className="popular">
                    <h3>Popular</h3>

                    {isMobile && <AwesomeSlider animation="foldOutAnimation" cssModule={[CoreStyles, AnimationStyles]}>{popular.map((singleMovie, i) => {
                        return <div data-src={singleMovie.poster_path}><MoviesPopular key={i} movieObj={singleMovie}/></div>
                    })}</AwesomeSlider>} 

                    {isMobile === false && <div className="slider-container"><Slider {...settings}>{popular.map((singleMovie, i) => {
                        return <MoviesPopularTabletDesktop key={i} movieObj={singleMovie} />
                    })}</Slider></div>}
                </section>

                <section className="top-rated">
                <h3>Top Rated</h3>
 
                {isMobile && <AwesomeSlider animation="foldOutAnimation" cssModule={[CoreStyles, AnimationStyles]}>{topRated.map((singleMovie, i) => {
                        return <div data-src={singleMovie.poster_path}><MoviesTopRated key={i} movieObj={singleMovie} /></div>
                })}</AwesomeSlider>}

                {isMobile === false && <div className="slider-container"><Slider {...settings}>{topRated.map((singleMovie, i) => {
                        return <MoviesTopRatedTabletDesktop key={i} movieObj={singleMovie} />
                })}</Slider></div>}
                </section>

                <section className="now-playing">
                    <h3>Now Playing</h3>

                    {isMobile && <AwesomeSlider animation="foldOutAnimation" cssModule={[CoreStyles, AnimationStyles]}>{nowPlaying.map((singleMovie, i) => {
                        return <div data-src={singleMovie.poster_path}><MoviesNowPlaying key={i} movieObj={singleMovie} /></div>
                    })}</AwesomeSlider>}

                    {isMobile === false && <div className="slider-container"><Slider {...settings}>{nowPlaying.map((singleMovie, i) => {
                        return <MoviesNowPlayingTabletDesktop key={i} movieObj={singleMovie} />
                    })}</Slider></div>}
                </section>

                <section className="upcoming">
                    <h3>Upcoming</h3>

                    {isMobile && <AwesomeSlider animation="foldOutAnimation" cssModule={[CoreStyles, AnimationStyles]}>{upcoming.map((singleMovie, i) => {
                        return <div data-src={singleMovie.poster_path}><MoviesUpcoming key={i} movieObj={singleMovie} /></div>
                    })}</AwesomeSlider>}

                    {isMobile === false && <div className="slider-container"><Slider {...settings}>{upcoming.map((singleMovie, i) => {
                        return <MoviesUpcomingTabletDesktop key={i} movieObj={singleMovie} />
                    })}</Slider></div>}
                </section>
            </div>
        </div>
    )
}

export default Movies;
