"use client";

import { useState } from "react";
import products from "@/data/products";

export default function Home() {

  const [categoria, setCategoria] = useState("Todos");

  const categorias = [
    "Todos",
    "Comida",
    "Bebidas",
    "Postres"
  ];

  const productosFiltrados =
    categoria === "Todos"
      ? products
      : products.filter(
          (product) =>
            product.categoria === categoria
        );

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        SnackPOS
      </h1>

      {/* FILTROS */}
      <div className="flex gap-4 mb-10">

        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`
              px-5 py-2 rounded-lg font-semibold transition
              ${
                categoria === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }
            `}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* PRODUCTOS */}
      <div className="grid grid-cols-3 gap-6">

        {productosFiltrados.map((product) => (

          <div
            key={product.id}
            className="
              border rounded-xl
              p-5 shadow-md
              hover:scale-105
              transition
            "
          >

            <img
              src={product.imagen}
              alt={product.nombre}
              className="
                w-full h-48
                object-cover
                rounded-lg mb-4
              "
            />

            <h2 className="text-2xl font-bold">
              {product.nombre}
            </h2>

            <p className="text-gray-500">
              {product.categoria}
            </p>

            <p className="text-xl font-bold mt-2">
              ${product.precio}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}