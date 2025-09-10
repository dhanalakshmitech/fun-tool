import React from 'react'
import { Link } from 'react-router-dom'

const Speed = () => {
  return (
    <div className='con'>
        <Link to='/home' className='back'>back</Link>
       <div className="box">
      <h1>Internet Speed Test</h1>
      <iframe
        src="https://openspeedtest.com/speedtest"
        title="speedtest"
        style={{
          width: "100%",
          height: "450px",
          border: "none",
          borderRadius: "12px",
          boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
        }}
      ></iframe>
       </div>
    </div>
  )
}

export default Speed