import React, { useState, Fragment } from "react";
import { NavLink } from "../";
import "./style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <nav className="flex justify-between items-center bg-custom-black text-white h-header fixed w-full py-6 px-4 lg:px-12">
        <p className="text-4xl font-semibold">
          Kaique<span className="text-green-600">.dev</span>
        </p>
        <div className={`hidden md:flex gap-20 bg-custom-black ${isOpen ? "open" : ""}`} id="menu">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Sobre</NavLink>
          <NavLink href="#">Educação</NavLink>
          <NavLink href="#">Contato</NavLink>
        </div>
        <button className="md:hidden text-white" onClick={toggle}>
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} id="menu">
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </div> */}
    </Fragment>
  );
}

export default Header;
