import React from "react";

function NavLink({ href, children }) {
  const scrollToSection = (event) => {
    event.preventDefault();

    const sectionId = href.split("#")[1];

    if (sectionId === "home") {
      window.scrollTo({ top: 0 });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top });
    }
  };

  return (
    <a
      href={href}
      className="hover:text-custom-blue duration-300 cursor-pointer"
      onClick={scrollToSection}
    >
      {children}
    </a>
  );
}

export default NavLink;
