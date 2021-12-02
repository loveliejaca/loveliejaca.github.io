import React, { useLayoutEffect } from "react"
import akClinic from '../assets/images/ak-clinic.png'; // Tell webpack this JS file uses this image
import hitto from '../assets/images/hitto.png'; // Tell webpack this JS file uses this image
import lipple from '../assets/images/lipple.png'; // Tell webpack this JS file uses this image

import Parallax from './Parallax'


import {ReactComponent as ReactCircle} from '../assets/images/circle.svg';

const Project = () => {

  let projectList = [
    {
      title: 'AK co., ltd',
      image: akClinic,
      link: 'https://www.ak-co.jp/lp3/'
    },
    {
      title: 'HiTTO株式会社',
      image: hitto,
      link: 'https://www.hitto.co.jp/'
    },
    {
      title: 'Lipple inc.',
      image: lipple,
      link: 'https://lipple.co.jp/'
    }
  ];

  useLayoutEffect(() => {
    let projectItems = document.querySelectorAll('.project-item')
    let projectImg = document.querySelectorAll('.project-img')
    let accent =  document.querySelector('.project-img-accent')



    projectItems.forEach((element) => {

      element.addEventListener("mouseover", () => {

        projectImg.forEach((e) => {
          e.classList.remove('is-active');
        });

        let index = element.dataset.index;

        let activeClass = document.querySelector(`.project-img${index}`)

        activeClass.classList.add('is-active');

        if(accent) {
          accent.classList.add('is-animate');
        }

      }, false);


      element.addEventListener("mouseleave", function( event ) {
        if(accent) {
          accent.classList.remove('is-animate');
        }
      }, false);
    });
  },[]);




  return (
    <div className="l-section project">

      <Parallax total="10" modifier="project"/>

      <div className="l-container">
        <div className="cmn-heading cmn-heading-project">
          <h2 className="cmn-heading-text">
            <span className="cmn-heading-text-inner">PROJECTS</span>
            <span className="cmn-heading-accent"></span>
          </h2>
        </div>

          <div className="project-box">
            <ReactCircle />
            <ul className="project-list">
              {projectList.map((item, index) => {
                return (
                  <li className={`project-item project-item${index+1}`} key={index} data-index={index+1}>
                    <a href={item.link} target="_blank">
                      <div className="project-thumb">
                        <ReactCircle />
                        <picture>
                          <img src={item.image} alt={item.title} data-object-fit="cover"/>
                        </picture>
                      </div>
                      <h3 className="project-name">
                        <span>{item.title}</span>
                      </h3>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="project-img-accent">
            {Array.apply(1, Array(parseInt(15))).map((x,index) => {
              return <span key={index}></span>
            })}
            </div>

            <div className="project-img-box">
              {projectList.map((item, index) => {
                return (
                  <div className={`project-img project-img${index+1} ${index == 0? 'is-active' : ''}`} key={index}>
                    <picture>
                      <img src={item.image} alt=""/>
                    </picture>
                  </div>
                )
              })}

            </div>
          </div>
      </div>
    </div>
  )
}

export default Project
