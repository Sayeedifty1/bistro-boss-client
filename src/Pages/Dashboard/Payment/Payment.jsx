import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";


// TODO:provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0); //how does reduce work
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading="Please Process Payment" heading="Payment"></SectionTitle>
            <h2 className="text-3xl">teka de teka de</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                cart={cart}
                price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;