'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Apt 4B, New York, NY 10001',
    profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg'
  });
  const [formData, setFormData] = useState({ ...user });

  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: '#ORD-12345',
      date: '2023-05-15',
      status: 'Delivered',
      total: '$125.99',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: '$99.99' },
        { name: 'Phone Case', quantity: 2, price: '$13.00' }
      ]
    },
    {
      id: '#ORD-12346',
      date: '2023-06-02',
      status: 'Shipped',
      total: '$78.50',
      items: [
        { name: 'Smart Watch', quantity: 1, price: '$78.50' }
      ]
    }
  ]);

  useEffect(() => {
    // In a real app, you would fetch user data here
    setFormData({ ...user });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    setIsEditing(false);
    // In a real app, you would send this to your backend
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePhoto: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
            <div className="flex flex-col sm:flex-row items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative mb-4 sm:mb-0 sm:mr-6"
              >
                <img 
                  src={user.profilePhoto} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full border-4 border-white border-opacity-50 object-cover shadow-lg"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer">
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </label>
                )}
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-indigo-100">{user.email}</p>
                {!isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditing(true)}
                    className="mt-3 px-4 py-2 text-black bg-white bg-opacity-20 rounded-md text-sm font-medium hover:bg-opacity-30 transition"
                  >
                    Edit Profile
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'profile' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'orders' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                My Orders
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' ? (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">Address</label>
                          <textarea
                            name="address"
                            rows={3}
                            value={formData.address}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save Changes
                        </motion.button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                          <p className="mt-1 text-sm text-gray-900">{user.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Email</h3>
                          <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                          <p className="mt-1 text-sm text-gray-900">{user.phone}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Address</h3>
                          <p className="mt-1 text-sm text-gray-900">{user.address}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-lg font-medium text-gray-900">Order History</h2>
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No orders yet</h3>
                      <p className="mt-1 text-sm text-gray-500">Your order history will appear here</p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {orders.map((order) => (
                        <motion.div 
                          key={order.id}
                          whileHover={{ y: -2 }}
                          className="bg-gray-50 rounded-lg p-6 shadow-sm"
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">Order {order.id}</h3>
                              <p className="text-sm text-gray-500">Placed on {order.date}</p>
                            </div>
                            <div className="mt-3 sm:mt-0">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 border-t border-gray-200 pt-4">
                            <h4 className="sr-only">Items</h4>
                            <ul className="space-y-4">
                              {order.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-center">
                                  <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:justify-between">
                                    <div>
                                      <h5 className="text-sm font-medium text-gray-900">{item.name}</h5>
                                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="mt-1 sm:mt-0 text-sm font-medium text-gray-900">{item.price}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <p className="text-sm text-gray-500">Total {order.items.length} items</p>
                            <p className="text-lg font-medium text-gray-900">{order.total}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;