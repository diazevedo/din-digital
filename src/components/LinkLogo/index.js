import React from "react";
import "./styles.css";

const LinkLogo = ({
  id,
  href = "#",
  src = "",
  alt = "",
  target = "_blank"
}) => (
  <a key={id} href={href} target={target} className="link-logo">
    Linkefin
    <img src={src} alt={alt} className="icon-external-logo" />
  </a>
);

export default LinkLogo;
