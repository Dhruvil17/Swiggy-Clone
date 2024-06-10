import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantCategoryMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

describe("Should test the Restaurant Food item without Image", () => {
    test("Should test the Drinks Food Item", async () => {
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

        const accordianHeader = screen.getByText("Drinks (4)");
        fireEvent.click(accordianHeader);

        const addButtons = screen.getAllByRole("button", { name: "ADD" });
        fireEvent.click(addButtons[3]);

        const headerText = screen.getByText("Cart (1)");
        expect(headerText).toBeInTheDocument();
    });
});
