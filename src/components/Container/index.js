import React from "react";

function Container({ children }) {
  return (
    <main
      className="flex flex-col w-screen bg-custom-black py-12 gap-20"
      style={{ padding: "20vh 24px 20vh 24px" }}
      id="container"
    >
      {children}
    </main>
  );
}

export default Container;
