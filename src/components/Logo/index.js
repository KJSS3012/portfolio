import React, { Fragment } from "react";
import "./style.css";

function Logo(props) {
  return (
    <Fragment>
      <a href={props.href}>
        <img src={props.img} />
      </a>
    </Fragment>
  );
}

export default Logo;
