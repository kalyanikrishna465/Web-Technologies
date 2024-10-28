// src/components/Header.js
import React from 'react';
import logo from './logo.png'; // Import the logo from the relative path

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#141414',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <img src={logo} alt="logo" style={{ height: '70px' }} />
      <button
        style={{
          backgroundColor: '#E50914',
          color: 'white',
          padding: '5px 15px',
          borderRadius: '3px',
          border: 'none', // Set border to 'none' for a clean look
          fontFamily: 'Arial', // Corrected font property
          //fontWeight: 'bold', // Corrected font-weight property
        }}
      >
        Sign In
      </button>
    </header>
  );
}

export default Header;
