import products from "@/data/products";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-3xl p-10">
        Producto no encontrado
      </h1>
    );
  }

  return (
    <div className="min-h-screen p-10">

      <Link
        href="/"
        className="
          bg-gray-200
          text-black
          px-5 py-2
          rounded-lg
          inline-block
          mb-8
        "
      >
        ← Regresar
      </Link>

      <div
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-10 items-center
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
            rounded-2xl
            shadow-lg
          "
        />

        {/* INFORMACIÓN */}
        <div>

          <h1 className="text-5xl font-bold mb-5">
            {product.nombre}
          </h1>

          <p className="text-2xl text-gray-300 mb-5">
            {product.categoria}
          </p>

          <p className="text-4xl font-bold mb-8">
            ${product.precio}
          </p>

          <p className="text-lg leading-8 mb-10">
            {product.descripcion}
          </p>

          <button
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              text-white
              px-8 py-4
              rounded-xl
              text-xl
            "
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>
  );
}