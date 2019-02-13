import React from 'react'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <ul>
            <li className="logo">
              <a href="/"><img src="https://d1ixjh1f6kszit.cloudfront.net/img/_logo_ukmedix.png" /></a>
            </li>
            <li>
              <a href="/treatments">Treatments</a>
            </li>
            <li>
              <a href="/how-it-works">How It Works</a>
            </li>
            <li>
              <a href="about-us">About Us</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="altOnly">
              <i className="fa fa-search" aria-hidden="true"></i>
            </li>
            <li className="altOnly">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </li>
        </ul>
    </nav>
)

export default Nav
