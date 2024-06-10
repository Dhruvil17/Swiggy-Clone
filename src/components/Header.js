import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    const sumOfCartItems = cartItems
        .map((cartItem) => cartItem.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="flex justify-between items-center border border-double shadow-custom fixed top-0 left-0 w-full bg-white z-50">
            <div>
                <img className="ml-32 w-24" src={LOGO_URL} alt="logo-image" />
            </div>
            <div>
                <ul className="mr-40 flex items-center">
                    <li className="m-2 px-4">
                        Online Status {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="m-2 px-4 hover:text-gray-700">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-2 px-4 hover:text-gray-700">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="m-2 px-4 hover:text-gray-700">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="m-2 px-4 hover:text-gray-700">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="m-2 px-4 hover:text-gray-700 font-bold">
                        <Link to="/cart">Cart ({sumOfCartItems})</Link>
                    </li>
                    <button
                        className="m-2 px-4 hover:text-gray-700"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login");
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
