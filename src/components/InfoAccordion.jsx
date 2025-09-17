// Importamos React y los componentes de Flowbite
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

// Definimos el componente InfoAccordion
const InfoAccordion = () => {
  return (
    // 👉 Envolvemos el acordeón en una sección con id="quienes-somos"
    // Esto permite que el link del menú "Quiénes somos" funcione
    <section id="quienes-somos" className="max-w-3xl mx-auto my-8 bg-slate-200 p-6 rounded-lg">
      <Accordion>
        {/* Panel 1: GBD Studio */}
        <AccordionPanel>
          <AccordionTitle>Qué es GBD Studio</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black dark:text-gray-400">
              <strong>GBD Studio</strong> está dedicado al desarrollo de páginas web, creacion de sofware y soluciones digitales prácticas.
              Su enfoque es crear herramientas funcionales y accesibles para personas que necesitan una página, un enlace
              o un espacio en línea que potencie su emprendimiento, negocio o proyecto personal. La prioridad es ofrecer
              resultados claros y útiles, pensados para la vida real.
            </p>
          </AccordionContent>
        </AccordionPanel>

        {/* Panel 2: PyGs */}
        <AccordionPanel>
          <AccordionTitle>Qué es PyGs</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black dark:text-gray-400">
              <strong>PyGs</strong> es un área enfocada en los desafíos tecnológicos más complejos. Además de brindar
              soluciones avanzadas para proyectos web, también se especializa en el desarrollo de{" "}
              <span className="font-semibold">videojuegos y aplicaciones</span>, combinando creatividad con tecnología de
              alto nivel. Representa la faceta más innovadora y experimental, ideal para quienes buscan ir más allá de lo
              tradicional.
            </p>
          </AccordionContent>
        </AccordionPanel>

        {/* Panel 3: Por qué trabajan juntos */}
        <AccordionPanel>
          <AccordionTitle>Por qué trabajan juntos</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black dark:text-gray-400">
              La unión de <strong>GBD Studio y PyGs</strong> combina lo mejor de ambos mundos:
            </p>
            <ul className="list-disc pl-5 text-black dark:text-gray-400">
              <li>La <span className="font-semibold">practicidad y accesibilidad</span> de GBD Studio.</li>
              <li>La <span className="font-semibold">innovación y complejidad</span> de PyGs.</li>
            </ul>
            <p className="mt-2 text-black dark:text-gray-400">
              Juntos ofrecen un servicio integral que permite a cualquier cliente encontrar soluciones a medida, desde lo
              más sencillo y funcional hasta lo más avanzado y creativo. Esto asegura un acompañamiento completo para todo
              tipo de emprendimientos y proyectos.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </section>
  );
};

// Exportamos el componente
export default InfoAccordion;
