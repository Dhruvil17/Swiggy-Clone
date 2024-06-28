import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import RestaurantCard, { OpenRestaurantCheck } from "./RestaurantCard";

const Body = () => {
    //Superpowerful State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    const OpenRestaurant = OpenRestaurantCheck(RestaurantCard);

    const fetchListOfRestaurants = useFetchRestaurants();
    const onlineStatus = useOnlineStatus();

    const handleClick = async () => {
        // const fetchData = await fetch(
        //     "https://www.swiggy.com/dapi/restaurants/list/update",
        //     {
        //         method: "POST",
        //         body: JSON.stringify({
        //             lat: "23.080354194346093",
        //             lng: "72.53391958773136",
        //             nextOffset: "CJhlELQ4KIDguc2lhvzEYjCnEzgD",
        //             page_type: "DESKTOP_WEB_LISTING",
        //             filters: {},
        //             _csrf: "M7cLJLEx33Qy--uQdaU7wZP8IiL6Kr4_BLCyvUKY",
        //         }),
        //         mode: "no-cors",
        //     }
        // );
        // const data = await fetchData.json();
        // console.log(data);
        console.log("");
    };

    useEffect(() => {
        if (fetchListOfRestaurants) {
            setListOfRestaurants(fetchListOfRestaurants);
            setFilteredRestaurant(fetchListOfRestaurants);
        }
    }, [fetchListOfRestaurants]);

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!!! Please check your Internet
                connection.{" "}
            </h1>
        );
    }

    //Conditional Rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="mt-24 p-4 font-sans">
            <div className="flex mx-[7.5rem] p-4">
                <input
                    data-testid="searchInput"
                    className="m-4 px-4 py-2 border border-solid border-black text-center rounded-lg"
                    type="text"
                    placeholder="Search Restaurant"
                    value={searchRestaurant}
                    onChange={(event) => {
                        setSearchRestaurant(event.target.value);
                    }}
                />
                <button
                    className="my-4 mx-10 px-8 py-2 bg-green-400 rounded-lg hover:bg-green-500"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) =>
                                restaurant.info.name
                                    .toLowerCase()
                                    .includes(searchRestaurant.toLowerCase())
                        );
                        setFilteredRestaurant(filteredList);
                    }}>
                    Search
                </button>
                <div className="m-4 px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                    <button
                        className=""
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (restaurant) => restaurant.info.avgRating > 4.1
                            );
                            setFilteredRestaurant(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mx-10">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        to={"/restaurants/" + restaurant.info.id}
                        key={restaurant.info.id}>
                        <OpenRestaurant
                            data={restaurant}
                            isOpen={restaurant.info.isOpen}
                        />
                    </Link>
                ))}
            </div>
            <div className="flex justify-center p-4 my-4 bg-green-400 hover:bg-green-500 hover:cursor-pointer rounded-lg w-2/12 m-auto">
                <button onClick={handleClick}>Show More Restaurants</button>
            </div>
        </div>
    );
};

export default Body;
