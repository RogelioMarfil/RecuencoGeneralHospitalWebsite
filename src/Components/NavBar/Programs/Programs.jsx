import React from 'react'
import './Programs.css'
import Pic_1 from '../../../assets/3.png'
import Pic_2 from '../../../assets/4.png'
import Pic_3 from '../../../assets/5.png'
import Icon_1 from '../../../assets/endoscope.png'
import Icon_2 from '../../../assets/ultrasound.png'
import Icon_3 from '../../../assets/Radiology.png'

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
    </div>
  )
}

export default Programs