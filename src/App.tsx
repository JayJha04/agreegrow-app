import React from 'react';
import TopNavbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';
import SocialAppNavbar from './components/socialAppNavbar';
import Products from './components/products';
import CartSidePanel from './components/cartSidePanel';
import AgreegrowCarousel from './components/helper/carousel';
import AgreegrowImageMagnifier from './components/helper/agreegrowImageMagnifier';
import Product from './components/product';
import AgreegrowCounter from './components/helper/agreegrowCounter';


function App() {
  return (
    <div >
      {/* <SocialAppNavbar />
      <TopNavbar />
      <Products /> */}
      {/* <CartSidePanel /> */}
      {/* <AgreegrowCarousel /> */}
      {/* <AgreegrowImageMagnifier imageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' largeImageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' /> */}
      <Product />
      {/* <AgreegrowCounter intitialCount={2} /> */}
    </div>
  );
}

export default App;
