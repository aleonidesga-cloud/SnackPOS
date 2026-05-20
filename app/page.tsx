"use client";

import { useState } from "react";
import products from "@/data/products";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Home() {

  const [categoria, setCategoria] = useState("Todos");

  const { carrito } = useCart();

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
    <div className="main-h-screen bg-black p-10">

<div
  className="
    flex
    justify-between
    items-center
    mb-10
  "
>

  <div className="flex-1">

    <h1
      className="
        text-7xl
        md:text-8xl
        font-extrabold
        text-center
        mb-4
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        bg-clip-text
        text-transparent
      "
    >
      SnackPOS
    </h1>

    <p
      className="
        text-center
        text-gray-400
        text-2xl
        font-light
      "
    >
      Sistema inteligente de punto de venta
    </p>

  </div>

  {/* CARRITO */}
  <Link
    href="/carrito"
    className="
      relative
      bg-zinc-800
      p-4
      rounded-full
      hover:bg-zinc-700
      transition
    "
  >

    <ShoppingCart
      className="text-white"
      size={35}
    />

    <span
      className="
        absolute
        -top-2
        -right-2
        bg-red-500
        text-white
        text-sm
        w-7 h-7
        rounded-full
        flex
        items-center
        justify-center
        font-bold
      "
    >
      {carrito.length}
    </span>

  </Link>

</div>

      {/* FILTROS */}
      <div className="flex gap-4 mb-10 justify-center">

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

          <Link
          href={`/producto/${product.id}`}
          key={product.id}
          >

          <div
          className="
          bg-zinc-900
          rounded-3x1
          overflow-hidden
          shadow-lg
          hover:shadow-2x1
          hover:-translate-y-2
          transition-all duration-300
          cursor-pointer
          "
          >

            <img
            src={product.imagen}
            alt={product.nombre}
            className="
            w-full
            h-56
            object-cover"
            />

            <div className="p-5">

              <p className="
              text-sm
              text-blue-600
              font-semibold
              mb-2
              ">
                {product.categoria}
              </p>

              <h2 className="
              text-2xl
              font-bold
              mb-3
              text-white
              ">
                {product.nombre}
              </h2>

              <p className="
              text-3x1
              font-extrabold
              text-green-600
              ">
                ${product.precio}
              </p>
            </div>
          </div>

         </Link>

        ))}
      </div>
    </div>
  );
}