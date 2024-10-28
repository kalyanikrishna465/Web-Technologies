// ./components/Header.js
import React from 'react';
import logo from './logo.png';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#204c6a',
      padding: '10px 20px',
      color: 'white'
    }}>
      <div style={{ height: '40px' }}>
        <img src={logo} alt="TeamPassword Logo" style={{ height: '100%' }} />
      </div>
      <nav>
        <a href="#plans" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Plans & Pricing</a>
        <a href="#product" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Product Tour</a>
        <a href="#security" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Security</a>
        <a href="#customers" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Customers</a>
        <a href="#help" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Help</a>
      </nav>
      <div>
        <a href="tel:+18792562462" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>+1 (879)-256-2462</a>
        <button style={{
          background: 'none',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px'
        }}>Sign In</button>
        <button style={{
          backgroundColor: '#58b494',
          color: 'white',
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
