import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-yellow-500 mr-3" />
                <p>Sinhgad College, Vadgaon (Budruk), Off Sinhgad Road, Pune - 411041, Maharashtra, India</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-yellow-500 mr-3" />
                <p> 9975524500 </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-yellow-500 mr-3" />
                <p>info@egghub.com</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;