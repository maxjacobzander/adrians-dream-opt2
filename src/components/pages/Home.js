import React from 'react';
import AboutComponent from '../AboutComponent';
import Contact from '../Contact';
import Events from '../Events';
import Footer from '../Footer';
import Gallery from '../Gallery';
import Main from '../Main';

const Home = () => {
    return (
        <>
        <Main />
        <AboutComponent />
        <Gallery />
        <Events />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;
