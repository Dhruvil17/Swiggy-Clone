import { RESTAURANT_ITEM_CARD } from "../utils/constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const RestaurantItemCard = ({ itemCard, isLastCard }) => {
    const restaurantName = itemCard?.card?.info?.name;
    const price =
        itemCard?.card?.info?.price / 100 ||
        itemCard?.card?.info?.defaultPrice / 100;
    const rating = itemCard?.card?.info?.ratings?.aggregatedRating?.rating;
    const ratingCount =
        itemCard?.card?.info?.ratings?.aggregatedRating?.ratingCountV2;
    const description = itemCard?.card?.info?.description;
    const imageId = itemCard?.card?.info?.imageId;

    const trimmedDescription =
        description && description.length > 118
            ? description.substring(0, 118) + "..."
            : description;

    return (
        <div data-testid="restaurant-item">
            <div className="flex justify-between items-center mt-4 mb-6">
                <div className="mt-4 mb-10 w-9/12">
                    <span className="block">{restaurantName}</span>
                    <span>₹ {price}</span>
                    <div className="mt-4">
                        {rating && ratingCount && (
                            <p>
                                <span>
                                    <FontAwesomeIcon
                                        className="text-green-800"
                                        icon={faStar}
                                    />
                                    {" " + rating}
                                </span>
                                <span>{" (" + ratingCount + ")"}</span>
                            </p>
                        )}
                    </div>
                    <p className="mt-4 mr-[20%] max-w-2xl">
                        {trimmedDescription}
                    </p>
                </div>
                <div className="w-3/12">
                    <Button
                        itemCard={itemCard}
                        style={imageId ? "mt-[8.5rem]" : "mt-[-1rem]"}
                    />

                    <div>
                        {imageId && (
                            <img
                                src={RESTAURANT_ITEM_CARD + imageId}
                                className="w-40 h-40 rounded-lg"
                            />
                        )}
                    </div>
                </div>
            </div>
            {!isLastCard && <div className="border border-gray-200"></div>}
        </div>
    );
};

export default RestaurantItemCard;
