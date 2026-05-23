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

    <div className="min-h-screen bg-black p-10">

      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          items-center
          mb-16
        "
      >

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
          fixed
          bottom-8
          right-8
          z-50
          bg-blue-600
          p-5
          rounded-full
          shadow-2xl
          hover:scale-110
          hover:bg-blue-700
          transition-all
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
            w-7
            h-7
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

      {/* FILTROS */}
      <div className="flex gap-4 mb-10 justify-center">

        {categorias.map((cat) => (

          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
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
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >

        {productosFiltrados.map((product) => (

          <Link
            href={`/producto/${product.id}`}
            key={product.id}
          >

            <div
              className="
                bg-zinc-900
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
              "
            >

              <img
                src={product.imagen}
                alt={product.nombre}
                className="
                  w-full
                  h-52
                  object-cover
                "
              />

              <div className="p-4">

                <p
                  className="
                    text-sm
                    text-blue-500
                    font-semibold
                    mb-2
                  "
                >
                  {product.categoria}
                </p>

                <h2
                  className="
                    text-3xl
                    font-bold
                    mb-3
                    text-white
                  "
                >
                  {product.nombre}
                </h2>

                <p
                  className="
                    text-2xl
                    font-extrabold
                    text-green-500
                  "
                >
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