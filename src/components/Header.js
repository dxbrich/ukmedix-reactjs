import React from 'react'

const Header = (props) => (
    <header id="header" className="alt">
				<a href="/" className="logo"><img src="https://d1ixjh1f6kszit.cloudfront.net/img/_logo_ukmedix.png" /></a>
        <div><input type="text" name="searchSite" placeholder="Search UKMedix Products" /><i className="fa fa-search" aria-hidden="true"></i></div>
        <div className="phoneHeader">
            <span className="phoneNumber"><i className="fa fa-phone" aria-hidden="true"></i> 0203 286 3349</span>
            <div className="phoneInfo">Available 24 hours a day, 7 days a week</div>
          </div>
		</header>
)

export default Header
