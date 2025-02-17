import React from "react";
import { BlueButtom, WhiteButton, Logo } from "../../components";
import {
  gitLogo,
  linkedinLogo,
  profileImage,
  linktreeLogo,
} from "../../assets";

function InitialSection() {
  const githubLink = "https://github.com/KJSS3012";
  const linkedinLink = "https://linkedin.com/in/kaiquesantos-dev";
  const linktreeLink = "https://linktr.ee/kaiquesantos.dev";
  const curricukum = "/assets/pdf/curriculum.pdf";

  return (
    <section className="flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-10">
      <div className="flex flex-col gap-10 text-white w-full lg:w-1/2">
        <h1
          className="text-4xl lg:text-6xl font-semibold text-center lg:text-left overflow-hidden"
          data-aos="fade-down"
        >
          Kaique Santos
        </h1>
        <p
          className="text-base text-wrap text-justify overflow-hidden"
          data-aos="fade-right"
        >
          Olá! É um prazer recebê-lo(a) aqui! Preparado(a) para uma jornada de
          descobertas e inovação? Sou um Desenvolvedor Full Stack. Sinta-se à
          vontade para explorar e conhecer mais sobre os projetos que
          desenvolvo.
        </p>
        <div
          className="flex gap-0 lg:gap-7 justify-between lg:justify-normal w-full"
          data-aos="fade-right"
        >
          <BlueButtom title="Ver Curriculum" href={curricukum} isCurriculum={true}/>
          <WhiteButton title="Meus Projetos" href={"/projects"} />
        </div>
        <div
          className="flex text-white font-semibold gap-1 items-center"
          data-aos="fade-right"
        >
          <p>Minhas redes:</p>
          <Logo href={githubLink} img={gitLogo} title={"Github"} />
          <Logo href={linkedinLink} img={linkedinLogo} title={"Linkedin"} />
          <Logo href={linktreeLink} img={linktreeLogo} title={"Linktree"} />
        </div>
      </div>
      <div className="flex justify-center items-center" data-aos="fade-left">
        <img src={profileImage} className="w-96" alt=""/>
      </div>
    </section>
  );
}

export default InitialSection;
