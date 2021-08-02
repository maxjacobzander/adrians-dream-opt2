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
import SarahWorkshopPic from '../assets/images/workshops/IMG_0670.jpeg';
import PrivateWorkshopPic from '../assets/images/workshops/IMG_0682.jpeg';
import WorkshopGroupPic from '../assets/images/workshops/IMG_0659.jpeg';
import Carcatcher from '../assets/images/dreamcatchers/Carcatcher.jpeg';
import Kits from '../assets/images/dreamcatchers/DIY Kits.jpeg';
import Moon1 from '../assets/images/dreamcatchers/IMG_0904.jpeg';
import Moon2 from '../assets/images/dreamcatchers/IMG_0905.JPG';
import Moon3 from '../assets/images/dreamcatchers/IMG_0906.JPG';
import ThreeUnicorns from '../assets/images/dreamcatchers/3 Unicorns.jpg';
import TwoDreamcatchersAndMacrame from '../assets/images/dreamcatchers/2 dreamcatchers and one macrame on wall.jpeg';
import GirlWithDreamcatcher1 from '../assets/images/workshops/IMG_0675.jpeg';
import GirlWithDreamcatcher2 from '../assets/images/workshops/IMG_0676.jpeg';
import CreamDreamcatacherWithDarkFlower from '../assets/images/dreamcatchers/Cream dreamcatcher with dark flower.jpeg';
import Totebag from '../assets/images/main_images/Adrians_Dream_Tote.jpeg';

const Gallery = () => {
    
    const GalleryCarousel = styled.div`
        background: #1a3959;
        height: auto;
        color: #fff;
        font-size: 20px;
        padding-bottom: 30px;
        margin-top: -55px;
    `
    
    const Header = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        font-size: 6rem;
        margin-top: 2%;
        @media screen and (max-width: 1025px) {
            line-height: .9;
        }
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
        font-size: 1.7rem;
        line-height: 2;
        margin-bottom: 3%;
        margin-top: -40px;
        @media screen and (max-width: 1025px) {
        font-size: 20px;
        }
    `

    return (
        <GalleryCarousel id="gallery">
        <br/>
        <Header>gallery</Header>
        <ProductMessage>
        Here are some examples of the creations Sarah has made for her clients as well as some photos from past workshops. If you see anything that you like, or want to book a workshop of your own, please let us know!
        </ProductMessage>
            <Carousel infiniteLoop useKeyboardArrows autoPlay style={{height:"10px"}}>
                <div>
                    <img src={SarahWorkshopPic} alt="Sarah at Workshop" />
                </div>
                <div>
                    <img src={Totebag} alt="Adrian's Dream Tote Bag" />
                </div>
                <div>
                    <img src={ThreeUnicorns} alt="Three Unicorns" />
                </div>
                <div>
                    <img src={Img1} alt="Dreamcatcher with Black Background 1" />
                </div>
                <div>
                    <img src={Img2} alt="Dreamcatcher with Black Background 2" />
                </div>
                <div>
                    <img src={Carcatcher} alt="Carcatcher" />
                </div>
                <div>
                    <img src={Kits} alt="BYO Kits" />
                </div>
                <div>
                    <img src={WorkshopGroupPic} alt="Large Group Workshop" />
                </div>
                <div>
                    <img src={PrivateWorkshopPic} alt="Private Workshop" />
                </div>
                <div>
                    <img src={GirlWithDreamcatcher1} alt="Girl with Dreamcatcher 1" />
                </div>
                <div>
                    <img src={GirlWithDreamcatcher2} alt="Girl with Dreamcatcher 2" />
                </div>
                <div>
                    <img src={Moon1} alt="Moon 1" />
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
                    <img src={Moon2} alt="Moon 2" />
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
                <div>
                    <img src={Moon3} alt="Moon 3" />
                </div>
                <div>
                    <img src={TwoDreamcatchersAndMacrame} alt="Two Dreamcatchers" />
                </div>
                <div>
                    <img src={CreamDreamcatacherWithDarkFlower} alt="Cream Dreamcatcher with Dark Flower" />
                </div>
            </Carousel>

        </GalleryCarousel>
    );
}

export default Gallery;
