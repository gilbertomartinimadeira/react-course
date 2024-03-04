import React from 'react'

import star from '../images/star.png'

export default function Card(props) {

    const { img,
            rating,
            reviewCount,
            country,
            title,
            price } = props;

    return (
        <div className='card'>
            <img src={img} className='card--image' alt="card"></img>
            <div className='card--stats'>
                <img className='card--star' src={star} alt="star"></img>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) * </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>)
}