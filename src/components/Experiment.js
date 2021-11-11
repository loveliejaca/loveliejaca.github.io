import React, { useState, useLayoutEffect } from "react"

import Parallax from './Parallax'

import {ReactComponent as ReactCircle} from '../assets/images/circle.svg';

const Experiment = () => {

  let classes_to_remove = ["is-look-right","is-look-left", "is-look-down", "is-look-up","is-look-down-right","is-look-down-left","is-look-up-right","is-look-up-left"];

  let faceNode = document.querySelector('.me');

  useLayoutEffect(() => {
    faceNode = document.querySelector('.me');
    scaleMe();
  },[]);


  function removeClasses () {
    if(!faceNode) return;

    for(let x = 0;x<classes_to_remove.length;x++) {
      if(faceNode.classList.contains(classes_to_remove[x])) {
        faceNode.classList.remove(classes_to_remove[x]);
      }
  	}
  }

  function direction(e) {
    //look left
    if( e.clientX <= window.innerWidth/2) {
      removeClasses();
      if(faceNode) {
        faceNode.classList.add('is-look-left');
      }
    }
    //look right
    if( e.clientX >= (window.innerWidth - (window.innerWidth/2))) {
      removeClasses();
      if(faceNode){
        faceNode.classList.add('is-look-right');
      }
    }
      //look down
    if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5))) {
      removeClasses();

      if(faceNode) {
        faceNode.classList.add('is-look-down');
      }
    }

    // look up
    if( e.clientY <= ((window.innerHeight/2.5))) {
      removeClasses();

      if(faceNode) {
        faceNode.classList.add('is-look-up');
      }
    }

    // look down right
    if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) {
      removeClasses();
      if(faceNode) {
        faceNode.classList.add('is-look-down-right');
      }

    }

    // look down left
    if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
      removeClasses();
      if(faceNode) {
        faceNode.classList.add('is-look-down-left');
      }

    }

    // look up right
    if( e.clientY <= ((window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) {
      removeClasses();
      if(faceNode) {
        faceNode.classList.add('is-look-up-right');
      }

    }

    // look up left
    if( e.clientY <= ((window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
      removeClasses();
      if(faceNode) {
        faceNode.classList.add('is-look-up-left');
      }
    }

    if( e.clientX >  window.innerWidth/3 &&  e.clientX < (window.innerWidth - (window.innerWidth/3)) &&
     e.clientY >  window.innerHeight/2.5 &&  e.clientY < (window.innerHeight - (window.innerHeight/2.5)) ) {
      removeClasses();
    }
  }
  //
  window.addEventListener("mousemove", function (e) {
      direction(e);
  })

  let expeList = [
    {
      link: 'https://codepen.io/jlablab03/pen/gNpXBw'
    },
    {
      link: 'https://codepen.io/jlablab03/pen/bGdGwzJ'
    },
    {
      link: 'https://codepen.io/jlablab03/pen/qGXYMM'
    },
    {
      link: 'https://codepen.io/jlablab03/pen/ZdWmme'
    },
    {
      link: 'https://codepen.io/jlablab03/pen/JqxENx'
    },
    {
      link: 'https://codepen.io/jlablab03/pen/EzzRoa'
    },
    {
      link: 'https://codepen.io/jlablab03/details/eYEVxzG'
    },
  ]


  function scaleMe() {
    let defaultWidth =  560;
    let width = window.innerWidth;
    let scale = width < defaultWidth ? width / defaultWidth : 1;

    let me =  document.querySelector('.me');

    if(!me) return;

    me.style.transform = `scale(${scale})`
  }

  window.addEventListener("resize", scaleMe)


  return (
    <>
      <Parallax total="4" modifier="expe"/>
      <div className="l-container">
        <div className="cmn-heading cmn-heading-experiment">
          <h2 className="cmn-heading-text">
            <span className="cmn-heading-text-inner">EXPERIMENTS</span>
            <span className="cmn-heading-accent"></span>
          </h2>
        </div>

        <div className="experiment-me">
          <div className="experiment-box-wrap">
            {expeList.map((item, index) => {
              return (
                <div className={`experiment-box box-${index + 1}`} key={index}>

                  <ReactCircle/>
                  <a href={item.link} target="_blank">
                    <div className="experiment-box-inner">
                      <div className="experiment-img"></div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>

          <div className="me">
            <div className="me-backhair">
              <div className="me-backhair-long"></div>
              <div className="me-backhair-short"></div>
            </div>
            <div className="me-face">
              <div className="me-eyes">
                <div className="me-eyes-left"></div>
                <div className="me-eyes-right"></div>
              </div>
              <div className="me-ears"></div>
              <div className="me-fronthair"></div>
              <div className="me-bangs"></div>
            </div>
            <div className="me-neck"></div>
            <div className="me-body"></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Experiment



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
