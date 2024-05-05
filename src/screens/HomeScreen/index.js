import React, { Fragment, useState } from "react";
import {
  Header,
  Container,
  GreenButton,
  WhiteButton,
  Logo,
} from "../../components";
import { gitLogo, linkedinLogo } from "../../assets";

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
        <section className="flex" id="Section-Initial">
          <div className="flex flex-col gap-10 text-white w-full lg:w-1/2">
            <h1
              className="text-4xl lg:text-6xl font-semibold text-center lg:text-left "
              data-aos="fade-down"
            >
              Kaique Santos
            </h1>
            <p
              className="text-base text-wrap text-justify"
              data-aos="fade-right"
            >
              Olá! É um prazer recebê-lo(a) aqui! Preparado(a) para uma jornada
              de descobertas e inovação? Sou um Desenvolvedor Full Stack.
              Sinta-se à vontade para explorar e conhecer mais sobre os projetos
              que desenvolvo.
            </p>
            <div
              className="flex gap:0 lg:gap-7 justify-between lg:justify-normal w-full"
              data-aos="fade-right"
            >
              <GreenButton
                title="Ver CV"
                href={
                  "https://docs.google.com/viewer?url=https://docs.google.com/document/d/1zZqvjBPF7hMNshYG1jrKB4N5C-v1sVQhMVgo5qjatPE/export?format=pdf"
                }
              />
              <WhiteButton title="Meus Projetos" href={""} />
            </div>
            <div
              className="flex text-white font-semibold gap-3"
              data-aos="fade-right"
            >
              <p>Minhas redes:</p>
              <Logo href={"https://github.com/KJSS3012"} img={gitLogo} />
              <Logo
                href={"https://linkedin.com/in/kaiquesantos-dev"}
                img={linkedinLogo}
              />
            </div>
          </div>
        </section>
      </Container>
    </Fragment>
  );
}

export default HomeScreen;
