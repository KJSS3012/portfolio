import React from "react";

function GreenButton(props) {
  return (
    <a
      className="w-2/5 md:w-1/3 flex items-center justify-centern text-center bg-custom-green border-2 border-custom-green px-4 md:px-6 py-2 md:py-4 rounded text-white hover:text-custom-green hover:bg-transparent text-lg font-semibold duration-300"
      href={props.href}
    >
      {props.title}
    </a>
  );
}

export default GreenButton;
