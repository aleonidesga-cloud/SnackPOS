"use client";

import products from "@/data/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";

export default function ProductDetail() {

  const { addToCart } = useCart();

  const params = useParams();

  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    return (
      <h1
        className="
          text-3xl
          p-10
          text-white
        "
      >
        Producto no encontrado
      </h1>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        p-10
      "
    >

      <Link
        href="/"
        className="
          bg-zinc-800
          text-white
          px-5
          py-3
          rounded-xl
          inline-block
          mb-10
          hover:bg-zinc-700
          transition
        "
      >
        ← Regresar
      </Link>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          items-center
        "
      >

        {/* IMAGEN */}
        <img
          src={product.imagen}
          alt={product.nombre}
          className="
            w-full
            h-[500px]
            object-cover
            rounded-3xl
            shadow-2xl
          "
        />

        {/* INFO */}
        <div>

          <p
            className="
              text-blue-400
              text-xl
              mb-3
              font-semibold
            "
          >
            {product.categoria}
          </p>

          <h1
            className="
              text-6xl
              font-extrabold
              mb-6
            "
          >
            {product.nombre}
          </h1>

          <p
            className="
              text-5xl
              font-bold
              text-green-400
              mb-8
            "
          >
            ${product.precio}
          </p>

          <p
            className="
              text-xl
              leading-9
              text-gray-300
              mb-10
            "
          >
            {product.descripcion}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              text-white
              px-10
              py-5
              rounded-2xl
              text-2xl
              font-bold
              shadow-lg
            "
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>
  );
}