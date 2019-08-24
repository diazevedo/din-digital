import React from "react";
import Header from "../Header";
import SectionCarousel from "../SectionCarousel";
import Card from "../Card";
import Section from "../Section";
import TextBox from "../TextBox";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Footer from "../Footer";

import menus from "../../data/menus";
import socialIcons from "../../data/logos";
import imagesSection from "../../data/imagesSection";

import "./styles.css";

const imagesSectionTwoRows = [].concat(imagesSection, imagesSection);
const imagesTwoRows = imagesSectionTwoRows.map(image => {
  image.text =
    "Morbit incidunt maurisque eros molest nunc anteget sed vel lacus mus semper. Anter dumnullam.";
  return image;
});

function App() {
  return (
    <>
      <Header images={socialIcons} menus={menus} />
      <SectionCarousel />

      <Section className="-section-three-cards">
        {imagesSection.map(({ id, src, alt, title, text, buttonText }) => (
          <Card
            key={id}
            src={src}
            alt={alt}
            title={title}
            text={text}
            buttonText={buttonText}
            className="card-mid"
            classNameFigure=""
            cardClassName="-card-three"
          />
        ))}
      </Section>

      <Section className="-quote">
        <header className="header-quote">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
            diam erat. In fringilla massa ut nisi ullamcorper pellentesque"
          </p>
        </header>
        {imagesTwoRows.map(({ id, src, alt, title, text, buttonText }) => (
          <Card
            key={id}
            src={src}
            alt={alt}
            title={title}
            text={text}
            buttonText={buttonText}
            className="-image-small"
            classNameFigure=""
            cardClassName="-card-small"
          />
        ))}
      </Section>

      <Section className="-footer">
        <TextBox className="-text-footer box-details">
          <h2 className="title-box">contact details</h2>
          <p>company Name</p>
          <p>street name & number</p>
          <p>Town</p>
          <p>Postcode/Zip</p>
          <div className="contact-info">
            <p>Tel: xxxxx xxxxxxxxxx</p>
            <p>Fax: xxxxx xxxxxxxxxx</p>
            <p>
              Email: <span className="email">contact@mydomain.com</span>
            </p>
          </div>
        </TextBox>
        <TextBox className="-text-footer">
          <h2 className="title-box">Quick Links</h2>
          <a href="https://github.com/">Link Text Here</a>
          <a href="https://github.com/">Link Text Here</a>
          <a href="https://github.com/">Link Text Here</a>
          <a href="https://github.com/">Link Text Here</a>
        </TextBox>
        <TextBox className="-text-footer blog">
          <h2 className="title-box">from the blog</h2>
          <h3 className="title-post">blog post title</h3>
          <p className="author">Posted by Admin on 00.00.0000</p>
          <p className="post-brief">
            Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean
            elit intesque sed facilispede estibulum.
          </p>
          <Button content="read more »" className="-button-link"></Button>
        </TextBox>
        <TextBox className="-text-footer">
          <h2 className="title-box">from the blog</h2>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Button content="submit" />
          </Form>
        </TextBox>
      </Section>
      <Footer />
    </>
  );
}

export default App;
