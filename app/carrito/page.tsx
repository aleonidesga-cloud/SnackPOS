"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {
    carrito,
    removeFromCart,
    clearCart
  } = useCart();

  const total = carrito.reduce(
    (acc, item) =>
      acc + item.precio * item.cantidad,
    0
  );

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
          px-5
          py-3
          rounded-xl
          inline-block
          mb-10
          hover:bg-zinc-700
          transition
        "
      >
        ← Volver al catálogo
      </Link>

      <h1
        className="
          text-6xl
          font-extrabold
          mb-10
        "
      >
        Carrito de compras
      </h1>

      {carrito.length === 0 ? (

        <p className="text-gray-400 text-2xl">
          Tu carrito está vacío
        </p>

      ) : (

        <div className="space-y-6">

          {carrito.map((item) => (

            <div
              key={item.id}
              className="
                bg-zinc-900
                rounded-3xl
                p-6
                flex
                justify-between
                items-center
                shadow-lg
              "
            >

              <div className="flex items-center gap-6">

                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="
                    w-24
                    h-24
                    object-cover
                    rounded-xl
                  "
                />

                <div>

                  <h2
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {item.nombre}
                  </h2>

                  <p className="text-gray-400">
                    Cantidad: {item.cantidad}
                  </p>

                  <p
                    className="
                      text-green-400
                      font-bold
                      text-xl
                    "
                  >
                    ${item.precio}
                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="
                  bg-red-500
                  hover:bg-red-600
                  transition
                  px-5
                  py-3
                  rounded-xl
                  font-bold
                "
              >
                Eliminar
              </button>

            </div>

          ))}

          <div className="
          flex
          flex-colmd:flex-row
          justify-between
          items-center
          gap-5
          ">

            <h2
              className="
                text-5xl
                font-extrabold
              "
            >
              Total: ${total}
            </h2>

            <button
                onClick={clearCart}
                className="
                bg-red-600
                hover:bg-red-700
                transition
                px-8
                py-4
                rounded-2x1
                text-x1
                font-bold
                "
            >
              Vaciar carrito
            </button>

          </div>

        </div>

      )}

    </div>
  );
}