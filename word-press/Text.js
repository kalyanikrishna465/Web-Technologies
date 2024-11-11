// ./components/Contents.js
import React from 'react';

function Text() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' ,backgroundColor: '#3858e9',flex :'1',textAlignLast:'left'}}>
      <section style={{ marginBottom: '4px',marginTop:'4px' }}>
        <h1 style={{ fontSize: '2.5em', color: 'white' ,marginBottom: '4px'}}>Word Press</h1>
        <h1 style={{ fontSize: '2.5em', color: 'white',marginTop:'4px' ,marginBottom: '4px'}}>Without Limits</h1>
        <p style={{ color: 'white', marginTop: '4px',marginBottom: '4px' }}>Everything you need to build and grow any website</p>
        <p style={{ color: 'white', marginTop: '4px' }}>—all in one place.</p>
        <button style={{
          backgroundColor: 'white',
          color: 'black',
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
