// Importamos React y la tarjeta de Flowbite
import React from "react";
import { Card } from "flowbite-react";

// Definimos el componente Services
const Services = () => {
  return (
    // 👉 Envolvemos la sección con id="servicios"
    // Esto permite que el link del menú "Servicios" funcione
   
    <section
  id="servicios"
  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto my-12 bg-slate-300 p-6 rounded-lg"
>

      
      {/* Tarjeta 1: Páginas Web Sencillas */}
      <Card className="shadow-md">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          🌐 Páginas Web
        </h5>
        <p className="mt-2 text-gray-700 dark:text-gray-400 text-center">
          Soluciones rápidas y funcionales para darle presencia online a tu emprendimiento.
        </p>
      </Card>

      {/* Tarjeta 2: Aplicaciones (Apps) */}
      <Card className="shadow-md">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          📱 Aplicaciones (Apps)
        </h5>
        <p className="mt-2 text-gray-700 dark:text-gray-400 text-center">
          Desarrollo de apps prácticas que llevan tu proyecto un paso más allá.
        </p>
      </Card>

      {/* Tarjeta 3: Invitaciones Digitales */}
      <Card className="shadow-md">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          🎉 Invitaciones Digitales
        </h5>
        <p className="mt-2 text-gray-700 dark:text-gray-400 text-center">
          Diseños modernos y personalizados para difundir tus eventos con un link simple.
        </p>
      </Card>

      {/* Tarjeta 4: Folletos Electrónicos */}
      <Card className="shadow-md">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          📰 creacion de software personalizado
        </h5>
        <p className="mt-2 text-gray-700 dark:text-gray-400 text-center">
          Adaptado a tu necesidad, vos me decis que necesitas y nosotros lo creamos.
        </p>
      </Card>
    </section>
  );
};

// Exportamos el componente
export default Services;

