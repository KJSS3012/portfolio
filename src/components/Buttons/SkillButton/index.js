import React from "react";

function SkillButtom({ title, onClick, isSelect }) {

  const baseClasses = "w-64 md:w-60 items-center justify-center text-center border-2 border-white px-3 md:px-7 py-3 md:py-5 rounded text-sm md:text-lg font-semibold duration-300 cursor-pointer";

  const dynamicClasses = isSelect
    ? "bg-transparent text-white"
    : "text-custom-black bg-white hover:text-white hover:bg-transparent";

  const buttonClasses = `${baseClasses} ${dynamicClasses}`;

  return (
    <a
      className={buttonClasses}
      onClick={onClick}
    >
      {title}
    </a>
  );
}

export default SkillButtom;
