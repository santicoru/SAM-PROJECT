import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/SAMlogotipo.png';
import menu from '../assets/images/menu.svg';
import lente from '../assets/images/lente.svg';
import user1 from '../assets/images/user1.svg';
import addCart from '../assets/images/add-to-cart.svg';
import spain from '../assets/images/spain.svg';
import unitedK from '../assets/images/united-kingdom.svg';

export function Header() {

  const [display, setDisplay] = useState('removeShow');
  const [submenu, setSubmenu] = useState('');


  const changeVisibility = () => {
    if (display === 'removeShow') {
      setDisplay('show');
    } else {
      setDisplay('removeShow');
    }
  }

  const showSubMenu = () => {
    if (submenu === 'show') {
      setSubmenu('removeShow');
    } else {
      setSubmenu('show');
    }
  }

  return (
    <header className='header-nav'>
      <nav >
        <button id="button-menu" onClick={showSubMenu}><img src={menu} alt="menu" /></button>
        <img src={logo} alt="logo" id="logo" />
        <input
          type="text"
          placeholder="estoy buscando ..."
          id="hidden-mobile"
          className={display}
        />
        <button id="search" onClick={changeVisibility} ><img src={lente} alt="lupa" /></button>
        <button className="login">
          <img src={user1} alt="login" />
        </button>
        <button>
          <a href=""
          ><img src={addCart} alt="carrito"
            /></a>
        </button>
      </nav>

      <section data-name="submenu" className={submenu}>
        <ul>
          <li><Link to="/catalogue"> CATALOGO </Link></li>
          <li><Link to="/personalAccount"> MI CUENTA</Link></li>
          <li><Link to="/fqa"> PREGUNTAS FRECUENTES</Link></li>
          <li>
            CONFIGURACIÓN
            <img src={spain} alt="bandera de España" />
            <img src={unitedK} alt="flag united-kingdom" />
          </li>
          <li><Link to='/about'> ATENCIÓN AL CLIENTE</Link></li>
          <li><Link to='/legal'> LEGAL</Link></li>
        </ul>
      </section>
    </header>
  )
}