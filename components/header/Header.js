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
                <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547" viewBox="0 0 13.939 9.547">
                    <path d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                          transform="translate(0 0)"/>
                </svg>
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

                 <div className={styles.iconActions}>
                     <a href="">
                         <svg xmlns="http://www.w3.org/2000/svg" width="19.38" height="30" viewBox="0 0 19.38 30">
                             <path className="iconColor"
                                   d="M108.616,248.191a9.7,9.7,0,0,0-9.69,9.69c0,4.91,7.83,17.381,8.723,18.787l.967,1.523.967-1.523c.892-1.406,8.723-13.877,8.723-18.787A9.7,9.7,0,0,0,108.616,248.191Zm0,25.689c-2.706-4.45-7.4-12.827-7.4-16a7.4,7.4,0,1,1,14.8,0C116.015,261.051,111.322,269.429,108.616,273.88Z"
                                   transform="translate(-98.926 -248.191)"/>
                             <circle className="iconColor" cx="3.235" cy="3.235" r="3.235" transform="translate(6.685 5.741)"/>
                         </svg>
                     </a>
                     <a href="">
                         <svg xmlns="http://www.w3.org/2000/svg" width="35.866" height="25.747"
                              viewBox="0 0 35.866 25.747">
                             <path className="iconColor"
                                   d="M248.228,330.781H241a3.383,3.383,0,0,0-6.462,0h-7.229s-7.473,11.767-7.473,15.894a7.473,7.473,0,1,0,14.946,0c0-3.067-4.125-10.349-6.245-13.89h6a3.383,3.383,0,0,0,6.462,0h6c-2.12,3.541-6.245,10.823-6.245,13.89a7.473,7.473,0,1,0,14.946,0C255.7,342.548,248.228,330.781,248.228,330.781Zm-20.92,3.847c2.294,3.9,4.7,8.558,5.317,11.045H221.991C222.6,343.187,225.015,338.527,227.308,334.628Zm0,17.516a5.474,5.474,0,0,1-5.372-4.467h10.745A5.475,5.475,0,0,1,227.308,352.144Zm10.46-18.982a1.378,1.378,0,1,1,1.379-1.378A1.38,1.38,0,0,1,237.768,333.162ZM253.7,346.675c0,.022,0,.042,0,.064v-.105C253.694,346.646,253.7,346.663,253.7,346.675Zm-.151-1H242.911c.612-2.486,3.024-7.146,5.317-11.045C250.521,338.527,252.932,343.187,253.545,345.673Zm-5.317,6.471a5.475,5.475,0,0,1-5.373-4.467H253.6A5.475,5.475,0,0,1,248.228,352.144Z"
                                   transform="translate(-219.835 -328.401)"/>
                         </svg>
                     </a>
                     <a href="">
                         <svg xmlns="http://www.w3.org/2000/svg" width="26.347" height="22.344"
                              viewBox="0 0 26.347 22.344">
                             <path className="iconColor"
                                   d="M373.027,203.507l-10.814-9.923a7.027,7.027,0,0,1,0-10.508,7.6,7.6,0,0,1,10.084,0l.73.669.729-.669a7.6,7.6,0,0,1,10.084,0h0a7.029,7.029,0,0,1,0,10.507Zm-5.772-19.862a4.957,4.957,0,0,0-3.354,1.272,4.531,4.531,0,0,0,0,6.827l9.125,8.372,9.124-8.373a4.532,4.532,0,0,0,0-6.827h0a5.056,5.056,0,0,0-6.706,0l-2.418,2.218-2.419-2.218A4.954,4.954,0,0,0,367.255,183.645Z"
                                   transform="translate(-359.852 -181.163)"/>
                         </svg>
                     </a>
                     <a href="">
                         <svg xmlns="http://www.w3.org/2000/svg" width="19.961" height="26.131"
                              viewBox="0 0 19.961 26.131">
                             <path className="iconColor"
                                   d="M89.99,189.8a6.43,6.43,0,1,0-8.761,0,8.325,8.325,0,0,0-5.6,7.852V204.8h2.327v-7.154a6,6,0,0,1,5.99-5.99h3.327a6,6,0,0,1,5.99,5.99V204.8H95.59v-7.154A8.324,8.324,0,0,0,89.99,189.8ZM85.61,181a4.1,4.1,0,1,1-4.1,4.1A4.109,4.109,0,0,1,85.61,181Z"
                                   transform="translate(-75.629 -178.671)"/>
                         </svg>
                     </a>
                     <a href="" className={styles.iconCart}>
                         <span className={styles.cartCount}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="28.982" height="26.301"
                                    viewBox="0 0 28.982 26.301">
                                   <g
                                   transform="translate(0 0)"><path className="iconColor"
                                                                    d="M303.809,197.223H286.443l-2.092-14.265-5.514-4.088,1.43-1.928,6.315,4.682,1.936,13.2h13.452l2.721-10.132H290.437v-2.4h17.382Z"
                                                                    transform="translate(-278.836 -176.941)"/><circle
                                   className="iconColor" cx="2.531" cy="2.531" r="2.531" transform="translate(8.432 21.239)"/><circle
                                   className="iconColor" cx="2.531" cy="2.531" r="2.531" transform="translate(19.467 21.239)"/></g></svg>
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
