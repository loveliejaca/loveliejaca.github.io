import React from "react"
import akClinic from '../assets/images/ak-clinic.png'; // Tell webpack this JS file uses this image
import hitto from '../assets/images/hitto.png'; // Tell webpack this JS file uses this image
import lipple from '../assets/images/lipple.png'; // Tell webpack this JS file uses this image
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
      title: 'Lipple inc.',
      image: lipple,
      link: 'https://lipple.co.jp/'
    }
  ];

  return (
    <div className="l-section project">
      <div className="l-container">
      <div className="cmn-heading cmn-heading-project">
        <h2 className="cmn-heading-text">
          <span className="cmn-heading-text-inner">PROJECTS</span>
          <span className="cmn-heading-accent"></span>
        </h2>
      </div>

        <ul className="project-list">
        {
          projectList.map((item, index) => {
            return (
              <li className="project-item" key={index}>
                <a href={item.link} target="_blank">
                  <div className="project-thumb">
                    <picture>
                      <img src={item.image} alt={item.title}/>
                    </picture>

                    <h3 className="project-name">{item.title}</h3>
                  </div>
                </a>
              </li>
            )
          })
        }

        </ul>
      </div>
    </div>
  )
}

export default Project
