import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <h1>Toto je cista kostra pre 3 stranky</h1>
      <p>
        Kazda stranka ma vlastne scss, ktore v sebe includuje globalne
        variables. Pri pisani scss pises specificke style pre konkretny modul do
        prisluchajuceho suboru.

        V ak chces v <b>reacte</b> pridat classu elementu, tak to je <b>className</b>.
      </p>
    </section>
  );
}
