import React, { useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Provider/AuthProvider';

const SellerHome = () => {
  const { user } = useContext(AuthContext);

  // Fetch payment history using react-query
  const { data: payments = [], isLoading, isError, error } = useQuery({
    queryKey: ['userPayment', user?.email],
    queryFn: async () => {
      try {
        if (user?.email) {
          const response = await axios.get(`https://y-green-theta.vercel.app/userPayment/${user.email}`);
          return response.data;
        } else {
          toast.error('User email is not available');
          return [];
        }
      } catch (err) {
        toast.error('Failed to fetch payment history');
        throw err;
      }
    },
    enabled: !!user?.email,
  });

  // Handle loading state
  if (isLoading) {
    return <p className="text-center text-gray-600 mt-5">Loading payment history...</p>;
  }

  // Handle error state
  if (isError) {
    return <p className="text-center text-red-500 mt-5">Error fetching payment history: {error?.message}</p>;
  }

  // Calculate total paid and pending amounts
  const paidTotal = payments
    .filter(payment => payment.status === 'paid')
    .reduce((acc, payment) => acc + payment.price, 0);

  const pendingTotal = payments
    .filter(payment => payment.status === 'pending')
    .reduce((acc, payment) => acc + payment.price, 0);

  const totalRevenue = paidTotal + pendingTotal;

  return (
    <div>
      <Helmet>
        <title>MedCard | Seller Home</title>
      </Helmet>

      <div className="p-5">
        <h2 className="text-3xl font-bold mb-5">Welcome, {user?.name}!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Revenue */}
          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Total Revenue</h3>
            <p className="text-2xl font-bold text-blue-600">${totalRevenue.toFixed(2)}</p>
          </div>

          {/* Total Paid */}
          <div className="bg-green-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Total Paid Revenue</h3>
            <p className="text-2xl font-bold text-green-600">${paidTotal.toFixed(2)}</p>
          </div>

          {/* Total Pending */}
          <div className="bg-yellow-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Total Pending Revenue</h3>
            <p className="text-2xl font-bold text-yellow-600">${pendingTotal.toFixed(2)}</p>
          </div>
        </div>

        {/* Payment Details */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Payment History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">Item Name</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{payment.itemName.join(', ')}</td>
                    <td className="py-2 px-4">${payment.price}</td>
                    <td className={`py-2 px-4 font-bold ${payment.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>{payment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
