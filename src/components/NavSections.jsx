import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavSections = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategoriesAndProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products;
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    fetchCategoriesAndProducts();
  }, []);

  return (
    <div>
      <div className='bg-black text-white'>
        <ul className='font-sans flex justify-evenly items-center text-sm font-bold p-2'>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category}`} className='text-white cursor-pointer no-underline'>{capitalizeFirstLetter(category)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavSections;
