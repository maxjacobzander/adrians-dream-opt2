import React from 'react';
import styled from 'styled-components';
import SarahImg from '../assets/images/main_images/Sarah at Adrians Dream Desk.jpeg'

const AboutComponent = () => {

    const AboutDiv = styled.div`
        background: #a3d1e7;
        height: auto;
        width: 100%;
        margin-top: -50px;
    `

    const Welcome = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        color: #1a3959;
        font-size: 6rem;
    `

    const Blurb = styled.p`
        font-family: factoria, serif;
        font-weight: 300;
        font-style: normal;
        text-align: center;
        align-items: center;
        font-size: 1.7rem;
        line-height: 2;
        color: #1a3959;
        width: 78%;
        margin: auto;
    `

    const SarahDiv = styled.div`
        position: relative;
    `

    const Signature = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-size: 7rem;
        text-align: center;
        color: #1a3959;
    `

    const SarahPic = styled.img`
        height: 400px;
        width: auto;
        border-radius: 50%
    `

    return (
        <AboutDiv>
            <Welcome>
                <br />
                welcome to adrian's dream
            </Welcome>
            <Blurb>
            This business is dedicated to my son Adrian.
            He passed before we could get to know him and before he could have any brothers and/or sisters.
            His life revealed to us a genetic condition that affects my health and the health of any future children.
            I’ve created Adrian’s Dream to support my IVF journey and my son's dream of having siblings.
            <br /><br/>
            Thank you for reading and thank you for your support!
            </Blurb>
            <SarahDiv>
                <Signature>
                    Sarah Vega
                </Signature>
                <SarahPic src={SarahImg} alt="Sarah at booth" />
            </SarahDiv>
            <br />
        </AboutDiv>
    );
}

export default AboutComponent;
