import React from 'react'
import './Ghar.css'
import { assets } from '../assets/assets'
const Ghar = () => {
  return (
    <div className="ghar-ui">
        <div className="carousel">
            <img src="" alt="" className="1-img" />
            <img src="" alt="" className="2-img" />
            <img src="" alt="" className="3-img" />
            <img src="" alt="" className="4-img" />
            
        </div>
      <div  className='earn-page'>
      <div className="earning-status">
        <div className="user-power">My total Power</div>
        <div className="total-power">Total Pool Power</div>
        <div className="total-block">Block Reward</div>
        <div className="user-block"></div>
        <div className="next-block"></div>
        <div className="more">More details</div>

      </div>
      <canvas className="gameui" width="709" height = "493">
          <img src={assets.room} alt="" />
      </canvas>
    </div>
    </div>
  )
}

export default Ghar
