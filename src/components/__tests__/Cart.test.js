import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

describe("Should test the Cart Flow of the application", () => {
    test("Should render the Restaurant Menu Items", async () => {
        await act(async () => render(<RestaurantMenu />));
    });
    test("Should click the Accordian Header", async () => {
        await act(async () =>
            render(
                <Provider store={appStore}>
                    <RestaurantMenu />
                </Provider>
            )
        );
        const accordianHeader = screen.getByText("Recommended (20)");
        fireEvent.click(accordianHeader);
        const foodItems = screen.getAllByTestId("restaurant-category");
        expect(foodItems.length).toBe(13);
    });
    test("Should find all the ADD buttons", async () => {
        await act(async () =>
            render(
                <Provider store={appStore}>
                    <RestaurantMenu />
                </Provider>
            )
        );
        const accordianHeader = screen.getByText("Recommended (20)");
        fireEvent.click(accordianHeader);

        const addButtons = screen.getAllByRole("button");
        expect(addButtons.length).toBe(20);
    });
    test("Should add 1 item to Cart", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <RestaurantMenu />
                    </Provider>
                </BrowserRouter>
            )
        );
        const accordianHeader = screen.getByText("Recommended (20)");
        fireEvent.click(accordianHeader);

        const addButtons = screen.getAllByRole("button", { name: "ADD" });
        fireEvent.click(addButtons[0]);

        const headerText = screen.getByText("Cart (1)");
        expect(headerText).toBeInTheDocument();

        const minusButton = screen.getByRole("button", { name: "-" });
        const testButton = screen.getByRole("button", { name: "1" });
        const plusButton = screen.getByRole("button", { name: "+" });

        expect(minusButton).toBeInTheDocument();
        expect(testButton).toBeInTheDocument();
        expect(plusButton).toBeInTheDocument();
    });
    test("Should add 2 items to Cart", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <RestaurantMenu />
                    </Provider>
                </BrowserRouter>
            )
        );
        const accordianHeader = screen.getByText("Recommended (20)");
        fireEvent.click(accordianHeader);

        const addButtons = screen.getAllByRole("button", { name: "ADD" });
        fireEvent.click(addButtons[2]);

        const headerText = screen.getByText("Cart (2)");
        expect(headerText).toBeInTheDocument();
    });
    test("Should add 3 items to Cart", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <RestaurantMenu />
                    </Provider>
                </BrowserRouter>
            )
        );
        const accordianHeader = screen.getByText("Recommended (20)");
        fireEvent.click(accordianHeader);

        const addButtons = screen.getAllByRole("button", { name: "ADD" });
        fireEvent.click(addButtons[2]);

        const headerText = screen.getByText("Cart (3)");
        expect(headerText).toBeInTheDocument();
    });
    test("Should test the Cart Component", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <RestaurantMenu />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        );
        const accordianHeader = screen.getByText("Recommended (20)");
        fireEvent.click(accordianHeader);

        const addButtons = screen.getAllByRole("button", { name: "ADD" });
        fireEvent.click(addButtons[0]);

        const foodItems = screen.getAllByTestId("restaurant-item");
        expect(foodItems.length).toBe(24);

        const emptyCart = screen.getByRole("button", { name: "Clear Cart" });
        fireEvent.click(emptyCart);

        const updatedFoodItems = screen.getAllByTestId("restaurant-item");
        expect(updatedFoodItems.length).toBe(20);

        const emptyCartText = screen.getByText("Your cart is empty");
        expect(emptyCartText).toBeInTheDocument();
    });
    test("Should click on the Accordian of the item having categories", async () => {
        await act(async () =>
            render(
                <Provider store={appStore}>
                    <RestaurantMenu />
                </Provider>
            )
        );
        const accordianHeader = screen.getByText(
            "Meals and Deals : Better With Pepsi (Save upto 38%) (3)"
        );
        fireEvent.click(accordianHeader);

        const addButtons = screen.getAllByRole("button");
        expect(addButtons.length).toBe(7);
    });
});
