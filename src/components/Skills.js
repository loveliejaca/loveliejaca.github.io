import React, {useLayoutEffect} from "react"

import Parallax from './Parallax'

const Skills = () => {

  let skillList = [
    {
      skill: 'HTML',
    },
    {
      skill: 'CSS',
    },
    {
      skill: 'SCSS',
    },
    {
      skill: 'WORDPRESS',
    },
    {
      skill: 'JAVASCRIPT',
    },
    {
      skill: 'VUE',
    },
    {
      skill: 'REACT',
    },
    {
      skill: 'MYSQL',
    },
    {
      skill: 'PHP',
    },

  ];

  let trigger = document.querySelector('.skill-trigger');

  useLayoutEffect(() => {
    trigger = document.querySelector('.skill-trigger');
  },[]);

  function getPos() {
    if(!trigger) return;

    const container = document.querySelector('.skill');

    let posy = trigger.getBoundingClientRect().top - window.innerHeight;


    if(posy <= 0) {
      container.classList.add('is-animate')
    }
  }

  window.addEventListener('scroll', getPos);

  return (
    <>
      <Parallax total="4" modifier="skill"/>

      <div className="l-container skill">
        <div className="cmn-heading cmn-heading-skill">
          <h2 className="cmn-heading-text">
            <span className="cmn-heading-text-inner">SKILLS</span>
            <span className="cmn-heading-accent"></span>

          </h2>
        </div>

        <div className="lamp">
          <div className="lamp-inner">
            <div className="lamp-head">
              <div className="lamp-head-base"></div>
              <div className="lamp-light">
                <div className="lamp-light-inner"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="laptop">

        <div className="laptop-inner">
          <div className="laptop-screen">
            <span className="laptop-cam"></span>
            <span className="laptop-switch"></span>

            <div className="laptop-wallpaper"></div>
          </div>
          <div className="laptop-base"></div>
        </div>
        {skillList.map((item, index) => {
          return <div className={`skill-set skill-set-${item.skill.toLowerCase().replace(/,/g, "")}`} key={index}> <span>{item.skill}</span> </div>
        })}

          <span className="skill-set"></span>
          <span className="skill-set"></span>


        </div>

        <div className="skill-trigger"></div>
      </div>
    </>
  )
}

export default Skills



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
