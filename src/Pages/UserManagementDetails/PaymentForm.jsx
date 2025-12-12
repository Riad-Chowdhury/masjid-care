import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
// import { set } from "react-hook-form";
import { useLoaderData } from "react-router";
import { ClipLoader } from "react-spinners";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
const PaymentForm = ({ close }) => {
  const { _id, defaultFee, name, number } = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const amount = defaultFee * 100;
  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!stripe || !element) {
      return;
    }
    const card = element.getElement(CardElement);

    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    // confirm card payment
    const res = await axiosSecure.post("/create-payment-intent", {
      amount,
      id: _id,
    });
    const clientSecret = res.data.clientSecret;
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name,
          number,
        },
      },
    });
    if (result.error) {
      setError(result.error.message);
    } else {
      setError("");
      if (result.paymentIntent.status) {
        alert("ok");
        console.log(result);
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="mb-4 border p-4 rounded-lg"></CardElement>
        <div className="flex justify-between">
          <button
            type="submit"
            className="btn btn-primary "
            disabled={!stripe || loading}
          >
            {loading ? <ClipLoader size={24} /> : `Pay ${defaultFee} TK`}
          </button>

          <button onClick={close} type="button" className="btn btn-primary">
            Cancel
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
