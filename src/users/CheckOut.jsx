import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import { Elements } from '@stripe/react-stripe-js';
import { Helmet } from "react-helmet";

const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div className="mt-20">
      <Helmet><title>MedCard | CheckOut Form</title></Helmet>
      <section heading="payment">
        <div>
          <Elements stripe={stripPromise}>
            <CheckOutForm></CheckOutForm>
          </Elements>
        </div>
      </section>
    </div>
  );
};

export default Payment;
