// App.js
import React from 'react';
import Header from './components/Header';
import Contents from './components/Contents';

function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    minHeight: '100vh',
    backgroundColor: 'white',
  };

  return (
    <div style={appStyle}>
      <Header />
      <Contents />
    </div>
  );
}

export default App;
