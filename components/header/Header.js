import styles from "./Header.module.scss";
import Link from "next/link";

const Header = ({}) => {
  return (
    <header className={styles.wrapper}>
      <span>
        toto je header jeho css upravujes v{" "}
        <b>/components/header/Header.module.scss</b>.
      </span>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/kategoria"}>
            <a>Kategoria</a>
          </Link>
        </li>
        <li>
          <Link href={"/produkt"}>
            <a>Produkt</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
