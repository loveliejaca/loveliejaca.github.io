import React from "react"

const Parallax = ({total, modifier}) => {

  let scrollPos = 0.001, lastScroll = window.pageYOffset || window.pageY;

  function parallax() {
    const parallax = document.querySelectorAll('.parallax');

    let currentScroll = window.pageYOffset || window.pageY;
    let scrollPos = currentScroll * 0.25;

    parallax.forEach((element, i) => {
      element.style.transform = `translateY(${scrollPos}px)`
    });

    lastScroll = window.pageYOffset || window.pageY;
  }

  window.addEventListener("scroll", parallax )

  return (
    <>
    {Array.apply(1, Array(parseInt(total))).map((x,index) => {
      return <div className={`parallax parallax-${index + 1} parallax-${modifier + parseInt(index + 1)}`} key={index}></div>
    })}
    </>
  )
}

export default Parallax
