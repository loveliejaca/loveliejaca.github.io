import React  from "react"

import Parallax from './Parallax'
import {ReactComponent as ReactCircle} from '../assets/images/circle.svg';

import lovely from '../assets/images/lovely.png';
import resume from '../assets/images/resume.pdf';



const Mv = () => {

  // useLayoutEffect(() => {
  //   let html = document.querySelector('html');
  //
  //   html.style.overflow = 'hidden';
  //
  // },[]);


  return (
    <div className="mv">
      <div className="mv-inner">

        <div className="mv-thumb">
          <Parallax total="10" modifier="mv"/>
          <ReactCircle/>
          <picture>
            <img src={lovely} alt="lovely"/>
          </picture>
        </div>

        <div className="mv-dtl">
          <h1 className="mv-name">
            <div className="mv-name-inner">
              <div className="mv-name-row">
                <div className="mv-name-group">
                  <span>H</span>
                  <span>i</span>
                  <span>,</span>
                </div>
                <div className="mv-name-group">
                  <span>I</span>
                </div>
                <div className="mv-name-group">
                  <span>a</span>
                  <span>m</span>
                </div>
              </div>
              <div className="mv-name-row">
                <div className="mv-name-group">
                  <span className="mv-info-name">L</span>
                  <span className="mv-info-name">o</span>
                  <span className="mv-info-name">v</span>
                  <span className="mv-info-name">e</span>
                  <span className="mv-info-name">l</span>
                  <span className="mv-info-name">y</span>
                </div>
              </div>

            </div>
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
