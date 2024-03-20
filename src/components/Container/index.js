import React from "react";

function Container({ children }) {
  return (
    <main
      className="w-screen h-full absolute bg-custom-black z-0 py-6 px-6 lg:px-12"
      style={{ top: "12vh" }}
      id="container"
    >
      {children}
    </main>
  );
}

export default Container;
