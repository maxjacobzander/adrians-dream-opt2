import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Events from '../Events';
import Footer from '../Footer';
import Gallery from '../Gallery';
import Main from '../Main';
import Workshops from '../Workshops';

const Home = () => {
    return (
        <>
        <Main />
        <About />
        <Gallery />
        <Workshops />
        <Events />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;
