import styles from "../styles/Home.module.scss";

import Image from "next/image";
import srcLogo from "../public/logo-grandus.png";

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <h1>Toto je cista kostra pre 3 stranky</h1>
      <div>
        <Image src={srcLogo} alt={'Grandus logo'} />
      </div>
      <p>
        Kazda stranka ma vlastne scss, ktore v sebe includuje globalne
        variables. Pri pisani scss pises specificke style pre konkretny modul do
        prisluchajuceho suboru. V ak chces v <b>reacte</b> pridat classu
        elementu, tak to je <b>className</b>.
      </p>
    </section>
  );
}
