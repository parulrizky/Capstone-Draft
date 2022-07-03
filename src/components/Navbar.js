import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/auth'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { user, signOut } = useAuth()

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FEDMVI
            <i class='...' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/donasi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Donation
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/relawan'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Volunteer
              </Link>
            </li>            
            {/*{user ? <li><Link onClick={signOut} className='nav-links-mobile'>Logout</Link></li> : <li>
            <Link to='/sign-up' className='nav-links-mobile onClick={closeMobileMenu}>Sign Up</Link> </li>*/}
            {!user ? <Button buttonStyle='btn--outline' onClick={closeMobileMenu}>SIGN UP</Button> : <Button buttonStyle='btn--outline' onClick={signOut}>LOG OUT</Button>}
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
