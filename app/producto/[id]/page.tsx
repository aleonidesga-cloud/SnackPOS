"use client";

import products from "@/data/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import { ShoppingCart } from "lucide-react";

export default function ProductDetail() {

  const { carrito, addToCart } = useCart();

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

      {/* BOTÓN REGRESAR */}
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

      {/* CARRITO FLOTANTE */}
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

      {/* CONTENIDO */}
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

        {/* INFORMACIÓN */}
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

          {/* BOTÓN AGREGAR */}
          <button
            onClick={() => {
              addToCart(product);
              alert("Producto agregado al carrito 🛒");
            }}
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              text-white
              px-8
              py-4
              rounded-xl
              text-xl
              font-bold
            "
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>

  );
}