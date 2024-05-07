import React, { Fragment } from "react";
import "./style.css";

function Logo(props) {
  return (
    <Fragment>
      <a href={props.href} id="link-social" className="flex items-center">
        <img src={props.img} id="social-photo" />
      </a>
    </Fragment>
  );
}

export default Logo;
