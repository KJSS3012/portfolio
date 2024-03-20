import React, { Fragment, useState } from "react";
import { Header, Container } from "../../components";

function HomeScreen() {
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      setIsOpen(false);
    }
  });

  return (
    <Fragment>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container>
        <p className="text-4xl text-white">Portfolio em Construção</p>
      </Container>
    </Fragment>
  );
}

export default HomeScreen;
