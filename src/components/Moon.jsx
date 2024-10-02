import React from 'react';
import './moon.css';

function Moon() {
  return (
    <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <div className="moon">
      <div className="crater crater1"></div>
      <div className="crater crater2"></div>
      <div className="crater crater3"></div>
      <div className="crater crater4"></div>
      <div className="crater crater5"></div>
    </div>
    </div>
  );
}

export default Moon;
