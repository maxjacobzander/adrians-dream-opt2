import React from 'react';
import styled from 'styled-components';

const Workshops = () => {
    const WorkshopWrapper = styled.div`
        background: #fff;
        height: 100vh;
        width: 100%;
        margin-top: -50px;
    `

    const WorkshopHeader = styled.h1`
    font-family: turbinado-pro, sans-serif;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    color: #1a3959;
    font-size: 6rem;
    padding-top: 5%;
    `

    const WorkshopBlurb = styled.p`
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

    return (
        <WorkshopWrapper id="workshops">
            <WorkshopHeader>
                workshops
            </WorkshopHeader>
            <WorkshopBlurb>
                Adrian's Dream offers workshops where Sarah teaches you how to create your own special dreamcatchers!
            </WorkshopBlurb>
        </WorkshopWrapper>
    );
}

export default Workshops;
