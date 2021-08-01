import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import './Cards.css';
import ThursdaysOnMain from '../assets/images/art_generic/Thursdays on Main.png';
// import Waukee from '../assets/images/art_generic/Waukee Arts Festival.jpeg';
import WestDesMoines from '../assets/images/art_generic/West Des Moines.png';
import PolkMakersMarket from '../assets/images/art_generic/Polk County Makers Market.jpeg';

const Events = () => {
    const UpcomingEventsDiv = styled.div`
        background: #eee3b1;
        font-size: 20px;
        margin-top: -35px;
        margin-bottom: 0;
        width: 100%;
        height: auto;
        padding-bottom: 50px;
    `

    const EventsHeader = styled.h1`
        font-family: turbinado-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        color: #1a3959;
        font-size: 6rem;
        margin-top: -18px;
        padding-top: 50px;
        @media screen and (max-width: 1025px) {
            line-height: .9;
        }
    `

    const EventsBlurb = styled.h3`
         width: 80%;
         align-items: center;
         text-align: justify;
         margin: auto;
         font-family: factoria, serif;
         font-weight: 300;
         font-style: normal;
         font-size: 1.7rem;
         line-height: 2;
         color: #1a3959;
         @media screen and (max-width: 1025px) {
            font-size: 20px;
            text-align: center;
        }
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
        <UpcomingEventsDiv id="events">
            <EventsHeader>upcoming events</EventsHeader>
            <EventsBlurb>
            In addition to our workshops, Adrian's Dream is a frequent vendor at craft fairs throughout the state of Iowa! Find us at a craft fair near you to check our current crafts; to commission a special piece just for you; or to just say hi!
            <br/>
            <p style={{textAlign:"center"}}>Check back here for both upcoming craft fair appearances and workshop dates/locations!</p>
            </EventsBlurb>
            <CardsContainer>
                <CardWrapper>
                    <ul className="cards__items">
                        <CardItem
                        src={ThursdaysOnMain}
                        textDate="August 19"
                        textName="Thursdays on Main"
                        textLocation="Clear Lake, IA"
                        label="CRAFT FAIR"
                        link="https://www.facebook.com/ThursdaysOnMain/"
                        />
                        <CardItem
                        src={PolkMakersMarket}
                        textDate="November 21"
                        textName="Fall Makers Market - Locally Grown, Raised, Created"
                        textLocation="Granger, IA"
                        label="CRAFT FAIR"
                        link="https://www.jesterparknaturecenter.com/calendar-events/fall-makers-market/?fbclid=IwAR0qhNiegEa49U9LSuc_asPPYaa30NKzeSHGLt0drRB88fSzVgXFVQg01zs"
                        />
                    </ul>
                </CardWrapper>
            </CardsContainer>
        </UpcomingEventsDiv>
    );
}

export default Events;
