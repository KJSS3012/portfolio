import React, { Fragment } from "react";

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
