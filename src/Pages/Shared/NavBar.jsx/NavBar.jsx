import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa'
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('user logged out')
            })
            .catch(error => console.log(error))
    }

    // loading data for the cart
    

    const NavOptions = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/order/salads">OUR SHOP</Link></li>
        <li><Link to="/"><button className="btn btn-ghost gap-2">
            <FaShoppingCart className="text-2xl relative" />
            <div className="absolute bottom-4 right-4 text-xs p-1 rounded-full bg-md bg-red-700">+{cart?.length || 0}</div>
        </button>
        </Link></li>
        {/* <span className="text-white">Welcome {user.displayName}</span> */}
        {
            user ?

                <li><Link onClick={handleLogout}>Logout</Link></li>
                : <li><Link to="login">Login</Link></li>
        }

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;