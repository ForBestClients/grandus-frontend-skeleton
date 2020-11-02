import styles from "./Footer.module.scss";

const Footer = ({}) => {
  return (
    <footer className={styles.footer}>

        {/* Start Newsletter */}
        <section className={styles.newsletter}>
            <div className="container">
                <h2 className="text-center">Newsletter</h2>
                <p className="text-center">
                    Neváhajte sa prihlásiť do sekcie newsletter. Môžete občas dostať e-mail o našich nových produktoch,
                    správy z pozadia a získať možnosť vedieť o zľavách ako jedny z prvých zákazníkov.
                </p>
                <div className="action-form">
                    <form action="">
                        <input type="text" placeholder="Vaša emailová adresa" />
                        <button type="submit" className="primary">Odoberať</button>
                    </form>
                </div>
            </div>
        </section>
        {/* End Newsletter */}

        {/* Start Benefit Icons */}
        <section className={styles.benefitIcons}>
             <div className="container">
                 <div className={styles.benefitIconsWrapper}>
                     <div className={styles.box}>
                         <img src="img/natrhu.png" alt=""/>
                         <p>Na trhu od <br/> roku 2006</p>
                     </div>
                     <div className={styles.box}>
                         <img src="img/garancia.png" alt=""/>
                         <p>2 roky <br/> záruka</p>
                     </div>
                     <div className={styles.box}>
                         <img src="img/vratenie.png" alt=""/>
                         <p>Garancia 14 dní <br/> vrátenia peňazí</p>
                     </div>
                     <div className={styles.box}>
                         <img src="img/splatky.png" alt=""/>
                         <p>Nákup na <br/> splátky</p>
                     </div>
                     <div className={styles.box}>
                         <img src="img/podpora.png" alt=""/>
                         <p>Stabilná <br/> podpora</p>
                     </div>
                 </div>
             </div>
        </section>
        {/* End Benefit Icons */}

        {/* Start Links */}
        <section className={styles.links}>
            <div className="container">
                <div className={styles.colWrapper}>
                    <div className={styles.col}>
                        <div className={styles.brand}>
                            <a href="/">
                                <img src="img/logo-main.png"
                                     alt=""
                                />
                            </a>
                        </div>
                        <p>
                            Našli sme spôsob ako vám dodávať profesionálne repasované
                            notebooky a počítače za zlomkové ceny!
                            Objednajte do firmy alebo domov ešte dnes!
                        </p>
                        <ul className="special">
                            <li>Záruka 2 roky</li>
                            <li>Servis a poradenstvo</li>
                            <li>Nákup a poradenstvo</li>
                            <li>Rýchle doručenie</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h5>Kategórie</h5>
                        <ul>
                            <li><a href="">Výpredaj</a></li>
                            <li><a href="">Notebooky</a></li>
                            <li><a href="">Počítače</a></li>
                            <li><a href="">Telefóny a tablety</a></li>
                            <li><a href="">Monitory</a></li>
                            <li><a href="">Komponenty</a></li>
                            <li><a href="">Doplnky a elektronika</a></li>
                            <li><a href="">Softvér a služby</a></li>
                            <li><a href="">Výpredaj HP</a></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h5>Kategórie</h5>
                        <ul>
                            <li><a href="">Výpredaj</a></li>
                            <li><a href="">Notebooky</a></li>
                            <li><a href="">Počítače</a></li>
                            <li><a href="">Telefóny a tablety</a></li>
                            <li><a href="">Monitory</a></li>
                            <li><a href="">Komponenty</a></li>
                            <li><a href="">Doplnky a elektronika</a></li>
                            <li><a href="">Softvér a služby</a></li>
                            <li><a href="">Výpredaj HP</a></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <div>
                            <h5>Adresa</h5>
                            <ul>
                                <li>BigON s.r.o.</li>
                                <li>Horná 18</li>
                                <li>97401, Banská Bystrica</li>
                                <li>Slovensko</li>
                            </ul>
                        </div>

                        <div className={styles.socialContact}>
                            <div className={styles.social}>
                                <a href="">
                                    <img src="img/icon-instagram.svg" className="svg" />
                                </a>
                                <a href="">
                                    <img src="img/icon-facebook.svg" className="svg" />
                                </a>
                                <a href="">
                                    <img src="img/icon-stores.svg" className="svg" />
                                </a>
                            </div>
                            <div className={styles.contact}>
                                <a href="">
                                    <img src="img/icon-tel.svg" className="svg" />
                                    (+421) 048/ 399 60 30
                                </a>
                                <a href="">
                                    <img src="img/icon-mail.svg" className="svg" />
                                    predaj@bigon.sk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Links */}

        <section className={styles.logos}>
            <div className="container">
                <div className={styles.logosWrapper}>
                    <img src="img/eset.png" alt=""/>
                    <img src="img/hppartner.png" alt=""/>
                    <img src="img/logo-saec.png" alt=""/>
                    <img src="img/master_secure.png" alt=""/>
                    <img src="img/microsoft-registered.png" alt=""/>
                    <img src="img/visa.png" alt=""/>
                </div>
            </div>
        </section>

        <div className={styles.copyright}>
            <p className="text-center">
                2020 © BigON s.r.o. | prevádzkované eshop systémom Grandus od spoločnosti For Best Clients, s.r.o.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
