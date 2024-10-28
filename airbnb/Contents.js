// Contents.js
import React from 'react';
import office from './office.png';

function Contents() {
  const contentStyle = {
    padding: '40px',
    maxWidth: '1350px',
    textAlign: 'left'
  };

  const titleStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const subtitleStyle = {
    color: '#777',
    fontSize: '1.2em',
    marginTop: '10px',
  };

  const blogTitleStyle = {
    fontSize: '1.5em',
    marginTop: '30px',
  };

  const imageStyle = {
    width: '120%',
    marginTop: '0px',
  };

  const blogPostTitleStyle = {
    fontSize: '1.2em',
    marginTop: '10px',
    color: '#333',
  };

  return (
    <main style={contentStyle}>
      <h1 style={titleStyle}>Airbnb Engineering & Data Science</h1>
      <p style={subtitleStyle}>Creative engineers and data scientists building a world where you can belong anywhere</p>
      
      <h2 style={blogTitleStyle}>Blog Posts</h2>
      <div>
        <img src={office} alt="Office Space" style={imageStyle} />
      </div>
      <h3 style={blogPostTitleStyle}>On Spark, Hive, and Small Files: An In-Depth Look at Spark Partitioning Strategies</h3>
    </main>
  );
}

export default Contents;
