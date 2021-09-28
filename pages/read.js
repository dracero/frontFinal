import Link from "next/link";
import Table from "react-bootstrap/Table";

const Productos = ({ productos }) => {
  if (Array.isArray(productos)) {
    return (
      <div>
        <h1>Desafio Proyecto Final</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th>Descripción</th>
              <th>Foto</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          {productos.map((prod) => (
            <tbody>
              <tr key={prod.id}>
                <td>{prod.nombre}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.foto}</td>
                <td>{prod.precio}</td>
                <td>{prod.stock}</td>
              </tr>
            </tbody>
          ))}
        </Table>
        <p></p>
        <Link href="/">
          <a>Volver al menú</a>
        </Link>
      </div>
    );
  } else
    return (
      <Link href="/">
        <a>Volver al menú</a>
      </Link>
    );
};

export default Productos;

//acá leo, llamo a getStaticProps para que en producción se pueda cachear
export const getServerSideProps = async () => {
  const res = await fetch("https://desafio09.herokuapp.com/api/productos/");
  const data = await res.json();

  return {
    props: { productos: data }
  };
};
