import Link from "next/link";
import Table from "react-bootstrap/Table";
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";



const Productos = () => {
    const [productos,setProd]=useState()
    const token = useSelector((state) => state.token)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
                     setIsLoading(true)
                     var requestOptions = {
                     method: 'GET',
                     redirect: 'follow'
                    };
                     fetch("https://trabajofinalcoder.herokuapp.com/api/products?secret_token="+token.token, requestOptions)
                     .then(response => response.json())
                     .then(result => {
                                       setProd(result)
                                       setIsLoading(false)
                                     })
                    .catch(error => console.log('error', error));
                  }, [])            
    if (isLoading) {
                    return <p>Loading....</p>
                   }
    if (!productos ){
                     return <p>No List to show</p>
                    }
    if(Array.isArray(productos)) {               
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
            <tbody key={prod.id + 6}>
              <tr key={prod.id}>
                <td key={prod.id + 1}>{prod.nombre}</td>
                <td key={prod.id + 2}>{prod.descripcion}</td>
                <td key={prod.id + 3}>{prod.foto}</td>
                <td key={prod.id + 4}>{prod.precio}</td>
                <td key={prod.id + 5}>{prod.stock}</td>
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
  }else{
    return(
        <div>
        <Link href="/">
          <a>Volver al menú</a>
        </Link>
        {console.log(productos)}
      </div>  
    )
  }
};

export default Productos;
