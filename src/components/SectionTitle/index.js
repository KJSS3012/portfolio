import React from "react";

function SectionTitle({ children }) {
  return (
    <p
      className="text-custom-blue text-lg font-semibold text-center"
      data-aos="fade-down"
    >
      {children}
    </p>
  );
}

export default SectionTitle;
