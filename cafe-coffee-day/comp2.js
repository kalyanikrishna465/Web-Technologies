// ./components/comp2.js
import React from 'react';
import compTwoImage from './comp2.PNG';

function CompTwo() {
  return (
    <main style={{ padding: '40px', textAlign: 'center', backgroundColor: '#ffe300', flex: '1' }}>
      <section style={{ marginBottom: '40px' }}>
        <img src={compTwoImage} alt="comp2" style={{ width: '100%', marginTop: '20px', float: 'right' }} />
      </section>
      <button style={{
          backgroundColor: '#d71921',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}><b>FIND A CAFE NEAR YOU</b></button>
    </main>
  );
}

export default CompTwo;
