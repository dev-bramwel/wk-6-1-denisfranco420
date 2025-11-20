import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import OrderDetailPage from "../OrderDetailPage";
import { StoreContext } from "../../store/StoreProvider";

test("shows not-found when order doesn't exist", () => {
  render(
    <StoreContext.Provider value={{ orders: [] }}>
      <MemoryRouter initialEntries={["/orders/123"]}>
        <Routes>
          <Route path="/orders/:id" element={<OrderDetailPage />} />
        </Routes>
      </MemoryRouter>
    </StoreContext.Provider>
  );

  expect(screen.getByText(/We couldn't find this order/)).toBeInTheDocument();
  expect(screen.getByText(/Go back to catalog/)).toBeInTheDocument();
});

test("renders order details when order exists", () => {
  const order = {
    id: "o1",
    status: "Paid",
    items: [
      {
        id: "i1",
        book: { title: "T1", author: "A1", price: 5, image: "img.jpg" },
        quantity: 2,
      },
    ],
    totals: { subtotal: 10, shippingFee: 4.99, tax: 0.8, total: 15.79 },
    shipping: {
      fullName: "John",
      address: "1 Road",
      city: "Nairobi",
      postalCode: "00100",
      country: "Kenya",
      email: "a@b.com",
    },
    createdAt: new Date().toISOString(),
  };

  render(
    <StoreContext.Provider value={{ orders: [order] }}>
      <MemoryRouter initialEntries={[`/orders/${order.id}`]}>
        <Routes>
          <Route path="/orders/:id" element={<OrderDetailPage />} />
        </Routes>
      </MemoryRouter>
    </StoreContext.Provider>
  );

  expect(screen.getByText(`Order ${order.id}`)).toBeInTheDocument();
  expect(screen.getByText(/Items/)).toBeInTheDocument();
  expect(screen.getByText("T1")).toBeInTheDocument();
  expect(screen.getByText(/Summary/)).toBeInTheDocument();
  // Page contains multiple "Shipping" headers (summary header and shipping section) — assert at least one exists
  const shippingHeadings = screen.getAllByText(/Shipping/);
  expect(shippingHeadings.length).toBeGreaterThan(0);
  expect(screen.getByText("John")).toBeInTheDocument();
});
