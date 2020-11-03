import "../styles/globals.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Head from 'next/head'

const convertImages = (query, callback) => {
    const images = document.querySelectorAll(query);

    images.forEach(image => {
        fetch ( image.src )
            .then( res => res.text() )
            .then( data => {
                const parser = new DOMParser();
                const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

                if ( image.id ) svg.id = image.id;
                if ( image.className ) svg.classList = image.classList;

                image.parentNode.replaceChild(svg, image);
            })
            .then(callback)
            .catch(error => console.error(error))
    });
}

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

    convertImages('.svg');

    let widgetFixedMegaMenuItems = document.querySelectorAll('.jsHasMegaMenu');

    widgetFixedMegaMenuItems.forEach( (item) => {
        item.addEventListener('click', function () {
            if ( this.classList.contains('open') )
                this.classList.remove('open')
            else
                this.classList.add('open')
        });
    });

    window.addEventListener('scroll', function() {
        let fixedWidget = document.getElementById('categoryWidgetFixed'),
            scrollTop   = document.getElementById('scrollTop');


        setTimeout(() => {
            if ( window.scrollY > (fixedWidget.offsetTop + fixedWidget.offsetHeight) ) {
                fixedWidget.classList.add('visible');
                scrollTop.classList.add('visible');
            } else {
                fixedWidget.classList.remove('visible');
                scrollTop.classList.remove('visible');

                widgetFixedMegaMenuItems.forEach( (item) => {
                   if ( item.classList.contains('open') )
                       item.classList.remove('open');
                });
            }
        }, 250)
    });

    document.getElementById('scrollTop').addEventListener('click', () => {
       scrollToTop(1000);
    });

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
