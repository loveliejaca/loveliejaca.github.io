import React from "react"

import Parallax from './Parallax'

import {ReactComponent as ReactCircle} from '../assets/images/circle.svg';

const Contact = () => {

  return (
    <>
      <Parallax total="5" modifier="contact"/>
      <div className="l-container">
        <div className="cmn-heading cmn-heading-contact">
          <h2 className="cmn-heading-text">
            <span className="cmn-heading-text-inner">CONTACT</span>
            <span className="cmn-heading-accent"></span>
          </h2>
        </div>

        <div className="contact-email">
          <a href="jlablab@gmail.com">jlablab@gmail.com</a>
        </div>

        <ul className="contact-social">
          <li className="contact-social-item">
            <a href="https://www.linkedin.com/in/lovely-jaca" target="_blank">
              <ReactCircle/>
              <i className="contact-ico contact-ico-linkedin"></i>
            </a>
          </li>
          <li className="contact-social-item">
            <a href="https://www.facebook.com/Lovely.Jaca" target="_blank">
              <ReactCircle/>
              <i className="contact-ico contact-ico-fb"></i>
            </a>
          </li>
          <li className="contact-social-item">
            <a href="https://www.instagram.com/lhubliee/" target="_blank">
              <ReactCircle/>
              <i className="contact-ico contact-ico-insta"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact



// <div className="skill-inner">
//     {
//       skillList.map((item, inde) => {
//         return <div className={`skill-txt skill-txt-${item.skill.toLowerCase().replace(/[ ,.]/g, "-")}`}><span>{item.skill}</span></div>
//       })
//     }
//
//
//   <div className="skill-circle">
//     <span>SKILLS</span>
//
//     <div className="skill-wheel">
//     {Array.apply(0, Array(8)).map(function (x, i) {
//       return <span key={i}></span>;
//     })}
//     </div>
//   </div>
// </div>
