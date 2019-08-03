import React, { useState } from 'react'
import Bullet from '../Bullet'
import Card from '../Card';

import './styles.css'

import Monitor from '../../images/monitor.png'
import MonitorOne from '../../images/monitor-one.png'
import MonitorTwo from '../../images/monitor-two.png'
import MonitorThree from '../../images/monitor-three.png'
import MonitorFour from '../../images/monitor-four.png'



const Carousel = () => {
  
  const [images, setItems] = useState([
    {
      id: 0,
      src: Monitor,
      alt: "Monitor",
      title: 'First Image',
      text: "Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.",
      buttonText: "read more »",
      active: true
    },
    {
      id: 1,
      src: MonitorOne,
      alt: "Second Image",
      title: 'Second Image',
      text: "Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.",
      buttonText: "read more »",
      active: false
    },
    {
      id: 2,
      src: MonitorTwo,
      alt: "Third Image",
      title: 'Third Image',
      text: "Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.",
      buttonText: "read more »",
      active: false
    },
    {
      id: 3,
      src: MonitorThree,
      alt: "Fourth Image",
      title: 'Fourth Image',
      text: "Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.",
      buttonText: "read more »",
      active: false
    },
    {
      id: 4,
      src: MonitorFour,
      alt: "Fifth Image",
      title: 'Fifth Image',
      text: "Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.",
      buttonText: "read more »",
      active: false
    },
  ]) 

  const handleButtonClick = (e, id) => {
    
    e.preventDefault();

    let imagesNew = images.map(image => {
      image.active = (image.id === id);
      return image;
    })

    setItems(imagesNew);
  }
  
  return(
    <div className="carousel-wrapper">
      <ul className="ul-height">  
      {
        images.map(({ id, src, alt, title, text, buttonText, active }) => 
          <li className={`carousel-item ${active ? `-active` : ``}`} key={id} >
            <Card
              src={src}
              alt={alt}
              title={title}
              text={text}
              buttonText={buttonText}
              className="carousel-image"
            />
          </li>
        )
      }
      </ul>

      <ul className="bullets">
      {
        images.map(({ id, title, active }) => 
          <li key={id} >
            <Bullet
              href='#'
              content={ title }
              isActive={ active }
              onClick={e => handleButtonClick(e, id)}
            />
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default Carousel
