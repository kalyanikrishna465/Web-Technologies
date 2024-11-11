// ./components/Contents.js
import React from 'react';
import compOneImage from './comp1.PNG';

function CompOne() {
  return (
    <main style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f77b77', flex: '1' }}>
      <section style={{ marginBottom: '40px' }}>
        <img src={compOneImage} alt="comp1" style={{ width: '100%', marginTop: '20px', float: 'right' }} />
      </section>
      <button style={{
          backgroundColor: '#d71921',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}><b>WHAT'S NEW</b></button>
    </main>
  );
}

export default CompOne;
