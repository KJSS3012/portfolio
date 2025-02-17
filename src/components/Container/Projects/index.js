import React from "react";

function ContainerProjects({ children }) {
  return (
    <main className="flex flex-col w-screen bg-custom-black py-12 gap-20"
    style={{ padding: "5vh 3rem 20vh 3rem" }}>
      {children}
    </main>
  );
}

export default ContainerProjects;
