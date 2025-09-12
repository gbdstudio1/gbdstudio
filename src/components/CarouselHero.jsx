
// Importamos React y el carrusel de Flowbite
import React from "react";
import { Carousel } from "flowbite-react";

// Definimos el componente del carrusel
const CarouselHero = () => {
  return (
    // 👉 Esta sección es el "Inicio" de la página
    <section id="inicio" className="h-56 sm:h-64 xl:h-80 2xl:h-96">

<Carousel>
  <img
    src="carrusel1.jpg"
    alt="Imagen carrusel 1"
  />

  <img
    src="carrusel2.jpg"
    alt="Imagen carrusel 2"
  />

  <img
    src="carrusel3.jpg"
    alt="Imagen carrusel 3"
  />
</Carousel>

    </section>
  );
};

// Exportamos el componente
export default CarouselHero;
