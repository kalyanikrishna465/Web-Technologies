// ./components/Contents.js
import React from 'react';
import compThreeImage from './comp3.PNG';

function CompThree() {
  return (
    <main style={{ padding: '40px', textAlign: 'center', backgroundColor: '#60d3dd', flex: '1' }}>
      <section style={{ marginBottom: '40px' }}>
        <img src={compThreeImage} alt="comp3" style={{ width: '100%', marginTop: '20px', float: 'right' }} />
      </section>
      <button style={{
          backgroundColor: '#d71921',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}><b>SHOP NOW</b></button>
    </main>
  );
}

export default CompThree;
