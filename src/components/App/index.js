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
    src: Linkedin
  },
  {
    id: 1,
    src: Twitter
  },
  {
    id: 2,
    src: Pinterest
  },
  {
    id: 3,
    src: GooglePlus
  },
  {
    id: 4,
    src: RSS
  }
]

function App() {
  return (
    <>
      <Header images={images}/>
    </>
  );
}

export default App;