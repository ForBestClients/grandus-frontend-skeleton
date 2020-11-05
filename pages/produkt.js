import styles from "../styles/Product.module.scss";

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

           <div className={styles.productDetail}>
               <div className={styles.product}>

               </div>
               <div className={styles.productInfo}>

               </div>
           </div>
       </div>

   </main>
  );
}

export default Product;