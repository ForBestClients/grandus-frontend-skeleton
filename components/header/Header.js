import styles from "./Header.module.scss";

const Header = ({}) => {
  return (
    <header className={styles.header}>

      {/* Start Info Bar */}
      <div className={styles.infoBar}>
        <p className="text-center">
            LCD Monitory už od 38€!
            <a href="#">
                Nakupuj tu
                <img src="img/arrow-right.svg" className="svg" />
            </a>
        </p>
      </div>
      {/* End Info Bar */}

      {/* Start Main Bar */}
      <div className={styles.mainBarWrap}>
         <div className={[styles.barContainer, 'container'].join(' ')}>

             <div className={styles.mainBar}>

                 <div className={styles.hamburgerWrap} id="hamburger">
                     <div className={styles.hamburger}>
                         <span></span>
                     </div>
                 </div>

                 <div className={styles.brand}>
                     <a href="">
                         <img src="img/logo-main.png" alt=""/>
                     </a>
                 </div>

                 <div className={[styles.actionForm, 'action-form', 'on-header'].join(' ')}>
                     <form action="">
                         <input type="text" name="s" placeholder="Hľadaný výraz" />
                         <button type="submit" className="primary">Hľadať</button>
                     </form>
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

                 <div className={styles.iconActions}>
                     <a href="">
                         <img src="img/icon-stores.svg" className="svg"/>
                     </a>
                     <a href="">
                         <img src="img/icon-compare.svg" className="svg"/>
                     </a>
                     <a href="">
                         <img src="img/icon-favourite.svg" className="svg"/>
                     </a>
                     <a href="">
                         <img src="img/icon-my-account.svg" className="svg"/>
                     </a>
                     <a href="" className={styles.iconCart}>
                         <span className={styles.cartCount}>
                               <img src="img/icon-cart.svg" className="svg"/>
                                <span className={styles.cartCount}>12</span>
                         </span>
                     </a>
                 </div>
             </div>
          </div>

          <div className={[styles.mobileSearchForm, 'container'].join(' ')}>
              <div className={[styles.mobileSearch, 'action-form', 'on-header'].join(' ')}>
                  <form action="">
                      <input type="text" name="s" placeholder="Hľadaný výraz" />
                      {/*<button type="submit" className="primary">Hľadať</button>*/}
                  </form>
              </div>

          </div>
      </div>
      {/* Start Main Header Bar */}

    </header>
  );
};

export default Header;
