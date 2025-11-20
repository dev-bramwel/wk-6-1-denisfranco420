import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookCard from "../BookCard";
import { formatCurrency } from "../../config/currency";

const sampleBook = {
  id: "1",
  title: "Test Book",
  author: "Author Name",
  description: "A short description",
  image: "cover.jpg",
  price: 9.99,
};

test("renders book details and handles purchase flow", async () => {
  // Make the purchase promise resolve after a short delay so loading state is observable
  const onPurchase = jest
    .fn()
    .mockImplementation(() => new Promise((res) => setTimeout(res, 50)));
  render(<BookCard book={sampleBook} onPurchase={onPurchase} />);

  // Basic rendering
  expect(screen.getByTestId("book-title")).toHaveTextContent("Test Book");
  expect(screen.getByText(/by Author Name/)).toBeInTheDocument();
  // Match the numeric price rather than exact spacing/currency symbol formatting
  expect(screen.getByTestId("book-price")).toHaveTextContent(/9\.99/);

  const button = screen.getByTestId("book-buy-button");
  expect(button).toBeEnabled();

  // Click purchase and verify loading state and callback
  await userEvent.click(button);
  expect(onPurchase).toHaveBeenCalledWith(sampleBook);
  // Wait for the loading state to apply (button disabled)
  await waitFor(() => expect(button).toBeDisabled());

  // Wait for promise to resolve and UI to return to normal
  await waitFor(() => expect(button).toHaveTextContent(/Buy Now/));
  expect(button).toBeEnabled();
});
