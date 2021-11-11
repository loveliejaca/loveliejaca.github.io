import React from "react"

import Parallax from './Parallax'
import {ReactComponent as ReactCircle} from '../assets/images/circle.svg';

import lovely from '../assets/images/lovely.png';
import resume from '../assets/images/resume.pdf';



const Mv = () => {


  return (
    <div className="mv">
      <div className="mv-inner">

        <div className="mv-thumb">
          <Parallax total="5" modifier="mv"/>
          <ReactCircle/>
          <picture>
            <img src={lovely} alt="lovely"/>
          </picture>
        </div>

        <div className="mv-dtl">
          <h1 className="mv-name">
            <span>Hi, I am</span>
            <span className="mv-info-name">Lovely</span>
          </h1>
          <div className="mv-info">
            <p className="mv-info-txt">I'm a Front-end Developer with 8 years of experience. My websites are primarily hand-coded using HTML, CSS, & JavaScript.</p>

            <p className="mv-info-subtxt">I like building websites and bringing creative designs to life!</p>

            <a className="mv-resume" href={resume} download>Resume</a>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Mv
