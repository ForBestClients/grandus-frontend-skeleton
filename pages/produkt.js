import styles from "../styles/Product.module.scss";
import React from "react";

const Product = () => {
  return (
   <main className={styles.detailPage}>

       <div className="scrollTop" id="scrollTop">
           <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547" viewBox="0 0 13.939 9.547"><path d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955" transform="translate(0 0)"/></svg>
       </div>

       <div className="custom-container">
           <div className="breadcrumbs">
               <ol>
                   <li>
                       <a href="">Lorem ipsum</a>
                   </li>
                   <li className="sep">
                       |
                   </li>
                   <li>
                       <a href="">Lorem ipsum</a>
                   </li>
                   <li className="sep">
                       |
                   </li>
                   <li className="active">
                       <a href="">Lorem ipsum</a>
                   </li>
               </ol>
           </div>

           <div className={styles.productWrapper}>
               <div className="row">
                   <div className="col-xl-6">
                       <div className={styles.product}>
                           <div className={styles.heading}>
                               <h1>Lenovo ThinkPad L460</h1>
                               <div className={styles.badges}>
                                   <span className={styles.new}>Novinka</span>
                                   <span className={styles.favourite}>Obľúbené</span>
                               </div>
                           </div>

                           <div className={styles.thumb}>
                               <div className={styles.productGalleryFor}>
                                   <img src="img/bigmenu-item.png" alt=""/>
                               </div>
                               <div className={styles.productGalleryNav}>
                                   <img src="img/img-small.png" alt=""/>
                                   <img src="img/img-small.png" alt=""/>
                                   <img src="img/img-small.png" alt=""/>
                                   <a href="" className={styles.more}>
                                       <img src="img/icon-plus.svg" alt=""/>
                                   </a>
                               </div>
                           </div>
                           <div className={styles.productContact}>
                               <div className={styles.box}>
                                   <p>Objednať telefonicky</p>
                                   <a href="tel:" className={styles.withBg}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="16.153" height="16.142"
                                            viewBox="0 0 16.153 16.142">
                                           <path
                                                 d="M283.772,359.138a.781.781,0,0,1-.24.684l-2.274,2.257a1.279,1.279,0,0,1-.4.291,1.66,1.66,0,0,1-.487.154l-.1.008c-.057.006-.131.009-.222.009a7.883,7.883,0,0,1-1.052-.111,7.975,7.975,0,0,1-1.778-.547,14.921,14.921,0,0,1-2.386-1.308,17.794,17.794,0,0,1-2.839-2.394,18.769,18.769,0,0,1-1.984-2.257,16.153,16.153,0,0,1-1.265-1.992,10.738,10.738,0,0,1-.718-1.659,8.778,8.778,0,0,1-.325-1.282,4.213,4.213,0,0,1-.069-.847c.011-.2.018-.319.018-.342a1.647,1.647,0,0,1,.154-.487,1.287,1.287,0,0,1,.291-.4l2.274-2.274a.753.753,0,0,1,.547-.24.635.635,0,0,1,.393.128,1.181,1.181,0,0,1,.291.316l1.83,3.471a.831.831,0,0,1,.085.6,1.063,1.063,0,0,1-.291.547l-.838.838a.292.292,0,0,0-.06.111.418.418,0,0,0-.026.128,3.1,3.1,0,0,0,.308.821,7.524,7.524,0,0,0,.633,1,11.059,11.059,0,0,0,1.214,1.359,11.22,11.22,0,0,0,1.368,1.223,7.9,7.9,0,0,0,1,.641,2.63,2.63,0,0,0,.616.248l.213.043a.4.4,0,0,0,.111-.026.286.286,0,0,0,.111-.06l.975-.992a1.048,1.048,0,0,1,.718-.274.894.894,0,0,1,.462.1h.017l3.3,1.949A.862.862,0,0,1,283.772,359.138Z"
                                                 transform="translate(-267.626 -346.399)"/>
                                       </svg>
                                       ( +421) 048/ 399 60 30
                                   </a>
                               </div>
                               <div className={styles.box}>
                                   <p>Osobný odber na predajni</p>
                                   <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="16.153" height="16.142"
                                            viewBox="0 0 19.38 30"><path
                                           d="M108.616,248.191a9.7,9.7,0,0,0-9.69,9.69c0,4.91,7.83,17.381,8.723,18.787l.967,1.523.967-1.523c.892-1.406,8.723-13.877,8.723-18.787A9.7,9.7,0,0,0,108.616,248.191Zm0,25.689c-2.706-4.45-7.4-12.827-7.4-16a7.4,7.4,0,1,1,14.8,0C116.015,261.051,111.322,269.429,108.616,273.88Z"
                                           transform="translate(-98.926 -248.191)"/>
                                           <circle cx="3.235"
                                                   cy="3.235" r="3.235"
                                                   transform="translate(6.685 5.741)"/></svg>
                                       Banská Bystrica
                                   </span>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-5 offset-xl-1">
                       <div className={styles.productInfo}>
                           <div className={styles.brand}>
                               Lenovo
                           </div>
                           <div className={styles.stockInfo}>
                               <p>SKLADOM VIAC AKO 2 KS</p>
                           </div>
                           <div className={styles.productTitle}>
                               <h4>Lenovo ThinkPad L460</h4>
                               <p>EAN: GCG19127 / Kód: 20FV-35865-08-B / ID: 663514</p>
                           </div>
                           <div className={styles.productDesc}>
                               <div>
                                   <p>Intel Core i3-6100U</p>
                                   <p>4 GB RAM, 128 GB SSD</p>
                                   <p>Intel HD Graphics 520</p>
                                   <p>14” (1366 x 768)</p>
                                   <p>Windows 10 Pro</p>
                               </div>
                               <div>
                                   <p>
                                       <span>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="12.884" height="10.962"
                                                viewBox="0 0 12.884 10.962"><path
                                               d="M12.873.725a.857.857,0,0,0-1.54-.372L5.1,8.906,1.363,6.183a.856.856,0,0,0-1.2.188.857.857,0,0,0,.188,1.2L4.78,10.8a.858.858,0,0,0,1.2-.188l6.74-9.247a.85.85,0,0,0,.154-.638"
                                               transform="translate(0 0)"/></svg>
                                       </span>
                                       <strong>Záruka:</strong> počet mesiacov 24
                                   </p>
                                   <p>
                                       <span>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="12.884" height="10.962"
                                                viewBox="0 0 12.884 10.962"><path
                                               d="M12.873.725a.857.857,0,0,0-1.54-.372L5.1,8.906,1.363,6.183a.856.856,0,0,0-1.2.188.857.857,0,0,0,.188,1.2L4.78,10.8a.858.858,0,0,0,1.2-.188l6.74-9.247a.85.85,0,0,0,.154-.638"
                                               transform="translate(0 0)"/></svg>
                                       </span>
                                       <strong>Stav:</strong> A-kategória (Obnovený)
                                   </p>
                               </div>
                           </div>

                           <div className={styles.priceBox}>
                               <img src="img/detail-logo.png" alt=""/>
                               <div className={styles.save}>
                                   <span>Šetrenie:</span>
                                   <span>
                                       63%
                                   </span>
                               </div>
                               <div className={styles.prices}>
                                   <div className={styles.mainPrice}>
                                       <span>Pôvodná cena:</span>
                                       <span>1 599.00 €</span>
                                   </div>
                                   <div className={styles.discountPrice}>
                                       <span>Teraz iba:</span>
                                       <span>999.00 €</span>
                                       <span>700.30 bez DPH</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

   </main>
  );
}

export default Product;