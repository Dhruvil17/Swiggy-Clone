import { EMPTYCART } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="text-center">
            <img
                className="m-auto w-[20rem] pt-24 pb-10"
                src={EMPTYCART}
                alt="Empty-Cart"
            />
            <h1 className="font-bold text-2xl m-2 p-2">Your cart is empty</h1>
            <p className="pb-6">
                You can go to home page to view more restaurants
            </p>
            <button
                onClick={handleClick}
                className="bg-orange-400 m-4 py-2 px-6 rounded-lg text-white hover:shadow-2xl hover:bg-orange-600">
                See Restaurants Near You
            </button>
        </div>
    );
};

export default EmptyCart;
