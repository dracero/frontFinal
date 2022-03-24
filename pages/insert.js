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

  const handleSubmit = (e) => {
    //e.preventDefault();
    //borro el prevent default para que recargue la página
    const data = {
      nombre,
      desc,
      cod,
      foto,
      prec,
      stock
    };
    console.log(data);
    fetch(
      "https://trabajofinalcoder.herokuapp.com/api/productos?nombre=" +
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
        method: "post",
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
        <Form.Label htmlFor="name">
          Nombre:
          <input
            className="form-control"
            id="nombre"
            type="text"
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
            onChange={(e) => setFoto(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="email">
          Precio:
          <input
            className="form-control"
            id="prec"
            type="text"
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
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Button type="submit">Send</Button>
      </Form>
      <Link href="/">
        <a>Volver al menú</a>
      </Link>
    </div>
  );
}
