import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 p-3 w-full bg-custom-black flex justify-center items-center text-white">
      <p className="text-sm">© Kaique Santos <span>{new Date().getFullYear()}. </span>Todos os direitos reservados.</p>
    </div>
  );
}

export default Footer;