import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";

const FoodCard = ({ item }) => {
    const { _id, name, price, recipe, image } = item;
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart(); // [cart, refetch]
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {menuItemId: _id , name, price, email: user.email}
            fetch(`http://localhost:5000/carts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added to cart successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login to order the food!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: true })

                }
            })
        }

    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title ">{name}!</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 text-yellow-600 hover:text-yellow-500">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;