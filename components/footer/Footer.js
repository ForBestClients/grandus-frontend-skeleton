import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className={styles.footer}>

        {/* Start Newsletter */}
        <section className={styles.newsletter}>
            <div className={[styles.newsletterWrapper, 'custom-container'].join(' ')}>
                <h2 className="text-center">Newsletter</h2>
                <p className="text-center">
                    Neváhajte sa prihlásiť do sekcie newsletter. Môžete občas dostať e-mail o našich nových produktoch,
                    správy z pozadia a získať možnosť vedieť o zľavách ako jedny z prvých zákazníkov.
                </p>
                <div className={[styles.actionForm, 'action-form'].join(' ')}>
                    <form action="">
                        <input type="text" placeholder="Vaša emailová adresa" />
                        <button type="submit" className={[styles.btn, 'primary'].join(' ')}>Odoberať</button>
                    </form>
                </div>
            </div>
        </section>
        {/* End Newsletter */}

        {/* Start Benefit Icons */}
        <section className={styles.benefitIcons}>
             <div className="custom-container">
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
            <div className="custom-container">
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
                            <li>
                                <Link href={"/produkt"}>
                                    <a>Produkt</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/kategoria"}>
                                    <a>Kategoria</a>
                                </Link>
                            </li>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26.571" height="26.574"
                                         viewBox="0 0 26.571 26.574">
                                        <path
                                              d="M75.072,373.331a4.446,4.446,0,1,1,0,.013v-.013m-2.394,0a6.824,6.824,0,1,0,6.834-6.815h-.019a6.821,6.821,0,0,0-6.814,6.815M85,366.246a1.59,1.59,0,1,0,1.59-1.59h0a1.59,1.59,0,0,0-1.59,1.59m-10.866,17.9a7.307,7.307,0,0,1-2.468-.458,4.155,4.155,0,0,1-1.53-.992,4.088,4.088,0,0,1-.992-1.53,7.309,7.309,0,0,1-.464-2.455c-.064-1.4-.076-1.819-.076-5.368s0-3.969.076-5.371a7.424,7.424,0,0,1,.458-2.468,4.4,4.4,0,0,1,2.522-2.522,7.4,7.4,0,0,1,2.474-.461c1.4-.064,1.822-.076,5.368-.076s3.968,0,5.371.076a7.386,7.386,0,0,1,2.464.458,4.414,4.414,0,0,1,2.525,2.522,7.343,7.343,0,0,1,.442,2.471c.067,1.4.08,1.822.08,5.371s0,3.968-.08,5.368a7.314,7.314,0,0,1-.455,2.468,4.391,4.391,0,0,1-2.525,2.522,7.314,7.314,0,0,1-2.452.445c-1.4.064-1.822.076-5.371.076s-3.968,0-5.368-.076m-.111-24.008a9.669,9.669,0,0,0-3.224.617,6.8,6.8,0,0,0-3.886,3.886,9.753,9.753,0,0,0-.617,3.224c-.067,1.418-.079,1.87-.079,5.479s0,4.061.079,5.476a9.769,9.769,0,0,0,.617,3.228A6.8,6.8,0,0,0,70.8,385.93a9.753,9.753,0,0,0,3.224.617c1.418.064,1.87.08,5.479.08s4.061,0,5.479-.08a9.768,9.768,0,0,0,3.224-.617,6.8,6.8,0,0,0,3.886-3.886,9.77,9.77,0,0,0,.617-3.228c.064-1.415.079-1.867.079-5.476s0-4.061-.079-5.479a9.737,9.737,0,0,0-.617-3.224,6.521,6.521,0,0,0-1.533-2.353,6.439,6.439,0,0,0-2.353-1.533,9.685,9.685,0,0,0-3.224-.617c-1.418-.067-1.87-.083-5.479-.083s-4.061.016-5.479.083"
                                              transform="translate(-66.216 -360.052)"/>
                                    </svg>
                                </a>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.386" height="26.304"
                                         viewBox="0 0 12.386 26.304">
                                        <path
                                              d="M96.453,469.94H92.234c-2.492,0-5.268,1.049-5.268,4.665v3.824H84.094v4.593h2.975v13.221h5.47V482.935h3.616l.325-4.521H92.442V475.82c0-1.429,1.489-1.347,1.576-1.347h2.438v-4.521Z"
                                              transform="translate(-84.094 -469.94)"/>
                                    </svg>
                                </a>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.38" height="30"
                                         viewBox="0 0 19.38 30">
                                        <path
                                              d="M108.616,248.191a9.7,9.7,0,0,0-9.69,9.69c0,4.91,7.83,17.381,8.723,18.787l.967,1.523.967-1.523c.892-1.406,8.723-13.877,8.723-18.787A9.7,9.7,0,0,0,108.616,248.191Zm0,25.689c-2.706-4.45-7.4-12.827-7.4-16a7.4,7.4,0,1,1,14.8,0C116.015,261.051,111.322,269.429,108.616,273.88Z"
                                              transform="translate(-98.926 -248.191)"/>
                                        <circle  cx="3.235" cy="3.235" r="3.235"
                                                transform="translate(6.685 5.741)"/>
                                    </svg>
                                </a>
                            </div>
                            <div className={styles.contact}>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.153" height="16.142"
                                         viewBox="0 0 16.153 16.142">
                                        <path className="iconColor"
                                              d="M283.772,359.138a.781.781,0,0,1-.24.684l-2.274,2.257a1.279,1.279,0,0,1-.4.291,1.66,1.66,0,0,1-.487.154l-.1.008c-.057.006-.131.009-.222.009a7.883,7.883,0,0,1-1.052-.111,7.975,7.975,0,0,1-1.778-.547,14.921,14.921,0,0,1-2.386-1.308,17.794,17.794,0,0,1-2.839-2.394,18.769,18.769,0,0,1-1.984-2.257,16.153,16.153,0,0,1-1.265-1.992,10.738,10.738,0,0,1-.718-1.659,8.778,8.778,0,0,1-.325-1.282,4.213,4.213,0,0,1-.069-.847c.011-.2.018-.319.018-.342a1.647,1.647,0,0,1,.154-.487,1.287,1.287,0,0,1,.291-.4l2.274-2.274a.753.753,0,0,1,.547-.24.635.635,0,0,1,.393.128,1.181,1.181,0,0,1,.291.316l1.83,3.471a.831.831,0,0,1,.085.6,1.063,1.063,0,0,1-.291.547l-.838.838a.292.292,0,0,0-.06.111.418.418,0,0,0-.026.128,3.1,3.1,0,0,0,.308.821,7.524,7.524,0,0,0,.633,1,11.059,11.059,0,0,0,1.214,1.359,11.22,11.22,0,0,0,1.368,1.223,7.9,7.9,0,0,0,1,.641,2.63,2.63,0,0,0,.616.248l.213.043a.4.4,0,0,0,.111-.026.286.286,0,0,0,.111-.06l.975-.992a1.048,1.048,0,0,1,.718-.274.894.894,0,0,1,.462.1h.017l3.3,1.949A.862.862,0,0,1,283.772,359.138Z"
                                              transform="translate(-267.626 -346.399)"/>
                                    </svg>
                                    (+421) 048/ 399 60 30
                                </a>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.574" height="12.07"
                                         viewBox="0 0 16.574 12.07">
                                        <path className="iconColor"
                                              d="M117.871,29.91V41.98h16.574V29.91Zm8.287,5.252-1.472-1.039h0l-4.157-2.933h11.258Zm-2.38-.113-4.627,4.723V31.785Zm1.06.748,1.32.931,1.32-.932,4.8,4.9H120.035Zm3.7-.748,4.627-3.264v7.986Z"
                                              transform="translate(-117.871 -29.91)"/>
                                    </svg>
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
            <div className="custom-container">
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
