import React from "react";
import Carousel from "../components/Carousel";
import ProductsDisplay from "../components/ProductsDisplay";
import ReviewsSlider from "../components/ReviewsSlider";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Carousel />
      <p
        className="p-3 text-black shadow-lg text-center mt-3 rounded-xl font-bold mx-auto"
        style={{
          maxWidth: "80%",
          width: "fit-content",
          backgroundColor: "#FACC15",
        }}
      >
        Products Our Store Provides You
      </p>
      <ProductsDisplay />
      <ReviewsSlider />
      <Footer />
    </>
  );
};

export default Home;
