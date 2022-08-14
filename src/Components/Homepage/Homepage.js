import React from 'react';
import "./Homepage.css";
import {
  // Link, 
  withRouter 
} from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Social from '../Social/Social';

const Homepage = () => {
  return (
    <>
      <section>
        <Header />
        <Social />
        <Footer />
      </section>
    </>
  )
}

export default withRouter(Homepage);