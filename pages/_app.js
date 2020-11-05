import "../styles/globals.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Head from 'next/head'

// const convertImages = (query, callback) => {
//     const images = document.querySelectorAll(query);
//
//     images.forEach(image => {
//         fetch ( image.src )
//             .then( res => res.text() )
//             .then( data => {
//                 const parser = new DOMParser();
//                 const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
//
//                 if ( image.id ) svg.id = image.id;
//                 if ( image.className ) svg.classList = image.classList;
//
//                 image.parentNode.replaceChild(svg, image);
//             })
//             .then(callback)
//             .catch(error => console.error(error))
//     });
// }

function scrollToTop (duration) {

    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step (newTimestamp) {

        if ( oldTimestamp !== null ) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;

            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;

            document.scrollingElement.scrollTop = scrollY;
        }

        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

if ( typeof window !== 'undefined' ) {

    // convertImages('.svg');

    let homepageWrapper = document.getElementById('homepage');

    if ( typeof(homepageWrapper) != 'undefined' && homepageWrapper != null )  {
        document.getElementById('categoryMenu').style.display = 'none';
    }

    document.getElementById('hamburger').addEventListener('click', function () {
        let menu = document.getElementById('jsMobileMenu');

        if ( !menu.classList.contains('d-flex') && !this.classList.contains('open') ) {
            menu.classList.add('d-flex');
            this.classList.add('open')
        }
        else {
            menu.classList.remove('d-flex');
            this.classList.remove('open');
        }

    });

    let widgetFixedMegaMenuItems = document.querySelectorAll('.jsHasMegaMenu');

    widgetFixedMegaMenuItems.forEach( (item) => {
        item.addEventListener('click', function () {
            if ( this.classList.contains('open') )
                this.classList.remove('open')
            else
                this.classList.add('open')
        });
    });

    let scrollTopEl = document.getElementById('scrollTop') ;

    if ( typeof(scrollTopEl) != 'undefined' && scrollTopEl != null )  {

        window.addEventListener('scroll', function() {
            if ( window.scrollY > 700 )
                scrollTopEl.classList.add('visible')
            else
                scrollTopEl.classList.remove('visible');
        });

        scrollTopEl.addEventListener('click', () => {
            scrollToTop(1000);
        });
    }

    let fixedWidget = document.getElementById('categoryWidgetFixed');

    if ( typeof(fixedWidget) != 'undefined' && fixedWidget != null )  {

        window.addEventListener('scroll', function() {

            setTimeout(() => {
                if ( window.scrollY > (fixedWidget.offsetTop + fixedWidget.offsetHeight) ) {
                    fixedWidget.classList.add('visible');
                } else {
                    fixedWidget.classList.remove('visible');

                    widgetFixedMegaMenuItems.forEach( (item) => {
                        if ( item.classList.contains('open') )
                            item.classList.remove('open');
                    });
                }
            }, 250)
        });
    }

    let countdown = document.getElementById('jsCountdown');

    if ( typeof(countdown) != 'undefined' && countdown != null  ) {
        // Set the date we're counting down to
        let countDownDate = new Date('Jan 5, 2021 15:37:25').getTime();

        // Update the count down every 1 second
        let x = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the results
            document.getElementById('jsDay').innerText = days;
            document.getElementById('jsHour').innerText = hours;
            document.getElementById('jsMinute').innerText = minutes;
            document.getElementById('jsSecond').innerText = seconds;

            // If the count down is over, write some text
            if ( distance < 0 ) {
                clearInterval(x);
            }
        }, 1000);
    }

    let getStyle = function(e, styleName) {
        let styleValue = '';

        if ( document.defaultView && document.defaultView.getComputedStyle ) {
            styleValue = document.defaultView.getComputedStyle(e, '').getPropertyValue(styleName);
        } else if (e.currentStyle) {
            styleName = styleName.replace(/\-(\w)/g, function(strMatch, p1) {
                return p1.toUpperCase();
            });
            styleValue = e.currentStyle[styleName];
        }
        return styleValue;
    }

    let sliders          = document.querySelectorAll('.productCarousel');
    let miniBannerSlider = document.querySelector('.miniBannerCarousel');
    let container        = document.getElementById('container');

    function recalculateSliderContainer() {

        setTimeout( () => {

            let marginLeft = getStyle(container, 'margin-left').replace('px', '');

            miniBannerSlider.style.marginLeft = parseInt(marginLeft) + 15 + 'px';
            // miniBannerSlider.firstChild.style.marginLeft = parseInt(marginLeft) + 15 + 'px';

            marginLeft = parseInt(marginLeft) + 15 + 'px';

            sliders.forEach( (item) => {
                item.style.marginLeft = marginLeft
                item.style.width =  'calc(100% - ' + marginLeft + ')';

                // item.firstChild.style.marginLeft = parseInt(marginLeft) + 15 + 'px';
                item.firstChild.style.width = '100%';
            });
        }, 500);
    }

    if ( typeof(container) != 'undefined' && container != null  ) {

        recalculateSliderContainer();

        window.addEventListener('resize', function () {
            recalculateSliderContainer();
        });
    }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>BigOn</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
              integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
              crossOrigin="anonymous"/>
    </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
