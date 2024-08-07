import React from "react";
import { SectionTitle } from "../../components";

function AboutSection() {
  return (
    <section className="flex flex-col gap-6" id="about">
      <SectionTitle>Um pouco sobre mim</SectionTitle>
      <p className="text-white text-justify" data-aos="fade-left">
        Meu nome é Kaique e sempre tive uma afinidade natural com a tecnologia,
        alimentada por uma curiosidade genuína em entender o funcionamento dos
        sistemas e a vontade de criar minhas próprias soluções digitais. Durante
        meu curso no IFRN Campus Caicó, adquiri conhecimentos em desenvolvimento
        web, manutenção de sistemas e resolução de problemas tecnológicos. Como
        Técnico em Informática para Internet, estou pronto para enfrentar novos
        desafios e continuar explorando as infinitas possibilidades que a
        tecnologia oferece.
      </p>
    </section>
  );
}

export default AboutSection;
