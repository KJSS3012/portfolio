import React, { useState, Fragment } from "react";
import { NavLink } from "../";
import "./style.css";

function Header(props) {
  const toggle = () => {
    props.setIsOpen(!props.isOpen);
  };

  return (
    <Fragment>
      <nav className="z-10 flex justify-between items-center bg-custom-black text-white h-header fixed w-full py-6 px-6 lg:px-12">
        <p className="text-4xl font-semibold">
          Kaique<span className="text-custom-green">.dev</span>
        </p>
        <div
          className={`hidden lg:flex text-lg font-medium gap-10 bg-custom-black`}
        >
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Sobre</NavLink>
          <NavLink href="#">Tecnologias</NavLink>
          <NavLink href="#">Educação</NavLink>
          <NavLink href="#">Profissional</NavLink>
          <NavLink href="#">Contato</NavLink>
        </div>
        {!props.isOpen && (
          <button
            className="lg:hidden duration-300 text-white"
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
          props.isOpen ? "open border-l-4" : "close"
        } border-custom-green w-0 absolute h-full z-10`}
        id="menu"
      >
        <button
          className="lg:hidden text-white absolute right-4 top-6"
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
            <NavLink href="#">Tecnologias</NavLink>
          </li>
          <li>
            <NavLink href="#">Sobre</NavLink>
          </li>
          <li>
            <NavLink href="#">Educação</NavLink>
          </li>
          <li>
            <NavLink href="#">Profissional</NavLink>
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
