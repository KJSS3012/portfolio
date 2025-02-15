import React from "react";

function Container({ children }) {
  return (
    <main
      className="flex flex-col w-screen bg-custom-black py-12 gap-20"
      style={{ padding: "20vh 3rem 20vh 3rem" }}
    >
      {children}
    </main>
  );
}

export default Container;
