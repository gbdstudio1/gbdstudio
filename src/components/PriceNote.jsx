// Importamos React y los componentes de Flowbite
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const PriceNote = () => {
  return (
    <div className="max-w-4xl mx-auto my-12">
      {/* ==================== */}
      {/* Sección de Dudas o Preguntas */}
      {/* ==================== */}
      <section id="preguntas" className="bg-red-200 dark:bg-red-200 p-6 rounded-lg mb-12">
  <h3 className="text-2xl font-serif font-bold text-black dark:text-black mb-6 text-center">
    Preguntas Frecuentes
  </h3>

  <Accordion>
    <AccordionPanel>
      <AccordionTitle>¿Cómo contratar el servicio?</AccordionTitle>
      <AccordionContent>
        <p className="text-black dark:text-black">
          Podés ponerte en contacto con nosotros a través de WhatsApp o correo electrónico.
          Coordinamos juntos los detalles de lo que necesitás y te guiamos paso a paso. 
          El WhatsApp lo podés encontrar en el pie de página abajo de todo.
        </p>
      </AccordionContent>
    </AccordionPanel>

    <AccordionPanel>
      <AccordionTitle>¿Cuál es el tiempo de entrega?</AccordionTitle>
      <AccordionContent>
        <p className="text-black dark:text-black">
          Depende del tipo de proyecto: invitaciones digitales suelen estar listas en pocos días,
          mientras que páginas web o aplicaciones requieren más tiempo.
          Siempre acordamos los plazos antes de comenzar.
        </p>
      </AccordionContent>
    </AccordionPanel>

    <AccordionPanel>
      <AccordionTitle>¿Los precios se pueden adaptar?</AccordionTitle>
      <AccordionContent>
        <p className="text-black dark:text-black">
          Sí, los precios pueden adaptarse al momento y a las necesidades de cada proyecto.
          Queremos que cada persona encuentre una opción accesible y acorde a su realidad.
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</section>

      {/* ==================== */}
      {/* Sección de Actualidad */}
      {/* ==================== */}
      <section id="actualidad" className="bg-slate-300 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-6 text-center">
          La Actualidad
        </h3>

{/* GIF de actualidad */}
<div className="flex justify-center mb-6">
  <img
    src="actualidad.gif"
    alt="Imagen animada de actualidad"
    className="max-w-xs md:max-w-sm w-full rounded-lg shadow-md mx-auto"
  />
</div>

        {/* Texto descriptivo */}
        <p className="text-base text-black dark:text-gray-300 leading-relaxed text-center">
          En <strong>PyGs</strong> actualmente estamos desarrollando una{" "}
          <span className="font-semibold">app para celulares con sistema de cobro integrado</span>.  
          Este proyecto busca mejorar la organización y la calidad de atención en{" "}
          <span className="font-semibold">comercios, clubes barriales y centros deportivos</span>, 
          ofreciendo herramientas digitales accesibles y prácticas.  
          Con este tipo de desarrollos reforzamos nuestro compromiso con la innovación y con el 
          crecimiento de las comunidades.
        </p>
      </section>
    </div>
  );
};

export default PriceNote;
