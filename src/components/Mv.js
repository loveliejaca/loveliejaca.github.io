import React, { useEffect } from "react"
import AnimationHeart from "./AnimationHeart"

const Mv = () => {
  let classes_to_remove = ["is-look-right","is-look-left", "is-look-down", "is-look-up","is-look-down-right","is-look-down-left","is-look-up-right","is-look-up-left"];

  let faceNode = document.querySelector('.mv');

  useEffect(() => {
    faceNode = document.querySelector('.mv');
  });


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

  return (
    <div className="mv mouseArea">
      <h1 className="mv-info-name">
        <span>Hi, I'm <br/>Lovely</span>
      </h1>
      <div className="mv-info">
        <AnimationHeart/>
        <p className="mv-info-pos">I am Front-end Developer</p>
        <p className="mv-info-text">I like building websites and <br/> bringing creative designs to life!</p>
      </div>
      <div className="mv-me">
        <div className="mv-me-backhair">
          <div className="mv-me-backhair-long"></div>
          <div className="mv-me-backhair-short"></div>
        </div>
        <div className="mv-me-face">
          <div className="mv-me-eyes">
            <div className="mv-me-eyes-left"></div>
            <div className="mv-me-eyes-right"></div>
          </div>
          <div className="mv-me-ears"></div>
          <div className="mv-me-fronthair"></div>
          <div className="mv-me-bangs"></div>
        </div>
        <div className="mv-me-neck"></div>
        <div className="mv-me-body"></div>
      </div>
    </div>
  )
}

export default Mv
