import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import { appTitle } from '../globals/globals';
import { Fade as Hamburger } from 'hamburger-react'
function Header() {

    const [ navOpen, setNavOpen ] = useState(false);

    const showHideNav = () => {
        setNavOpen( !navOpen );
    }

  return (

        <header className="cinephile-header">
            <h1><Link to="/">{ appTitle }</Link></h1>
            <Hamburger onToggle={ showHideNav } duration={0.4} easing="ease-out"/>
            <NavMain nav={ navOpen } />
        </header>
  )
}

export default Header;
