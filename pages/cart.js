import Link from "next/link";

export default function Navbarcart({ Component, pageProps }) {
  return (
    <nav>
      <div className="logo">
        <h1>Desafio Proyecto Final</h1>
      </div>
      <p></p>
      <Link href="/insercart">
        <a>Crear carrito vacio</a>
      </Link>
      <p></p>
      <Link href="/readcart">
        <a>Ver Productos en el carrito</a>
      </Link>
      <p></p>
      <Link href="/insertProdCart">
        <a>Agregar productos a un carrito</a>
      </Link>
      <p></p>
      <Link href="/delprodcart">
        <a>Borrar el producto del carrito</a>
      </Link>
      <p></p>
      <Link href="/delcart">
        <a>Borrar el carrito</a>
      </Link>
      <p></p>
      <Link href="/">
        <a>Volver al menú</a>
      </Link>
    </nav>
  );
}
