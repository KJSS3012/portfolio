import React, { Fragment } from "react";
import { ContainerProjects, SectionTitle } from "../../components";

function ProjectsScreen() {
  return (
    <Fragment>
      <ContainerProjects>
        <SectionTitle>
          <a href="/">&#x21E6; Voltar para Home</a>
        </SectionTitle>
        <p
          className="text-base text-white text-wrap text-justify overflow-hidden"
          data-aos="fade-left"
        >
          Olá! Infelizmente, esta parte do site, assim como muitas outras, ainda
          não está finalizada. Caso queira acompanhar a evolução, convido-o a me
          seguir no GitHub ou LinkedIn.
        </p>
      </ContainerProjects>
    </Fragment>
  );
}

export default ProjectsScreen;
