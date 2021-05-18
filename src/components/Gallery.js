import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import Img1 from '../assets/images/dreamcatchers/Dreamcatcher black background with feathers.jpeg';
import Img2 from '../assets/images/dreamcatchers/Dreamcatcher with black background and flowers.jpeg';
import Img3 from '../assets/images/dreamcatchers/Dreamcatcher for Turtle.jpeg';
import Img4 from '../assets/images/dreamcatchers/Dreamcatcher with violet flowers.jpeg';
import Img5 from '../assets/images/dreamcatchers/Dreamcatcher with white flower.jpeg';
import Img6 from '../assets/images/dreamcatchers/Music Dreamcatcher.jpeg';
import Img7 from '../assets/images/dreamcatchers/Unicorn Dreamcatcher.jpeg';
import Img8 from '../assets/images/dreamcatchers/Feathers on stick tricolor.jpeg';
import Img9 from '../assets/images/dreamcatchers/Feathers on stick white in middle.jpeg';
import Img10 from '../assets/images/dreamcatchers/Heart Macrame.jpeg';
import Img11 from '../assets/images/dreamcatchers/White feather on stick.jpeg';

const Gallery = () => {
    
    const GalleryCarousel = styled.div`
        background: #1a3959;
        height: auto;
        color: #fff;
        font-size: 20px;
        padding-bottom: 30px;
    `
    
    const Header = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        font-size: 6rem;
        margin-top: 5%;
    `
    
    const ProductMessage = styled.p`
        display: flex;
        width: 80%;
        align-items: center;
        text-align: center;
        margin: auto;
        font-family: factoria, serif;
        font-weight: 300;
        font-style: normal;
        line-height: 2;
        margin-bottom: 3%;
        margin-top: -40px;
    `

    return (
        <GalleryCarousel>
        <br/>
        <Header>product gallery</Header>
        <ProductMessage>
        Here are some examples of the products I have made for my clients. If you see one that you particularly like, or want to create something entirely your own, let me know!
        </ProductMessage>
            <Carousel infiniteLoop useKeyboardArrows autoPlay style={{height:"10px"}}>
                <div>
                    <img src={Img1} alt="Dreamcatcher with Black Background 1" />
                </div>
                <div>
                    <img src={Img2} alt="Dreamcatcher with Black Background 2" />
                </div>
                <div>
                    <img src={Img3} alt="Dreamcatcher for Turtle" />
                </div>
                <div>
                    <img src={Img4} alt="Dreamcatcher with Violet Flowers" />
                </div>
                <div>
                    <img src={Img5} alt="Dreamcatcher with White Flower" />
                </div>
                <div>
                    <img src={Img6} alt="Music Dreamcatcher" />
                </div>
                <div>
                    <img src={Img7} alt="Unicorn Dreamcatcher" />
                </div>
                <div>
                    <img src={Img8} alt="Feathers on Stick, Tricolor" />
                </div>
                <div>
                    <img src={Img9} alt="Feathers on Stick, White in Middle" />
                </div>
                <div>
                    <img src={Img10} alt="Heart Macrame" />
                </div>
                <div>
                    <img src={Img11} alt="White feather on Stick" />
                </div>
            </Carousel>

        </GalleryCarousel>
    );
}

export default Gallery;
