// src/components/LoginForm.js
import React from 'react';

function LoginForm() {
  return (
    <div style={{ 
      textAlign: 'center', 
      color: 'white', 
      flexGrow: 1, 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <h2 style={{ fontSize: '2.5rem' }}>Unlimited movies, TV shows, and more</h2>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <input
          type="email"
          placeholder="Email address"
          style={{ padding: '10px', fontSize: '1rem', width: '300px', borderRadius: '2px', border: 'none', marginRight: '10px' }}
        />
        <button
          style={{ padding: '10px 20px', backgroundColor: '#E50914', color: 'white', fontSize: '1rem', border: 'none', borderRadius: '2px' }}
        >
          Get Started
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
