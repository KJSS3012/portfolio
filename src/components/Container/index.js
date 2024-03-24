import React from "react";

function Container({ children }) {
  return (
    <main
      className="w-screen h-full absolute bg-custom-black z-0 py-12 px-6"
      style={{ top: "10vh" }}
      id="container"
    >
      {children}
    </main>
  );
}

export default Container;
