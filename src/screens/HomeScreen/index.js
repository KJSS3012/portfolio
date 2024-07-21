import React, { Fragment, useState } from "react";
import { Header, Container } from "../../components";
import { InitialSection, AboutSection, SkillSection } from "../../sections";

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
        <InitialSection />
        <AboutSection />
        <SkillSection/>
      </Container>
    </Fragment>
  );
}

export default HomeScreen;
