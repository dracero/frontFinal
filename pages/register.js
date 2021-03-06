import { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "regenerator-runtime/runtime";
import Link from "next/link";

export default function Home({ Component, pageProps }) {
  const [username, setNombre] = useState("");
  const [password, setPass] = useState("");
  const [passwordConfirm, setPassconf] = useState("");
  const [name, setName] = useState("");
  const [address, setAddr] = useState("");
  const [phoneNumber, SetPhone] = useState("");
  const [admin, setAdmin] = useState("user");
  
 
  const handleSubmit = (e) => {
    //e.preventDefault();
    //borro el prevent default para que recargue la página
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
            "username": username,
            "password": password,
            "passwordConfirm": passwordConfirm,
            "name": name,
            "address": address,
            "phoneNumber": phoneNumber,
            "admin": admin
    });
    console.log(raw)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://trabajofinalcoder.herokuapp.com//api/auth/register", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log('error', error));
  }
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
        <Form.Label htmlFor="email">
          Email:
          <input
            className="form-control"
            id="nombre"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="password">
          Password:
          <input
            className="form-control"
            id="pass"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="repeatpassword">
          Repeat Password:
          <input
            className="form-control"
            id="reppass"
            type="password"
            onChange={(e) => setPassconf(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="name">
          Nombre:
          <input
            className="form-control"
            id="nombre"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="name">
          Dirección:
          <input
            className="form-control"
            id="address"
            type="text"
            onChange={(e) => setAddr(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="name">
          Teléfono:
          <input
            className="form-control"
            id="phone"
            type="text"
            onChange={(e) => SetPhone(e.target.value)}
          />
        </Form.Label>
        <p></p>
        <Form.Label htmlFor="name">
          Admin:
          <input
            className="form-control"
            id="admin"
            type="text"
            value="admin"
            onChange={(e) => setAdmin(e.target.value)}
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