import Link from "next/link";
import { useSelector } from 'react-redux'

const Navbar = () => {
  const token = useSelector((state) => state.token)
  let prod = "";
  let cart = "";
  if (token){
             prod= <Link href="/prod">
                      <a>Menu de Producto</a>
                   </Link>
             cart = <Link href="/cart">
                      <a>Menu Carrito</a>
                   </Link>
            }
  else null                 
  return (
    <nav>
      <div className="logo">
        <h1>Desafio Proyecto Final</h1>
      </div>
      <p></p>
      {prod}
      <p></p> 
      {cart}
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
