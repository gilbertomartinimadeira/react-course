import React from 'react';

export default function Header() {
    return (<header>
        <nav>
            <img className="nav-logo" src="./react-logo.png" alt="react logo"  />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>)
}