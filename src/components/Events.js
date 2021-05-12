import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import './Cards.css';
import ThursdaysOnMain from '../assets/images/art_generic/Thursdays on Main.png';
import Waukee from '../assets/images/art_generic/Waukee Arts Festival.jpeg';

const Events = () => {
    const UpcomingEventsDiv = styled.div`
        background: #eee3b1;
        font-size: 20px;
        margin-top: -35px;
        padding: 4rem;
    `

    const EventsHeader = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        color: #1a3959;
        font-size: 6rem;
    `

    const EventsBlurb = styled.h3`
         width: 80%;
         align-items: center;
         text-align: center;
         margin: auto;
         font-family: factoria, serif;
         font-weight: 300;
         font-style: normal;
         line-height: 2;
        color: #1a3959;
    `

    const CardsContainer = styled.div`
        align-items: center;
        width: 90%;
        margin: 0 auto;
    `

    const CardWrapper = styled.div`
        position: relative;
        margin: 50px 0 45px;
    `


    return (
        <UpcomingEventsDiv>
            <EventsHeader>upcoming events</EventsHeader>
            <EventsBlurb>
            Adrian's Dream is a frequent vendor at craft fairs throughout Iowa! In addition to finding us at a craft fair near you, we also offer workshops where Sarah teaches you to create your own special dreamcatchers!
            <br/>
            Check back here for both upcoming craft fair appearances and workshop dates/locations, and contact us to discuss scheduling a workshop near you!
            </EventsBlurb>
            <CardsContainer>
                <CardWrapper>
                    <ul className="cards__items">
                    <CardItem
                        src={ThursdaysOnMain}
                        textDate="June 24"
                        textName="Thursdays on Main"
                        textLocation="Clear Lake, IA"
                        label="CRAFT FAIR"
                        />
                        <CardItem
                        src={Waukee}
                        textDate="July 16"
                        textName="Waukee Arts Festival"
                        textLocation="Waukee, IA"
                        label="CRAFT FAIR"
                        />
                            <CardItem
                        src={ThursdaysOnMain}
                        textDate="August 19"
                        textName="Thursdays on Main"
                        textLocation="Clear Lake, IA"
                        label="CRAFT FAIR"
                        />
                    </ul>
                </CardWrapper>
            </CardsContainer>
        </UpcomingEventsDiv>
    );
}

export default Events;
