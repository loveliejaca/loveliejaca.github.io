import React from "react"
import akClinic from '../assets/images/ak-clinic.png'; // Tell webpack this JS file uses this image
import hitto from '../assets/images/hitto.png'; // Tell webpack this JS file uses this image
import Monster from './Monster'

const Project = () => {

  console.log("crash", akClinic);
  let projectList = [
    {
      title: 'HiTTO株式会社',
      image: hitto,
      link: 'https://www.hitto.co.jp/'
    },
    {
      title: 'クリニック内装の株式会社エイケー',
      image: akClinic,
      link: 'https://www.ak-co.jp/lp3/'
    },
    {
      title: 'ooosss',
      image: hitto,
      link: '#'
    }
  ];

  return (
    <div className="l-section project">
      <h2 className="cmn-heading"><span>Projects</span></h2>

      <ul className="project-list">
      {
        projectList.map((item, index) => {
          return (
            <li className="project-item" key={index}>
              <a href={item.link} target="_blank">
                <div className="cmn-web">
                  <div className="cmn-web-head">
                    <span>{item.title} <i className="ico-close"></i></span>
                     <i className="ico-plus"></i>
                  </div>
                  <div className="cmn-web-address">
                    <i className="ico-arrow-left"></i>
                    <i className="ico-arrow-right"></i>
                    <i className="ico-refresh"></i>
                    <span>{item.link} </span>
                    <i className="ico-star"></i>
                  </div>
                  <div className="cmn-web-body">
                    <picture>
                      <img src={item.image} alt=""/>
                    </picture>
                  </div>
                </div>

                <div className="project-info">
                  <Monster type='monster1'/>
                </div>
              </a>
            </li>
          )
        })
      }

      </ul>
    </div>
  )
}

export default Project
