import React from 'react'
import { Link } from 'react-router-dom'
import ex from "./ex.jpg"
import Sp  from './speed.jpg'
const Home = () => {
  return (
    <div className='home'>
        <div className="header">
         <h1>FUN-TOOLS version 1.1</h1>
        </div>
        <div className="content">
            <div className="card1">
                <div className="imgs">
                <img src={ex} alt="" />
                </div>
                <div className="about"> 
                    Expense Tracker helps you record and manage daily spending, making it easy to see where your money goes. It gives clear insights into your expenses so you can save smarter
                </div>
                <div className="btn">
                <Link to='/Expense'><button>Click here</button></Link>
                </div> 
            </div>
            <div className="card1">
                <div className="imgs">
                <img src={Sp} alt="" />
                </div>
                <div className="about">
                    The Speed Test tool helps you check your internet performance in real time. It measures your download and upload speed, along with latency, to ensure your connection is fast and reliable.
                </div>
                <div className="btn">
                <Link to='/speed'><button>Click here</button></Link>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Home