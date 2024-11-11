// ./components/Header.js
import React from 'react';
import logo from './logo.PNG';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3858e9',
      padding: '10px 20px',
      color: 'white'
    }}>
      <div style={{ height: '40px' }}>
        <img src={logo} alt="WordPress Logo" style={{ height: '100%' }} />
      </div>
      <nav>
        <a href="#plans" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Products</a>
        <a href="#product" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Features</a>
        <a href="#security" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Resources</a>
        <a href="#customers" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Plans and Pricing</a>
      </nav>
      <div>
        <button style={{
          background: 'none',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px'
        }}>Log in</button>
        <button style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Get Started</button>
      </div>
    </header>
  );
}

export default Header;

