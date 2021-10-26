import React from "react"

const Monster = ({type}) => {

  console.log("crash", type);

  function determineRender() {
    switch (type) {
      case 'monster1':
        return (
          <div className="monster-box">
            <div className="monster-box-head">
            <div className="monster-box-ears">
              <span></span>
              <span></span>
            </div>
              <div className="monster-box-eyes">
                <span></span>
                <span></span>
              </div>
              <div className="monster-box-mouth"></div>
            </div>
            <div className="monster-box-feet">
              <div className="monster-box-feet-left">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="monster-box-feet-right">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return <>{determineRender()}</>
}

export default Monster
