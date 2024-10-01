import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const fetchProductsByCategory = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products by category:', error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <>
    <div className='p-4'>
  <h1 className='text-2xl font-bold'>Products in {categoryName}</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
    {products.map(product => (
      <div key={product.id} className='w-full max-w-sm rounded-md border-2 border-blue-500'>
        <img 
          src={product.images} 
          alt={product.title} 
          className='w-full h-80 object-cover border-2 border-black rounded-t-md'/>
        <h2 className='text-lg font-bold p-2'>{product.title}</h2>
      </div>
    ))}
  </div>
</div>
    </>
  );
};
export default CategoryPage;
