import React from "react";

function NavLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={`hover:text-green-600 duration-300 cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

export default NavLink;
