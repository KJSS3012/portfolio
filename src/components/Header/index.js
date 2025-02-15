import React, { Fragment } from "react";
import { NavLink } from "../";
import "./style.css";

function Header(props) {
  const toggle = () => {
    props.setIsOpen(!props.isOpen);
  };

  return (
    <Fragment>
      <nav
        className="flex justify-between items-center z-10 h-header fixed w-full bg-custom-black text-white py-6 px-6 overflow-hidden"
        id="navbar"
      >
        <p className="text-4xl font-semibold overflow-hidden">
          Kaique<span className="text-custom-blue">.dev</span>
        </p>
        <div
          className={`hidden lg:flex text-lg font-medium gap-10 bg-custom-black`}
        >
          <NavLink href={"#home"}>Home</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skill">Tecnologias</NavLink>
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
        } border-custom-blue w-0 fixed h-full z-10`}
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
          <li className="overflow-hidden">
            <NavLink href={"#home"}>Home</NavLink>
          </li>
          <li className="overflow-hidden">
            <NavLink href="#about">Sobre</NavLink>
          </li>
          <li className="overflow-hidden">
            <NavLink href="#skill">Tecnologias</NavLink>
          </li>
          <li className="overflow-hidden">
            <NavLink href="#">Educação</NavLink>
          </li>
          <li className="overflow-hidden">
            <NavLink href="#">Profissional</NavLink>
          </li>
          <li className="overflow-hidden">
            <NavLink href="#">Contato</NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Header;
