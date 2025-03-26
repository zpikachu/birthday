import React from 'react'
import "./birthdayMsg.css"
function BirthdayMsg() {
  const searchParams=new URLSearchParams(window.location.search);
  //2024-21
  const name=searchParams.get("m") || "Asmitha";
  return (
    <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
      <h1 className='heading'>HAPPY BIRTHDAY {name}</h1>
    </div>
  )
}

export default BirthdayMsg
