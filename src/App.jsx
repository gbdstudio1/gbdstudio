// Importamos React (necesario para trabajar con componentes en JSX)
import React from "react";

// Importamos el Header que creamos en src/components/Header.jsx
import Header from "./components/Header";
import CarouselHero from "./components/CarouselHero";
import IntroBlock from "./components/IntroBlock";
import InfoAccordion from "./components/InfoAccordion";
import InviteCard from "./components/InviteCard";
import Services from "./components/Services";
import Prices from "./components/Prices";
import PriceNote from "./components/PriceNote";
import Footer from "./components/Footer";

// Importamos el botón de volver arriba
import ScrollToTopButton from "./components/ScrollToTopButton";

// Definimos el componente principal de la aplicación
export default function App() {
  return (
    <>
      {/* Header con el menú de Flowbite */}
      <Header />
      <CarouselHero />
      <IntroBlock />
      <InfoAccordion />
      <InviteCard />  
      <Services />
      <Prices />
      <PriceNote /> 
      <Footer />

      {/* Botón de volver arriba */}
      <ScrollToTopButton />

      {/* Contenido principal de la página */}
      <div className="p-8">
        {/* Podés dejar este espacio para contenido futuro */}
      </div>
    </>
  );
}
