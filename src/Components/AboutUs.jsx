import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-gray-100 py-12 px-6 md:px-16 mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Welcome to <span className="text-blue-600 font-semibold">MediCart</span>, your one-stop solution for purchasing medicines and healthcare products online. Our mission is to provide high-quality, authentic products with fast and reliable delivery.
        </p>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://i.ibb.co.com/ZzBVB39L/Healthcare-professionalshaking-hands-William-Russell.jpg" alt="About MediCart" className="rounded-lg shadow-lg w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-4">
              At MediCart, we strive to revolutionize the way people access medicines. Our goal is to make healthcare products **affordable, accessible, and hassle-free** for everyone.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>100% genuine and verified medicines</li>
              <li>Fast and secure delivery</li>
              <li>24/7 customer support</li>
              <li>Easy order tracking</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-center text-gray-800">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            {[
              { name: "Jahid Hasan Rifat", role: "Founder & CEO", img: "https://i.ibb.co.com/FbyJ0Y5w/young-bearded-man-with-white-t-shirt-273609-7190.jpg" },
              { name: "John Doe", role: "Chief Pharmacist", img: "https://i.ibb.co.com/XkzmdNDZ/young-bearded-man-with-striped-shirt-273609-5677-1.jpg" },
              { name: "Jane Smith", role: "Operations Manager", img: "https://i.ibb.co.com/FkcNFv4t/istockphoto-1364917563-612x612.jpg" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={member.img} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Join Us in Our Journey</h3>
          <p className="text-gray-600 mt-2">Be a part of the future of healthcare with MediCart.</p>
          {/* <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button> */}
        </div>
      </div>
    </section>
    );
};

export default AboutUs;