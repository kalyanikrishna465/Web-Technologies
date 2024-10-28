// src/App.js
import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import background from './background.jpg'; // Import the background image
import './App.css';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`, // Use the imported image
      backgroundSize: 'cover',               // Correct camel case
      backgroundPosition: 'center',          // Correct camel case
      backgroundRepeat: 'no-repeat',         // Correct camel case
      minHeight: '100vh',                    // Change to minHeight to ensure it covers all content
      margin: 0,
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      color: 'white', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
