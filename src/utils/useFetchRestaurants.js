import { RESTAURANTS } from "./constants";
import { useEffect, useState } from "react";

const useFetchRestaurants = () => {
    const [fetchListOfRestaurants, setFetchListOfRestaurants] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS);
        const json = await data.json();
        setFetchListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    return fetchListOfRestaurants;
};

export default useFetchRestaurants;
