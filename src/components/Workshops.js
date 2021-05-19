import React from 'react';
import styled from 'styled-components';
// import SarahWorkshopPic from '../assets/images/workshops/IMG_0670.jpeg';
import LargeWorkshopGroup from '../assets/images/workshops/IMG_0674.jpeg';
// import PrivateWorkshopPic from '../assets/images/workshops/IMG_0682.jpeg';

const Workshops = () => {
    const WorkshopWrapper = styled.div`
        background: #fff;
        height: auto;
        width: 100%;
        margin-top: -50px;
        margin-bottom: 50px;
    `

    const SubWrapper = styled.div`
        width: 78%;
        display: flex;
        padding: 0 80px 0 80px;
        height: auto;
        margin-top: -50px;
        @media screen and (max-width: 1025px) {
            flex-direction: column;
            padding: 0;
            display: inline;
            width: 78%;
        }
    `

    const WorkshopHeader = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        color: #1a3959;
        font-size: 6rem;
        padding-top: 5%;
        @media screen and (max-width: 1025px) {
            line-height: .9;
        }
    `

    const WorkshopBlurb = styled.p`
        font-family: factoria, serif;
        font-weight: 300;
        font-style: normal;
        text-align: justify;
        align-items: center;
        font-size: 1.7rem;
        line-height: 2;
        color: #1a3959;
        width: 50%;
        margin-left: 10%;
        @media screen and (max-width: 1025px) {
            font-size: 20px;
            width: 80%;
            align-items: center;
            margin-left: 10%;
        }
    `

    const WorkshopPic = styled.img`
        height: 400px;
        width: auto;
        border-radius: 15%;
        margin-top: 3%;
        @media screen and (max-width: 1025px) {
            height: auto;
            width: 80%;
            align-content: center;
            align-items: center;
        }
    `

    return (
        <WorkshopWrapper id="workshops">
            <WorkshopHeader>
                workshops
            </WorkshopHeader>
            <SubWrapper>
                <WorkshopPic src={LargeWorkshopGroup}></WorkshopPic>
            <WorkshopBlurb>
                Dreamcatchers are more than decorative — they have been used through vast cultures both as a protective talisman and as a way to set positive intentions and manifestations. Adrian's Dream offers workshops where Sarah teaches you how to create your own special dreamcatchers!
            </WorkshopBlurb>
            </SubWrapper>
        </WorkshopWrapper>
    );
}

export default Workshops;
