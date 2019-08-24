import React from "react";
import Figure from "../Figure";
import Image from "../Image";
import TextBox from "../TextBox";
import Button from "../Button";

import "./styles.css";

const Card = ({
  src,
  alt,
  title,
  text,
  buttonText,
  className = "",
  classNameFigure = "",
  cardClassName = ""
}) => (
  <article className={`card-default ${cardClassName}`}>
    <Figure className={classNameFigure}>
      <Image src={src} alt={alt} className={className} />
    </Figure>
    <TextBox>
      <h2 className="title-box">{title}</h2>
      <p className="paragraph-box">{text}</p>
      <Button content={buttonText}></Button>
    </TextBox>
  </article>
);

export default Card;
