import React from 'react'
import Button from '../Button'

import './styles.css'
import Monitor from '../../images/monitor.png'


const Carousel = () => {
  
  return(
    <div className="carousel-wrapper">
      <ul>
        <li className="carousel-item" >

          <img src={Monitor} alt=""/>
          
          <div className="text-box">
            <h2 className="title-box">
              the best solutions
            </h2>
            <p className="paragraph-box">Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.</p>
            <Button content= "read more »" className= ""/>
            <a href="#" className="bullet"></a>
            <a href="#" className="bullet -active"></a>
          </div>
        </li>
      </ul>
    </div>
  )

}

export default Carousel
