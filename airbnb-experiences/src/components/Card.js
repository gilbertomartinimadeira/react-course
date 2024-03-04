import React from 'react'
import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card(){

    let country = 'USA';
    return (
    <div className='card'>
                <img src={katie} className='card--image' alt="card"></img>
                <div className='card--stats'>
                    <img className='card--star' src={star} alt="star"></img>
                    <span>5.0</span>
                    <span className="gray">(6) * </span>
                    <span className="gray">{country}</span>                
                </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $138</span> / person</p>
            </div>)
}