import React from "react";

function Collapse({ children, isOpen }) {
  return (
    <div className="w-full overflow-visible">
      <div
        className={`flex flex-col gap-5 transition-all duration-300 overflow-visible ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;
