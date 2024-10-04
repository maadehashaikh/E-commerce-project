import React, { useState, useEffect, useContext } from "react"; //useContext
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Autoplay } from "swiper/modules";
import { CartContext } from "./CartContext";

const Description = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const { addToCart } = useContext(CartContext);

  // const handleAddToCart = () => {
  //   addToCart(product); // Add the current product to the cart
  // };

  const fetchProductDetails = async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data); // Set the fetched product data
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoader(false); // Ensure loader is set to false after fetching
    }
  };

  useEffect(() => {
    fetchProductDetails(); // Fetch product details on component mount
  }, [productId]);

  // Loading state or check if product is null
  if (loader) {
    return <Loader />; // Show loader if loading
  }

  if (!product) {
    return <div>Product not found.</div>; // Handle case when product is null
  }

  return (
    <div className="p-4 bg-yellow-300 w-[80%] rounded flex justify-center items-center ml-28">
      <div className="inline-block w-[30%]">
        {product.thumbnail && (
          <img
            src={product.thumbnail}
            className="w-60 h-52 object-cover rounded-lg inline-block border-2 border-black"
          ></img>
        )}
      </div>
      <div className="w-[70%]">
        <h1 className="text-4xl font-bold font-serif text-center text-black pb-4">
          {product.title}
        </h1>
        <p className="text-lg font-sans text-black mt-4">
          {product.description}
        </p>
        <p className="text-lg font-sans text-black mt-2">
          Price : {product.price} RS
        </p>

        {product.brand && (
          <p className="text-lg font-sans text-black mt-2">
            Ratings: {product.rating}
          </p>
        )}

        {product.brand && (
          <p className="text-lg font-sans text-black mt-2">
            Brand: {product.brand}
          </p>
        )}

        {product.weight && (
          <p className="text-lg font-sans text-black mt-2">
            Weight: {product.weight} kg
          </p>
        )}

        {product.warrantyInformation && (
          <p className="text-lg font-sans text-black mt-2">
            Warranty Information: {product.warrantyInformation}
          </p>
        )}

        {product.shippingInformation && (
          <p className="text-lg font-sans text-black mt-2">
            Shipping Information : {product.shippingInformation}
          </p>
        )}

        {product.availabilityStatus && (
          <p className="text-lg font-sans text-black mt-2">
            Availability Status : {product.availabilityStatus}
          </p>
        )}

        {product.returnPolicy && (
          <p className="text-lg font-sans text-black mt-2">
            Return Policy : {product.returnPolicy}
          </p>
        )}

        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Reviews:</h2>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={false}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {product.reviews.map((review, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-black px-2 border rounded text-white h-[30vh]"
                >
                  <p className="mt-3">{review.comment}</p>
                  <br />
                  <p className="font-thin text-white mt-3">
                    {" ( " + review.reviewerName + " ) "}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full text-sm py-1 text-black font-sans bg-white rounded-md border-2 border-black font-bold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Description;
