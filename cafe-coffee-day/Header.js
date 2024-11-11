// ./components/Header.js
import React from 'react';
import logo from './lgo.png';
import dnd from './bell.png';
import search from './search.png';
import user from './user.png'


function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '10px 20px',
      color: 'red',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 1.5)'
    }}>
      <div style={{ height: '80px'}}>
        <img src={logo} alt="ccd Logo" style={{ height: '125%' }} />
      </div>
      <nav>
        <a href="#plans" style={{ color: 'red', margin: '0 15px', textDecoration: 'none' }}>Cafe Menu</a>
        <a href="#product" style={{ color: 'red', margin: '0 15px', textDecoration: 'none' }}>E-shop</a>
        <a href="#security" style={{ color: 'red', margin: '0 15px', textDecoration: 'none' }}>Order Online</a>
        <a href="#customers" style={{ color: 'red', margin: '0 15px', textDecoration: 'none' }}>Café Finder/ Café Locator</a>
        <a href="#help" style={{ color: 'red', margin: '0 15px', textDecoration: 'none' }}>Mobile App/CCD Mobile App</a>
      </nav>
      <div style={{ height: '40px'}}>
        <img src={search} alt="search" style={{ height: '50%',paddingRight:'15px',paddingTop:'9px'}} />
        <img src={dnd} alt="dnd" style={{ height: '50%' ,paddingRight:'15px',paddingTop:'9px'}} />
        <img src={user} alt="user" style={{ height: '50%' ,paddingRight:'15px',paddingTop:'9px'}} />
      </div>
    </header>
  );
}

export default Header;
