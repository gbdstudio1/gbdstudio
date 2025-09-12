// Importamos React y los componentes de Flowbite para la barra de navegación
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Header = () => {
  return (
    // Navbar principal
    <Navbar fluid rounded className="bg-slate-400 dark:bg-slate-400">
      {/* Logo y nombre */}
      <NavbarBrand href="#inicio">
        <img
          src="logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Logo GBDstudio"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-black">
          GBD
        </span>
      </NavbarBrand>

      {/* Botón hamburguesa (para pantallas chicas) */}
      
       <NavbarToggle className="text-black dark:text-black" />

      {/* Links del menú */}
      <NavbarCollapse>
        {/* Inicio → lleva al comienzo de la página */}
        <NavbarLink href="#inicio" className="text-black dark:text-black">
          Inicio
        </NavbarLink>

        {/* Quiénes somos → lleva al acordeón InfoAccordion */}
        <NavbarLink href="#quienes-somos" className="text-black dark:text-black">
          Quiénes somos
        </NavbarLink>

        {/* Servicios → lleva a la sección de servicios */}
        <NavbarLink href="#servicios" className="text-black dark:text-black">
          Servicios
        </NavbarLink>

        {/* Precios → lleva a la tabla de precios */}
        <NavbarLink href="#precios" className="text-black dark:text-black">
          Precios
        </NavbarLink>

        {/* Actualidad → lleva al bloque final de PyGs */}
        <NavbarLink href="#actualidad" className="text-black dark:text-black">
          Actualidad
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
