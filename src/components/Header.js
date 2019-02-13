import React from 'react'

const Header = (props) => (
    <header id="header" className="alt">
				<a href="/" class="logo"><img src="https://d1ixjh1f6kszit.cloudfront.net/img/_logo_ukmedix.png" /></a>
        <div><input type="text" name="searchSite" placeholder="Search UKMedix Products" /></div>
        <div className="phoneHeader">
            <img src="https://d1ixjh1f6kszit.cloudfront.net/phone-logo.png" className="phone" alt="Call UKMedix" />
            <span className="phoneNumber">0203 286 3349</span><br/>
            <div className="phoneInfo">Available 24 hours a day, 7 days a week</div>
          </div>
		</header>
)

export default Header
