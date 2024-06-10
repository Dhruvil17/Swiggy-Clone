import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Button = ({ itemCard, style }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const existingItem = cartItems.find(
        (item) => item.card.info.id === itemCard.card.info.id
    );

    const quantity = existingItem?.quantity || 0;

    const increment = () => {
        dispatch(addItem(itemCard));
    };

    const decrement = () => {
        dispatch(removeItem(itemCard));
    };

    return (
        <div>
            {quantity === 0 ? (
                <button
                    onClick={increment}
                    className={`bg-white font-extrabold text-green-500 absolute hover:bg-gray-200 py-2 px-10 rounded-md ${style} ml-5`}>
                    ADD
                </button>
            ) : (
                <div className="relative">
                    <div className={`m-auto absolute ml-[1.35rem] ${style}`}>
                        <button
                            onClick={decrement}
                            className="bg-white font-extrabold text-green-500 hover:bg-gray-200 py-2 px-[0.95rem] rounded-l">
                            -
                        </button>
                        <button className="bg-white font-extrabold text-green-500 py-2 px-[0.95rem]">
                            {quantity}
                        </button>
                        <button
                            onClick={increment}
                            className="bg-white font-extrabold text-green-500 hover:bg-gray-200 py-2 px-[0.85rem] rounded-r">
                            +
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Button;
