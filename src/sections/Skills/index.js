import React, { useState, useEffect } from "react";
import { SectionTitle, SkillBox } from "../../components";

function SkillSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await fetch("/assets/json/skills.json");
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    loadSkills();
  }, []);

  return (
    <section className="flex flex-col gap-6" id="skill">
      <SectionTitle>Minhas Tecnologias</SectionTitle>
      <div
        className="flex flex-wrap justify-between gap-10  overflow-hidden"
        id="skill-box"
      >
        {skills.map((value, index) => (
          <SkillBox key={index} title={value.title} image={value.image} />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
