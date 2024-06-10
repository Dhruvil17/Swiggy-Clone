import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantsCardMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("Should search the cards with the text of pizza in my Body Component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("restaurant-card");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchButton = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("restaurant-card");

    expect(cardsAfterSearch.length).toBeGreaterThan(1);
});

test("Should filter the Top rated Restaurants from the Body Component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("restaurant-card");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedRestaurantButton = screen.getByRole("button", {
        name: "Top Rated Restaurants",
    });

    fireEvent.click(topRatedRestaurantButton);

    const cardsAfterFilter = screen.getAllByTestId("restaurant-card");
    expect(cardsAfterFilter.length).toBeGreaterThan(5);
});
