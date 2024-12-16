import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real application, you would integrate with a payment processor here
      const response = await fetch('http://localhost:5000/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1, // Get from auth context in real app
          total_amount: state.total,
          items: state.items,
        }),
      });

      if (response.ok) {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/order-success');
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  Rs. {item.price} x {item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>Rs. {state.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="MM/YY"
                  value={paymentDetails.expiry}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">CVV</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="123"
                  value={paymentDetails.cvv}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Name on Card</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="John Doe"
                value={paymentDetails.name}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600"
            >
              Pay Rs. {state.total.toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;