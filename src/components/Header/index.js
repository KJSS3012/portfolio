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
        <div
          className={`hidden md:flex text-lg font-medium gap-20 bg-custom-black`}
        >
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Sobre</NavLink>
          <NavLink href="#">Educação</NavLink>
          <NavLink href="#">Contato</NavLink>
        </div>
        {!isOpen && (
          <button
            className="md:hidden duration-300 text-white"
            onClick={toggle}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
              />
            </svg>
          </button>
        )}
      </nav>

      <div
        className={`${
          isOpen ? "open border-l-4" : "close"
        } border-green-600 w-0 absolute h-full`}
        id="menu"
      >
        <button
          className="md:hidden text-white absolute right-4 top-7"
          onClick={toggle}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.78 18.36l-5.78-5.79 5.79-5.78-1.42-1.42-5.79 5.79-5.78-5.79-1.42 1.42 5.79 5.78-5.79 5.79 1.42 1.42 5.78-5.79 5.79 5.79 1.42-1.42z"
            />
          </svg>
        </button>
        <ul className="text-2xl text-white flex flex-col gap-10 p-5">
          <li>
            <NavLink href="#">Home</NavLink>
          </li>
          <li>
            <NavLink href="#">Sobre</NavLink>
          </li>
          <li>
            <NavLink href="#">Educação</NavLink>
          </li>
          <li>
            <NavLink href="#">Contato</NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Header;
