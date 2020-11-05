import styles from "../styles/Product.module.scss";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Product = () => {

    const SliderArrowsGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;

        return (
            <div className="carouselArrows">
                <button className="arrowPrev" onClick={ () => previous() }>
                    <img src="img/arrow-left.svg" />
                </button>
                <button className="arrowNext" onClick={ () => next() }>
                    <img src="img/arrow-right.svg" />
                </button>
            </div>
        );
    };

    const productSliderResponsive = {

        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
            slidesToSlide: 1,
        },
        largeDesktop: {
            breakpoint: { max: 3000, min: 1600 },
            items: 5,
            slidesToSlide: 1,
        },
        desktop1: {
            breakpoint: { max: 1600, min: 1400 },
            items: 4,
            slidesToSlide: 1,
        },
        desktop2: {
            breakpoint: { max: 1400, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 576 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 185
        }
    };

  return (
   <main className={styles.detailPage}>

       <div className="scrollTop" id="scrollTop">
           <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547" viewBox="0 0 13.939 9.547"><path d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955" transform="translate(0 0)"/></svg>
       </div>

       <div className="custom-container" id="container">
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
                               <img src="img/brand-lenovo.png" alt=""/>
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

                           <div className={styles.addCartBox}>
                               <div className={styles.quantity}>
                                   <a href="" className="minus spin-button">
                                       <img src="img/icon-plus.svg" alt=""/>
                                   </a>
                                   <input type="number"
                                          className="js-quantity"
                                          value="1"
                                          min="0"
                                          max="99"
                                          readOnly=""
                                   />
                                   <a href="" className="plus spin-button">
                                       -
                                   </a>
                               </div>

                               <div className={styles.addCart}>
                                   <a href="" className="button primary">
                                       Vložiť do košíka
                                       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20"
                                            viewBox="0 0 28.982 26.301">
                                           <g transform="translate(0 0)">
                                               <path
                                                     d="M303.809,197.223H286.443l-2.092-14.265-5.514-4.088,1.43-1.928,6.315,4.682,1.936,13.2h13.452l2.721-10.132H290.437v-2.4h17.382Z"
                                                     transform="translate(-278.836 -176.941)"/>
                                               <circle cx="2.531" cy="2.531" r="2.531"
                                                       transform="translate(8.432 21.239)"/>
                                               <circle cx="2.531" cy="2.531" r="2.531"
                                                       transform="translate(19.467 21.239)"/>
                                           </g>
                                       </svg>
                                   </a>
                               </div>
                           </div>

                           <div className={styles.deliveryInfo}>
                               <p>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="23.772" height="15.458"
                                        viewBox="0 0 23.772 15.458">
                                       <path d="M743.347,23.864h-12.68V24.95h11.594v8.273H730.667v1.086h12.68Z"
                                             transform="translate(-727.102 -23.864)"/>
                                       <path d="M788.824,30.985l-2.089-3.663h-3.922v9.626H789.7V31.486ZM786.1,28.408l1.309,2.3H783.9v-2.3Zm2.511,7.454H783.9V31.789h4.143l.243.139.33.188Z"
                                             transform="translate(-765.929 -26.439)"/>
                                       <path d="M735.116,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,735.116,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,735.116,70.987Z"
                                             transform="translate(-728.842 -56.615)"/>
                                       <path d="M781.9,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,781.9,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,781.9,70.987Z"
                                             transform="translate(-763.675 -56.615)"/>
                                       <rect width="7.982" height="1.086" transform="translate(1.831 2.261)"/>
                                       <rect width="7.982" height="1.086" transform="translate(0 4.453)"/>
                                       <rect width="7.982" height="1.086" transform="translate(1.653 6.646)"/>
                                   </svg>
                                   Môžete mať už zajtra. Doba dodania je približne 24 hod.
                               </p>
                           </div>

                           <div className={styles.actions}>
                               <div className={styles.box}>
                                   <p>
                                       <a href="">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26.347" height="22.344"
                                                viewBox="0 0 26.347 22.344">
                                               <path d="M373.027,203.507l-10.814-9.923a7.027,7.027,0,0,1,0-10.508,7.6,7.6,0,0,1,10.084,0l.73.669.729-.669a7.6,7.6,0,0,1,10.084,0h0a7.029,7.029,0,0,1,0,10.507Zm-5.772-19.862a4.957,4.957,0,0,0-3.354,1.272,4.531,4.531,0,0,0,0,6.827l9.125,8.372,9.124-8.373a4.532,4.532,0,0,0,0-6.827h0a5.056,5.056,0,0,0-6.706,0l-2.418,2.218-2.419-2.218A4.954,4.954,0,0,0,367.255,183.645Z"
                                                     transform="translate(-359.852 -181.163)"/>
                                           </svg>
                                           Pridať medzi obľúbené
                                       </a>
                                   </p>
                                   <p>
                                       <a href="">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26.347" height="22.344"
                                                viewBox="0 0 35.866 25.747">
                                               <path d="M248.228,330.781H241a3.383,3.383,0,0,0-6.462,0h-7.229s-7.473,11.767-7.473,15.894a7.473,7.473,0,1,0,14.946,0c0-3.067-4.125-10.349-6.245-13.89h6a3.383,3.383,0,0,0,6.462,0h6c-2.12,3.541-6.245,10.823-6.245,13.89a7.473,7.473,0,1,0,14.946,0C255.7,342.548,248.228,330.781,248.228,330.781Zm-20.92,3.847c2.294,3.9,4.7,8.558,5.317,11.045H221.991C222.6,343.187,225.015,338.527,227.308,334.628Zm0,17.516a5.474,5.474,0,0,1-5.372-4.467h10.745A5.475,5.475,0,0,1,227.308,352.144Zm10.46-18.982a1.378,1.378,0,1,1,1.379-1.378A1.38,1.38,0,0,1,237.768,333.162ZM253.7,346.675c0,.022,0,.042,0,.064v-.105C253.694,346.646,253.7,346.663,253.7,346.675Zm-.151-1H242.911c.612-2.486,3.024-7.146,5.317-11.045C250.521,338.527,252.932,343.187,253.545,345.673Zm-5.317,6.471a5.475,5.475,0,0,1-5.373-4.467H253.6A5.475,5.475,0,0,1,248.228,352.144Z"
                                                     transform="translate(-219.835 -328.401)"/>
                                           </svg>
                                           Porovnať
                                       </a>
                                   </p>
                               </div>
                               <div className={styles.box}>
                                   <p>Nákup na splátky</p>
                                   <a href="">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24.309" height="21.733"
                                            viewBox="0 0 24.309 21.733">
                                           <g transform="translate(-495.637 -260.732)">
                                               <path d="M506.505,264.976h-1.023a9.845,9.845,0,1,0,6.961,16.806l.724-.723-6.662-6.661Zm3.722,16.037a7.8,7.8,0,1,1-5.768-13.924v8.156Z"
                                                     transform="translate(0 -2.202)"/>
                                               <path d="M522.966,260.732h-1.023v11.65h11.65v-1.023A10.639,10.639,0,0,0,522.966,260.732Zm1.023,9.6v-7.5a8.6,8.6,0,0,1,7.5,7.5Z"
                                                     transform="translate(-13.647)"/>
                                           </g>
                                       </svg>
                                       Quatro kalkulačka splátok
                                   </a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       {/* Start Favourite Products Slider */}
       <section className={[styles.productSliderWrapper, 'favouriteProducts', 'productSlider'].join(' ')}>
           <div className="custom-container">
               <div className="sliderTitle hasCategories">
                   <h2>Nezabudli ste na niečo?</h2>
                   <div className="categories">
                       <a href="" className="button secondary active">
                           <svg xmlns="http://www.w3.org/2000/svg" width="6" height="19" viewBox="0 0 13.308 37.695"><path d="M239.739,363.865a6.164,6.164,0,0,0-1.516-3.716l-.183-.19c-.934-.967-2.1-2.17-2.058-3.354a3.03,3.03,0,0,1,1.181-2.018c1.884-1.717,3.6-3.721,3.4-6.737l-2.289.151c.111,1.7-.61,3.023-2.661,4.891a5.183,5.183,0,0,0-1.928,3.641c-.069,2.153,1.531,3.811,2.7,5.021l.179.185a3.732,3.732,0,0,1,.869,2.136,6.282,6.282,0,0,0-5.476,6.219v9.175a6.284,6.284,0,0,0,6.278,6.277h.753a6.284,6.284,0,0,0,6.277-6.277v-9.175A6.283,6.283,0,0,0,239.739,363.865Zm3.236,15.4a3.988,3.988,0,0,1-3.983,3.984h-.753a3.989,3.989,0,0,1-3.984-3.984v-9.175a3.988,3.988,0,0,1,3.217-3.906l0,5.4h2.294v-5.4a3.988,3.988,0,0,1,3.213,3.9Z" transform="translate(-231.961 -347.849)"/></svg>
                           Doplnky a elektronika
                       </a>
                       <a href="" className="button secondary">
                           <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 33.114 28.344"><path d="M608.322,432.09v28.344h33.114V432.09Zm30.775,2.339v3.122H610.661v-3.122Zm-28.435,23.665v-18.2H639.1v18.2Z" transform="translate(-608.322 -432.09)"/><rect width="23.516" height="2.339" transform="translate(4.799 10.091)"/><rect width="1.297" height="1.807" transform="translate(4.836 2.889)"/><rect width="1.297" height="1.807" transform="translate(7.088 2.889)"/><rect width="1.297" height="1.807" transform="translate(9.267 2.889)"/><rect width="23.516" height="2.339" transform="translate(4.799 13.78)"/><rect width="23.516" height="2.339" transform="translate(4.799 17.47)"/><rect width="13.538" height="2.339" transform="translate(14.777 21.16)"/></svg>
                           Softvér a služby
                       </a>
                       <a href="" className="button secondary">
                           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 32.607 25.475"><path d="M29.242,0H3.366A3.37,3.37,0,0,0,0,3.366V18.348a3.369,3.369,0,0,0,3.366,3.365H15.3v1.757H10.963v2H21.644v-2H17.306V21.714H29.242a3.369,3.369,0,0,0,3.365-3.365V3.366A3.369,3.369,0,0,0,29.242,0ZM3.366,2H29.242A1.362,1.362,0,0,1,30.6,3.366v12.35H2V3.366A1.362,1.362,0,0,1,3.366,2Zm25.876,17.7H3.366A1.362,1.362,0,0,1,2,18.348V17.72H30.6v.628A1.362,1.362,0,0,1,29.242,19.709Z"/></svg>
                           Monitory
                       </a>
                       <a href="" className="button secondary">
                           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 34.667 21.251"><path d="M325.647,468.491l.295-.254v-3.693H291.275l0,3.691.287.253a2.549,2.549,0,0,1,.854,1.674,3.007,3.007,0,0,1-.873,1.865l-.272.252v9.531h0V485.8h3.091l1.6-1.045L297.7,485.8h3.874l1.4-1,1.352,1h2.647l1.626-3.036,1.626,3.036h2.648l1.352-1,1.4,1h3.874l1.736-1.045,1.6,1.045h3.091V472.279l-.273-.252a3,3,0,0,1-.873-1.865A2.546,2.546,0,0,1,325.647,468.491ZM305.966,484.1h-1.073L303,482.7l-1.964,1.4h-2.861l-2.244-1.349-2.071,1.349h-.89V481.81h14.22Zm18.279,0h-.89l-2.071-1.349L319.04,484.1h-2.861l-1.964-1.4-1.892,1.4H311.25l-1.225-2.289h14.219Zm-14.219-3.986H292.972v-7.13a4.573,4.573,0,0,0,1.145-2.788,4.005,4.005,0,0,0-1.145-2.7v-1.254h31.273v1.254a4,4,0,0,0-1.145,2.7,4.572,4.572,0,0,0,1.145,2.788v7.13Z" transform="translate(-291.274 -464.544)"/><path d="M298.5,480.665h5.325V470.351H298.5Zm1.7-8.617h1.931v6.921h-1.931Z" transform="translate(-294.173 -466.875)"/><path d="M309.97,480.665h5.325V470.351H309.97Zm1.7-8.617H313.6v6.921h-1.931Z" transform="translate(-298.778 -466.875)"/><path d="M321.484,480.665h5.325V470.351h-5.325Zm1.7-8.617h1.931v6.921h-1.931Z" transform="translate(-303.399 -466.875)"/><path d="M333,480.665h5.325V470.351H333Zm1.7-8.617h1.931v6.921H334.7Z" transform="translate(-308.021 -466.875)"/></svg>
                           Komponenty
                       </a>
                   </div>
               </div>
           </div>
           <Carousel
               responsive={productSliderResponsive}
               swipeable={true}
               draggable={false}
               infinite={false}
               ssr={true}
               arrows={false}
               showDots={true}
               partialVisible={true}
               customButtonGroup={<SliderArrowsGroup />}
               containerClass='productCarousel'
           >
               <div className={styles.box}>
                   <a href="">
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="23.772" height="15.458"
                                    viewBox="0 0 23.772 15.458">
                                   <path d="M743.347,23.864h-12.68V24.95h11.594v8.273H730.667v1.086h12.68Z"
                                         transform="translate(-727.102 -23.864)"/>
                                   <path d="M788.824,30.985l-2.089-3.663h-3.922v9.626H789.7V31.486ZM786.1,28.408l1.309,2.3H783.9v-2.3Zm2.511,7.454H783.9V31.789h4.143l.243.139.33.188Z"
                                         transform="translate(-765.929 -26.439)"/>
                                   <path d="M735.116,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,735.116,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,735.116,70.987Z"
                                         transform="translate(-728.842 -56.615)"/>
                                   <path d="M781.9,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,781.9,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,781.9,70.987Z"
                                         transform="translate(-763.675 -56.615)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.831 2.261)"/>
                                   <rect width="7.982" height="1.086" transform="translate(0 4.453)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.653 6.646)"/>
                               </svg>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <div className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </div>
                       <div className={styles.infoBarWrapper}>
                               <span className={styles.infoStock}>
                                   Skladom viac ako 2ks
                               </span>
                           <span className={styles.infoStockMobile}>
                                   Skladom
                               </span>
                           <div className={styles.productActions}>
                                   <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="23.536" height="16.896"
                                            viewBox="0 0 23.536 16.896"><path
                                           d="M238.467,329.963h-4.744a2.22,2.22,0,0,0-4.24,0h-4.744s-4.9,7.721-4.9,10.43a4.9,4.9,0,1,0,9.808,0c0-2.013-2.707-6.791-4.1-9.115h3.938a2.22,2.22,0,0,0,4.24,0h3.938c-1.391,2.323-4.1,7.1-4.1,9.115a4.9,4.9,0,1,0,9.808,0C243.371,337.684,238.467,329.963,238.467,329.963Zm-13.728,2.525a35.992,35.992,0,0,1,3.489,7.248H221.25A35.993,35.993,0,0,1,224.739,332.488Zm0,11.494a3.592,3.592,0,0,1-3.525-2.931h7.051A3.593,3.593,0,0,1,224.739,343.982Zm6.864-12.457a.9.9,0,1,1,.9-.9A.906.906,0,0,1,231.6,331.525Zm10.453,8.868c0,.014,0,.028,0,.042v-.069C242.054,340.374,242.055,340.385,242.055,340.393Zm-.1-.658h-6.979a35.993,35.993,0,0,1,3.489-7.248A36.011,36.011,0,0,1,241.956,339.735Zm-3.489,4.246a3.593,3.593,0,0,1-3.526-2.931h7.051A3.593,3.593,0,0,1,238.467,343.982Z"
                                           transform="translate(-219.835 -328.401)"/></svg>
                                   </span>
                               <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="19.989" height="16.952"
                                           viewBox="0 0 19.989 16.952"><path
                                          d="M369.847,198.115l-8.2-7.528a5.331,5.331,0,0,1,0-7.972,5.767,5.767,0,0,1,7.65,0l.554.508.553-.508a5.769,5.769,0,0,1,7.65,0h0a5.333,5.333,0,0,1,0,7.972Zm-4.379-15.069a3.761,3.761,0,0,0-2.544.965,3.438,3.438,0,0,0,0,5.18l6.923,6.352,6.922-6.352a3.438,3.438,0,0,0,0-5.179h0a3.836,3.836,0,0,0-5.088,0l-1.834,1.683-1.835-1.683A3.758,3.758,0,0,0,365.468,183.046Z"
                                          transform="translate(-359.852 -181.163)"/></svg>
                                   </span>
                           </div>
                       </div>
                       <h4>
                           Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                       </h4>
                       <p>
                           Intel Core i3-6100U, 4 GB RAM, 128 GB SSD Intel HD Graphics 520, 14”
                           (1366 x 768), Windows 10 Pro, Intel Core i3-6100U, 4 GB RAM, 128 GB…
                       </p>
                       <div className={styles.priceWrapper}>
                           <div className={styles.mainPrice}>
                               <span>13 599.00€</span>
                               <span>25 700.30 bez DPH</span>
                           </div>
                           <div className={styles.discountPrice}>
                               <span>11 399.00€</span>
                           </div>
                       </div>
                   </a>
               </div>
               <div className={styles.box}>
                   <a href="">
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="23.772" height="15.458"
                                    viewBox="0 0 23.772 15.458">
                                   <path d="M743.347,23.864h-12.68V24.95h11.594v8.273H730.667v1.086h12.68Z"
                                         transform="translate(-727.102 -23.864)"/>
                                   <path d="M788.824,30.985l-2.089-3.663h-3.922v9.626H789.7V31.486ZM786.1,28.408l1.309,2.3H783.9v-2.3Zm2.511,7.454H783.9V31.789h4.143l.243.139.33.188Z"
                                         transform="translate(-765.929 -26.439)"/>
                                   <path d="M735.116,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,735.116,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,735.116,70.987Z"
                                         transform="translate(-728.842 -56.615)"/>
                                   <path d="M781.9,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,781.9,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,781.9,70.987Z"
                                         transform="translate(-763.675 -56.615)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.831 2.261)"/>
                                   <rect width="7.982" height="1.086" transform="translate(0 4.453)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.653 6.646)"/>
                               </svg>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <div className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </div>
                       <div className={styles.infoBarWrapper}>
                               <span className={styles.infoStock}>
                                   Skladom viac ako 2ks
                               </span>
                           <span className={styles.infoStockMobile}>
                                   Skladom
                               </span>
                           <div className={styles.productActions}>
                                <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="23.536" height="16.896"
                                            viewBox="0 0 23.536 16.896"><path
                                           d="M238.467,329.963h-4.744a2.22,2.22,0,0,0-4.24,0h-4.744s-4.9,7.721-4.9,10.43a4.9,4.9,0,1,0,9.808,0c0-2.013-2.707-6.791-4.1-9.115h3.938a2.22,2.22,0,0,0,4.24,0h3.938c-1.391,2.323-4.1,7.1-4.1,9.115a4.9,4.9,0,1,0,9.808,0C243.371,337.684,238.467,329.963,238.467,329.963Zm-13.728,2.525a35.992,35.992,0,0,1,3.489,7.248H221.25A35.993,35.993,0,0,1,224.739,332.488Zm0,11.494a3.592,3.592,0,0,1-3.525-2.931h7.051A3.593,3.593,0,0,1,224.739,343.982Zm6.864-12.457a.9.9,0,1,1,.9-.9A.906.906,0,0,1,231.6,331.525Zm10.453,8.868c0,.014,0,.028,0,.042v-.069C242.054,340.374,242.055,340.385,242.055,340.393Zm-.1-.658h-6.979a35.993,35.993,0,0,1,3.489-7.248A36.011,36.011,0,0,1,241.956,339.735Zm-3.489,4.246a3.593,3.593,0,0,1-3.526-2.931h7.051A3.593,3.593,0,0,1,238.467,343.982Z"
                                           transform="translate(-219.835 -328.401)"/></svg>
                                   </span>
                               <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="19.989" height="16.952"
                                           viewBox="0 0 19.989 16.952"><path
                                          d="M369.847,198.115l-8.2-7.528a5.331,5.331,0,0,1,0-7.972,5.767,5.767,0,0,1,7.65,0l.554.508.553-.508a5.769,5.769,0,0,1,7.65,0h0a5.333,5.333,0,0,1,0,7.972Zm-4.379-15.069a3.761,3.761,0,0,0-2.544.965,3.438,3.438,0,0,0,0,5.18l6.923,6.352,6.922-6.352a3.438,3.438,0,0,0,0-5.179h0a3.836,3.836,0,0,0-5.088,0l-1.834,1.683-1.835-1.683A3.758,3.758,0,0,0,365.468,183.046Z"
                                          transform="translate(-359.852 -181.163)"/></svg>
                                   </span>
                           </div>
                       </div>
                       <h4>
                           Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                       </h4>
                       <p>
                           Intel Core i3-6100U, 4 GB RAM, 128 GB SSD Intel HD Graphics 520, 14”
                           (1366 x 768), Windows 10 Pro, Intel Core i3-6100U, 4 GB RAM, 128 GB…
                       </p>
                       <div className={styles.priceWrapper}>
                           <div className={styles.mainPrice}>
                               <span>13 599.00€</span>
                               <span>25 700.30 bez DPH</span>
                           </div>
                           <div className={styles.discountPrice}>
                               <span>11 399.00€</span>
                           </div>
                       </div>
                   </a>
               </div>
               <div className={styles.box}>
                   <a href="">
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="23.772" height="15.458"
                                    viewBox="0 0 23.772 15.458">
                                   <path d="M743.347,23.864h-12.68V24.95h11.594v8.273H730.667v1.086h12.68Z"
                                         transform="translate(-727.102 -23.864)"/>
                                   <path d="M788.824,30.985l-2.089-3.663h-3.922v9.626H789.7V31.486ZM786.1,28.408l1.309,2.3H783.9v-2.3Zm2.511,7.454H783.9V31.789h4.143l.243.139.33.188Z"
                                         transform="translate(-765.929 -26.439)"/>
                                   <path d="M735.116,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,735.116,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,735.116,70.987Z"
                                         transform="translate(-728.842 -56.615)"/>
                                   <path d="M781.9,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,781.9,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,781.9,70.987Z"
                                         transform="translate(-763.675 -56.615)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.831 2.261)"/>
                                   <rect width="7.982" height="1.086" transform="translate(0 4.453)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.653 6.646)"/>
                               </svg>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <div className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </div>
                       <div className={styles.infoBarWrapper}>
                               <span className={styles.infoStock}>
                                   Skladom viac ako 2ks
                               </span>
                           <span className={styles.infoStockMobile}>
                                   Skladom
                               </span>
                           <div className={styles.productActions}>
                                  <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="23.536" height="16.896"
                                            viewBox="0 0 23.536 16.896"><path
                                           d="M238.467,329.963h-4.744a2.22,2.22,0,0,0-4.24,0h-4.744s-4.9,7.721-4.9,10.43a4.9,4.9,0,1,0,9.808,0c0-2.013-2.707-6.791-4.1-9.115h3.938a2.22,2.22,0,0,0,4.24,0h3.938c-1.391,2.323-4.1,7.1-4.1,9.115a4.9,4.9,0,1,0,9.808,0C243.371,337.684,238.467,329.963,238.467,329.963Zm-13.728,2.525a35.992,35.992,0,0,1,3.489,7.248H221.25A35.993,35.993,0,0,1,224.739,332.488Zm0,11.494a3.592,3.592,0,0,1-3.525-2.931h7.051A3.593,3.593,0,0,1,224.739,343.982Zm6.864-12.457a.9.9,0,1,1,.9-.9A.906.906,0,0,1,231.6,331.525Zm10.453,8.868c0,.014,0,.028,0,.042v-.069C242.054,340.374,242.055,340.385,242.055,340.393Zm-.1-.658h-6.979a35.993,35.993,0,0,1,3.489-7.248A36.011,36.011,0,0,1,241.956,339.735Zm-3.489,4.246a3.593,3.593,0,0,1-3.526-2.931h7.051A3.593,3.593,0,0,1,238.467,343.982Z"
                                           transform="translate(-219.835 -328.401)"/></svg>
                                   </span>
                               <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="19.989" height="16.952"
                                           viewBox="0 0 19.989 16.952"><path
                                          d="M369.847,198.115l-8.2-7.528a5.331,5.331,0,0,1,0-7.972,5.767,5.767,0,0,1,7.65,0l.554.508.553-.508a5.769,5.769,0,0,1,7.65,0h0a5.333,5.333,0,0,1,0,7.972Zm-4.379-15.069a3.761,3.761,0,0,0-2.544.965,3.438,3.438,0,0,0,0,5.18l6.923,6.352,6.922-6.352a3.438,3.438,0,0,0,0-5.179h0a3.836,3.836,0,0,0-5.088,0l-1.834,1.683-1.835-1.683A3.758,3.758,0,0,0,365.468,183.046Z"
                                          transform="translate(-359.852 -181.163)"/></svg>
                                   </span>
                           </div>
                       </div>
                       <h4>
                           Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                       </h4>
                       <p>
                           Intel Core i3-6100U, 4 GB RAM, 128 GB SSD Intel HD Graphics 520, 14”
                           (1366 x 768), Windows 10 Pro, Intel Core i3-6100U, 4 GB RAM, 128 GB…
                       </p>
                       <div className={styles.priceWrapper}>
                           <div className={styles.mainPrice}>
                               <span>13 599.00€</span>
                               <span>25 700.30 bez DPH</span>
                           </div>
                           <div className={styles.discountPrice}>
                               <span>11 399.00€</span>
                           </div>
                       </div>
                   </a>
               </div>
               <div className={styles.box}>
                   <a href="">
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="23.772" height="15.458"
                                    viewBox="0 0 23.772 15.458">
                                   <path d="M743.347,23.864h-12.68V24.95h11.594v8.273H730.667v1.086h12.68Z"
                                         transform="translate(-727.102 -23.864)"/>
                                   <path d="M788.824,30.985l-2.089-3.663h-3.922v9.626H789.7V31.486ZM786.1,28.408l1.309,2.3H783.9v-2.3Zm2.511,7.454H783.9V31.789h4.143l.243.139.33.188Z"
                                         transform="translate(-765.929 -26.439)"/>
                                   <path d="M735.116,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,735.116,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,735.116,70.987Z"
                                         transform="translate(-728.842 -56.615)"/>
                                   <path d="M781.9,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,781.9,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,781.9,70.987Z"
                                         transform="translate(-763.675 -56.615)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.831 2.261)"/>
                                   <rect width="7.982" height="1.086" transform="translate(0 4.453)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.653 6.646)"/>
                               </svg>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <div className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </div>
                       <div className={styles.infoBarWrapper}>
                               <span className={styles.infoStock}>
                                   Skladom viac ako 2ks
                               </span>
                           <span className={styles.infoStockMobile}>
                                   Skladom
                               </span>
                           <div className={styles.productActions}>
                                <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="23.536" height="16.896"
                                            viewBox="0 0 23.536 16.896"><path
                                           d="M238.467,329.963h-4.744a2.22,2.22,0,0,0-4.24,0h-4.744s-4.9,7.721-4.9,10.43a4.9,4.9,0,1,0,9.808,0c0-2.013-2.707-6.791-4.1-9.115h3.938a2.22,2.22,0,0,0,4.24,0h3.938c-1.391,2.323-4.1,7.1-4.1,9.115a4.9,4.9,0,1,0,9.808,0C243.371,337.684,238.467,329.963,238.467,329.963Zm-13.728,2.525a35.992,35.992,0,0,1,3.489,7.248H221.25A35.993,35.993,0,0,1,224.739,332.488Zm0,11.494a3.592,3.592,0,0,1-3.525-2.931h7.051A3.593,3.593,0,0,1,224.739,343.982Zm6.864-12.457a.9.9,0,1,1,.9-.9A.906.906,0,0,1,231.6,331.525Zm10.453,8.868c0,.014,0,.028,0,.042v-.069C242.054,340.374,242.055,340.385,242.055,340.393Zm-.1-.658h-6.979a35.993,35.993,0,0,1,3.489-7.248A36.011,36.011,0,0,1,241.956,339.735Zm-3.489,4.246a3.593,3.593,0,0,1-3.526-2.931h7.051A3.593,3.593,0,0,1,238.467,343.982Z"
                                           transform="translate(-219.835 -328.401)"/></svg>
                                   </span>
                               <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="19.989" height="16.952"
                                           viewBox="0 0 19.989 16.952"><path
                                          d="M369.847,198.115l-8.2-7.528a5.331,5.331,0,0,1,0-7.972,5.767,5.767,0,0,1,7.65,0l.554.508.553-.508a5.769,5.769,0,0,1,7.65,0h0a5.333,5.333,0,0,1,0,7.972Zm-4.379-15.069a3.761,3.761,0,0,0-2.544.965,3.438,3.438,0,0,0,0,5.18l6.923,6.352,6.922-6.352a3.438,3.438,0,0,0,0-5.179h0a3.836,3.836,0,0,0-5.088,0l-1.834,1.683-1.835-1.683A3.758,3.758,0,0,0,365.468,183.046Z"
                                          transform="translate(-359.852 -181.163)"/></svg>
                                   </span>
                           </div>
                       </div>
                       <h4>
                           Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                       </h4>
                       <p>
                           Intel Core i3-6100U, 4 GB RAM, 128 GB SSD Intel HD Graphics 520, 14”
                           (1366 x 768), Windows 10 Pro, Intel Core i3-6100U, 4 GB RAM, 128 GB…
                       </p>
                       <div className={styles.priceWrapper}>
                           <div className={styles.mainPrice}>
                               <span>13 599.00€</span>
                               <span>25 700.30 bez DPH</span>
                           </div>
                           <div className={styles.discountPrice}>
                               <span>11 399.00€</span>
                           </div>
                       </div>
                   </a>
               </div>
               <div className={styles.box}>
                   <a href="">
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="23.772" height="15.458"
                                    viewBox="0 0 23.772 15.458">
                                   <path d="M743.347,23.864h-12.68V24.95h11.594v8.273H730.667v1.086h12.68Z"
                                         transform="translate(-727.102 -23.864)"/>
                                   <path d="M788.824,30.985l-2.089-3.663h-3.922v9.626H789.7V31.486ZM786.1,28.408l1.309,2.3H783.9v-2.3Zm2.511,7.454H783.9V31.789h4.143l.243.139.33.188Z"
                                         transform="translate(-765.929 -26.439)"/>
                                   <path d="M735.116,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,735.116,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,735.116,70.987Z"
                                         transform="translate(-728.842 -56.615)"/>
                                   <path d="M781.9,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,781.9,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,781.9,70.987Z"
                                         transform="translate(-763.675 -56.615)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.831 2.261)"/>
                                   <rect width="7.982" height="1.086" transform="translate(0 4.453)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.653 6.646)"/>
                               </svg>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <div className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </div>
                       <div className={styles.infoBarWrapper}>
                               <span className={styles.infoStock}>
                                   Skladom viac ako 2ks
                               </span>
                           <span className={styles.infoStockMobile}>
                                   Skladom
                               </span>
                           <div className={styles.productActions}>
                                  <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="23.536" height="16.896"
                                            viewBox="0 0 23.536 16.896"><path
                                           d="M238.467,329.963h-4.744a2.22,2.22,0,0,0-4.24,0h-4.744s-4.9,7.721-4.9,10.43a4.9,4.9,0,1,0,9.808,0c0-2.013-2.707-6.791-4.1-9.115h3.938a2.22,2.22,0,0,0,4.24,0h3.938c-1.391,2.323-4.1,7.1-4.1,9.115a4.9,4.9,0,1,0,9.808,0C243.371,337.684,238.467,329.963,238.467,329.963Zm-13.728,2.525a35.992,35.992,0,0,1,3.489,7.248H221.25A35.993,35.993,0,0,1,224.739,332.488Zm0,11.494a3.592,3.592,0,0,1-3.525-2.931h7.051A3.593,3.593,0,0,1,224.739,343.982Zm6.864-12.457a.9.9,0,1,1,.9-.9A.906.906,0,0,1,231.6,331.525Zm10.453,8.868c0,.014,0,.028,0,.042v-.069C242.054,340.374,242.055,340.385,242.055,340.393Zm-.1-.658h-6.979a35.993,35.993,0,0,1,3.489-7.248A36.011,36.011,0,0,1,241.956,339.735Zm-3.489,4.246a3.593,3.593,0,0,1-3.526-2.931h7.051A3.593,3.593,0,0,1,238.467,343.982Z"
                                           transform="translate(-219.835 -328.401)"/></svg>
                                   </span>
                               <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="19.989" height="16.952"
                                           viewBox="0 0 19.989 16.952"><path
                                          d="M369.847,198.115l-8.2-7.528a5.331,5.331,0,0,1,0-7.972,5.767,5.767,0,0,1,7.65,0l.554.508.553-.508a5.769,5.769,0,0,1,7.65,0h0a5.333,5.333,0,0,1,0,7.972Zm-4.379-15.069a3.761,3.761,0,0,0-2.544.965,3.438,3.438,0,0,0,0,5.18l6.923,6.352,6.922-6.352a3.438,3.438,0,0,0,0-5.179h0a3.836,3.836,0,0,0-5.088,0l-1.834,1.683-1.835-1.683A3.758,3.758,0,0,0,365.468,183.046Z"
                                          transform="translate(-359.852 -181.163)"/></svg>
                                   </span>
                           </div>
                       </div>
                       <h4>
                           Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                       </h4>
                       <p>
                           Intel Core i3-6100U, 4 GB RAM, 128 GB SSD Intel HD Graphics 520, 14”
                           (1366 x 768), Windows 10 Pro, Intel Core i3-6100U, 4 GB RAM, 128 GB…
                       </p>
                       <div className={styles.priceWrapper}>
                           <div className={styles.mainPrice}>
                               <span>13 599.00€</span>
                               <span>25 700.30 bez DPH</span>
                           </div>
                           <div className={styles.discountPrice}>
                               <span>11 399.00€</span>
                           </div>
                       </div>
                   </a>
               </div>
               <div className={styles.box}>
                   <a href="">
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="23.772" height="15.458"
                                    viewBox="0 0 23.772 15.458">
                                   <path d="M743.347,23.864h-12.68V24.95h11.594v8.273H730.667v1.086h12.68Z"
                                         transform="translate(-727.102 -23.864)"/>
                                   <path d="M788.824,30.985l-2.089-3.663h-3.922v9.626H789.7V31.486ZM786.1,28.408l1.309,2.3H783.9v-2.3Zm2.511,7.454H783.9V31.789h4.143l.243.139.33.188Z"
                                         transform="translate(-765.929 -26.439)"/>
                                   <path d="M735.116,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,735.116,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,735.116,70.987Z"
                                         transform="translate(-728.842 -56.615)"/>
                                   <path d="M781.9,67.849a2.112,2.112,0,1,0,2.112,2.112A2.112,2.112,0,0,0,781.9,67.849Zm0,3.138a1.026,1.026,0,1,1,1.026-1.026A1.027,1.027,0,0,1,781.9,70.987Z"
                                         transform="translate(-763.675 -56.615)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.831 2.261)"/>
                                   <rect width="7.982" height="1.086" transform="translate(0 4.453)"/>
                                   <rect width="7.982" height="1.086"
                                         transform="translate(1.653 6.646)"/>
                               </svg>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <div className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                               <span>
                                   Ušetri až <br/>
                                   <strong>-60%</strong>
                               </span>
                           </div>
                       </div>
                       <div className={styles.infoBarWrapper}>
                               <span className={styles.infoStock}>
                                   Skladom viac ako 2ks
                               </span>
                           <span className={styles.infoStockMobile}>
                                   Skladom
                               </span>
                           <div className={styles.productActions}>
                                  <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="23.536" height="16.896"
                                            viewBox="0 0 23.536 16.896"><path
                                           d="M238.467,329.963h-4.744a2.22,2.22,0,0,0-4.24,0h-4.744s-4.9,7.721-4.9,10.43a4.9,4.9,0,1,0,9.808,0c0-2.013-2.707-6.791-4.1-9.115h3.938a2.22,2.22,0,0,0,4.24,0h3.938c-1.391,2.323-4.1,7.1-4.1,9.115a4.9,4.9,0,1,0,9.808,0C243.371,337.684,238.467,329.963,238.467,329.963Zm-13.728,2.525a35.992,35.992,0,0,1,3.489,7.248H221.25A35.993,35.993,0,0,1,224.739,332.488Zm0,11.494a3.592,3.592,0,0,1-3.525-2.931h7.051A3.593,3.593,0,0,1,224.739,343.982Zm6.864-12.457a.9.9,0,1,1,.9-.9A.906.906,0,0,1,231.6,331.525Zm10.453,8.868c0,.014,0,.028,0,.042v-.069C242.054,340.374,242.055,340.385,242.055,340.393Zm-.1-.658h-6.979a35.993,35.993,0,0,1,3.489-7.248A36.011,36.011,0,0,1,241.956,339.735Zm-3.489,4.246a3.593,3.593,0,0,1-3.526-2.931h7.051A3.593,3.593,0,0,1,238.467,343.982Z"
                                           transform="translate(-219.835 -328.401)"/></svg>
                                   </span>
                               <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="19.989" height="16.952"
                                           viewBox="0 0 19.989 16.952"><path
                                          d="M369.847,198.115l-8.2-7.528a5.331,5.331,0,0,1,0-7.972,5.767,5.767,0,0,1,7.65,0l.554.508.553-.508a5.769,5.769,0,0,1,7.65,0h0a5.333,5.333,0,0,1,0,7.972Zm-4.379-15.069a3.761,3.761,0,0,0-2.544.965,3.438,3.438,0,0,0,0,5.18l6.923,6.352,6.922-6.352a3.438,3.438,0,0,0,0-5.179h0a3.836,3.836,0,0,0-5.088,0l-1.834,1.683-1.835-1.683A3.758,3.758,0,0,0,365.468,183.046Z"
                                          transform="translate(-359.852 -181.163)"/></svg>
                                   </span>

                           </div>
                       </div>
                       <h4>
                           Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                       </h4>
                       <p>
                           Intel Core i3-6100U, 4 GB RAM, 128 GB SSD Intel HD Graphics 520, 14”
                           (1366 x 768), Windows 10 Pro, Intel Core i3-6100U, 4 GB RAM, 128 GB…
                       </p>
                       <div className={styles.priceWrapper}>
                           <div className={styles.mainPrice}>
                               <span>13 599.00€</span>
                               <span>25 700.30 bez DPH</span>
                           </div>
                           <div className={styles.discountPrice}>
                               <span>11 399.00€</span>
                           </div>
                       </div>
                   </a>
               </div>
           </Carousel>
       </section>
       {/* End Favourite Products Slider */}

       <section className={styles.productInformations}>
           <div className="custom-container">
               <div className={[styles.anchors, 'js-anchors'].join(' ')}>
                   <a href="#popis" className={styles.active}>
                       Popis
                   </a>
                   <a href="#parametre">
                       Paremetre
                   </a>
                   <a href="#recenzie">
                       Recenzie
                   </a>
                   <a href="#podobne">
                       Podobné
                   </a>
                   <a href="#garancie">
                       Garancie
                   </a>
               </div>

               <div className={styles.brand}>
                   <img src="img/brand-lenovo.png" alt=""/>
               </div>

               <div className={styles.zigZag}>
                   <div className="row">
                       <div className={[styles.column, styles.mainBg ,'col-xl-6'].join(' ')}>
                           <h3>Lenovo ThinkPad L460</h3>
                           <p>
                               Notebook Lenovo ThinkPad L460 vám prináša viac, než by ste čakali.
                               Je tenký, ľahký a napriek tomu vyniká odolnou konštrukciou, vysokým výkonom
                               a dlhou výdržou batérie. ThinkPad L460 oceníte pre každodennú prácu a stane sa
                               spoľahlivým partnerom pre vaše podnikanie alebo príjemným spoločníkom v domácnosti.
                               Spoznajte pohodlie mobilnej kancelárie v podaní notebooku ThinkPad L460.
                           </p>
                           <h3>Lenovo ThinkPad L460</h3>
                           <p>
                               Notebook Lenovo ThinkPad L460 vám prináša viac, než by ste čakali.
                               Je tenký, ľahký a napriek tomu vyniká odolnou konštrukciou, vysokým výkonom
                               a dlhou výdržou batérie. ThinkPad L460 oceníte pre každodennú prácu a stane sa
                               spoľahlivým partnerom pre vaše podnikanie alebo príjemným spoločníkom v domácnosti.
                               Spoznajte pohodlie mobilnej kancelárie v podaní notebooku ThinkPad L460.
                           </p>
                       </div>
                       <div className={[styles.column, 'col-xl-6']. join(' ')}>
                           <img src="img/img-big.png" alt=""/>
                       </div>

                       <div className={[styles.column, 'col-xl-6']. join(' ')}>
                           <img src="img/img-big.png" alt=""/>
                       </div>
                       <div className={[styles.column, styles.darkBg ,'col-xl-6'].join(' ')}>
                           <h3>Lenovo ThinkPad L460</h3>
                           <p>
                               Notebook Lenovo ThinkPad L460 vám prináša viac, než by ste čakali.
                               Je tenký, ľahký a napriek tomu vyniká odolnou konštrukciou, vysokým výkonom
                               a dlhou výdržou batérie. ThinkPad L460 oceníte pre každodennú prácu a stane sa
                               spoľahlivým partnerom pre vaše podnikanie alebo príjemným spoločníkom v domácnosti.
                               Spoznajte pohodlie mobilnej kancelárie v podaní notebooku ThinkPad L460.
                           </p>
                           <h3>Lenovo ThinkPad L460</h3>
                           <p>
                               Notebook Lenovo ThinkPad L460 vám prináša viac, než by ste čakali.
                               Je tenký, ľahký a napriek tomu vyniká odolnou konštrukciou, vysokým výkonom
                               a dlhou výdržou batérie. ThinkPad L460 oceníte pre každodennú prácu a stane sa
                               spoľahlivým partnerom pre vaše podnikanie alebo príjemným spoločníkom v domácnosti.
                               Spoznajte pohodlie mobilnej kancelárie v podaní notebooku ThinkPad L460.
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       </section>
   </main>
  );
}

export default Product;