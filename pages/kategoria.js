import styles from "../styles/Category.module.scss";
import Carousel from "react-multi-carousel";

const Category = () => {
  return (
   <main className={styles.categoryPage}>

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

           <div className={styles.categoryWrapper}>
               {/* Start Filter Aside */}
               <aside className={styles.filterSidebar}>
                   <div className={styles.box}>
                       <h3>Značka</h3>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                                   <span className="check"></span>
                                   <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                               <span className="check"></span>
                               <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                               <span className="check"></span>
                               <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                               <span className="check"></span>
                               <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                   </div>

                   <div className={styles.box}>
                       <h3>Značka</h3>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                               <span className="check"></span>
                               <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                               <span className="check"></span>
                               <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                               <span className="check"></span>
                               <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                       <div className="custom-checkbox">
                           <label>
                               <input type="checkbox" />
                               <span className="check"></span>
                               <span className="label">Filter kategórie</span>
                           </label>
                       </div>
                   </div>
               </aside>
               {/* End Filter Aside */}

               <section className={styles.productsWrapper}>
                   <div className={styles.headlineImage}>
                       <a href="">
                           <img src="img/category-page.png" alt=""/>
                           <div className={styles.text}>
                               <h2>Akcia týždňa</h2>
                               <div>
                                   <span className="button secondary">
                                   Zobraziť viac
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547"><path
                                       d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                       transform="translate(0 0)"/></svg>
                               </span>
                               </div>
                           </div>
                       </a>
                   </div>

                   <div className={styles.categoriesWrapper}>
                       <h3>Notebooky</h3>
                       <p>Obnovené ( repasované ) notebooky priamo od výrobcu s <strong>2 ročnou zárukou</strong> po kompletnej obnove.
                           Ušetrite až <strong>78%</strong> z ich pôvodnej ceny. Skladom desiatky modelov notebookov <strong>už od 149 €</strong>.
                           Windows v cene produktu. Na výber zo značiek HP, Lenovo, Dell, Asus, Fujitsu Siemens, Toshiba.
                       </p>

                       <div className="row">
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                           <div className={[styles.column, 'col-md-4'].join(' ')}>
                               <a href="" className={styles.category}>
                                   <img src="img/img-small.png" alt=""/>
                                   <h5>Do domácnosti</h5>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547"
                                        viewBox="0 0 13.939 9.547">
                                       <path className="a"
                                             d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955"
                                             transform="translate(0 0)"/>
                                   </svg>
                               </a>
                           </div>
                       </div>
                   </div>

                   <div className={[styles.productListing, 'productListing'].join(' ')}>
                       <nav className={styles.filters}>
                           <div className={styles.items}>
                               <p>
                                   <strong>Zordiť podľa:</strong>
                               </p>

                               <a href="" className="button secondary">
                                   Najnižšej ceny
                               </a>
                               <a href="" className="button secondary">
                                   Najvyššej ceny
                               </a>
                               <a href="" className="button secondary">
                                   Podľa oblúbenosti
                               </a>
                           </div>
                           <p>
                               35 produktov
                           </p>
                       </nav>

                       <div className="row">
                           <div className="col-xl-4">
                               <div className={[styles.box, 'box'].join(' ')}>
                                   <a href="">
                                       <div className={[styles.badges, 'badges'].join(' ')}>
                                           <div className={[styles.badgeNew, 'badgeNew'].join(' ')}>
                                               <span>Novinka!</span>
                                           </div>
                                           <div className={[styles.favourite, 'favourite'].join(' ')}>
                                               <span>Obľúbené</span>
                                           </div>
                                           <div className={[styles.delivery, 'delivery'].join(' ')}>
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
                                       <div className={[styles.productThumb, 'productThumbs'].join(' ')}>
                                           <img src="img/product-image.png" alt=""/>
                                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                                           <span>
                                               Ušetri až <br/>
                                               <strong>-60%</strong>
                                           </span>
                                           </div>
                                       </div>
                                       <div className={[styles.infoBarWrapper, 'infoBarWrapper'].join(' ')}>
                                       <span className={styles.infoStock}>
                                           Skladom viac ako 2ks
                                       </span>
                                       <div className={[styles.productActions, 'productActions'].join(' ')}>
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
                                       <div className={[styles.priceWrapper, 'priceWrapper'].join(' ')}>
                                           <div className={[styles.mainPrice, 'mainPrice'].join(' ')}>
                                               <span>13 599.00€</span>
                                               <span>25 700.30 bez DPH</span>
                                           </div>
                                           <div className={[styles.discountPrice, 'discountPrice'].join(' ')}>
                                               <span>11 399.00€</span>
                                           </div>
                                       </div>
                                   </a>
                               </div>
                           </div>
                           <div className="col-xl-4">
                               <div className={[styles.box, 'box'].join(' ')}>
                                   <a href="">
                                       <div className={[styles.badges, 'badges'].join(' ')}>
                                           <div className={[styles.badgeNew, 'badgeNew'].join(' ')}>
                                               <span>Novinka!</span>
                                           </div>
                                           <div className={[styles.favourite, 'favourite'].join(' ')}>
                                               <span>Obľúbené</span>
                                           </div>
                                           <div className={[styles.delivery, 'delivery'].join(' ')}>
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
                                       <div className={[styles.productThumb, 'productThumbs'].join(' ')}>
                                           <img src="img/product-image.png" alt=""/>
                                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                                           <span>
                                               Ušetri až <br/>
                                               <strong>-60%</strong>
                                           </span>
                                           </div>
                                       </div>
                                       <div className={[styles.infoBarWrapper, 'infoBarWrapper'].join(' ')}>
                                       <span className={styles.infoStock}>
                                           Skladom viac ako 2ks
                                       </span>
                                           <div className={[styles.productActions, 'productActions'].join(' ')}>
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
                                       <div className={[styles.priceWrapper, 'priceWrapper'].join(' ')}>
                                           <div className={[styles.mainPrice, 'mainPrice'].join(' ')}>
                                               <span>13 599.00€</span>
                                               <span>25 700.30 bez DPH</span>
                                           </div>
                                           <div className={[styles.discountPrice, 'discountPrice'].join(' ')}>
                                               <span>11 399.00€</span>
                                           </div>
                                       </div>
                                   </a>
                               </div>
                           </div>
                           <div className="col-xl-4">
                               <div className={[styles.box, 'box'].join(' ')}>
                                   <a href="">
                                       <div className={[styles.badges, 'badges'].join(' ')}>
                                           <div className={[styles.badgeNew, 'badgeNew'].join(' ')}>
                                               <span>Novinka!</span>
                                           </div>
                                           <div className={[styles.favourite, 'favourite'].join(' ')}>
                                               <span>Obľúbené</span>
                                           </div>
                                           <div className={[styles.delivery, 'delivery'].join(' ')}>
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
                                       <div className={[styles.productThumb, 'productThumbs'].join(' ')}>
                                           <img src="img/product-image.png" alt=""/>
                                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                                           <span>
                                               Ušetri až <br/>
                                               <strong>-60%</strong>
                                           </span>
                                           </div>
                                       </div>
                                       <div className={[styles.infoBarWrapper, 'infoBarWrapper'].join(' ')}>
                                       <span className={styles.infoStock}>
                                           Skladom viac ako 2ks
                                       </span>
                                           <div className={[styles.productActions, 'productActions'].join(' ')}>
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
                                       <div className={[styles.priceWrapper, 'priceWrapper'].join(' ')}>
                                           <div className={[styles.mainPrice, 'mainPrice'].join(' ')}>
                                               <span>13 599.00€</span>
                                               <span>25 700.30 bez DPH</span>
                                           </div>
                                           <div className={[styles.discountPrice, 'discountPrice'].join(' ')}>
                                               <span>11 399.00€</span>
                                           </div>
                                       </div>
                                   </a>
                               </div>
                           </div>
                           <div className="col-xl-4">
                               <div className={[styles.box, 'box'].join(' ')}>
                                   <a href="">
                                       <div className={[styles.badges, 'badges'].join(' ')}>
                                           <div className={[styles.badgeNew, 'badgeNew'].join(' ')}>
                                               <span>Novinka!</span>
                                           </div>
                                           <div className={[styles.favourite, 'favourite'].join(' ')}>
                                               <span>Obľúbené</span>
                                           </div>
                                           <div className={[styles.delivery, 'delivery'].join(' ')}>
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
                                       <div className={[styles.productThumb, 'productThumbs'].join(' ')}>
                                           <img src="img/product-image.png" alt=""/>
                                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                                           <span>
                                               Ušetri až <br/>
                                               <strong>-60%</strong>
                                           </span>
                                           </div>
                                       </div>
                                       <div className={[styles.infoBarWrapper, 'infoBarWrapper'].join(' ')}>
                                       <span className={styles.infoStock}>
                                           Skladom viac ako 2ks
                                       </span>
                                           <div className={[styles.productActions, 'productActions'].join(' ')}>
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
                                       <div className={[styles.priceWrapper, 'priceWrapper'].join(' ')}>
                                           <div className={[styles.mainPrice, 'mainPrice'].join(' ')}>
                                               <span>13 599.00€</span>
                                               <span>25 700.30 bez DPH</span>
                                           </div>
                                           <div className={[styles.discountPrice, 'discountPrice'].join(' ')}>
                                               <span>11 399.00€</span>
                                           </div>
                                       </div>
                                   </a>
                               </div>
                           </div>
                       </div>

                       <div className="pagination">
                           <ul>
                               <li className="prev">
                                   <a href="">
                                       &lt;
                                   </a>
                               </li>
                               <li>
                                   <a href="">
                                       1
                                   </a>
                               </li>
                               <li>
                                   <a href="">
                                      2
                                   </a>
                               </li>
                               <li>
                                   <a href="">
                                       3
                                   </a>
                               </li>
                               <li className="sep">...</li>
                               <li>
                                   <a href="">
                                       12
                                   </a>
                               </li>
                               <li className="next">
                                   &gt;
                               </li>
                           </ul>
                       </div>

                   </div>
               </section>
           </div>

       </div>
   </main>
  );
}

export default Category;