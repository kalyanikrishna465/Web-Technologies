import React from 'react';
import img from './photo.PNG'

function Photo() {
  return (
    <main style={{ padding: '40px', textAlign: 'center' ,backgroundColor: '#3858e9',flex :'1'}}>
      <section style={{ marginBottom: '40px' }}>
        <img src={img} alt="Word Press App" style={{ width: '100%', marginTop: '20px',align:'right' }} />
      </section>
    </main>
  );
}

export default Photo;
