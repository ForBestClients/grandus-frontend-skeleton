import "../styles/globals.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Head from 'next/head'
// import Footer from 'next/footer';

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
if ( typeof window !== 'undefined' ) {
    convertImages('.svg');
}


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>BigOn</title>
        {/*<link*/}
        {/*    rel="stylesheet"*/}
        {/*    type="text/css"*/}
        {/*    charSet="UTF-8"*/}
        {/*    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"*/}
        {/*/>*/}
        {/*<link*/}
        {/*    rel="stylesheet"*/}
        {/*    type="text/css"*/}
        {/*    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"*/}
        {/*/>*/}
    </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
