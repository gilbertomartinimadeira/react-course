import React from "react";

import grid from  '../images/photo-grid.png'

export default function Hero(){
    return (
        <section className="hero">
            <img src={grid} alt=""className="hero--photo" ></img>

            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind host-all without leaving home.
            </p>
        </section>);
}
