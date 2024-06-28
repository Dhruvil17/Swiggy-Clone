import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantMenu = () => {
    const [showItemsIndex, setShowItemsIndex] = useState(null);

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
        resInfo?.cards[2]?.card?.card?.info;

    const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

    const filteredRestaurants = cards.filter(
        (card) =>
            card?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            card?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    return (
        <div className="mt-36 px-[22%]">
            <div className="text-center mb-10">
                <h1 className="font-bold text-2xl">{name}</h1>
                <p className="my-2">
                    <FontAwesomeIcon className="text-green-800" icon={faStar} />{" "}
                    {avgRating + " (" + totalRatingsString + ")"},{" "}
                    {costForTwoMessage}
                </p>
                <p className="my-2">{cuisines.join(", ")}</p>
            </div>

            {filteredRestaurants.map((card, index) => (
                <RestaurantCategory
                    key={card?.card?.card?.title}
                    data={card}
                    showItems={index === showItemsIndex && true}
                    setItemsIndex={setShowItemsIndex}
                    index={index}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
