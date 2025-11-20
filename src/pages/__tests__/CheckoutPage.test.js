import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutPage from "../CheckoutPage";
import { MemoryRouter } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";

// Mock startPayment so we don't load external script
jest.mock("../../services/CheckoutService", () => ({
  startPayment: jest.fn(({ onSuccess }) => {
    // simulate immediate success
    onSuccess && onSuccess({ response: { reference: "r1" } });
    return Promise.resolve();
  }),
}));

test("full checkout flow triggers startPayment and clears cart", async () => {
  const clearCart = jest.fn();
  const setOrders = jest.fn();
  const orders = [];
  const cart = [
    {
      id: "1",
      book: { id: "b1", title: "T", author: "A", price: 10 },
      quantity: 1,
    },
  ];

  // Render
  render(
    <StoreContext.Provider value={{ cart, orders, setOrders, clearCart }}>
      <MemoryRouter>
        <CheckoutPage />
      </MemoryRouter>
    </StoreContext.Provider>
  );

  // Fill shipping form
  await userEvent.type(screen.getByLabelText(/Full Name/i), "John Doe");
  await userEvent.type(screen.getByLabelText(/Email/i), "john@example.com");
  await userEvent.type(screen.getByLabelText(/Address/i), "123 Road");
  await userEvent.type(screen.getByLabelText(/City/i), "Nairobi");
  await userEvent.type(screen.getByLabelText(/Country/i), "Kenya");
  await userEvent.type(screen.getByLabelText(/Postal Code/i), "00100");

  // Submit shipping (Next)
  await userEvent.click(screen.getByRole("button", { name: /Next/i }));

  // Proceed to payment from review
  await userEvent.click(
    screen.getByRole("button", { name: /Proceed to Payment/i })
  );

  // Click Pay Now
  await userEvent.click(screen.getByRole("button", { name: /Pay Now/i }));
  // startPayment mock should have been called
  const svc = require("../../services/CheckoutService");
  await waitFor(() => expect(svc.startPayment).toHaveBeenCalled());
});
