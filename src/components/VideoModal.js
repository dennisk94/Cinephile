import { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import { API_TOKEN, API_KEY } from '../globals/globals';

function VideoModal( { id } ) {

    const [ movieVideoData, setMovieVideoData  ] = useState(null);
    
    useEffect(() => {

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

    //Get youtube key for movie trailer
    let trailerKey = '';
    
    if ( movieVideoData !== null ) {
        for( let i = 0; i < movieVideoData.results.length; i++ ) {
            if ( movieVideoData.results[i].type === 'Trailer' ) {
                trailerKey = movieVideoData.results[i].key;
            }
        }
    }
    
    const [ isOpen, setOpen ] = useState();

    return (
    
        <>
            <ModalVideo channel='youtube' autoPlay='1' isOpen={isOpen} videoId={trailerKey} onClose={() => setOpen(false)} />

            { trailerKey !== '' && <div className="trailer-button-container btn-primary" onClick={()=> setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>
                    <p>Play Trailer</p>                                
                </div>
            }
        </>
    )
  
}

export default VideoModal;
