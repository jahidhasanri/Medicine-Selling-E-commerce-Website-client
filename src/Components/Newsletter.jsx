import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email!");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail(""); // Clear input after subscription
  };

  return (
    <div className="bg-slate-100 mt-3">
    <div className=" container mx-auto text-white py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-600">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-lg text-gray-600">Get the latest updates, offers, and health tips delivered to your inbox.</p>
      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          className="w-full md:w-1/3 px-4 py-3 text-gray-900 rounded-lg focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600  px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>

    </div>
  );
};

export default Newsletter;
