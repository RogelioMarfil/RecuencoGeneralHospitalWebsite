import React from 'react'
import './Services.css'
import Pic_6 from '../../assets/6.png'
import Pic_7 from '../../assets/7.png'
import Pic_8 from '../../assets/8.png'
import Icon_10 from '../../assets/10.png'
import Icon_11 from '../../assets/11.png'
import Icon_12 from '../../assets/12.png'

const Services = () => {
  return (
    <div className='Services'>
 <div className='service'>
          <img src={Pic_6} alt=""/>
          <div className="S_caption">
            <img src={Icon_10} alt="" />
            <p>Emergency Room</p>
          </div>
        </div>
        <div className='service'>
          <img src={Pic_7} alt=""/>
           <div className="S_caption">
            <img src={Icon_11} alt="" />
            <p>Laboratories</p>
          </div>
        </div>
        <div className='service'>
          <img src={Pic_8} alt=""/>
           <div className="S_caption">
            <img src={Icon_12} alt="" />
            <p>Out Patient</p>
          </div>
    </div>
     </div>
  )
}

export default Services