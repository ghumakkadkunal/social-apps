/* eslint-disable no-unused-vars */
import React from 'react';
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
            width="747" 
            height="420" 
            src="https://www.youtube.com/embed/ZM-6wmFIvZU" 
            title="Humnava Mere Cover | Kunal Goyal | Jubin Nautiyal | Karaoke Version" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          >
          </iframe>
        </div>
      </>
  )
}

export default Social;