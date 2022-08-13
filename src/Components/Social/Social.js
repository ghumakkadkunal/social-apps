/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Social.css";

const Social = (props) => {
  return (
      <>
        <div className="headerComponent">
          <div className="headerLogo">Welcome To Our Website</div>
          <ul className="ul-header">
            <li>Home</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div style={{ padding: '2rem' }}>
          <div>Hi</div>
          <iframe 
            width="420" 
            height="315"
            src="https://youtu.be/J5fi_Kp5BAM"
          ></iframe>
        </div>
      </>
  )
}

export default Social;