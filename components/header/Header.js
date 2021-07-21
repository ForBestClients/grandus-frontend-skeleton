import styles from "./Header.module.scss";
import Link from "next/link";

const Header = ({}) => {
  return (
	  <header className={styles.header}>
		  <div className="container-lg">
			  <div className="row justify-content-between align-items-center">
				  <div className="col-auto">
					  <a href="#" className={styles.logo + "d-block"}>
						  <img src="logo.png" alt="logo" className="d-block" />
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
