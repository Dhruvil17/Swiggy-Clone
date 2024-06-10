import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Test cases for Contact us Component", () => {
    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });

    // afterEach(() => {
    //     console.log("After Each");
    // });

    test("Should load Contact Us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    test("Should load input tag with Placeholder of name", () => {
        render(<Contact />);
        const name = screen.getByPlaceholderText("Enter your Name");
        expect(name).toBeInTheDocument();
    });

    test("Should load input tag with Placeholder of message", () => {
        render(<Contact />);
        const name = screen.getByPlaceholderText("Enter your Message");
        expect(name).toBeInTheDocument();
    });

    test("Should load submit button of Contact us component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });

    test("Should load submit button of Contact us component by using Role", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    test("Should load both the input tags of Contact us Component", () => {
        render(<Contact />);
        const inputTags = screen.getAllByRole("textbox");
        expect(inputTags.length).toBe(2);
    });
});
