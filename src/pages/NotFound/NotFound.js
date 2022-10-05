import React from "react";
import { Link } from "react-router-dom";

import imgTesodev from "../../images/tesodev.png";

const NotFound = () => {
  const styleH1 = {
    textAlign: "center",
    margin: "100px",
    fontSize: "3em",
  };

  const styleH2 = {
    textAlign: "center",
    margin: "100px",
    color: "blue",
    fontSize: "2em",
  };

  return (
    <>
      <Link to="/">
        <img src={imgTesodev} alt="go-home" width="250px" />
      </Link>
      <h1 style={styleH1}>Page Not Found</h1>
      <Link to="/">
        <h2 style={styleH2}>Go Home</h2>
      </Link>
    </>
  );
};

export default NotFound;
