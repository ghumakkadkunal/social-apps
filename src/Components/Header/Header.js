import React from 'react';
import "./Header.css";
import Logo from './singing_logo.png';

const Header = () => {
  return (
    <>
      <section>
        <div className="headerComponent">
          <div className="headerLogo">
            <img src={Logo} alt='logo' />
            Ghumakkad Kunal
          </div>
          <ul className="ul-header">
            <li>Home</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header;