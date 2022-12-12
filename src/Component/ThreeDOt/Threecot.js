import React from 'react'
import "./ThreeDot.css"
const Threecot = () => {
  return (
    <div id="wave" style={{backgroundColor:'rgb(134 193 144)',height:'50px',width:'80px', zIndex:'1',paddingTop:'10px',borderRadius:'0',boxShadow:'0px 2px 9px 0px rgb(0 0 0 / 67%)'}}>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
</div>
  )
}

export default Threecot
