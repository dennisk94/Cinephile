import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import { appTitle } from '../globals/globals';
import Hamburger from './hamburger';
import appLogo from '../images/app_logo.png';

function Header() {

    const [ navOpen, setNavOpen ] = useState(false);

    const showHideNav = () => {
        setNavOpen( !navOpen );
    }

    return (

        <header className="cinephile-header">
            <Link className="app-logo-wrapper" to="/">
                <img src={ appLogo } alt="Application Logo" />
                <h1>{ appTitle }</h1>
            </Link>
                    
            <Hamburger showHide={ showHideNav } checkNav={ navOpen } />
            <NavMain nav={ navOpen } toggleNav={ showHideNav } />
            
        </header>
    )
}

export default Header;
