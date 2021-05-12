import React from 'react';
import styled from 'styled-components';
import img from '../assets/images/logos/AdriansDreamLogoText.jpeg';
import dreamcatcher from '../assets/images/logos/AdriansDreamLogoDreamcatcher.jpeg';


const Main = () => {
    const LogoDiv = styled.div`
        display: flex;
        height: 100vh;
        background: #fff;
        flex-direction: row;
    `

    const DreamcatcherLogo = styled.img`
        height: 80%;
        width: auto;
        margin-left: 15%;
        margin-top: 5%;
        display: flex;
        position: relative;
        align-items: left;
        }
    `

    const AdriansDreamLogoText = styled.img`
        height: 40%;
        width: auto;
        display: flex;
        position: relative;
        margin-left: 5%;
        margin-top: 5%;
    `

    return (
        <LogoDiv className='main-container'>
            <DreamcatcherLogo src={dreamcatcher} alt="Dreamcatcher Logo" />
            <AdriansDreamLogoText src={img} alt="Adrian's Dream Logo" />
        </LogoDiv>
    );
}

export default Main;
