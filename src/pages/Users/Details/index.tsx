import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Avatar } from "../../../components/Avatar";
import { IconGoBack } from "../../../components/IconGoBack";
import { getOneUser } from "../../../data/business/Users";
import { IUsersProps } from "../../../data/@types/Users";
import styles from "./Details.module.css";

export function Details() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState<IUsersProps | null>(null);
  async function getPost() {
    const temp: IUsersProps = await getOneUser(Number(id));
    setUserDetails(temp);
  }
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className={`${styles.container}`}>
      <IconGoBack />

      {userDetails !== null ? (
        <article className={`${styles.wrapperDetails} ${styles.genericBox}`}>
          <aside>
            <Avatar size={80} />
            <strong>{userDetails.userName}</strong>
          </aside>
          <main>
            <details>
              <summary>Dados Pessoais</summary>
              <p>Nome: {userDetails.name}</p>
              <p>Email: {userDetails.email}</p>
              <p>Telefone: {userDetails.phone}</p>
              <p>Website: {userDetails.website}</p>
            </details>
            <details>
              <summary>Endereço</summary>
              <p>Rua: {userDetails.address?.street}</p>
              <p>Complemento: {userDetails.address?.suite}</p>
              <p>Cidade: {userDetails.address?.city}</p>
              <p>CEP: {userDetails.address?.zipcode}</p>
              <h4>Localização</h4>
              <p>Latitude: {userDetails.address?.geo.lat}</p>
              <p>Longetude: {userDetails.address?.geo.lng}</p>
            </details>
            <details>
              <summary>Empresa</summary>
              <p>Nome: {userDetails.company?.name}</p>
              <p>Slogan: {userDetails.company?.catchPhrase}</p>
              <p>bs: {userDetails.company?.bs}</p>
            </details>
          </main>
        </article>
      ) : (
        <section className={styles.wrapperText}>
          <h1 className={styles.title}>Ops...</h1>
          <h2 className={styles.body}>
            Não foi possivel Carregar o Usuario solicitado.
            <br />
            Retorne para{" "}
            <Link to={"/"} style={{ textDecoration: "underline" }}>
              Home
            </Link>
          </h2>
        </section>
      )}
    </div>
  );
}
