import React, { useState, useLayoutEffect } from "react"

const Accent = ({children, modifier}) => {

  let classes_to_remove = ['is-east', 'is-west', 'is-north', 'is-south'];
  let [direction, setDirection] = useState('');
  let [posX, setPosX] = useState(0);
  let [posY, setPosY] = useState(0);

  let mv = document.querySelectorAll('.accent');

  useLayoutEffect(() => {
    mv = document.querySelectorAll('.accent');
    // hearts();
  },[]);


  function removeClasses () {

    if(mv.length <= 0) return;

    for(let x = 0;x<classes_to_remove.length;x++) {

      mv.forEach((e) => {
        if(e.classList.contains(classes_to_remove[x])) {
          e.classList.remove(classes_to_remove[x]);
        }
      });


  	}
  }


  function mousemovemethod(e) {

    if (e.pageX > posX && e.pageY == posY) {
      removeClasses();
      if(mv.length <= 0) return;

      mv.forEach((e) => {
        e.classList.add('is-east');
      });

    }
    else if (e.pageX == posX && e.pageY > posY) {

      removeClasses();

      if(mv.length <= 0) return;

      mv.forEach((e) => {
        e.classList.add('is-south');
      });

    }
    else if (e.pageX == posX && e.pageY < posY) {

      removeClasses();
      if(mv.length <= 0) return;

      mv.forEach((e) => {
        e.classList.add('is-north');
      });
    }
    else if (e.pageX < posX && e.pageY == posY) {
      setDirection()

      removeClasses();
      if(mv.length <= 0) return;

      mv.forEach((e) => {
        e.classList.add('is-west');
      });
    }


    setPosX(e.pageX)
    setPosY(e.pageY)

  }

  window.addEventListener("mousemove", function (e) {
    	mousemovemethod(e);
  })



  return (
    <div className={`accent ${modifier}`} >
      {children}
    </div>
  )
}

export default Accent
