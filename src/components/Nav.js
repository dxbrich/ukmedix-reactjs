import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['treatments', 'how-it-works', 'about-us', 'third', 'fourth', 'contact'] } currentClassName="is-active" offset={0}>
            <li>
                <Scroll type="id" element="treatments">
                    <a href="/treatments">Treatments</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="how-it-works">
                    <a href="/how-it-works">How It Works</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="about-us">
                    <a href="about-us">About Us</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="third">
                    <a href="#">Delivery</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="fourth">
                    <a href="#">FAQ</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
