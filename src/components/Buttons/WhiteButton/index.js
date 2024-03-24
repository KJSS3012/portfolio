import React from "react";

function WhiteButton(props) {
  return (
    <a
      className="w-3/6 md:w-2/5 flex items-center justify-center text-black bg-white border-2 border-white px-6 md:px-8 py-2 md:py-4 rounded hover:text-white hover:bg-transparent text-lg font-semibold duration-300"
      href={props.href}
    >
      {props.title}
    </a>
  );
}

export default WhiteButton;
