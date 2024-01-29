import React from 'react'
import avengers from "./img/Avengers.png"
import logo from "./img/Avengers logo.png"
function Banner() {
  return (
    <div className="banner">
        <div className="avengers">
          <img src={avengers} alt="" />
        </div>
        <div className="avengers-wrapper">
          <div className="avengers-text">
            <p>New comics every week!</p>
            <p>Stay tuned!</p>
          </div>
          <div className="avengers-logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Banner