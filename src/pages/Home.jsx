import React from "react";
import Carousel from "../components/Carousel";
import ProductsDisplay from "../components/ProductsDisplay";

const Home = () => {
  return (
    <>
      <Carousel />
      <p
        className="p-3 text-black shadow-lg text-center mt-3 rounded-xl bg-yellow-400 font-bold mx-auto"
        style={{ maxWidth: "80%", width: "fit-content" }}
      >
        Products Our Products Provide You
      </p>

      <ProductsDisplay />
    </>
  );
};

export default Home;
