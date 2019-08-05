import React from 'react';
import Header from '../Header'
import SectionCarousel from '../SectionCarousel'
import Card from '../Card'


import './styles.css';

import Linkedin from '../../images/icon-linkedin.png'
import Twitter from '../../images/icon-twitter.png'
import Pinterest from '../../images/icon-pinterest.png'
import GooglePlus from '../../images/icon-google-plus.png'
import RSS from '../../images/icon-rss.png'

import Monitor from '../../images/monitor.png'
import MonitorOne from '../../images/monitor-one.png'
import MonitorTwo from '../../images/monitor-two.png'

const images = [
  {
    id: 0,
    src: Linkedin,
    href: 'https://www.linkedin.com/in/diazevedo/',
    alt: "Linkedin logo"
  },
  {
    id: 1,
    src: Twitter,
    href: 'https://twitter.com/i/moments',
    alt: "Twitter logo"
  },
  {
    id: 2,
    src: Pinterest,
    href: 'https://www.pinterest.com.au/pinterest/',
    alt: "Pinterest logo"
  },
  {
    id: 3,
    src: GooglePlus,
    href: '#',
    alt: "Google Plus logo"
  },
  {
    id: 4,
    src: RSS,
    href: '#',
    alt: "RSS logo"
  }
]

const menus = [
  {
    id: 0,
    text: 'menu',
    active: true,
    href: '#'
  },
  {
    id: 1,
    text: 'style demo',
    active: false,
    href: '#'
  },
  {
    id: 2,
    text: 'full width',
    active: false,
    href: '#'
  },
  {
    id: 3,
    text: 'dropdown',
    active: false,
    href: '#'
  },
  {
    id: 4,
    text: 'portfolio',
    active: false,
    href: '#'
  },
  {
    id: 5,
    text: 'gallery',
    active: false,
    href: '#'
  }
]

const imagesSection = [{
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
}]




function App() {
  return (
    <>
      <Header images={images} menus={menus}/>
      <SectionCarousel />
      <section className="section-default section-three-cards">
      {
        imagesSection.map(({ id, src, alt, title, text, buttonText }) => 
            <Card
              key={id}
              src={src}
              alt={alt}
              title={title}
              text={text}
              buttonText={buttonText}
              className="card-mid"
              classNameFigure=''
              cardClassName='-card-three'
            />
        )
      }
      </section>
    </>
  );
}

export default App;