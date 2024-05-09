import React from "react";

function ContainerProjects({ children }) {
  return (
    <main className="flex flex-col w-screen h-screen bg-custom-black py-12 px-6 gap-20 items-center">
      {children}
    </main>
  );
}

export default ContainerProjects;
