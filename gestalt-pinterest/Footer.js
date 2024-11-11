// ./components/Footer.js
import React from 'react';
import footer from './footer.PNG';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#fff6eb',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div>
        <img src={footer} alt="footer" style={{ height: '275px', margin: '0 10px' }} />
      </div>
    </footer>
  );
}

export default Footer;
