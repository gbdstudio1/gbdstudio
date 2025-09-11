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
      {/* Título de la sección */}
      <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 text-center">
        Nuestros Precios
      </h2>

      {/* Tabla de precios */}
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
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

// Exportamos el componente
export default Prices;
