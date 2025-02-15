import React from "react";

function SkillBox(props) {
  return (
    <div
      className="flex flex-col bg-custom-gray justify-center items-center w-32 h-32 p-2 gap-2.5 rounded"
      key={props.key}
      data-aos="flip-left"
    >
      <img src={props.image} alt="" className="max-h-1/2 max-w-1/2"/>
      <p className="text-white">{props.title}</p>
    </div>
  );
}

export default SkillBox;
