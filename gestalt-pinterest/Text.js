// ./components/Contents.js
import React from 'react';

function Text() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' ,backgroundColor: 'white',flex :'1',textAlign:'left'}}>
      <section style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', color: 'black',alignContent:'left' }}>Gestalt is Pinterest’s design system</h1>
        <p style={{ color: 'black', marginTop: '10px',alignContent:'left' }}>We’re here to help you build experiences that inspire people to create the life they love</p>
        <button style={{
          backgroundColor: ' #D3D3D3',
          color: 'black',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>See What's New</button>
      </section>

    </main>
  );
}

export default Text;
