// ./components/Footer.js
import React from 'react';
import footer from './footer.PNG';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#fff6eb',
      padding: '0px',
      textAlign: 'center',
    }}>
      <div>
        <img src={footer} alt="footer" style={{ height: '456px', margin: '0 0px'}} />
      </div>
    </footer>
  );
}

export default Footer;
