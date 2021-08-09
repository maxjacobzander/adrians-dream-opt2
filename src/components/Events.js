import React from 'react';
import * as Styled from './Events.style';
import CardItem from './CardItem';
import './Cards.css';
import ThursdaysOnMain from '../assets/images/art_generic/Thursdays on Main.png';
import PolkMakersMarket from '../assets/images/art_generic/Polk County Makers Market.jpeg';

const Events = () => {
    return (
        <Styled.UpcomingEventsDiv id="events">
            <Styled.EventsHeader>upcoming events</Styled.EventsHeader>
            <Styled.EventsBlurb>
            In addition to our workshops, Adrian's Dream is a frequent vendor at craft fairs throughout the state of Iowa! Find us at a craft fair near you to check our current crafts; to commission a special piece just for you; or to just say hi!
            <br/>
            <p style={{textAlign:"center"}}>Check back here for both upcoming craft fair appearances and workshop dates/locations!</p>
            </Styled.EventsBlurb>
            <Styled.CardsContainer>
                <Styled.CardWrapper>
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
                        src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/222683330_1128901587598073_8238544305429981975_n.jpg?_nc_cat=100&ccb=1-4&_nc_sid=340051&_nc_ohc=rpCRrQPD3MUAX8hnHM8&_nc_ht=scontent-lga3-1.xx&oh=7bac51bd77323cd2ba733bd833c68b3a&oe=61150BDD"
                        textDate="September 18"
                        textName="Make A Dream Catcher Workshop - A Mindful Craft"
                        textLocation="Ventura, IA"
                        label="WORKSHOP"
                        link="https://www.facebook.com/events/820997698788649/?ti=ls"
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
                </Styled.CardWrapper>
            </Styled.CardsContainer>
        </Styled.UpcomingEventsDiv>
    );
}

export default Events;
