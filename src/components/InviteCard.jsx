// Importamos React y la tarjeta de Flowbite
import React from "react";
import { Card } from "flowbite-react";

// Definimos el componente InviteCard
const InviteCard = () => {
  return (
    // 👉 max-w-2xl = ancho máximo más grande que sm
    // mx-auto = centrado horizontal
    // my-12 = margen vertical (espacio arriba y abajo)
    <Card className="max-w-2xl mx-auto my-12 shadow-lg">
      {/* Título principal */}
    <h5 className="text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white text-center">
  Trabajemos juntos 🚀
</h5>


      {/* Texto de invitación */}
      <p className="mt-4 font-normal text-gray-700 dark:text-gray-400 text-center">
        En <strong>GBD Studio & PyGs</strong> creemos que cada emprendimiento merece soluciones digitales prácticas.  
        Ya sea para <span className="font-semibold">difundir tus proyectos con un enlace sencillo</span>, compartir un{" "}
        <span className="font-semibold">evento especial mediante una invitación digital</span>, o mostrar tu negocio con{" "}
        <span className="font-semibold">una página o un folleto electrónico</span>, te ofrecemos opciones accesibles y
        funcionales para potenciar tu presencia en línea.
      </p>
    </Card>
  );
};

// Exportamos el componente
export default InviteCard;
