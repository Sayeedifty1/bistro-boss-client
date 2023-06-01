import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";


// TODO:provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading="Please Process Payment" heading="Payment"></SectionTitle>
            <h2 className="text-3xl">teka de teka de</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;