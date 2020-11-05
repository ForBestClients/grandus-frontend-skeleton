import styles from "../styles/Category.module.scss";
import React from "react";
import { RangeSlider, InputNumber } from 'rsuite';

const Category = () => {

    function PriceFilter() {
        const [value, setValue] = React.useState([10, 50]);
        return (
           <div className="priceFilterWrapper">
               <RangeSlider
                   progress
                   value={value}
                   onChange={value => {
                       setValue(value);
                   }}
               />

               <div className="priceFilterInputs">
                   <InputNumber
                       min={0}
                       max={100}
                       value={value[0]}
                       prefix='Od'
                       postfix='€'
                       onChange={nextValue => {
                           const [start, end] = value;
                           if (nextValue > end) {
                               return;
                           }
                           setValue([nextValue, end]);
                       }}
                   />

                   <InputNumber
                       min={0}
                       max={100}
                       value={value[1]}
                       prefix='Do'
                       postfix='€'
                       onChange={nextValue => {
                           const [start, end] = value;
                           if (start > nextValue) {
                               return;
                           }
                           setValue([start, nextValue]);
                       }}
                   />
               </div>
           </div>
        );
    }

  return (
   <main className={styles.categoryPage}>

       <div className="scrollTop" id="scrollTop">
           <svg xmlns="http://www.w3.org/2000/svg" width="13.939" height="9.547" viewBox="0 0 13.939 9.547"><path d="M8.577,9.353h0a.661.661,0,0,0,.936,0L13.745,5.48a.662.662,0,0,0,0-.936L9.513.194A.662.662,0,1,0,8.6,1.15l3.089,3.192H.662A.662.662,0,0,0,0,5v.029a.661.661,0,0,0,.662.661H11.674L8.6,8.4a.661.661,0,0,0-.021.955" transform="translate(0 0)"/></svg>
       </div>

       <div className="custom-container">

       <div className="categoryTabs">
           <div className="categoryTabsWrapper">
               {/*<img src="img/arrow-right-2.svg" className="tabArrow" alt=""/>*/}
               <ul>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 34.026 21.969"><path d="M480.579,294.82V281.2a3.44,3.44,0,0,0-3.436-3.437H456.457a3.441,3.441,0,0,0-3.437,3.437V294.82h-3.234V296.3a3.441,3.441,0,0,0,3.437,3.437h27.152a3.441,3.441,0,0,0,3.437-3.437V294.82ZM455.043,281.2a1.415,1.415,0,0,1,1.414-1.413h20.685a1.415,1.415,0,0,1,1.413,1.413V294.82H455.043Zm25.333,16.509H453.224a1.417,1.417,0,0,1-1.3-.869H481.68A1.416,1.416,0,0,1,480.376,297.711Z" transform="translate(-449.787 -277.765)"/></svg>
                           Noteboky
                       </a>
                   </li>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="33.519" height="34.567" viewBox="0 0 33.519 34.567"><path d="M557.35,266.9h-18.3a3.3,3.3,0,0,0-3.3,3.3v4.884h-5.336a3.3,3.3,0,0,0-3.3,3.294v19.8a3.3,3.3,0,0,0,3.3,3.3H540.4a3.3,3.3,0,0,0,3.3-3.3v-.812H557.35a3.3,3.3,0,0,0,3.294-3.294v-23.87A3.3,3.3,0,0,0,557.35,266.9Zm-18.3,1.962h18.3a1.334,1.334,0,0,1,1.333,1.333v1.153H537.719v-1.153A1.335,1.335,0,0,1,539.052,268.861Zm-1.333,4.448h20.964v17.668H543.7v-12.6a3.3,3.3,0,0,0-3.3-3.294h-2.683ZM529.088,295.4V281.075h12.647V295.4Zm1.333-18.356H540.4a1.334,1.334,0,0,1,1.333,1.332v.739H529.088v-.739A1.334,1.334,0,0,1,530.421,277.041ZM540.4,299.5h-9.981a1.336,1.336,0,0,1-1.333-1.333v-.812h5.063a1.326,1.326,0,1,0,2.521,0h5.063v.812A1.335,1.335,0,0,1,540.4,299.5ZM557.35,295.4H543.7v-2.457h14.986v1.125A1.334,1.334,0,0,1,557.35,295.4Z" transform="translate(-527.126 -266.899)"/></svg>
                           Telefóny a tablety
                       </a>
                   </li>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="41.382" height="22.478" viewBox="0 0 41.382 22.478"><path d="M329.913,506.288H307.082a2.974,2.974,0,0,0-2.97,2.97v13.22a2.972,2.972,0,0,0,2.97,2.969h10.531V527h-3.828v1.768h9.425V527h-3.828v-1.55h10.531a2.972,2.972,0,0,0,2.97-2.969v-13.22A2.973,2.973,0,0,0,329.913,506.288Zm1.2,16.19a1.2,1.2,0,0,1-1.2,1.2H307.082a1.2,1.2,0,0,1-1.2-1.2v-.555h25.233Zm0-2.323H305.881v-10.9a1.2,1.2,0,0,1,1.2-1.2h22.831a1.2,1.2,0,0,1,1.2,1.2Z" transform="translate(-291.501 -506.288)"/><path d="M292.316,510.45h-5.861A2.558,2.558,0,0,0,283.9,513V524.49a2.558,2.558,0,0,0,2.556,2.554h5.861a2.558,2.558,0,0,0,2.555-2.554V513A2.558,2.558,0,0,0,292.316,510.45Zm.786,14.04a.787.787,0,0,1-.786.786h-5.861a.787.787,0,0,1-.787-.786V513a.787.787,0,0,1,.787-.786h5.861a.787.787,0,0,1,.786.786Z" transform="translate(-283.9 -507.853)"/></svg>
                           Počítače
                       </a>
                   </li>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32.607" height="25.475" viewBox="0 0 32.607 25.475"><path d="M29.242,0H3.366A3.37,3.37,0,0,0,0,3.366V18.348a3.369,3.369,0,0,0,3.366,3.365H15.3v1.757H10.963v2H21.644v-2H17.306V21.714H29.242a3.369,3.369,0,0,0,3.365-3.365V3.366A3.369,3.369,0,0,0,29.242,0ZM3.366,2H29.242A1.362,1.362,0,0,1,30.6,3.366v12.35H2V3.366A1.362,1.362,0,0,1,3.366,2Zm25.876,17.7H3.366A1.362,1.362,0,0,1,2,18.348V17.72H30.6v.628A1.362,1.362,0,0,1,29.242,19.709Z"/></svg>
                           Monitory
                       </a>
                   </li>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 34.026 21.969"><path d="M480.579,294.82V281.2a3.44,3.44,0,0,0-3.436-3.437H456.457a3.441,3.441,0,0,0-3.437,3.437V294.82h-3.234V296.3a3.441,3.441,0,0,0,3.437,3.437h27.152a3.441,3.441,0,0,0,3.437-3.437V294.82ZM455.043,281.2a1.415,1.415,0,0,1,1.414-1.413h20.685a1.415,1.415,0,0,1,1.413,1.413V294.82H455.043Zm25.333,16.509H453.224a1.417,1.417,0,0,1-1.3-.869H481.68A1.416,1.416,0,0,1,480.376,297.711Z" transform="translate(-449.787 -277.765)"/></svg>
                           Doplnky a elektronika
                       </a>
                   </li>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="34.667" height="21.251" viewBox="0 0 34.667 21.251"><path d="M325.647,468.491l.295-.254v-3.693H291.275l0,3.691.287.253a2.549,2.549,0,0,1,.854,1.674,3.007,3.007,0,0,1-.873,1.865l-.272.252v9.531h0V485.8h3.091l1.6-1.045L297.7,485.8h3.874l1.4-1,1.352,1h2.647l1.626-3.036,1.626,3.036h2.648l1.352-1,1.4,1h3.874l1.736-1.045,1.6,1.045h3.091V472.279l-.273-.252a3,3,0,0,1-.873-1.865A2.546,2.546,0,0,1,325.647,468.491ZM305.966,484.1h-1.073L303,482.7l-1.964,1.4h-2.861l-2.244-1.349-2.071,1.349h-.89V481.81h14.22Zm18.279,0h-.89l-2.071-1.349L319.04,484.1h-2.861l-1.964-1.4-1.892,1.4H311.25l-1.225-2.289h14.219Zm-14.219-3.986H292.972v-7.13a4.573,4.573,0,0,0,1.145-2.788,4.005,4.005,0,0,0-1.145-2.7v-1.254h31.273v1.254a4,4,0,0,0-1.145,2.7,4.572,4.572,0,0,0,1.145,2.788v7.13Z" transform="translate(-291.274 -464.544)"/><path d="M298.5,480.665h5.325V470.351H298.5Zm1.7-8.617h1.931v6.921h-1.931Z" transform="translate(-294.173 -466.875)"/><path d="M309.97,480.665h5.325V470.351H309.97Zm1.7-8.617H313.6v6.921h-1.931Z" transform="translate(-298.778 -466.875)"/><path d="M321.484,480.665h5.325V470.351h-5.325Zm1.7-8.617h1.931v6.921h-1.931Z" transform="translate(-303.399 -466.875)"/><path d="M333,480.665h5.325V470.351H333Zm1.7-8.617h1.931v6.921H334.7Z" transform="translate(-308.021 -466.875)"/></svg>
                           Komponenty
                       </a>
                   </li>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="33.114" height="28.344" viewBox="0 0 33.114 28.344"><path d="M608.322,432.09v28.344h33.114V432.09Zm30.775,2.339v3.122H610.661v-3.122Zm-28.435,23.665v-18.2H639.1v18.2Z" transform="translate(-608.322 -432.09)"/><rect width="23.516" height="2.339" transform="translate(4.799 10.091)"/><rect width="1.297" height="1.807" transform="translate(4.836 2.889)"/><rect width="1.297" height="1.807" transform="translate(7.088 2.889)"/><rect width="1.297" height="1.807" transform="translate(9.267 2.889)"/><rect width="23.516" height="2.339" transform="translate(4.799 13.78)"/><rect width="23.516" height="2.339" transform="translate(4.799 17.47)"/><rect width="13.538" height="2.339" transform="translate(14.777 21.16)"/></svg>
                           Softvér a služby
                       </a>
                   </li>
                   <li>
                       <a href="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="31.151" height="32.201" viewBox="0 0 31.151 32.201"><path d="M304.525,349.753v2.261h24.954v27.679H304.525v2.261h27.216v-32.2Z" transform="translate(-300.59 -349.753)"/><path d="M311.516,376.684l1.6,1.6,10.431-10.431L313.116,357.42l-1.6,1.6,7.712,7.712H299.592v2.261h19.615Z" transform="translate(-299.592 -351.304)"/></svg>
                           Všetky produkty
                       </a>
                   </li>
               </ul>
           </div>
       </div>

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
                       <PriceFilter />
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
                       <a href="" className="showMore">
                           Zobraziť viac
                       </a>
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

                       <div className={[styles.row, 'row'].join(' ')}>
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

                       <div className={[styles.row, 'row'].join(' ')}>
                           <div className={[styles.column, 'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                           <div className={[styles.column, 'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                           <div className={[styles.column, 'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                           <div className={[styles.column,'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                           <div className={[styles.column,'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                           <div className={[styles.column,'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                           <div className={[styles.column,'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                           <div className={[styles.column,'col-xxl-3', 'col-xl-4'].join(' ')}>
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
                          <div>
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
                              <p>zobrazených (24 z celkového počtu 35)</p>
                          </div>
                       </div>

                       <a href="" className={[styles.showMore, 'showMore'].join(' ')}>
                           Zobraziť viac
                       </a>

                   </div>

                   <div className={styles.categoriesWrapper}>
                       <div className={[styles.row, 'row'].join(' ')}>
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
               </section>
           </div>

       </div>
   </main>
  );
}

export default Category;