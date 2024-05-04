import React from 'react';
import LeftNavBar from '../components/leftNavBar';

const About = () => {
  return (
    <div style={{ display: 'flex' }}>
        <LeftNavBar />
        <div style={{margin: '10px'}}>
          <h1>About Page</h1>
          <p>This page is owned and maintained (or not) by your name</p>
          <p>Copyright 2024</p>
          <p>For any inquiries, suggestions or requests, feel free to fill out our suggestions/requests form at</p>
          <a href="" target="_blank" rel="noopener noreferrer">your link here</a>
          <p>Or contact us at:</p>
          <a href="mailto:yourname@yourdomain.com">mailto:yourname@yourdomain.com</a>
        </div>
    </div>
  );
};

export default About;
