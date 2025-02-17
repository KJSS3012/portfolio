import React, { Fragment, useState, useEffect } from "react";
import { Card, ContainerProjects, Footer, SectionTitle } from "../../components";

function ProjectsScreen() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      return await fetch("/assets/json/projects.json")
        .then((response) => response.json())
        .catch((error) => ({ error: error }));
    };

    const saveProjects = async () => {
      const data = await loadProjects();

      if (data.error) {
        console.error("Error fetching projects: ", data.error);
        return;
      }
      setProjects(data);
    };

    saveProjects();
  }, []);

  return (
    <Fragment>
      <ContainerProjects>
        <SectionTitle>
          <a href="/">&#x21E6; Voltar para Home</a>
        </SectionTitle>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(15em,1fr))] gap-10 overflow-visible">
          {projects.map((value, index) => (
            <Card
              title={value.title}
              description={value.description}
              image={value.image}
              technologies={value.technologies}
              frontLink={value.frontLink}
              backLink={value.backLink}
              key={index}
            />
          ))}
        </div>
        <Footer/>
      </ContainerProjects>
    </Fragment>
  );
}

export default ProjectsScreen;
