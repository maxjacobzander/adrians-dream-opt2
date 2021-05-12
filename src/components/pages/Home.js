import React from 'react';
import AboutComponent from '../AboutComponent';
import Events from '../Events';
import Gallery from '../Gallery';
import Main from '../Main';
import About from './About';

const Home = () => {
    return (
        <>
        <Main />
        <AboutComponent />
        <Gallery />
        <Events />
        </>
    );
}

export default Home;
