import styles from "../styles/Home.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {

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

    const MiniBannerArrows = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;

        return (
            <div className="carouselArrowsMiniBanners">
                {/*<button className="arrowPrev" onClick={ () => previous() }>*/}
                {/*    <img src="img/arrow-left.svg" />*/}
                {/*</button>*/}
                <button className="arrowNext" onClick={ () => next() }>
                    <img src="img/arrow-right.svg" />
                </button>
            </div>
        );
    };

    const promoSliderResponsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const miniBannersSliderResponsive = {

        tablet: {
            breakpoint: { max: 1024, min: 576 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 40
        }
    }

    const productSliderResponsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
            partialVisibilityGutter: 40
        }
    };

    const BlogSliderResponsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 576 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

    const testimonialSliderResponsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 576 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

  return (
      <main>

          {/* Start Fixed Category List */}
          {/*<aside className={styles.categoryWidgetFixed}>*/}
          {/*    <ul>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-notebooky.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Notebooky</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-pc.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Počítače</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-mobile.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Telefón a tablety</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-monitor.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Monitory</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-components.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Komponenty</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-electronics.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Doplnky a elektronika</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-software.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Softvér a služby</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li className={styles.discount}>*/}
          {/*            <img src="img/icon-discount.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Výpredaj</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <img src="img/icon-all-products.svg" className="svg" />*/}
          {/*            <div className={styles.text}>*/}
          {/*                <span>Všetky produkty</span>*/}
          {/*                <img src="img/arrow-right.svg" className="svg"/>*/}
          {/*            </div>*/}
          {/*        </li>*/}
          {/*    </ul>*/}
          {/*</aside>*/}
          {/* End Fixed Category List */}

          {/* Start Section Promo */}
          <section className={styles.promo}>
              <div className="container">

                  {/* Start Grid Section */}
                  <div className={styles.grid}>
                      <aside className={styles.categoryWidget}>
                          <ul className={styles.categoryWidgetList}>
                              <li className={[styles.hasMegamenu, styles.categoryWidgetItem].join(' ')}>
                                  <a href="" className={styles.mainCategoryLink} >
                                      <img src="img/icon-notebooky.svg" className="svg" />
                                      Notebooky
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                                  <div className={styles.megamenu}>
                                      <div className={styles.categoryList}>
                                          <h4>
                                              <img src="img/icon-notebooky.svg" className="svg" />
                                              Lorem ipsum
                                          </h4>
                                          <ul>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className={styles.categoryList}>
                                          <h4>
                                              <img src="img/icon-notebooky.svg" className="svg" />
                                              Lorem ipsum
                                          </h4>
                                          <ul>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                              <li>
                                                  <a href="">Lorem ipsum dolor</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              <li className={styles.categoryWidgetItem}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-pc.svg" className="svg" />
                                      Počítače
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                              <li className={styles.categoryWidgetItem}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-mobile.svg" className="svg" />
                                      Telefón a tablety
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                              <li className={styles.categoryWidgetItem}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-monitor.svg" className="svg" />
                                      Monitory
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                              <li className={styles.categoryWidgetItem}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-components.svg" className="svg" />
                                      Komponenty
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                              <li className={styles.categoryWidgetItem}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-electronics.svg" className="svg" />
                                      Doplnky a elektronika
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                              <li className={styles.categoryWidgetItem}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-software.svg" className="svg" />
                                      Softvér a služby
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                              <li className={[styles.discount, styles.categoryWidgetItem].join(' ')}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-discount.svg" className="svg" />
                                      Výpredaj
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                              <li className={styles.categoryWidgetItem}>
                                  <a href="" className={styles.mainCategoryLink}>
                                      <img src="img/icon-all-products.svg" className="svg" />
                                      Všetky produkty
                                      <img src="img/arrow-right.svg" className="svg"/>
                                  </a>
                              </li>
                          </ul>
                      </aside>
                      <div className={[styles.promoSlider, 'promoSlider'].join(' ')}>
                          <Carousel
                              responsive={promoSliderResponsive}
                              swipeable={true}
                              draggable={false}
                              infinite={true}
                              ssr={true}
                              arrows={false}
                              customButtonGroup={<SliderArrowsGroup />}
                              containerClass='promoCarousel'
                          >
                              <div className={styles.slide} >
                                  <img src="img/thumbnail-1.png"
                                        alt=""
                                        title=""
                                        className={styles.slideImage}
                                  />
                                  <div className={styles.text}>
                                      <h3>Herné <br />notebooky</h3>
                                      <a href="" className="button secondary">
                                          Zobraziť viac
                                          <img src="img/arrow-right-1.svg" />
                                      </a>
                                  </div>
                              </div>
                              <div className={styles.slide} >
                                  <img src="img/thumbnail-1.png"
                                       alt=""
                                       title=""
                                       className={styles.slideImage}
                                  />
                                  <div className={styles.text}>
                                      <h3>Lorem <br />Ipsum</h3>
                                      <a href="" className="button secondary">
                                          Zobraziť viac
                                          <img src="img/arrow-right-1.svg" />
                                      </a>
                                  </div>
                              </div>
                          </Carousel>
                      </div>
                      <div className={styles.adBanner}>
                          <img src="img/lenovo.png" alt=""/>
                          <div className={styles.text}>
                              <h3>Predajňa <br /> BigON</h3>
                              <a href="" className="button secondary">
                                  Zobraziť viac
                                  <img src="img/arrow-right.svg" className="svg" />
                              </a>
                          </div>
                      </div>
                  </div>
                  {/* End Grid Section */}

                  {/* Start Mini Banners Section Desktop */}
                  <section className={styles.miniBanners}>
                      <div className={styles.gridMiniBanners}>
                          <div className={styles.miniBanner}>
                              <a href="">
                                  <img src="img/thumbnail.png" alt=""/>
                                  <div className={styles.text}>
                                      <h5>
                                          Top 10 <br />
                                          od HP
                                      </h5>
                                      <span>Zobraziť viac</span>
                                  </div>
                                  <img src="img/arrow-right.svg" className="svg" />
                              </a>
                          </div>
                          <div className={styles.miniBanner}>
                              <a href="">
                                  <img src="img/thumbnail.png" alt=""/>
                                  <div className={styles.text}>
                                      <h5>
                                          Top 10 <br />
                                          od HP
                                      </h5>
                                      <span>Zobraziť viac</span>
                                  </div>
                                  <img src="img/arrow-right.svg" className="svg" />
                              </a>
                          </div>
                          <div className={styles.miniBanner}>
                              <a href="">
                                  <img src="img/thumbnail.png" alt=""/>
                                  <div className={styles.text}>
                                      <h5>
                                          Top 10 <br />
                                          od HP
                                      </h5>
                                      <span>Zobraziť viac</span>
                                  </div>
                                  <img src="img/arrow-right.svg" className="svg" />
                              </a>
                          </div>
                          <div className={styles.miniBanner}>
                              <a href="">
                                  <img src="img/thumbnail.png" alt=""/>
                                  <div className={styles.text}>
                                      <h5>
                                          Top 10 <br />
                                          od HP
                                      </h5>
                                      <span>Zobraziť viac</span>
                                  </div>
                                  <img src="img/arrow-right.svg" className="svg" />
                              </a>
                          </div>
                      </div>
                  </section>
                  {/* End Mini Banners Section Desktop */}

              </div>
          </section>
          {/* End Section Promo */}

          {/* Start Mini Banners Section Mobile */}
          <section className={[styles.miniBanners, styles.miniBannersMobile].join(' ')}>
              <Carousel
                  responsive={miniBannersSliderResponsive}
                  swipeable={true}
                  draggable={false}
                  infinite={true}
                  ssr={true}
                  arrows={false}
                  showDots={false}
                  partialVisible={true}
                  customButtonGroup={<MiniBannerArrows />}
                  containerClass='miniBannerCarousel'
              >
                  <div className={styles.miniBanner}>
                      <a href="">
                          <img src="img/thumbnail.png" alt=""/>
                          <div className={styles.text}>
                              <h5>
                                  Top 10 <br />
                                  od HP
                              </h5>
                              <span>Zobraziť viac</span>
                          </div>
                          <img src="img/arrow-right.svg" />
                      </a>
                  </div>
                  <div className={styles.miniBanner}>
                      <a href="">
                          <img src="img/thumbnail.png" alt=""/>
                          <div className={styles.text}>
                              <h5>
                                  Top 10 <br />
                                  od HP
                              </h5>
                              <span>Zobraziť viac</span>
                          </div>
                          <img src="img/arrow-right.svg" />
                      </a>
                  </div>
                  <div className={styles.miniBanner}>
                      <a href="">
                          <img src="img/thumbnail.png" alt=""/>
                          <div className={styles.text}>
                              <h5>
                                  Top 10 <br />
                                  od HP
                              </h5>
                              <span>Zobraziť viac</span>
                          </div>
                          <img src="img/arrow-right.svg" className="svg" />
                      </a>
                  </div>
                  <div className={styles.miniBanner}>
                      <a href="">
                          <img src="img/thumbnail.png" alt=""/>
                          <div className={styles.text}>
                              <h5>
                                  Top 10 <br />
                                  od HP
                              </h5>
                              <span>Zobraziť viac</span>
                          </div>
                          <img src="img/arrow-right.svg" className="svg" />
                      </a>
                  </div>
              </Carousel>
          </section>
          {/* End Mini Banners Section Mobile */}

          {/* Start Favourite Products Slider */}
          <section className={[styles.productSliderWrapper, 'favouriteProducts', 'productSlider'].join(' ')}>
              <div className="container">
                  <div className="sliderTitle">
                      <h2>Obľúbené</h2>
                      <a href="">
                          Zobraziť viac
                      </a>
                  </div>
              </div>
               <Carousel
                   responsive={productSliderResponsive}
                   swipeable={true}
                   draggable={false}
                   infinite={true}
                   ssr={true}
                   arrows={false}
                   showDots={true}
                   customButtonGroup={<SliderArrowsGroup />}
                   containerClass='productCarousel'
               >
                   <div className={styles.box}>
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <a href="" className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </a>
                       <div className={styles.infoBarWrapper}>
                       <span className={styles.infoStock}>
                           Skladom viac ako 2ks
                       </span>
                           <div className={styles.productActions}>
                           </div>
                       </div>
                       <h4>
                           <a href="">
                               Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                           </a>
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
                   </div>
                   <div className={styles.box}>
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <a href="" className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </a>
                       <div className={styles.infoBarWrapper}>
                       <span className={styles.infoStock}>
                           Skladom viac ako 2ks
                       </span>
                           <div className={styles.productActions}>
                           </div>
                       </div>
                       <h4>
                           <a href="">
                               Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                           </a>
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
                   </div>
                   <div className={styles.box}>
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <a href="" className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </a>
                       <div className={styles.infoBarWrapper}>
                       <span className={styles.infoStock}>
                           Skladom viac ako 2ks
                       </span>
                           <div className={styles.productActions}>
                           </div>
                       </div>
                       <h4>
                           <a href="">
                               Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                           </a>
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
                   </div>
                   <div className={styles.box}>
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <a href="" className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </a>
                       <div className={styles.infoBarWrapper}>
                       <span className={styles.infoStock}>
                           Skladom viac ako 2ks
                       </span>
                           <div className={styles.productActions}>
                           </div>
                       </div>
                       <h4>
                           <a href="">
                               Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                           </a>
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
                   </div>
                   <div className={styles.box}>
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <a href="" className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </a>
                       <div className={styles.infoBarWrapper}>
                       <span className={styles.infoStock}>
                           Skladom viac ako 2ks
                       </span>
                           <div className={styles.productActions}>
                           </div>
                       </div>
                       <h4>
                           <a href="">
                               Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                           </a>
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
                   </div>
                   <div className={styles.box}>
                       <div className={styles.badges}>
                           <div className={styles.badgeNew}>
                               <span>Novinka!</span>
                           </div>
                           <div className={styles.favourite}>
                               <span>Obľúbené</span>
                           </div>
                           <div className={styles.delivery}>
                               <span>do 24h.</span>
                           </div>
                       </div>
                       <a href="" className={styles.productThumb}>
                           <img src="img/product-image.png" alt=""/>
                           <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                           <span>
                               Ušetri až <br/>
                               <strong>-60%</strong>
                           </span>
                           </div>
                       </a>
                       <div className={styles.infoBarWrapper}>
                       <span className={styles.infoStock}>
                           Skladom viac ako 2ks
                       </span>
                           <div className={styles.productActions}>
                           </div>
                       </div>
                       <h4>
                           <a href="">
                               Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                           </a>
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
                   </div>
               </Carousel>
          </section>
          {/* End Favourite Products Slider */}

          {/* Start Benefit Products Slider */}
          <section className={[styles.productSliderWrapper, 'benefitProducts', 'productSlider'].join(' ')}>
              <div className="container">
                  <div className="sliderTitle">
                      <h2>Najvýhodnejšie</h2>
                      <a href="">
                          Zobraziť viac
                      </a>
                  </div>
              </div>
              <Carousel
                  responsive={productSliderResponsive}
                  swipeable={true}
                  draggable={false}
                  infinite={true}
                  ssr={true}
                  arrows={false}
                  showDots={true}
                  // customDot={<SliderCustomDots />}
                  customButtonGroup={<SliderArrowsGroup />}
                  containerClass='productCarousel'
              >
                  <div className={[styles.box, 'benefitBox'].join(' ')}>
                      <div className={[styles.badges, 'benefitBadges'].join(' ')}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                       <span>
                           Ušetri až <br/>
                           <strong>-60%</strong>
                       </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                   <span className={styles.infoStock}>
                       Skladom viac ako 2ks
                   </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={[styles.box, 'benefitBox'].join(' ')}>
                      <div className={[styles.badges, 'benefitBadges'].join(' ')}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                       <span>
                           Ušetri až <br/>
                           <strong>-60%</strong>
                       </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                   <span className={styles.infoStock}>
                       Skladom viac ako 2ks
                   </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={[styles.box, 'benefitBox'].join(' ')}>
                      <div className={[styles.badges, 'benefitBadges'].join(' ')}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                       <span>
                           Ušetri až <br/>
                           <strong>-60%</strong>
                       </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                   <span className={styles.infoStock}>
                       Skladom viac ako 2ks
                   </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={[styles.box, 'benefitBox'].join(' ')}>
                      <div className={[styles.badges, 'benefitBadges'].join(' ')}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                       <span>
                           Ušetri až <br/>
                           <strong>-60%</strong>
                       </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                   <span className={styles.infoStock}>
                       Skladom viac ako 2ks
                   </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={[styles.box, 'benefitBox'].join(' ')}>
                      <div className={[styles.badges, 'benefitBadges'].join(' ')}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                       <span>
                           Ušetri až <br/>
                           <strong>-60%</strong>
                       </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                   <span className={styles.infoStock}>
                       Skladom viac ako 2ks
                   </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={[styles.box, 'benefitBox'].join(' ')}>
                      <div className={[styles.badges, 'benefitBadges'].join(' ')}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                       <span>
                           Ušetri až <br/>
                           <strong>-60%</strong>
                       </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                   <span className={styles.infoStock}>
                       Skladom viac ako 2ks
                   </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
              </Carousel>
          </section>
          {/* End Benefit Products Slider */}

          {/* Start Ads Banners Section */}
          <section className={styles.bannerOffer}>
              <div className="container">
                  <div className={styles.sectionTitle}>
                      <img src="img/avatar-3d.png" className="svg" />
                      <h2>Špeciálna ponuka týždňa!</h2>
                  </div>
                  <div className={styles.bannerWrapper}>
                      <div className={styles.first}>
                          <h3>HP ZBook Studio G5 Mobile</h3>
                          <p>
                              Intel Core i9-8950HK, 32 GB RAM, 512 GB SSD
                              nVidia Quadro P2000, 15,6” Full HD 1920 x 1080
                          </p>
                          <p className={styles.textAlert}>
                              Posledné kusy skladom!
                          </p>
                          <div className={styles.prices}>
                              <div className={styles.pricesMain}>
                                  <span>Pôvodná cena:</span>
                                  <span>1242.90€</span>
                              </div>
                              <div className={styles.pricesDiscount}>
                                  <span>Zvýhodnená cena:</span>
                                  <span>876.00€</span>
                              </div>
                          </div>
                      </div>
                      <div className={styles.second}>
                          <h5>Ponuka končí už o...</h5>
                          <div className={styles.countdown}>
                              <div className={styles.days}>
                                  <span>3</span>
                                  <span>dni</span>
                              </div>
                              <div className={styles.hours}>
                                  <span>11</span>
                                  <span>hod</span>
                              </div>
                              <div className={styles.minutes}>
                                  <span>42</span>
                                  <span>min</span>
                              </div>
                              <div className={styles.seconds}>
                                  <span>17</span>
                                  <span>sek</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* End Ads Banners Section */}

          {/* Start Banner Links Section */}
          <section className={styles.bannerLinks}>
              <div className="container">
                  <div className={styles.bannerLinksGrid}>
                      <div className={styles.box}>
                          <h3>Vyberte si podľa vašej činnosti, kde budete zariadenie používať.</h3>
                      </div>
                      <div className={styles.box}>
                          <a href="">
                              <img src="img/thumbnail.png" alt=""/>
                              <div className={styles.bannerText}>
                                  <h5>Pre firmy</h5>
                                  <span className="button secondary">
                                      Zobraziť viac
                                      <img src="img/arrow-right.svg"/>
                                  </span>
                              </div>
                          </a>
                      </div>
                      <div className={styles.box}>
                          <a href="">
                              <img src="img/thumbnail-1.png" alt=""/>
                              <div className={styles.bannerText}>
                                  <h5>Do domácnosti</h5>
                                  <span className="button secondary">
                                      Zobraziť viac
                                      <img src="img/arrow-right.svg"/>
                                </span>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div className={styles.bannerLinksGrid}>
                      <div className={styles.box}>
                          <a href="">
                              <img src="img/thumbnail-3.png" alt=""/>
                              <div className={styles.bannerText}>
                                  <h5>Pre hráčov</h5>
                                  <span className="button secondary">
                                      Zobraziť viac
                                      <img src="img/arrow-right.svg"/>
                                </span>
                              </div>
                          </a>
                      </div>
                      <div className={styles.box}>
                          <a href="">
                              <img src="img/thumbnail-2.png" alt=""/>
                              <div className={styles.bannerText}>
                                  <h5>Pre študentov</h5>
                                  <span className="button secondary">
                                      Zobraziť viac
                                      <img src="img/arrow-right.svg"/>
                                </span>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
          {/* End Banner Links Section */}

          {/* Start News Products Slider */}
          <section className={[styles.productSliderWrapper, 'newsProducts' , 'productSlider'].join(' ')}>
              <div className="container">
                  <div className="sliderTitle">
                      <h2>Novinky</h2>
                      <a href="">
                          Zobraziť viac
                      </a>
                  </div>
              </div>
              <Carousel
                  responsive={productSliderResponsive}
                  swipeable={true}
                  draggable={false}
                  infinite={true}
                  ssr={true}
                  arrows={false}
                  showDots={true}
                  // customDot={<SliderCustomDots />}
                  customButtonGroup={<SliderArrowsGroup />}
                  containerClass='productCarousel'
              >
                  <div className={styles.box}>
                      <div className={styles.badges}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                               <span>
                                   Ušetri až <br/>
                                   <strong>-60%</strong>
                               </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                           <span className={styles.infoStock}>
                               Skladom viac ako 2ks
                           </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={styles.box}>
                      <div className={styles.badges}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                               <span>
                                   Ušetri až <br/>
                                   <strong>-60%</strong>
                               </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                           <span className={styles.infoStock}>
                               Skladom viac ako 2ks
                           </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={styles.box}>
                      <div className={styles.badges}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                               <span>
                                   Ušetri až <br/>
                                   <strong>-60%</strong>
                               </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                           <span className={styles.infoStock}>
                               Skladom viac ako 2ks
                           </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={styles.box}>
                      <div className={styles.badges}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                               <span>
                                   Ušetri až <br/>
                                   <strong>-60%</strong>
                               </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                           <span className={styles.infoStock}>
                               Skladom viac ako 2ks
                           </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={styles.box}>
                      <div className={styles.badges}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                                   <span>
                                       Ušetri až <br/>
                                       <strong>-60%</strong>
                                   </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                               <span className={styles.infoStock}>
                                   Skladom viac ako 2ks
                               </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
                  <div className={styles.box}>
                      <div className={styles.badges}>
                          <div className={styles.badgeNew}>
                              <span>Novinka!</span>
                          </div>
                          <div className={styles.favourite}>
                              <span>Obľúbené</span>
                          </div>
                          <div className={styles.delivery}>
                              <span>do 24h.</span>
                          </div>
                      </div>
                      <a href="" className={styles.productThumb}>
                          <img src="img/product-image.png" alt=""/>
                          <div className={[styles.productDiscountBadge, 'discountBadge'].join(' ')}>
                               <span>
                                   Ušetri až <br/>
                                   <strong>-60%</strong>
                               </span>
                          </div>
                      </a>
                      <div className={styles.infoBarWrapper}>
                           <span className={styles.infoStock}>
                               Skladom viac ako 2ks
                           </span>
                          <div className={styles.productActions}>
                          </div>
                      </div>
                      <h4>
                          <a href="">
                              Lenovo ThinkPad L460 ThinkPad X1 Yoga 1st Gen
                          </a>
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
                  </div>
              </Carousel>
          </section>
          {/* End News Products Slider */}

          {/* Start Brands Section */}
          <section className={styles.brands}>
              <div className="container">
                  <div className={styles.brandsWrapper}>
                      <img src="img/dell-logo.png" alt=""/>
                      <img src="img/eizo-logo.png" alt=""/>
                      <img src="img/samsung-logo.png" alt=""/>
                      <img src="img/toshiba-logo.png" alt=""/>
                      <img src="img/fujitsu-logo.png" alt=""/>
                      <img src="img/applelogo.png" alt=""/>
                      <img src="img/hp-logo.png" alt=""/>
                      <img src="img/lenovo-logo.png" alt=""/>
                  </div>
              </div>
          </section>
          {/* End Brands Section */}

          {/* Start Blog Posts Slider */}
          <section className={[styles.productSliderWrapper, 'blogPosts', 'productSlider'].join(' ')}>
              <div className="container">
                  <div className="sliderTitle">
                      <h2>Prečítajte si <br /> náš blog.</h2>
                      <a href="">
                          <img src="img/logo-bigblog.png" alt=""/>
                      </a>
                  </div>
              </div>
              <Carousel
                  responsive={productSliderResponsive}
                  swipeable={true}
                  draggable={false}
                  infinite={true}
                  ssr={true}
                  arrows={false}
                  showDots={true}
                  partialVisible={true}
                  customButtonGroup={<SliderArrowsGroup />}
                  containerClass='productCarousel'
              >
                  <article className={[styles.box, 'blogPostBox'].join(' ')}>
                      <a href="">
                      <span className="blogPostBadge">
                          Recenzie
                      </span>
                          <div className="blogPostThumb">
                              <img src="img/post-thumbnail.png" alt=""/>
                              <img src="img/arrow-right.svg" className="svg" />
                          </div>
                          <div className="text">
                              <div className="postTitle">
                                  <h4>
                                      Lorem ipsum dolor, sit amet elit.
                                  </h4>
                                  <div className="meta">
                                      <div className="comments">
                                          <img src="img/icon-comments.svg" className="svg" />
                                          <span>2</span>
                                      </div>
                                      <time dateTime="2017-02-14">
                                          02.06.2020
                                      </time>
                                  </div>
                              </div>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
                              </p>
                          </div>
                      </a>
                  </article>
                  <article className={[styles.box, 'blogPostBox'].join(' ')}>
                      <a href="">
                      <span className="blogPostBadge">
                          Recenzie
                      </span>
                          <div className="blogPostThumb">
                              <img src="img/post-thumbnail.png" alt=""/>
                              <img src="img/arrow-right.svg" className="svg" />
                          </div>
                          <div className="text">
                              <div className="postTitle">
                                  <h4>
                                      Lorem ipsum dolor, sit amet elit.
                                  </h4>
                                  <div className="meta">
                                      <div className="comments">
                                          <img src="img/icon-comments.svg" className="svg" />
                                          <span>2</span>
                                      </div>
                                      <time dateTime="2017-02-14">
                                          02.06.2020
                                      </time>
                                  </div>
                              </div>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
                              </p>
                          </div>
                      </a>
                  </article>
                  <article className={[styles.box, 'blogPostBox'].join(' ')}>
                      <a href="">
                      <span className="blogPostBadge">
                          Recenzie
                      </span>
                          <div className="blogPostThumb">
                              <img src="img/post-thumbnail.png" alt=""/>
                              <img src="img/arrow-right.svg" className="svg" />
                          </div>
                          <div className="text">
                              <div className="postTitle">
                                  <h4>
                                      Lorem ipsum dolor, sit amet elit.
                                  </h4>
                                  <div className="meta">
                                      <div className="comments">
                                          <img src="img/icon-comments.svg" className="svg" />
                                          <span>2</span>
                                      </div>
                                      <time dateTime="2017-02-14">
                                          02.06.2020
                                      </time>
                                  </div>
                              </div>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
                              </p>
                          </div>
                      </a>
                  </article>
                  <article className={[styles.box, 'blogPostBox'].join(' ')}>
                      <a href="">
                      <span className="blogPostBadge">
                          Recenzie
                      </span>
                          <div className="blogPostThumb">
                              <img src="img/post-thumbnail.png" alt=""/>
                              <img src="img/arrow-right.svg" className="svg" />
                          </div>
                          <div className="text">
                              <div className="postTitle">
                                  <h4>
                                      Lorem ipsum dolor, sit amet elit.
                                  </h4>
                                  <div className="meta">
                                      <div className="comments">
                                          <img src="img/icon-comments.svg" className="svg" />
                                          <span>2</span>
                                      </div>
                                      <time dateTime="2017-02-14">
                                          02.06.2020
                                      </time>
                                  </div>
                              </div>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
                              </p>
                          </div>
                      </a>
                  </article>
                  <article className={[styles.box, 'blogPostBox'].join(' ')}>
                      <a href="">
                      <span className="blogPostBadge">
                          Recenzie
                      </span>
                          <div className="blogPostThumb">
                              <img src="img/post-thumbnail.png" alt=""/>
                              <img src="img/arrow-right.svg" className="svg" />
                          </div>
                          <div className="text">
                              <div className="postTitle">
                                  <h4>
                                      Lorem ipsum dolor, sit amet elit.
                                  </h4>
                                  <div className="meta">
                                      <div className="comments">
                                          <img src="img/icon-comments.svg" className="svg" />
                                          <span>2</span>
                                      </div>
                                      <time dateTime="2017-02-14">
                                          02.06.2020
                                      </time>
                                  </div>
                              </div>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
                              </p>
                          </div>
                      </a>
                  </article>
                  <article className={[styles.box, 'blogPostBox'].join(' ')}>
                      <a href="">
                      <span className="blogPostBadge">
                          Recenzie
                      </span>
                          <div className="blogPostThumb">
                              <img src="img/post-thumbnail.png" alt=""/>
                              <img src="img/arrow-right.svg" className="svg" />
                          </div>
                          <div className="text">
                              <div className="postTitle">
                                  <h4>
                                      Lorem ipsum dolor, sit amet elit.
                                  </h4>
                                  <div className="meta">
                                      <div className="comments">
                                          <img src="img/icon-comments.svg" className="svg" />
                                          <span>2</span>
                                      </div>
                                      <time dateTime="2017-02-14">
                                          02.06.2020
                                      </time>
                                  </div>
                              </div>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
                              </p>
                          </div>
                      </a>
                  </article>
                  <article className={[styles.box, 'blogPostBox'].join(' ')}>
                      <a href="">
                      <span className="blogPostBadge">
                          Recenzie
                      </span>
                          <div className="blogPostThumb">
                              <img src="img/post-thumbnail.png" alt=""/>
                              <img src="img/arrow-right.svg" className="svg" />
                          </div>
                          <div className="text">
                              <div className="postTitle">
                                  <h4>
                                      Lorem ipsum dolor, sit amet elit.
                                  </h4>
                                  <div className="meta">
                                      <div className="comments">
                                          <img src="img/icon-comments.svg" className="svg" />
                                          <span>2</span>
                                      </div>
                                      <time dateTime="2017-02-14">
                                          02.06.2020
                                      </time>
                                  </div>
                              </div>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
                              </p>
                          </div>
                      </a>
                  </article>
              </Carousel>
          </section>
          {/* End Blog Posts Slider */}

          {/* Start Testimonials Section */}
          <section className={styles.testimonials}>
              <div className="container">
                  <div className={styles.testimonialsWrapper}>
                      <Carousel
                          responsive={testimonialSliderResponsive}
                          swipeable={true}
                          draggable={false}
                          infinite={true}
                          ssr={true}
                          arrows={false}
                          showDots={false}
                          autoPlay={true}
                      >
                          <div className={styles.testimonial}>
                              <h5 className="text-center">Peter</h5>
                              <p className={styles.description}>
                                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.”
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.”
                              </p>
                              <div className={styles.rating}>
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                              </div>
                          </div>
                          <div className={styles.testimonial}>
                              <h5 className="text-center">Andrej</h5>
                              <p className={styles.description}>
                                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.”
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.”
                              </p>
                              <div className={styles.rating}>
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                              </div>
                          </div>
                          <div className={styles.testimonial}>
                              <h5 className="text-center">Filip</h5>
                              <p className={styles.description}>
                                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.”
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.”
                              </p>
                              <div className={styles.rating}>
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                                  <img src="img/icon-star.svg" className="svg" />
                              </div>
                          </div>
                      </Carousel>
                  </div>
              </div>
          </section>
        {/* End Testimonials Section */}

      </main>
  );
}
