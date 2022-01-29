import { NavLink } from 'react-router-dom';

function NavMain( { nav, toggleNav } ) {

    function closeNav (e) {
        if ( window.innerWidth < 600 ) {
            toggleNav();
        }
    }

    return (
        <nav className={ nav ? undefined : 'hide'  } onClick={ closeNav } >
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favs">Favs</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavMain;


