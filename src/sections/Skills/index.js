import React, { useState, useEffect } from "react";
import { SectionTitle, SkillButtom, SkillBox } from "../../components";

function SkillSection() {
  const [skills, setSkills] = useState({
    "front-end": [],
    "back-end": [],
    "programming-tools": [],
  });

  const [currentCategory, setCurrentCategory] = useState("");

  const updateSkills = (category) => () => {
    if (category == currentCategory) {
      setCurrentCategory("");
    } else {
      setCurrentCategory(category);
    }
  };

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await fetch("/assets/json/skills.json");
        const data = await response.json();
        localStorage.setItem("skills", JSON.stringify(data));
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    const storedSkills = localStorage.getItem("skills");

    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    } else {
      loadSkills();
    }
  }, []);

  return (
    <section className="flex flex-col gap-6" id="skill">
      <SectionTitle>Minhas Tecnologias</SectionTitle>
      <div className="flex justify-between gap-2" data-aos="fade-down">
        <SkillButtom
          title="Front-End"
          onClick={updateSkills("front-end")}
          isSelect={currentCategory === "front-end"}
        />
        <SkillButtom
          title="Back-End"
          onClick={updateSkills("back-end")}
          isSelect={currentCategory === "back-end"}
        />
        <SkillButtom
          title="Ferramentas"
          onClick={updateSkills("programming-tools")}
          isSelect={currentCategory === "programming-tools"}
        />
      </div>
      <div
        className="flex flex-wrap gap-20 pt-10 overflow-hidden"
        id="skill-box"
      >
        {skills[currentCategory]?.map((value, index) => (
          <SkillBox key={index} title={value.title} image={value.image} />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
