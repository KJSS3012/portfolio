import React, { useEffect, useState } from "react";
import { SectionTitle, Indicator } from "../../components";

function EducationSection() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const loadEducation = async () => {
      return await fetch("/assets/json/education.json")
        .then((response) => response.json())
        .catch((error) => ({ error: error }));
    };

    const saveEducation = async () => {
      const data = await loadEducation();

      if (data.error) {
        console.error("Error fetching education: ", data.error);
        return;
      }
      setEducation(data);
    };

    saveEducation();
  }, []);

  return (
    <section className="flex flex-col gap-6" id="education">
      <SectionTitle>Minhas Formações</SectionTitle>
      <div className="flex flex-col">
        {education.map((value, index) => (
          <div key={index} className="flex gap-2 md:gap-5">
            <div className="w-full pb-16 pt-1">
                <p
                  className="text-white text-right text-lg md:text-2xl font-bold overflow-x-hidden"
                  data-aos="fade-right"
                >
                  {value.title}
                </p>
            </div>
            <Indicator isLast={index === education.length-1} isFirst={index === 0}/>
            <div className="w-full flex flex-col gap-1">
                <p
                  className="text-white text-base font-semibold italic"
                  data-aos="fade-right"
                >
                  {value.institution}
                </p>
              <p className="text-white text-justify hidden md:block" data-aos="fade-right">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
