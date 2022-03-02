import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Desafio Proyecto Final</h1>
      </div>
      <p></p>
      <Link href="/prod">
        <a>Menu de Producto</a>
      </Link>
      <p></p>
      <Link href="/cart">
        <a>Menu Carrito</a>
      </Link>
      <p></p>
      <p></p>
      <Link href="/loginreg">
        <a>Ingresar con Login Credentiales</a>
      </Link>
      <p></p>
    </nav>
  );
};

export default Navbar;
