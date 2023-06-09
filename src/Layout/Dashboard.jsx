import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUsers } from 'react-icons/fa';
import {ImSpoonKnife} from 'react-icons/im';
import {GoThreeBars} from 'react-icons/go';
import {AiFillBook} from 'react-icons/ai';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin]= useAdmin();
    console.log(isAdmin)
    //  load data from server and check if user is admin
    // const isAdmin = false;

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin?
                            <>
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/additem"><ImSpoonKnife></ImSpoonKnife> Add an Item</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><GoThreeBars></GoThreeBars> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/"><AiFillBook></AiFillBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                               
                            </>
                :
                <>
                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>

                    </li>

                </>
                    }
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                <li><NavLink to="/menu"> Our Menu</NavLink></li>
                <li><NavLink to="/order/salad">Order Food</NavLink></li>

            </ul>

        </div>
        </div >
    );
};

export default Dashboard;