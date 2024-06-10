import RestaurantCard, { OpenRestaurantCheck } from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should render the Restaurant Card Component with Mock Data", () => {
    render(<RestaurantCard info={MOCK_DATA.info} />);
    const restaurantName = screen.getByText("Pizza Hut");
    expect(restaurantName).toBeInTheDocument();
});

test("Should render the Open Restaurant Card Component", () => {
    const OpenRestaurant = OpenRestaurantCheck(RestaurantCard);
    render(<OpenRestaurant data={MOCK_DATA} isOpen={MOCK_DATA.info.isOpen} />);
    const restaurantName = screen.getByText("Pizza Hut");
    expect(restaurantName).toBeInTheDocument();
});
