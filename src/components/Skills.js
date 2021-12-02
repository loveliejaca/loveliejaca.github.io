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
  let editor = document.querySelector('.laptop-editor')
  let editorInner = document.querySelector('.laptop-editor-inner')
  let container = document.querySelector('.skill');

  useLayoutEffect(() => {
    editor = document.querySelector('.laptop-editor')
    trigger = document.querySelector('.skill-trigger');
    container = document.querySelector('.skill');
    editorInner = document.querySelector('.laptop-editor-inner')

    let counter = 0;
    setInterval((e) => {

      if(container.classList.contains('is-animate')) {
        counter++;

        if(counter >=10) {
          editorInner.classList.remove('is-animate')
        }

        if(counter >=11) {
          editorInner.classList.add('is-animate')
          counter = 0;
        }

      }
      // editor.classList.remove('is-animate')
    }, 1000)



  },[]);

  function getPos() {
    if(!trigger) return;

    let posy = trigger.getBoundingClientRect().top - window.innerHeight;


    if(posy <= 0) {
      container.classList.add('is-animate')
      editor.classList.add('is-animate')


      setTimeout(()=> {
        editorInner.classList.add('is-animate')
      }, 1000)
    }
  }

  window.addEventListener('scroll', getPos);




  return (
    <>
      <Parallax total="10" modifier="skill"/>

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
            <div className="laptop-editor">
              <div className="laptop-editor-inner">
                {Array.apply(1, Array(parseInt(15))).map((x,index) => {
                  return <span key={index}></span>
                })}
              </div>
            </div>
          </div>
          <div className="laptop-base"></div>
        </div>
        <div className="skill-set-wrap">
        {skillList.map((item, index) => {
          return <div className={`skill-set skill-set-${item.skill.toLowerCase().replace(/,/g, "")}`} key={index}> <span>{item.skill}</span> </div>
        })}
        </div>
        </div>

        <div className="skill-trigger"></div>
      </div>
    </>
  )
}

export default Skills
