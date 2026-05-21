# SnackPOS

Sistema Punto de Venta (POS) desarrollado con Next.js y Tailwind CSS.

---

# Descripcion

SanckPOS es una aplicacion web tipo POS donde los usuarios pueden:

- Ver los productos organizados por categoria.
- Filtrar productos dinamicamente.
- Visualizar el detalle completo de cada producto.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Mantener el carrito guardado incluso el recargar la pagina.

La aplicacion fue desarrollada utilizando tecnologias modernas como Next.js, React, TypeScript y Tailwind CSS, aplicando diseño responsive y manejo de estado global mediante Context API.


# Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Context API
- LocalStorage
- Lucide React Icons

---

# Desarrollo del proyecto

## ✅ Día 19 — Catálogo y detalle de productos

Durante el día 19 se realizó la instalación y configuración inicial del proyecto utilizando Next.js, TypeScript y Tailwind CSS desde Visual Studio Code.

Se desarrolló el catálogo principal del sistema POS mostrando dinámicamente:

- imagen
- nombre
- categoría
- precio

Los productos fueron almacenados en un archivo independiente utilizando arreglos de objetos en TypeScript.

Además, se implementó un sistema de categorías y filtrado dinámico utilizando `useState()` y `filter()`, permitiendo visualizar únicamente los productos correspondientes a cada categoría.

Posteriormente se desarrolló la funcionalidad de detalle de productos utilizando rutas dinámicas mediante la carpeta:

```txt
app/producto/[id]
```

Se utilizó `useParams()` para obtener dinámicamente el ID del producto desde la URL y posteriormente se implementó el método `find()` para buscar automáticamente la información correspondiente.

En esta sección se muestra:

- imagen del producto
- nombre
- categoría
- precio
- descripción completa

También se implementó navegación dinámica utilizando `Link` de Next.js para regresar fácilmente al catálogo principal.

Finalmente, se utilizó Tailwind CSS para crear una interfaz moderna, organizada y responsiva.

---

## ✅ Día 20 — Carrito de compras y mejoras finales

Durante el día 20 se implementó la funcionalidad completa del carrito de compras utilizando Context API mediante:

```txt
context/CartContext.tsx
```

A través de `createContext`, `useState` y `useContext` se creó un sistema global capaz de compartir los datos del carrito entre distintas páginas de la aplicación.

Se implementaron funciones como:

- `addToCart()`
- `removeFromCart()`
- `clearCart()`

permitiendo agregar productos, eliminarlos y vaciar completamente el carrito.

Además, se desarrolló una pantalla independiente para el carrito donde se muestran:

- productos agregados
- cantidades
- subtotal
- total automático

El cálculo del total se realizó utilizando el método `reduce()`.

También se añadió un contador dinámico de productos visible en el icono del carrito utilizando Lucide React Icons.

Posteriormente se realizaron mejoras visuales y funcionales al sistema POS utilizando Tailwind CSS mediante:

- diseño dark mode
- tarjetas modernas
- sombras suaves
- animaciones hover
- diseño responsive

Asimismo, se implementó persistencia de datos utilizando `localStorage`, evitando que el carrito se perdiera al recargar la página.

Para ello se utilizó `useEffect()` dentro del contexto global del carrito, permitiendo guardar y recuperar automáticamente los productos almacenados.

Finalmente, se inicializó el repositorio Git y se subió el proyecto completo a GitHub utilizando comandos como:

```bash
git add .
git commit -m "Actualización proyecto"
git push
```

---

# Cómo ejecutar el proyecto

## Clonar repositorio

```bash
git clone https://github.com/aleonidesga-cloud/SnackPOS.git
```

---

## Entrar a la carpeta

```bash
npm install
```

## Ejecutar servidor

```bash
npm run dev
```

---

## Abrir en navegador

```txt
http://localhost:3000
```

---

# Autor

Desarrollado por Alejandro Leonides Galindo.