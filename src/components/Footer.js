import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background: #1a3959;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
`

const FacebookIcon = styled.i`
    color: #fff;
`

const CopyrightInfo = styled.p`
    color: #fff;
    font-size: 10px;
`

const Footer = () => {
    return (
        <FooterContainer>
        <a href="https://www.facebook.com/ThisisAdriansDream/"><FacebookIcon className= 'fab fa-facebook fa-2x' /></a>
        <CopyrightInfo>
            © Adrian's Dream 2021
            <br />
            Designed by Max Zander 
        </CopyrightInfo>
        </FooterContainer>
    );
}

export default Footer;
