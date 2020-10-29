import styles from "../styles/Product.module.scss";

const Product = () => {
  return (
    <section className={styles.wrapper}>
      <h1>Detail produktu</h1>
      <p>
        Kazda stranka ma vlastne scss, ktore v sebe includuje globalne
        variables. Pri pisani scss pises specificke style pre konkretny modul do
        prisluchajuceho suboru.

        V ak chces v <b>reacte</b> pridat classu elementu, tak to je <b>className</b>.
      </p>
    </section>
  );
}

export default Product;