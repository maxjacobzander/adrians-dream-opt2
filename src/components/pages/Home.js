import React from 'react';
import AboutComponent from '../AboutComponent';
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
        <AboutComponent />
        <Gallery />
        <Workshops />
        <Events />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;
