import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact & Customer Support</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-4">
            If you have any questions or need assistance, feel free to contact our customer support.
          </p>
          <div className="flex items-center gap-3 mb-2">
            <FaPhoneAlt className="text-blue-600" />
            <span className="text-gray-800 font-medium">+8801731847198</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-blue-600" />
            <span className="text-gray-800 font-medium">support@medicart.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <span className="text-gray-800 font-medium">Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
