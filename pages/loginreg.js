import Link from "next/link";

const Navbarprod = ({ Component, pageProps }) => {
  return (
    <nav>
      <div className="logo">
        <h1>Desafio Proyecto Final</h1>
      </div>
      <p></p>
      <Link href="/formlog">
        <a>Logearse al sistema</a>
      </Link>
      <p></p>
      <Link href="/register">
        <a>Darse de alta por primera vez</a>
      </Link>
    </nav>
  );
};

export default Navbarprod;
