import styles from "./Header.module.scss";
import Link from "next/link";

import Image from "next/image";
import logo from "../../public/logo.png";

const Header = ({}) => {
  return (
	  <header className={styles.header}>
		  <div className="container-lg">
			  <div className="row justify-content-between align-items-center">
				  <div className="col-auto">
					  <a href="#" className={styles.logo + " d-block"}>
						  <Image src={logo} alt={'Logo'} />
					  </a>
				  </div>
				  <div className="col-auto">
					  <ul>
						  <li><a href="#">Menu</a></li>
						  <li><a href="#">Menu</a></li>
						  <li><a href="#">Menu</a></li>
						  <li><a href="#">Menu</a></li>
						  <li><a href="#">Menu</a></li>
					  </ul>
					  <button className={styles.responsiveButton + " hidden-md-up"}>
						  <span></span>
						  <span></span>
						  <span></span>
						  <span></span>
					  </button>
				  </div>
			  </div>
		  </div>
	  </header>
  );
};

export default Header;
