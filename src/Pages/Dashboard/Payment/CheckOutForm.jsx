import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import './checkOutForm.css'

const CheckOutForm = ({price , cart}) => {

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [cardError, setCardError] = useState(null);
    const[axiosSecure]= useAxiosSecure();
    const [clientSecret , setClientSecret] = useState('');
    const [processing , setProcession] = useState(false)
    const [transactionId , setTransactionId] = useState('')
   console.log(stripe)
    useEffect(()=>{
        if(price> 0){
            axiosSecure.post('/create-payment-intent',{price})
        .then(res=> {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
        }
        
    },[axiosSecure, price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        console.log("card", card)

        // Use your card Element with other Stripe.js APIs
        const { error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            
            setCardError(null);
        }
        setProcession(true)
        // for exception card payment
        const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                 email: user?.email || 'anonymous',
                 name: user?.displayName || 'anonymous',
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
          }
          console.log('payment intent', paymentIntent)
          setProcession(false)
          if(paymentIntent.status ==="succeeded"){
            
            setTransactionId(paymentIntent.id)
            // save payment info to the server
            const payment = {email:user?.email, 
                transactionId: transactionId,
                price,
                date: new Date,
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItem: cart.map(item => item.menuItemId),
                orderStatus:'service Pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments' , payment)
            .then(res=>{
                console.log(res.data)
                if(res.data.InsertResult.insertedId){
                    console.log('added')
                }
            } )

          }
    }



    return (
        <div>
            <form className="w-2/3 mx-auto m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-info btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-800">Transaction completed with transaction Id: <span className="text-black">{transactionId}</span></p>
            }
        </div>
    );
};

export default CheckOutForm;