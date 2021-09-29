import { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "regenerator-runtime/runtime";
import Link from "next/link";

export default function Home({ Component, pageProps }) {
  const [nombre, setNombre] = useState("");
  const [desc, setDesc] = useState("");
  const [cod, setCod] = useState("");
  const [foto, setFoto] = useState("");
  const [prec, setPrec] = useState("");
  const [stock, setStock] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://desafio09.herokuapp.com/api/productos/" + id
    );
    const data = await res.json();
    setNombre(data.nombre);
    setDesc(data.descripcion);
    setCod(data.codigo);
    setFoto(data.foto);
    setPrec(data.precio);
    setStock(data.stock);
  };

  const update = async (e) => {
    //e.preventDefault(); //esto es para que recargue
    const data = {
      nombre,
      desc,
      cod,
      foto,
      prec,
      stock
    };
    fetch(
      "https://desafio09.herokuapp.com/api/productos/" +
        id +
        "?nombre=" +
        data.nombre +
        "&descripcion=" +
        data.desc +
        "&codigo=" +
        data.cod +
        "&foto=" +
        data.foto +
        "&precio=" +
        data.prec +
        "&stock=" +
        data.stock,
      {
        method: "put",
        body: JSON.stringify(data)
      }
    ).catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form
        className="text-right border border-light p-5"
        onSubmit={handleSubmit}
      >
        <Form.Label htmlFor="id">
          Ingrese el ID a moificar:
          <input
            className="form-control"
            id="id"
            type="text"
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="name">
          Nombre:
          <input
            className="form-control"
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="email">
          Descripción:
          <input
            className="form-control"
            id="desc"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="email">
          Código:
          <input
            className="form-control"
            id="cod"
            type="text"
            value={cod}
            onChange={(e) => setCod(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="email">
          Foto:
          <input
            className="form-control"
            id="foto"
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="email">
          Precio:
          <input
            className="form-control"
            id="precio"
            type="text"
            value={prec}
            onChange={(e) => setPrec(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="email">
          Stock:
          <input
            className="form-control"
            id="stock"
            type="text"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Button type="submit">Busca</Button>
        <p></p>
        <Button onClick={update}>Modifica</Button>
      </Form>
      <Link href="/">
        <a>Volver al menú</a>
      </Link>
    </div>
  );
}
