import React from "react";

function NavLink({ href, children, isTop }) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <a
      href={href}
      className={`hover:text-custom-blue duration-300 cursor-pointer`}
      onClick={isTop ? scrollTop : null}
    >
      {children}
    </a>
  );
}

export default NavLink;
