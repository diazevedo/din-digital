import React from "react";

import "./styles.css";

const TextBox = ({ className, children }) => (
  <div className={`text-box ${className}`}>{children}</div>
);

export default TextBox;
