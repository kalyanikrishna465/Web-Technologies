// npm install @fortawesome/fontawesome-free
import React from 'react';
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Text from './components/Text';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Ensure components are aligned horizontally
    gap: '0px',
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div style={containerStyle}>  
        <Text />
        <Contents />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
