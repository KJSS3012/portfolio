import React from "react";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="hover:text-green-600 duration-300 text-lg font-medium cursor-pointer"
    >
      {children}
    </a>
  );
}

export default NavLink;
