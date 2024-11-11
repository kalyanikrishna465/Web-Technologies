// App.js
import React from 'react';
import Header from './components/Header';
import CompOne from './components/comp1';
import CompTwo from './components/comp2';
import CompThree from './components/comp3';
import Footer from './components/Footer';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Ensures components are aligned horizontally
    gap: '0px',
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>  
        <CompOne />
        <CompTwo />
        <CompThree />
      </div>
      <Footer />
    </>
  );
}

export default App;
