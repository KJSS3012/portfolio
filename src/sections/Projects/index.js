import React, { useState, useEffect } from "react";
import { Card, SectionTitle } from "../../components";

function ProjectsSection() {
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
      setProjects(data.slice(0, 3));
    };

    saveProjects();
  }, []);

  return (
    <section className="flex flex-col gap-6 overflow-visible" id="projects">
      <SectionTitle>Principais Projetos</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10em,1fr))] gap-10 overflow-visible">
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
    </section>
  );
}

export default ProjectsSection;
