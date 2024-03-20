import React from "react";

function NavLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={`hover:text-custom-green duration-300 cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

export default NavLink;
