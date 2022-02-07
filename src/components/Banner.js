import {  Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner( { popular } ) {

    let featuredPopularMovies = popular.slice(0,6);

    var settings = {
        fade: true, 
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 0,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (

        <div>
            <section className="banner">
                <Slider {...settings} >
                    <div>
                        <div className="image-container">
                            <img src={`https://image.tmdb.org/t/p/original/${featuredPopularMovies[0].backdrop_path}`} alt={ featuredPopularMovies[0].title } />
                            <div className="banner-overlay"></div>
                            
                            <div className="movie-info">
                            <h2>{featuredPopularMovies[0].title}</h2>
                            <Link className="more-info" to={`/movie/${featuredPopularMovies[0].id}`} ><p>More Info</p></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="image-container">
                            <img src={`https://image.tmdb.org/t/p/original/${featuredPopularMovies[1].backdrop_path}`} alt={ featuredPopularMovies[1].title } />
                            <div className="banner-overlay"></div>

                            <div className="movie-info">
                            <h2>{featuredPopularMovies[1].title}</h2>
                            <Link className="more-info" to={`/movie/${featuredPopularMovies[1].id}`} ><p>More Info</p></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="image-container">
                            <img src={`https://image.tmdb.org/t/p/original/${featuredPopularMovies[2].backdrop_path}`} alt={ featuredPopularMovies[2].title } />
                            <div className="banner-overlay"></div>
                            
                            <div className="movie-info">
                            <h2>{featuredPopularMovies[2].title}</h2>
                            <Link className="more-info" to={`/movie/${featuredPopularMovies[2].id}`} ><p>More Info</p></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="image-container">
                            <img src={`https://image.tmdb.org/t/p/original/${featuredPopularMovies[3].backdrop_path}`} alt={ featuredPopularMovies[3].title } />
                            <div className="banner-overlay"></div>

                            <div className="movie-info">
                                <h2>{featuredPopularMovies[3].title}</h2>
                                <Link className="more-info" to={`/movie/${featuredPopularMovies[3].id}`} ><p>More Info</p></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="image-container">
                            <img src={`https://image.tmdb.org/t/p/original/${featuredPopularMovies[4].backdrop_path}`} alt={ featuredPopularMovies[4].title } />
                            <div className="banner-overlay"></div>

                            <div className="movie-info">
                                <h2>{featuredPopularMovies[4].title}</h2>
                                <Link className="more-info" to={`/movie/${featuredPopularMovies[4].id}`} ><p>More Info</p></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="image-container">
                            <img src={`https://image.tmdb.org/t/p/original/${featuredPopularMovies[5].backdrop_path}`} alt={ featuredPopularMovies[5].title } />
                            <div className="banner-overlay"></div>

                            <div className="movie-info">
                                <h2>{featuredPopularMovies[5].title}</h2>
                                <Link className="more-info" to={`/movie/${featuredPopularMovies[5].id}`} ><p>More Info</p></Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    )
}

export default Banner;
