import React, { useState } from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">EggHub</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-yellow-500">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-yellow-500">Products</Link>
              <Link to="/about" className="text-gray-700 hover:text-yellow-500">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-yellow-500">
                <User className="h-6 w-6" />
              </Link>
              <button 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </button>
              <button className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;