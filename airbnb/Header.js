// Header.js
import React from 'react';
import logo from './logo.png';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    padding: '3px',
    borderBottom: '1px solid #e0e0e0',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };


  const navLinkStyle = {
    margin: '0 10px',
    color: '#333',
    textDecoration: 'none',
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img src={logo} alt="Airbnb.io" style={{ height: '40px', marginRight: '10px' }} />
      </div>
      <nav>
        <a href="#mobile" style={navLinkStyle}>Mobile</a>
        <a href="#open-source" style={navLinkStyle}>Open Source</a>
        <a href="#events" style={navLinkStyle}>Events</a>
        <a href="#blog" style={navLinkStyle}>Blog</a>
        <a href="#github" style={navLinkStyle}>GitHub</a>
        <a href="#careers" style={navLinkStyle}>Careers</a>
      </nav>
    </header>
  );
}

export default Header;
