import React from 'react'
import './Programs.css'
import Pic_1 from '../../../assets/3.png'
import Pic_2 from '../../../assets/4.png'
import Pic_3 from '../../../assets/5.png'
import Icon_1 from '../../../assets/endoscope.png'
import Icon_2 from '../../../assets/ultrasound.png'
import Icon_3 from '../../../assets/Radiology.png'
import Pic_6 from '../../../assets/6.png'
import Pic_7 from '../../../assets/7.png'
import Pic_8 from '../../../assets/8.png'
import Icon_10 from '../../../assets/10.png'
import Icon_11 from '../../../assets/11.png'
import Icon_12 from '../../../assets/12.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
          <img src={Pic_1} alt=""/>
          <div className="caption">
            <img src={Icon_1} alt="" />
            <p>Endoscopy & Colonoscopy</p>
          </div>
        </div>
        <div className='program'>
          <img src={Pic_2} alt=""/>
           <div className="caption">
            <img src={Icon_2} alt="" />
            <p>Ultrasound & 2D Echo</p>
          </div>
        </div>
        <div className='program'>
          <img src={Pic_3} alt=""/>
           <div className="caption">
            <img src={Icon_3} alt="" />
            <p>Radiology</p>
          </div>
        </div>
        <div className='program'>
           <img src={Pic_6} alt=""/>
            <div className="caption">
              <img src={Icon_10} alt="" />
               <p>Emergency Room</p>
          </div>
        </div>
        <div className='program'>
          <img src={Pic_7} alt=""/>
            <div className="caption">
              <img src={Icon_11} alt="" />
               <p>Laboratory & Diagnostics</p>
         </div>
        </div>
        <div className='program'>
          <img src={Pic_8} alt=""/>
           <div className="caption">
            <img src={Icon_12} alt="" />
            <p>Out Patient</p>
          </div>
        </div>
    </div>
    
  )
}

export default Programs