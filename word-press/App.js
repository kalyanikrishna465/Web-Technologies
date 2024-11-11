import React from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Text from './components/Text';
import Footer from './components/Footer';

function App() {
  const containerStyle= {
    display: 'flex',
    gap:'0px',
    flexDirection:'row'
  };
  return(
    <>
    <div>
      <Header />
    </div>
    <div style={containerStyle}>
      <Text />
      <Photo />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
  
}

export default App;
