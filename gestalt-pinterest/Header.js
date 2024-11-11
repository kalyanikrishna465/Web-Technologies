// ./components/Header.js
import React from 'react';
import logo from './lgo.png';
import dnd from './dnd.jpeg';
import search from './search.png';


function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '10px 20px',
      color: 'black',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 1.5)'
    }}>
      <div style={{ height: '40px'}}>
        <img src={logo} alt="Gestalt Logo" style={{ height: '100%' }} />
      </div>
      <nav>
        <a href="#plans" style={{ color: 'black', margin: '0 15px', textDecoration: 'none' }}><b>Get Started</b></a>
        <a href="#product" style={{ color: 'black', margin: '0 15px', textDecoration: 'none' }}><b>Foundations</b></a>
        <a href="#security" style={{ color: 'black', margin: '0 15px', textDecoration: 'none' }}><b>Components</b></a>
        <a href="#customers" style={{ color: 'black', margin: '0 15px', textDecoration: 'none' }}><b>Team Support</b></a>
        <a href="#help" style={{ color: 'black', margin: '0 15px', textDecoration: 'none' }}><b>What's New</b></a>
      </nav>
      <div style={{ height: '40px'}}>
        <img src={dnd} alt="dnd" style={{ height: '50%' ,paddingRight:'15px',paddingTop:'9px'}} />
        <img src={search} alt="search" style={{ height: '50%',paddingTop:'9px'}} />
      </div>
    </header>
  );
}

export default Header;
