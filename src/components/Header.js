import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import { appTitle } from '../globals/globals';
import Hamburger from './hamburger';

function Header() {

    const [ navOpen, setNavOpen ] = useState(false);

    const showHideNav = () => {
        setNavOpen( !navOpen );
    }

  return (

        <header className="cinephile-header">
            <div className='inner-wrapper' >
                <h1><Link to="/">{ appTitle }</Link></h1>
                <Hamburger showHide={ showHideNav } checkNav={ navOpen } />
                <NavMain nav={ navOpen } toggleNav={ showHideNav } />
            </div>
        </header>
  )
}

export default Header;
