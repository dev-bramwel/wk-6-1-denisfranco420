import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartPage from "../CartPage";
import { StoreContext } from "../../store/StoreProvider";

const sampleBook = {
  id: "b1",
  title: "S Book",
  author: "Auth",
  image: "i.jpg",
  price: 5,
};

import { MemoryRouter } from "react-router-dom";
test("shows empty cart message when cart is empty", () => {
  render(
    <StoreContext.Provider value={{ cart: [] }}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </StoreContext.Provider>
  );
  expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
});

test("renders cart items and calls update/remove handlers", async () => {
  const updateCartQuantity = jest.fn();
  const removeFromCart = jest.fn();
  const cart = [{ id: "1", book: sampleBook, quantity: 2 }];

  render(
    <StoreContext.Provider value={{ cart, updateCartQuantity, removeFromCart }}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </StoreContext.Provider>
  );

  expect(screen.getByText("S Book")).toBeInTheDocument();
  expect(screen.getByText(/Subtotal/)).toBeInTheDocument();

  const input = screen.getByDisplayValue("2");
  await userEvent.clear(input);
  await userEvent.type(input, "3");
  expect(updateCartQuantity).toHaveBeenCalled();

  const remove = screen.getByText("Remove");
  await userEvent.click(remove);
  expect(removeFromCart).toHaveBeenCalled();
});
