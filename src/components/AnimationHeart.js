import React, { useEffect } from "react"

const AnimationHeart = () => {
  let container = document.querySelectorAll('.animation-heart');

  useEffect(() => {
    container = document.querySelectorAll('.animation-heart');

    for (var i = 0; i < container.length; i++) {
      getContainerSize(container[i]);
    }
  });

  function getContainerSize(e) {
    console.log("crash", e);
  }

  return (
    <div className="animation-heart"></div>
  )
}

export default AnimationHeart
