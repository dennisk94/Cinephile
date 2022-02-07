import useGlobal from '../store/globalAppState';
import FilledHeart from '../images/filledHeart.png';
import UnfilledHeart from '../images/unfilledHeart.png';
import { useState, useEffect } from 'react';

function FavButton({ movieObj}) {

    const [globalState, globalActions] = useGlobal();  
    const [ fav, setFav ] = useState(null);  
    
    useEffect(() => { 
        let state = globalState.favs.some((movie) => movie.id === movieObj.id);
        setFav(state);
        console.log(state);
    }, [globalState]);

    return (
        <>
            { fav ?

            <img className='heart'
            onMouseDown={(e) => { e.preventDefault(); }}
            onClick={() => { globalActions.removeFav(movieObj.id);}}
            src={FilledHeart} alt="Filled Heart" /> :
         
            <img className='heart'
            onMouseDown={ (e) => { e.preventDefault(); }}
            onClick={() => { globalActions.addFav(movieObj);}}
            src={UnfilledHeart} alt="Unfilled Heart" />
            
            }
        </>
    );
    
}

export default FavButton;
