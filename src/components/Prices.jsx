// Importamos React y los componentes de Flowbite
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

// Definimos el componente Prices
const Prices = () => {
  return (
    // 👉 Envolvemos toda la sección con id="precios"
    // Esto conecta el link del menú "Precios" con esta tabla
    <section id="precios" className="max-w-4xl mx-auto my-12">
      {/* ==================== */}
      {/* Título de la sección */}
      {/* ==================== */}
      <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 text-center">
        Nuestros Precios
      </h2>

      {/* ==================== */}
      {/* Tabla de precios     */}
      {/* ==================== */}
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Servicio</TableHeadCell>
              <TableHeadCell>Descripción</TableHeadCell>
              <TableHeadCell>Desde</TableHeadCell>
              <TableHeadCell>Estilo/Color</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {/* Fila: Invitaciones Digitales */}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium text-gray-900 dark:text-white">
                Invitaciones Digitales
              </TableCell>
              <TableCell>
                Diseños modernos y personalizados para difundir tus eventos con
                un link sencillo.
              </TableCell>
              <TableCell>$8.000</TableCell>
              <TableCell>A elección</TableCell>
            </TableRow>

            {/* Fila: Páginas Web Sencillas */}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium text-gray-900 dark:text-white">
                Páginas Web Sencillas
              </TableCell>
              <TableCell>
                Soluciones rápidas y funcionales para tu emprendimiento o
                negocio.
              </TableCell>
              <TableCell>$55.000</TableCell>
              <TableCell>A elección</TableCell>
            </TableRow>

            {/* Fila: Folletos Electrónicos */}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium text-gray-900 dark:text-white">
                Folletos Electrónicos
              </TableCell>
              <TableCell>
                Representación digital de tarjetas y folletos para compartir
                fácilmente tu negocio.
              </TableCell>
              <TableCell>$8.000</TableCell>
              <TableCell>A elección</TableCell>
            </TableRow>

            {/* Fila: Aplicaciones (Apps) */}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium text-gray-900 dark:text-white">
                Aplicaciones (Apps)
              </TableCell>
              <TableCell>
                Desarrollo de apps prácticas adaptadas a tus necesidades.
              </TableCell>
              <TableCell>A consultar</TableCell>
              <TableCell>A elección</TableCell>
            </TableRow>

            {/* NUEVA FILA: Software Personalizado */}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium text-gray-900 dark:text-white">
                Software Personalizado
              </TableCell>
              <TableCell>
                Desarrollo de herramientas a medida para comercios,
                emprendimientos o para mejorar la organización de tus datos con
                bases diseñadas especialmente para vos.
              </TableCell>
              <TableCell>Desde $20.000</TableCell>
              <TableCell>A elección</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Línea separadora después de la tabla */}
      <hr className="my-8 border-sky-600 dark:border-t-sky-600" />

      {/* =============================== */}
      {/* Bloque extra: Importante a saber */}
      {/* =============================== */}
      <div className="mt-12">
        {/* Título centrado */}
        <h3 className="text-2xl font-serif font-bold text-center text-gray-900 dark:text-gray-900">
          Importante a saber sobre los software
        </h3>

        {/* Párrafo explicativo */}
        <p className="mt-4 text-base text-gray-900 dark:text-gray-900 text-center max-w-2xl mx-auto">
          Un software es una herramienta digital diseñada para resolver
          necesidades específicas. En GBD Studio trabajamos a partir de tus
          ideas y lo que realmente necesita tu comercio o emprendimiento, para
          crear una solución clara, práctica y personalizada que te ayude a
          organizar mejor tu negocio.
        </p>

        {/* Línea separadora después del párrafo */}
        <hr className="my-8 border-sky-600 dark:border-sky-600" />
      </div>
    </section>
  );
};

// Exportamos el componente
export default Prices;
