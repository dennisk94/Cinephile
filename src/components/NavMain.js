import { NavLink } from 'react-router-dom';

function NavMain( { nav } ) {



    return (
        <nav className={ nav ? 'hide' : undefined } >
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


