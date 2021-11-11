
import React, {useEffect, useState} from "react"

const Rail = ({text, modifier}) => {
  let [textArr, setTextArr] = useState([]);

  const count = 3;
  let x=0,
      speed = 1,
      direction = 1,
      lastScrollDirection ='down',
      lastScroll = 0;

  let timer = null;
  let animateRight = false;


    window.addEventListener('scroll', function() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

      if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        if (lastScrollDirection !== 'down') {
          lastScrollDirection = 'down';
        }
      } else {
        lastScroll = currentScroll;
        if (lastScrollDirection !== 'up') {
          lastScrollDirection = 'up';
        }
      }

    }, false);


  useEffect(() => {
    const $rail = document.querySelector('.rail');

    if(!$rail) return;

    setTextArr([...Array(count).keys()]);

    requestAnimationFrame(() => {
      railMove($rail)
    })


    function railMove(element) {
      let trackElement = element.querySelector('.rail-track');
      let trackInitialWidth = trackElement.getBoundingClientRect().width;

      element.style.transform= `translate3d(${x}px, 0px, 0px)`;

      // //change direction
      if(lastScrollDirection === 'up') {
        direction= -1;
        animateRight = true;
      } else {
        direction= 1
        animateRight = false;
      }

      if(animateRight) {
        if(x > 0) {
          x = -(trackInitialWidth*3);
        }
      } else {
        if(Math.abs(x) > (trackInitialWidth * count)) {
          x = 0;
        }
      }


      x -= speed*direction;

      requestAnimationFrame(() => {
        railMove(element)
      })
    }

  }, [])




  return (
    <div className={`rail ${modifier}`}>
      <div className="rail-group">
        <div className="rail-container">
          <div className="rail-track">{text}</div>
          {
            textArr.map((index) => {
              console.log("index", index);
              return <div className="rail-track" key={index}>{text}</div>;
            })
          }
          <div className="rail-track">{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Rail
