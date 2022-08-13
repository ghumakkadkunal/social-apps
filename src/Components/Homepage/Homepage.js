import React from 'react';
import "./Homepage.css";
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

export default Homepage;