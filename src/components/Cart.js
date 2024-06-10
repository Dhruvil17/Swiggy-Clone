import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { clearItem } from "../utils/cartSlice";
import RestaurantItemCard from "./RestaurantItemCard";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const removeItems = () => {
        dispatch(clearItem());
    };

    return (
        <div>
            <div className="shadow-lg rounded-xl mt-36 p-6 bg-gray-100 w-6/12 mx-auto">
                {cartItems.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div>
                        <h1 className="font-bold text-2xl text-center">Cart</h1>
                        {cartItems.map((cartItem, i) => (
                            <div key={i} className="m-auto">
                                <RestaurantItemCard
                                    itemCard={cartItem}
                                    isLastCard={i === cartItems?.length - 1}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="w-6/12 m-auto">
                {cartItems.length !== 0 && (
                    <div>
                        <button
                            onClick={removeItems}
                            className="mt-8 mb-14 py-2 px-4 bg-red-500 rounded-lg m-left text-white hover:shadow-2xl hover:bg-red-700">
                            Clear Cart
                        </button>
                        <button
                            onClick={removeItems}
                            className="mt-8 mb-14 py-2 px-4 mx-10 bg-green-500 rounded-lg m-left text-white hover:shadow-2xl hover:bg-green-700">
                            Checkout Items
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
