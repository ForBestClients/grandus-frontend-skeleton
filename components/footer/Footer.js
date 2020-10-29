import styles from "./Footer.module.scss";

const Footer = ({}) => {
  return (
    <footer className={styles.wrapper}>
      <span>
        toto je footer jeho css upravujes v{" "}
        <b>/components/footer/Footer.module.scss</b>.
      </span>
      <span className={styles.test}>vnorena class nastylovana inou farbou</span>
    </footer>
  );
};

export default Footer;
