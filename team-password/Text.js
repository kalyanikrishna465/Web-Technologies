// ./components/Contents.js
import React from 'react';

function Text() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' ,backgroundColor: '#204c6a',flex :'1'}}>
      <section style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', color: 'white' }}>The Password Manager for Teams</h1>
        <p style={{ color: 'white', marginTop: '10px' }}>TeamPassword is the fastest, easiest, and most secure way to store and share team logins and passwords.</p>
        <button style={{
          backgroundColor: '#58b494',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>Get Started</button>
      </section>

    </main>
  );
}

export default Text;
