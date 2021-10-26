import React from "react"
import lovely from '../assets/images/lovely.jpg'; // Tell webpack this JS file uses this image

const About = () => {

  return (
    <section className="l-section about">
      <div className="l-container">
        <h2 className="cmn-heading"><span>About Me</span></h2>

        <div className="about-inner">
          <div className="about-thumb-monster">
            <div className="about-thumb-monster-ear"></div>
            <div className="about-thumb-monster-head">
              <div className="about-thumb-monster-eyes">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="about-thumb">
              <div className="about-thumb-monster-mouth">
                <div className="about-thumb-monster-teeth-top">
                  <span></span>
                  <span></span>
                </div>
                <div className="about-thumb-monster-teeth-bottom">
                <span></span>
                <span></span>
                </div>
              </div>

              <picture>

                <img src={lovely} alt="lovely"/>
              </picture>
            </div>
            <div className="about-thumb-moster-left-hand">
              <span></span>
            </div>

            <div className="about-thumb-moster-right-hand">
              <span></span>
            </div>

            <div className="about-thumb-moster-left-feet">
              <span></span>
            </div>
            <div className="about-thumb-moster-right-feet">
              <span></span>
            </div>
          </div>

          <div className="about-info">
          <p>I'm a front-end developer with 8 years of experience. My websites are primarily hand-coded using HTML, CSS, & JavaScript. I look for creative ways to push the boundaries of website fron-end code without compromising on browser support and performance.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
