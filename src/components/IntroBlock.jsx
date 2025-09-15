import React from "react";
import { Blockquote } from "flowbite-react";

const IntroBlock = () => {
  return (
    <figure className="mx-auto max-w-screen-md text-center my-12">
      {/* Icono de comillas */}
      <svg
        className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>

      {/* Texto introductorio */}
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-gray-900">
  “<strong>GBD Studio</strong> crea herramientas digitales útiles para tu
  emprendimiento. Diseñamos <span className="font-semibold">invitaciones digitales personalizadas</span>,{" "}
  <span className="font-semibold">páginas web</span> y{" "}
  <span className="font-semibold">folletos electrónicos</span> en formato de tarjeta,
  para que tu negocio tenga una presencia moderna, práctica y accesible.”
</p>

      </Blockquote>
    </figure>
  );
};

export default IntroBlock;
