import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <section className={styles.promo}>
        <div className="container">
            <div className={styles.grid}>
                <aside className={styles.categoryWidget}>
                    <ul>
                        <li>
                            <a href="">
                                <img src="img/icon-notebooky.svg" className="svg" />
                                Notebooky
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="img/icon-pc.svg" className="svg" />
                                Počítače
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="img/icon-mobile.svg" className="svg" />
                                Telefón a tablety
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="img/icon-monitor.svg" className="svg" />
                                Monitory
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="img/icon-components.svg" className="svg" />
                                Komponenty
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="img/icon-electronics.svg" className="svg" />
                                Doplnky a elektronika
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="img/icon-software.svg" className="svg" />
                                Softvér a služby
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li className={styles.discount}>
                            <a href="">
                                <img src="img/icon-discount.svg" className="svg" />
                                Výpredaj
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="img/icon-all-products.svg" className="svg" />
                                Všetky produkty
                                <img src="img/arrow-right.svg" className="svg"/>
                            </a>
                        </li>
                    </ul>
                </aside>
                <div className={styles.promoSlider}>

                </div>
                <div className={styles.adBanner}>

                </div>
            </div>
        </div>
    </section>
  );
}
