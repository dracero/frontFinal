import Link from "next/link";

const Navbarprod = ({ Component, pageProps }) => {
  return (
    <nav>
      <div className="logo">
        <h1>Desafio Proyecto Final</h1>
      </div>
      <p></p>
      <Link href="/insert">
        <a>Insertar Producto</a>
      </Link>
      <p></p>
      <Link href="/read">
        <a>Leer Productos</a>
      </Link>
      <p></p>
      <Link href="/readid">
        <a>Leer producto por id</a>
      </Link>
      <p></p>
      <Link href="/modifica">
        <a>Modificar un producto</a>
      </Link>
      <p></p>
      <Link href="/deleteid">
        <a>Borrar un producto</a>
      </Link>
      <p></p>
      <Link href="/">
        <a>Volver al menú</a>
      </Link>
    </nav>
  );
};

export default Navbarprod;
