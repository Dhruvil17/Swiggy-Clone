import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantCategory = ({ data, showItems, setItemsIndex, index }) => {
    const handleClick = () => {
        setItemsIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const { card } = data?.card;
    const { title } = card;

    return (
        <div
            data-testid="restaurant-category"
            className="shadow-lg rounded-xl m-4 pl-[4%] py-4 bg-gray-100">
            <div
                className={"flex justify-between mb-5 font-bold cursor-pointer"}
                onClick={handleClick}>
                <span>
                    {title} (
                    {card?.itemCards?.length || card?.categories?.length})
                </span>
                <span className="mr-[5%]">
                    {card?.itemCards && showItems ? "⬆️" : "⬇️"}
                </span>
            </div>
            {showItems && (
                <div>
                    {card?.itemCards?.map((itemCard, i) => (
                        <div key={itemCard?.card?.info?.id}>
                            <RestaurantItemCard
                                itemCard={itemCard}
                                isLastCard={i === card?.itemCards?.length - 1}
                            />
                        </div>
                    )) ||
                        card?.categories?.map((category) => (
                            <div key={category.title}>
                                <div>
                                    <p className="font-bold mb-4">
                                        {category?.title} (
                                        {category?.itemCards?.length})
                                    </p>
                                    {category?.itemCards?.map((itemCard, i) => (
                                        <div key={itemCard?.card?.info?.id}>
                                            <RestaurantItemCard
                                                itemCard={itemCard}
                                                isLastCard={
                                                    i ===
                                                    category?.itemCards
                                                        ?.length -
                                                        1
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;
