import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProductsByCategory = async () => {
    try {
      setLoader(true);
      if (categoryName === "All") {
        const response = await axios.get(`https://dummyjson.com/products`);
        setProducts(response.data.products); // Display all products
      } else {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        setProducts(response.data.products); // Display products by specific category
      }
      setLoader(false);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="p-4">
          <h1 className="text-4xl font-bold font-serif text-center text-yellow-500 pb-4">
            {categoryName === "All"
              ? "All Products of Essential Hub"
              : `Products in ${categoryName}`}
          </h1>
          <Link to={`/`} className="no-underline">
            <h6 className="text-yellow-400">Back To Home </h6>
          </Link>

          <p className="font-sans font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            fugiat natus quisquam maiores ab sapiente officiis voluptatibus quo
            fuga dolorum sed placeat tenetur harum sequi accusantium illum
            quasi, odio incidunt Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Autem, fugiat natus quisquam maiores ab sapiente
            officiis voluptatibus quo fuga dolorum sed placeat tenetur harum
            sequi accusantium illum quasi, odio incidunt
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-sm rounded-lg border-1 border-2 border-black"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-80 object-cove border-b-2 border-black rounded-t-md p-5 bg-gray-300"
                />
                <h2 className="text-sm p-2 text-center text-gray-700 font-sans">
                  {" "}
                  {product.title}
                  <span className="font-bold text-sm text-gray-700 font-sans">
                    ({product.brand})
                  </span>
                </h2>
                <p className="text-sm p-2 text-center text-gray-700 font-sans">
                  RS: {product.price}
                </p>
                <button className="w-full text-sm py-3 text-black font-sans bg-yellow-400 rounded-md border-t-2 border-black font-bold">
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full h-full flex justify-center items-center no-underline"
                  >
                    Quick Shop
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default CategoryPage;
