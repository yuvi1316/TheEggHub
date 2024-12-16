import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Farm Fresh White Eggs',
    price: 69 ,
    quantity: '12 pieces',
    image: 'https://imgs.search.brave.com/jB7guXiW-Qlujp4W0l-I8tFOpCFKLczgir_VhIpjKXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg2/ODQ4NTE4L3Bob3Rv/L2VnZ3MtY2FydG9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1fMmxsYUJ2eV9W/WnFreEljdENPV2JF/c295bXRaMnNiaFp0/dWEwajZ4TEVZPQ',
  },
  {
    id: 2,
    name: 'Organic Brown Eggs',
    price: 99,
    quantity: '12 pieces',
    image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&q=80',
  },

];

const Products = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.quantity}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Rs. {product.price}</span>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;