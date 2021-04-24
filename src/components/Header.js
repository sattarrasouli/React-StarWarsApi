import React from "react"
import "../App.css"
import SAM from "../assests/svg/SAM.svg"

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="logo">
            <img src={SAM} style={{ width: 50, height: 50 }} />
          </div>
          <span className="name">Sattar</span>
        </div>
      </header>
    </>
  )
}

export default Header
