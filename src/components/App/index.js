import React from 'react';
import Header from '../Header'
import SectionCarousel from '../SectionCarousel'
import Card from '../Card'
import Section from '../Section'
import TextBox from '../TextBox'

import './styles.css';

import Linkedin from '../../images/icon-linkedin.png'
import Twitter from '../../images/icon-twitter.png'
import Pinterest from '../../images/icon-pinterest.png'
import GooglePlus from '../../images/icon-google-plus.png'
import RSS from '../../images/icon-rss.png'

import Monitor from '../../images/monitor.png'

const socialIcons = [
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

const imagesSection = [
  {
    id: 0,
    src: Monitor,
    alt: "Monitor",
    title: 'First Image',
    text: "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.",
    buttonText: "read more »",
    active: true
  },
  {
    id: 1,
    src: Monitor,
    alt: "Second Image",
    title: 'Second Image',
    text: "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.",
    buttonText: "read more »",
    active: false
  },
  {
    id: 2,
    src: Monitor,
    alt: "Third Image",
    title: 'Third Image',
    text: "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.",
    buttonText: "read more »",
    active: false
  }
]

const imagesSectionTwoRows = [].concat(imagesSection, imagesSection);
const imagesTwoRows = imagesSectionTwoRows.map( image => {
  image.text = 'Morbit incidunt maurisque eros molest nunc anteget sed vel lacus mus semper. Anter dumnullam.'
  return image;
})

function App() {
  return (
    <>
      <Header images={socialIcons} menus={menus}/>
      <SectionCarousel />
      <Section className='-section-three-cards'>
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
      </Section>
      <Section className="-quote">
        <header className="header-quote">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam 
          erat. In fringilla massa ut nisi ullamcorper pellentesque"</p>
        </header>
        {
          imagesTwoRows.map(({ id, src, alt, title, text, buttonText }) => 
            <Card
              key={id}
              src={src}
              alt={alt}
              title={title}
              text={text}
              buttonText={buttonText}
              className='-image-small'
              classNameFigure=''
              cardClassName='-card-small'
            />
          )
        }
      </Section>

      <Section className="-contact-links">
        <TextBox title = "contact details" text='' buttonText='' className="-text-footer">
            <p>company Name</p>
            <p>street name & number</p>
            <p>Town</p>
            <p>Postcode/Zip</p>
            <p>Tel: xxxxx xxxxxxxxxx</p>
            <p>Fax: xxxxx xxxxxxxxxx</p>
            <p>Email: contact@mydomain.com</p>
        </TextBox>
        <TextBox title = "Quick Links" text='' buttonText='' className="-text-footer">
            <a href="">Link Text Here</a>
            <a href="">Link Text Here</a>
            <a href="">Link Text Here</a>
            <a href="">Link Text Here</a>
        </TextBox>
        <TextBox title = "from the blog" text='' buttonText='read more >>' className="-text-footer">
            <h3>blog post title</h3>
            <p>Posted by Admin on 00.00.0000</p>
            <p>Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed facilispede estibulum.</p>
        </TextBox>
      </Section>
    </>
  );
}

export default App;