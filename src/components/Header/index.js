import React from "react";

function Header() {
  return (
    <nav className="flex justify-center gap-20 items-center bg-custom-black text-white h-header fixed w-full">
      <p className="text-4xl font-semibold">
        Kaique<span className="text-green-600">.dev</span>
      </p>
      <a className="hover:text-green-600 duration-300 text-lg font-medium">
        Home
      </a>
      <a className="hover:text-green-600 duration-300 text-lg font-medium">
        Sobre
      </a>
      <a className="hover:text-green-600 duration-300 text-lg font-medium">
        Educação
      </a>
      <a className="hover:text-green-600 duration-300 text-lg font-medium">
        Contato
      </a>
    </nav>
  );
}

export default Header;
