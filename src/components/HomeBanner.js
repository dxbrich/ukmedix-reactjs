import React from 'react'

const HomeBanner = (props) => (
    <section id="banner">
        <div className="inner">

              <header>
                <h2>UKMedix - 3 steps</h2>
              </header>
                <ul>
                  <li>Choose a treatment</li>
                  <li>&#8681;</li>
                  <li>Online consultation</li>
                  <li>&#8681;</li>
                  <li>Discreet delivery</li>
                </ul>
              <footer>
                <ul className="buttons stacked">
                  <li><a href="#main" className="button fit scrolly">Let's go <i className="fa fa-angle-double-right" aria-hidden="true"></i></a></li>
                </ul>
              </footer>

        </div>
		</section>
)

export default HomeBanner
