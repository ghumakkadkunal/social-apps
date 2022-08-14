import React from 'react';
import "./Header.css";
import Logo from './singing_logo.png';
import { createBrowserHistory } from 'history';

const Header = () => {
  const history = createBrowserHistory();
  return (
    <>
      <section>
        <div className="headerComponent">
          <div className="headerLogo" onClick={() => history.push(`/social-apps`)}>
            <img src={Logo} alt='logo' />
            Ghumakkad Kunal
          </div>
          <ul className="ul-header">
            <li>About Us</li>
            <li onClick={() => history.push(`/products`)}>Products</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header;