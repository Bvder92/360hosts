import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

function Navbar() {

  const [nav, setnav] = useState(false);

  const changeBackground = () =>{
    if(window.scrollY >= 50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"} >
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt=''/>
      </Link>
      <imput className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="main" smooth={true} duration={1000}>Prendre un rdv téléphonique</Link></li>      
      </ul>
    </nav>
  );
}

export default Navbar;