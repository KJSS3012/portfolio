import React, { useState } from "react";
import Chip from "../Chip";
import Collapse from "../Collapse";
import { gitLogoBack } from "../../assets";
import { gitLogoFront } from "../../assets";

function Card({
  image,
  title,
  description,
  technologies,
  frontLink,
  backLink,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded max-w-xs overflow-visible" key={id}>
      <img src={image} alt="" className="max-h-[12rem] min-h-[10rem] max-w-xs" />
      <div className="flex flex-col justify-center px-5 pt-5 pb-14 gap-5 transition duration-300 bg-custom-gray relative overflow-visible">
        <p className="text-white text-2xl overflow-hidden transition duration-300">
          {title}
        </p>
        <p
          className={`text-white overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-6"
          }`}
        >
          {description}
        </p>
        <Collapse isOpen={isOpen}>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Chip name={tech} key={index} />
            ))}
          </div>
          <div className="flex gap-2 overflow-visible">
            {frontLink && (
              <a href={frontLink} className="overflow-visible">
                <img
                  alt=""
                  src={gitLogoFront}
                  className="min-w-6 hover:scale-110 overflow-visible transition-all duration-300"
                />
              </a>
            )}
            {backLink && (
              <a href={backLink} className="overflow-visible">
                <img
                  alt=""
                  src={gitLogoBack}
                  className="min-w-6 hover:scale-110 overflow-visible transition-all duration-300"
                />
              </a>
            )}
          </div>
        </Collapse>

        <button
          className="absolute bottom-[-.75em] right-[-.75em] text-white bg-custom-blue border-2 border-custom-blue hover:text-custom-blue hover:bg-transparent transition duration-300 rounded p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    </div>
  );
}

export default Card;
