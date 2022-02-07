import globalHook from 'use-global-hook';
import { appStorageName } from '../globals/globals';

function getFavs(){

    let favsFromStorage = localStorage.getItem( appStorageName );

    if ( favsFromStorage === null ) {
        favsFromStorage = [];
    } else {
        favsFromStorage = JSON.parse( favsFromStorage );
    }

    return favsFromStorage;
}

const actions = {

    addFav: (store, movieObj) => {

        const newFavs = [...store.state.favs, movieObj];

        const newFavsForStorage = JSON.stringify( newFavs );

        localStorage.setItem( appStorageName, newFavsForStorage );
        
        store.setState({ favs: newFavs });

    },

    removeFav: (store, id) => {

        let currentFavs = store.state.favs;

        const indexOfMovieToRemove = currentFavs.findIndex((movieObj) => movieObj.id === id);
        currentFavs.splice(indexOfMovieToRemove, 1);

        const favsFromStorage = JSON.stringify( currentFavs );
        localStorage.setItem( appStorageName, favsFromStorage );
            
        store.setState({ favs: currentFavs });

    }
}

const initialState = {
    favs: getFavs()
}

const useGlobal = globalHook(initialState, actions);

export default useGlobal;