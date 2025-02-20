import React, { useState } from "react";

const faqsData = [
  {
    question: "How can I order medicines online?",
    answer: "You can order medicines by searching for the required product, adding it to the cart, and proceeding to checkout with a secure payment method.",
  },
  {
    question: "Do you provide home delivery?",
    answer: "Yes, we offer home delivery services in selected locations. Delivery charges may vary based on your location.",
  },
  {
    question: "Can I return a product if it's damaged?",
    answer: "Yes, if you receive a damaged or wrong product, you can return it within 7 days for a full refund or replacement.",
  },
  {
    question: "Are all medicines available without a prescription?",
    answer: "No, prescription medicines require a valid doctor's prescription before purchase.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Credit/Debit cards, Mobile Banking (bKash, Nagad, Rocket), and Cash on Delivery.",
  },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
   
     const toggleFAQ = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };
   
     return (
      <div className=" bg-gray-50">
        <div className=" my-12 container mx-auto px-6 ">
         <h2 className="text-3xl font-bold text-center  mb-8">Frequently Asked Questions</h2>
         <div className="space-y-4">
           {faqsData.map((faq, index) => (
             <div key={index} className="border rounded-lg p-4 shadow-md">
               <button
                 onClick={() => toggleFAQ(index)}
                 className="flex justify-between items-center w-full text-lg font-semibold focus:outline-none"
               >
                 {faq.question}
                 <span className="text-blue-500">{openIndex === index ? "−" : "+"}</span>
               </button>
               {openIndex === index && (
                 <p className="mt-2 text-gray-700">{faq.answer}</p>
               )}
             </div>
           ))}
         </div>
       </div>
      </div>
     );
};

export default Faqs;