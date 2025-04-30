import React from 'react'
import './cake.css'
function Cake() {
  const searchParams=new URLSearchParams(window.location.search);
  const birthDate=new Date(2003,9,13);
  const Asmitha_age=parseInt((Date.now()-birthDate.getTime())/31557600000);
  const age=parseInt(searchParams.get("a")) || Asmitha_age;
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
    (age != 0?<div className="number-container">{age}</div>:<div>i</div>) 
</div>
</div>
</div>
  )
}

export default Cake
