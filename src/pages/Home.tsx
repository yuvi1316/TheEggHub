import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="relative h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&q=80"
          alt="Fresh eggs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Farm Fresh Eggs</h1>
            <p className="text-xl mb-8">Directly from our farm to your table</p>
            <Link 
              to="/products"
              className="bg-yellow-500 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-yellow-600"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Eggs?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1509479100390-f83a8349e79c?auto=format&fit=crop&q=80" alt="Fresh" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Farm Fresh</h3>
            <p className="text-gray-600">Eggs collected daily from our free-range hens</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80" alt="Organic" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
            <p className="text-gray-600">No hormones or artificial feeds used</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80" alt="Delivery" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same day delivery to your doorstep</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;