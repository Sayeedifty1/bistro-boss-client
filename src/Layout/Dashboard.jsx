import { NavLink, Outlet } from "react-router-dom";
import { FaHome , FaCalendarAlt , FaWallet, FaShoppingCart } from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";
import {GiShoppingBag} from "react-icons/gi";
import {MdEmail} from "react-icons/md";
const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* page content */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                        </NavLink>

                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"><AiOutlineMenu></AiOutlineMenu> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><GiShoppingBag></GiShoppingBag>Shop</NavLink></li>
                    <li><NavLink to="/order/salad"><MdEmail></MdEmail>Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;