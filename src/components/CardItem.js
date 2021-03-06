import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <a href={props.link} target="_blank" rel="noreferrer noopener"><img src={props.src} alt= {props.alt} className='cards__item__img'/></a>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                            {props.textDate}
                            <br />
                            {props.textName}
                            <br />
                            {props.textLocation}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
