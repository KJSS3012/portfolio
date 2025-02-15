import React, { useState, useEffect } from "react";
import { SectionTitle, SkillBox } from "../../components";

function SkillSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
      const loadSkills = async () => {
        return await fetch("/assets/json/skills.json")
          .then((response) => response.json())
          .catch((error) => ({ error: error }));
      };
  
      const saveSkills = async () => {
        const data = await loadSkills();
  
        if (data.error) {
          console.error("Error fetching education: ", data.error);
          return;
        }
        setSkills(data);
      };
  
      saveSkills();
    }, []);

  return (
    <section className="flex flex-col gap-6" id="skill">
      <SectionTitle>Minhas Tecnologias</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(8em,1fr))] gap-10 overflow-hidden" id="skill-box">
        {skills.map((value, index) => (
          <SkillBox key={index} title={value.title} image={value.image} />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
