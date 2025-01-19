import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className="md:w-1/2 mx-auto">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;