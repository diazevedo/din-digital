import React from 'react';
import Header from '../Header'

import './styles.css';

import Linkedin from '../../images/icon-linkedin.png'
import Twitter from '../../images/icon-twitter.png'
import Pinterest from '../../images/icon-pinterest.png'
import GooglePlus from '../../images/icon-google-plus.png'
import RSS from '../../images/icon-rss.png'

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

function App() {
  return (
    <>
      <Header images={images} menus={menus}/>
    </>
  );
}

export default App;