import React from 'react'
import './cake.css'
function Cake() {
  return (
    <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
      <div className="box-canvas">
<div className="plate"></div>
<div className="cake-side"></div>
<div className="drips">
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
    <div className="drip"></div>
</div>
<div className="cake-top">
    <div className="number-container">21</div>
</div>
</div>
</div>
  )
}

export default Cake
