import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    navigate('/checkout');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {state.items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center mb-4 p-2 border-b">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      Rs. {item.price} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    className="text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold">Rs. {state.total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;